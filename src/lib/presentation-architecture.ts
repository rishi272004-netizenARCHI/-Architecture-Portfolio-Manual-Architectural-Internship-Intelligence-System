// ═══════════════════════════════════════════════════════════════════════════════
// MASTER PRESENTATION ARCHITECTURE SYSTEM
// 128 Chapters × 12 Frame Types × 10 Volume Identities = Zero Repetition
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────────
// PART 01: FRAME ARCHETYPE SYSTEM (12 Composition Logics)
// ─────────────────────────────────────────────────────────────────────────────────

export type FrameArchetype = 
  | 'hero-authority'      // Large title, minimal text, massive whitespace, dominant visual
  | 'split-analytical'    // Two-column, left explanation, right diagram
  | 'matrix-frame'        // Structured grid, comparative logic
  | 'vertical-flow'       // Sequential structure, step progression
  | 'timeline-frame'      // Horizontal or vertical spine
  | 'data-dashboard'      // Metrics blocks, analytical structure
  | 'spotlight-frame'     // One dominant concept, supporting explanation
  | 'deconstruction'      // Break one idea into layers
  | 'comparative-split'   // A vs B structure
  | 'blueprint-frame'     // Technical structured background
  | 'emphasis-panel'      // Key principle dominant, secondary info lighter
  | 'summary-authority';  // Condensed takeaway, structured recap

export const frameArchetypes: Record<FrameArchetype, {
  name: string;
  description: string;
  density: 'light' | 'medium' | 'heavy';
  alignment: 'left' | 'center' | 'right' | 'split' | 'asymmetric';
  anchorType: 'numeral' | 'geometric' | 'grid' | 'diagram' | 'quote' | 'process';
}> = {
  'hero-authority': {
    name: 'Hero Authority Frame',
    description: 'Large title, minimal text, massive whitespace, dominant visual element',
    density: 'light',
    alignment: 'center',
    anchorType: 'geometric'
  },
  'split-analytical': {
    name: 'Split Analytical Frame',
    description: 'Two-column, left explanation, right diagram',
    density: 'medium',
    alignment: 'split',
    anchorType: 'diagram'
  },
  'matrix-frame': {
    name: 'Matrix Frame',
    description: 'Structured grid, comparative logic',
    density: 'heavy',
    alignment: 'center',
    anchorType: 'grid'
  },
  'vertical-flow': {
    name: 'Vertical Flow Frame',
    description: 'Sequential structure, step progression',
    density: 'medium',
    alignment: 'left',
    anchorType: 'process'
  },
  'timeline-frame': {
    name: 'Timeline Frame',
    description: 'Horizontal or vertical spine',
    density: 'medium',
    alignment: 'left',
    anchorType: 'process'
  },
  'data-dashboard': {
    name: 'Data Dashboard Frame',
    description: 'Metrics blocks, analytical structure',
    density: 'heavy',
    alignment: 'center',
    anchorType: 'grid'
  },
  'spotlight-frame': {
    name: 'Spotlight Frame',
    description: 'One dominant concept, supporting explanation',
    density: 'light',
    alignment: 'center',
    anchorType: 'quote'
  },
  'deconstruction': {
    name: 'Deconstruction Frame',
    description: 'Break one idea into layers',
    density: 'medium',
    alignment: 'left',
    anchorType: 'diagram'
  },
  'comparative-split': {
    name: 'Comparative Split Frame',
    description: 'A vs B structure',
    density: 'medium',
    alignment: 'split',
    anchorType: 'diagram'
  },
  'blueprint-frame': {
    name: 'Blueprint Frame',
    description: 'Technical structured background',
    density: 'heavy',
    alignment: 'left',
    anchorType: 'grid'
  },
  'emphasis-panel': {
    name: 'Emphasis Panel Frame',
    description: 'Key principle dominant, secondary info lighter',
    density: 'medium',
    alignment: 'asymmetric',
    anchorType: 'numeral'
  },
  'summary-authority': {
    name: 'Summary Authority Frame',
    description: 'Condensed takeaway, structured recap',
    density: 'light',
    alignment: 'center',
    anchorType: 'quote'
  }
};

