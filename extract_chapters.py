import re

# Read the source file
with open('/home/z/my-project/upload/The Architecture Internship Portfolio Manual.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Define volume structure
volumes = [
    {"number": 3, "title": "Portfolio Strategy Engineering", "chapters": list(range(26, 41))},
    {"number": 4, "title": "Macro Structure of the Portfolio Document", "chapters": list(range(41, 51))},
    {"number": 5, "title": "Micro Structure of Project Presentation", "chapters": list(range(51, 67))},
    {"number": 6, "title": "Technical Benchmarking and Drawing Discipline", "chapters": list(range(67, 79))},
    {"number": 7, "title": "Graphic System and Visual Discipline", "chapters": list(range(79, 92))},
    {"number": 8, "title": "Template Systems and Software Workflow", "chapters": list(range(92, 106))},
    {"number": 9, "title": "Application Engineering and Professional Communication", "chapters": list(range(106, 119))},
    {"number": 10, "title": "Evaluation and Long-Term Growth", "chapters": list(range(119, 129))},
]

# Chapter titles from index
chapter_titles = {
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
    114: "Portfolio Customization Before Sending",
    115: "Common Application Mistakes",
    116: "Interview Preparation Through Portfolio",
    117: "Presenting Portfolio Verbally",
    118: "Converting Internship into Long-Term Opportunity",
    119: "Self-Evaluation Matrix",
    120: "Portfolio Scoring System",
    121: "Firm Compatibility Scoring Model",
    122: "Match Score Calculation Method",
    123: "High-Match vs Low-Match Strategy",
    124: "Annual Portfolio Updating System",
    125: "Documenting Internship Learning",
    126: "Transitioning from Internship Portfolio to Thesis Portfolio",
    127: "Transitioning to Professional Portfolio",
    128: "Building a Lifelong Portfolio System",
}

# Split content by ________________
sections = content.split('________________')

# Find chapter content
def find_chapter_content(chapter_num, chapter_title):
    # Look for the chapter title in the content
    for i, section in enumerate(sections):
        if chapter_title in section:
            # Get the content after the title
            start_idx = section.find(chapter_title) + len(chapter_title)
            content = section[start_idx:].strip()
            # Get content until next blank line sequence or ________________
            return content
    return ""

# Generate TypeScript code
output = []
for vol in volumes:
    vol_num = vol["number"]
    vol_title = vol["title"]
    
    chapters_code = []
    for ch_num in vol["chapters"]:
        if ch_num in chapter_titles:
            title = chapter_titles[ch_num]
            ch_content = find_chapter_content(ch_num, title)
            # Escape backticks and special characters
            ch_content = ch_content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
            chapters_code.append(f'''      {{
        number: {ch_num},
        title: "{title}",
        content: `{ch_content}`
      }}''')
    
    output.append(f'''  {{
    number: {vol_num},
    title: "{vol_title}",
    description: "",
    chapters: [
{',\n'.join(chapters_code)}
    ]
  }}''')

print(',\n'.join(output))
