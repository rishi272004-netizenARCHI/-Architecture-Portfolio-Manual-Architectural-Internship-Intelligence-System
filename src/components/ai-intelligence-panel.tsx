"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  FileText, 
  AlertTriangle, 
  TrendingUp, 
  Building2,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Target,
  Lightbulb,
  X,
  CheckCircle2,
  ArrowRight,
  Globe,
  Layers,
  PenTool,
  BarChart3,
  Star,
  Circle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAIStore, firmExpectations, chapterSkillMapping, type FirmType } from "@/lib/ai-store";
import { readingSystem } from "@/lib/reading-system";
import { cn } from "@/lib/utils";

// ═══════════════════════════════════════════════════════════════════════════════
// AI REFERENCE DATA
// ═══════════════════════════════════════════════════════════════════════════════

const referenceDatabase: Record<string, {
  examples: { title: string; url: string; source: string; summary: string }[];
  failures: { title: string; description: string; warning: string }[];
  tools: { title: string; url: string; type: string; description: string }[];
}> = {
  layout: {
    examples: [
      { title: "ArchDaily Portfolio Examples", url: "https://www.archdaily.com/search/projects?q=portfolio", source: "ArchDaily", summary: "Professional portfolio layouts with clear hierarchy" },
      { title: "Behance Architecture Portfolios", url: "https://www.behance.net/search/projects?field=architecture", source: "Behance", summary: "Creative layout approaches and visual storytelling" },
      { title: "Issuu Architecture Portfolio Collection", url: "https://issuu.com/search/architecture%20portfolio", source: "Issuu", summary: "Published portfolio examples with page layouts" },
    ],
    failures: [
      { title: "Overcrowded Layouts", description: "Too many elements competing for attention", warning: "White space is essential — aim for 30% breathing room" },
      { title: "Inconsistent Grid Usage", description: "Random alignment breaks visual flow", warning: "Stick to a consistent grid system throughout" },
      { title: "Poor Hierarchy", description: "All elements given equal visual weight", warning: "Establish clear primary, secondary, tertiary levels" },
    ],
    tools: [
      { title: "InDesign Templates", url: "https://www.adobe.com/products/indesign.html", type: "Software", description: "Industry-standard layout tool" },
      { title: "Canva Portfolio Templates", url: "https://www.canva.com/templates/s/portfolio", type: "Template", description: "Quick start portfolio templates" },
      { title: "Grid Calculator", url: "https://gridcalculator.dk/", type: "Tool", description: "Calculate optimal grid systems" },
    ],
  },
  drafting: {
    examples: [
      { title: "ArchDaily Working Drawings", url: "https://www.archdaily.com/search/projects?q=working%20drawings", source: "ArchDaily", summary: "Professional construction documentation" },
      { title: "Detail Magazine", url: "https://www.detail-online.com/", source: "Detail", summary: "Technical drawing excellence" },
    ],
    failures: [
      { title: "Inconsistent Line Weights", description: "Random line thickness confuses hierarchy", warning: "Use 3-4 standard weights consistently" },
      { title: "Missing Dimensions", description: "Drawings without proper dimensioning", warning: "Every drawing needs clear scale and dimensions" },
    ],
    tools: [
      { title: "AutoCAD", url: "https://www.autodesk.com/products/autocad", type: "Software", description: "Industry standard CAD" },
      { title: "Vectorworks", url: "https://www.vectorworks.net/", type: "Software", description: "BIM and drafting" },
    ],
  },
  technical: {
    examples: [
      { title: "BIM Models Library", url: "https://www.bimobject.com/", source: "BIMobject", summary: "Professional BIM implementation" },
      { title: "Construction Details", url: "https://www.detail-online.com/", source: "Detail", summary: "Technical construction documentation" },
    ],
    failures: [
      { title: "Ignoring Building Codes", description: "Designs that violate regulations", warning: "Always check local building codes" },
      { title: "Unbuildable Details", description: "Details that cannot be constructed", warning: "Consult structural and material constraints" },
    ],
    tools: [
      { title: "Revit", url: "https://www.autodesk.com/products/revit", type: "BIM", description: "Industry-leading BIM software" },
      { title: "ArchiCAD", url: "https://graphisoft.com/solutions/archicad", type: "BIM", description: "Intuitive BIM solution" },
    ],
  },
  detailing: {
    examples: [
      { title: "Detail Online", url: "https://www.detail-online.com/", source: "Detail", summary: "Excellence in architectural detailing" },
      { title: "Material Connections", url: "https://www.materialconnexion.com/", source: "MC", summary: "Material junction details" },
    ],
    failures: [
      { title: "Ignoring Material Thickness", description: "Details that don't account for real dimensions", warning: "Always include actual material thicknesses" },
      { title: "No Waterproofing", description: "Details missing weather protection", warning: "Every exterior detail needs waterproofing" },
    ],
    tools: [
      { title: "Detail Library", url: "https://www.detail-online.com/", type: "Resource", description: "Comprehensive detail database" },
    ],
  },
  rendering: {
    examples: [
      { title: "ArchDaily Visualizations", url: "https://www.archdaily.com/search/projects?q=visualization", source: "ArchDaily", summary: "Professional architectural visualization" },
      { title: "CGArchitect", url: "https://cgarchitect.com/", source: "CGArchitect", summary: "Industry visualization showcase" },
    ],
    failures: [
      { title: "Over-Rendering", description: "Excessive effects distract from design", warning: "Render to communicate, not to impress" },
      { title: "Unrealistic Lighting", description: "Lighting that couldn't exist in reality", warning: "Study real lighting conditions" },
    ],
    tools: [
      { title: "Lumion", url: "https://lumion.com/", type: "Render", description: "Quick visualization software" },
      { title: "Enscape", url: "https://enscape3d.com/", type: "Render", description: "Real-time rendering plugin" },
    ],
  },
  environment: {
    examples: [
      { title: "Sustainable Design", url: "https://www.archdaily.com/search/projects?q=sustainable", source: "ArchDaily", summary: "Environmental design examples" },
      { title: "Passive House", url: "https://passivehouse.com/", source: "PHI", summary: "Passive design excellence" },
    ],
    failures: [
      { title: "Ignoring Climate", description: "Designs unsuitable for their climate zone", warning: "Always design for local climate" },
      { title: "No Passive Strategies", description: "Buildings that rely only on mechanical systems", warning: "Prioritize passive strategies first" },
    ],
    tools: [
      { title: "Climate Consultant", url: "https://climate-consultant.software.informer.com/", type: "Analysis", description: "Climate analysis tool" },
      { title: "SunCalc", url: "https://www.suncalc.org/", type: "Tool", description: "Sun path analysis" },
    ],
  },
  concept: {
    examples: [
      { title: "Design Concepts", url: "https://www.archdaily.com/search/projects?q=design%20concept", source: "ArchDaily", summary: "Strong concept-driven design" },
      { title: "Process Documentation", url: "https://www.behance.net/", source: "Behance", summary: "Concept development processes" },
    ],
    failures: [
      { title: "No Clear Concept", description: "Designs without underlying idea", warning: "Every project needs a clear driving concept" },
      { title: "Concept-Form Mismatch", description: "Form doesn't support concept", warning: "Design decisions should reinforce concept" },
    ],
    tools: [
      { title: "Miro", url: "https://miro.com/", type: "Collaboration", description: "Concept mapping and brainstorming" },
      { title: "Notion", url: "https://www.notion.so/", type: "Documentation", description: "Project documentation and research" },
    ],
  },
};

