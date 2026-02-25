"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  AlertTriangle,
  BookOpen,
  Layers,
  Target,
  PenTool,
  FileText,
  ArrowRight,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Types
interface ChapterImage {
  url: string;
  caption: string;
  source: string;
  sourceUrl: string;
  type: 'primary' | 'diagram' | 'example' | 'comparison' | 'mockup' | 'table';
}

interface ContentBlockProps {
  type: string;
  content: unknown;
  emphasis?: 'high' | 'medium' | 'low';
}

// Primary Image Component
export function PrimaryImageBlock({ image }: { image: ChapterImage }) {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-neutral-100">
      <img
        src={image.url}
        alt={image.caption}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
        <p className="text-white text-sm md:text-base font-medium">{image.caption}</p>
        <a
          href={image.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-white/80 text-xs hover:text-white transition-colors mt-1"
        >
          Source: {image.source}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

// Supplementary Images Grid
export function SupplementaryImagesGrid({ images }: { images: ChapterImage[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-neutral-100">
          <img
            src={image.url}
            alt={image.caption}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white text-xs">{image.caption}</p>
            </div>
          </div>
          <a
            href={image.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="h-3 w-3 text-neutral-700" />
          </a>
        </div>
      ))}
    </div>
  );
}

// Paragraph Block
export function ParagraphBlock({ content, emphasis }: ContentBlockProps) {
  const emphasisClasses = {
    high: "text-lg md:text-xl font-medium leading-relaxed text-neutral-800 border-l-4 border-neutral-900 pl-6 py-2",
    medium: "text-base md:text-lg leading-relaxed text-neutral-700",
    low: "text-sm md:text-base leading-relaxed text-neutral-600"
  };
  
  return (
    <p className={emphasisClasses[emphasis || 'medium']}>
      {content as string}
    </p>
  );
}

// Heading Block
export function HeadingBlock({ content }: ContentBlockProps) {
  return (
    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mt-10 mb-4 flex items-center gap-3">
      <span className="w-1 h-6 bg-neutral-900 rounded-full" />
      {content as string}
    </h3>
  );
}

// List Block
export function ListBlock({ content }: ContentBlockProps) {
  const items = content as string[];
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-neutral-700">
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Checklist Block
export function ChecklistBlock({ content }: ContentBlockProps) {
  const items = content as { text: string; checked?: boolean; category?: string }[];
  
  return (
    <Card className="border-neutral-200">
      <CardContent className="p-6">
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${item.checked ? 'bg-neutral-900 border-neutral-900' : 'border-neutral-300'}`}>
                {item.checked && <CheckCircle2 className="h-3 w-3 text-white" />}
              </div>
              <div>
                <span className="text-neutral-700">{item.text}</span>
                {item.category && (
                  <Badge variant="outline" className="ml-2 text-xs">{item.category}</Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Table Block
export function TableBlock({ content }: ContentBlockProps) {
  const { headers, rows } = content as { headers: string[]; rows: string[][] };
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-neutral-900">
            {headers.map((header, index) => (
              <th key={index} className="text-left py-3 px-4 text-sm font-semibold text-neutral-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-3 px-4 text-sm text-neutral-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Comparison Block
export function ComparisonBlock({ content }: ContentBlockProps) {
  const { left, right } = content as {
    left: { title: string; items: string[] };
    right: { title: string; items: string[] };
  };
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="border-neutral-200 bg-neutral-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            {left.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {left.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                <span className="text-red-500">×</span>
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card className="border-neutral-200 bg-neutral-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {right.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {right.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Warning Block
export function WarningBlock({ content }: ContentBlockProps) {
  return (
    <div className="flex gap-4 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
      <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
      <p className="text-amber-800 font-medium">{content as string}</p>
    </div>
  );
}

// Summary Block
export function SummaryBlock({ content }: ContentBlockProps) {
  return (
    <Card className="border-neutral-900 bg-neutral-900 text-white">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <BookOpen className="h-6 w-6 text-neutral-400 flex-shrink-0" />
          <p className="text-neutral-100 leading-relaxed">{content as string}</p>
        </div>
      </CardContent>
    </Card>
  );
}

// Exercise Block
export function ExerciseBlock({ content }: ContentBlockProps) {
  const { title, steps, conclusion } = content as {
    title: string;
    steps: string[];
    conclusion?: string;
  };
  
  return (
    <Card className="border-neutral-900">
      <CardHeader className="bg-neutral-900 text-white">
        <CardTitle className="text-lg flex items-center gap-2">
          <PenTool className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white text-sm flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-neutral-700 pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
        {conclusion && (
          <p className="mt-4 pt-4 border-t border-neutral-200 text-neutral-600 italic">
            {conclusion}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

// Steps Block
export function StepsBlock({ content }: ContentBlockProps) {
  const steps = content as string[];
  
  return (
    <div className="relative pl-8">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-neutral-200" />
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-start gap-4">
            <span className="absolute -left-5 w-6 h-6 rounded-full bg-neutral-900 text-white text-xs flex items-center justify-center">
              {index + 1}
            </span>
            <p className="text-neutral-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Ratio Block
export function RatioBlock({ content }: ContentBlockProps) {
  const { items } = content as {
    items: { label: string; value: number; description: string }[];
  };
  
  const total = items.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-neutral-800">{item.label}</span>
            <span className="text-sm text-neutral-500">{item.value}%</span>
          </div>
          <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-neutral-900 rounded-full"
              style={{ width: `${(item.value / total) * 100}%` }}
            />
          </div>
          <p className="text-sm text-neutral-500 mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// Diagram Block (placeholder for visual diagrams)
export function DiagramBlock({ content }: ContentBlockProps) {
  const { type, elements } = content as { type: string; elements: { label: string; description: string }[] };
  
  if (type === 'triad') {
    return (
      <div className="flex justify-center py-8">
        <div className="relative w-64 h-64">
          {elements.map((el, index) => {
            const angle = (index * 120 - 90) * (Math.PI / 180);
            const x = 50 + 35 * Math.cos(angle);
            const y = 50 + 35 * Math.sin(angle);
            
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="w-20 h-20 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-medium mb-1">
                  {el.label}
                </div>
                <p className="text-xs text-neutral-500 max-w-24">{el.description}</p>
              </div>
            );
          })}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-neutral-300" />
          </div>
        </div>
      </div>
    );
  }
  
  if (type === 'flow') {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
        {elements.map((el, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-center px-6 py-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="font-medium text-neutral-800">{el.label}</div>
              <div className="text-sm text-neutral-500 mt-1">{el.description}</div>
            </div>
            {index < elements.length - 1 && (
              <ArrowRight className="h-5 w-5 text-neutral-400 hidden md:block" />
            )}
          </div>
        ))}
      </div>
    );
  }
  
  return null;
}

// Reference Block
export function ReferenceBlock({ content }: ContentBlockProps) {
  const { title, url, description } = content as { title: string; url: string; description?: string };
  
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-colors group"
    >
      <ExternalLink className="h-5 w-5 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
      <div>
        <div className="font-medium text-neutral-800 group-hover:text-neutral-900">{title}</div>
        {description && <div className="text-sm text-neutral-500">{description}</div>}
      </div>
    </a>
  );
}

// Summary Panel
export function SummaryPanel({ points }: { points: string[] }) {
  return (
    <Card className="border-neutral-900">
      <CardHeader className="bg-neutral-900 text-white">
        <CardTitle className="text-lg flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Chapter Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-neutral-700">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

// Implementation Checklist
export function ImplementationChecklist({ items }: { items: string[] }) {
  const [checkedItems, setCheckedItems] = React.useState<Set<number>>(new Set());
  
  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };
  
  return (
    <Card className="border-neutral-200">
      <CardHeader className="bg-neutral-50">
        <CardTitle className="text-lg flex items-center gap-2">
          <Target className="h-5 w-5 text-neutral-600" />
          Implementation Checklist
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => toggleItem(index)}
              className="flex items-start gap-3 w-full text-left group"
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${checkedItems.has(index) ? 'bg-green-600 border-green-600' : 'border-neutral-300 group-hover:border-neutral-400'}`}>
                {checkedItems.has(index) && <CheckCircle2 className="h-3 w-3 text-white" />}
              </div>
              <span className={`${checkedItems.has(index) ? 'text-neutral-400 line-through' : 'text-neutral-700'}`}>
                {item}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center gap-2 text-sm text-neutral-500">
          <Clock className="h-4 w-4" />
          {checkedItems.size} of {items.length} completed
        </div>
      </CardContent>
    </Card>
  );
}

// Cross References
export function CrossReferences({ references }: { references: { title: string; chapter: number }[] }) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-neutral-800 flex items-center gap-2">
        <Layers className="h-5 w-5" />
        Related Chapters
      </h4>
      <div className="grid sm:grid-cols-2 gap-3">
        {references.map((ref, index) => (
          <Link
            key={index}
            href={`/book/chapter/${ref.chapter}`}
            className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-400 transition-colors group"
          >
            <div>
              <div className="text-xs text-neutral-500">Chapter {ref.chapter}</div>
              <div className="text-sm font-medium text-neutral-800">{ref.title}</div>
            </div>
            <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}

// Import React for useState
import React from "react";
