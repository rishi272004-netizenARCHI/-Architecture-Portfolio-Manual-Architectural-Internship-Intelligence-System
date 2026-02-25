import fs from 'fs';
import path from 'path';
import { db } from '../src/lib/db';

// Helper to generate unique ID
function generateId(): string {
  return `firm_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Normalize firm name for duplicate detection
function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 50);
}

// Parse CSV line handling quotes
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

// Normalize scale values
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

// Normalize BIM values
function normalizeBim(bim: string): string {
  if (!bim) return 'Moderate';
  const b = bim.toLowerCase().trim();
  if (b === 'yes' || b.includes('heavy') || b.includes('full') || b.includes('bim-heavy')) return 'Heavy';
  if (b === 'no' || b === 'none') return 'None';
  if (b.includes('partial') || b.includes('moderate')) return 'Moderate';
  return 'Moderate';
}

// Determine tier from city
function determineTier(city: string, state: string): string {
  const metroCities = ['Mumbai', 'Delhi', 'New Delhi', 'Bangalore', 'Bengaluru', 'Chennai', 'Hyderabad', 'Kolkata', 'Ahmedabad', 'Pune', 'Gurugram', 'Noida', 'Delhi NCR'];
  const regionalCities = ['Jaipur', 'Kochi', 'Coimbatore', 'Indore', 'Surat', 'Vadodara', 'Mysuru', 'Nagpur', 'Lucknow', 'Bhopal', 'Chandigarh', 'Goa', 'Panjim', 'Auroville'];
  
  const cityLower = city.toLowerCase();
  if (metroCities.some(m => cityLower.includes(m.toLowerCase()))) return 'Metro';
  if (regionalCities.some(r => cityLower.includes(r.toLowerCase()))) return 'Regional';
  return 'Emerging';
}

// Determine internship potential
function determineInternshipPotential(internshipOffered: string, scale: string): string {
  if (internshipOffered) {
    const i = internshipOffered.toLowerCase().trim();
    if (i === 'yes') return 'High';
    if (i === 'selective') return 'Medium';
    if (i === 'no') return 'Low';
  }
  if (['Large', 'Corporate', 'International'].includes(scale)) return 'High';
  if (['Mid-size', 'Mid-Large'].includes(scale)) return 'Medium';
  return 'Low';
}

// Clean string value
function cleanString(val: string | undefined | null): string | null {
  if (!val) return null;
  const cleaned = val.trim();
  if (cleaned === '' || cleaned.toLowerCase() === 'not public' || cleaned.toLowerCase() === 'n/a') return null;
  return cleaned;
}

async function importFirms() {
  console.log('🚀 Starting comprehensive firm import...\n');
  
  const seenNames = new Set<string>();
  let inserted = 0;
  let errors = 0;
  
  // Clear existing firms
  console.log('🗑️  Clearing existing firms...');
  await db.firm.deleteMany({});
  console.log('   ✅ Database cleared\n');
  
  // ============================================
  // PART 1: Import from NEW FIRM DETABASE.CSV
  // ============================================
  console.log('📂 Processing NEW FIRM DETABASE.CSV...');
  const newDbPath = path.join(__dirname, '../upload/NEW FIRM DETABASE.CSV');
  const newDbContent = fs.readFileSync(newDbPath, 'utf-8');
  const newDbLines = newDbContent.split('\n');
  
  let newDbCount = 0;
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
    
    const scaleCategory = normalizeScale(values[5] || '');
    const bimIntensity = normalizeBim(values[8] || '');
    const tierCategory = determineTier(city, state);
    const internshipOffered = cleanString(values[9]);
    const internshipPotential = determineInternshipPotential(internshipOffered || '', scaleCategory);
    
    try {
      await db.firm.create({
        data: {
          id: generateId(),
          name: name,
          normalizedName: normalized,
          city: city,
          state: state,
          country: 'India',
          category: cleanString(values[4]),
          scaleCategory: scaleCategory,
          tierCategory: tierCategory,
          primaryTypology: cleanString(values[6]) || 'Residential',
          secondaryTypology: null,
          designOrientation: cleanString(values[7]) || 'Contemporary',
          technicalOrientation: 'Technical-heavy',
          bimIntensity: bimIntensity,
          internshipPotential: internshipPotential,
          internshipOffered: internshipOffered,
          website: cleanString(values[10]),
          officialEmail: cleanString(values[11]),
          applicationMethod: cleanString(values[12]),
          portfolioEmphasis: cleanString(values[13]),
          dataSource: 'NEW FIRM DETABASE.CSV',
          isActive: true,
        }
      });
      
      seenNames.add(normalized);
      newDbCount++;
      inserted++;
      
      if (newDbCount % 100 === 0) {
        process.stdout.write(`\r   Progress: ${newDbCount} firms imported...`);
      }
    } catch (error) {
      errors++;
      console.error(`\n   ❌ Error importing "${name}":`, error);
    }
  }
  console.log(`\n   ✅ Imported ${newDbCount} firms from NEW FIRM DETABASE.CSV\n`);
  
  // ============================================
  // PART 2: Import from older database
  // ============================================
  console.log('📂 Processing firm_name,city,state,country,princi.CSV...');
  const oldDbPath = path.join(__dirname, '../upload/firm_name,city,state,country,princi.CSV');
  const oldDbContent = fs.readFileSync(oldDbPath, 'utf-8');
  const oldDbLines = oldDbContent.split('\n');
  
  let oldDbCount = 0;
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
    
    const scaleCategory = normalizeScale(values[6] || '');
    const bimIntensity = normalizeBim(values[11] || '');
    const tierCategory = determineTier(city, state);
    
    try {
      await db.firm.create({
        data: {
          id: generateId(),
          name: name,
          normalizedName: normalized,
          city: city,
          state: state,
          country: 'India',
          category: null,
          scaleCategory: scaleCategory,
          tierCategory: tierCategory,
          primaryTypology: cleanString(values[7]) || 'Residential',
          secondaryTypology: cleanString(values[8]),
          designOrientation: cleanString(values[9]) || 'Contemporary',
          technicalOrientation: cleanString(values[10]) || 'Technical-heavy',
          bimIntensity: bimIntensity,
          internshipPotential: cleanString(values[12]) || determineInternshipPotential('', scaleCategory),
          internshipOffered: null,
          principalArchitect: cleanString(values[4]),
          website: null,
          officialEmail: null,
          dataSource: 'firm_name,city,state,country,princi.CSV',
          isActive: true,
        }
      });
      
      seenNames.add(normalized);
      oldDbCount++;
      inserted++;
      
      if (oldDbCount % 100 === 0) {
        process.stdout.write(`\r   Progress: ${oldDbCount} firms imported...`);
      }
    } catch (error) {
      errors++;
      console.error(`\n   ❌ Error importing "${name}":`, error);
    }
  }
  console.log(`\n   ✅ Imported ${oldDbCount} additional firms from older database\n`);
  
  // ============================================
  // PART 3: Show statistics
  // ============================================
  console.log('\n✅ Import complete!');
  console.log(`\n📈 Database Statistics:`);
  
  const count = await db.firm.count();
  console.log(`   Total firms: ${count}`);
  console.log(`   Successfully inserted: ${inserted}`);
  console.log(`   Errors: ${errors}`);
  
  // By scale
  const byScale = await db.firm.groupBy({
    by: ['scaleCategory'],
    _count: true,
  });
  console.log(`\n   By Scale:`);
  byScale.forEach(s => console.log(`   - ${s.scaleCategory}: ${s._count}`));
  
  // By tier
  const byTier = await db.firm.groupBy({
    by: ['tierCategory'],
    _count: true,
  });
  console.log(`\n   By Tier:`);
  byTier.forEach(t => console.log(`   - ${t.tierCategory}: ${t._count}`));
  
  // Sample firms
  const sample = await db.firm.findMany({ take: 5, orderBy: { name: 'asc' } });
  console.log(`\n📋 Sample firms:`);
  sample.forEach(f => {
    console.log(`   - ${f.name} (${f.city}, ${f.state}) [${f.scaleCategory}/${f.tierCategory}]`);
  });
}

importFirms()
  .catch(console.error)
  .finally(() => {
    process.exit(0);
  });
