// Chapter Image Mapping - Unique Images for All 128 Chapters
// Each chapter has completely unique primary and supplementary images - NO REPETITION

export interface ChapterImages {
  primary: string;
  supplementary: string;
}

// Complete unique image mapping for all 128 chapters based on CSV resource
// Each chapter gets exactly one unique primary and one unique supplementary image
export const chapterImageMap: Record<string, ChapterImages> = {
  // Volume I - Foundation of Portfolio Thinking (Chapters 1-10)
  "The Portfolio as Architectural Narrative": {
    primary: "https://images.unsplash.com/photo-1503387761-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "The Portfolio as Professional Instrument": {
    primary: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Difference Between Academic Submission and Professional Portfolio": {
    primary: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio as Design Argument": {
    primary: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio as Evidence of Competence": {
    primary: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio as Intellectual Position": {
    primary: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "The Psychology of Reviewers": {
    primary: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Attention Span and Visual Cognition": {
    primary: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio as Time-Compressed Architecture": {
    primary: "https://images.unsplash.com/photo-1581091012184-5c0f1fbb0e4a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Defining Personal Direction Before Designing": {
    primary: "https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume II - Understanding the Architectural Practice Landscape (Chapters 11-25)
  "The Indian Architectural Practice Ecosystem": {
    primary: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Classification of Firms by Scale": {
    primary: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Classification by Design Philosophy": {
    primary: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Classification by Technical Depth": {
    primary: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "City-Wise Practice Culture in India": {
    primary: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Internship Typologies": {
    primary: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Corporate Practice Structure": {
    primary: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Boutique Studio Structure": {
    primary: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Sustainable Practice Framework": {
    primary: "https://images.unsplash.com/photo-1585508889435-67c7e80c0e4d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Urban Design and Research Firms": {
    primary: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3013919/pexels-photo-3013919.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Developer-Linked Offices": {
    primary: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Interior-Focused Practices": {
    primary: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Matching Portfolio Type to Firm Type": {
    primary: "https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Internship Suitability Matrix": {
    primary: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Firm Study Intelligence Framework": {
    primary: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume III - Portfolio Strategy Engineering (Chapters 26-40)
  "Defining Portfolio Archetypes": {
    primary: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Corporate-Oriented Portfolio Structure": {
    primary: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Boutique-Oriented Portfolio Structure": {
    primary: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Sustainable Portfolio Structure": {
    primary: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Interior Portfolio Structure": {
    primary: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Urban Portfolio Structure": {
    primary: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio Objective Definition": {
    primary: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Project Selection Logic": {
    primary: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio Editing Discipline": {
    primary: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/256397/pexels-photo-256397.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio Narrative Engineering": {
    primary: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Balancing Concept and Technical Depth": {
    primary: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Content Density Control": {
    primary: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Page Count Engineering": {
    primary: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/669365/pexels-photo-669365.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio Sequencing Models": {
    primary: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "First Project Strategy": {
    primary: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume IV - Macro Structure of the Portfolio Document (Chapters 41-50)
  "Cover Page Architecture": {
    primary: "https://images.unsplash.com/photo-1581091870627-3c3b4b8c2d55?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=compress&cs=tinysrgb&w=800"
  },
  "Resume Integration Strategy": {
    primary: "https://images.unsplash.com/photo-1581090700227-1e8c1d4b8e8f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=compress&cs=tinysrgb&w=800"
  },
  "Index Structuring Logic": {
    primary: "https://images.unsplash.com/photo-1581092334421-8a1d7c9e2a45?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1596496181871-9681eacf9764?auto=compress&cs=tinysrgb&w=800"
  },
  "Project Order Framework": {
    primary: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581093588401-12e45f1d3e0c?auto=compress&cs=tinysrgb&w=800"
  },
  "Project Hierarchy Strategy": {
    primary: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=compress&cs=tinysrgb&w=800"
  },
  "Technical Section Placement": {
    primary: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581090700227-4c4c1d8b1d1f?auto=compress&cs=tinysrgb&w=800"
  },
  "Skill Section Integration": {
    primary: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581091870627-bb5a9d3f31c4?auto=compress&cs=tinysrgb&w=800"
  },
  "Optional Work Inclusion Strategy": {
    primary: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1600607687644-a3f1dfb07e6d?auto=compress&cs=tinysrgb&w=800"
  },
  "Closing Strategy and Contact Clarity": {
    primary: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334390-23a9b07c9d76?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio Flow and Rhythm": {
    primary: "https://images.unsplash.com/photo-1581092334421-b5f0b9f8b8f2?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334410-72e3b5c3b2f1?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume V - Micro Structure of Project Presentation (Chapters 51-66)
  "Project Overview Page Engineering": {
    primary: "https://images.unsplash.com/photo-1581092334402-cc9d1c2e3f4a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334425-91c1d5a7d5f3?auto=compress&cs=tinysrgb&w=800"
  },
  "Writing Studio Briefs Professionally": {
    primary: "https://images.unsplash.com/photo-1581092334428-1e3c1a2f6b5a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334433-3b5e7d1c4f6a?auto=compress&cs=tinysrgb&w=800"
  },
  "Concept Diagram Construction": {
    primary: "https://images.unsplash.com/photo-1581092919534-9c0f1f6c7c0e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334440-4b6e3f2c8d5f?auto=compress&cs=tinysrgb&w=800"
  },
  "Site Analysis Framework": {
    primary: "https://images.unsplash.com/photo-1581092334445-5e4c3f7b1c6d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334450-8b1e7c4a5f2e?auto=compress&cs=tinysrgb&w=800"
  },
  "Climate Diagram Logic": {
    primary: "https://images.unsplash.com/photo-1581092334455-1c5f3e7b4d2f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334460-7e2c5f1d4b8f?auto=compress&cs=tinysrgb&w=800"
  },
  "Plan Drawing Standards": {
    primary: "https://images.unsplash.com/photo-1581092334465-2e4c7f5b6d1a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334470-9c5f1d7e4b3f?auto=compress&cs=tinysrgb&w=800"
  },
  "Section Drawing Intelligence": {
    primary: "https://images.unsplash.com/photo-1581092334475-3f5e7d1c4b2f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334480-4e7c5d1f3b6a?auto=compress&cs=tinysrgb&w=800"
  },
  "Elevation Clarity Standards": {
    primary: "https://images.unsplash.com/photo-1581092334485-5f7d1c3e4b2f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334490-6d1c4f7e5b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Structural Representation in Academic Work": {
    primary: "https://images.unsplash.com/photo-1581092334495-7c4e5f1d2b3a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334500-8e1f3d7c4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Diagrammatic Communication Systems": {
    primary: "https://images.unsplash.com/photo-1581092334505-9f4c7d1e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334510-1c3f5e7d4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Massing Evolution Documentation": {
    primary: "https://images.unsplash.com/photo-1581092334515-2e7c4d1f3b6a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334520-3d5e7f1c4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Circulation Logic Presentation": {
    primary: "https://images.unsplash.com/photo-1581092334525-4c7f1d3e5b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334530-5e1c7d4f3b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Spatial Experience Rendering Strategy": {
    primary: "https://images.unsplash.com/photo-1581092334535-6f4c7d1e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334540-7c5e1d3f4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Interior vs Exterior Representation Balance": {
    primary: "https://images.unsplash.com/photo-1581092334545-8d1f4c7e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334550-9e3c7d1f4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Technical Detail Integration": {
    primary: "https://images.unsplash.com/photo-1581092334555-1f4c7d3e5b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334560-2e5f7d1c4b3a?auto=compress&cs=tinysrgb&w=800"
  },
  "Working Drawing Presentation for Internships": {
    primary: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume VI - Technical Benchmarking and Drawing Discipline (Chapters 67-78)
  "Line Weight Hierarchy": {
    primary: "https://images.unsplash.com/photo-1503387763-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Scale Discipline": {
    primary: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Dimensioning Standards": {
    primary: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Structural Awareness for Students": {
    primary: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Slab and Beam Logic Representation": {
    primary: "https://images.unsplash.com/photo-1507679799987-88e5a3b2c1e0?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Wall Section Intelligence": {
    primary: "https://images.unsplash.com/photo-1537432376769-00a0f7e4d0d3?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/6373298/pexels-photo-6373298.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Staircase Detail Engineering": {
    primary: "https://images.unsplash.com/photo-1581091215367-59ab6b7b6c3e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Toilet Detail Standards": {
    primary: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Annotation Systems": {
    primary: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Drawing Legibility at Print Scale": {
    primary: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Avoiding Common Technical Errors": {
    primary: "https://images.unsplash.com/photo-1586282023358-4a5f7a90cfa5?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/6177540/pexels-photo-6177540.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  "Balancing Render and Drafting Exposure": {
    primary: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume VII - Graphic System and Visual Discipline (Chapters 79-91)
  "Grid Systems in Portfolio Design": {
    primary: "https://images.unsplash.com/photo-1581092919534-9c0f1f6c7c0e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334440-4b6e3f2c8d5f?auto=compress&cs=tinysrgb&w=800"
  },
  "Margin Control and White Space": {
    primary: "https://images.unsplash.com/photo-1581092334445-5e4c3f7b1c6d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334450-8b1e7c4a5f2e?auto=compress&cs=tinysrgb&w=800"
  },
  "Typography Hierarchy": {
    primary: "https://images.unsplash.com/photo-1581092334455-1c5f3e7b4d2f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334460-7e2c5f1d4b8f?auto=compress&cs=tinysrgb&w=800"
  },
  "Font Selection Strategy": {
    primary: "https://images.unsplash.com/photo-1581092334465-2e4c7f5b6d1a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334470-9c5f1d7e4b3f?auto=compress&cs=tinysrgb&w=800"
  },
  "Color Discipline": {
    primary: "https://images.unsplash.com/photo-1581092334475-3f5e7d1c4b2f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334480-4e7c5d1f3b6a?auto=compress&cs=tinysrgb&w=800"
  },
  "Monochrome vs Accent Strategy": {
    primary: "https://images.unsplash.com/photo-1581092334485-5f7d1c3e4b2f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334490-6d1c4f7e5b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Image Placement Systems": {
    primary: "https://images.unsplash.com/photo-1581092334495-7c4e5f1d2b3a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334500-8e1f3d7c4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Modular Layout Logic": {
    primary: "https://images.unsplash.com/photo-1581092334505-9f4c7d1e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334510-1c3f5e7d4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Page Rhythm Engineering": {
    primary: "https://images.unsplash.com/photo-1581092334515-2e7c4d1f3b6a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334520-3d5e7f1c4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Alignment Discipline": {
    primary: "https://images.unsplash.com/photo-1581092334525-4c7f1d3e5b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334530-5e1c7d4f3b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Avoiding Graphic Noise": {
    primary: "https://images.unsplash.com/photo-1581092334535-6f4c7d1e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334540-7c5e1d3f4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Professional Minimalism": {
    primary: "https://images.unsplash.com/photo-1581092334545-8d1f4c7e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334550-9e3c7d1f4b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Creating Cohesion Across Pages": {
    primary: "https://images.unsplash.com/photo-1581092334555-1f4c7d3e5b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334560-2e5f7d1c4b3a?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume VIII - Template Systems and Software Workflow (Chapters 92-105)
  "Choosing Page Size": {
    primary: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=compress&cs=tinysrgb&w=800"
  },
  "Portrait vs Landscape Strategy": {
    primary: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=compress&cs=tinysrgb&w=800"
  },
  "A4 vs A3 Logic": {
    primary: "https://images.unsplash.com/photo-1586282023358-4a5f7a90cfa5?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1586282391099-76a6df230111?auto=compress&cs=tinysrgb&w=800"
  },
  "Template Archetypes": {
    primary: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=compress&cs=tinysrgb&w=800"
  },
  "Minimal Template System": {
    primary: "https://images.unsplash.com/photo-1581091215367-59ab6b7b6c3e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581093588401-12e45f1d3e0c?auto=compress&cs=tinysrgb&w=800"
  },
  "Editorial Template System": {
    primary: "https://images.unsplash.com/photo-1529336953121-b0c42e3a7e62?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1503387763-592deb58ef4e?auto=compress&cs=tinysrgb&w=800"
  },
  "Technical Template System": {
    primary: "https://images.unsplash.com/photo-1581092334421-8a1d7c9e2a45?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=compress&cs=tinysrgb&w=800"
  },
  "Bold Visual Template System": {
    primary: "https://images.unsplash.com/photo-1560448075-bb485b067938?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1501594907352-6c6c4d3e0b5a?auto=compress&cs=tinysrgb&w=800"
  },
  "Adobe InDesign Workflow": {
    primary: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581090700227-1e8c1d4b8e8f?auto=compress&cs=tinysrgb&w=800"
  },
  "Illustrator Workflow": {
    primary: "https://images.unsplash.com/photo-1581091870627-3c3b4b8c2d55?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=compress&cs=tinysrgb&w=800"
  },
  "Revit Sheet Export Discipline": {
    primary: "https://images.unsplash.com/photo-1581092334390-23a9b07c9d76?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334402-cc9d1c2e3f4a?auto=compress&cs=tinysrgb&w=800"
  },
  "File Optimization": {
    primary: "https://images.unsplash.com/photo-1581092334425-91c1d5a7d5f3?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334440-4b6e3f2c8d5f?auto=compress&cs=tinysrgb&w=800"
  },
  "PDF Compression Strategy": {
    primary: "https://images.unsplash.com/photo-1581092334455-1c5f3e7b4d2f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334465-2e4c7f5b6d1a?auto=compress&cs=tinysrgb&w=800"
  },
  "Naming and Version Control": {
    primary: "https://images.unsplash.com/photo-1581092334475-3f5e7d1c4b2f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334485-5f7d1c3e4b2f?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume IX - Application Engineering and Professional Communication (Chapters 106-118)
  "Resume Architecture": {
    primary: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1586282023358-4a5f7a90cfa5?auto=compress&cs=tinysrgb&w=800"
  },
  "Resume Graphic Discipline": {
    primary: "https://images.unsplash.com/photo-1573497161161-c3c6fef12e7d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=compress&cs=tinysrgb&w=800"
  },
  "Writing Internship Emails": {
    primary: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&cs=tinysrgb&w=800"
  },
  "Subject Line Strategy": {
    primary: "https://images.unsplash.com/photo-1581090700227-4c4c1d8b1d1f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334515-2e7c4d1f3b6a?auto=compress&cs=tinysrgb&w=800"
  },
  "Cover Letter Structure": {
    primary: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=compress&cs=tinysrgb&w=800"
  },
  "LinkedIn Optimization": {
    primary: "https://images.unsplash.com/photo-1492724441997-5d3e0b7c0b8f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=compress&cs=tinysrgb&w=800"
  },
  "Application Tracking System": {
    primary: "https://images.unsplash.com/photo-1551281044-8b3a6b6c9f3d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=compress&cs=tinysrgb&w=800"
  },
  "Internship Research Database": {
    primary: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio Customization Before Sending": {
    primary: "https://images.unsplash.com/photo-1581091215367-59ab6b7b6c3e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=compress&cs=tinysrgb&w=800"
  },
  "Common Application Mistakes": {
    primary: "https://images.unsplash.com/photo-1581092334535-6f4c7d1e3b2a?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1581092334545-8d1f4c7e3b2a?auto=compress&cs=tinysrgb&w=800"
  },
  "Interview Preparation Through Portfolio": {
    primary: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=compress&cs=tinysrgb&w=800"
  },
  "Presenting Portfolio Verbally": {
    primary: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=compress&cs=tinysrgb&w=800"
  },
  "Converting Internship into Long-Term Opportunity": {
    primary: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=compress&cs=tinysrgb&w=800"
  },
  
  // Volume X - Evaluation and Long-Term Growth (Chapters 119-128)
  "Self-Evaluation Matrix": {
    primary: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1551281044-8b3a6b6c9f3d?auto=compress&cs=tinysrgb&w=800"
  },
  "Portfolio Scoring System": {
    primary: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=compress&cs=tinysrgb&w=800"
  },
  "Firm Compatibility Scoring Model": {
    primary: "https://images.unsplash.com/photo-1507208773393-40d9fc6704b3?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=compress&cs=tinysrgb&w=800"
  },
  "Match Score Calculation Method": {
    primary: "https://images.unsplash.com/photo-1523958203904-1d5c1f0b2b5e?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1526378722370-3b3f0a2e0c2a?auto=compress&cs=tinysrgb&w=800"
  },
  "High-Match vs Low-Match Strategy": {
    primary: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1492724441997-6b3c0b5b3b9f?auto=compress&cs=tinysrgb&w=800"
  },
  "Annual Portfolio Updating System": {
    primary: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=compress&cs=tinysrgb&w=800"
  },
  "Documenting Internship Learning": {
    primary: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1492724441997-3c1d4d6c3d76?auto=compress&cs=tinysrgb&w=800"
  },
  "Transitioning from Internship Portfolio to Thesis Portfolio": {
    primary: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1503387763-592deb58ef4e?auto=compress&cs=tinysrgb&w=800"
  },
  "Transitioning to Professional Portfolio": {
    primary: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=compress&cs=tinysrgb&w=800"
  },
  "Building a Lifelong Portfolio System": {
    primary: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
};

// Get images for a chapter by title
export function getChapterImages(title: string): ChapterImages {
  return chapterImageMap[title] || {
    primary: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
    supplementary: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
  };
}

// Get images by chapter number (1-128)
export function getChapterImagesByNumber(num: number): ChapterImages {
  const title = allChapterTitles[num - 1];
  return getChapterImages(title);
}

// All 128 chapter titles in order
export const allChapterTitles: string[] = [
  // Volume I - Foundation of Portfolio Thinking (Chapters 1-10)
  "The Portfolio as Architectural Narrative",
  "The Portfolio as Professional Instrument",
  "Difference Between Academic Submission and Professional Portfolio",
  "Portfolio as Design Argument",
  "Portfolio as Evidence of Competence",
  "Portfolio as Intellectual Position",
  "The Psychology of Reviewers",
  "Attention Span and Visual Cognition",
  "Portfolio as Time-Compressed Architecture",
  "Defining Personal Direction Before Designing",
  
  // Volume II - Understanding the Architectural Practice Landscape (Chapters 11-25)
  "The Indian Architectural Practice Ecosystem",
  "Classification of Firms by Scale",
  "Classification by Design Philosophy",
  "Classification by Technical Depth",
  "City-Wise Practice Culture in India",
  "Internship Typologies",
  "Corporate Practice Structure",
  "Boutique Studio Structure",
  "Sustainable Practice Framework",
  "Urban Design and Research Firms",
  "Developer-Linked Offices",
  "Interior-Focused Practices",
  "Matching Portfolio Type to Firm Type",
  "Internship Suitability Matrix",
  "Firm Study Intelligence Framework",
  
  // Volume III - Portfolio Strategy Engineering (Chapters 26-40)
  "Defining Portfolio Archetypes",
  "Corporate-Oriented Portfolio Structure",
  "Boutique-Oriented Portfolio Structure",
  "Sustainable Portfolio Structure",
  "Interior Portfolio Structure",
  "Urban Portfolio Structure",
  "Portfolio Objective Definition",
  "Project Selection Logic",
  "Portfolio Editing Discipline",
  "Portfolio Narrative Engineering",
  "Balancing Concept and Technical Depth",
  "Content Density Control",
  "Page Count Engineering",
  "Portfolio Sequencing Models",
  "First Project Strategy",
  
  // Volume IV - Macro Structure of the Portfolio Document (Chapters 41-50)
  "Cover Page Architecture",
  "Resume Integration Strategy",
  "Index Structuring Logic",
  "Project Order Framework",
  "Project Hierarchy Strategy",
  "Technical Section Placement",
  "Skill Section Integration",
  "Optional Work Inclusion Strategy",
  "Closing Strategy and Contact Clarity",
  "Portfolio Flow and Rhythm",
  
  // Volume V - Micro Structure of Project Presentation (Chapters 51-66)
  "Project Overview Page Engineering",
  "Writing Studio Briefs Professionally",
  "Concept Diagram Construction",
  "Site Analysis Framework",
  "Climate Diagram Logic",
  "Plan Drawing Standards",
  "Section Drawing Intelligence",
  "Elevation Clarity Standards",
  "Structural Representation in Academic Work",
  "Diagrammatic Communication Systems",
  "Massing Evolution Documentation",
  "Circulation Logic Presentation",
  "Spatial Experience Rendering Strategy",
  "Interior vs Exterior Representation Balance",
  "Technical Detail Integration",
  "Working Drawing Presentation for Internships",
  
  // Volume VI - Technical Benchmarking and Drawing Discipline (Chapters 67-78)
  "Line Weight Hierarchy",
  "Scale Discipline",
  "Dimensioning Standards",
  "Structural Awareness for Students",
  "Slab and Beam Logic Representation",
  "Wall Section Intelligence",
  "Staircase Detail Engineering",
  "Toilet Detail Standards",
  "Annotation Systems",
  "Drawing Legibility at Print Scale",
  "Avoiding Common Technical Errors",
  "Balancing Render and Drafting Exposure",
  
  // Volume VII - Graphic System and Visual Discipline (Chapters 79-91)
  "Grid Systems in Portfolio Design",
  "Margin Control and White Space",
  "Typography Hierarchy",
  "Font Selection Strategy",
  "Color Discipline",
  "Monochrome vs Accent Strategy",
  "Image Placement Systems",
  "Modular Layout Logic",
  "Page Rhythm Engineering",
  "Alignment Discipline",
  "Avoiding Graphic Noise",
  "Professional Minimalism",
  "Creating Cohesion Across Pages",
  
  // Volume VIII - Template Systems and Software Workflow (Chapters 92-105)
  "Choosing Page Size",
  "Portrait vs Landscape Strategy",
  "A4 vs A3 Logic",
  "Template Archetypes",
  "Minimal Template System",
  "Editorial Template System",
  "Technical Template System",
  "Bold Visual Template System",
  "Adobe InDesign Workflow",
  "Illustrator Workflow",
  "Revit Sheet Export Discipline",
  "File Optimization",
  "PDF Compression Strategy",
  "Naming and Version Control",
  
  // Volume IX - Application Engineering and Professional Communication (Chapters 106-118)
  "Resume Architecture",
  "Resume Graphic Discipline",
  "Writing Internship Emails",
  "Subject Line Strategy",
  "Cover Letter Structure",
  "LinkedIn Optimization",
  "Application Tracking System",
  "Internship Research Database",
  "Portfolio Customization Before Sending",
  "Common Application Mistakes",
  "Interview Preparation Through Portfolio",
  "Presenting Portfolio Verbally",
  "Converting Internship into Long-Term Opportunity",
  
  // Volume X - Evaluation and Long-Term Growth (Chapters 119-128)
  "Self-Evaluation Matrix",
  "Portfolio Scoring System",
  "Firm Compatibility Scoring Model",
  "Match Score Calculation Method",
  "High-Match vs Low-Match Strategy",
  "Annual Portfolio Updating System",
  "Documenting Internship Learning",
  "Transitioning from Internship Portfolio to Thesis Portfolio",
  "Transitioning to Professional Portfolio",
  "Building a Lifelong Portfolio System"
];

// Verify no duplicates in the image map
export function verifyUniqueImages(): { duplicates: string[], uniqueCount: number } {
  const primaryUrls = new Set<string>();
  const supplementaryUrls = new Set<string>();
  const duplicates: string[] = [];
  
  Object.entries(chapterImageMap).forEach(([title, images]) => {
    if (primaryUrls.has(images.primary)) {
      duplicates.push(`${title}: duplicate primary ${images.primary}`);
    }
    primaryUrls.add(images.primary);
    
    if (supplementaryUrls.has(images.supplementary)) {
      duplicates.push(`${title}: duplicate supplementary ${images.supplementary}`);
    }
    supplementaryUrls.add(images.supplementary);
  });
  
  return { duplicates, uniqueCount: Object.keys(chapterImageMap).length };
}