// ─────────────────────────────────────────────────────────────────────────────────
// PART 02: OPENING TYPE SYSTEM (5 Different Entry Strategies)
// ─────────────────────────────────────────────────────────────────────────────────

export type OpeningType = 
  | 'statement-first'     // Large thesis line, then explanation
  | 'question-first'      // Architectural question, then structured answer
  | 'principle-block'     // 3 bold principles first, then explanation
  | 'diagram-first'       // Visual logic, then explanation
  | 'definition-frame';   // Term, Definition, Expansion

export const openingTypes: Record<OpeningType, {
  name: string;
  description: string;
}> = {
  'statement-first': {
    name: 'Statement First',
    description: 'Large thesis line, then explanation'
  },
  'question-first': {
    name: 'Question First',
    description: 'Architectural question, then structured answer'
  },
  'principle-block': {
    name: 'Principle Block',
    description: '3 bold principles first, then explanation'
  },
  'diagram-first': {
    name: 'Diagram First',
    description: 'Visual logic, then explanation'
  },
  'definition-frame': {
    name: 'Definition Frame',
    description: 'Term, Definition, Expansion'
  }
};

// ─────────────────────────────────────────────────────────────────────────────────
// PART 03: BACKGROUND IDENTITY SYSTEM (6 Distinct Background Identities)
// ─────────────────────────────────────────────────────────────────────────────────

export type BackgroundIdentity = 
  | 'clean-white'         // Pure white, no texture
  | 'subtle-tint'         // Light tinted panel
  | 'technical-grid'      // Blueprint-style grid
  | 'diagonal-strip'      // Diagonal light strip
  | 'layered-gradient'    // Subtle layered depth gradient
  | 'contrast-band';      // Minimal contrast band

export const backgroundIdentities: Record<BackgroundIdentity, {
  name: string;
  description: string;
  intensity: number; // 0-100 opacity intensity
}> = {
  'clean-white': {
    name: 'Clean White',
    description: 'Pure white, no texture',
    intensity: 0
  },
  'subtle-tint': {
    name: 'Subtle Tinted Panel',
    description: 'Light tinted panel',
    intensity: 5
  },
  'technical-grid': {
    name: 'Technical Grid',
    description: 'Blueprint-style grid',
    intensity: 10
  },
  'diagonal-strip': {
    name: 'Diagonal Light Strip',
    description: 'Diagonal light strip',
    intensity: 8
  },
  'layered-gradient': {
    name: 'Layered Gradient',
    description: 'Subtle layered depth gradient',
    intensity: 15
  },
  'contrast-band': {
    name: 'Contrast Band',
    description: 'Minimal contrast band',
    intensity: 12
  }
};

// ─────────────────────────────────────────────────────────────────────────────────
// PART 04: RHYTHM PATTERNS (5 Density Rhythm Variations)
// ─────────────────────────────────────────────────────────────────────────────────

export type RhythmPattern = 
  | 'heavy-light-structured-emphasis-dense'
  | 'light-structured-visual-dense-summary'
  | 'emphasis-heavy-light-dense-structured'
  | 'structured-visual-heavy-emphasis-light'
  | 'dense-emphasis-light-structured-heavy';

