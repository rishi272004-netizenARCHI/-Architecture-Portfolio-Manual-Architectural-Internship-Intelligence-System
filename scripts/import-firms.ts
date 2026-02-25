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

// Helper to determine scale category
function determineScale(scale: string): string {
  if (!scale) return 'Small';
  const s = scale.toLowerCase();
  if (s.includes('solo') || s.includes('1-5')) return 'Solo';
  if (s.includes('small') || s.includes('6-15')) return 'Small';
  if (s.includes('mid') || s.includes('16-50')) return 'Mid-size';
  if (s.includes('large') || s.includes('51-200')) return 'Large';
  if (s.includes('corporate') || s.includes('200+')) return 'Corporate';
  if (['solo', 'small', 'mid-size', 'large', 'corporate'].includes(s)) {
    return scale.charAt(0).toUpperCase() + scale.slice(1).replace('-', '-');
  }
  return scale;
}

// Helper to determine tier category
function determineTier(tier: string, city: string): string {
  if (tier) {
    const t = tier.toLowerCase();
    if (t.includes('metro')) return 'Metro';
    if (t.includes('regional')) return 'Regional';
    if (t.includes('emerging')) return 'Emerging';
  }
  // Infer from city
  const metroCities = ['Mumbai', 'Delhi', 'New Delhi', 'Bangalore', 'Bengaluru', 'Chennai', 'Hyderabad', 'Kolkata', 'Ahmedabad', 'Pune', 'Gurugram', 'Noida'];
  const regionalCities = ['Jaipur', 'Kochi', 'Coimbatore', 'Indore', 'Surat', 'Vadodara', 'Mysuru', 'Nagpur', 'Lucknow', 'Bhopal', 'Chandigarh'];
  
  if (metroCities.some(m => city.toLowerCase().includes(m.toLowerCase()))) return 'Metro';
  if (regionalCities.some(r => city.toLowerCase().includes(r.toLowerCase()))) return 'Regional';
  return 'Emerging';
}

// Helper to determine BIM intensity
function determineBim(bim: string): string {
  if (!bim) return 'Moderate';
  const b = bim.toLowerCase();
  if (b.includes('heavy') || b.includes('full') || b === 'yes') return 'Heavy';
  if (b.includes('partial') || b.includes('moderate')) return 'Moderate';
  if (b.includes('no') || b.includes('none') || b.includes('low')) return 'None';
  return 'Moderate';
}

// Helper to determine internship potential
function determineInternship(potential: string, scale: string): string {
  if (potential) {
    const p = potential.toLowerCase();
    if (p.includes('high')) return 'High';
    if (p.includes('medium')) return 'Medium';
    if (p.includes('low')) return 'Low';
  }
  // Larger firms typically have better internship programs
  if (['Large', 'Corporate'].includes(scale)) return 'High';
  if (['Mid-size'].includes(scale)) return 'Medium';
  return 'Low';
}

// Parse firm name from the first column (which sometimes contains "firm_name" header)
function extractFirmName(value: string, index: number): string | null {
  if (!value || value.trim() === '' || value.toLowerCase() === 'firm_name') {
    return null;
  }
  return value.trim();
}

interface RawFirm {
  name: string;
  city: string;
  state: string;
  principalArchitect?: string;
  scale?: string;
  typology?: string;
  secondaryTypology?: string;
  designOrientation?: string;
  technicalOrientation?: string;
  bimUsage?: string;
  internshipPotential?: string;
  website?: string;
  email?: string;
  tierCategory?: string;
}

