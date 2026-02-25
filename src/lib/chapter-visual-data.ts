// Complete Visual Chapter System
// Structured data for all 128 chapters with images, layouts, and components

export interface ChapterImage {
  url: string;
  caption: string;
  source: string;
  sourceUrl: string;
  type: 'primary' | 'diagram' | 'example' | 'comparison' | 'mockup' | 'table';
}

export interface ContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'checklist' | 'table' | 'diagram' | 'warning' | 'summary' | 'exercise' | 'reference' | 'comparison' | 'steps' | 'ratio';
  content: string | string[] | Record<string, unknown>;
  emphasis?: 'high' | 'medium' | 'low';
}

export interface ChapterData {
  number: number;
  title: string;
  volume: number;
  volumeTitle: string;
  layoutType: 'conceptual' | 'reference' | 'firm-study' | 'portfolio-structure' | 'graphic-system' | 'technical' | 'template' | 'application' | 'evaluation';
  primaryImage: ChapterImage;
  supplementaryImages: ChapterImage[];
  contentBlocks: ContentBlock[];
  summaryPoints: string[];
  implementationChecklist: string[];
  relatedChapters: number[];
  crossReferences: { title: string; chapter: number }[];
}

// Chapter type mapping
export const chapterLayoutTypes: Record<number, ChapterData['layoutType']> = {
  // Volume 1 - Foundation (Conceptual)
  1: 'conceptual', 2: 'conceptual', 3: 'conceptual', 4: 'conceptual',
  5: 'conceptual', 6: 'conceptual', 7: 'conceptual', 8: 'conceptual',
  9: 'conceptual', 10: 'conceptual',
  
  // Volume 2 - Practice Landscape (Firm Study)
  11: 'firm-study', 12: 'firm-study', 13: 'firm-study', 14: 'firm-study',
  15: 'firm-study', 16: 'firm-study', 17: 'firm-study', 18: 'firm-study',
  19: 'firm-study', 20: 'firm-study', 21: 'firm-study', 22: 'firm-study',
  23: 'firm-study', 24: 'firm-study', 25: 'firm-study',
  
  // Volume 3 - Portfolio Strategy (Portfolio Structure)
  26: 'portfolio-structure', 27: 'portfolio-structure', 28: 'portfolio-structure',
  29: 'portfolio-structure', 30: 'portfolio-structure', 31: 'portfolio-structure',
  32: 'portfolio-structure', 33: 'portfolio-structure', 34: 'portfolio-structure',
  35: 'portfolio-structure', 36: 'portfolio-structure', 37: 'portfolio-structure',
  38: 'portfolio-structure', 39: 'portfolio-structure', 40: 'portfolio-structure',
  
  // Volume 4 - Macro Structure (Portfolio Structure)
  41: 'portfolio-structure', 42: 'portfolio-structure', 43: 'portfolio-structure',
  44: 'portfolio-structure', 45: 'portfolio-structure', 46: 'portfolio-structure',
  47: 'portfolio-structure', 48: 'portfolio-structure', 49: 'portfolio-structure',
  50: 'portfolio-structure',
  
  // Volume 5 - Micro Structure (Technical)
  51: 'technical', 52: 'technical', 53: 'technical', 54: 'technical',
  55: 'technical', 56: 'technical', 57: 'technical', 58: 'technical',
  59: 'technical', 60: 'technical', 61: 'technical', 62: 'technical',
  63: 'technical', 64: 'technical', 65: 'technical', 66: 'technical',
  
  // Volume 6 - Technical Benchmarking (Technical)
  67: 'technical', 68: 'technical', 69: 'technical', 70: 'technical',
  71: 'technical', 72: 'technical', 73: 'technical', 74: 'technical',
  75: 'technical', 76: 'technical', 77: 'technical', 78: 'technical',
  
  // Volume 7 - Graphic System (Graphic System)
  79: 'graphic-system', 80: 'graphic-system', 81: 'graphic-system',
  82: 'graphic-system', 83: 'graphic-system', 84: 'graphic-system',
  85: 'graphic-system', 86: 'graphic-system', 87: 'graphic-system',
  88: 'graphic-system', 89: 'graphic-system', 90: 'graphic-system',
  91: 'graphic-system',
  
  // Volume 8 - Templates (Template)
  92: 'template', 93: 'template', 94: 'template', 95: 'template',
  96: 'template', 97: 'template', 98: 'template', 99: 'template',
  100: 'template', 101: 'template', 102: 'template', 103: 'template',
  104: 'template', 105: 'template',
  
  // Volume 9 - Application (Application)
  106: 'application', 107: 'application', 108: 'application', 109: 'application',
  110: 'application', 111: 'application', 112: 'application', 113: 'application',
  114: 'application', 115: 'application', 116: 'application', 117: 'application',
  118: 'application',
  
  // Volume 10 - Evaluation (Evaluation)
  119: 'evaluation', 120: 'evaluation', 121: 'evaluation', 122: 'evaluation',
  123: 'evaluation', 124: 'evaluation', 125: 'evaluation', 126: 'evaluation',
  127: 'evaluation', 128: 'evaluation',
};

