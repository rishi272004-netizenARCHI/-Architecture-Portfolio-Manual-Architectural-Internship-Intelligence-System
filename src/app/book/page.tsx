"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Building2,
  Target,
  FileText,
  Layers,
  PenTool,
  Cpu,
  Mail,
  TrendingUp,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Check,
  Play,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME DATA
// ═══════════════════════════════════════════════════════════════════════════════

const volumeIcons: Record<number, typeof BookOpen> = {
  1: BookOpen,
  2: Building2,
  3: Target,
  4: FileText,
  5: PenTool,
  6: Layers,
  7: PenTool,
  8: Cpu,
  9: Mail,
  10: TrendingUp,
};

const volumeRomanNumerals: Record<number, string> = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
};

// Micro descriptions for key chapters (optional enhancement)
const chapterDescriptions: Record<number, string> = {
  1: "Understanding portfolios as professional narratives",
  7: "How reviewers actually evaluate your work",
  26: "Defining your strategic portfolio approach",
  41: "Organizing the complete document structure",
  51: "Presenting individual projects effectively",
  67: "Standards for technical precision",
  79: "Creating cohesive visual systems",
  92: "Practical software and format decisions",
  106: "Strategic application and communication",
  119: "Self-assessment and long-term growth",
};

const volumes = [
  {
    number: 1,
    title: "Foundation of Portfolio Thinking",
    description: "Establishes the conceptual framework for understanding portfolios as professional instruments.",
    accent: "#171717",
    chapters: [
      { number: 1, title: "The Portfolio as Architectural Narrative", time: "8 min" },
      { number: 2, title: "The Portfolio as Professional Instrument", time: "7 min" },
      { number: 3, title: "Difference Between Academic Submission and Professional Portfolio", time: "9 min" },
      { number: 4, title: "Portfolio as Design Argument", time: "8 min" },
      { number: 5, title: "Portfolio as Evidence of Competence", time: "7 min" },
      { number: 6, title: "Portfolio as Intellectual Position", time: "8 min" },
      { number: 7, title: "The Psychology of Reviewers", time: "10 min" },
      { number: 8, title: "Attention Span and Visual Cognition", time: "7 min" },
      { number: 9, title: "Portfolio as Time-Compressed Architecture", time: "8 min" },
      { number: 10, title: "Defining Personal Direction Before Designing", time: "7 min" },
    ],
  },
  {
    number: 2,
    title: "Understanding the Architectural Practice Landscape",
    description: "Comprehensive analysis of Indian architectural practice ecosystem.",
    accent: "#1e3a5f",
    chapters: [
      { number: 11, title: "The Indian Architectural Practice Ecosystem", time: "10 min" },
      { number: 12, title: "Classification of Firms by Scale", time: "8 min" },
      { number: 13, title: "Classification by Design Philosophy", time: "8 min" },
      { number: 14, title: "Classification by Technical Depth", time: "7 min" },
      { number: 15, title: "City-Wise Practice Culture in India", time: "9 min" },
      { number: 16, title: "Internship Typologies", time: "8 min" },
      { number: 17, title: "Corporate Practice Structure", time: "9 min" },
      { number: 18, title: "Boutique Studio Structure", time: "8 min" },
      { number: 19, title: "Sustainable Practice Framework", time: "7 min" },
      { number: 20, title: "Urban Design and Research Firms", time: "8 min" },
      { number: 21, title: "Developer-Linked Offices", time: "7 min" },
      { number: 22, title: "Interior-Focused Practices", time: "7 min" },
      { number: 23, title: "Matching Portfolio Type to Firm Type", time: "9 min" },
      { number: 24, title: "Internship Suitability Matrix", time: "8 min" },
      { number: 25, title: "Firm Study Intelligence Framework", time: "10 min" },
    ],
  },
  {
    number: 3,
    title: "Portfolio Strategy Engineering",
    description: "Strategic approaches to portfolio construction and narrative engineering.",
    accent: "#2d3436",
    chapters: [
      { number: 26, title: "Defining Portfolio Archetypes", time: "9 min" },
      { number: 27, title: "Corporate-Oriented Portfolio Structure", time: "8 min" },
      { number: 28, title: "Boutique-Oriented Portfolio Structure", time: "8 min" },
      { number: 29, title: "Sustainable Portfolio Structure", time: "7 min" },
      { number: 30, title: "Interior Portfolio Structure", time: "7 min" },
      { number: 31, title: "Urban Portfolio Structure", time: "8 min" },
      { number: 32, title: "Portfolio Objective Definition", time: "7 min" },
      { number: 33, title: "Project Selection Logic", time: "9 min" },
      { number: 34, title: "Portfolio Editing Discipline", time: "8 min" },
      { number: 35, title: "Portfolio Narrative Engineering", time: "10 min" },
      { number: 36, title: "Balancing Concept and Technical Depth", time: "8 min" },
      { number: 37, title: "Content Density Control", time: "7 min" },
      { number: 38, title: "Page Count Engineering", time: "7 min" },
      { number: 39, title: "Portfolio Sequencing Models", time: "8 min" },
      { number: 40, title: "First Project Strategy", time: "9 min" },
    ],
  },
  {
    number: 4,
    title: "Macro Structure of the Portfolio Document",
    description: "Comprehensive guide to organizing the overall portfolio document structure.",
    accent: "#1a1a2e",
    chapters: [
      { number: 41, title: "Cover Page Architecture", time: "8 min" },
      { number: 42, title: "Resume Integration Strategy", time: "7 min" },
      { number: 43, title: "Index Structuring Logic", time: "7 min" },
      { number: 44, title: "Project Order Framework", time: "8 min" },
      { number: 45, title: "Project Hierarchy Strategy", time: "9 min" },
      { number: 46, title: "Technical Section Placement", time: "7 min" },
      { number: 47, title: "Skill Section Integration", time: "7 min" },
      { number: 48, title: "Optional Work Inclusion Strategy", time: "6 min" },
      { number: 49, title: "Closing Strategy and Contact Clarity", time: "6 min" },
      { number: 50, title: "Portfolio Flow and Rhythm", time: "8 min" },
    ],
  },
  {
    number: 5,
    title: "Micro Structure of Project Presentation",
    description: "Detailed guidance on presenting individual projects within the portfolio.",
    accent: "#2c3e50",
    chapters: [
      { number: 51, title: "Project Overview Page Engineering", time: "9 min" },
      { number: 52, title: "Writing Studio Briefs Professionally", time: "8 min" },
      { number: 53, title: "Concept Diagram Construction", time: "8 min" },
      { number: 54, title: "Site Analysis Framework", time: "9 min" },
      { number: 55, title: "Climate Diagram Logic", time: "7 min" },
      { number: 56, title: "Plan Drawing Standards", time: "10 min" },
      { number: 57, title: "Section Drawing Intelligence", time: "9 min" },
      { number: 58, title: "Elevation Clarity Standards", time: "8 min" },
      { number: 59, title: "Structural Representation in Academic Work", time: "8 min" },
      { number: 60, title: "Diagrammatic Communication Systems", time: "8 min" },
      { number: 61, title: "Massing Evolution Documentation", time: "7 min" },
      { number: 62, title: "Circulation Logic Presentation", time: "7 min" },
      { number: 63, title: "Spatial Experience Rendering Strategy", time: "9 min" },
      { number: 64, title: "Interior vs Exterior Representation Balance", time: "8 min" },
      { number: 65, title: "Technical Detail Integration", time: "8 min" },
      { number: 66, title: "Working Drawing Presentation for Internships", time: "10 min" },
    ],
  },
  {
    number: 6,
    title: "Technical Benchmarking and Drawing Discipline",
    description: "Standards and benchmarks for technical drawing quality and precision.",
    accent: "#1a1a1a",
    chapters: [
      { number: 67, title: "Line Weight Hierarchy", time: "9 min" },
      { number: 68, title: "Scale Discipline", time: "8 min" },
      { number: 69, title: "Dimensioning Standards", time: "9 min" },
      { number: 70, title: "Structural Awareness for Students", time: "8 min" },
      { number: 71, title: "Slab and Beam Logic Representation", time: "8 min" },
      { number: 72, title: "Wall Section Intelligence", time: "9 min" },
      { number: 73, title: "Staircase Detail Engineering", time: "10 min" },
      { number: 74, title: "Toilet Detail Standards", time: "8 min" },
      { number: 75, title: "Annotation Systems", time: "7 min" },
      { number: 76, title: "Drawing Legibility at Print Scale", time: "8 min" },
      { number: 77, title: "Avoiding Common Technical Errors", time: "9 min" },
      { number: 78, title: "Balancing Render and Drafting Exposure", time: "7 min" },
    ],
  },
  {
    number: 7,
    title: "Graphic System and Visual Discipline",
    description: "Visual design principles for creating cohesive portfolio layouts.",
    accent: "#34495e",
    chapters: [
      { number: 79, title: "Grid Systems in Portfolio Design", time: "9 min" },
      { number: 80, title: "Margin Control and White Space", time: "8 min" },
      { number: 81, title: "Typography Hierarchy", time: "8 min" },
      { number: 82, title: "Font Selection Strategy", time: "7 min" },
      { number: 83, title: "Color Discipline", time: "8 min" },
      { number: 84, title: "Monochrome vs Accent Strategy", time: "7 min" },
      { number: 85, title: "Image Placement Systems", time: "8 min" },
      { number: 86, title: "Modular Layout Logic", time: "9 min" },
      { number: 87, title: "Page Rhythm Engineering", time: "8 min" },
      { number: 88, title: "Alignment Discipline", time: "7 min" },
      { number: 89, title: "Avoiding Graphic Noise", time: "7 min" },
      { number: 90, title: "Professional Minimalism", time: "8 min" },
      { number: 91, title: "Creating Cohesion Across Pages", time: "9 min" },
    ],
  },
  {
    number: 8,
    title: "Template Systems and Software Workflow",
    description: "Practical guidance on templates, page sizes, and software workflows.",
    accent: "#212121",
    chapters: [
      { number: 92, title: "Choosing Page Size", time: "7 min" },
      { number: 93, title: "Portrait vs Landscape Strategy", time: "7 min" },
      { number: 94, title: "A4 vs A3 Logic", time: "6 min" },
      { number: 95, title: "Template Archetypes", time: "8 min" },
      { number: 96, title: "Minimal Template System", time: "8 min" },
      { number: 97, title: "Editorial Template System", time: "8 min" },
      { number: 98, title: "Technical Template System", time: "9 min" },
      { number: 99, title: "Bold Visual Template System", time: "8 min" },
      { number: 100, title: "Adobe InDesign Workflow", time: "10 min" },
      { number: 101, title: "Illustrator Workflow", time: "9 min" },
      { number: 102, title: "Revit Sheet Export Discipline", time: "8 min" },
      { number: 103, title: "File Optimization", time: "7 min" },
      { number: 104, title: "PDF Compression Strategy", time: "7 min" },
      { number: 105, title: "Naming and Version Control", time: "6 min" },
    ],
  },
  {
    number: 9,
    title: "Application Engineering and Professional Communication",
    description: "Strategic approaches to job applications and professional communication.",
    accent: "#374151",
    chapters: [
      { number: 106, title: "Resume Architecture", time: "10 min" },
      { number: 107, title: "Resume Graphic Discipline", time: "8 min" },
      { number: 108, title: "Writing Internship Emails", time: "9 min" },
      { number: 109, title: "Subject Line Strategy", time: "6 min" },
      { number: 110, title: "Cover Letter Structure", time: "8 min" },
      { number: 111, title: "LinkedIn Optimization", time: "8 min" },
      { number: 112, title: "Application Tracking System", time: "7 min" },
      { number: 113, title: "Internship Research Database", time: "8 min" },
      { number: 114, title: "Portfolio Customization Before Sending", time: "9 min" },
      { number: 115, title: "Common Application Mistakes", time: "8 min" },
      { number: 116, title: "Interview Preparation Through Portfolio", time: "9 min" },
      { number: 117, title: "Presenting Portfolio Verbally", time: "8 min" },
      { number: 118, title: "Converting Internship into Long-Term Opportunity", time: "10 min" },
    ],
  },
  {
    number: 10,
    title: "Evaluation and Long-Term Growth",
    description: "Self-evaluation frameworks and strategies for continuous development.",
    accent: "#0f172a",
    chapters: [
      { number: 119, title: "Self-Evaluation Matrix", time: "9 min" },
      { number: 120, title: "Portfolio Scoring System", time: "8 min" },
      { number: 121, title: "Firm Compatibility Scoring Model", time: "9 min" },
      { number: 122, title: "Match Score Calculation Method", time: "8 min" },
      { number: 123, title: "High-Match vs Low-Match Strategy", time: "8 min" },
      { number: 124, title: "Annual Portfolio Updating System", time: "7 min" },
      { number: 125, title: "Documenting Internship Learning", time: "8 min" },
      { number: 126, title: "Transitioning from Internship Portfolio to Thesis Portfolio", time: "9 min" },
      { number: 127, title: "Transitioning to Professional Portfolio", time: "9 min" },
      { number: 128, title: "Building a Lifelong Portfolio System", time: "10 min" },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

function calculateTotalTime(chapters: { time: string }[]): number {
  return chapters.reduce((acc, ch) => {
    const mins = parseInt(ch.time.replace(" min", ""));
    return acc + mins;
  }, 0);
}

function formatTotalTime(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hrs}h ${mins}m` : `${hrs}h`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

function VolumeSection({ 
  volume, 
  isExpanded,
  onToggle,
  isFocused,
  onFocus,
  completedChapters 
}: { 
  volume: typeof volumes[0];
  isExpanded: boolean;
  onToggle: () => void;
  isFocused: boolean;
  onFocus: () => void;
  completedChapters: Set<number>;
}) {
  const Icon = volumeIcons[volume.number] || BookOpen;
  const totalMinutes = calculateTotalTime(volume.chapters);
  const completedCount = volume.chapters.filter(ch => completedChapters.has(ch.number)).length;
  const progress = (completedCount / volume.chapters.length) * 100;
  
  const volumeRef = useRef<HTMLDivElement>(null);
  const [focusedChapterIndex, setFocusedChapterIndex] = useState(-1);

  // Find first unread chapter
  const firstUnreadChapter = volume.chapters.find(ch => !completedChapters.has(ch.number));

  return (
    <div 
      ref={volumeRef}
      className={`border-b border-neutral-100/50 ${isFocused ? 'bg-neutral-50/30' : ''}`}
    >
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* VOLUME HEADER - Enhanced Hierarchy */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <button
        onClick={onToggle}
        onFocus={onFocus}
        className="w-full py-10 px-8 flex items-center justify-between hover:bg-neutral-50/50 transition-all duration-200 group"
      >
        <div className="flex items-center gap-8">
          {/* Volume Icon */}
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: volume.accent }}
          >
            <Icon className="h-6 w-6 text-white" />
          </div>
          
          {/* Volume Info */}
          <div className="text-left">
            {/* Volume Number - Roman */}
            <div className="flex items-center gap-4 mb-2">
              <span 
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: volume.accent }}
              >
                Volume {volumeRomanNumerals[volume.number]}
              </span>
              <span className="text-neutral-300">·</span>
              <span className="text-xs text-neutral-400 font-medium">
                {volume.chapters.length} chapters
              </span>
            </div>
            
            {/* Title - Dominant */}
            <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-1">
              {volume.title}
            </h3>
            
            {/* Subtitle - Subtle */}
            <p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
              {volume.description}
            </p>
          </div>
        </div>
        
        {/* Expand/Collapse Indicator */}
        <ChevronDown 
          className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* EXPANDED CONTENT */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {isExpanded && (
        <div className="pb-12 px-8">
          {/* Subtle Divider */}
          <div className="h-px bg-neutral-200/50 mb-10 ml-[88px]" />
          
          {/* ═══════════════════════════════════════════════════════════════════════ */}
          {/* PROGRESS & ACTION BAR */}
          {/* ═══════════════════════════════════════════════════════════════════════ */}
          <div className="ml-[88px] mb-10 flex items-center justify-between">
            <div className="flex items-center gap-8">
              {/* Progress Indicator */}
              <div className="flex items-center gap-4">
                {/* Progress Bar */}
                <div className="w-32 h-[3px] bg-neutral-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${progress}%`,
                      backgroundColor: volume.accent 
                    }}
                  />
                </div>
                {/* Progress Text */}
                <span className="text-sm text-neutral-500">
                  <span className="font-medium text-neutral-700">{completedCount}</span>
                  <span className="text-neutral-400"> of {volume.chapters.length}</span>
                  <span className="text-neutral-400"> completed</span>
                </span>
              </div>
              
              {/* Total Duration */}
              <span className="text-sm text-neutral-400">
                <span className="font-medium text-neutral-600">~{formatTotalTime(totalMinutes)}</span>
                <span className="ml-1">total</span>
              </span>
            </div>
            
            {/* Begin Volume Button */}
            {firstUnreadChapter && (
              <Link href={`/book/chapter/${firstUnreadChapter.number}`}>
                <Button 
                  size="sm" 
                  className="gap-2 rounded-lg h-9 px-4 text-sm font-medium"
                  style={{ backgroundColor: volume.accent }}
                >
                  <Play className="h-3 w-3" />
                  {completedCount === 0 ? "Begin Volume" : "Continue"}
                </Button>
              </Link>
            )}
            {!firstUnreadChapter && (
              <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                <Check className="h-4 w-4" />
                Completed
              </div>
            )}
          </div>

          {/* ═══════════════════════════════════════════════════════════════════════ */}
          {/* CHAPTER GRID - Refined */}
          {/* ═══════════════════════════════════════════════════════════════════════ */}
          <div className="ml-[88px] grid sm:grid-cols-2 gap-x-12 gap-y-1">
            {volume.chapters.map((chapter, index) => {
              const isCompleted = completedChapters.has(chapter.number);
              const hasDescription = chapterDescriptions[chapter.number];
              const isRowAlternate = index % 4 >= 2;
              
              return (
                <Link
                  key={chapter.number}
                  href={`/book/chapter/${chapter.number}`}
                  className={`
                    group relative flex items-start py-4 px-4 -mx-4 rounded-xl
                    transition-all duration-200
                    ${isRowAlternate ? 'bg-neutral-50/40' : ''}
                    hover:bg-neutral-50
                    ${focusedChapterIndex === index ? 'bg-neutral-100' : ''}
                  `}
                  onFocus={() => setFocusedChapterIndex(index)}
                  onBlur={() => setFocusedChapterIndex(-1)}
                >
                  {/* Completion Indicator */}
                  {isCompleted && (
                    <div 
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-8 rounded-full"
                      style={{ backgroundColor: volume.accent }}
                    />
                  )}
                  
                  {/* Chapter Number - Enhanced Typography */}
                  <span 
                    className={`
                      text-lg font-medium w-10 shrink-0 pt-0.5
                      transition-colors duration-200
                      ${isCompleted ? 'text-neutral-300' : 'text-neutral-400/60'}
                      group-hover:text-neutral-500
                    `}
                  >
                    {String(chapter.number).padStart(2, "0")}
                  </span>
                  
                  {/* Chapter Content */}
                  <div className="flex-1 min-w-0">
                    {/* Chapter Title */}
                    <h4 
                      className={`
                        text-sm font-medium leading-snug mb-1
                        transition-colors duration-200
                        ${isCompleted ? 'text-neutral-500' : 'text-neutral-700'}
                        group-hover:text-neutral-900
                      `}
                    >
                      {chapter.title}
                    </h4>
                    
                    {/* Micro Description - Optional */}
                    {hasDescription && (
                      <p className="text-xs text-neutral-400 leading-relaxed line-clamp-1">
                        {chapterDescriptions[chapter.number]}
                      </p>
                    )}
                  </div>
                  
                  {/* Reading Time - Right Aligned, No Icon */}
                  <span className="text-xs text-neutral-400 shrink-0 ml-4 pt-1">
                    {chapter.time} read
                  </span>
                  
                  {/* Completion Check */}
                  {isCompleted && (
                    <Check 
                      className="h-4 w-4 ml-2 shrink-0 mt-0.5"
                      style={{ color: volume.accent }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

// Helper to get initial completed chapters from localStorage
function getInitialCompletedChapters(): Set<number> {
  if (typeof window === 'undefined') return new Set();
  const saved = localStorage.getItem("completedChapters");
  if (saved) {
    try {
      return new Set(JSON.parse(saved));
    } catch (e) {
      console.error("Failed to load completed chapters:", e);
    }
  }
  return new Set();
}

export default function BookMasterIndex() {
  const [expandedVolume, setExpandedVolume] = useState<number | null>(null);
  const [focusedVolume, setFocusedVolume] = useState<number | null>(null);
  const [completedChapters, setCompletedChapters] = useState<Set<number>>(getInitialCompletedChapters);
  
  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const volumeNumbers = volumes.map(v => v.number);
    const currentIndex = focusedVolume ? volumeNumbers.indexOf(focusedVolume) : -1;
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = Math.min(currentIndex + 1, volumeNumbers.length - 1);
      setFocusedVolume(volumeNumbers[nextIndex]);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = Math.max(currentIndex - 1, 0);
      setFocusedVolume(volumeNumbers[prevIndex]);
    } else if (e.key === "Enter" && focusedVolume) {
      e.preventDefault();
      setExpandedVolume(expandedVolume === focusedVolume ? null : focusedVolume);
    }
  }, [focusedVolume, expandedVolume]);

  return (
    <div className="min-h-screen bg-white flex flex-col" onKeyDown={handleKeyDown}>
      
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* NAVIGATION - Minimal */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-100/50">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-neutral-700" />
              <span className="font-semibold text-neutral-900">Book</span>
            </div>
            <div className="w-16" />
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* HERO - Sacred Reading Intro */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <Badge variant="outline" className="mb-8 text-[10px] font-medium tracking-[0.2em] uppercase border-neutral-200 text-neutral-500">
            Master Index
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            The Architecture Internship
            <br />
            <span className="text-neutral-400">Portfolio Manual</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto mb-10">
            A structured 128-chapter system for designing, engineering, and strategically 
            positioning an architectural portfolio.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12 text-sm text-neutral-500">
            <div className="text-center">
              <div className="text-2xl font-semibold text-neutral-900 mb-1">10</div>
              <div className="text-xs uppercase tracking-wide text-neutral-400">Volumes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-neutral-900 mb-1">128</div>
              <div className="text-xs uppercase tracking-wide text-neutral-400">Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-neutral-900 mb-1">600+</div>
              <div className="text-xs uppercase tracking-wide text-neutral-400">AI Prompts</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* VOLUME INDEX */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="flex-1 border-t border-neutral-100/50">
        <div className="max-w-[1000px] mx-auto">
          {volumes.map((volume) => (
            <VolumeSection 
              key={volume.number} 
              volume={volume}
              isExpanded={expandedVolume === volume.number}
              onToggle={() => setExpandedVolume(expandedVolume === volume.number ? null : volume.number)}
              isFocused={focusedVolume === volume.number}
              onFocus={() => setFocusedVolume(volume.number)}
              completedChapters={completedChapters}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* START READING CTA */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-100/50">
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">
            Ready to Begin?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-md mx-auto">
            Start from the beginning with the foundational concepts.
          </p>
          <Button 
            size="lg" 
            className="gap-2 rounded-xl h-12 px-8 text-sm font-medium bg-neutral-900 hover:bg-neutral-800" 
            asChild
          >
            <Link href="/book/chapter/1">
              Start with Chapter 1
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      {/* FOOTER - Minimal */}
      {/* ═══════════════════════════════════════════════════════════════════════════ */}
      <footer className="py-8 border-t border-neutral-100/50 bg-white">
        <div className="max-w-[1000px] mx-auto px-8">
          <div className="flex justify-center items-center text-sm text-neutral-400">
            <span>Platform Created by Rushikesh Bhise</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
