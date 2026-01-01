"use client"

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Metadata } from "next";
import { CursorPlayground } from "@/components/cursor/cursor-playground";
import { RealWorldExamples } from "@/components/cursor/real-world-examples";
import { TipsSection } from "@/components/shared/tips-section";
import { CURSOR_TIPS } from "@/app/utilities/interactivity/cursor/data";
import { PageHero } from "@/components/shared/page-hero";
import { CURSOR_HERO } from "@/app/utilities/interactivity/cursor/data";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { CURSOR_UTILITIES } from "@/app/utilities/interactivity/cursor/data";
import {
  InteractiveChallenge,
  CodeTag,
  CodeAttr,
  CodeComment,
  ClassToggle,
} from "@/components/shared/challenge/interactive-challenge";

export default function CursorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero {...CURSOR_HERO} />

          <UtilityGrid
            title="Cursor utilities"
            items={CURSOR_UTILITIES}
            prefix="cursor-"
          />

          <CursorPlayground />

          <InteractiveChallenge
            title="The Misleading Button"
            description="This element looks like a button, but when users hover over it, they see a text cursor (I-beam). Fix the CSS class to show the correct affordance."
            initialClass="cursor-text"
            correctClass="cursor-pointer"
            // 1. Code Puzzle
            renderCode={(cls, toggle) => (
              <div className="space-y-1 font-mono text-sm">
                <div>
                  <CodeComment>
                    &lt;!-- A clickable button needs a pointer --&gt;
                  </CodeComment>
                </div>

                <div className="group relative">
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <CodeTag>&lt;button</CodeTag>
                    <span className="text-purple-400">className</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">
                      "px-6 py-3 rounded ...
                    </span>

                    {/* The Puzzle Piece */}
                    <ClassToggle value={cls} onClick={toggle} />

                    <span className="text-green-400">"</span>
                    <CodeTag>&gt;</CodeTag>
                  </div>
                </div>

                <div className="pl-4">
                  <span className="text-white">Submit Form</span>
                </div>

                <div>
                  <CodeTag>&lt;/button&gt;</CodeTag>
                </div>
              </div>
            )}
            // 2. Live Preview
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-72 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center gap-6 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-slate-950 opacity-50" />

                {/* The Misleading Button */}
                <button
                  onClick={onWin}
                  className={`
                    relative z-10 px-8 py-4 
                    bg-gradient-to-r from-blue-600 to-indigo-600 
                    text-white font-bold rounded-xl shadow-lg border border-white/10
                    transform transition-all duration-300
                    hover:brightness-110 active:scale-95
                    ${cls} /* The user's cursor class applies here */
                    ${isSolved ? "ring-4 ring-green-500/50 scale-110" : ""}
                  `}
                >
                  {isSolved ? "Correct! 🎉" : "Hover Me"}
                </button>

                {/* Helper UI */}
                <div className="relative z-10 text-sm text-slate-400 flex items-center gap-2">
                  <span>Current Cursor:</span>
                  <code
                    className={`px-2 py-1 rounded border ${
                      isSolved
                        ? "bg-green-500/10 border-green-500/30 text-green-400"
                        : "bg-slate-800 border-slate-700 text-slate-300"
                    }`}
                  >
                    {cls}
                  </code>
                </div>
              </div>
            )}
          />

          <RealWorldExamples />

          <TipsSection tips={CURSOR_TIPS} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