export const rhythmPatterns: Record<RhythmPattern, {
  name: string;
  sequence: ('light' | 'medium' | 'heavy')[];
}> = {
  'heavy-light-structured-emphasis-dense': {
    name: 'Heavy → Light → Structured → Emphasis → Dense',
    sequence: ['heavy', 'light', 'medium', 'medium', 'heavy']
  },
  'light-structured-visual-dense-summary': {
    name: 'Light → Structured → Visual → Dense → Summary',
    sequence: ['light', 'medium', 'light', 'heavy', 'light']
  },
  'emphasis-heavy-light-dense-structured': {
    name: 'Emphasis → Heavy → Light → Dense → Structured',
    sequence: ['medium', 'heavy', 'light', 'heavy', 'medium']
  },
  'structured-visual-heavy-emphasis-light': {
    name: 'Structured → Visual → Heavy → Emphasis → Light',
    sequence: ['medium', 'light', 'heavy', 'medium', 'light']
  },
  'dense-emphasis-light-structured-heavy': {
    name: 'Dense → Emphasis → Light → Structured → Heavy',
    sequence: ['heavy', 'medium', 'light', 'medium', 'heavy']
  }
};

// ─────────────────────────────────────────────────────────────────────────────────
// PART 05: VOLUME IDENTITY SYSTEM (10 Unique Volume Identities)
// ─────────────────────────────────────────────────────────────────────────────────

export interface VolumeIdentity {
  number: number;
  name: string;
  accent: string;
  tone: string;
  entryStyle: OpeningType;
  backgroundStyle: BackgroundIdentity;
  dividerStyle: 'line' | 'gradient' | 'space' | 'icon';
  emphasisStyle: 'bold' | 'underline' | 'highlight' | 'border';
  primaryFrame: FrameArchetype;
  secondaryFrame: FrameArchetype;
}

export const volumeIdentities: VolumeIdentity[] = [
  {
    number: 1,
    name: 'Foundation of Portfolio Thinking',
    accent: '#171717',
    tone: 'Academic Authority',
    entryStyle: 'statement-first',
    backgroundStyle: 'clean-white',
    dividerStyle: 'line',
    emphasisStyle: 'bold',
    primaryFrame: 'hero-authority',
    secondaryFrame: 'split-analytical'
  },
  {
    number: 2,
    name: 'Understanding the Practice Landscape',
    accent: '#1e3a5f',
    tone: 'Comparative Analysis',
    entryStyle: 'principle-block',
    backgroundStyle: 'subtle-tint',
    dividerStyle: 'gradient',
    emphasisStyle: 'highlight',
    primaryFrame: 'comparative-split',
    secondaryFrame: 'matrix-frame'
  },
  {
    number: 3,
    name: 'Portfolio Strategy Engineering',
    accent: '#2d3436',
    tone: 'Strategic Mapping',
    entryStyle: 'diagram-first',
    backgroundStyle: 'technical-grid',
    dividerStyle: 'space',
    emphasisStyle: 'border',
    primaryFrame: 'data-dashboard',
    secondaryFrame: 'timeline-frame'
  },
  {
    number: 4,
    name: 'Macro Structure of Portfolio Document',
    accent: '#1a1a2e',
    tone: 'Blueprint Engineering',
    entryStyle: 'definition-frame',
    backgroundStyle: 'technical-grid',
    dividerStyle: 'line',
    emphasisStyle: 'bold',
    primaryFrame: 'blueprint-frame',
    secondaryFrame: 'deconstruction'
  },
  {
    number: 5,
    name: 'Micro Structure of Project Presentation',
    accent: '#2c3e50',
    tone: 'Visual Hierarchy',
    entryStyle: 'question-first',
    backgroundStyle: 'contrast-band',
    dividerStyle: 'gradient',
    emphasisStyle: 'underline',
    primaryFrame: 'spotlight-frame',
    secondaryFrame: 'emphasis-panel'
  },
  {
    number: 6,
    name: 'Technical Benchmarking and Drawing Discipline',
    accent: '#1a1a1a',
    tone: 'Drawing Authority',
    entryStyle: 'statement-first',
    backgroundStyle: 'clean-white',
    dividerStyle: 'line',
    emphasisStyle: 'bold',
    primaryFrame: 'split-analytical',
    secondaryFrame: 'blueprint-frame'
  },
  {
    number: 7,
    name: 'Graphic System and Visual Discipline',
    accent: '#34495e',
    tone: 'Visual Discipline',
    entryStyle: 'diagram-first',
    backgroundStyle: 'layered-gradient',
    dividerStyle: 'icon',
    emphasisStyle: 'highlight',
    primaryFrame: 'matrix-frame',
    secondaryFrame: 'spotlight-frame'
  },
  {
    number: 8,
    name: 'Template Systems and Software Workflow',
    accent: '#212121',
    tone: 'Layout Demonstration',
    entryStyle: 'principle-block',
    backgroundStyle: 'subtle-tint',
    dividerStyle: 'space',
    emphasisStyle: 'border',
    primaryFrame: 'deconstruction',
    secondaryFrame: 'vertical-flow'
  },
  {
    number: 9,
    name: 'Application Engineering and Professional Communication',
    accent: '#374151',
    tone: 'Communication Authority',
    entryStyle: 'question-first',
    backgroundStyle: 'diagonal-strip',
    dividerStyle: 'gradient',
    emphasisStyle: 'underline',
    primaryFrame: 'vertical-flow',
    secondaryFrame: 'summary-authority'
  },
  {
    number: 10,
    name: 'Evaluation and Long-Term Growth',
    accent: '#0f172a',
    tone: 'Evaluation & Evolution',
    entryStyle: 'definition-frame',
    backgroundStyle: 'layered-gradient',
    dividerStyle: 'icon',
    emphasisStyle: 'highlight',
    primaryFrame: 'timeline-frame',
    secondaryFrame: 'data-dashboard'
  }
];

