"use client";

import { useState } from "react";
import { Sparkles, ExternalLink } from "lucide-react";
import { generateResearchPrompt, ResearchContext, ResearchMode } from "@/lib/ai-research-prompts";

interface AIResearchButtonProps {
  context: ResearchContext;
  showLabel?: boolean;
  className?: string;
  heroMode?: boolean;
  mode?: ResearchMode;
}

export function AIResearchButton({
  context,
  showLabel = true,
  className = "",
  heroMode = false,
  mode = "conceptual",
}: AIResearchButtonProps) {
  const handleClick = () => {
    // Generate prompt
    const prompt = generateResearchPrompt(context, mode);
    
    // Create URL - use shorter prompt to avoid URL length limits
    const maxPromptLength = 1500;
    const truncatedPrompt = prompt.length > maxPromptLength 
      ? prompt.substring(0, maxPromptLength) + "..." 
      : prompt;
    
    const url = `https://chat.openai.com/?q=${encodeURIComponent(truncatedPrompt)}`;
    
    // Open in new tab
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (heroMode) {
    return (
      <button
        onClick={handleClick}
        type="button"
        className={`inline-flex items-center justify-center gap-2 h-11 px-6 bg-white text-neutral-900 hover:bg-neutral-100 shadow-lg rounded-lg text-sm font-medium transition-colors cursor-pointer ${className}`}
      >
        <Sparkles className="h-4 w-4" />
        {showLabel && <span>Research with AI</span>}
        <ExternalLink className="h-3 w-3" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`inline-flex items-center justify-center gap-2 h-9 px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer bg-neutral-900 text-white hover:bg-neutral-800 ${className}`}
    >
      <Sparkles className="h-4 w-4" />
      {showLabel && <span>Research with AI</span>}
      <ExternalLink className="h-3 w-3" />
    </button>
  );
}

// Chapter-specific button - Maps chapters to correct skill areas
export function ChapterAIResearchButton({
  chapterTitle,
  chapterNumber,
  skillArea,
  firmType = "Corporate",
  difficulty = "intermediate",
  heroMode = false,
}: {
  chapterTitle: string;
  chapterNumber: number;
  skillArea: string;
  firmType?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  heroMode?: boolean;
}) {
  // Map chapter numbers to skill areas based on volume
  const getSkillAreaForChapter = (chapterNum: number, fallbackSkill: string): string => {
    // Volume 6 (Chapters 67-78): Technical/Drafting
    if (chapterNum >= 67 && chapterNum <= 78) return "drafting";
    // Volume 7 (Chapters 79-91): Layout/Graphic
    if (chapterNum >= 79 && chapterNum <= 91) return "layout";
    // Volume 5 (Chapters 51-66): Technical
    if (chapterNum >= 51 && chapterNum <= 66) return "technical";
    // Default
    return fallbackSkill || "concept";
  };

  const mappedSkillArea = getSkillAreaForChapter(chapterNumber, skillArea);

  const context: ResearchContext = {
    topic: `${chapterTitle} (Chapter ${chapterNumber})`,
    skillArea: mappedSkillArea,
    firmType,
    difficulty,
    additionalContext: "B.Arch student preparing internship portfolio"
  };

  return <AIResearchButton context={context} showLabel={true} heroMode={heroMode} />;
}

// Firm-specific button
export function FirmAIResearchButton({
  firmName,
  firmType,
  scale,
  typology,
  designOrientation,
}: {
  firmName: string;
  firmType: string;
  scale: string;
  typology: string;
  designOrientation: string;
}) {
  const context: ResearchContext = {
    topic: `Portfolio for ${firmName}`,
    skillArea: typology.toLowerCase().includes("interior") ? "layout" :
               typology.toLowerCase().includes("sustainable") ? "environment" : "technical",
    firmType: firmType || "Corporate",
    difficulty: "intermediate",
    additionalContext: `Firm: ${firmName}, Scale: ${scale}, Typology: ${typology}`
  };

  return <AIResearchButton context={context} showLabel={true} />;
}

export default AIResearchButton;
