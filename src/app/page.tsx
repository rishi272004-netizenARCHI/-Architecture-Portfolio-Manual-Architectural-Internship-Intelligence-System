"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Building2,
  BookOpen,
  Database,
  ArrowRight,
  Menu,
  X,
  Target,
  ChevronRight,
  Layers,
  Sparkles,
  Users,
  Building,
  Leaf,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { FeedbackForm } from "@/components/feedback-form";

interface FirmStats {
  totalFirms: number;
  byInternship: { potential: string; count: number }[];
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [firmStats, setFirmStats] = useState<FirmStats | null>(null);

  useEffect(() => {
    fetch('/api/firms/stats')
      .then(res => res.json())
      .then(data => setFirmStats(data))
      .catch(() => {});
  }, []);

  const totalFirms = firmStats?.totalFirms || 791;

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      
      {/* Navigation - Persistent, Minimal */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <Building2 className="h-5 w-5" />
              <span className="font-semibold hidden sm:block">Architecture Portfolio Manual</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-10">
              <Link href="/book" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Learning System
              </Link>
              <Link href="/firms" className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                Firm Database
              </Link>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-neutral-100 py-6">
            <div className="px-6 space-y-4">
              <Link href="/book" className="block text-lg">Learning System</Link>
              <Link href="/firms" className="block text-lg">Firm Database</Link>
            </div>
          </div>
        )}
      </nav>

      {/* ════════════════════════════════════════════════════════════════════════════
          HERO - PRIMARY POSITIONING BLOCK
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #171717 1px, transparent 1px),
                linear-gradient(to bottom, #171717 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neutral-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neutral-200 rounded-full blur-3xl opacity-40" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
            <Building2 className="h-4 w-4 text-neutral-600" />
            <span className="text-sm font-medium text-neutral-700">Architecture Portfolio Manual</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="block text-neutral-400">Architectural Internship</span>
            <span className="block text-neutral-900 mt-2">Intelligence System</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            A structured platform integrating portfolio development, firm intelligence, and AI-assisted research.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Button 
              size="lg" 
              className="w-full sm:w-auto gap-3 rounded-2xl h-14 sm:h-16 px-8 sm:px-10 text-base font-semibold bg-neutral-900 hover:bg-neutral-800 shadow-xl shadow-neutral-900/10 transition-all duration-300 hover:scale-[1.02]" 
              asChild
            >
              <Link href="/book">
                Enter Learning System
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto gap-3 rounded-2xl h-14 sm:h-16 px-8 sm:px-10 text-base font-semibold border-2 border-neutral-200 hover:border-neutral-300 hover:bg-white transition-all duration-300 hover:scale-[1.02]" 
              asChild
            >
              <Link href="/firms">
                <Database className="h-5 w-5" />
                Explore Firm Database
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-neutral-100">
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-neutral-400">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-neutral-900">{totalFirms}</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Firms Indexed</div>
              </div>
              <div className="w-px h-10 bg-neutral-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-neutral-900">128</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Chapters</div>
              </div>
              <div className="w-px h-10 bg-neutral-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-neutral-900">10</div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">Volumes</div>
              </div>
              <div className="w-px h-10 bg-neutral-200 hidden sm:block" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-neutral-900 flex items-center justify-center gap-1">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wide">AI Research</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-2">
            <div className="w-1.5 h-2.5 bg-neutral-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          2. SYSTEM STRUCTURE EXPLANATION BLOCK
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
            Structured, Not Inspirational.
          </h2>
          
          <div className="space-y-6 text-lg text-neutral-600">
            <p>Portfolio engineering across 10 volumes</p>
            <p>Firm expectation database across {totalFirms} practices</p>
            <p>AI-assisted analytical research layer</p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          3. CORE SYSTEM MODES (Equal Structural Weight)
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            
            {/* Learning System */}
            <div className="text-center">
              <div className="mb-6">
                <BookOpen className="h-8 w-8 mx-auto text-neutral-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Learning System</h3>
              <ul className="space-y-3 text-sm text-neutral-600 mb-8">
                <li>128 structured chapters</li>
                <li>Technical benchmarks</li>
                <li>Drawing discipline</li>
                <li>Concept-to-execution logic</li>
              </ul>
              <Link href="/book" className="text-sm font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Access Learning Framework <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Firm Intelligence Database */}
            <div className="text-center">
              <div className="mb-6">
                <Database className="h-8 w-8 mx-auto text-neutral-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Firm Intelligence Database</h3>
              <ul className="space-y-3 text-sm text-neutral-600 mb-8">
                <li>{totalFirms} indexed firms</li>
                <li>City, scale, typology filters</li>
                <li>Compatibility mapping</li>
                <li>Expectation matrices</li>
              </ul>
              <Link href="/firms" className="text-sm font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Access Firm Intelligence <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Strategic Build Layer */}
            <div className="text-center">
              <div className="mb-6">
                <Target className="h-8 w-8 mx-auto text-neutral-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategic Build Layer</h3>
              <ul className="space-y-3 text-sm text-neutral-600 mb-8">
                <li>Skill assessment</li>
                <li>AI research engine</li>
                <li>Cross-chapter integration</li>
                <li>Internship alignment system</li>
              </ul>
              <Link href="/book" className="text-sm font-medium flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Open Strategy Workspace <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          4. SYSTEM SCALE METRICS BLOCK
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl sm:text-6xl font-semibold tracking-tight mb-2">{totalFirms}</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wide">Firms Indexed</div>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-semibold tracking-tight mb-2">128</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wide">Chapters Structured</div>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-semibold tracking-tight mb-2">10</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wide">Volumes Engineered</div>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-semibold tracking-tight mb-2">AI</div>
              <div className="text-sm text-neutral-500 uppercase tracking-wide">Contextual Research</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          5. INTELLIGENCE LAYER EXPLANATION
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Integrated AI Research Infrastructure
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Chapter-level contextual prompts, firm-type adaptive research, and skill-specific deep-dive generation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[14px] border border-neutral-200">
              <Sparkles className="h-6 w-6 mb-4 text-neutral-700" />
              <h4 className="font-medium mb-2">Chapter-Level Prompts</h4>
              <p className="text-sm text-neutral-600">Context-aware research prompts generated for each of the 128 chapters.</p>
            </div>
            <div className="bg-white p-8 rounded-[14px] border border-neutral-200">
              <Building2 className="h-6 w-6 mb-4 text-neutral-700" />
              <h4 className="font-medium mb-2">Firm-Type Adaptive</h4>
              <p className="text-sm text-neutral-600">Research adapts based on corporate, boutique, or specialized firm contexts.</p>
            </div>
            <div className="bg-white p-8 rounded-[14px] border border-neutral-200">
              <Layers className="h-6 w-6 mb-4 text-neutral-700" />
              <h4 className="font-medium mb-2">Skill-Specific Deep-Dive</h4>
              <p className="text-sm text-neutral-600">Technical, conceptual, or strategic focus based on learning objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          6. USER SEGMENT CLARITY BLOCK
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center mb-12">Intended For</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-[14px]">
              <Users className="h-5 w-5 mt-0.5 text-neutral-600" />
              <div>
                <div className="font-medium mb-1">2nd–5th Year Architecture Students</div>
                <div className="text-sm text-neutral-600">Undergraduate students preparing for internship applications.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-[14px]">
              <Building className="h-5 w-5 mt-0.5 text-neutral-600" />
              <div>
                <div className="font-medium mb-1">Corporate Internship Applicants</div>
                <div className="text-sm text-neutral-600">Candidates targeting large-scale architectural practices.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-[14px]">
              <Target className="h-5 w-5 mt-0.5 text-neutral-600" />
              <div>
                <div className="font-medium mb-1">Boutique Studio Applicants</div>
                <div className="text-sm text-neutral-600">Design-focused candidates seeking specialized studios.</div>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-neutral-50 rounded-[14px]">
              <Leaf className="h-5 w-5 mt-0.5 text-neutral-600" />
              <div>
                <div className="font-medium mb-1">Sustainability-Oriented Candidates</div>
                <div className="text-sm text-neutral-600">Students focused on environmental and sustainable design practices.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          7. DIFFERENTIATION FRAME
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Traditional Portfolio Advice */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-neutral-400">Traditional Portfolio Advice</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-500">
                  <span className="text-neutral-300 mt-1">—</span>
                  <span>Templates</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-500">
                  <span className="text-neutral-300 mt-1">—</span>
                  <span>Aesthetic emphasis</span>
                </li>
                <li className="flex items-start gap-3 text-neutral-500">
                  <span className="text-neutral-300 mt-1">—</span>
                  <span>Isolated inspiration</span>
                </li>
              </ul>
            </div>

            {/* This System */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-neutral-900">This System</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-neutral-700" />
                  <span>Structural logic</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-neutral-700" />
                  <span>Technical depth</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-neutral-700" />
                  <span>Firm expectation alignment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-neutral-700" />
                  <span>Decision support integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          8. CLOSING NAVIGATION BLOCK
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-3 rounded-[14px] h-14 px-10 text-base font-medium" asChild>
              <Link href="/book">
                Begin with Learning
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-3 rounded-[14px] h-14 px-10 text-base font-medium" asChild>
              <Link href="/firms">
                Analyze Firms
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-3 rounded-[14px] h-14 px-10 text-base font-medium" asChild>
              <Link href="/book">
                Build Strategy
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 bg-neutral-100 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-neutral-500 text-center">
            This is an educational system. Firm listings are informational. Rankings are research-indexed, not endorsements. 
            Students must independently verify all information.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          ABOUT THE PLATFORM
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 border-t border-neutral-100 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Section Divider Label */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">About the Platform</p>
          </div>
          
          {/* Platform Mission */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">
              Purpose
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-neutral-600 leading-relaxed text-center mb-8">
                This manual has been developed as a structured, self-directed system to transform architectural portfolio 
                creation into a disciplined, repeatable process. It is a personal initiative intended to simplify complexity, 
                reduce confusion, and elevate the quality of internship portfolios in India through method, structure, and technical clarity.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed text-center mb-8">
                The objective has not been to provide templates, but to provide thinking frameworks.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-neutral-50 rounded-[14px]">
                  <div className="text-2xl font-semibold mb-2">Method</div>
                  <p className="text-sm text-neutral-600">Structured approach over templates</p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-[14px]">
                  <div className="text-2xl font-semibold mb-2">Clarity</div>
                  <p className="text-sm text-neutral-600">Technical precision in presentation</p>
                </div>
                <div className="p-6 bg-neutral-50 rounded-[14px]">
                  <div className="text-2xl font-semibold mb-2">Refinement</div>
                  <p className="text-sm text-neutral-600">Continuous improvement mindset</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-neutral-100 mb-20" />
          
          {/* Creator Note */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-12">
              About
            </h2>
            
            <div className="max-w-2xl mx-auto">
              {/* Bio Card */}
              <div className="bg-neutral-50 rounded-[14px] p-8 sm:p-10 mb-8">
                <div className="flex flex-col gap-6 items-center text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center">
                    <Building2 className="h-7 w-7 text-white" />
                  </div>
                  
                  {/* Bio Content */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Rushikesh Bhise</h3>
                    <p className="text-sm text-neutral-500 mb-4">Architecture Student, 4th Year</p>
                    <p className="text-neutral-600 leading-relaxed">
                      Interested in creating research-based platforms that simplify complexity and provide 
                      structured knowledge systems for architecture students preparing for internships.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Philosophy Quote */}
              <div className="border-l-4 border-neutral-900 pl-6 py-2">
                <p className="text-lg sm:text-xl text-neutral-700 italic leading-relaxed">
                  "A portfolio is not just a collection of work—it is a strategic argument for your professional potential."
                </p>
              </div>
            </div>
          </div>
          
          {/* Closing Statement */}
          <div className="mt-16 pt-12 border-t border-neutral-100">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-neutral-600 leading-relaxed mb-4">
                Architecture rewards those who refine.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                A portfolio must reflect that refinement.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Continue to update, recalibrate, and strengthen this document as your professional journey evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════════
          FEEDBACK SECTION
      ════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Help Improve This Platform
          </h2>
          <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
            Found an error? Have a suggestion? Want to contribute? Your feedback helps make this resource better for everyone.
          </p>
          
          <FeedbackForm 
            trigger={
              <Button size="lg" className="gap-2 rounded-[14px] h-12 px-8">
                <MessageSquare className="h-4 w-4" />
                Share Feedback
              </Button>
            }
          />
          
          <p className="text-xs text-neutral-400 mt-6">
            All feedback is reviewed and appreciated
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-100 mt-auto bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-neutral-500">Platform Created by Rushikesh Bhise</span>
            <span className="text-xs text-neutral-400">© {new Date().getFullYear()} Architecture Internship Portfolio Manual</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
