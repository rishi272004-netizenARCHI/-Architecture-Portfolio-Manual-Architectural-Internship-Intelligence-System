// Image Mapping from CSV
// Maps chapter names to their primary and supplementary images

export interface ImageMapping {
  chapterTitle: string;
  primaryImage: string;
  supplementaryImage: string;
}

// CSV data parsed into structured mapping
const imageMappings: Record<string, ImageMapping> = {
  // Introduction chapters
  "Platform Purpose": {
    chapterTitle: "Platform Purpose",
    primaryImage: "https://images.unsplash.com/photo-1503387761-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
  },
  "Who This Is For": {
    chapterTitle: "Who This Is For",
    primaryImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  "How To Use This System": {
    chapterTitle: "How To Use This System",
    primaryImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg"
  },
  "Platform Structure Overview": {
    chapterTitle: "Platform Structure Overview",
    primaryImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
  },
  "Core Principles": {
    chapterTitle: "Core Principles",
    primaryImage: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
  },
  "Expected Outcome": {
    chapterTitle: "Expected Outcome",
    primaryImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
  },
  
  // Portfolio References chapters
  "Global Portfolio References": {
    chapterTitle: "Global Portfolio References",
    primaryImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
  },
  "Indian Portfolio References": {
    chapterTitle: "Indian Portfolio References",
    primaryImage: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg"
  },
  "Portfolio Type Categorization": {
    chapterTitle: "Portfolio Type Categorization",
    primaryImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
  },
  "Structure Analysis Checklist": {
    chapterTitle: "Structure Analysis Checklist",
    primaryImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
  },
  "Page Sequencing Patterns": {
    chapterTitle: "Page Sequencing Patterns",
    primaryImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
  },
  "Common Mistakes Archive": {
    chapterTitle: "Common Mistakes Archive",
    primaryImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  
  // Firm Classification chapters
  "Firm Classification by Scale": {
    chapterTitle: "Firm Classification by Scale",
    primaryImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
  },
  "Firm Classification by City": {
    chapterTitle: "Firm Classification by City",
    primaryImage: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg"
  },
  "Internship Suitability Matrix": {
    chapterTitle: "Internship Suitability Matrix",
    primaryImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  "Firm Study Checklist": {
    chapterTitle: "Firm Study Checklist",
    primaryImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
  },
  
  // Portfolio Structure chapters
  "Ideal Page Count Strategy": {
    chapterTitle: "Ideal Page Count Strategy",
    primaryImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
  },
  "Project Structure Framework": {
    chapterTitle: "Project Structure Framework",
    primaryImage: "https://images.unsplash.com/photo-1503387760-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
  },
  "Technical Section Engineering": {
    chapterTitle: "Technical Section Engineering",
    primaryImage: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/256397/pexels-photo-256397.jpeg"
  },
  "Content Balance Formula": {
    chapterTitle: "Content Balance Formula",
    primaryImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
  },
  
  // Grid System chapters
  "Grid System": {
    chapterTitle: "Grid System",
    primaryImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg"
  },
  "Typography Hierarchy": {
    chapterTitle: "Typography Hierarchy",
    primaryImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg"
  },
  "Line Weight Discipline": {
    chapterTitle: "Line Weight Discipline",
    primaryImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg"
  },
  "Page Rhythm": {
    chapterTitle: "Page Rhythm",
    primaryImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
  },
  
  // Drawing Benchmark chapters
  "Plan Drawing Benchmark": {
    chapterTitle: "Plan Drawing Benchmark",
    primaryImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg"
  },
  "Section Benchmark": {
    chapterTitle: "Section Benchmark",
    primaryImage: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/256397/pexels-photo-256397.jpeg"
  },
  "Working Drawing Sample": {
    chapterTitle: "Working Drawing Sample",
    primaryImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
  },
  "Detail Drawing Benchmark": {
    chapterTitle: "Detail Drawing Benchmark",
    primaryImage: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg"
  },
  
  // Template chapters
  "Choosing Page Size": {
    chapterTitle: "Choosing Page Size",
    primaryImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/4792488/pexels-photo-4792488.jpeg"
  },
  "Portrait vs Landscape Strategy": {
    chapterTitle: "Portrait vs Landscape Strategy",
    primaryImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/5691613/pexels-photo-5691613.jpeg"
  },
  "A4 vs A3 Logic": {
    chapterTitle: "A4 vs A3 Logic",
    primaryImage: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg"
  },
  "Template Archetypes": {
    chapterTitle: "Template Archetypes",
    primaryImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg"
  },
  "Minimal Template System": {
    chapterTitle: "Minimal Template System",
    primaryImage: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/6373298/pexels-photo-6373298.jpeg"
  },
  "Editorial Template System": {
    chapterTitle: "Editorial Template System",
    primaryImage: "https://images.unsplash.com/photo-1529336953121-ad3b0f1a0d7f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/6177607/pexels-photo-6177607.jpeg"
  },
  "Technical Template System": {
    chapterTitle: "Technical Template System",
    primaryImage: "https://images.unsplash.com/photo-1581093458791-9f3c1f27f5b6?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg"
  },
  "Bold Visual Template System": {
    chapterTitle: "Bold Visual Template System",
    primaryImage: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg"
  },
  
  // Resume & Application chapters
  "Internship Resume Structure": {
    chapterTitle: "Internship Resume Structure",
    primaryImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg"
  },
  "Resume Design Rules": {
    chapterTitle: "Resume Design Rules",
    primaryImage: "https://images.unsplash.com/photo-1573497161161-c3c6fef12e7d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg"
  },
  "Application Email Structure": {
    chapterTitle: "Application Email Structure",
    primaryImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/5054354/pexels-photo-5054354.jpeg"
  },
  "File Naming Discipline": {
    chapterTitle: "File Naming Discipline",
    primaryImage: "https://images.unsplash.com/photo-1586282023358-4a5f7a90cfa5?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/6177540/pexels-photo-6177540.jpeg"
  },
  
  // Software Skills chapters
  "Drafting & Working Drawings": {
    chapterTitle: "Drafting & Working Drawings",
    primaryImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
  },
  "BIM & Revit Workflow": {
    chapterTitle: "BIM & Revit Workflow",
    primaryImage: "https://images.unsplash.com/photo-1581091012184-5c0f1fbb0e4a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
  },
  "Visualization & Rendering": {
    chapterTitle: "Visualization & Rendering",
    primaryImage: "https://images.unsplash.com/photo-1604014237744-7b6b50e0b0d1?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg"
  },
  "Environmental Analysis Skills": {
    chapterTitle: "Environmental Analysis Skills",
    primaryImage: "https://images.unsplash.com/photo-1581092334421-8a1d7c9e2a45?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/979999/pexels-photo-979999.jpeg"
  },
  
  // Common Mistakes chapters
  "Over-Rendering Mistake": {
    chapterTitle: "Over-Rendering Mistake",
    primaryImage: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
  },
  "Weak Section Quality": {
    chapterTitle: "Weak Section Quality",
    primaryImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
  },
  "Poor Grid Discipline": {
    chapterTitle: "Poor Grid Discipline",
    primaryImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg"
  },
  "Excessive Page Count": {
    chapterTitle: "Excessive Page Count",
    primaryImage: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
  },
  
  // Indian Practice Ecosystem
  "Indian Practice Ecosystem Map": {
    chapterTitle: "Indian Practice Ecosystem Map",
    primaryImage: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg"
  },
  "Scale of Practice (Small–Corporate)": {
    chapterTitle: "Scale of Practice (Small–Corporate)",
    primaryImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
  },
  "Design Orientation Axis": {
    chapterTitle: "Design Orientation Axis",
    primaryImage: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
  },
  "Internship Exposure Typology": {
    chapterTitle: "Internship Exposure Typology",
    primaryImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
  },
  
  // City Practice chapters
  "Mumbai Practice Landscape": {
    chapterTitle: "Mumbai Practice Landscape",
    primaryImage: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg"
  },
  "Delhi NCR Corporate Landscape": {
    chapterTitle: "Delhi NCR Corporate Landscape",
    primaryImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg"
  },
  "Bengaluru Sustainable & Tech Firms": {
    chapterTitle: "Bengaluru Sustainable & Tech Firms",
    primaryImage: "https://images.unsplash.com/photo-1585508889435-67c7e80c0e4d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg"
  },
  "Ahmedabad Craft & Institutional Culture": {
    chapterTitle: "Ahmedabad Craft & Institutional Culture",
    primaryImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3013919/pexels-photo-3013919.jpeg"
  },
  "Pune Emerging Practice Mix": {
    chapterTitle: "Pune Emerging Practice Mix",
    primaryImage: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
  },
  
  // Volume II chapters from book
  "The Indian Architectural Practice Ecosystem": {
    chapterTitle: "The Indian Architectural Practice Ecosystem",
    primaryImage: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg"
  },
  "Classification of Firms by Scale": {
    chapterTitle: "Classification of Firms by Scale",
    primaryImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
  },
  "Classification by Design Philosophy": {
    chapterTitle: "Classification by Design Philosophy",
    primaryImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
  },
  "Classification by Technical Depth": {
    chapterTitle: "Classification by Technical Depth",
    primaryImage: "https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
  },
  
  // Volume III chapters
  "Defining Portfolio Archetypes": {
    chapterTitle: "Defining Portfolio Archetypes",
    primaryImage: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg"
  },
  "Corporate-Oriented Portfolio Structure": {
    chapterTitle: "Corporate-Oriented Portfolio Structure",
    primaryImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  "Boutique-Oriented Portfolio Structure": {
    chapterTitle: "Boutique-Oriented Portfolio Structure",
    primaryImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg"
  },
  "Sustainable Portfolio Structure": {
    chapterTitle: "Sustainable Portfolio Structure",
    primaryImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
  },
  "Interior Portfolio Structure": {
    chapterTitle: "Interior Portfolio Structure",
    primaryImage: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg"
  },
  "Urban Portfolio Structure": {
    chapterTitle: "Urban Portfolio Structure",
    primaryImage: "https://images.unsplash.com/photo-1551281044-8b3a6b6c9f3d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
  },
  
  // Volume IV chapters
  "Cover Page Architecture": {
    chapterTitle: "Cover Page Architecture",
    primaryImage: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1551281044-8b3a6b6c9f3d?auto=format&fit=crop&w=1400&q=80"
  },
  
  // Volume VI - Technical chapters (67-78)
  "Line Weight Hierarchy": {
    chapterTitle: "Line Weight Hierarchy",
    primaryImage: "https://images.unsplash.com/photo-1581091870627-3c3b4b8c2d55?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=80"
  },
  "Scale Discipline": {
    chapterTitle: "Scale Discipline",
    primaryImage: "https://images.unsplash.com/photo-1581090700227-1e8c1d4b8e8f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=1400&q=80"
  },
  "Dimensioning Standards": {
    chapterTitle: "Dimensioning Standards",
    primaryImage: "https://images.unsplash.com/photo-1581092334421-8a1d7c9e2a45?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1596496181871-9681eacf9764?auto=format&fit=crop&w=1400&q=80"
  },
  "Structural Awareness for Students": {
    chapterTitle: "Structural Awareness for Students",
    primaryImage: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581093588401-12e45f1d3e0c?auto=format&fit=crop&w=1400&q=80"
  },
  "Slab and Beam Logic Representation": {
    chapterTitle: "Slab and Beam Logic Representation",
    primaryImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80"
  },
  "Wall Section Intelligence": {
    chapterTitle: "Wall Section Intelligence",
    primaryImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581090700227-4c4c1d8b1d1f?auto=format&fit=crop&w=1400&q=80"
  },
  "Staircase Detail Engineering": {
    chapterTitle: "Staircase Detail Engineering",
    primaryImage: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581091870627-bb5a9d3f31c4?auto=format&fit=crop&w=1400&q=80"
  },
  "Toilet Detail Standards": {
    chapterTitle: "Toilet Detail Standards",
    primaryImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1600607687644-a3f1dfb07e6d?auto=format&fit=crop&w=1400&q=80"
  },
  "Annotation Systems": {
    chapterTitle: "Annotation Systems",
    primaryImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334390-23a9b07c9d76?auto=format&fit=crop&w=1400&q=80"
  },
  "Drawing Legibility at Print Scale": {
    chapterTitle: "Drawing Legibility at Print Scale",
    primaryImage: "https://images.unsplash.com/photo-1581092334421-b5f0b9f8b8f2?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334410-72e3b5c3b2f1?auto=format&fit=crop&w=1400&q=80"
  },
  "Avoiding Common Technical Errors": {
    chapterTitle: "Avoiding Common Technical Errors",
    primaryImage: "https://images.unsplash.com/photo-1581092334402-cc9d1c2e3f4a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334425-91c1d5a7d5f3?auto=format&fit=crop&w=1400&q=80"
  },
  "Balancing Render and Drafting Exposure": {
    chapterTitle: "Balancing Render and Drafting Exposure",
    primaryImage: "https://images.unsplash.com/photo-1581092334428-1e3c1a2f6b5a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334433-3b5e7d1c4f6a?auto=format&fit=crop&w=1400&q=80"
  },
  
  // Volume VII - Graphic System chapters (79-91)
  "Grid Systems in Portfolio Design": {
    chapterTitle: "Grid Systems in Portfolio Design",
    primaryImage: "https://images.unsplash.com/photo-1581092919534-9c0f1f6c7c0e?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334440-4b6e3f2c8d5f?auto=format&fit=crop&w=1400&q=80"
  },
  "Margin Control and White Space": {
    chapterTitle: "Margin Control and White Space",
    primaryImage: "https://images.unsplash.com/photo-1581092334445-5e4c3f7b1c6d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334450-8b1e7c4a5f2e?auto=format&fit=crop&w=1400&q=80"
  },
  "Font Selection Strategy": {
    chapterTitle: "Font Selection Strategy",
    primaryImage: "https://images.unsplash.com/photo-1581092334465-2e4c7f5b6d1a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334470-9c5f1d7e4b3f?auto=format&fit=crop&w=1400&q=80"
  },
  "Color Discipline": {
    chapterTitle: "Color Discipline",
    primaryImage: "https://images.unsplash.com/photo-1581092334475-3f5e7d1c4b2f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334480-4e7c5d1f3b6a?auto=format&fit=crop&w=1400&q=80"
  },
  "Monochrome vs Accent Strategy": {
    chapterTitle: "Monochrome vs Accent Strategy",
    primaryImage: "https://images.unsplash.com/photo-1581092334485-5f7d1c3e4b2f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334490-6d1c4f7e5b2a?auto=format&fit=crop&w=1400&q=80"
  },
  "Image Placement Systems": {
    chapterTitle: "Image Placement Systems",
    primaryImage: "https://images.unsplash.com/photo-1581092334495-7c4e5f1d2b3a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334500-8e1f3d7c4b2a?auto=format&fit=crop&w=1400&q=80"
  },
  "Modular Layout Logic": {
    chapterTitle: "Modular Layout Logic",
    primaryImage: "https://images.unsplash.com/photo-1581092334505-9f4c7d1e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334510-1c3f5e7d4b2a?auto=format&fit=crop&w=1400&q=80"
  },
  "Page Rhythm Engineering": {
    chapterTitle: "Page Rhythm Engineering",
    primaryImage: "https://images.unsplash.com/photo-1581092334515-2e7c4d1f3b6a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334520-3d5e7f1c4b2a?auto=format&fit=crop&w=1400&q=80"
  },
  "Alignment Discipline": {
    chapterTitle: "Alignment Discipline",
    primaryImage: "https://images.unsplash.com/photo-1581092334525-4c7f1d3e5b2a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334530-5e1c7d4f3b2a?auto=format&fit=crop&w=1400&q=80"
  },
  "Avoiding Graphic Noise": {
    chapterTitle: "Avoiding Graphic Noise",
    primaryImage: "https://images.unsplash.com/photo-1581092334535-6f4c7d1e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334540-7c5e1d3f4b2a?auto=format&fit=crop&w=1400&q=80"
  },
  "Professional Minimalism": {
    chapterTitle: "Professional Minimalism",
    primaryImage: "https://images.unsplash.com/photo-1581092334545-8d1f4c7e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334550-9e3c7d1f4b2a?auto=format&fit=crop&w=1400&q=80"
  },
  "Creating Cohesion Across Pages": {
    chapterTitle: "Creating Cohesion Across Pages",
    primaryImage: "https://images.unsplash.com/photo-1581092334555-1f4c7d3e5b2a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334560-2e5f7d1c4b3a?auto=format&fit=crop&w=1400&q=80"
  },
  
  // Volume VIII - Template chapters (92-105)
  "Adobe InDesign Workflow": {
    chapterTitle: "Adobe InDesign Workflow",
    primaryImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581090700227-1e8c1d4b8e8f?auto=format&fit=crop&w=1400&q=80"
  },
  "Illustrator Workflow": {
    chapterTitle: "Illustrator Workflow",
    primaryImage: "https://images.unsplash.com/photo-1581091870627-3c3b4b8c2d55?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80"
  },
  "Revit Sheet Export Discipline": {
    chapterTitle: "Revit Sheet Export Discipline",
    primaryImage: "https://images.unsplash.com/photo-1581092334390-23a9b07c9d76?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334402-cc9d1c2e3f4a?auto=format&fit=crop&w=1400&q=80"
  },
  "File Optimization": {
    chapterTitle: "File Optimization",
    primaryImage: "https://images.unsplash.com/photo-1581092334425-91c1d5a7d5f3?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334440-4b6e3f2c8d5f?auto=format&fit=crop&w=1400&q=80"
  },
  "PDF Compression Strategy": {
    chapterTitle: "PDF Compression Strategy",
    primaryImage: "https://images.unsplash.com/photo-1581092334455-1c5f3e7b4d2f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334465-2e4c7f5b6d1a?auto=format&fit=crop&w=1400&q=80"
  },
  "Naming and Version Control": {
    chapterTitle: "Naming and Version Control",
    primaryImage: "https://images.unsplash.com/photo-1581092334475-3f5e7d1c4b2f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334485-5f7d1c3e4b2f?auto=format&fit=crop&w=1400&q=80"
  },
  
  // Volume IX - Application chapters (106-118)
  "Resume Architecture": {
    chapterTitle: "Resume Architecture",
    primaryImage: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1586282023358-4a5f7a90cfa5?auto=format&fit=crop&w=1400&q=80"
  },
  "Resume Graphic Discipline": {
    chapterTitle: "Resume Graphic Discipline",
    primaryImage: "https://images.unsplash.com/photo-1573497161161-c3c6fef12e7d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=1400&q=80"
  },
  "Writing Internship Emails": {
    chapterTitle: "Writing Internship Emails",
    primaryImage: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
  },
  "Subject Line Strategy": {
    chapterTitle: "Subject Line Strategy",
    primaryImage: "https://images.unsplash.com/photo-1581090700227-4c4c1d8b1d1f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334515-2e7c4d1f3b6a?auto=format&fit=crop&w=1400&q=80"
  },
  "Cover Letter Structure": {
    chapterTitle: "Cover Letter Structure",
    primaryImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&w=1400&q=80"
  },
  "LinkedIn Optimization": {
    chapterTitle: "LinkedIn Optimization",
    primaryImage: "https://images.unsplash.com/photo-1492724441997-5d3e0b7c0b8f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80"
  },
  "Application Tracking System": {
    chapterTitle: "Application Tracking System",
    primaryImage: "https://images.unsplash.com/photo-1551281044-8b3a6b6c9f3d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=80"
  },
  "Internship Research Database": {
    chapterTitle: "Internship Research Database",
    primaryImage: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80"
  },
  "Portfolio Customization": {
    chapterTitle: "Portfolio Customization",
    primaryImage: "https://images.unsplash.com/photo-1581091215367-59ab6b7b6c3e?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1400&q=80"
  },
  "Common Application Mistakes": {
    chapterTitle: "Common Application Mistakes",
    primaryImage: "https://images.unsplash.com/photo-1581092334535-6f4c7d1e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1581092334545-8d1f4c7e3b2a?auto=format&fit=crop&w=1400&q=80"
  },
  "Interview Preparation": {
    chapterTitle: "Interview Preparation",
    primaryImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
  },
  "Presenting Portfolio Verbally": {
    chapterTitle: "Presenting Portfolio Verbally",
    primaryImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
  },
  "Converting Internship to Opportunity": {
    chapterTitle: "Converting Internship to Opportunity",
    primaryImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=80"
  },
  
  // Volume X - Evaluation chapters (119-128)
  "Self-Evaluation Matrix": {
    chapterTitle: "Self-Evaluation Matrix",
    primaryImage: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1551281044-8b3a6b6c9f3d?auto=format&fit=crop&w=1400&q=80"
  },
  "Portfolio Scoring System": {
    chapterTitle: "Portfolio Scoring System",
    primaryImage: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=80"
  },
  "Firm Compatibility Model": {
    chapterTitle: "Firm Compatibility Model",
    primaryImage: "https://images.unsplash.com/photo-1507208773393-40d9fc6704b3?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
  },
  "Match Score Calculation": {
    chapterTitle: "Match Score Calculation",
    primaryImage: "https://images.unsplash.com/photo-1523958203904-1d5c1f0b2b5e?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1526378722370-3b3f0a2e0c2a?auto=format&fit=crop&w=1400&q=80"
  },
  "High-Match vs Low-Match Strategy": {
    chapterTitle: "High-Match vs Low-Match Strategy",
    primaryImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1492724441997-6b3c0b5b3b9f?auto=format&fit=crop&w=1400&q=80"
  },
  "Annual Portfolio Updating": {
    chapterTitle: "Annual Portfolio Updating",
    primaryImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
  },
  "Documenting Internship Learning": {
    chapterTitle: "Documenting Internship Learning",
    primaryImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1492724441997-3c1d4d6c3d76?auto=format&fit=crop&w=1400&q=80"
  },
  "Transition to Thesis Portfolio": {
    chapterTitle: "Transition to Thesis Portfolio",
    primaryImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1503387763-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
  },
  "Transition to Professional Portfolio": {
    chapterTitle: "Transition to Professional Portfolio",
    primaryImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=80"
  },
  "Lifelong Portfolio System": {
    chapterTitle: "Lifelong Portfolio System",
    primaryImage: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1400&q=80",
    supplementaryImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80"
  }
};

// Default fallback images
const DEFAULT_PRIMARY_IMAGE = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80";
const DEFAULT_SUPPLEMENTARY_IMAGE = "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg";

// Chapter title mapping (chapter number to title)
export const chapterTitlesByNumber: Record<number, string> = {
  1: "The Portfolio as Architectural Narrative",
  2: "The Portfolio as Professional Instrument",
  3: "Difference Between Academic Submission and Professional Portfolio",
  4: "Portfolio as Design Argument",
  5: "Portfolio as Evidence of Competence",
  6: "Portfolio as Intellectual Position",
  7: "The Psychology of Reviewers",
  8: "Attention Span and Visual Cognition",
  9: "Portfolio as Time-Compressed Architecture",
  10: "Defining Personal Direction Before Designing",
  11: "The Indian Architectural Practice Ecosystem",
  12: "Classification of Firms by Scale",
  13: "Classification by Design Philosophy",
  14: "Classification by Technical Depth",
  15: "City-Wise Practice Culture in India",
  16: "Internship Typologies",
  17: "Corporate Practice Structure",
  18: "Boutique Studio Structure",
  19: "Sustainable Practice Framework",
  20: "Urban Design and Research Firms",
  21: "Developer-Linked Offices",
  22: "Interior-Focused Practices",
  23: "Matching Portfolio Type to Firm Type",
  24: "Internship Suitability Matrix",
  25: "Firm Study Intelligence Framework",
  26: "Defining Portfolio Archetypes",
  27: "Corporate-Oriented Portfolio Structure",
  28: "Boutique-Oriented Portfolio Structure",
  29: "Sustainable Portfolio Structure",
  30: "Interior Portfolio Structure",
  31: "Urban Portfolio Structure",
  32: "Portfolio Objective Definition",
  33: "Project Selection Logic",
  34: "Portfolio Editing Discipline",
  35: "Portfolio Narrative Engineering",
  36: "Balancing Concept and Technical Depth",
  37: "Content Density Control",
  38: "Page Count Engineering",
  39: "Portfolio Sequencing Models",
  40: "First Project Strategy",
  41: "Cover Page Architecture",
  42: "Resume Integration Strategy",
  43: "Index Structuring Logic",
  44: "Project Order Framework",
  45: "Project Hierarchy Strategy",
  46: "Technical Section Placement",
  47: "Skill Section Integration",
  48: "Optional Work Inclusion Strategy",
  49: "Closing Strategy and Contact Clarity",
  50: "Portfolio Flow and Rhythm",
  51: "Project Overview Page Engineering",
  52: "Writing Studio Briefs Professionally",
  53: "Concept Diagram Construction",
  54: "Site Analysis Framework",
  55: "Climate Diagram Logic",
  56: "Plan Drawing Standards",
  57: "Section Drawing Intelligence",
  58: "Elevation Clarity Standards",
  59: "Structural Representation in Academic Work",
  60: "Diagrammatic Communication Systems",
  61: "Massing Evolution Documentation",
  62: "Circulation Logic Presentation",
  63: "Spatial Experience Rendering Strategy",
  64: "Interior vs Exterior Representation Balance",
  65: "Technical Detail Integration",
  66: "Working Drawing Presentation for Internships",
  67: "Line Weight Hierarchy",
  68: "Scale Discipline",
  69: "Dimensioning Standards",
  70: "Structural Awareness for Students",
  71: "Slab and Beam Logic Representation",
  72: "Wall Section Intelligence",
  73: "Staircase Detail Engineering",
  74: "Toilet Detail Standards",
  75: "Annotation Systems",
  76: "Drawing Legibility at Print Scale",
  77: "Avoiding Common Technical Errors",
  78: "Balancing Render and Drafting Exposure",
  79: "Grid Systems in Portfolio Design",
  80: "Margin Control and White Space",
  81: "Typography Hierarchy",
  82: "Font Selection Strategy",
  83: "Color Discipline",
  84: "Monochrome vs Accent Strategy",
  85: "Image Placement Systems",
  86: "Modular Layout Logic",
  87: "Page Rhythm Engineering",
  88: "Alignment Discipline",
  89: "Avoiding Graphic Noise",
  90: "Professional Minimalism",
  91: "Creating Cohesion Across Pages",
  92: "Choosing Page Size",
  93: "Portrait vs Landscape Strategy",
  94: "A4 vs A3 Logic",
  95: "Template Archetypes",
  96: "Minimal Template System",
  97: "Editorial Template System",
  98: "Technical Template System",
  99: "Bold Visual Template System",
  100: "Adobe InDesign Workflow",
  101: "Illustrator Workflow",
  102: "Revit Sheet Export Discipline",
  103: "File Optimization",
  104: "PDF Compression Strategy",
  105: "Naming and Version Control",
  106: "Resume Architecture",
  107: "Resume Graphic Discipline",
  108: "Writing Internship Emails",
  109: "Subject Line Strategy",
  110: "Cover Letter Structure",
  111: "LinkedIn Optimization",
  112: "Application Tracking System",
  113: "Internship Research Database",
  114: "Portfolio Customization",
  115: "Common Application Mistakes",
  116: "Interview Preparation",
  117: "Presenting Portfolio Verbally",
  118: "Converting Internship to Opportunity",
  119: "Self-Evaluation Matrix",
  120: "Portfolio Scoring System",
  121: "Firm Compatibility Scoring Model",
  122: "Match Score Calculation Method",
  123: "High-Match vs Low-Match Strategy",
  124: "Annual Portfolio Updating System",
  125: "Documenting Internship Learning",
  126: "Transitioning to Thesis Portfolio",
  127: "Transitioning to Professional Portfolio",
  128: "Building a Lifelong Portfolio System"
};

// Get images for a chapter by chapter number
export function getImagesForChapter(chapterNum: number): { primary: string; supplementary: string } {
  const title = chapterTitlesByNumber[chapterNum];
  
  if (title && imageMappings[title]) {
    return {
      primary: imageMappings[title].primaryImage,
      supplementary: imageMappings[title].supplementaryImage
    };
  }
  
  // Try to find by partial title match
  const matchingKey = Object.keys(imageMappings).find(key => 
    title && key.toLowerCase().includes(title.toLowerCase().split(' ').slice(0, 3).join(' '))
  );
  
  if (matchingKey) {
    return {
      primary: imageMappings[matchingKey].primaryImage,
      supplementary: imageMappings[matchingKey].supplementaryImage
    };
  }
  
  // Return defaults
  return {
    primary: DEFAULT_PRIMARY_IMAGE,
    supplementary: DEFAULT_SUPPLEMENTARY_IMAGE
  };
}

// Get images for a chapter by title
export function getImagesForChapterTitle(title: string): { primary: string; supplementary: string } {
  if (imageMappings[title]) {
    return {
      primary: imageMappings[title].primaryImage,
      supplementary: imageMappings[title].supplementaryImage
    };
  }
  
  return {
    primary: DEFAULT_PRIMARY_IMAGE,
    supplementary: DEFAULT_SUPPLEMENTARY_IMAGE
  };
}

export { imageMappings };