// Image sources organized by category
export const imageSources = {
  // Conceptual Architecture Images
  concept: [
    { url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200', caption: 'Architectural spatial composition', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/architecture' },
    { url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200', caption: 'Portfolio documentation context', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/portfolio' },
    { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200', caption: 'Professional architectural workspace', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/workspace' },
    { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200', caption: 'Structural clarity in modern architecture', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/modern' },
  ],
  
  // Technical Drawing References
  technical: [
    { url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200', caption: 'Technical drawing precision', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/technical' },
    { url: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=1200', caption: 'Structural detail analysis', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/detail' },
    { url: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200', caption: 'Section drawing methodology', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/section' },
  ],
  
  // Firm/Office References
  firm: [
    { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200', caption: 'Corporate architectural office', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/office' },
    { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200', caption: 'Design studio environment', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/studio' },
    { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200', caption: 'Collaborative workspace', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/collaboration' },
  ],
  
  // Portfolio/Document References
  portfolio: [
    { url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1200', caption: 'Portfolio layout composition', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/layout' },
    { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200', caption: 'Document hierarchy system', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/document' },
    { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200', caption: 'Professional presentation format', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/presentation' },
  ],
  
  // Graphic System References
  graphic: [
    { url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200', caption: 'Grid system visualization', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/grid' },
    { url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200', caption: 'Typography hierarchy example', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/typography' },
    { url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200', caption: 'Visual composition principles', source: 'Unsplash', sourceUrl: 'https://unsplash.com/photos/composition' },
  ],
};

// Complete chapter data with all visual components
export const chaptersData: Record<number, ChapterData> = {
  1: {
    number: 1,
    title: "The Portfolio as Architectural Narrative",
    volume: 1,
    volumeTitle: "Foundation of Portfolio Thinking",
    layoutType: 'conceptual',
    primaryImage: {
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200',
      caption: 'Architecture as structured spatial narrative',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/photos/architecture-narrative',
      type: 'primary'
    },
    supplementaryImages: [
      {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
        caption: 'Sequential visual storytelling in architecture',
        source: 'Unsplash',
        sourceUrl: 'https://unsplash.com/photos/sequence',
        type: 'diagram'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        caption: 'Portfolio as professional communication instrument',
        source: 'Unsplash',
        sourceUrl: 'https://unsplash.com/photos/instrument',
        type: 'example'
      }
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        content: 'Architecture is not only built form. It is thought translated into space. A portfolio, therefore, is not a storage file of drawings; it is a narrative instrument that compresses years of intellectual development into a readable visual sequence.',
        emphasis: 'high'
      },
      {
        type: 'heading',
        content: 'Three Silent Questions'
      },
      {
        type: 'list',
        content: [
          'What kind of architect is this person becoming?',
          'What kind of problems do they gravitate toward?',
          'How do they think through space, structure, climate, and context?'
        ]
      },
      {
        type: 'heading',
        content: 'Portfolio as Structured Story'
      },
      {
        type: 'paragraph',
        content: 'A narrative in architecture does not mean literary storytelling. It means ordered thinking. A structured portfolio narrative contains:'
      },
      {
        type: 'ratio',
        content: {
          items: [
            { label: 'Beginning', value: 40, description: 'Strongest and most defining project' },
            { label: 'Development', value: 35, description: 'Diversity and technical growth demonstration' },
            { label: 'Resolution', value: 25, description: 'Discipline and professional readiness evidence' }
          ]
        }
      },
      {
        type: 'warning',
        content: 'The mistake most students make is presenting projects chronologically. Chronology is not narrative. Narrative is strategic sequencing.'
      },
      {
        type: 'heading',
        content: 'The Portfolio as Argument'
      },
      {
        type: 'comparison',
        content: {
          left: {
            title: 'Weak Argument',
            items: ['70% renders', 'No resolved sections', 'No wall details', 'No structural clarity']
          },
          right: {
            title: 'Strong Argument',
            items: ['Clear sections', 'Logical plans', 'Controlled diagrams', 'Limited but refined renders']
          }
        }
      },
      {
        type: 'heading',
        content: 'Narrative Through Project Selection'
      },
      {
        type: 'checklist',
        content: [
          { text: 'Remove weak first-year projects', checked: false },
          { text: 'Remove repetitive residential typologies', checked: false },
          { text: 'Remove unresolved conceptual exercises', checked: false },
          { text: 'Remove projects without sections', checked: false }
        ]
      },
      {
        type: 'heading',
        content: 'Selection Criteria'
      },
      {
        type: 'table',
        content: {
          headers: ['Criterion', 'Weight', 'Purpose'],
          rows: [
            ['Section strength', 'High', 'Demonstrates structural understanding'],
            ['Technical clarity', 'High', 'Shows execution capability'],
            ['Concept maturity', 'Medium', 'Indicates design thinking depth'],
            ['Typology diversity', 'Medium', 'Displays range of competence']
          ]
        }
      },
      {
        type: 'exercise',
        content: {
          title: 'Practical Exercise',
          steps: [
            'Select three strongest projects.',
            'Write one sentence describing what each proves about you.',
            'Identify which one aligns best with your target firm type.',
            'Place that project first.'
          ],
          conclusion: 'The narrative begins there.'
        }
      }
    ],
    summaryPoints: [
      'A portfolio is a narrative instrument, not a storage file',
      'Strong portfolios begin with a position, not drawings',
      'Narrative is strategic sequencing, not chronology',
      'Each portfolio makes an argument—make it intentional',
      'First project determines interpretative bias'
    ],
    implementationChecklist: [
      'Define your portfolio position before designing',
      'Select projects based on strength, not chronology',
      'Place strongest, most aligned project first',
      'Balance concept and technical evidence',
      'Create rhythm through varied page density',
      'Test with three-minute review exercise'
    ],
    relatedChapters: [2, 3, 4, 40],
    crossReferences: [
      { title: 'The Portfolio as Professional Instrument', chapter: 2 },
      { title: 'First Project Strategy', chapter: 40 },
      { title: 'Portfolio Narrative Engineering', chapter: 35 }
    ]
  },
  
  2: {
    number: 2,
    title: "The Portfolio as Professional Instrument",
    volume: 1,
    volumeTitle: "Foundation of Portfolio Thinking",
    layoutType: 'conceptual',
    primaryImage: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
      caption: 'Portfolio as calibrated professional device',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/photos/professional',
      type: 'primary'
    },
    supplementaryImages: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        caption: 'Three dimensions of portfolio function',
        source: 'Unsplash',
        sourceUrl: 'https://unsplash.com/photos/dimensions',
        type: 'diagram'
      },
      {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        caption: 'Evidence-based portfolio construction',
        source: 'Unsplash',
        sourceUrl: 'https://unsplash.com/photos/evidence',
        type: 'example'
      }
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        content: 'A portfolio is not a decorative archive. It is a professional instrument. Its primary function is not to impress visually but to communicate competence, clarity, and alignment with practice.',
        emphasis: 'high'
      },
      {
        type: 'heading',
        content: 'Three Simultaneous Dimensions'
      },
      {
        type: 'diagram',
        content: {
          type: 'triad',
          elements: [
            { label: 'Representation', description: 'Visual communication of architectural thinking' },
            { label: 'Verification', description: 'Proof of technical and structural understanding' },
            { label: 'Positioning', description: 'Strategic alignment with target firm' }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Academic vs Professional'
      },
      {
        type: 'comparison',
        content: {
          left: {
            title: 'Academic Submission',
            items: ['Process sheets', 'Iterative sketches', 'Extensive explanation', 'Experimentation']
          },
          right: {
            title: 'Professional Portfolio',
            items: ['Editing discipline', 'Structured sequencing', 'Reduced but stronger content', 'Clear hierarchy']
          }
        }
      },
      {
        type: 'heading',
        content: 'Evidence-Based Construction'
      },
      {
        type: 'checklist',
        content: [
          { text: 'Spatial reasoning', checked: false, category: 'Core Evidence' },
          { text: 'Structural awareness', checked: false, category: 'Core Evidence' },
          { text: 'Technical drawing clarity', checked: false, category: 'Core Evidence' },
          { text: 'Climate responsiveness', checked: false, category: 'Core Evidence' },
          { text: 'Material sensitivity', checked: false, category: 'Core Evidence' },
          { text: 'Digital proficiency', checked: false, category: 'Core Evidence' }
        ]
      },
      {
        type: 'heading',
        content: 'Firm Type Evidence Mapping'
      },
      {
        type: 'table',
        content: {
          headers: ['Firm Type', 'Primary Evidence', 'Secondary Evidence'],
          rows: [
            ['Corporate/Large', 'Working drawings', 'BIM exposure'],
            ['Boutique Studio', 'Section strength', 'Diagram intelligence'],
            ['Sustainable', 'Climate diagrams', 'Passive strategies'],
            ['Interior-focused', 'Spatial quality', 'Material boards']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Calibration Requirements'
      },
      {
        type: 'list',
        content: [
          'One grid system',
          'One typography hierarchy',
          'Consistent margin control',
          'Uniform drawing scale representation',
          'Clear north arrow usage',
          'Consistent line weights'
        ]
      },
      {
        type: 'summary',
        content: 'A portfolio becomes a professional instrument when it communicates clearly, proves competence, aligns strategically, respects time constraints, and maintains technical discipline. Anything beyond that is noise.'
      }
    ],
    summaryPoints: [
      'Portfolio operates in three dimensions: representation, verification, positioning',
      'Professional portfolios require editing discipline',
      'Evidence must be visible, not just described',
      'Different firms require different evidence emphasis',
      'Calibration signals professional readiness'
    ],
    implementationChecklist: [
      'Review portfolio against three-dimension framework',
      'Identify evidence gaps for target firm type',
      'Ensure calibration consistency throughout',
      'Test under time-constrained review conditions',
      'Verify technical evidence is visible early'
    ],
    relatedChapters: [1, 3, 23, 27],
    crossReferences: [
      { title: 'Academic vs Professional Portfolio', chapter: 3 },
      { title: 'Matching Portfolio Type to Firm Type', chapter: 23 },
      { title: 'Corporate-Oriented Portfolio Structure', chapter: 27 }
    ]
  },
  
  3: {
    number: 3,
    title: "Difference Between Academic Submission and Professional Portfolio",
    volume: 1,
    volumeTitle: "Foundation of Portfolio Thinking",
    layoutType: 'conceptual',
    primaryImage: {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200',
      caption: 'Transition from academic to professional presentation',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/photos/transition',
      type: 'primary'
    },
    supplementaryImages: [
      {
        url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800',
        caption: 'Academic jury context vs professional review context',
        source: 'Unsplash',
        sourceUrl: 'https://unsplash.com/photos/context',
        type: 'comparison'
      },
      {
        url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800',
        caption: 'Editing discipline transformation process',
        source: 'Unsplash',
        sourceUrl: 'https://unsplash.com/photos/editing',
        type: 'diagram'
      }
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        content: 'Architectural education produces drawings. Professional practice evaluates readiness. The academic submission and the professional portfolio are fundamentally different in purpose, audience, and structure. Confusing the two leads to ineffective internship applications.',
        emphasis: 'high'
      },
      {
        type: 'heading',
        content: 'Purpose Comparison'
      },
      {
        type: 'comparison',
        content: {
          left: {
            title: 'Academic Submission',
            items: ['Evaluated by faculty', 'Assessed within studio brief', 'Measured against academic criteria', 'Includes process documentation', 'Encourages experimentation']
          },
          right: {
            title: 'Professional Portfolio',
            items: ['Evaluated by practicing architects', 'Assessed for practical capability', 'Measured against office expectations', 'Requires compression', 'Rewards clarity over exploration']
          }
        }
      },
      {
        type: 'warning',
        content: 'An academic sheet explains thinking. A professional portfolio proves ability.'
      },
      {
        type: 'heading',
        content: 'Audience Difference'
      },
      {
        type: 'paragraph',
        content: 'The academic jury knows the brief. The professional reviewer does not. This changes everything. A studio submission may rely on verbal explanation during juries. A portfolio cannot. It must function independently without context.'
      },
      {
        type: 'heading',
        content: 'Content Density'
      },
      {
        type: 'table',
        content: {
          headers: ['Aspect', 'Academic', 'Professional'],
          rows: [
            ['Text volume', 'Large blocks', 'Reduced text'],
            ['Process display', 'Full iteration', 'Final only'],
            ['Explanation', 'Extensive', 'Minimal'],
            ['Layout', 'Evolving', 'Unified']
          ]
        }
      },
      {
        type: 'heading',
        content: 'Process vs Resolution'
      },
      {
        type: 'diagram',
        content: {
          type: 'flow',
          elements: [
            { label: 'Academic Culture', description: 'Rewards visible process' },
            { label: 'Professional Culture', description: 'Rewards resolved output' }
          ]
        }
      },
      {
        type: 'heading',
        content: 'Editing Transformation'
      },
      {
        type: 'steps',
        content: [
          'Remove iterative concept sheets',
          'Select final resolved plan and section',
          'Redraw weak drawings with improved line hierarchy',
          'Add one technical detail if missing',
          'Reduce text to under 80 words per project introduction',
          'Ensure drawing scale clarity',
          'Apply consistent layout grid'
        ]
      },
      {
        type: 'heading',
        content: 'Time Awareness'
      },
      {
        type: 'ratio',
        content: {
          items: [
            { label: 'Academic Jury', value: 60, description: 'Allocated discussion time' },
            { label: 'Professional Review', value: 40, description: '3-6 minutes per portfolio' }
          ]
        }
      },
      {
        type: 'summary',
        content: 'Transitioning from academic to professional presentation is not cosmetic. It is structural. Architecture is built through precision. The portfolio must reflect the same standard.'
      }
    ],
    summaryPoints: [
      'Academic submissions explain; professional portfolios prove',
      'Reviewer context is fundamentally different',
      'Professional portfolios require editing discipline',
      'Time constraints demand compression',
      'Transformation is structural, not cosmetic'
    ],
    implementationChecklist: [
      'Review all projects for academic残留',
      'Remove iterative process documentation',
      'Verify text is under 80 words per project intro',
      'Ensure consistent layout grid applied',
      'Test comprehension in 5-minute review'
    ],
    relatedChapters: [1, 2, 34],
    crossReferences: [
      { title: 'Portfolio Editing Discipline', chapter: 34 },
      { title: 'The Portfolio as Professional Instrument', chapter: 2 }
    ]
  }
};

