"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, BookOpen, Type, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { readingModes, readingSystem } from "@/lib/reading-system";

// ═══════════════════════════════════════════════════════════════════════════════
// READING MODE CONTEXT
// ═══════════════════════════════════════════════════════════════════════════════

type Theme = 'light' | 'dark' | 'warm';
type ReadingMode = 'normal' | 'comfortable' | 'focus';

interface ReadingContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  readingMode: ReadingMode;
  setReadingMode: (mode: ReadingMode) => void;
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
  progress: number;
  setProgress: (progress: number) => void;
}

const ReadingContext = createContext<ReadingContextType | null>(null);

export function useReadingContext() {
  const context = useContext(ReadingContext);
  if (!context) {
    return {
      theme: 'light' as Theme,
      setTheme: () => {},
      readingMode: 'normal' as ReadingMode,
      setReadingMode: () => {},
      showSettings: false,
      setShowSettings: () => {},
      progress: 0,
      setProgress: () => {},
    };
  }
  return context;
}

export function ReadingProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [readingMode, setReadingMode] = useState<ReadingMode>('normal');
  const [showSettings, setShowSettings] = useState(false);
  const [progress, setProgress] = useState(0);

  // Persist preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('reading-theme') as Theme;
    const savedMode = localStorage.getItem('reading-mode') as ReadingMode;
    if (savedTheme) setTheme(savedTheme);
    if (savedMode) setReadingMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('reading-theme', theme);
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('reading-mode', readingMode);
  }, [readingMode]);

  return (
    <ReadingContext.Provider value={{
      theme,
      setTheme,
      readingMode,
      setReadingMode,
      showSettings,
      setShowSettings,
      progress,
      setProgress,
    }}>
      {children}
    </ReadingContext.Provider>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// READING PROGRESS BAR
// ═══════════════════════════════════════════════════════════════════════════════

export function ReadingProgressBar({ 
  progress, 
  accent 
}: { 
  progress: number;
  accent: string;
}) {
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <motion.div 
        className="h-full"
        style={{ backgroundColor: accent }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// READING MODE TOGGLE
// ═══════════════════════════════════════════════════════════════════════════════

export function ReadingModeToggle({ accent }: { accent: string }) {
  const { theme, setTheme, readingMode, setReadingMode, showSettings, setShowSettings } = useReadingContext();
  
  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setShowSettings(!showSettings)}
        className="fixed left-6 bottom-6 z-40 w-11 h-11 rounded-full bg-white dark:bg-neutral-900 shadow-lg flex items-center justify-center border border-neutral-200 dark:border-neutral-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <BookOpen className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: readingSystem.animation.easing.smooth }}
              className="w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${accent}15` }}
                    >
                      <Type className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white">Reading Settings</h3>
                      <p className="text-sm text-neutral-500">Customize your experience</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <X className="w-5 h-5 text-neutral-400" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Theme Selection */}
                <div>
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3 block">
                    Appearance
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'light', label: 'Light', icon: Sun },
                      { id: 'dark', label: 'Dark', icon: Moon },
                      { id: 'warm', label: 'Warm', icon: BookOpen },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setTheme(item.id as Theme)}
                        className={`relative p-4 rounded-xl border-2 transition-all ${
                          theme === item.id
                            ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800'
                            : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
                        }`}
                      >
                        <item.icon className={`w-5 h-5 mx-auto mb-2 ${
                          theme === item.id 
                            ? 'text-neutral-900 dark:text-white' 
                            : 'text-neutral-400'
                        }`} />
                        <span className={`text-sm ${
                          theme === item.id 
                            ? 'text-neutral-900 dark:text-white font-medium' 
                            : 'text-neutral-600 dark:text-neutral-400'
                        }`}>{item.label}</span>
                        {theme === item.id && (
                          <motion.div
                            layoutId="theme-check"
                            className="absolute top-2 right-2"
                          >
                            <Check className="w-4 h-4" style={{ color: accent }} />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reading Mode */}
                <div>
                  <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3 block">
                    Text Size
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'normal', label: 'Normal', desc: '16px · Optimal for most readers' },
                      { id: 'comfortable', label: 'Comfortable', desc: '18px · Larger text, easier reading' },
                      { id: 'focus', label: 'Focus', desc: '17px · Narrower width for concentration' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setReadingMode(item.id as ReadingMode)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                          readingMode === item.id
                            ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800'
                            : 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className={`font-medium ${
                              readingMode === item.id 
                                ? 'text-neutral-900 dark:text-white' 
                                : 'text-neutral-700 dark:text-neutral-300'
                            }`}>{item.label}</span>
                            <p className="text-xs text-neutral-500 mt-0.5">{item.desc}</p>
                          </div>
                          {readingMode === item.id && (
                            <Check className="w-4 h-4" style={{ color: accent }} />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-100 dark:border-neutral-800">
                <p className="text-xs text-neutral-500 text-center">
                  Settings are saved automatically
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// VOLUME TINT BACKGROUND
// ═══════════════════════════════════════════════════════════════════════════════

export function VolumeTintBackground({ 
  volumeNumber, 
  theme 
}: { 
  volumeNumber: number;
  theme: Theme;
}) {
  const volumeTints: Record<number, { color: string; opacity: number }> = {
    1: { color: '#6366F1', opacity: 0.025 },
    2: { color: '#10B981', opacity: 0.025 },
    3: { color: '#F59E0B', opacity: 0.025 },
    4: { color: '#EF4444', opacity: 0.025 },
    5: { color: '#8B5CF6', opacity: 0.025 },
    6: { color: '#06B6D4', opacity: 0.025 },
    7: { color: '#EC4899', opacity: 0.025 },
    8: { color: '#84CC16', opacity: 0.025 },
    9: { color: '#F97316', opacity: 0.025 },
    10: { color: '#64748B', opacity: 0.025 },
  };

  const tint = volumeTints[volumeNumber] || volumeTints[1];

  if (theme === 'dark') return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, ${tint.color}${Math.round(tint.opacity * 255).toString(16).padStart(2, '0')}, transparent 70%)`,
      }}
    />
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION REVEAL ANIMATION
// ═══════════════════════════════════════════════════════════════════════════════

export function SectionReveal({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: readingSystem.animation.easing.smooth 
      }}
    >
      {children}
    </motion.div>
  );
}
