const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function seed() {
  console.log('🌱 Seeding firms to database...\n');
  
  // Read the generated JSON
  const firms = JSON.parse(fs.readFileSync('/home/z/my-project/prisma/firms-seed.json', 'utf-8'));
  console.log(`📊 ${firms.length} firms to import\n`);
  
  // Clear existing
  console.log('🗑️  Clearing existing firms...');
  await prisma.firm.deleteMany({});
  
  // Insert in batches
  const batchSize = 50;
  let inserted = 0;
  
  for (let i = 0; i < firms.length; i += batchSize) {
    const batch = firms.slice(i, i + batchSize).map(f => ({
      id: f.id,
      name: f.name,
      normalizedName: f.normalizedName,
      city: f.city,
      state: f.state,
      country: f.country || 'India',
      principalArchitect: f.principalArchitect || null,
      yearEstablished: f.yearEstablished || null,
      category: f.category || null,
      scaleCategory: f.scaleCategory,
      tierCategory: f.tierCategory,
      primaryTypology: f.primaryTypology,
      secondaryTypology: f.secondaryTypology || null,
      designOrientation: f.designOrientation,
      technicalOrientation: f.technicalOrientation,
      bimIntensity: f.bimIntensity,
      internshipPotential: f.internshipPotential || null,
      internshipOffered: f.internshipOffered || null,
      siteExposure: null,
      researchIntensity: null,
      applicationMethod: f.applicationMethod || null,
      portfolioEmphasis: f.portfolioEmphasis || null,
      website: f.website || null,
      officialEmail: f.officialEmail || null,
      isActive: true,
      isVerified: false,
      dataSource: f.dataSource || null,
      notes: null,
    }));
    
    try {
      await prisma.firm.createMany({
        data: batch,
        skipDuplicates: true,
      });
      inserted += batch.length;
    } catch (error) {
      console.error(`\n❌ Error in batch ${i}:`, error.message);
    }
    
    process.stdout.write(`\r💾 Progress: ${inserted}/${firms.length}`);
  }
  
  console.log('\n\n✅ Import complete!\n');
  
  // Verify
  const count = await prisma.firm.count();
  console.log(`📈 Total firms in database: ${count}`);
  
  // Show stats
  const byScale = await prisma.firm.groupBy({ by: ['scaleCategory'], _count: true });
  const byTier = await prisma.firm.groupBy({ by: ['tierCategory'], _count: true });
  const byInternship = await prisma.firm.groupBy({ by: ['internshipPotential'], _count: true });
  
  console.log('\n📊 By Scale:');
  byScale.forEach(s => console.log(`   - ${s.scaleCategory}: ${s._count}`));
  
  console.log('\n📊 By Tier:');
  byTier.forEach(t => console.log(`   - ${t.tierCategory}: ${t._count}`));
  
  console.log('\n📊 By Internship Potential:');
  byInternship.forEach(i => {
    if (i.internshipPotential) console.log(`   - ${i.internshipPotential}: ${i._count}`);
  });
  
  // Show sample
  const sample = await prisma.firm.findMany({ take: 5, orderBy: { name: 'asc' } });
  console.log('\n📋 Sample firms:');
  sample.forEach(f => {
    console.log(`   - ${f.name} (${f.city}, ${f.state}) [${f.scaleCategory}]`);
  });
  
  await prisma.$disconnect();
}

seed().catch(e => {
  console.error(e);
  process.exit(1);
});
