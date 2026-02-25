// Insert firm data from CSV into database
import { db } from '../src/lib/db';

// Sample firm data extracted from CSV
const firmData = [
  // New Delhi firms
  { name: "Studio Lotus", city: "New Delhi", state: "Delhi", principalArchitect: "Sidhartha Talwar", yearEstablished: 2002, scale: "Mid-size", primaryTypology: "Cultural", designOrientation: "Contextual", technicalOrientation: "Sustainable", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Morphogenesis", city: "New Delhi", state: "Delhi", principalArchitect: "Sonali Rastogi", yearEstablished: 1996, scale: "Large", primaryTypology: "Institutional", designOrientation: "Sustainable", technicalOrientation: "High-performance", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "KMC Design", city: "New Delhi", state: "Delhi", principalArchitect: "Dikshu Kukreja", yearEstablished: 1969, scale: "Large", primaryTypology: "Urban", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "K2India", city: "Gurugram", state: "Haryana", principalArchitect: "Sunita Kohli", yearEstablished: 2010, scale: "Mid-size", primaryTypology: "Hospitality", designOrientation: "Luxury", technicalOrientation: "Detail-driven", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Architecture Brio", city: "New Delhi", state: "Delhi", principalArchitect: "Akshat Bhatt", yearEstablished: 2007, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Modernist", technicalOrientation: "Material-focused", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Anubhav Gupta Architects", city: "New Delhi", state: "Delhi", principalArchitect: "Anubhav Gupta", yearEstablished: 2001, scale: "Mid-size", primaryTypology: "Housing", designOrientation: "Climate-responsive", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Raj Rewal Associates", city: "New Delhi", state: "Delhi", principalArchitect: "Raj Rewal", yearEstablished: 1974, scale: "Large", primaryTypology: "Institutional", designOrientation: "Modernist", technicalOrientation: "Technical-heavy", bimIntensity: "None", internshipPotential: "Medium" },
  
  // Mumbai firms
  { name: "Sanjay Puri Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Sanjay Puri", yearEstablished: 1992, scale: "Large", primaryTypology: "Mixed", designOrientation: "Parametric", technicalOrientation: "Computational", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Talati & Panthaky", city: "Mumbai", state: "Maharashtra", principalArchitect: "Hemal Talati", yearEstablished: 1964, scale: "Large", primaryTypology: "Commercial", designOrientation: "Corporate", technicalOrientation: "BIM-heavy", bimIntensity: "Heavy", internshipPotential: "High" },
  { name: "Krupa Zubin", city: "Mumbai", state: "Maharashtra", principalArchitect: "Krupa Zubin", yearEstablished: 2004, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Interior-focused", technicalOrientation: "Detail-oriented", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "sP+a", city: "Mumbai", state: "Maharashtra", principalArchitect: "Sameep Padora", yearEstablished: 2007, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Research-driven", technicalOrientation: "Material experimentation", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Edifice Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Ravi Sarangan", yearEstablished: 1989, scale: "Large", primaryTypology: "Commercial", designOrientation: "Corporate", technicalOrientation: "Execution-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Somaya & Kalappa", city: "Mumbai", state: "Maharashtra", principalArchitect: "Brinda Somaya", yearEstablished: 1978, scale: "Mid-size", primaryTypology: "Cultural", designOrientation: "Contextual", technicalOrientation: "Conservation", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Vinod Kapadia Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Vinod Kapadia", yearEstablished: 1980, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Luxury", technicalOrientation: "Detail-oriented", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Abraham John Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Abraham John", yearEstablished: 1967, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Material-rich", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Studio Mumbai", city: "Mumbai", state: "Maharashtra", principalArchitect: "Bijoy Jain", yearEstablished: 2005, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Craft-based", technicalOrientation: "Material research", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "IMK Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Rahul Kadri", yearEstablished: 1957, scale: "Large", primaryTypology: "Healthcare", designOrientation: "Sustainable", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "NUDES", city: "Mumbai", state: "Maharashtra", principalArchitect: "Nuru Karim", yearEstablished: 2006, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Parametric", technicalOrientation: "Digital fabrication", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "SJK Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Shimul Javeri Kadri", yearEstablished: 1990, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Sustainable", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "RMA Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Rahul Mehrotra", yearEstablished: 1990, scale: "Mid-size", primaryTypology: "Cultural", designOrientation: "Research-driven", technicalOrientation: "Documentation-heavy", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Planet 3 Studios", city: "Mumbai", state: "Maharashtra", principalArchitect: "Sanath Gour", yearEstablished: 2002, scale: "Mid-size", primaryTypology: "Commercial", designOrientation: "Contemporary", technicalOrientation: "Execution-focused", bimIntensity: "Moderate", internshipPotential: "High" },
  
  // Ahmedabad firms
  { name: "HCP Design", city: "Ahmedabad", state: "Gujarat", principalArchitect: "Bimal Patel", yearEstablished: 1955, scale: "Large", primaryTypology: "Institutional", designOrientation: "Modernist", technicalOrientation: "Urban systems", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Hiren Patel Architects", city: "Ahmedabad", state: "Gujarat", principalArchitect: "Hiren Patel", yearEstablished: 1992, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Execution-focused", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Matharoo Associates", city: "Ahmedabad", state: "Gujarat", principalArchitect: "Gurjit Singh Matharoo", yearEstablished: 1992, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Minimalist", technicalOrientation: "Material research", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Malay Doshi Architects", city: "Ahmedabad", state: "Gujarat", principalArchitect: "Malay Doshi", yearEstablished: 1994, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Vastushilpa Foundation", city: "Ahmedabad", state: "Gujarat", principalArchitect: "Rajeev Kathpalia", yearEstablished: 2003, scale: "Large", primaryTypology: "Infrastructure", designOrientation: "Sustainable", technicalOrientation: "High-performance", bimIntensity: "Moderate", internshipPotential: "High" },
  
  // Bangalore firms
  { name: "Biome Environmental Solutions", city: "Bangalore", state: "Karnataka", principalArchitect: "Chitra Vishwanath", yearEstablished: 1991, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Climate-responsive", technicalOrientation: "Low-energy", bimIntensity: "None", internshipPotential: "High" },
  { name: "Mindspace Architects", city: "Bangalore", state: "Karnataka", principalArchitect: "Sanjay Mohe", yearEstablished: 1991, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Modernist", technicalOrientation: "Material-focused", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Cadence Architects", city: "Bangalore", state: "Karnataka", principalArchitect: "Simran Mallesh", yearEstablished: 2005, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Studio Lotus", city: "Bangalore", state: "Karnataka", principalArchitect: "Bijoy Ramachandran", yearEstablished: 2003, scale: "Mid-size", primaryTypology: "Cultural", designOrientation: "Contextual", technicalOrientation: "Material-driven", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Khosla Associates", city: "Bangalore", state: "Karnataka", principalArchitect: "Sandeep Khosla", yearEstablished: 1995, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Interior-focused", technicalOrientation: "Detail-driven", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Chandrashekar Architects", city: "Bangalore", state: "Karnataka", principalArchitect: "Chandrashekar R", yearEstablished: 2004, scale: "Large", primaryTypology: "Commercial", designOrientation: "Corporate", technicalOrientation: "BIM-heavy", bimIntensity: "Heavy", internshipPotential: "High" },
  { name: "RSP Design", city: "Bangalore", state: "Karnataka", principalArchitect: "Saurabh Sood", yearEstablished: 1996, scale: "Large", primaryTypology: "Commercial", designOrientation: "Corporate", technicalOrientation: "BIM-heavy", bimIntensity: "Heavy", internshipPotential: "High" },
  { name: "Pentagram Architects", city: "Bangalore", state: "Karnataka", principalArchitect: "Harish Prasad", yearEstablished: 1990, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  
  // Chennai firms
  { name: "CR Narayana Rao", city: "Chennai", state: "Tamil Nadu", principalArchitect: "CR Narayana Rao", yearEstablished: 1968, scale: "Large", primaryTypology: "Commercial", designOrientation: "Corporate", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Arun Kumar Architects", city: "Chennai", state: "Tamil Nadu", principalArchitect: "Arun Kumar", yearEstablished: 2004, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Shilpa Architects", city: "Chennai", state: "Tamil Nadu", principalArchitect: "Shilpa Architects Team", yearEstablished: 1979, scale: "Large", primaryTypology: "Mixed", designOrientation: "Modernist", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "KSM Architects", city: "Chennai", state: "Tamil Nadu", principalArchitect: "KSM Team", yearEstablished: 2000, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  
  // Hyderabad firms
  { name: "Gnaneshwar Rao Associates", city: "Hyderabad", state: "Telangana", principalArchitect: "Gnaneshwar Rao", yearEstablished: 1995, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Contemporary", technicalOrientation: "Execution-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "DSP Design", city: "Hyderabad", state: "Telangana", principalArchitect: "Shilpa Gore Shah", yearEstablished: 1991, scale: "Large", primaryTypology: "Commercial", designOrientation: "Corporate", technicalOrientation: "BIM-heavy", bimIntensity: "Heavy", internshipPotential: "High" },
  { name: "Oasis Designs", city: "Hyderabad", state: "Telangana", principalArchitect: "Shyam Prasad", yearEstablished: 2008, scale: "Small", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Execution-focused", bimIntensity: "Moderate", internshipPotential: "Medium" },
  { name: "Axiom Architects", city: "Hyderabad", state: "Telangana", principalArchitect: "Srinivas Rao", yearEstablished: 2012, scale: "Small", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Execution-heavy", bimIntensity: "Moderate", internshipPotential: "Medium" },
  
  // Kolkata firms
  { name: "Abin Design Studio", city: "Kolkata", state: "West Bengal", principalArchitect: "Abin Chaudhuri", yearEstablished: 2005, scale: "Mid-size", primaryTypology: "Cultural", designOrientation: "Experimental", technicalOrientation: "Material research", bimIntensity: "Partial", internshipPotential: "High" },
  
  // Chandigarh firms
  { name: "Renesa Architecture", city: "Chandigarh", state: "Chandigarh", principalArchitect: "Renesa Team", yearEstablished: 2010, scale: "Mid-size", primaryTypology: "Commercial", designOrientation: "Parametric", technicalOrientation: "Computational", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Monika Choudhary Architects", city: "Chandigarh", state: "Chandigarh", principalArchitect: "Monika Choudhary", yearEstablished: 2007, scale: "Mid-size", primaryTypology: "Cultural", designOrientation: "Minimalist", technicalOrientation: "Material exploration", bimIntensity: "Partial", internshipPotential: "High" },
  
  // Goa firms
  { name: "Design Workshop India", city: "Goa", state: "Goa", principalArchitect: "Shabbir Unwala", yearEstablished: 1987, scale: "Mid-size", primaryTypology: "Hospitality", designOrientation: "Contextual", technicalOrientation: "Material-driven", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Dean Dcruz Design", city: "Goa", state: "Goa", principalArchitect: "Dean Dcruz", yearEstablished: 1995, scale: "Mid-size", primaryTypology: "Hospitality", designOrientation: "Sustainable", technicalOrientation: "Site-heavy", bimIntensity: "None", internshipPotential: "High" },
  
  // Jaipur firms
  { name: "Amit Khanna Design Associates", city: "Jaipur", state: "Rajasthan", principalArchitect: "Amit Khanna", yearEstablished: 2009, scale: "Small", primaryTypology: "Institutional", designOrientation: "Contextual", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Aishwarya Tipnis Architects", city: "Jaipur", state: "Rajasthan", principalArchitect: "Aishwarya Tipnis", yearEstablished: 2005, scale: "Small", primaryTypology: "Cultural", designOrientation: "Heritage-focused", technicalOrientation: "Documentation-heavy", bimIntensity: "Partial", internshipPotential: "High" },
  
  // Pune firms
  { name: "VK:e Environmental", city: "Pune", state: "Maharashtra", principalArchitect: "Vishwas Kulkarni", yearEstablished: 1995, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Sustainable", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Morphlab Studio", city: "Pune", state: "Maharashtra", principalArchitect: "Aditya Kulkarni", yearEstablished: 2018, scale: "Small", primaryTypology: "Residential", designOrientation: "Modernist", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "Medium" },
  { name: "Kunal Maniar Associates", city: "Pune", state: "Maharashtra", principalArchitect: "Kunal Maniar", yearEstablished: 2003, scale: "Small", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Execution-focused", bimIntensity: "Partial", internshipPotential: "Medium" },
  
  // Surat firms
  { name: "Artha Studio", city: "Surat", state: "Gujarat", principalArchitect: "Hardik Mehta", yearEstablished: 2015, scale: "Small", primaryTypology: "Residential", designOrientation: "Minimalist", technicalOrientation: "Execution-oriented", bimIntensity: "Partial", internshipPotential: "Medium" },
  
  // More firms
  { name: "Spacematrix", city: "Mumbai", state: "Maharashtra", principalArchitect: "Arun Madhok", yearEstablished: 2001, scale: "Large", primaryTypology: "Commercial", designOrientation: "Corporate", technicalOrientation: "BIM-heavy", bimIntensity: "Heavy", internshipPotential: "High" },
  { name: "Studio Symbiosis", city: "Noida", state: "Uttar Pradesh", principalArchitect: "Amit Gupta", yearEstablished: 2010, scale: "Mid-size", primaryTypology: "Hospitality", designOrientation: "Parametric", technicalOrientation: "Computational", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Archohm", city: "Noida", state: "Uttar Pradesh", principalArchitect: "Sourabh Gupta", yearEstablished: 1999, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Experimental", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Ashiesh Shah Studio", city: "Mumbai", state: "Maharashtra", principalArchitect: "Ashiesh Shah", yearEstablished: 2002, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Minimalist", technicalOrientation: "Detail-driven", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Architecture Brio", city: "Alibaug", state: "Maharashtra", principalArchitect: "Shefali Balwani", yearEstablished: 2006, scale: "Mid-size", primaryTypology: "Residential", designOrientation: "Climate-responsive", technicalOrientation: "Material research", bimIntensity: "Partial", internshipPotential: "High" },
  { name: "Serie Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Christopher Lee", yearEstablished: 2006, scale: "Mid-size", primaryTypology: "Cultural", designOrientation: "Research-driven", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Studio Parametric", city: "Bangalore", state: "Karnataka", principalArchitect: "Krishna Rao", yearEstablished: 2010, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Computational", technicalOrientation: "Digital fabrication", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Local Ground", city: "Pune", state: "Maharashtra", principalArchitect: "Kushru Irani", yearEstablished: 2010, scale: "Small", primaryTypology: "Residential", designOrientation: "Contextual", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Pracademics", city: "Ahmedabad", state: "Gujarat", principalArchitect: "Tejas Kathariya", yearEstablished: 2014, scale: "Small", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Karan Grover Associates", city: "Vadodara", state: "Gujarat", principalArchitect: "Karan Grover", yearEstablished: 1985, scale: "Large", primaryTypology: "Institutional", designOrientation: "Sustainable", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Red Brick Studio", city: "Pune", state: "Maharashtra", principalArchitect: "Anil Poduval", yearEstablished: 2008, scale: "Small", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Ingrain Architects", city: "Mumbai", state: "Maharashtra", principalArchitect: "Abhay Bhosale", yearEstablished: 2012, scale: "Small", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Daisaria Associates", city: "Mumbai", state: "Maharashtra", principalArchitect: "Karan Daisaria", yearEstablished: 2010, scale: "Small", primaryTypology: "Commercial", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
  { name: "Kamat & Rozario Architecture", city: "Bangalore", state: "Karnataka", principalArchitect: "Smruti Kamat", yearEstablished: 2003, scale: "Mid-size", primaryTypology: "Institutional", designOrientation: "Contextual", technicalOrientation: "Technical-heavy", bimIntensity: "Moderate", internshipPotential: "High" },
  { name: "Within N Without", city: "Nashik", state: "Maharashtra", principalArchitect: "Shailesh Devi", yearEstablished: 2005, scale: "Small", primaryTypology: "Institutional", designOrientation: "Sustainable", technicalOrientation: "Site-heavy", bimIntensity: "None", internshipPotential: "High" },
  { name: "Space and Form", city: "Solapur", state: "Maharashtra", principalArchitect: "Amol Chafalkar", yearEstablished: 2012, scale: "Small", primaryTypology: "Residential", designOrientation: "Contemporary", technicalOrientation: "Technical-heavy", bimIntensity: "Partial", internshipPotential: "Medium" },
];

// Map values to standard format
function mapScale(scale: string): string {
  const map: Record<string, string> = {
    'solo': 'Solo', 'small': 'Small', 'mid-size': 'Mid-size', 'mid': 'Mid-size',
    'large': 'Large', 'corporate': 'Corporate'
  };
  return map[scale?.toLowerCase()] || scale || 'Small';
}

function mapBim(bim: string): string {
  const map: Record<string, string> = {
    'yes': 'Moderate', 'no': 'None', 'heavy': 'Heavy', 
    'moderate': 'Moderate', 'partial': 'Partial', 'none': 'None'
  };
  return map[bim?.toLowerCase()] || bim || 'None';
}

function mapPotential(potential: string): string {
  const map: Record<string, string> = { 'high': 'High', 'medium': 'Medium', 'low': 'Low' };
  return map[potential?.toLowerCase()] || potential || 'Medium';
}

function mapTier(city: string): string {
  const metro = ['Mumbai', 'Delhi', 'New Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune', 'Ahmedabad'];
  if (metro.includes(city)) return 'Metro';
  const regional = ['Surat', 'Jaipur', 'Chandigarh', 'Vadodara', 'Nagpur', 'Indore', 'Coimbatore', 'Kochi', 'Goa'];
  if (regional.includes(city)) return 'Regional';
  return 'Emerging';
}

async function main() {
  console.log('🚀 Starting firm data import...');
  
  // Clear existing data
  console.log('🗑️ Clearing existing data...');
  await db.firmTag.deleteMany({});
  await db.firmRanking.deleteMany({});
  await db.firm.deleteMany({});
  
  let imported = 0;
  let duplicates = 0;
  const seen = new Set<string>();
  
  for (const firm of firmData) {
    const normalizedName = firm.name.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
    
    if (seen.has(normalizedName)) {
      duplicates++;
      continue;
    }
    seen.add(normalizedName);
    
    try {
      await db.firm.create({
        data: {
          name: firm.name,
          normalizedName,
          city: firm.city,
          state: firm.state,
          country: 'India',
          principalArchitect: firm.principalArchitect || null,
          yearEstablished: firm.yearEstablished || null,
          scaleCategory: mapScale(firm.scale),
          tierCategory: mapTier(firm.city),
          primaryTypology: firm.primaryTypology || 'Mixed',
          secondaryTypology: null,
          designOrientation: firm.designOrientation || 'Contemporary',
          technicalOrientation: firm.technicalOrientation || 'Technical-heavy',
          bimIntensity: mapBim(firm.bimIntensity),
          internshipPotential: mapPotential(firm.internshipPotential),
          dataSource: 'Manual Import',
        }
      });
      imported++;
      
      if (imported % 10 === 0) {
        console.log(`⏳ Imported ${imported} firms...`);
      }
    } catch (error) {
      console.error(`❌ Error importing ${firm.name}:`, error);
    }
  }
  
  console.log('\n✅ Import complete!');
  console.log(`   Imported: ${imported}`);
  console.log(`   Duplicates: ${duplicates}`);
  
  const total = await db.firm.count();
  console.log(`\n📊 Total firms in database: ${total}`);
}

main()
  .then(async () => {
    await db.$disconnect();
    console.log('\n👋 Done!');
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
