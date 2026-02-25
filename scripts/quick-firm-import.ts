import fs from 'fs';
import path from 'path';

// Simple CSV parser
function parseCSV(content: string): string[][] {
  const lines = content.split('\n');
  const results: string[][] = [];
  
  for (const line of lines) {
    if (!line.trim()) continue;
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (const char of line) {
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
    results.push(values);
  }
  
  return results;
}

// Normalize functions
function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 50);
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
  const metroCities = ['Mumbai', 'Delhi', 'New Delhi', 'Bangalore', 'Bengaluru', 'Chennai', 'Hyderabad', 'Kolkata', 'Ahmedabad', 'Pune', 'Gurugram', 'Noida', 'Delhi NCR'];
  const regionalCities = ['Jaipur', 'Kochi', 'Coimbatore', 'Indore', 'Surat', 'Vadodara', 'Mysuru', 'Nagpur', 'Lucknow', 'Bhopal', 'Chandigarh', 'Goa', 'Panjim', 'Auroville'];
  
  const cityLower = city.toLowerCase();
  if (metroCities.some(m => cityLower.includes(m.toLowerCase()))) return 'Metro';
  if (regionalCities.some(r => cityLower.includes(r.toLowerCase()))) return 'Regional';
  return 'Emerging';
}

function cleanString(val: string | undefined | null): string | null {
  if (!val) return null;
  const cleaned = val.trim();
  if (cleaned === '' || cleaned.toLowerCase() === 'not public' || cleaned.toLowerCase() === 'n/a') return null;
  return cleaned;
}

async function main() {
  console.log('🚀 Starting fast firm import...\n');
  
  const { PrismaClient } = await import('@prisma/client');
  const db = new PrismaClient();
  
  try {
    // Clear existing
    console.log('🗑️  Clearing existing firms...');
    await db.firm.deleteMany({});
    console.log('   ✅ Database cleared\n');
    
    const seenNames = new Set<string>();
    let inserted = 0;
    
    // Parse NEW FIRM DETABASE.CSV
    console.log('📂 Processing NEW FIRM DETABASE.CSV...');
    const newDbPath = path.join(__dirname, '../upload/NEW FIRM DETABASE.CSV');
    const newDbContent = fs.readFileSync(newDbPath, 'utf-8');
    const newDbRows = parseCSV(newDbContent);
    
    for (const values of newDbRows) {
      if (values.length < 6) continue;
      const name = values[0];
      if (!name || name.toLowerCase() === 'firm name' || name.toLowerCase() === 'firm_name') continue;
      
      const normalized = normalizeName(name);
      if (seenNames.has(normalized)) continue;
      
      const city = values[1] || '';
      const state = values[2] || '';
      if (!city || !state || city.toLowerCase() === 'city') continue;
      
      const scaleCategory = normalizeScale(values[5] || '');
      const bimIntensity = normalizeBim(values[8] || '');
      const tierCategory = determineTier(city);
      const internshipOffered = cleanString(values[9]);
      
      try {
        await db.firm.create({
          data: {
            name: name,
            normalizedName: normalized,
            city: city,
            state: state,
            country: 'India',
            category: cleanString(values[4]),
            scaleCategory: scaleCategory,
            tierCategory: tierCategory,
            primaryTypology: cleanString(values[6]) || 'Mixed',
            designOrientation: cleanString(values[7]) || 'Contemporary',
            technicalOrientation: 'Technical-heavy',
            bimIntensity: bimIntensity,
            internshipPotential: internshipOffered === 'Yes' ? 'High' : internshipOffered === 'Selective' ? 'Medium' : 'Medium',
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
        inserted++;
        
        if (inserted % 50 === 0) {
          process.stdout.write(`\r   Progress: ${inserted} firms imported...`);
        }
      } catch (e) {
        // Skip duplicates or errors
      }
    }
    console.log(`\n   ✅ Imported ${inserted} firms from NEW FIRM DETABASE.CSV\n`);
    
    // Parse older CSV
    console.log('📂 Processing firm_name,city,state,country,princi.CSV...');
    const oldDbPath = path.join(__dirname, '../upload/firm_name,city,state,country,princi.CSV');
    const oldDbContent = fs.readFileSync(oldDbPath, 'utf-8');
    const oldDbRows = parseCSV(oldDbContent);
    
    let oldCount = 0;
    for (const values of oldDbRows) {
      if (values.length < 5) continue;
      const name = values[0];
      if (!name || name.toLowerCase() === 'firm name' || name.toLowerCase() === 'firm_name') continue;
      
      const normalized = normalizeName(name);
      if (seenNames.has(normalized)) continue;
      
      const city = values[1] || '';
      const state = values[2] || '';
      if (!city || !state || city.toLowerCase() === 'city') continue;
      
      const scaleCategory = normalizeScale(values[6] || '');
      const bimIntensity = normalizeBim(values[11] || '');
      const tierCategory = determineTier(city);
      
      try {
        await db.firm.create({
          data: {
            name: name,
            normalizedName: normalized,
            city: city,
            state: state,
            country: 'India',
            category: null,
            scaleCategory: scaleCategory,
            tierCategory: tierCategory,
            primaryTypology: cleanString(values[7]) || 'Mixed',
            designOrientation: cleanString(values[9]) || 'Contemporary',
            technicalOrientation: cleanString(values[10]) || 'Technical-heavy',
            bimIntensity: bimIntensity,
            internshipPotential: cleanString(values[12]) || 'Medium',
            internshipOffered: null,
            principalArchitect: cleanString(values[4]),
            dataSource: 'firm_name,city,state,country,princi.CSV',
            isActive: true,
          }
        });
        
        seenNames.add(normalized);
        oldCount++;
        inserted++;
        
        if (inserted % 50 === 0) {
          process.stdout.write(`\r   Progress: ${inserted} total firms...`);
        }
      } catch (e) {
        // Skip duplicates or errors
      }
    }
    console.log(`\n   ✅ Imported ${oldCount} additional firms from older CSV\n`);
    
    // Stats
    const count = await db.firm.count();
    console.log(`\n✅ Import complete!`);
    console.log(`\n📈 Database Statistics:`);
    console.log(`   Total firms: ${count}`);
    
    const byScale = await db.firm.groupBy({ by: ['scaleCategory'], _count: true });
    console.log(`\n   By Scale:`);
    byScale.forEach(s => console.log(`   - ${s.scaleCategory}: ${s._count}`));
    
    const byTier = await db.firm.groupBy({ by: ['tierCategory'], _count: true });
    console.log(`\n   By Tier:`);
    byTier.forEach(t => console.log(`   - ${t.tierCategory}: ${t._count}`));
    
  } finally {
    await db.$disconnect();
  }
}

main().catch(console.error);
