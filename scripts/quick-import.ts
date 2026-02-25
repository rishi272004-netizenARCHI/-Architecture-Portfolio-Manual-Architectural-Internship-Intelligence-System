import fs from 'fs';
import path from 'path';
import { db } from '../src/lib/db';

function generateId(): string {
  return `firm_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 50);
}

function parseCSVLine(line: string): string[] {
  const values: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  values.push(current.trim());
  return values;
}

function normalizeScale(scale: string): string {
  if (!scale) return 'Mid-size';
  const s = scale.toLowerCase().trim();
  if (s.includes('solo') || s === '1-5') return 'Solo';
  if (s.includes('small') || s === '6-15') return 'Small';
  if (s.includes('mid-large')) return 'Mid-Large';
  if (s.includes('mid') || s.includes('medium') || s === '16-50') return 'Mid-size';
  if (s.includes('large') || s === '51-200') return 'Large';
  if (s.includes('international')) return 'International';
  if (s.includes('corporate') || s === '200+') return 'Corporate';
  return 'Mid-size';
}

function normalizeBim(bim: string): string {
  if (!bim) return 'Moderate';
  const b = bim.toLowerCase().trim();
  if (b === 'yes' || b.includes('heavy') || b.includes('full')) return 'Heavy';
  if (b === 'no' || b === 'none') return 'None';
  if (b.includes('partial') || b.includes('moderate')) return 'Moderate';
  return 'Moderate';
}

function determineTier(city: string): string {
  const metroCities = ['mumbai', 'delhi', 'new delhi', 'bangalore', 'bengaluru', 'chennai', 'hyderabad', 'kolkata', 'ahmedabad', 'pune', 'gurugram', 'noida', 'delhi ncr'];
  const regionalCities = ['jaipur', 'kochi', 'coimbatore', 'indore', 'surat', 'vadodara', 'mysuru', 'nagpur', 'lucknow', 'bhopal', 'chandigarh', 'goa', 'panjim', 'auroville'];
  
  const cityLower = city.toLowerCase();
  if (metroCities.some(m => cityLower.includes(m))) return 'Metro';
  if (regionalCities.some(r => cityLower.includes(r))) return 'Regional';
  return 'Emerging';
}

function cleanString(val: string | undefined): string | null {
  if (!val) return null;
  const cleaned = val.trim();
  if (cleaned === '' || cleaned.toLowerCase() === 'not public' || cleaned.toLowerCase() === 'n/a') return null;
  return cleaned;
}

async function main() {
  console.log('🚀 Starting firm import...\n');
  
  // Clear existing
  console.log('🗑️  Clearing existing firms...');
  await db.firm.deleteMany({});
  
  const seenNames = new Set<string>();
  const firmsToInsert: any[] = [];
  
  // Read NEW FIRM DETABASE.CSV
  console.log('📂 Reading NEW FIRM DETABASE.CSV...');
  const newDbPath = path.join(__dirname, '../upload/NEW FIRM DETABASE.CSV');
  const newDbContent = fs.readFileSync(newDbPath, 'utf-8');
  const newDbLines = newDbContent.split('\n');
  
  for (let i = 0; i < newDbLines.length; i++) {
    const line = newDbLines[i].trim();
    if (!line || line.startsWith('Firm Name,')) continue;
    
    const values = parseCSVLine(line);
    if (values.length < 6) continue;
    
    const name = values[0];
    if (!name || name.toLowerCase() === 'firm_name') continue;
    
    const normalized = normalizeName(name);
    if (seenNames.has(normalized)) continue;
    
    const city = values[1] || '';
    const state = values[2] || '';
    if (!city || !state) continue;
    
    firmsToInsert.push({
      id: generateId(),
      name,
      normalizedName: normalized,
      city,
      state,
      country: 'India',
      category: cleanString(values[4]),
      scaleCategory: normalizeScale(values[5]),
      tierCategory: determineTier(city),
      primaryTypology: cleanString(values[6]) || 'Residential',
      designOrientation: cleanString(values[7]) || 'Contemporary',
      technicalOrientation: 'Technical-heavy',
      bimIntensity: normalizeBim(values[8]),
      internshipOffered: cleanString(values[9]),
      website: cleanString(values[10]),
      officialEmail: cleanString(values[11]),
      applicationMethod: cleanString(values[12]),
      portfolioEmphasis: cleanString(values[13]),
      dataSource: 'NEW FIRM DETABASE.CSV',
      isActive: true,
    });
    
    seenNames.add(normalized);
  }
  
  console.log(`   Found ${firmsToInsert.length} firms from NEW FIRM DETABASE.CSV\n`);
  
  // Read older database
  console.log('📂 Reading firm_name,city,state,country,princi.CSV...');
  const oldDbPath = path.join(__dirname, '../upload/firm_name,city,state,country,princi.CSV');
  const oldDbContent = fs.readFileSync(oldDbPath, 'utf-8');
  const oldDbLines = oldDbContent.split('\n');
  
  let oldCount = 0;
  for (let i = 0; i < oldDbLines.length; i++) {
    const line = oldDbLines[i].trim();
    if (!line) continue;
    
    const values = parseCSVLine(line);
    if (!values[0] || values[0].toLowerCase() === 'firm_name') continue;
    
    const name = values[0];
    const normalized = normalizeName(name);
    if (seenNames.has(normalized)) continue;
    
    const city = values[1] || '';
    const state = values[2] || '';
    if (!city || !state || city.toLowerCase() === 'city') continue;
    
    firmsToInsert.push({
      id: generateId(),
      name,
      normalizedName: normalized,
      city,
      state,
      country: 'India',
      scaleCategory: normalizeScale(values[6]),
      tierCategory: determineTier(city),
      primaryTypology: cleanString(values[7]) || 'Residential',
      designOrientation: cleanString(values[9]) || 'Contemporary',
      technicalOrientation: cleanString(values[10]) || 'Technical-heavy',
      bimIntensity: normalizeBim(values[11]),
      principalArchitect: cleanString(values[4]),
      dataSource: 'firm_name,city,state,country,princi.CSV',
      isActive: true,
    });
    
    seenNames.add(normalized);
    oldCount++;
  }
  
  console.log(`   Found ${oldCount} additional firms\n`);
  
  // Insert in batches
  console.log(`💾 Inserting ${firmsToInsert.length} firms into database...`);
  const batchSize = 50;
  let inserted = 0;
  
  for (let i = 0; i < firmsToInsert.length; i += batchSize) {
    const batch = firmsToInsert.slice(i, i + batchSize);
    try {
      await db.firm.createMany({ data: batch, skipDuplicates: true });
      inserted += batch.length;
      process.stdout.write(`\r   Progress: ${Math.min(i + batchSize, firmsToInsert.length)}/${firmsToInsert.length}`);
    } catch (e) {
      // Try inserting one by one for failed batches
      for (const firm of batch) {
        try {
          await db.firm.create({ data: firm });
          inserted++;
        } catch (e2) {
          // Skip duplicates
        }
      }
    }
  }
  
  const count = await db.firm.count();
  console.log(`\n\n✅ Import complete! Total firms: ${count}`);
  
  // Show stats
  const byScale = await db.firm.groupBy({ by: ['scaleCategory'], _count: true });
  console.log('\n📊 By Scale:');
  byScale.forEach(s => console.log(`   ${s.scaleCategory}: ${s._count}`));
  
  const byTier = await db.firm.groupBy({ by: ['tierCategory'], _count: true });
  console.log('\n📊 By Tier:');
  byTier.forEach(t => console.log(`   ${t.tierCategory}: ${t._count}`));
}

main().catch(console.error).finally(() => process.exit(0));
