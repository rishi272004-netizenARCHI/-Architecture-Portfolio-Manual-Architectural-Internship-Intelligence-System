"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  BookOpen,
  Clock,
  Target,
  Layers,
  CheckCircle2,
  ArrowRight,
  Quote,
  TrendingUp,
  Minus,
  Plus,
  Grid3X3,
  LayersIcon,
  BarChart3,
  Lightbulb,
  GitBranch,
  Columns,
  Layout,
  ListChecks,
  MessageSquare,
} from "lucide-react";

import { ChapterIntelligencePanel, SelfAssessment, LearningPathVisualization } from "@/components/ai-intelligence-panel";
import { ReadingModeToggle, ReadingProgressBar, VolumeTintBackground, useReadingContext, ReadingProvider } from "@/components/reading-mode";
import { ChapterAIResearchButton } from "@/components/ai-research-button";

import { volumes, getChapterContent } from "@/lib/book-data";
import { getChapterImages, allChapterTitles } from "@/lib/chapter-images";
import { getChapterQuestions, generateQuestionUrl } from "@/lib/chapter-specific-questions";
import {
  getChapterPresentation,
  openingTypes,
  backgroundIdentities,
  type FrameArchetype,
  type OpeningType,
  type BackgroundIdentity,
  type ChapterPresentation,
} from "@/lib/presentation-architecture";

// ═══════════════════════════════════════════════════════════════════════════════
// TYPOGRAPHY SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

const typography = {
  hero: "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight",
  h1: "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight",
  h2: "text-2xl sm:text-3xl font-semibold tracking-tight leading-snug",
  h3: "text-xl sm:text-2xl font-semibold tracking-tight",
  h4: "text-lg sm:text-xl font-semibold tracking-tight",
  body: "text-base sm:text-lg leading-relaxed",
  bodyLarge: "text-lg sm:text-xl leading-relaxed",
  caption: "text-sm leading-normal",
  micro: "text-xs uppercase tracking-widest font-medium",
  statement: "text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide leading-relaxed",
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// CONTENT PARSING UTILITIES
// ═══════════════════════════════════════════════════════════════════════════════

function extractURLs(content: string): { text: string; url: string }[] {
  const urlRegex = /https?:\/\/[^\s\)\]]+/g;
  const matches = content.match(urlRegex) || [];
  return [...new Set(matches)].map(url => {
    const cleanUrl = url.replace(/[.,;:'"!?)\]]+$/, '');
    let displayText = cleanUrl.replace(/^https?:\/\/(www\.)?/, '').split('/')[0].split('?')[0];
    if (displayText.includes('behance')) displayText = 'Behance';
    else if (displayText.includes('archdaily')) displayText = 'ArchDaily';
    else if (displayText.includes('linkedin')) displayText = 'LinkedIn';
    else if (displayText.includes('scribd')) displayText = 'Scribd';
    else if (displayText.includes('issuu')) displayText = 'Issuu';
    return { text: displayText, url: cleanUrl };
  });
}

function parseContentToSections(content: string): {
  title: string;
  subtitle?: string;
  bullets: string[];
  type: 'header' | 'content' | 'list';
}[] {
  const sections: { title: string; subtitle?: string; bullets: string[]; type: 'header' | 'content' | 'list' }[] = [];
  const lines = content.split('\n');
  let currentSection: { title: string; subtitle?: string; bullets: string[]; type: 'header' | 'content' | 'list' } | null = null;
  
  const flushSection = () => {
    if (currentSection) {
      sections.push(currentSection);
      currentSection = null;
    }
  };
  
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    
    if (trimmed.startsWith('## ')) {
      flushSection();
      currentSection = { title: trimmed.replace('## ', ''), bullets: [], type: 'header' };
    } else if (trimmed.startsWith('### ')) {
      flushSection();
      currentSection = { title: trimmed.replace('### ', ''), bullets: [], type: 'content' };
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('● ')) {
      const bulletText = trimmed.replace(/^[-*●] /, '');
      if (currentSection) {
        currentSection.bullets.push(bulletText);
      } else {
        currentSection = { title: '', bullets: [bulletText], type: 'list' };
      }
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      flushSection();
      currentSection = { title: trimmed.replace(/\*\*/g, ''), bullets: [], type: 'content' };
    } else if (!trimmed.startsWith('---') && !trimmed.startsWith('```')) {
      if (currentSection && !currentSection.subtitle && currentSection.type === 'content') {
        currentSection.subtitle = trimmed.replace(/\*\*/g, '');
      } else if (!currentSection) {
        currentSection = { title: trimmed.replace(/\*\*/g, ''), bullets: [], type: 'content' };
      }
    }
  });
  
  flushSection();
  return sections.filter(s => s.title || s.bullets.length > 0);
}

