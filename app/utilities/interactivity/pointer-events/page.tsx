"use client"

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";
import { PageHero } from "@/components/shared/page-hero";
import {
  POINTER_HERO,
  POINTER_UTILITIES,
  POINTER_TIPS,
} from "@/app/utilities/interactivity/pointer-events/data";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { PointerPlayground } from "@/components/pointer-events/pointer-playground";
import { PointerExamples } from "@/components/pointer-events/pointer-examples";
import { TipsSection } from "@/components/shared/tips-section";

import {
  InteractiveChallenge,
  CodeTag,
  CodeAttr,
  CodeComment,
  ClassToggle,
} from "@/components/shared/challenge/interactive-challenge";

export default function PointerEventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero {...POINTER_HERO} />

          <UtilityGrid
            title="Pointer-events utilities"
            items={POINTER_UTILITIES}
          />

          <PointerPlayground />

          <InteractiveChallenge
            title="The Unclickable Reward"
            description="A decorative 'Glass Overlay' is accidentally blocking clicks on the reward chest. Fix the CSS class on the overlay so you can claim the prize."
            initialClass="pointer-events-auto"
            correctClass="pointer-events-none"
            renderCode={(cls, toggle) => (
              <div className="space-y-1 font-mono text-sm">
                <div>
                  <CodeTag>&lt;div</CodeTag>{" "}
                  <CodeAttr name="class" value="relative group" />
                  <CodeTag>&gt;</CodeTag>
                </div>

                <div className="pl-4">
                  <CodeComment>
                    &lt;!-- The Overlay (Blocking layer) --&gt;
                  </CodeComment>
                  <div>
                    <CodeTag>&lt;div</CodeTag>
                    <span className="text-purple-400"> className</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">
                      "absolute inset-0 z-20 ...{" "}
                    </span>
                    {/* The Toggle Button */}
                    <ClassToggle value={cls} onClick={toggle} />
                    <span className="text-green-400">"</span>
                    <CodeTag> /&gt;</CodeTag>
                  </div>
                </div>

                <div className="pl-4 mt-4">
                  <CodeComment>
                    &lt;!-- The Reward Button (Z-index 10) --&gt;
                  </CodeComment>
                  <div>
                    <CodeTag>&lt;button</CodeTag>{" "}
                    <CodeAttr name="onClick" value="{claimReward}" />{" "}
                    <CodeTag>&gt;</CodeTag>
                    <span className="text-slate-300"> Claim </span>
                    <CodeTag>&lt;/button&gt;</CodeTag>
                  </div>
                </div>

                <div>
                  <CodeTag>&lt;/div&gt;</CodeTag>
                </div>
              </div>
            )}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-72 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 flex items-center justify-center overflow-hidden group">
                <div
                  className={`
                absolute inset-0
                // Use a rich gradient pattern to simulate a treasure glow
                bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-400 via-orange-600 to-slate-900
                // Smooth, slow transition for the unblurring effect
                transition-all duration-[1500ms] ease-in-out
                ${
                  isSolved
                    ? "blur-none opacity-100 scale-100"
                    : "blur-[30px] opacity-50 scale-125"
                }
              `}
                  style={{
                    // Optional sub-pattern for texture
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <button
                  onClick={onWin}
                  className={`
                relative z-10 flex items-center gap-3 px-8 py-4 cursor-pointer
                // Glassmorphism style to blend with background
                bg-slate-900/40 backdrop-blur-md border border-white/20
                text-white font-bold rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                transform transition-all duration-500
                hover:bg-slate-800/60 hover:scale-105 active:scale-95
                group-hover:border-white/40
                ${
                  isSolved
                    ? "ring-4 ring-amber-500/50 bg-amber-600/90 scale-105"
                    : ""
                }
              `}
                >
                  <span className="text-3xl filter drop-shadow-lg">
                    {isSolved ? "💎" : "🎁"}
                  </span>
                  <span className="text-lg tracking-wider filter drop-shadow-sm">
                    {isSolved ? "REWARD CLAIMED!" : "CLAIM REWARD"}
                  </span>
                </button>

                <div
                  className={`
                absolute inset-0 z-20
                transition-all duration-500
                flex items-center justify-center
                // Apply the user's selected class here
                ${cls}
                // Hide overlay completely when solved so it doesn't dull the colors
                ${
                  isSolved
                    ? "opacity-0 pointer-events-none"
                    : "bg-white/5 backdrop-blur-[1px]"
                } 
              `}
                >
                  {cls === "pointer-events-auto" && !isSolved && (
                    <div className="absolute top-4 bg-red-500/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg select-none animate-pulse">
                      ⛔ Blocking Overlay Active
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          <PointerExamples />

          <TipsSection tips={POINTER_TIPS} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