// ─────────────────────────────────────────────────────────────────────────────────
// PART 06: CHAPTER FRAME ASSIGNMENT SYSTEM
// ─────────────────────────────────────────────────────────────────────────────────

// Anti-repetition pattern: Never repeat same frame type in adjacent chapters
const frameSequence: FrameArchetype[] = [
  'hero-authority', 'split-analytical', 'matrix-frame', 'vertical-flow',
  'timeline-frame', 'data-dashboard', 'spotlight-frame', 'deconstruction',
  'comparative-split', 'blueprint-frame', 'emphasis-panel', 'summary-authority'
];

const openingSequence: OpeningType[] = [
  'statement-first', 'question-first', 'principle-block', 'diagram-first', 'definition-frame'
];

const backgroundSequence: BackgroundIdentity[] = [
  'clean-white', 'subtle-tint', 'technical-grid', 'diagonal-strip', 'layered-gradient', 'contrast-band'
];

const rhythmSequence: RhythmPattern[] = [
  'heavy-light-structured-emphasis-dense',
  'light-structured-visual-dense-summary',
  'emphasis-heavy-light-dense-structured',
  'structured-visual-heavy-emphasis-light',
  'dense-emphasis-light-structured-heavy'
];

// Prime number based rotation to ensure no repetition patterns
const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];

function getPrimeForChapter(chapterNum: number): number {
  return PRIMES[chapterNum % PRIMES.length];
}

// Get volume number for chapter
export function getVolumeForChapter(chapterNum: number): number {
  if (chapterNum <= 10) return 1;
  if (chapterNum <= 25) return 2;
  if (chapterNum <= 40) return 3;
  if (chapterNum <= 50) return 4;
  if (chapterNum <= 66) return 5;
  if (chapterNum <= 78) return 6;
  if (chapterNum <= 91) return 7;
  if (chapterNum <= 105) return 8;
  if (chapterNum <= 118) return 9;
  return 10;
}

// Get chapter position within volume (1-indexed)
export function getChapterInVolume(chapterNum: number): number {
  const volumeStarts = [1, 11, 26, 41, 51, 67, 79, 92, 106, 119];
  const volume = getVolumeForChapter(chapterNum);
  return chapterNum - volumeStarts[volume - 1] + 1;
}

// Get volume identity
export function getVolumeIdentity(chapterNum: number): VolumeIdentity {
  const volumeNum = getVolumeForChapter(chapterNum);
  return volumeIdentities[volumeNum - 1];
}

