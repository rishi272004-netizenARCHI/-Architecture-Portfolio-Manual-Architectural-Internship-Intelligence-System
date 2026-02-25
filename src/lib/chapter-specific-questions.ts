// Chapter-Specific Research Questions System
// Each chapter has 4 unique, contextual questions

export interface ChapterQuestions {
  chapterNumber: number;
  chapterTitle: string;
  questions: string[];
  researchIntent: string; // What the AI should focus on
}

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 1: Foundation of Portfolio Thinking (Chapters 1-10)
// ═══════════════════════════════════════════════════════════════════════════════

const volume1Questions: ChapterQuestions[] = [
  {
    chapterNumber: 1,
    chapterTitle: "The Portfolio as Architectural Narrative",
    questions: [
      "How do I structure my portfolio to tell a coherent design story across multiple projects?",
      "What distinguishes a narrative portfolio from a simple project collection?",
      "How do reviewers track narrative progression through a 20-page portfolio?",
      "What are the key transitions between projects that strengthen portfolio narrative?"
    ],
    researchIntent: "Understanding portfolio as a cohesive story, not isolated projects"
  },
  {
    chapterNumber: 2,
    chapterTitle: "The Portfolio as Professional Instrument",
    questions: [
      "What specific signals do hiring architects look for in a professional portfolio?",
      "How does a professional portfolio differ from an academic submission?",
      "What makes a portfolio function as evidence of employability?",
      "How do I demonstrate professional readiness through project presentation?"
    ],
    researchIntent: "Portfolio as professional communication tool"
  },
  {
    chapterNumber: 3,
    chapterTitle: "Difference Between Academic Submission and Professional Portfolio",
    questions: [
      "What are the 5 key differences between jury submissions and internship portfolios?",
      "How should I reframe academic projects for professional audiences?",
      "What academic content should be removed or condensed for professional portfolios?",
      "How do presentation standards differ between academic and professional contexts?"
    ],
    researchIntent: "Transitioning from academic to professional presentation"
  },
  {
    chapterNumber: 4,
    chapterTitle: "Portfolio as Design Argument",
    questions: [
      "How do I construct a design argument through my portfolio?",
      "What makes a portfolio persuasive to firm principals?",
      "How do I balance visual evidence with design reasoning?",
      "What is the structure of a compelling design argument in portfolio format?"
    ],
    researchIntent: "Portfolio as persuasive design argument"
  },
  {
    chapterNumber: 5,
    chapterTitle: "Portfolio as Evidence of Competence",
    questions: [
      "What specific competencies should be visible in an internship portfolio?",
      "How do I demonstrate technical competence without overwhelming the portfolio?",
      "What evidence of competence do corporate firms prioritize?",
      "How do I show competence range across different project types?"
    ],
    researchIntent: "Demonstrating competency through portfolio evidence"
  },
  {
    chapterNumber: 6,
    chapterTitle: "Portfolio as Intellectual Position",
    questions: [
      "How do I communicate my design philosophy through portfolio?",
      "What distinguishes a portfolio with intellectual position from a generic one?",
      "How do boutique firms evaluate intellectual positioning in portfolios?",
      "How much design philosophy should be explicit vs implied in portfolio?"
    ],
    researchIntent: "Expressing intellectual stance through portfolio"
  },
  {
    chapterNumber: 7,
    chapterTitle: "The Psychology of Reviewers",
    questions: [
      "What is the mental process of a portfolio reviewer in the first 30 seconds?",
      "How do reviewers form judgments about candidate suitability?",
      "What cognitive biases affect portfolio evaluation?",
      "How can understanding reviewer psychology improve portfolio design?"
    ],
    researchIntent: "Understanding reviewer mindset and evaluation process"
  },
  {
    chapterNumber: 8,
    chapterTitle: "Attention Span and Visual Cognition",
    questions: [
      "How long do reviewers typically spend on each portfolio page?",
      "What visual strategies capture and retain reviewer attention?",
      "How does visual hierarchy affect information retention?",
      "What cognitive load principles should guide portfolio layout?"
    ],
    researchIntent: "Optimizing for reviewer attention and cognition"
  },
  {
    chapterNumber: 9,
    chapterTitle: "Portfolio as Time-Compressed Architecture",
    questions: [
      "How do I design a portfolio for 3-minute review scenarios?",
      "What information hierarchy works for time-compressed evaluation?",
      "How do I prioritize content for quick scanning?",
      "What separates portfolios that work in 2 minutes vs 10 minutes?"
    ],
    researchIntent: "Designing for rapid portfolio evaluation"
  },
  {
    chapterNumber: 10,
    chapterTitle: "Defining Personal Direction Before Designing",
    questions: [
      "How do I identify my design strengths before building portfolio?",
      "What self-assessment frameworks help define portfolio direction?",
      "How does personal direction influence project selection?",
      "How do I align my direction with target firm expectations?"
    ],
    researchIntent: "Self-direction and portfolio strategy alignment"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 2: Understanding the Architectural Practice Landscape (Chapters 11-25)
// ═══════════════════════════════════════════════════════════════════════════════

const volume2Questions: ChapterQuestions[] = [
  {
    chapterNumber: 11,
    chapterTitle: "The Indian Architectural Practice Ecosystem",
    questions: [
      "What are the major categories of architectural practices in India?",
      "How does the Indian practice ecosystem differ from Western models?",
      "What are the key factors driving firm specialization in India?",
      "How do I navigate the Indian internship application landscape?"
    ],
    researchIntent: "Understanding Indian architectural practice context"
  },
  {
    chapterNumber: 12,
    chapterTitle: "Classification of Firms by Scale",
    questions: [
      "How do firm size expectations differ for internship portfolios?",
      "What portfolio adaptations are needed for large vs small firms?",
      "How does organizational structure affect portfolio evaluation?",
      "What scale-specific signals should portfolios communicate?"
    ],
    researchIntent: "Firm scale and portfolio adaptation strategies"
  },
  {
    chapterNumber: 13,
    chapterTitle: "Classification by Design Philosophy",
    questions: [
      "How do I identify a firm's design philosophy before applying?",
      "What portfolio adaptations suit different design philosophies?",
      "How do modernist vs traditional firms evaluate portfolios differently?",
      "What signals communicate alignment with firm philosophy?"
    ],
    researchIntent: "Aligning portfolio with firm design philosophy"
  },
  {
    chapterNumber: 14,
    chapterTitle: "Classification by Technical Depth",
    questions: [
      "How do technically-focused firms evaluate portfolios?",
      "What technical depth should be visible in internship portfolios?",
      "How do I demonstrate technical competence without overwhelming?",
      "What separates technically excellent portfolios from average ones?"
    ],
    researchIntent: "Technical depth expectations across firm types"
  },
  {
    chapterNumber: 15,
    chapterTitle: "City-Wise Practice Culture in India",
    questions: [
      "How do portfolio expectations vary across Indian cities?",
      "What are the distinctive practice cultures in Mumbai, Delhi, Bangalore?",
      "How does city context influence internship opportunities?",
      "What regional adaptations should portfolios consider?"
    ],
    researchIntent: "Geographic variations in practice culture"
  },
  {
    chapterNumber: 16,
    chapterTitle: "Internship Typologies",
    questions: [
      "What are the different types of internship experiences available?",
      "How do I match internship typology to my learning goals?",
      "What portfolio evidence suits different internship types?",
      "How do stipended vs non-stipended internships differ in expectations?"
    ],
    researchIntent: "Understanding internship variety and matching"
  },
  {
    chapterNumber: 17,
    chapterTitle: "Corporate Practice Structure",
    questions: [
      "What portfolio characteristics do corporate firms prioritize?",
      "How do large firms evaluate internship applications?",
      "What technical documentation standards do corporate firms expect?",
      "How do I position myself for corporate internship success?"
    ],
    researchIntent: "Corporate firm portfolio expectations"
  },
  {
    chapterNumber: 18,
    chapterTitle: "Boutique Studio Structure",
    questions: [
      "What distinguishes boutique studio portfolio expectations?",
      "How do small design studios evaluate candidate fit?",
      "What design sensibility should boutique portfolios communicate?",
      "How do I demonstrate design thinking for boutique applications?"
    ],
    researchIntent: "Boutique studio portfolio strategy"
  },
  {
    chapterNumber: 19,
    chapterTitle: "Sustainable Practice Framework",
    questions: [
      "What portfolio evidence suits sustainable architecture practices?",
      "How do I demonstrate environmental design competence?",
      "What sustainable design tools should I showcase?",
      "How do sustainable practices evaluate internship candidates?"
    ],
    researchIntent: "Sustainability-focused portfolio development"
  },
  {
    chapterNumber: 20,
    chapterTitle: "Urban Design and Research Firms",
    questions: [
      "What portfolio adaptations are needed for urban design firms?",
      "How do research-focused firms evaluate portfolios?",
      "What analytical skills should urban design portfolios demonstrate?",
      "How do I present scale-appropriate work for urban positions?"
    ],
    researchIntent: "Urban design and research portfolio requirements"
  },
  {
    chapterNumber: 21,
    chapterTitle: "Developer-Linked Offices",
    questions: [
      "What do developer-linked practices look for in portfolios?",
      "How do commercial practices differ in portfolio evaluation?",
      "What efficiency signals should portfolios communicate?",
      "How do I balance design quality with commercial awareness?"
    ],
    researchIntent: "Commercial and developer-linked practice expectations"
  },
  {
    chapterNumber: 22,
    chapterTitle: "Interior-Focused Practices",
    questions: [
      "What distinguishes interior portfolio from architectural portfolio?",
      "How do interior-focused firms evaluate architectural portfolios?",
      "What detail-level documentation do interior practices expect?",
      "How do I transition architectural work for interior positions?"
    ],
    researchIntent: "Interior practice portfolio adaptations"
  },
  {
    chapterNumber: 23,
    chapterTitle: "Matching Portfolio Type to Firm Type",
    questions: [
      "What framework helps match portfolio to firm type?",
      "How do I customize portfolio for different firm categories?",
      "What are the common mismatches to avoid?",
      "How do I research firm expectations before applying?"
    ],
    researchIntent: "Portfolio-firm matching methodology"
  },
  {
    chapterNumber: 24,
    chapterTitle: "Internship Suitability Matrix",
    questions: [
      "What factors determine internship suitability?",
      "How do I assess my fit for different firm types?",
      "What self-assessment criteria should I use?",
      "How do I prioritize internship applications strategically?"
    ],
    researchIntent: "Self-assessment and internship matching"
  },
  {
    chapterNumber: 25,
    chapterTitle: "Firm Study Intelligence Framework",
    questions: [
      "What research framework helps understand firm expectations?",
      "How do I gather intelligence about target firms?",
      "What signals indicate firm culture and expectations?",
      "How do I apply firm research to portfolio customization?"
    ],
    researchIntent: "Firm research and intelligence gathering"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 3: Portfolio Strategy Engineering (Chapters 26-40)
// ═══════════════════════════════════════════════════════════════════════════════

const volume3Questions: ChapterQuestions[] = [
  {
    chapterNumber: 26,
    chapterTitle: "Defining Portfolio Archetypes",
    questions: [
      "What are the main portfolio archetypes for architecture internships?",
      "How do I identify which archetype suits my strengths?",
      "What distinguishes corporate-oriented from design-focused portfolios?",
      "How does archetype choice affect project selection?"
    ],
    researchIntent: "Understanding portfolio archetype system"
  },
  {
    chapterNumber: 27,
    chapterTitle: "Corporate-Oriented Portfolio Structure",
    questions: [
      "What structural principles guide corporate portfolio design?",
      "How much technical vs design content for corporate applications?",
      "What documentation standards do corporate firms expect?",
      "How do I prioritize projects for corporate portfolio?"
    ],
    researchIntent: "Corporate portfolio structure and content"
  },
  {
    chapterNumber: 28,
    chapterTitle: "Boutique-Oriented Portfolio Structure",
    questions: [
      "What distinguishes boutique portfolio from corporate?",
      "How do I emphasize design thinking in boutique portfolios?",
      "What concept presentation methods suit boutique applications?",
      "How do boutique firms evaluate design sensibility?"
    ],
    researchIntent: "Boutique portfolio design strategy"
  },
  {
    chapterNumber: 29,
    chapterTitle: "Sustainable Portfolio Structure",
    questions: [
      "What content priorities define a sustainability-focused portfolio?",
      "How do I present environmental analysis effectively?",
      "What sustainable design tools should portfolios showcase?",
      "How do sustainable practices evaluate portfolio evidence?"
    ],
    researchIntent: "Sustainability portfolio content strategy"
  },
  {
    chapterNumber: 30,
    chapterTitle: "Interior Portfolio Structure",
    questions: [
      "What distinguishes interior portfolio structure?",
      "How do I present material and detail focus?",
      "What scale of work should interior portfolios emphasize?",
      "How do I adapt architectural projects for interior applications?"
    ],
    researchIntent: "Interior portfolio structural requirements"
  },
  {
    chapterNumber: 31,
    chapterTitle: "Urban Portfolio Structure",
    questions: [
      "What scale considerations define urban design portfolios?",
      "How do I present analysis at urban scale effectively?",
      "What diagramming methods suit urban portfolios?",
      "How do urban firms evaluate scale-appropriate thinking?"
    ],
    researchIntent: "Urban design portfolio scale and content"
  },
  {
    chapterNumber: 32,
    chapterTitle: "Portfolio Objective Definition",
    questions: [
      "How do I define clear objectives for my portfolio?",
      "What framework helps articulate portfolio goals?",
      "How do objectives influence project selection and presentation?",
      "What distinguishes clear from vague portfolio objectives?"
    ],
    researchIntent: "Setting clear portfolio objectives"
  },
  {
    chapterNumber: 33,
    chapterTitle: "Project Selection Logic",
    questions: [
      "What criteria should guide project selection for portfolios?",
      "How many projects should an internship portfolio include?",
      "How do I balance project types and scales?",
      "What projects should be excluded from professional portfolios?"
    ],
    researchIntent: "Project selection methodology"
  },
  {
    chapterNumber: 34,
    chapterTitle: "Portfolio Editing Discipline",
    questions: [
      "What editing principles improve portfolio clarity?",
      "How do I decide what to cut from my portfolio?",
      "What signals indicate over-inclusion in portfolios?",
      "How do I maintain content discipline while showing range?"
    ],
    researchIntent: "Ruthless portfolio editing strategies"
  },
  {
    chapterNumber: 35,
    chapterTitle: "Portfolio Narrative Engineering",
    questions: [
      "How do I engineer narrative flow across projects?",
      "What transition strategies connect diverse projects?",
      "How does narrative engineering differ from project sequencing?",
      "What narrative structures work best for portfolios?"
    ],
    researchIntent: "Constructing portfolio narrative arc"
  },
  {
    chapterNumber: 36,
    chapterTitle: "Balancing Concept and Technical Depth",
    questions: [
      "What is the ideal balance between concept and technical content?",
      "How do I show both design thinking and technical competence?",
      "How do firm types differ in concept vs technical emphasis?",
      "What common balance mistakes should I avoid?"
    ],
    researchIntent: "Balancing conceptual and technical presentation"
  },
  {
    chapterNumber: 37,
    chapterTitle: "Content Density Control",
    questions: [
      "How much content should each portfolio page contain?",
      "What are signs of content overload in portfolios?",
      "How do I control information density per spread?",
      "What density standards apply to different project types?"
    ],
    researchIntent: "Managing content density effectively"
  },
  {
    chapterNumber: 38,
    chapterTitle: "Page Count Engineering",
    questions: [
      "What is the ideal page count for internship portfolios?",
      "How do I determine project allocation within page limits?",
      "What are consequences of exceeding page count expectations?",
      "How do I condense content without losing impact?"
    ],
    researchIntent: "Page count optimization strategies"
  },
  {
    chapterNumber: 39,
    chapterTitle: "Portfolio Sequencing Models",
    questions: [
      "What sequencing models work for internship portfolios?",
      "Should strongest project come first or last?",
      "How do I sequence projects for narrative coherence?",
      "What sequencing mistakes hurt portfolio impact?"
    ],
    researchIntent: "Project sequencing strategies"
  },
  {
    chapterNumber: 40,
    chapterTitle: "First Project Strategy",
    questions: [
      "How do I select and present my opening project?",
      "What makes a strong first impression in portfolios?",
      "What characteristics should the lead project demonstrate?",
      "How do I maximize the first project's impact?"
    ],
    researchIntent: "First project selection and presentation"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 4: Macro Structure of the Portfolio Document (Chapters 41-50)
// ═══════════════════════════════════════════════════════════════════════════════

const volume4Questions: ChapterQuestions[] = [
  {
    chapterNumber: 41,
    chapterTitle: "Cover Page Architecture",
    questions: [
      "What elements must appear on a professional portfolio cover?",
      "How do I design a cover that reflects my design sensibility?",
      "What cover design mistakes should be avoided?",
      "How does cover design affect first impressions?"
    ],
    researchIntent: "Cover page design principles"
  },
  {
    chapterNumber: 42,
    chapterTitle: "Resume Integration Strategy",
    questions: [
      "Should resume be included within portfolio or separate?",
      "How do I integrate resume without disrupting portfolio flow?",
      "What resume format works best with portfolio submission?",
      "How do I avoid redundancy between resume and portfolio content?"
    ],
    researchIntent: "Resume and portfolio integration"
  },
  {
    chapterNumber: 43,
    chapterTitle: "Index Structuring Logic",
    questions: [
      "What indexing approach works for internship portfolios?",
      "Should portfolios include a table of contents?",
      "How do I structure index for easy navigation?",
      "What index information is essential vs optional?"
    ],
    researchIntent: "Portfolio indexing and navigation"
  },
  {
    chapterNumber: 44,
    chapterTitle: "Project Order Framework",
    questions: [
      "What framework determines optimal project order?",
      "How do I balance chronology with impact in ordering?",
      "What ordering strategies do reviewers prefer?",
      "How does project order affect overall evaluation?"
    ],
    researchIntent: "Project ordering methodology"
  },
  {
    chapterNumber: 45,
    chapterTitle: "Project Hierarchy Strategy",
    questions: [
      "How do I establish clear hierarchy between projects?",
      "What distinguishes lead projects from supporting ones?",
      "How much space should lead projects occupy?",
      "How do I communicate project importance?"
    ],
    researchIntent: "Project hierarchy and emphasis"
  },
  {
    chapterNumber: 46,
    chapterTitle: "Technical Section Placement",
    questions: [
      "Where should technical content appear in portfolio?",
      "How do I integrate technical drawings without disrupting flow?",
      "What technical documentation warrants dedicated sections?",
      "How do technical sections affect portfolio pacing?"
    ],
    researchIntent: "Technical content placement strategy"
  },
  {
    chapterNumber: 47,
    chapterTitle: "Skill Section Integration",
    questions: [
      "What skill documentation should portfolios include?",
      "How do I present software and technical skills?",
      "Should skills be integrated or in dedicated section?",
      "What skill presentation formats work best?"
    ],
    researchIntent: "Skills presentation and integration"
  },
  {
    chapterNumber: 48,
    chapterTitle: "Optional Work Inclusion Strategy",
    questions: [
      "What optional content might strengthen portfolios?",
      "How do I decide if optional work adds value?",
      "What is the risk of including peripheral work?",
      "How do optional sections affect portfolio length?"
    ],
    researchIntent: "Optional content decision framework"
  },
  {
    chapterNumber: 49,
    chapterTitle: "Closing Strategy and Contact Clarity",
    questions: [
      "How should portfolios conclude?",
      "What contact information is essential?",
      "How do I design a professional closing page?",
      "What closing strategies leave lasting impression?"
    ],
    researchIntent: "Portfolio closing and contact presentation"
  },
  {
    chapterNumber: 50,
    chapterTitle: "Portfolio Flow and Rhythm",
    questions: [
      "What creates good rhythm in portfolio progression?",
      "How do I maintain reader engagement throughout?",
      "What pacing principles improve portfolio experience?",
      "How does spread design affect overall flow?"
    ],
    researchIntent: "Portfolio flow and pacing principles"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 5: Micro Structure of Project Presentation (Chapters 51-66)
// ═══════════════════════════════════════════════════════════════════════════════

const volume5Questions: ChapterQuestions[] = [
  {
    chapterNumber: 51,
    chapterTitle: "Project Overview Page Engineering",
    questions: [
      "What elements define an effective project overview page?",
      "How do I structure the first spread of a project?",
      "What information hierarchy works for project introductions?",
      "How do overview pages set up project comprehension?"
    ],
    researchIntent: "Project overview page design"
  },
  {
    chapterNumber: 52,
    chapterTitle: "Writing Studio Briefs Professionally",
    questions: [
      "What makes a professional project brief?",
      "How much context should studio briefs provide?",
      "How do I write briefs that respect reviewer time?",
      "What brief writing mistakes should be avoided?"
    ],
    researchIntent: "Professional brief writing"
  },
  {
    chapterNumber: 53,
    chapterTitle: "Concept Diagram Construction",
    questions: [
      "What makes an effective concept diagram?",
      "How do I distill complex concepts into clear diagrams?",
      "What diagram types work best for different concepts?",
      "How do concept diagrams affect project understanding?"
    ],
    researchIntent: "Concept diagram design principles"
  },
  {
    chapterNumber: 54,
    chapterTitle: "Site Analysis Framework",
    questions: [
      "What site analysis elements are essential for portfolios?",
      "How do I present site analysis without overwhelming?",
      "What analysis formats do reviewers find most useful?",
      "How does site analysis demonstrate design thinking?"
    ],
    researchIntent: "Site analysis presentation"
  },
  {
    chapterNumber: 55,
    chapterTitle: "Climate Diagram Logic",
    questions: [
      "What climate analysis should portfolios include?",
      "How do I present climate-responsive design logic?",
      "What climate diagrams are most informative?",
      "How does climate analysis demonstrate competence?"
    ],
    researchIntent: "Climate analysis and presentation"
  },
  {
    chapterNumber: 56,
    chapterTitle: "Plan Drawing Standards",
    questions: [
      "What line weight standards apply to plan drawings?",
      "How do I ensure plans are legible at portfolio scale?",
      "What annotation standards should plans follow?",
      "What common plan drawing mistakes should be avoided?"
    ],
    researchIntent: "Professional plan drawing standards"
  },
  {
    chapterNumber: 57,
    chapterTitle: "Section Drawing Intelligence",
    questions: [
      "What makes a section drawing informative?",
      "How do I show spatial and structural logic in sections?",
      "What section types should portfolios include?",
      "How do sections demonstrate technical understanding?"
    ],
    researchIntent: "Section drawing quality and content"
  },
  {
    chapterNumber: 58,
    chapterTitle: "Elevation Clarity Standards",
    questions: [
      "What elevation presentation standards apply to portfolios?",
      "How do I show material and detail in elevations?",
      "What elevation information is essential vs optional?",
      "How do elevations contribute to project understanding?"
    ],
    researchIntent: "Elevation drawing presentation"
  },
  {
    chapterNumber: 59,
    chapterTitle: "Structural Representation in Academic Work",
    questions: [
      "How should student work represent structural logic?",
      "What level of structural detail is appropriate?",
      "How do I show structural awareness without engineering?",
      "What structural representation mistakes are common?"
    ],
    researchIntent: "Structural representation in portfolios"
  },
  {
    chapterNumber: 60,
    chapterTitle: "Diagrammatic Communication Systems",
    questions: [
      "What diagram types enhance portfolio communication?",
      "How do I develop a consistent diagram language?",
      "What diagramming principles improve clarity?",
      "How do diagrams complement drawings?"
    ],
    researchIntent: "Diagrammatic communication systems"
  },
  {
    chapterNumber: 61,
    chapterTitle: "Massing Evolution Documentation",
    questions: [
      "How do I document design evolution in portfolios?",
      "What massing studies are worth including?",
      "How does process documentation affect evaluation?",
      "How do I present iteration without clutter?"
    ],
    researchIntent: "Design process and evolution documentation"
  },
  {
    chapterNumber: 62,
    chapterTitle: "Circulation Logic Presentation",
    questions: [
      "How do I present circulation clearly in portfolios?",
      "What circulation diagram types are most effective?",
      "How does circulation presentation demonstrate thinking?",
      "What circulation information is essential?"
    ],
    researchIntent: "Circulation and movement presentation"
  },
  {
    chapterNumber: 63,
    chapterTitle: "Spatial Experience Rendering Strategy",
    questions: [
      "How many renders should each project include?",
      "What spatial moments are worth rendering?",
      "How do renders support vs distract from drawings?",
      "What render presentation formats work best?"
    ],
    researchIntent: "Render selection and presentation strategy"
  },
  {
    chapterNumber: 64,
    chapterTitle: "Interior vs Exterior Representation Balance",
    questions: [
      "What balance of interior vs exterior content is appropriate?",
      "How does project type affect representation balance?",
      "How do I present spatial continuity between interior and exterior?",
      "What representation priorities differ by firm type?"
    ],
    researchIntent: "Interior-exterior representation balance"
  },
  {
    chapterNumber: 65,
    chapterTitle: "Technical Detail Integration",
    questions: [
      "How do I integrate technical details into project presentation?",
      "What detail scale is appropriate for portfolios?",
      "How many details should each project include?",
      "How do details demonstrate technical competence?"
    ],
    researchIntent: "Technical detail presentation"
  },
  {
    chapterNumber: 66,
    chapterTitle: "Working Drawing Presentation for Internships",
    questions: [
      "Should portfolios include working drawing samples?",
      "What working drawing content demonstrates employability?",
      "How do I present construction documentation effectively?",
      "What distinguishes student working drawings from professional?"
    ],
    researchIntent: "Working drawing portfolio presentation"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 6: Technical Benchmarking and Drawing Discipline (Chapters 67-78)
// ═══════════════════════════════════════════════════════════════════════════════

const volume6Questions: ChapterQuestions[] = [
  {
    chapterNumber: 67,
    chapterTitle: "Line Weight Hierarchy",
    questions: [
      "What line weight standards apply to architectural drawings?",
      "How do I establish clear line weight hierarchy?",
      "What mm thicknesses should different line types have?",
      "How does line weight discipline affect drawing legibility?"
    ],
    researchIntent: "Line weight hierarchy and standards"
  },
  {
    chapterNumber: 68,
    chapterTitle: "Scale Discipline",
    questions: [
      "What scales are appropriate for different drawing types?",
      "How do I ensure drawings are legible at chosen scales?",
      "What scale notation standards should I follow?",
      "How does scale choice affect information presentation?"
    ],
    researchIntent: "Scale selection and discipline"
  },
  {
    chapterNumber: 69,
    chapterTitle: "Dimensioning Standards",
    questions: [
      "What dimensioning conventions apply to architectural drawings?",
      "How do I dimension without cluttering drawings?",
      "What dimension placement principles improve clarity?",
      "How do dimensioning standards differ between countries?"
    ],
    researchIntent: "Dimensioning standards and best practices"
  },
  {
    chapterNumber: 70,
    chapterTitle: "Structural Awareness for Students",
    questions: [
      "What structural understanding should students demonstrate?",
      "How do I show structural logic in drawings?",
      "What structural mistakes are common in student work?",
      "How much structural detail is appropriate for portfolios?"
    ],
    researchIntent: "Structural awareness and representation"
  },
  {
    chapterNumber: 71,
    chapterTitle: "Slab and Beam Logic Representation",
    questions: [
      "How do I represent slab and beam systems in sections?",
      "What structural conventions should sections follow?",
      "How do I show structural depth appropriately?",
      "What slab and beam representation mistakes are common?"
    ],
    researchIntent: "Structural system representation"
  },
  {
    chapterNumber: 72,
    chapterTitle: "Wall Section Intelligence",
    questions: [
      "What should wall sections demonstrate?",
      "How do I draw informative wall sections?",
      "What scale is appropriate for wall sections?",
      "What wall section details are essential?"
    ],
    researchIntent: "Wall section drawing quality"
  },
  {
    chapterNumber: 73,
    chapterTitle: "Staircase Detail Engineering",
    questions: [
      "What staircase details should portfolios include?",
      "How do I present staircase design comprehensively?",
      "What staircase drawing standards should I follow?",
      "How do staircase details demonstrate technical ability?"
    ],
    researchIntent: "Staircase detailing and presentation"
  },
  {
    chapterNumber: 74,
    chapterTitle: "Toilet Detail Standards",
    questions: [
      "What toilet details demonstrate technical competence?",
      "How do I present toilet layouts professionally?",
      "What plumbing and fixture standards should I know?",
      "Why do toilet details matter in portfolios?"
    ],
    researchIntent: "Toilet and sanitary detail standards"
  },
  {
    chapterNumber: 75,
    chapterTitle: "Annotation Systems",
    questions: [
      "What annotation system should drawings follow?",
      "How do I annotate without overwhelming drawings?",
      "What text sizes and styles work for annotations?",
      "How does annotation quality affect drawing professionalism?"
    ],
    researchIntent: "Annotation and text standards"
  },
  {
    chapterNumber: 76,
    chapterTitle: "Drawing Legibility at Print Scale",
    questions: [
      "How do I ensure drawings are legible when printed?",
      "What print scale considerations affect drawing design?",
      "How do I test drawing legibility before submission?",
      "What common legibility issues should I avoid?"
    ],
    researchIntent: "Print legibility and drawing optimization"
  },
  {
    chapterNumber: 77,
    chapterTitle: "Avoiding Common Technical Errors",
    questions: [
      "What technical errors are most common in student portfolios?",
      "How do I identify and fix technical mistakes?",
      "What errors signal unprofessionalism to reviewers?",
      "How do I develop technical quality control habits?"
    ],
    researchIntent: "Common technical errors and prevention"
  },
  {
    chapterNumber: 78,
    chapterTitle: "Balancing Render and Drafting Exposure",
    questions: [
      "What is the appropriate ratio of renders to drawings?",
      "How do I balance visual impact with technical content?",
      "What signals over-reliance on rendering?",
      "How does render-to-drawing balance affect evaluation?"
    ],
    researchIntent: "Render and drawing balance strategy"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 7: Graphic System and Visual Discipline (Chapters 79-91)
// ═══════════════════════════════════════════════════════════════════════════════

const volume7Questions: ChapterQuestions[] = [
  {
    chapterNumber: 79,
    chapterTitle: "Grid Systems in Portfolio Design",
    questions: [
      "What grid systems work best for portfolio layouts?",
      "How do I establish and maintain grid discipline?",
      "What grid variations suit different project types?",
      "How does grid structure affect portfolio professionalism?"
    ],
    researchIntent: "Grid system design and implementation"
  },
  {
    chapterNumber: 80,
    chapterTitle: "Margin Control and White Space",
    questions: [
      "What margin standards apply to portfolio pages?",
      "How do I use white space effectively?",
      "What are common margin mistakes in portfolios?",
      "How does white space affect content hierarchy?"
    ],
    researchIntent: "Margin and white space discipline"
  },
  {
    chapterNumber: 81,
    chapterTitle: "Typography Hierarchy",
    questions: [
      "What typography hierarchy should portfolios maintain?",
      "How do I select fonts for professional portfolios?",
      "What text sizes work for different content types?",
      "How does typography affect portfolio professionalism?"
    ],
    researchIntent: "Typography system and hierarchy"
  },
  {
    chapterNumber: 82,
    chapterTitle: "Font Selection Strategy",
    questions: [
      "What fonts are appropriate for architectural portfolios?",
      "How many fonts should a portfolio use?",
      "What font pairing strategies work well?",
      "What font choices signal professionalism vs amateurism?"
    ],
    researchIntent: "Font selection for portfolios"
  },
  {
    chapterNumber: 83,
    chapterTitle: "Color Discipline",
    questions: [
      "How much color is appropriate in portfolios?",
      "What color strategies maintain professionalism?",
      "How does color use differ by firm type?",
      "What color mistakes harm portfolio impact?"
    ],
    researchIntent: "Color strategy and discipline"
  },
  {
    chapterNumber: 84,
    chapterTitle: "Monochrome vs Accent Strategy",
    questions: [
      "When should portfolios use monochrome approach?",
      "How do I effectively use accent colors?",
      "What are advantages of restrained color palettes?",
      "How does color strategy affect content focus?"
    ],
    researchIntent: "Color palette strategies"
  },
  {
    chapterNumber: 85,
    chapterTitle: "Image Placement Systems",
    questions: [
      "What image placement principles improve layouts?",
      "How do I create consistent image sizing across pages?",
      "What image-to-text ratios work well?",
      "How does image placement affect visual flow?"
    ],
    researchIntent: "Image placement and layout strategy"
  },
  {
    chapterNumber: 86,
    chapterTitle: "Modular Layout Logic",
    questions: [
      "What modular layout systems work for portfolios?",
      "How do I create flexible yet consistent page structures?",
      "What modular principles improve layout efficiency?",
      "How do modular systems affect design flexibility?"
    ],
    researchIntent: "Modular layout systems"
  },
  {
    chapterNumber: 87,
    chapterTitle: "Page Rhythm Engineering",
    questions: [
      "What creates effective rhythm across portfolio pages?",
      "How do I vary layouts while maintaining consistency?",
      "What pacing principles prevent monotony?",
      "How does page rhythm affect reader engagement?"
    ],
    researchIntent: "Page rhythm and variation"
  },
  {
    chapterNumber: 88,
    chapterTitle: "Alignment Discipline",
    questions: [
      "What alignment principles improve layout quality?",
      "How do I maintain alignment consistency across pages?",
      "What alignment variations serve different purposes?",
      "How does alignment affect visual professionalism?"
    ],
    researchIntent: "Alignment standards and discipline"
  },
  {
    chapterNumber: 89,
    chapterTitle: "Avoiding Graphic Noise",
    questions: [
      "What constitutes graphic noise in portfolios?",
      "How do I identify and eliminate visual clutter?",
      "What common elements create graphic noise?",
      "How does reducing noise improve content focus?"
    ],
    researchIntent: "Eliminating graphic noise"
  },
  {
    chapterNumber: 90,
    chapterTitle: "Professional Minimalism",
    questions: [
      "What defines professional minimalism in portfolios?",
      "How do I achieve impact through restraint?",
      "What distinguishes minimal from bare?",
      "How does minimalist approach affect evaluation?"
    ],
    researchIntent: "Minimalist portfolio design"
  },
  {
    chapterNumber: 91,
    chapterTitle: "Creating Cohesion Across Pages",
    questions: [
      "How do I create visual cohesion across portfolio?",
      "What elements should remain consistent throughout?",
      "How do I balance cohesion with necessary variation?",
      "What signals inconsistent portfolio design?"
    ],
    researchIntent: "Visual cohesion strategies"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 8: Template Systems and Software Workflow (Chapters 92-105)
// ═══════════════════════════════════════════════════════════════════════════════

const volume8Questions: ChapterQuestions[] = [
  {
    chapterNumber: 92,
    chapterTitle: "Choosing Page Size",
    questions: [
      "What page size is optimal for internship portfolios?",
      "How does page size affect content presentation?",
      "What are advantages of A4 vs A3 vs letter?",
      "How do I optimize for both screen and print?"
    ],
    researchIntent: "Page size selection criteria"
  },
  {
    chapterNumber: 93,
    chapterTitle: "Portrait vs Landscape Strategy",
    questions: [
      "What are advantages of portrait vs landscape format?",
      "How does orientation affect page layout strategy?",
      "What orientation do reviewers prefer?",
      "Can I mix orientations within a portfolio?"
    ],
    researchIntent: "Orientation selection and strategy"
  },
  {
    chapterNumber: 94,
    chapterTitle: "A4 vs A3 Logic",
    questions: [
      "When should I use A3 instead of A4?",
      "How does paper size affect project presentation?",
      "What content benefits from larger format?",
      "What are practical considerations for different sizes?"
    ],
    researchIntent: "Paper size decision framework"
  },
  {
    chapterNumber: 95,
    chapterTitle: "Template Archetypes",
    questions: [
      "What template archetypes exist for portfolios?",
      "How do I select appropriate template for my work?",
      "What template characteristics suit different firm types?",
      "How do I customize templates without losing consistency?"
    ],
    researchIntent: "Template system archetypes"
  },
  {
    chapterNumber: 96,
    chapterTitle: "Minimal Template System",
    questions: [
      "What defines a minimal template system?",
      "How do I create clean, minimal page structures?",
      "What are advantages of minimal approach?",
      "How do I maintain interest with minimal templates?"
    ],
    researchIntent: "Minimal template design"
  },
  {
    chapterNumber: 97,
    chapterTitle: "Editorial Template System",
    questions: [
      "What characterizes editorial template design?",
      "How do editorial layouts enhance portfolio?",
      "What editorial principles translate to portfolios?",
      "When is editorial approach most appropriate?"
    ],
    researchIntent: "Editorial layout systems"
  },
  {
    chapterNumber: 98,
    chapterTitle: "Technical Template System",
    questions: [
      "What defines a technical template system?",
      "How do technical templates organize content?",
      "When is technical template approach most suitable?",
      "How do I balance technical presentation with visual appeal?"
    ],
    researchIntent: "Technical template design"
  },
  {
    chapterNumber: 99,
    chapterTitle: "Bold Visual Template System",
    questions: [
      "What characterizes bold visual templates?",
      "When is bold visual approach appropriate?",
      "How do I use bold templates without overwhelming?",
      "What firm types respond to bold visual approach?"
    ],
    researchIntent: "Bold visual template design"
  },
  {
    chapterNumber: 100,
    chapterTitle: "Adobe InDesign Workflow",
    questions: [
      "What InDesign workflow is most efficient for portfolios?",
      "How do I set up master pages for consistency?",
      "What InDesign features are essential for portfolios?",
      "How do I optimize InDesign for portfolio production?"
    ],
    researchIntent: "InDesign workflow optimization"
  },
  {
    chapterNumber: 101,
    chapterTitle: "Illustrator Workflow",
    questions: [
      "When should I use Illustrator vs InDesign?",
      "What Illustrator workflows support portfolio creation?",
      "How do I integrate Illustrator graphics with layouts?",
      "What Illustrator techniques improve diagram quality?"
    ],
    researchIntent: "Illustrator workflow and integration"
  },
  {
    chapterNumber: 102,
    chapterTitle: "Revit Sheet Export Discipline",
    questions: [
      "How do I export Revit drawings for portfolios?",
      "What export settings maintain drawing quality?",
      "How do I integrate BIM outputs with portfolio layout?",
      "What Revit sheet organization supports portfolio use?"
    ],
    researchIntent: "Revit export and integration"
  },
  {
    chapterNumber: 103,
    chapterTitle: "File Optimization",
    questions: [
      "What file optimization is needed for portfolios?",
      "How do I balance quality with file size?",
      "What resolution is appropriate for different outputs?",
      "How do I optimize images without quality loss?"
    ],
    researchIntent: "File optimization techniques"
  },
  {
    chapterNumber: 104,
    chapterTitle: "PDF Compression Strategy",
    questions: [
      "What PDF compression settings work for portfolios?",
      "How do I maintain quality while reducing file size?",
      "What compression mistakes harm portfolio quality?",
      "How do I optimize PDFs for email submission?"
    ],
    researchIntent: "PDF compression best practices"
  },
  {
    chapterNumber: 105,
    chapterTitle: "Naming and Version Control",
    questions: [
      "What naming conventions should portfolios follow?",
      "How do I manage portfolio versions effectively?",
      "What file naming signals professionalism?",
      "How does version control prevent submission errors?"
    ],
    researchIntent: "File naming and organization"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 9: Application Engineering and Professional Communication (Chapters 106-118)
// ═══════════════════════════════════════════════════════════════════════════════

const volume9Questions: ChapterQuestions[] = [
  {
    chapterNumber: 106,
    chapterTitle: "Resume Architecture",
    questions: [
      "What resume structure works best for architecture internships?",
      "How do I design a resume that complements portfolio?",
      "What content priorities differ between resume and portfolio?",
      "What resume mistakes hurt internship applications?"
    ],
    researchIntent: "Resume design and structure"
  },
  {
    chapterNumber: 107,
    chapterTitle: "Resume Graphic Discipline",
    questions: [
      "What graphic standards apply to architecture resumes?",
      "How do I design visual resume without over-designing?",
      "What layout principles improve resume readability?",
      "How does resume design affect evaluation?"
    ],
    researchIntent: "Resume graphic design principles"
  },
  {
    chapterNumber: 108,
    chapterTitle: "Writing Internship Emails",
    questions: [
      "What makes an effective internship inquiry email?",
      "How do I write emails that get responses?",
      "What email structure works for cold applications?",
      "What email mistakes should be avoided?"
    ],
    researchIntent: "Professional email writing"
  },
  {
    chapterNumber: 109,
    chapterTitle: "Subject Line Strategy",
    questions: [
      "What subject line formats get opened?",
      "How do I craft subject lines that stand out?",
      "What subject line conventions should I follow?",
      "How does subject line affect email success rate?"
    ],
    researchIntent: "Email subject line optimization"
  },
  {
    chapterNumber: 110,
    chapterTitle: "Cover Letter Structure",
    questions: [
      "What structure should architecture cover letters follow?",
      "How do I customize cover letters for different firms?",
      "What content belongs in cover letter vs portfolio?",
      "What cover letter mistakes hurt applications?"
    ],
    researchIntent: "Cover letter writing and structure"
  },
  {
    chapterNumber: 111,
    chapterTitle: "LinkedIn Optimization",
    questions: [
      "How do I optimize LinkedIn for internship search?",
      "What LinkedIn profile elements matter most?",
      "How do I align LinkedIn with portfolio presentation?",
      "What LinkedIn mistakes hurt professional image?"
    ],
    researchIntent: "LinkedIn profile optimization"
  },
  {
    chapterNumber: 112,
    chapterTitle: "Application Tracking System",
    questions: [
      "How do I organize and track internship applications?",
      "What tracking system improves application efficiency?",
      "What information should I track per application?",
      "How does organized tracking improve success rate?"
    ],
    researchIntent: "Application organization and tracking"
  },
  {
    chapterNumber: 113,
    chapterTitle: "Internship Research Database",
    questions: [
      "What research should inform internship applications?",
      "How do I build and maintain a firm database?",
      "What information should I gather about firms?",
      "How does research improve application quality?"
    ],
    researchIntent: "Firm research and database building"
  },
  {
    chapterNumber: 114,
    chapterTitle: "Portfolio Customization Before Sending",
    questions: [
      "How should I customize portfolio for specific firms?",
      "What portfolio elements should be adapted?",
      "How much customization is appropriate?",
      "What customization mistakes should be avoided?"
    ],
    researchIntent: "Portfolio customization strategy"
  },
  {
    chapterNumber: 115,
    chapterTitle: "Common Application Mistakes",
    questions: [
      "What application mistakes are most common?",
      "How do I identify and prevent application errors?",
      "What mistakes immediately disqualify candidates?",
      "How does attention to detail affect success?"
    ],
    researchIntent: "Application error prevention"
  },
  {
    chapterNumber: 116,
    chapterTitle: "Interview Preparation Through Portfolio",
    questions: [
      "How do I use portfolio to prepare for interviews?",
      "What portfolio aspects should I be ready to discuss?",
      "How do I anticipate interview questions about my work?",
      "What portfolio presentation strategies work in interviews?"
    ],
    researchIntent: "Portfolio-based interview preparation"
  },
  {
    chapterNumber: 117,
    chapterTitle: "Presenting Portfolio Verbally",
    questions: [
      "How do I verbally present portfolio effectively?",
      "What presentation structure works for portfolio walkthrough?",
      "How much time should I spend on each project?",
      "What verbal presentation mistakes should be avoided?"
    ],
    researchIntent: "Verbal portfolio presentation skills"
  },
  {
    chapterNumber: 118,
    chapterTitle: "Converting Internship into Long-Term Opportunity",
    questions: [
      "How do I maximize internship for future opportunities?",
      "What portfolio strategies support long-term positioning?",
      "How do I demonstrate value during internship?",
      "What actions lead to return offers or recommendations?"
    ],
    researchIntent: "Maximizing internship value"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME 10: Evaluation and Long-Term Growth (Chapters 119-128)
// ═══════════════════════════════════════════════════════════════════════════════

const volume10Questions: ChapterQuestions[] = [
  {
    chapterNumber: 119,
    chapterTitle: "Self-Evaluation Matrix",
    questions: [
      "What self-evaluation framework improves portfolios?",
      "How do I objectively assess my portfolio quality?",
      "What criteria should self-evaluation include?",
      "How does self-evaluation improve over time?"
    ],
    researchIntent: "Self-assessment frameworks"
  },
  {
    chapterNumber: 120,
    chapterTitle: "Portfolio Scoring System",
    questions: [
      "What portfolio scoring criteria are most relevant?",
      "How do I score my portfolio objectively?",
      "What benchmarks should scoring reference?",
      "How does scoring guide improvement priorities?"
    ],
    researchIntent: "Portfolio quality scoring"
  },
  {
    chapterNumber: 121,
    chapterTitle: "Firm Compatibility Scoring Model",
    questions: [
      "How do I assess compatibility with target firms?",
      "What factors determine firm-student compatibility?",
      "How do I score and compare firm matches?",
      "What compatibility factors are most important?"
    ],
    researchIntent: "Firm compatibility assessment"
  },
  {
    chapterNumber: 122,
    chapterTitle: "Match Score Calculation Method",
    questions: [
      "How do I calculate portfolio-firm match score?",
      "What variables influence match calculation?",
      "How do I weight different matching factors?",
      "How does match score inform application strategy?"
    ],
    researchIntent: "Match score methodology"
  },
  {
    chapterNumber: 123,
    chapterTitle: "High-Match vs Low-Match Strategy",
    questions: [
      "How does strategy differ for high vs low match firms?",
      "How do I prioritize applications based on match?",
      "What portfolio adaptations suit different match levels?",
      "How do I balance reach vs safe applications?"
    ],
    researchIntent: "Application strategy by match level"
  },
  {
    chapterNumber: 124,
    chapterTitle: "Annual Portfolio Updating System",
    questions: [
      "How should I update portfolio each year?",
      "What content should be refreshed vs retained?",
      "How does portfolio evolve through education?",
      "What updating discipline maintains quality?"
    ],
    researchIntent: "Portfolio maintenance and evolution"
  },
  {
    chapterNumber: 125,
    chapterTitle: "Documenting Internship Learning",
    questions: [
      "How do I document internship experience effectively?",
      "What portfolio value does internship documentation add?",
      "How does internship work integrate into portfolio?",
      "What documentation habits serve long-term growth?"
    ],
    researchIntent: "Internship documentation strategy"
  },
  {
    chapterNumber: 126,
    chapterTitle: "Transitioning from Internship Portfolio to Thesis Portfolio",
    questions: [
      "How does portfolio change for thesis presentation?",
      "What content priorities shift for thesis?",
      "How do I adapt internship portfolio for academic jury?",
      "What distinguishes thesis portfolio from internship?"
    ],
    researchIntent: "Academic portfolio transition"
  },
  {
    chapterNumber: 127,
    chapterTitle: "Transitioning to Professional Portfolio",
    questions: [
      "How do I transition portfolio for full-time positions?",
      "What changes when moving from internship to job search?",
      "How does professional portfolio differ from internship?",
      "What content evolution signals professional readiness?"
    ],
    researchIntent: "Professional portfolio development"
  },
  {
    chapterNumber: 128,
    chapterTitle: "Building a Lifelong Portfolio System",
    questions: [
      "How do I build portfolio as ongoing professional tool?",
      "What habits ensure continuous portfolio improvement?",
      "How does portfolio serve career development?",
      "What long-term portfolio strategy sustains growth?"
    ],
    researchIntent: "Lifelong portfolio management"
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// COMBINE ALL CHAPTERS
// ═══════════════════════════════════════════════════════════════════════════════

const allChapterQuestions: ChapterQuestions[] = [
  ...volume1Questions,
  ...volume2Questions,
  ...volume3Questions,
  ...volume4Questions,
  ...volume5Questions,
  ...volume6Questions,
  ...volume7Questions,
  ...volume8Questions,
  ...volume9Questions,
  ...volume10Questions
];

// ═══════════════════════════════════════════════════════════════════════════════
// ACCESS FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function getChapterQuestions(chapterNumber: number): ChapterQuestions | undefined {
  return allChapterQuestions.find(cq => cq.chapterNumber === chapterNumber);
}

export function getChapterResearchIntent(chapterNumber: number): string {
  const chapter = getChapterQuestions(chapterNumber);
  return chapter?.researchIntent || `Understanding Chapter ${chapterNumber}`;
}

export function getAllChapterQuestions(): ChapterQuestions[] {
  return allChapterQuestions;
}

// Generate ChatGPT URL for a specific question
export function generateQuestionUrl(question: string, chapterTitle: string, chapterNumber: number): string {
  const fullPrompt = `${question}

Context: Architecture Portfolio Manual - Chapter ${chapterNumber}: "${chapterTitle}"

Please provide a detailed, professional response focused on internship portfolio development for architecture students.`;
  
  return `https://chat.openai.com/?q=${encodeURIComponent(fullPrompt)}`;
}

export default {
  getChapterQuestions,
  getChapterResearchIntent,
  getAllChapterQuestions,
  generateQuestionUrl
};
