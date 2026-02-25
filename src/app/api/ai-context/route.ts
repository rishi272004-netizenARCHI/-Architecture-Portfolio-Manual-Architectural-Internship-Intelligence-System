import { NextRequest, NextResponse } from 'next/server';

// AI Context API - Provides intelligence for chapters
// Returns: related references, failure examples, tools, suggestions

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const chapterId = searchParams.get('chapterId');
  const firmType = searchParams.get('firmType');
  const skillProfile = searchParams.get('skillProfile');

  try {
    // Get chapter number
    const chapterNum = parseInt(chapterId || '1');
    const skillArea = getSkillArea(chapterNum);
    
    return NextResponse.json({
      references: getDefaultReferences(skillArea),
      firmExpectations: firmType ? getFirmExpectations(firmType) : null,
      crossChapter: getCrossChapterIntelligence(chapterNum),
      skillAssessment: skillProfile ? JSON.parse(skillProfile) : null
    });
  } catch (error) {
    console.error('AI Context API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch AI context' },
      { status: 500 }
    );
  }
}

// Save user assessment
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { chapterId, sessionId, clarityRating, skillRating, applicationRating, userNotes } = body;

    // For now, just return success (would save to database in production)
    return NextResponse.json({
      success: true,
      assessment: {
        chapterId,
        sessionId,
        clarityRating,
        skillRating,
        applicationRating,
        userNotes,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Assessment save error:', error);
    return NextResponse.json(
      { error: 'Failed to save assessment' },
      { status: 500 }
    );
  }
}

// Helper functions
function getSkillArea(chapterNum: number): string {
  const mapping: Record<string, string> = {
    '1-5': 'concept',
    '6-10': 'layout',
    '11-15': 'drafting',
    '16-20': 'technical',
    '21-25': 'detailing',
    '26-30': 'rendering',
    '31-35': 'environment',
    '36-40': 'layout',
    '41-45': 'drafting',
    '46-50': 'technical',
    '51-55': 'detailing',
    '56-60': 'rendering',
    '61-65': 'environment',
    '66-70': 'layout',
    '71-75': 'drafting',
    '76-80': 'technical',
    '81-85': 'detailing',
    '86-90': 'rendering',
    '91-95': 'concept',
    '96-100': 'layout',
    '101-105': 'drafting',
    '106-110': 'technical',
    '111-115': 'detailing',
    '116-120': 'rendering',
    '121-125': 'environment',
    '126-128': 'concept'
  };

  for (const [range, skill] of Object.entries(mapping)) {
    const [start, end] = range.split('-').map(Number);
    if (chapterNum >= start && chapterNum <= end) {
      return skill;
    }
  }
  return 'concept';
}

function getDefaultReferences(skillArea: string) {
  const references: Record<string, any[]> = {
    layout: [
      { title: 'ArchDaily Portfolio Examples', url: 'https://www.archdaily.com', category: 'example', source: 'ArchDaily' },
      { title: 'Behance Architecture', url: 'https://www.behance.net', category: 'example', source: 'Behance' }
    ],
    drafting: [
      { title: 'Detail Magazine', url: 'https://www.detail-online.com', category: 'example', source: 'Detail' },
      { title: 'ArchDaily Working Drawings', url: 'https://www.archdaily.com', category: 'example', source: 'ArchDaily' }
    ],
    technical: [
      { title: 'BIM Standards', url: 'https://www.nibs.org', category: 'theory', source: 'NIBS' },
      { title: 'Construction Details', url: 'https://www.detail-online.com', category: 'example', source: 'Detail' }
    ],
    detailing: [
      { title: 'Detail Online', url: 'https://www.detail-online.com', category: 'example', source: 'Detail' },
      { title: 'Material Connexion', url: 'https://www.materialconnexion.com', category: 'tool', source: 'MC' }
    ],
    rendering: [
      { title: 'CGArchitect', url: 'https://cgarchitect.com', category: 'example', source: 'CGArchitect' },
      { title: 'Lumion Gallery', url: 'https://lumion.com', category: 'example', source: 'Lumion' }
    ],
    environment: [
      { title: 'Passive House Institute', url: 'https://passivehouse.com', category: 'theory', source: 'PHI' },
      { title: 'USGBC LEED', url: 'https://www.usgbc.org', category: 'theory', source: 'USGBC' }
    ],
    concept: [
      { title: 'ArchDaily Design Concepts', url: 'https://www.archdaily.com', category: 'example', source: 'ArchDaily' },
      { title: 'Architectural Theory', url: 'https://www.archdaily.com', category: 'theory', source: 'ArchDaily' }
    ]
  };

  return references[skillArea] || references['concept'];
}

function getFirmExpectations(firmType: string) {
  const expectations: Record<string, any> = {
    Corporate: {
      primarySkills: ['technical', 'drafting', 'detailing'],
      portfolioEmphasis: ['Technical documentation', 'BIM workflows', 'Working drawings'],
      avoidInPortfolio: ['Excessive concepts', 'Unrealistic renders']
    },
    Boutique: {
      primarySkills: ['concept', 'detailing', 'rendering'],
      portfolioEmphasis: ['Design concepts', 'Material exploration', 'Spatial quality'],
      avoidInPortfolio: ['Generic corporate style', 'Excessive technical drawings']
    },
    Sustainable: {
      primarySkills: ['environment', 'technical', 'concept'],
      portfolioEmphasis: ['Climate response', 'Site analysis', 'Passive strategies'],
      avoidInPortfolio: ['Energy-ignorant designs', 'No site context']
    },
    Interior: {
      primarySkills: ['detailing', 'rendering', 'layout'],
      portfolioEmphasis: ['Material boards', 'Interior perspectives', 'Lighting design'],
      avoidInPortfolio: ['Large urban projects', 'Structural focus only']
    },
    Urban: {
      primarySkills: ['concept', 'layout', 'environment'],
      portfolioEmphasis: ['Masterplans', 'Urban analysis', 'Public spaces'],
      avoidInPortfolio: ['Small residential only', 'Interior-only work']
    }
  };

  return expectations[firmType] || null;
}

function getCrossChapterIntelligence(chapterNum: number) {
  // Find related chapters
  const skillArea = getSkillArea(chapterNum);
  const relatedChapters: number[] = [];
  const complementaryChapters: number[] = [];

  // Find chapters with same skill area
  for (let i = 1; i <= 128; i++) {
    if (i !== chapterNum && getSkillArea(i) === skillArea) {
      relatedChapters.push(i);
      if (relatedChapters.length >= 4) break;
    }
  }

  // Find complementary skill chapters
  const complementarySkills: Record<string, string[]> = {
    layout: ['drafting', 'rendering'],
    drafting: ['technical', 'detailing'],
    technical: ['drafting', 'detailing'],
    detailing: ['technical', 'rendering'],
    rendering: ['layout', 'concept'],
    environment: ['concept', 'technical'],
    concept: ['layout', 'environment']
  };

  const compSkills = complementarySkills[skillArea] || [];
  for (let i = 1; i <= 128 && complementaryChapters.length < 3; i++) {
    if (compSkills.includes(getSkillArea(i))) {
      complementaryChapters.push(i);
    }
  }

  return {
    relatedChapters,
    complementaryChapters,
    skillArea
  };
}