// ═══════════════════════════════════════════════════════════════════════════════
// CHAPTER PRESENTATION CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════════

export interface ChapterPresentation {
  chapterNum: number;
  volumeNum: number;
  volumeIdentity: VolumeIdentity;
  
  // Frame configuration
  entryFrame: FrameArchetype;
  secondaryFrame: FrameArchetype;
  contentFrames: FrameArchetype[];
  closingFrame: FrameArchetype;
  
  // Opening configuration
  openingType: OpeningType;
  
  // Visual configuration
  backgroundIdentity: BackgroundIdentity;
  rhythmPattern: RhythmPattern;
  
  // Anchor configuration
  primaryAnchor: 'numeral' | 'geometric' | 'grid' | 'diagram' | 'quote' | 'process';
  secondaryAnchor: 'numeral' | 'geometric' | 'grid' | 'diagram' | 'quote' | 'process';
  
  // Alignment configuration
  alignment: 'left' | 'center' | 'right' | 'split' | 'asymmetric';
}

// Generate presentation configuration for any chapter
export function getChapterPresentation(chapterNum: number): ChapterPresentation {
  const volumeNum = getVolumeForChapter(chapterNum);
  const volumeIdentity = getVolumeIdentity(chapterNum);
  const chapterInVolume = getChapterInVolume(chapterNum);
  const prime = getPrimeForChapter(chapterNum);
  
  // Frame selection using prime-based rotation
  const entryFrameIndex = (chapterNum * prime) % frameSequence.length;
  const secondaryFrameIndex = (chapterNum * prime + 4) % frameSequence.length;
  const closingFrameIndex = (chapterNum * prime + 8) % frameSequence.length;
  
  // Content frames vary based on chapter position
  const contentFrames: FrameArchetype[] = [];
  for (let i = 0; i < 4; i++) {
    const index = (chapterNum + i * prime + 2) % frameSequence.length;
    contentFrames.push(frameSequence[index]);
  }
  
  // Opening type rotation
  const openingIndex = (chapterNum + prime) % openingSequence.length;
  
  // Background identity - never same as adjacent chapters
  const bgIndex = (chapterNum * 2 + prime) % backgroundSequence.length;
  const prevBgIndex = ((chapterNum - 1) * 2 + getPrimeForChapter(chapterNum - 1)) % backgroundSequence.length;
  const backgroundIdentity = bgIndex !== prevBgIndex 
    ? backgroundSequence[bgIndex] 
    : backgroundSequence[(bgIndex + 1) % backgroundSequence.length];
  
  // Rhythm pattern rotation
  const rhythmIndex = (chapterNum + prime) % rhythmSequence.length;
  
  // Anchor configuration
  const anchorTypes: Array<'numeral' | 'geometric' | 'grid' | 'diagram' | 'quote' | 'process'> = 
    ['numeral', 'geometric', 'grid', 'diagram', 'quote', 'process'];
  const primaryAnchor = anchorTypes[(chapterNum + prime) % anchorTypes.length];
  const secondaryAnchor = anchorTypes[(chapterNum * 2 + prime) % anchorTypes.length];
  
  // Alignment rotation
  const alignments: Array<'left' | 'center' | 'right' | 'split' | 'asymmetric'> = 
    ['left', 'center', 'right', 'split', 'asymmetric'];
  const alignment = alignments[(chapterNum + prime) % alignments.length];
  
  return {
    chapterNum,
    volumeNum,
    volumeIdentity,
    entryFrame: frameSequence[entryFrameIndex],
    secondaryFrame: frameSequence[secondaryFrameIndex],
    contentFrames,
    closingFrame: frameSequence[closingFrameIndex],
    openingType: openingSequence[openingIndex],
    backgroundIdentity,
    rhythmPattern: rhythmSequence[rhythmIndex],
    primaryAnchor,
    secondaryAnchor,
    alignment
  };
}

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITY EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

export { frameSequence, openingSequence, backgroundSequence, rhythmSequence };