// ═══════════════════════════════════════════════════════════════════════════════
// INTERSECTION OBSERVER HOOK
// ═══════════════════════════════════════════════════════════════════════════════

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isInView };
}

// ═══════════════════════════════════════════════════════════════════════════════
// BACKGROUND COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function BackgroundLayer({ identity, accent }: { identity: BackgroundIdentity; accent: string }) {
  switch (identity) {
    case 'clean-white':
      return null;
    
    case 'subtle-tint':
      return (
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: `${accent}05` }}
        />
      );
    
    case 'technical-grid':
      return (
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(${accent}40 1px, transparent 1px),
              linear-gradient(90deg, ${accent}40 1px, transparent 1px),
              linear-gradient(${accent}20 1px, transparent 1px),
              linear-gradient(90deg, ${accent}20 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
          }}
        />
      );
    
    case 'diagonal-strip':
      return (
        <div 
          className="absolute inset-0 overflow-hidden"
        >
          <div 
            className="absolute -top-1/2 -right-1/4 w-1/2 h-[200%] -rotate-12 opacity-[0.03]"
            style={{ backgroundColor: accent }}
          />
        </div>
      );
    
    case 'layered-gradient':
      return (
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${accent}08, transparent 50%),
                         radial-gradient(ellipse at 70% 80%, ${accent}05, transparent 50%)`
          }}
        />
      );
    
    case 'contrast-band':
      return (
        <div className="absolute inset-0 flex">
          <div className="w-1/3 h-full opacity-[0.02]" style={{ backgroundColor: accent }} />
        </div>
      );
    
    default:
      return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// VISUAL ANCHOR COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function VisualAnchor({ 
  type, 
  accent, 
  chapterNum 
}: { 
  type: 'numeral' | 'geometric' | 'grid' | 'diagram' | 'quote' | 'process';
  accent: string;
  chapterNum: number;
}) {
  switch (type) {
    case 'numeral':
      return (
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[180px] sm:text-[250px] lg:text-[350px] font-bold leading-none select-none pointer-events-none opacity-[0.03]"
          style={{ color: accent }}
        >
          {String(chapterNum).padStart(2, '0')}
        </div>
      );
    
    case 'geometric':
      return (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.05]">
          <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full border-4" style={{ borderColor: accent }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rotate-45" style={{ backgroundColor: `${accent}20` }} />
        </div>
      );
    
    case 'grid':
      return (
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, ${accent} 0px, ${accent} 1px, transparent 1px, transparent 60px),
                              repeating-linear-gradient(90deg, ${accent} 0px, ${accent} 1px, transparent 1px, transparent 60px)`
          }}
        />
      );
    
    case 'diagram':
      return (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <rect x="20" y="20" width="60" height="60" stroke={accent} strokeWidth="2" />
            <rect x="120" y="20" width="60" height="60" stroke={accent} strokeWidth="2" />
            <rect x="70" y="120" width="60" height="60" stroke={accent} strokeWidth="2" />
            <line x1="80" y1="50" x2="120" y2="50" stroke={accent} strokeWidth="2" />
            <line x1="100" y1="80" x2="100" y2="120" stroke={accent} strokeWidth="2" />
          </svg>
        </div>
      );
    
    case 'quote':
      return (
        <Quote 
          className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-[0.04] pointer-events-none"
          style={{ color: accent }}
        />
      );
    
    case 'process':
      return (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:flex flex-col gap-4">
          {[0, 1, 2].map(i => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: accent }} />
              {i < 2 && <div className="w-0.5 h-8 ml-1.5" style={{ backgroundColor: `${accent}40` }} />}
            </div>
          ))}
        </div>
      );
    
    default:
      return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FRAME ARCHETYPE COMPONENTS (12 Unique Composition Types)
// ═══════════════════════════════════════════════════════════════════════════════

interface FrameProps {
  title: string;
  subtitle?: string;
  bullets: string[];
  accent: string;
  index: number;
}

