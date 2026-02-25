// AI Intelligence Global State Store
// Manages firm context, skill profile, and learning memory

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type FirmType = 'Corporate' | 'Boutique' | 'Sustainable' | 'Interior' | 'Urban' | null;

interface SkillProfile {
  drafting: number;
  layout: number;
  environment: number;
  detailing: number;
  rendering: number;
  concept: number;
  technical: number;
}

interface AIState {
  // Firm Context
  selectedFirmType: FirmType;
  selectedFirmId: string | null;
  
  // Skill Profile (1-5 ratings)
  skillProfile: SkillProfile;
  
  // Learning History
  chaptersVisited: number[];
  referencesViewed: string[];
  
  // AI Memory
  weakAreas: string[];
  strongAreas: string[];
  matchScore: number;
  
  // Session
  sessionId: string;
  
  // Actions
  setFirmType: (type: FirmType) => void;
  setFirmId: (id: string | null) => void;
  updateSkill: (skill: keyof SkillProfile, value: number) => void;
  addVisitedChapter: (chapter: number) => void;
  addViewedReference: (refId: string) => void;
  updateWeakAreas: (areas: string[]) => void;
  updateStrongAreas: (areas: string[]) => void;
  updateMatchScore: (score: number) => void;
  reset: () => void;
}

const generateSessionId = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

const defaultSkillProfile: SkillProfile = {
  drafting: 3,
  layout: 3,
  environment: 3,
  detailing: 3,
  rendering: 3,
  concept: 3,
  technical: 3,
};

export const useAIStore = create<AIState>()(
  persist(
    (set, get) => ({
      // Initial State
      selectedFirmType: null,
      selectedFirmId: null,
      skillProfile: defaultSkillProfile,
      chaptersVisited: [],
      referencesViewed: [],
      weakAreas: [],
      strongAreas: [],
      matchScore: 0,
      sessionId: generateSessionId(),
      
      // Actions
      setFirmType: (type) => set({ selectedFirmType: type }),
      setFirmId: (id) => set({ selectedFirmId: id }),
      
      updateSkill: (skill, value) => set((state) => ({
        skillProfile: { ...state.skillProfile, [skill]: value }
      })),
      
      addVisitedChapter: (chapter) => set((state) => ({
        chaptersVisited: state.chaptersVisited.includes(chapter) 
          ? state.chaptersVisited 
          : [...state.chaptersVisited, chapter].slice(-50) // Keep last 50
      })),
      
      addViewedReference: (refId) => set((state) => ({
        referencesViewed: state.referencesViewed.includes(refId)
          ? state.referencesViewed
          : [...state.referencesViewed, refId].slice(-100) // Keep last 100
      })),
      
      updateWeakAreas: (areas) => set({ weakAreas: areas }),
      updateStrongAreas: (areas) => set({ strongAreas: areas }),
      updateMatchScore: (score) => set({ matchScore: score }),
      
      reset: () => set({
        selectedFirmType: null,
        selectedFirmId: null,
        skillProfile: defaultSkillProfile,
        chaptersVisited: [],
        referencesViewed: [],
        weakAreas: [],
        strongAreas: [],
        matchScore: 0,
        sessionId: generateSessionId(),
      }),
    }),
    {
      name: 'ai-intelligence-store',
      partialize: (state) => ({
        selectedFirmType: state.selectedFirmType,
        selectedFirmId: state.selectedFirmId,
        skillProfile: state.skillProfile,
        chaptersVisited: state.chaptersVisited,
        weakAreas: state.weakAreas,
        strongAreas: state.strongAreas,
        matchScore: state.matchScore,
      }),
    }
  )
);

