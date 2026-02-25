// Premium Reading System Configuration
// Apple Books × Notion × Architectural Intelligence Platform

export const readingSystem = {
  // Container widths
  container: {
    reading: '880px',      // Optimal reading width
    wide: '1200px',        // Wide content
    full: '100%',
  },
  
  // Typography scale
  typography: {
    chapterTitle: {
      fontSize: '42px',
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
      fontWeight: '600',
    },
    sectionTitle: {
      fontSize: '26px',
      lineHeight: '1.3',
      letterSpacing: '-0.01em',
      fontWeight: '600',
    },
    subheading: {
      fontSize: '19px',
      lineHeight: '1.5',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
    body: {
      fontSize: '16px',
      lineHeight: '1.75',
      letterSpacing: '-0.01em',
      fontWeight: '400',
    },
    caption: {
      fontSize: '13px',
      lineHeight: '1.6',
      letterSpacing: '0',
      fontWeight: '400',
    },
  },
  
  // Spacing rhythm
  spacing: {
    section: '80px',
    paragraph: '24px',
    element: '16px',
  },
  
  // Colors
  colors: {
    light: {
      background: '#FFFFFF',
      surface: '#FAFAF9',
      surfaceHover: '#F5F5F4',
      text: '#111111',
      textSecondary: '#525252',
      textTertiary: '#A3A3A3',
      border: '#E5E5E5',
      borderLight: '#F0F0F0',
    },
    dark: {
      background: '#0E0E0E',
      surface: '#1A1A1A',
      surfaceHover: '#262626',
      text: '#EAEAEA',
      textSecondary: '#A3A3A3',
      textTertiary: '#525252',
      border: '#2A2A2A',
      borderLight: '#1F1F1F',
    },
    warm: {
      background: '#FAFAF8',
      surface: '#F7F7F5',
    },
  },
  
  // Animation timing
  animation: {
    fast: '0.2s',
    normal: '0.4s',
    slow: '0.7s',
    reading: '0.6s',
    easing: {
      smooth: [0.25, 0.1, 0.25, 1],
      spring: { type: 'spring', stiffness: 300, damping: 30 },
      gentle: { type: 'spring', stiffness: 200, damping: 40 },
    },
  },
  
  // Border radius
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '24px',
  },
  
  // Shadows (subtle)
  shadow: {
    sm: '0 1px 2px rgba(0,0,0,0.04)',
    md: '0 4px 12px rgba(0,0,0,0.05)',
    lg: '0 12px 32px rgba(0,0,0,0.06)',
    xl: '0 20px 40px rgba(0,0,0,0.08)',
    glow: (color: string) => `0 0 40px ${color}15`,
  },
};

// Volume tint colors (3-5% opacity)
export const volumeTints = {
  1: { color: '#6366F1', opacity: 0.03 },  // Indigo - Foundation
  2: { color: '#10B981', opacity: 0.03 },  // Emerald - Practice
  3: { color: '#F59E0B', opacity: 0.03 },  // Amber - Strategy
  4: { color: '#EF4444', opacity: 0.03 },  // Red - Structure
  5: { color: '#8B5CF6', opacity: 0.03 },  // Purple - Micro
  6: { color: '#06B6D4', opacity: 0.03 },  // Cyan - Technical
  7: { color: '#EC4899', opacity: 0.03 },  // Pink - Graphic
  8: { color: '#84CC16', opacity: 0.03 },  // Lime - Software
  9: { color: '#F97316', opacity: 0.03 },  // Orange - Application
  10: { color: '#64748B', opacity: 0.03 }, // Slate - Growth
};

// Reading mode configurations
export const readingModes = {
  normal: {
    fontSize: '16px',
    lineHeight: '1.75',
    maxWidth: '880px',
  },
  comfortable: {
    fontSize: '18px',
    lineHeight: '1.85',
    maxWidth: '800px',
  },
  focus: {
    fontSize: '17px',
    lineHeight: '1.8',
    maxWidth: '720px',
  },
};