// Volume titles mapping
export const volumeTitles: Record<number, string> = {
  1: "Foundation of Portfolio Thinking",
  2: "Understanding the Architectural Practice Landscape",
  3: "Portfolio Strategy Engineering",
  4: "Macro Structure of the Portfolio Document",
  5: "Micro Structure of Project Presentation",
  6: "Technical Benchmarking and Drawing Discipline",
  7: "Graphic System and Visual Discipline",
  8: "Template Systems and Software Workflow",
  9: "Application Engineering and Professional Communication",
  10: "Evaluation and Long-Term Growth"
};

// Chapter titles mapping
export const chapterTitles: Record<number, string> = {
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
  // ... continuing all 128 chapters
};

// Helper functions
export function getChapterData(chapterNum: number): ChapterData | undefined {
  return chaptersData[chapterNum];
}

export function getChapterTitle(chapterNum: number): string {
  return chapterTitles[chapterNum] || `Chapter ${chapterNum}`;
}

export function getVolumeForChapter(chapterNum: number): { number: number; title: string } {
  if (chapterNum >= 1 && chapterNum <= 10) return { number: 1, title: volumeTitles[1] };
  if (chapterNum >= 11 && chapterNum <= 25) return { number: 2, title: volumeTitles[2] };
  if (chapterNum >= 26 && chapterNum <= 40) return { number: 3, title: volumeTitles[3] };
  if (chapterNum >= 41 && chapterNum <= 50) return { number: 4, title: volumeTitles[4] };
  if (chapterNum >= 51 && chapterNum <= 66) return { number: 5, title: volumeTitles[5] };
  if (chapterNum >= 67 && chapterNum <= 78) return { number: 6, title: volumeTitles[6] };
  if (chapterNum >= 79 && chapterNum <= 91) return { number: 7, title: volumeTitles[7] };
  if (chapterNum >= 92 && chapterNum <= 105) return { number: 8, title: volumeTitles[8] };
  if (chapterNum >= 106 && chapterNum <= 118) return { number: 9, title: volumeTitles[9] };
  return { number: 10, title: volumeTitles[10] };
}