// ═══════════════════════════════════════════════════════════════════════════════
// CHAPTER INTELLIGENCE PANEL
// ═══════════════════════════════════════════════════════════════════════════════

interface ChapterIntelligencePanelProps {
  chapterNumber: number;
  chapterTitle: string;
  accent: string;
}

export function ChapterIntelligencePanel({ 
  chapterNumber, 
  chapterTitle, 
  accent 
}: ChapterIntelligencePanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMode, setActiveMode] = useState<'examples' | 'failures' | 'tools' | 'firm'>('examples');
  
  const { 
    selectedFirmType, 
    skillProfile, 
    addVisitedChapter,
    addViewedReference 
  } = useAIStore();
  
  useEffect(() => {
    addVisitedChapter(chapterNumber);
  }, [chapterNumber, addVisitedChapter]);
  
  const skillArea = chapterSkillMapping[chapterNumber] || 'concept';
  const references = referenceDatabase[skillArea] || referenceDatabase['concept'];
  const firmRecommendations = selectedFirmType ? firmExpectations[selectedFirmType] : null;
  const skillScore = skillProfile[skillArea] || 3;
  const skillLevel = skillScore <= 2 ? 'beginner' : skillScore <= 3 ? 'intermediate' : 'advanced';

  return (
    <>
      {/* Premium Floating AI Button */}
      <motion.button
        onClick={() => setIsExpanded(true)}
        className="fixed right-6 bottom-6 z-40 w-14 h-14 rounded-full flex items-center justify-center group"
        style={{ backgroundColor: accent }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ boxShadow: `0 0 40px ${accent}40` }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
        <Sparkles className="w-6 h-6 text-white relative z-10" />
      </motion.button>

      {/* Premium Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
          >
            {/* Backdrop with blur */}
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.4, ease: readingSystem.animation.easing.smooth }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-start justify-between">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-5 h-5" style={{ color: accent }} />
                      <span className="text-sm font-medium" style={{ color: accent }}>
                        AI Chapter Intelligence
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      Chapter {chapterNumber}: {chapterTitle}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge variant="outline" className="rounded-lg">
                        <Target className="w-3 h-3 mr-1" />
                        {skillArea.charAt(0).toUpperCase() + skillArea.slice(1)}
                      </Badge>
                      <Badge variant="outline" className="rounded-lg">
                        <BarChart3 className="w-3 h-3 mr-1" />
                        {skillLevel}
                      </Badge>
                      {selectedFirmType && (
                        <Badge className="rounded-lg" style={{ backgroundColor: `${accent}15`, color: accent }}>
                          <Building2 className="w-3 h-3 mr-1" />
                          {selectedFirmType}
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <X className="w-5 h-5 text-neutral-500" />
                  </button>
                </div>
              </div>

              {/* Mode Tabs */}
              <div className="p-4 border-b border-neutral-100 dark:border-neutral-800">
                <motion.div 
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  {[
                    { id: 'examples', label: 'Examples', icon: FileText, color: '#22c55e' },
                    { id: 'failures', label: 'Failures', icon: AlertTriangle, color: '#ef4444' },
                    { id: 'tools', label: 'Improve', icon: TrendingUp, color: '#3b82f6' },
                    { id: 'firm', label: 'Firm Match', icon: Building2, color: accent },
                  ].map((tab, i) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveMode(tab.id as typeof activeMode)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                        activeMode === tab.id
                          ? "text-white shadow-lg"
                          : "bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                      )}
                      style={activeMode === tab.id ? { backgroundColor: tab.color } : {}}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Content */}
              <ScrollArea className="h-[380px]">
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Examples */}
                  {activeMode === 'examples' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="w-5 h-5 text-green-500" />
                        <h4 className="font-semibold text-neutral-900 dark:text-white">Strong Examples</h4>
                      </div>
                      {references.examples.map((example, i) => (
                        <motion.a
                          key={i}
                          href={example.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          onClick={() => addViewedReference(`example_${i}`)}
                          className="block p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 hover:shadow-sm transition-all duration-200 group"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                                  {example.title}
                                </span>
                                <ExternalLink className="w-3 h-3 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">{example.summary}</p>
                              <Badge variant="outline" className="mt-2 rounded-lg text-xs">{example.source}</Badge>
                            </div>
                            <ChevronRight className="w-5 h-5 text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 transition-colors" />
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  )}

                  {/* Failures */}
                  {activeMode === 'failures' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <h4 className="font-semibold text-neutral-900 dark:text-white">Common Mistakes to Avoid</h4>
                      </div>
                      {references.failures.map((failure, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className="p-4 rounded-xl border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-900/10"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                              <X className="w-4 h-4 text-red-500" />
                            </div>
                            <div>
                              <h5 className="font-medium text-neutral-900 dark:text-white mb-1">{failure.title}</h5>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{failure.description}</p>
                              <div className="flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30">
                                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-amber-700 dark:text-amber-400">{failure.warning}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tools */}
                  {activeMode === 'tools' && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                        <h4 className="font-semibold text-neutral-900 dark:text-white">Skill Improvement Tools</h4>
                      </div>
                      {references.tools.map((tool, i) => (
                        <motion.a
                          key={i}
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          onClick={() => addViewedReference(`tool_${i}`)}
                          className="block p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all duration-200"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <PenTool className="w-5 h-5 text-blue-500" />
                              </div>
                              <div>
                                <h5 className="font-medium text-neutral-900 dark:text-white">{tool.title}</h5>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">{tool.description}</p>
                              </div>
                            </div>
                            <Badge variant="outline" className="rounded-lg">{tool.type}</Badge>
                          </div>
                        </motion.a>
                      ))}
                      
                      {/* Skill Progress */}
                      <motion.div 
                        className="mt-6 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-medium text-neutral-900 dark:text-white">Your Current Skill Level</h5>
                          <Badge className="rounded-lg" style={{ backgroundColor: `${accent}15`, color: accent }}>
                            {skillScore}/5
                          </Badge>
                        </div>
                        <div className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full score-bar"
                            style={{ backgroundColor: accent }}
                            initial={{ width: 0 }}
                            animate={{ width: `${(skillScore / 5) * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Firm Match */}
                  {activeMode === 'firm' && (
                    <div className="space-y-4">
                      {selectedFirmType && firmRecommendations ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-5 rounded-xl border border-neutral-100 dark:border-neutral-800"
                          style={{ backgroundColor: `${accent}08` }}
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <Building2 className="w-5 h-5" style={{ color: accent }} />
                            <h4 className="font-semibold text-neutral-900 dark:text-white">
                              {selectedFirmType} Firm Expectations
                            </h4>
                          </div>
                          
                          {/* Primary Skills */}
                          <div className="mb-4">
                            <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Primary Skills to Emphasize</h5>
                            <div className="flex flex-wrap gap-2">
                              {firmRecommendations.primarySkills.map((skill) => (
                                <Badge key={skill} className="rounded-lg" style={{ backgroundColor: `${accent}15`, color: accent }}>
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          {/* Portfolio Emphasis */}
                          <div className="mb-4">
                            <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Portfolio Emphasis</h5>
                            <ul className="space-y-2">
                              {firmRecommendations.portfolioEmphasis.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                  <CheckCircle2 className="w-4 h-4" style={{ color: accent }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Avoid */}
                          <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30">
                            <h5 className="text-sm font-medium text-red-700 dark:text-red-400 mb-2">Avoid in Portfolio</h5>
                            <ul className="space-y-1">
                              {firmRecommendations.avoidInPortfolio.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                                  <X className="w-3 h-3" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="text-center py-12"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <Building2 className="w-12 h-12 text-neutral-300 dark:text-neutral-600 mx-auto mb-4" />
                          <h4 className="font-medium text-neutral-900 dark:text-white mb-2">No Firm Type Selected</h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                            Select a firm type to get personalized recommendations
                          </p>
                          <FirmTypeSelector accent={accent} />
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              </ScrollArea>

              {/* Footer */}
              <div className="p-4 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>Skill: {skillArea}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>Level: {skillLevel}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl"
                    onClick={() => setIsExpanded(false)}
                  >
                    Close Panel
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FIRM TYPE SELECTOR
// ═══════════════════════════════════════════════════════════════════════════════

export function FirmTypeSelector({ accent }: { accent: string }) {
  const { selectedFirmType, setFirmType } = useAIStore();
  const firmTypes: FirmType[] = ['Corporate', 'Boutique', 'Sustainable', 'Interior', 'Urban'];
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {firmTypes.map((type, i) => (
        <motion.button
          key={type}
          onClick={() => setFirmType(type)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
            selectedFirmType === type
              ? "text-white shadow-lg"
              : "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600"
          )}
          style={selectedFirmType === type ? { backgroundColor: accent } : {}}
        >
          {type}
        </motion.button>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SELF ASSESSMENT
// ═══════════════════════════════════════════════════════════════════════════════

interface SelfAssessmentProps {
  chapterNumber: number;
  accent: string;
}

export function SelfAssessment({ chapterNumber, accent }: SelfAssessmentProps) {
  const [clarity, setClarity] = useState(3);
  const [skill, setSkill] = useState(3);
  const [application, setApplication] = useState(3);
  const [showResult, setShowResult] = useState(false);
  
  const { updateSkill } = useAIStore();
  const skillArea = chapterSkillMapping[chapterNumber] || 'concept';
  
  const handleSave = () => {
    updateSkill(skillArea, skill);
    setShowResult(true);
  };
  
  const averageScore = ((clarity + skill + application) / 3).toFixed(1);
  
  return (
    <motion.div 
      className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <Target className="w-5 h-5" style={{ color: accent }} />
        <h4 className="font-semibold text-neutral-900 dark:text-white">Self Assessment</h4>
        <Badge variant="outline" className="rounded-lg ml-auto">Chapter {chapterNumber}</Badge>
      </div>
      
      {!showResult ? (
        <>
          {[
            { label: 'Concept Clarity', value: clarity, setter: setClarity, desc: 'Understanding of concepts' },
            { label: 'Current Skill Level', value: skill, setter: setSkill, desc: 'Beginner → Expert' },
            { label: 'Ability to Apply', value: application, setter: setApplication, desc: 'Need Help → Independent' },
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              className="mb-6 last:mb-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{item.label}</label>
                <span className="text-sm font-medium" style={{ color: accent }}>{item.value}/5</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={item.value}
                onChange={(e) => item.setter(parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full appearance-none cursor-pointer accent-current"
                style={{ accentColor: accent }}
              />
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{item.desc}</p>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={handleSave}
              className="w-full rounded-xl"
              style={{ backgroundColor: accent }}
            >
              Save Assessment
            </Button>
          </motion.div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6"
        >
          <motion.div 
            className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ backgroundColor: `${accent}15` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <CheckCircle2 className="w-8 h-8" style={{ color: accent }} />
          </motion.div>
          <h5 className="font-semibold text-neutral-900 dark:text-white mb-2">Assessment Saved!</h5>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Your average score: <span className="font-medium" style={{ color: accent }}>{averageScore}/5</span>
          </p>
          <div className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-600 dark:text-neutral-400">
            Your {skillArea} skill has been updated to {skill}/5
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 rounded-xl"
            onClick={() => setShowResult(false)}
          >
            Update Rating
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// LEARNING PATH VISUALIZATION
// ═══════════════════════════════════════════════════════════════════════════════

interface LearningPathProps {
  chapterNumber: number;
  accent: string;
}

export function LearningPathVisualization({ chapterNumber, accent }: LearningPathProps) {
  const skillArea = chapterSkillMapping[chapterNumber] || 'concept';
  const { skillProfile, chaptersVisited } = useAIStore();
  
  // Find related chapters
  const relatedChapters = Object.entries(chapterSkillMapping)
    .filter(([ch, skill]) => skill === skillArea && parseInt(ch) !== chapterNumber)
    .map(([ch]) => parseInt(ch))
    .slice(0, 5);
  
  // Determine progress
  const currentSkillScore = skillProfile[skillArea] || 3;
  const progressLevel = currentSkillScore <= 2 ? 'beginner' : currentSkillScore <= 4 ? 'intermediate' : 'advanced';
  
  return (
    <motion.div 
      className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
        <Layers className="w-5 h-5" style={{ color: accent }} />
        Learning Path
      </h4>
      
      {/* Progress Path */}
      <div className="relative mb-6">
        <div className="flex items-center justify-between">
          {['beginner', 'intermediate', 'advanced'].map((level, i) => (
            <div key={level} className="flex flex-col items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  progressLevel === level
                    ? 'text-white shadow-lg'
                    : i < ['beginner', 'intermediate', 'advanced'].indexOf(progressLevel)
                      ? 'text-white'
                      : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
                }`}
                style={
                  progressLevel === level || i < ['beginner', 'intermediate', 'advanced'].indexOf(progressLevel)
                    ? { backgroundColor: accent }
                    : {}
                }
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {i + 1}
              </motion.div>
              <span className={`text-xs mt-2 capitalize ${
                progressLevel === level 
                  ? 'font-medium text-neutral-900 dark:text-white' 
                  : 'text-neutral-500 dark:text-neutral-400'
              }`}>
                {level}
              </span>
            </div>
          ))}
        </div>
        {/* Progress Line */}
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-neutral-200 dark:bg-neutral-700 -z-10" />
        <motion.div
          className="absolute top-5 left-0 h-0.5 -z-10"
          style={{ 
            backgroundColor: accent,
            width: progressLevel === 'beginner' ? '0%' : progressLevel === 'intermediate' ? '50%' : '100%'
          }}
          initial={{ width: 0 }}
          animate={{ 
            width: progressLevel === 'beginner' ? '0%' : progressLevel === 'intermediate' ? '50%' : '100%'
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
      
      {/* Related Chapters */}
      <div>
        <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
          Related Chapters in {skillArea.charAt(0).toUpperCase() + skillArea.slice(1)}
        </h5>
        <div className="flex flex-wrap gap-2">
          {relatedChapters.map((ch, i) => (
            <motion.a
              key={ch}
              href={`/book/chapter/${ch}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                chaptersVisited.includes(ch)
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                  : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
              }`}
            >
              Ch. {ch}
              {chaptersVisited.includes(ch) && (
                <CheckCircle2 className="w-3 h-3 ml-1 inline" />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Legacy export for backward compatibility
export const CrossChapterIntelligence = LearningPathVisualization;
