"use client";

import React from "react";
// If you don't have lucide-react, install it: npm i lucide-react
// Or replace these with simple <span>Icon</span> placeholders
import { CheckCircle2, RotateCcw } from "lucide-react";

interface ChallengeLayoutProps {
  title: string;
  description: string;
  isSolved: boolean;
  onReset: () => void;
  preview: React.ReactNode; // The Live UI
  editor: React.ReactNode; // The Interactive Code/Controls
}

export function ChallengeLayout({
  title,
  description,
  isSolved,
  onReset,
  preview,
  editor,
}: ChallengeLayoutProps) {
  return (
    <section className="space-y-6 border-t border-border pt-5">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="bg-orange-500/10 text-orange-500 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
              Challenge
            </span>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">{description}</p>
        </div>

        {isSolved && (
          <div className="flex items-center gap-2 text-green-500 animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-bold">Solved!</span>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Left: The "Broken" Code Editor */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden flex flex-col shadow-2xl">
          <div className="bg-slate-900/50 p-3 border-b border-slate-800 flex justify-between items-center">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <div className="text-xs font-mono text-slate-500">
              component.tsx
            </div>
            <button
              onClick={onReset}
              className="text-slate-500 hover:text-white transition-colors"
              title="Reset Challenge"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-6 flex-1 font-mono text-sm text-slate-300 overflow-x-auto">
            {editor}
          </div>
        </div>

        {/* Right: The Live Preview Stage */}
        <div className="relative group">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] rounded-xl border border-border" />

          <div className="relative h-full min-h-[300px] flex items-center justify-center p-8">
            {preview}
          </div>
        </div>
      </div>
    </section>
  );
}