// FRAME 01: Hero Authority Frame
function HeroAuthorityFrame({ title, subtitle, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center py-24">
      <VisualAnchor type="geometric" accent={accent} chapterNum={0} />
      <div className={`relative max-w-4xl mx-auto px-8 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h1} text-neutral-900 mb-8`}>{title}</h2>}
        {subtitle && <p className={`${typography.statement} text-neutral-600 mb-12`}>{subtitle}</p>}
        {bullets.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {bullets.slice(0, 3).map((bullet, i) => (
              <div key={i} className="p-6 rounded-2xl border border-neutral-100 bg-white">
                <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: `${accent}15` }}>
                  <span className="text-sm font-semibold" style={{ color: accent }}>{i + 1}</span>
                </div>
                <p className="text-neutral-700">{bullet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 02: Split Analytical Frame
function SplitAnalyticalFrame({ title, subtitle, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-100 hidden lg:block" />
      <div className={`relative w-full max-w-6xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            {title && <h2 className={`${typography.h2} text-neutral-900 mb-6`}>{title}</h2>}
            {subtitle && <p className={`${typography.bodyLarge} text-neutral-600 mb-8`}>{subtitle}</p>}
            {bullets.length > 0 && (
              <ul className="space-y-4">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${accent}15` }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                    </div>
                    <span className="text-neutral-700">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="hidden lg:block">
            <div className="h-full min-h-[300px] rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white flex items-center justify-center">
              <Grid3X3 className="w-24 h-24 text-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FRAME 03: Matrix Frame
function MatrixFrame({ title, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className={`relative w-full max-w-6xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h2} text-neutral-900 mb-12 text-center`}>{title}</h2>}
        {bullets.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bullets.map((bullet, i) => (
              <div key={i} className="p-5 rounded-xl border border-neutral-100 hover:border-neutral-200 transition-colors bg-white">
                <div className="text-3xl font-bold mb-3" style={{ color: `${accent}25` }}>{String(i + 1).padStart(2, '0')}</div>
                <p className="text-neutral-700">{bullet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 04: Vertical Flow Frame
function VerticalFlowFrame({ title, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className={`relative w-full max-w-3xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h2} text-neutral-900 mb-12 text-center`}>{title}</h2>}
        {bullets.length > 0 && (
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ backgroundColor: `${accent}20` }} />
            <div className="space-y-8">
              {bullets.map((bullet, i) => (
                <div key={i} className="relative flex items-start gap-6 pl-10">
                  <div className="absolute left-0 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white" style={{ borderColor: accent }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accent }} />
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-neutral-50">
                    <p className="text-neutral-700">{bullet}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 05: Timeline Frame
function TimelineFrame({ title, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className={`relative w-full max-w-5xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h2} text-neutral-900 mb-16 text-center`}>{title}</h2>}
        {bullets.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 sm:justify-between relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 hidden sm:block" />
            {bullets.slice(0, 5).map((bullet, i) => (
              <div key={i} className="relative flex flex-col items-center text-center sm:w-1/5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 relative z-10 bg-white border-2" style={{ borderColor: accent }}>
                  <span className="text-sm font-semibold" style={{ color: accent }}>{i + 1}</span>
                </div>
                <p className="text-neutral-700 text-sm max-w-[120px]">{bullet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 06: Data Dashboard Frame
function DataDashboardFrame({ title, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(${accent}30 1px, transparent 1px), linear-gradient(90deg, ${accent}30 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />
      <div className={`relative w-full max-w-6xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h2} text-neutral-900 mb-10`}>{title}</h2>}
        {bullets.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bullets.slice(0, 8).map((bullet, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-neutral-100">
                <BarChart3 className="w-5 h-5 mb-3" style={{ color: accent }} />
                <p className="text-sm text-neutral-700">{bullet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 07: Spotlight Frame
function SpotlightFrame({ title, subtitle, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center py-20">
      <div className={`relative max-w-3xl mx-auto px-8 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && (
          <div className="mb-8">
            <Lightbulb className="w-16 h-16 mx-auto mb-6" style={{ color: accent }} />
            <h2 className={`${typography.h2} text-neutral-900`}>{title}</h2>
          </div>
        )}
        {subtitle && <p className={`${typography.bodyLarge} text-neutral-600 mb-10`}>{subtitle}</p>}
        {bullets.length > 0 && (
          <div className="p-8 rounded-2xl border-2" style={{ borderColor: `${accent}30`, backgroundColor: `${accent}05` }}>
            <ul className="space-y-4 text-left">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accent }} />
                  <span className="text-neutral-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 08: Deconstruction Frame
function DeconstructionFrame({ title, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className={`relative w-full max-w-5xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h2} text-neutral-900 mb-10`}>{title}</h2>}
        {bullets.length > 0 && (
          <div className="space-y-4">
            {bullets.map((bullet, i) => (
              <div key={i} className="flex items-stretch">
                <div className="w-16 sm:w-24 flex-shrink-0 flex items-center justify-center rounded-l-xl" style={{ backgroundColor: `${accent}${10 + i * 5}` }}>
                  <span className="text-white font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex-1 p-4 rounded-r-xl border border-neutral-100 bg-white">
                  <p className="text-neutral-700">{bullet}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 09: Comparative Split Frame
function ComparativeSplitFrame({ title, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  const midPoint = Math.ceil(bullets.length / 2);
  const leftBullets = bullets.slice(0, midPoint);
  const rightBullets = bullets.slice(midPoint);
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200" />
      <div className={`relative w-full max-w-6xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h2} text-neutral-900 mb-12 text-center`}>{title}</h2>}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-4">
            {leftBullets.map((bullet, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-neutral-100">
                <div className="text-xs font-medium mb-2" style={{ color: accent }}>A</div>
                <p className="text-neutral-700">{bullet}</p>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {rightBullets.map((bullet, i) => (
              <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                <div className="text-xs font-medium mb-2 text-neutral-400">B</div>
                <p className="text-neutral-700">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FRAME 10: Blueprint Frame
function BlueprintFrame({ title, subtitle, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `
          linear-gradient(${accent}40 1px, transparent 1px),
          linear-gradient(90deg, ${accent}40 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }} />
      <div className={`relative w-full max-w-5xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && (
          <div className="border-l-4 pl-6 mb-10" style={{ borderColor: accent }}>
            <h2 className={`${typography.h2} text-neutral-900`}>{title}</h2>
            {subtitle && <p className={`${typography.body} text-neutral-600 mt-2`}>{subtitle}</p>}
          </div>
        )}
        {bullets.length > 0 && (
          <div className="p-6 sm:p-8 rounded-xl border-2 border-dashed" style={{ borderColor: `${accent}30` }}>
            <ul className="space-y-4">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0 border" style={{ borderColor: accent, color: accent }}>
                    <span className="text-sm font-medium">{i + 1}</span>
                  </div>
                  <span className="text-neutral-700 pt-1">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 11: Emphasis Panel Frame
function EmphasisPanelFrame({ title, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  const primaryBullet = bullets[0];
  const secondaryBullets = bullets.slice(1);
  
  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20">
      <div className={`relative w-full max-w-5xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h2} text-neutral-900 mb-10`}>{title}</h2>}
        {primaryBullet && (
          <div className="p-8 sm:p-12 rounded-2xl mb-8" style={{ backgroundColor: accent, color: 'white' }}>
            <div className="text-sm uppercase tracking-widest opacity-70 mb-4">Key Principle</div>
            <p className="text-xl sm:text-2xl font-light">{primaryBullet}</p>
          </div>
        )}
        {secondaryBullets.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {secondaryBullets.map((bullet, i) => (
              <div key={i} className="p-4 rounded-xl border border-neutral-100 bg-white">
                <p className="text-neutral-700 text-sm">{bullet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// FRAME 12: Summary Authority Frame
function SummaryAuthorityFrame({ title, bullets, accent }: FrameProps) {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className="relative min-h-[60vh] flex items-center py-20">
      <VisualAnchor type="quote" accent={accent} chapterNum={0} />
      <div className={`relative max-w-3xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {title && <h2 className={`${typography.h2} text-neutral-900 mb-10 text-center`}>{title}</h2>}
        {bullets.length > 0 && (
          <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100">
            <div className="text-sm uppercase tracking-widest text-neutral-400 mb-6 text-center">Takeaways</div>
            <ul className="space-y-3">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: accent }} />
                  <span className="text-neutral-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// OPENING FRAME COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function OpeningFrame({ 
  type, 
  title, 
  accent 
}: { 
  type: OpeningType; 
  title: string;
  accent: string;
}) {
  const { ref, isInView } = useInView();
  
  switch (type) {
    case 'statement-first':
      return (
        <section ref={ref} className="relative min-h-[50vh] flex items-center justify-center py-16">
          <div className={`relative max-w-4xl mx-auto px-8 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className={`${typography.statement} text-neutral-800`}>
              {title}
            </p>
          </div>
        </section>
      );
    
    case 'question-first':
      return (
        <section ref={ref} className="relative min-h-[50vh] flex items-center justify-center py-16">
          <div className={`relative max-w-3xl mx-auto px-8 text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-4 py-1 rounded-full text-sm mb-6" style={{ backgroundColor: `${accent}10`, color: accent }}>
              Question
            </div>
            <h2 className={`${typography.h2} text-neutral-900`}>
              {title.replace('?', '?')}
            </h2>
          </div>
        </section>
      );
    
    case 'principle-block':
      return (
        <section ref={ref} className="relative min-h-[50vh] flex items-center py-16">
          <div className={`relative w-full max-w-5xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-10">
              <p className={`${typography.micro} text-neutral-400 mb-3`}>Core Principles</p>
              <h2 className={`${typography.h2} text-neutral-900`}>{title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="p-6 rounded-2xl text-center" style={{ backgroundColor: `${accent}08` }}>
                  <div className="text-4xl font-bold mb-3" style={{ color: `${accent}30` }}>{`0${i}`}</div>
                  <p className="text-sm text-neutral-500">Principle {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    
    case 'diagram-first':
      return (
        <section ref={ref} className="relative min-h-[50vh] flex items-center py-16">
          <div className={`relative w-full max-w-5xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <LayersIcon className="w-20 h-20 mb-6" style={{ color: accent }} />
                <h2 className={`${typography.h2} text-neutral-900`}>{title}</h2>
              </div>
              <div className="lg:w-1/2">
                <div className="h-48 rounded-xl border-2 border-dashed border-neutral-200 flex items-center justify-center">
                  <GitBranch className="w-16 h-16 text-neutral-200" />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    
    case 'definition-frame':
      return (
        <section ref={ref} className="relative min-h-[50vh] flex items-center justify-center py-16">
          <div className={`relative max-w-3xl mx-auto px-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="border-l-4 pl-8" style={{ borderColor: accent }}>
              <p className={`${typography.micro} mb-3`} style={{ color: accent }}>Definition</p>
              <h2 className={`${typography.h2} text-neutral-900 mb-4`}>{title}</h2>
              <p className={`${typography.body} text-neutral-600`}>
                Understanding the foundational concepts that define this chapter's focus.
              </p>
            </div>
          </div>
        </section>
      );
    
    default:
      return null;
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// FRAME RENDERER
// ═══════════════════════════════════════════════════════════════════════════════

function FrameRenderer({ 
  archetype, 
  title, 
  subtitle, 
  bullets, 
  accent,
  index 
}: { 
  archetype: FrameArchetype;
  title: string;
  subtitle?: string;
  bullets: string[];
  accent: string;
  index: number;
}) {
  const props = { title, subtitle, bullets, accent, index };
  
  switch (archetype) {
    case 'hero-authority':
      return <HeroAuthorityFrame {...props} />;
    case 'split-analytical':
      return <SplitAnalyticalFrame {...props} />;
    case 'matrix-frame':
      return <MatrixFrame {...props} />;
    case 'vertical-flow':
      return <VerticalFlowFrame {...props} />;
    case 'timeline-frame':
      return <TimelineFrame {...props} />;
    case 'data-dashboard':
      return <DataDashboardFrame {...props} />;
    case 'spotlight-frame':
      return <SpotlightFrame {...props} />;
    case 'deconstruction':
      return <DeconstructionFrame {...props} />;
    case 'comparative-split':
      return <ComparativeSplitFrame {...props} />;
    case 'blueprint-frame':
      return <BlueprintFrame {...props} />;
    case 'emphasis-panel':
      return <EmphasisPanelFrame {...props} />;
    case 'summary-authority':
      return <SummaryAuthorityFrame {...props} />;
    default:
      return <SplitAnalyticalFrame {...props} />;
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN CHAPTER PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

export default function ChapterPage() {
  const params = useParams();
  const chapterNum = parseInt(params.chapter as string);
  const [readingProgress, setReadingProgress] = useState(0);
  
  // Get presentation configuration
  const presentation = getChapterPresentation(chapterNum);
  const { volumeIdentity } = presentation;
  
  // Get chapter data
  const chapterTitle = allChapterTitles[chapterNum - 1] || `Chapter ${chapterNum}`;
  const chapterContent = getChapterContent(chapterNum);
  const images = getChapterImages(chapterTitle);
  
  // Parse content
  const sections = chapterContent?.content 
    ? parseContentToSections(chapterContent.content) 
    : [];
  
  // Navigation
  const nextChapter = chapterNum < 128 ? chapterNum + 1 : null;
  const prevChapter = chapterNum > 1 ? chapterNum - 1 : null;
  
  // Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Save reading progress
  useEffect(() => {
    try {
      localStorage.setItem('lastReadChapter', String(chapterNum));
    } catch {
      // Ignore
    }
  }, [chapterNum]);

  const accent = volumeIdentity.accent;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-neutral-100">
        <div className="h-full transition-all duration-100" style={{ width: `${readingProgress}%`, backgroundColor: accent }} />
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-neutral-400 hover:text-neutral-900 transition-colors">
                <Home className="h-4 w-4" />
              </Link>
              <span className="text-neutral-200">/</span>
              <Link href="/book" className="text-neutral-400 hover:text-neutral-900 transition-colors">Book</Link>
              <span className="text-neutral-200">/</span>
              <span className="font-medium" style={{ color: accent }}>Ch. {chapterNum}</span>
            </div>
            <div className="flex items-center gap-2">
              {prevChapter && (
                <Button variant="ghost" size="sm" asChild className="rounded-xl">
                  <Link href={`/book/chapter/${prevChapter}`}><ChevronLeft className="h-4 w-4" /></Link>
                </Button>
              )}
              {nextChapter && (
                <Button variant="outline" size="sm" asChild className="rounded-xl">
                  <Link href={`/book/chapter/${nextChapter}`}><ChevronRight className="h-4 w-4" /></Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section - Volume Identity Based */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-end">
        <div className="absolute inset-0">
          <img src={images.primary} alt={chapterTitle} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${accent}f0, ${accent}b0 40%, ${accent}40)` }} />
        </div>
        <div className="relative w-full pb-12 sm:pb-16">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge className="rounded-xl px-4 py-1.5 text-white border-0" style={{ backgroundColor: `${accent}80` }}>
                Volume {presentation.volumeNum}
              </Badge>
              <Badge className="rounded-xl px-4 py-1.5 text-white border-0" style={{ backgroundColor: `${accent}60` }}>
                Chapter {chapterNum} of 128
              </Badge>
            </div>
            <h1 className={`${typography.hero} text-white mb-4`}>{chapterTitle}</h1>
            <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl">{volumeIdentity.name}</p>
            <div className="flex items-center gap-6 text-white/60 text-sm">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>~8 min read</span></div>
              <div className="flex items-center gap-2"><BookOpen className="h-4 w-4" /><span>{sections.length} sections</span></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Opening Frame - Based on OpeningType */}
      <BackgroundLayer identity={presentation.backgroundIdentity} accent={accent} />
      <OpeningFrame type={presentation.openingType} title={chapterTitle} accent={accent} />
      
      {/* Content Frames - Using Frame Archetypes */}
      {sections.map((section, index) => {
        // Determine frame archetype for this section
        const frameIndex = index % presentation.contentFrames.length;
        const frameArchetype = presentation.contentFrames[frameIndex];
        
        return (
          <div key={index} className="relative">
            <BackgroundLayer identity={presentation.backgroundIdentity} accent={accent} />
            <VisualAnchor 
              type={index % 2 === 0 ? presentation.primaryAnchor : presentation.secondaryAnchor} 
              accent={accent} 
              chapterNum={chapterNum} 
            />
            <FrameRenderer
              archetype={frameArchetype}
              title={section.title}
              subtitle={section.subtitle}
              bullets={section.bullets}
              accent={accent}
              index={index}
            />
          </div>
        );
      })}
      
      {/* Closing Frame - Takeaways */}
      <div className="relative">
        <BackgroundLayer identity={presentation.backgroundIdentity} accent={accent} />
        <SummaryAuthorityFrame 
          title="Chapter Summary" 
          bullets={sections.slice(0, 3).map(s => s.title).filter(Boolean)} 
          accent={accent} 
          index={0}
        />
      </div>
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* RESEARCH WITH AI SECTION - After Takeaways */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto px-8">
          {/* AI Research Button */}
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-500 mb-4">Continue your learning journey</p>
            <ChapterAIResearchButton
              chapterTitle={chapterTitle}
              chapterNumber={chapterNum}
              skillArea={volumeIdentity.name.includes('Drafting') ? 'drafting' : 
                         volumeIdentity.name.includes('Layout') ? 'layout' :
                         volumeIdentity.name.includes('Environment') ? 'environment' :
                         volumeIdentity.name.includes('Detail') ? 'detailing' :
                         volumeIdentity.name.includes('Render') ? 'rendering' :
                         volumeIdentity.name.includes('Concept') ? 'concept' : 'technical'}
              firmType="Corporate"
              difficulty="intermediate"
              heroMode={true}
            />
          </div>
          
          {/* Must Ask Questions Section - Chapter Specific */}
          <div className="border-t border-neutral-200 pt-16">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-5 w-5" style={{ color: accent }} />
              <h3 className="text-lg font-semibold text-neutral-900">Must Ask Questions</h3>
            </div>
            <p className="text-sm text-neutral-600 mb-8">
              Chapter-specific questions to deepen your understanding of "{chapterTitle}". Click any question to explore with AI.
            </p>
            <div className="space-y-4">
              {(() => {
                const chapterQuestions = getChapterQuestions(chapterNum);
                const questions = chapterQuestions?.questions || [
                  `What are the key principles of ${chapterTitle.toLowerCase()}?`,
                  `How does this apply to my portfolio?`,
                  `What common mistakes should I avoid?`,
                  `How do professionals evaluate this aspect?`
                ];
                
                return questions.map((question, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition-colors cursor-pointer group"
                    onClick={() => {
                      window.open(generateQuestionUrl(question, chapterTitle, chapterNum), '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <div 
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-semibold"
                      style={{ backgroundColor: `${accent}15`, color: accent }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-neutral-700 text-sm leading-relaxed flex-1 group-hover:text-neutral-900 transition-colors">
                      {question}
                    </span>
                    <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-600 transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                ));
              })()}
            </div>
            
            {/* Research Intent Badge */}
            {(() => {
              const chapterQuestions = getChapterQuestions(chapterNum);
              if (!chapterQuestions) return null;
              return (
                <div className="mt-8 p-4 rounded-xl border border-neutral-200 bg-white">
                  <p className="text-xs uppercase tracking-wider text-neutral-400 mb-2">Research Focus</p>
                  <p className="text-sm text-neutral-600">{chapterQuestions.researchIntent}</p>
                </div>
              );
            })()}
          </div>
        </div>
      </section>
      
      {/* Navigation Footer */}
      <section className="relative py-16 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Learning Path Visualization */}
          <div className="mb-12">
            <LearningPathVisualization chapterNumber={chapterNum} accent={accent} />
          </div>
          
          {/* Self Assessment */}
          <div className="mb-12">
            <SelfAssessment chapterNumber={chapterNum} accent={accent} />
          </div>
          
          <div className="flex justify-between items-center">
            {prevChapter ? (
              <Link href={`/book/chapter/${prevChapter}`} className="group flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-neutral-200 group-hover:border-neutral-400 transition-colors flex items-center justify-center">
                  <ChevronLeft className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Previous Chapter</p>
                  <p className="font-medium text-neutral-900">Chapter {prevChapter}</p>
                </div>
              </Link>
            ) : <div />}
            {nextChapter && (
              <Link href={`/book/chapter/${nextChapter}`} className="group flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-neutral-400">Next Chapter</p>
                  <p className="font-medium text-neutral-900">Chapter {nextChapter}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-neutral-200 group-hover:border-neutral-400 transition-colors flex items-center justify-center">
                  <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
      
      {/* AI Intelligence Panel - Floating */}
      <ChapterIntelligencePanel 
        chapterNumber={chapterNum} 
        chapterTitle={chapterTitle} 
        accent={accent} 
      />
      
      {/* Reading Mode Toggle - Floating */}
      <ReadingModeToggle accent={accent} />
    </div>
  );
}
