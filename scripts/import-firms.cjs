const fs = require('fs');

// Helper functions
function generateId() {
  return `firm_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function normalizeName(name) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 50);
}

function parseCSVLine(line) {
  const values = [];
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
  return values;
}

function normalizeScale(scale) {
  if (!scale) return 'Mid-size';
  const s = scale.toLowerCase().trim();
  if (s.includes('solo')) return 'Solo';
  if (s.includes('small')) return 'Small';
  if (s.includes('mid-large')) return 'Mid-Large';
  if (s.includes('mid') || s.includes('medium')) return 'Mid-size';
  if (s.includes('international')) return 'International';
  if (s.includes('large')) return 'Large';
  if (s.includes('corporate')) return 'Corporate';
  return 'Mid-size';
}

function normalizeBim(bim) {
  if (!bim) return 'Moderate';
  const b = bim.toLowerCase().trim();
  if (b === 'yes' || b.includes('heavy') || b.includes('full')) return 'Heavy';
  if (b === 'no' || b === 'none') return 'None';
  return 'Moderate';
}

function determineTier(city) {
  const metros = ['mumbai', 'delhi', 'new delhi', 'bangalore', 'bengaluru', 'chennai', 'hyderabad', 'kolkata', 'ahmedabad', 'pune', 'gurugram', 'noida', 'delhi ncr'];
  const regionals = ['jaipur', 'kochi', 'coimbatore', 'indore', 'surat', 'vadodara', 'mysuru', 'nagpur', 'lucknow', 'bhopal', 'chandigarh', 'goa', 'panjim', 'auroville'];
  
  const cityLower = city.toLowerCase();
  if (metros.some(m => cityLower.includes(m))) return 'Metro';
  if (regionals.some(r => cityLower.includes(r))) return 'Regional';
  return 'Emerging';
}

function determineInternshipPotential(offered, scale) {
  if (offered) {
    const o = offered.toLowerCase().trim();
    if (o === 'yes') return 'High';
    if (o === 'selective') return 'Medium';
    if (o === 'no') return 'Low';
  }
  if (['Large', 'Corporate', 'International'].includes(scale)) return 'High';
  if (['Mid-size', 'Mid-Large'].includes(scale)) return 'Medium';
  return 'Low';
}

// Main import function
function importFirms() {
  console.log('🚀 Starting firm import...\n');
  
  const firms = [];
  const seenNames = new Set();
  
  // ========== PART 1: NEW FIRM DETABASE.CSV ==========
  console.log('📂 Processing NEW FIRM DETABASE.CSV...');
  const newPath = '/home/z/my-project/upload/NEW FIRM DETABASE.CSV';
  const newContent = fs.readFileSync(newPath, 'utf-8');
  const newLines = newContent.split('\n');
  
  let newCount = 0;
  for (const line of newLines) {
    if (!line.trim() || line.startsWith('Firm Name,')) continue;
    
    const values = parseCSVLine(line);
    if (values.length < 10) continue;
    
    const name = values[0];
    if (!name || name.toLowerCase() === 'firm_name') continue;
    
    const normalized = normalizeName(name);
    if (seenNames.has(normalized)) continue;
    
    const city = values[1];
    const state = values[2];
    if (!city || !state) continue;
    
    const scale = normalizeScale(values[5] || '');
    
    firms.push({
      id: generateId(),
      name,
      normalizedName: normalized,
      city,
      state,
      country: 'India',
      category: values[4] || null,
      scaleCategory: scale,
      tierCategory: determineTier(city),
      primaryTypology: values[6] || 'Residential',
      secondaryTypology: null,
      designOrientation: values[7] || 'Contemporary',
      technicalOrientation: 'Technical-heavy',
      bimIntensity: normalizeBim(values[8] || ''),
      internshipPotential: determineInternshipPotential(values[9], scale),
      internshipOffered: values[9] || null,
      website: values[10] !== 'Not Public' ? values[10] || null : null,
      officialEmail: values[11] !== 'Not Public' ? values[11] || null : null,
      applicationMethod: values[12] || null,
      portfolioEmphasis: values[13] || null,
      principalArchitect: null,
      yearEstablished: null,
      dataSource: 'NEW FIRM DETABASE.CSV',
      isActive: true,
      updatedAt: new Date().toISOString(),
    });
    
    seenNames.add(normalized);
    newCount++;
  }
  console.log(`   ✅ ${newCount} firms from NEW FIRM DETABASE.CSV\n`);
  
  // ========== PART 2: Older CSV ==========
  console.log('📂 Processing firm_name,city,state,country,princi.CSV...');
  const oldPath = '/home/z/my-project/upload/firm_name,city,state,country,princi.CSV';
  const oldContent = fs.readFileSync(oldPath, 'utf-8');
  const oldLines = oldContent.split('\n');
  
  let oldCount = 0;
  for (const line of oldLines) {
    if (!line.trim()) continue;
    
    const values = parseCSVLine(line);
    if (values[0]?.toLowerCase() === 'firm_name' || !values[0]) continue;
    
    const name = values[0];
    const normalized = normalizeName(name);
    if (seenNames.has(normalized)) continue;
    
    const city = values[1];
    const state = values[2];
    if (!city || !state || city.toLowerCase() === 'city') continue;
    
    let scale = 'Mid-size';
    let primaryTypology = 'Residential';
    let designOrientation = 'Contemporary';
    let technicalOrientation = 'Technical-heavy';
    let bimUsage = '';
    let internshipPotential = 'Medium';
    let principalArchitect = null;
    let yearEstablished = null;
    let website = null;
    let email = null;
    let tierCategory = determineTier(city);
    
    // Parse based on column count
    if (values.length >= 13) {
      principalArchitect = values[4] || null;
      const year = parseInt(values[5]);
      yearEstablished = isNaN(year) ? null : year;
      scale = normalizeScale(values[6] || '');
      primaryTypology = values[7] || 'Residential';
      designOrientation = values[9] || 'Contemporary';
      technicalOrientation = values[10] || 'Technical-heavy';
      bimUsage = values[11] || '';
      
      if (values[12]?.startsWith('http')) {
        website = values[12];
        email = values[13] || null;
      } else {
        internshipPotential = values[12] || determineInternshipPotential('', scale);
      }
    } else if (values.length >= 10) {
      tierCategory = values[3] || tierCategory;
      scale = normalizeScale(values[4] || '');
      designOrientation = values[5] || 'Contemporary';
      technicalOrientation = values[6] || 'Technical-heavy';
      bimUsage = values[7] || '';
      primaryTypology = values[10] || values[9] || 'Residential';
    } else if (values.length >= 7) {
      tierCategory = values[3] || tierCategory;
      scale = normalizeScale(values[4] || '');
      primaryTypology = values[5] || 'Residential';
      designOrientation = values[6] || 'Contemporary';
    }
    
    firms.push({
      id: generateId(),
      name,
      normalizedName: normalized,
      city,
      state,
      country: 'India',
      category: null,
      scaleCategory: scale,
      tierCategory,
      primaryTypology,
      secondaryTypology: null,
      designOrientation,
      technicalOrientation,
      bimIntensity: normalizeBim(bimUsage),
      internshipPotential,
      internshipOffered: null,
      website,
      officialEmail: email,
      applicationMethod: null,
      portfolioEmphasis: null,
      principalArchitect,
      yearEstablished,
      dataSource: 'firm_name,city,state,country,princi.CSV',
      isActive: true,
      updatedAt: new Date().toISOString(),
    });
    
    seenNames.add(normalized);
    oldCount++;
  }
  console.log(`   ✅ ${oldCount} firms from older CSV\n`);
  
  console.log(`📊 Total unique firms: ${firms.length}\n`);
  
  // Write to JSON file for Prisma seeding
  const outputPath = '/home/z/my-project/prisma/firms-seed.json';
  fs.writeFileSync(outputPath, JSON.stringify(firms, null, 2));
  console.log(`💾 Written to ${outputPath}\n`);
  
  // Print stats
  const stats = {
    total: firms.length,
    byCategory: {},
    byScale: {},
    byTier: {},
    byInternship: {},
    highInternship: 0,
  };
  
  for (const firm of firms) {
    if (firm.category) {
      stats.byCategory[firm.category] = (stats.byCategory[firm.category] || 0) + 1;
    }
    stats.byScale[firm.scaleCategory] = (stats.byScale[firm.scaleCategory] || 0) + 1;
    stats.byTier[firm.tierCategory] = (stats.byTier[firm.tierCategory] || 0) + 1;
    stats.byInternship[firm.internshipPotential] = (stats.byInternship[firm.internshipPotential] || 0) + 1;
    if (firm.internshipPotential === 'High') stats.highInternship++;
  }
  
  console.log('📈 Statistics:');
  console.log(`   Total: ${stats.total}`);
  console.log(`   High Internship Potential: ${stats.highInternship}`);
  console.log('\n   By Scale:');
  Object.entries(stats.byScale).forEach(([k, v]) => console.log(`   - ${k}: ${v}`));
  console.log('\n   By Tier:');
  Object.entries(stats.byTier).forEach(([k, v]) => console.log(`   - ${k}: ${v}`));
  console.log('\n   By Internship Potential:');
  Object.entries(stats.byInternship).forEach(([k, v]) => console.log(`   - ${k}: ${v}`));
  
  return firms;
}

importFirms();