async function importFirms() {
  console.log('Starting firm import...');
  
  const csvPath = path.join(__dirname, '../upload/firm_name,city,state,country,princi.CSV');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  const lines = csvContent.split('\n');
  
  const firms: RawFirm[] = [];
  const seenNames = new Set<string>();
  
  // Process CSV with multiple column structures
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Split by comma but handle quoted values
    const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
    
    // Skip header rows
    if (values[0]?.toLowerCase() === 'firm_name') continue;
    
    const name = extractFirmName(values[0], i);
    if (!name) continue;
    
    // Check for duplicate
    const normalized = normalizeName(name);
    if (seenNames.has(normalized)) continue;
    
    // Determine which column structure this row has
    // Structure 1: firm_name,city,state,country,principal_architect,year,scale,primary_typology,secondary_typology,design_orientation,technical_orientation,bim_usage,internship_potential
    // Structure 2: firm_name,city,state,country,principal_architect,year,scale,primary_typology,secondary_typology,design_orientation,technical_orientation,bim_usage,website,email
    // Structure 3: firm_name,city,state,tier_category,scale_category,design_orientation,technical_orientation,bim_intensity,site_exposure,research_intensity,primary_typology
    
    const city = values[1] || '';
    const state = values[2] || '';
    
    if (!city || !state) continue;
    
    let firm: RawFirm = {
      name,
      city,
      state,
    };
    
    // Try to detect structure based on number of columns and values
    if (values.length >= 13) {
      // Structure 1 or 2
      firm.principalArchitect = values[4] || undefined;
      firm.scale = values[6] || undefined;
      firm.typology = values[7] || undefined;
      firm.secondaryTypology = values[8] || undefined;
      firm.designOrientation = values[9] || undefined;
      firm.technicalOrientation = values[10] || undefined;
      firm.bimUsage = values[11] || undefined;
      
      if (values[12]?.toLowerCase() === 'high' || values[12]?.toLowerCase() === 'medium' || values[12]?.toLowerCase() === 'low') {
        firm.internshipPotential = values[12];
      } else if (values[12]?.startsWith('http')) {
        firm.website = values[12];
        firm.email = values[13] || undefined;
      }
    } else if (values.length >= 10) {
      // Structure 3: has tier_category
      firm.tierCategory = values[3] || undefined;
      firm.scale = values[4] || undefined;
      firm.designOrientation = values[5] || undefined;
      firm.technicalOrientation = values[6] || undefined;
      firm.bimUsage = values[7] || undefined;
      firm.typology = values[10] || values[9] || undefined;
    } else if (values.length >= 7) {
      // Structure 4: simpler format
      firm.tierCategory = values[3] || undefined;
      firm.scale = values[4] || undefined;
      firm.typology = values[5] || undefined;
      firm.designOrientation = values[6] || undefined;
      firm.technicalOrientation = values[7] || undefined;
    }
    
    seenNames.add(normalized);
    firms.push(firm);
  }
  
  console.log(`Parsed ${firms.length} unique firms from CSV`);
  
  // Clear existing firms
  console.log('Clearing existing firms...');
  await db.firm.deleteMany({});
  
  // Insert firms in batches
  const batchSize = 100;
  let inserted = 0;
  
  for (let i = 0; i < firms.length; i += batchSize) {
    const batch = firms.slice(i, i + batchSize);
    
    const firmsToInsert = batch.map(firm => {
      const scaleCategory = determineScale(firm.scale || '');
      const tierCategory = firm.tierCategory || determineTier('', firm.city);
      
      return {
        id: generateId(),
        name: firm.name,
        normalizedName: normalizeName(firm.name),
        city: firm.city,
        state: firm.state,
        country: 'India',
        principalArchitect: firm.principalArchitect || null,
        scaleCategory,
        tierCategory,
        primaryTypology: firm.typology || 'Residential',
        secondaryTypology: firm.secondaryTypology || null,
        designOrientation: firm.designOrientation || 'Contemporary',
        technicalOrientation: firm.technicalOrientation || 'Technical-heavy',
        bimIntensity: determineBim(firm.bimUsage || ''),
        internshipPotential: determineInternship(firm.internshipPotential || '', scaleCategory),
        website: firm.website || null,
        officialEmail: firm.email || null,
        isActive: true,
        updatedAt: new Date(),
      };
    });
    
    try {
      await db.firm.createMany({
        data: firmsToInsert,
        skipDuplicates: true,
      });
      inserted += firmsToInsert.length;
      console.log(`Inserted ${inserted}/${firms.length} firms...`);
    } catch (error) {
      console.error(`Error inserting batch ${i}:`, error);
    }
  }
  
  console.log(`\n✅ Import complete! Inserted ${inserted} firms.`);
  
  // Verify
  const count = await db.firm.count();
  console.log(`Total firms in database: ${count}`);
  
  // Show sample
  const sample = await db.firm.findMany({ take: 5 });
  console.log('\nSample firms:');
  sample.forEach(f => {
    console.log(`- ${f.name} (${f.city}, ${f.state}) - ${f.scaleCategory}/${f.tierCategory}`);
  });
}

importFirms()
  .catch(console.error)
  .finally(() => {
    process.exit(0);
  });