// Skill area mapping for chapters
export const chapterSkillMapping: Record<number, keyof SkillProfile> = {
  1: 'concept', 2: 'concept', 3: 'concept', 4: 'concept', 5: 'concept',
  6: 'layout', 7: 'layout', 8: 'layout', 9: 'layout', 10: 'layout',
  11: 'drafting', 12: 'drafting', 13: 'drafting', 14: 'drafting', 15: 'drafting',
  16: 'technical', 17: 'technical', 18: 'technical', 19: 'technical', 20: 'technical',
  21: 'detailing', 22: 'detailing', 23: 'detailing', 24: 'detailing', 25: 'detailing',
  26: 'rendering', 27: 'rendering', 28: 'rendering', 29: 'rendering', 30: 'rendering',
  31: 'environment', 32: 'environment', 33: 'environment', 34: 'environment', 35: 'environment',
  36: 'layout', 37: 'layout', 38: 'layout', 39: 'layout', 40: 'layout',
  41: 'drafting', 42: 'drafting', 43: 'drafting', 44: 'drafting', 45: 'drafting',
  46: 'technical', 47: 'technical', 48: 'technical', 49: 'technical', 50: 'technical',
  51: 'detailing', 52: 'detailing', 53: 'detailing', 54: 'detailing', 55: 'detailing',
  56: 'rendering', 57: 'rendering', 58: 'rendering', 59: 'rendering', 60: 'rendering',
  61: 'environment', 62: 'environment', 63: 'environment', 64: 'environment', 65: 'environment',
  66: 'layout', 67: 'layout', 68: 'layout', 69: 'layout', 70: 'layout',
  71: 'drafting', 72: 'drafting', 73: 'drafting', 74: 'drafting', 75: 'drafting',
  76: 'technical', 77: 'technical', 78: 'technical', 79: 'technical', 80: 'technical',
  81: 'detailing', 82: 'detailing', 83: 'detailing', 84: 'detailing', 85: 'detailing',
  86: 'rendering', 87: 'rendering', 88: 'rendering', 89: 'rendering', 90: 'rendering',
  91: 'concept', 92: 'concept', 93: 'concept', 94: 'concept', 95: 'concept',
  96: 'layout', 97: 'layout', 98: 'layout', 99: 'layout', 100: 'layout',
  101: 'drafting', 102: 'drafting', 103: 'drafting', 104: 'drafting', 105: 'drafting',
  106: 'technical', 107: 'technical', 108: 'technical', 109: 'technical', 110: 'technical',
  111: 'detailing', 112: 'detailing', 113: 'detailing', 114: 'detailing', 115: 'detailing',
  116: 'rendering', 117: 'rendering', 118: 'rendering', 119: 'rendering', 120: 'rendering',
  121: 'environment', 122: 'environment', 123: 'environment', 124: 'environment', 125: 'environment',
  126: 'concept', 127: 'concept', 128: 'concept',
};

// Firm type expectations matrix
export const firmExpectations: Record<string, {
  primarySkills: (keyof SkillProfile)[];
  secondarySkills: (keyof SkillProfile)[];
  portfolioEmphasis: string[];
  avoidInPortfolio: string[];
}> = {
  Corporate: {
    primarySkills: ['technical', 'drafting', 'detailing'],
    secondarySkills: ['layout', 'rendering'],
    portfolioEmphasis: ['Technical documentation', 'BIM workflows', 'Working drawings', 'Large-scale projects'],
    avoidInPortfolio: ['Excessive concepts', 'Unrealistic renders', 'Overly artistic layouts'],
  },
  Boutique: {
    primarySkills: ['concept', 'detailing', 'rendering'],
    secondarySkills: ['layout', 'environment'],
    portfolioEmphasis: ['Design concepts', 'Material exploration', 'Spatial quality', 'Detail development'],
    avoidInPortfolio: ['Generic corporate style', 'Excessive technical drawings', 'Standard layouts'],
  },
  Sustainable: {
    primarySkills: ['environment', 'technical', 'concept'],
    secondarySkills: ['detailing', 'layout'],
    portfolioEmphasis: ['Climate response', 'Site analysis', 'Passive strategies', 'Environmental diagrams'],
    avoidInPortfolio: ['Energy-ignorant designs', 'No site context', 'Purely aesthetic focus'],
  },
  Interior: {
    primarySkills: ['detailing', 'rendering', 'layout'],
    secondarySkills: ['concept', 'technical'],
    portfolioEmphasis: ['Material boards', 'Interior perspectives', 'Furniture details', 'Lighting design'],
    avoidInPortfolio: ['Large urban projects', 'Building exteriors only', 'Structural focus'],
  },
  Urban: {
    primarySkills: ['concept', 'layout', 'environment'],
    secondarySkills: ['technical', 'rendering'],
    portfolioEmphasis: ['Masterplans', 'Urban analysis', 'Scale diagrams', 'Public spaces'],
    avoidInPortfolio: ['Small residential only', 'No site context', 'Interior-only work'],
  },
};
