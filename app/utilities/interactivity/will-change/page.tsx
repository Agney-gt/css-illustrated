"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import {
  InteractiveChallenge,
  CodeTag,
  CodeAttr,
  CodeComment,
} from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  {
    cls: "will-change-auto",
    desc: "Let the browser decide optimization strategy (default)",
  },
  { cls: "will-change-scroll", desc: "Optimize for scroll position changes" },
  {
    cls: "will-change-contents",
    desc: "Optimize for frequent content updates",
  },
  {
    cls: "will-change-transform",
    desc: "Optimize for transform animations (scale, rotate, move)",
  },
];

export default function WillChangePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Will Change"
            description="Hint to the browser which properties are likely to change. This allows the browser to perform expensive optimizations (like creating a new layer) ahead of time."
          />

          <MentalModelSection
            title="Understanding Will Change"
            description="Think of `will-change` as giving the browser a 'heads up'. Normally, browsers repaint elements on the fly. When you use this utility, the browser promotes the element to its own 'Compositor Layer' (using the GPU), so changes like movement or opacity don't affect the rest of the page layout."
            features={[
              "Creates a new Stacking Context (z-index isolation)",
              "Promotes element to a GPU Texture (Hardware Acceleration)",
              "Prevents 'jank' or stuttering during complex animations",
              "Should be used sparingly to avoid consuming too much video memory",
            ]}
            layerAssignment="Performance Layer - Optimizes rendering pipeline"
            browserBehavior="Browser snapshots the element as a texture and moves it around using the GPU, skipping the expensive 'Paint' and 'Layout' phases during animation."
          />

          <ComparisonTable
            title="Optimization Methods"
            columns={["Method", "Effect", "Side Effects", "Best For"]}
            rows={[
              {
                feature: "will-change-transform",
                values: [
                  "Promotes to GPU layer",
                  "Consumes Video RAM",
                  "Hover effects, Dragging",
                ],
              },
              {
                feature: "translate-z-0 (Hack)",
                values: [
                  "Promotes to GPU layer",
                  "Obscure intent",
                  "Legacy browser support",
                ],
              },
              {
                feature: "Default (No hint)",
                values: [
                  "Repaints on change",
                  "Potential stutter",
                  "Static or slow changes",
                ],
              },
            ]}
          />

          <UtilityGrid title="Will Change Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Hover over the element to see how <code>will-change</code>{" "}
              prepares the browser for the transition.
            </p>

            <UtilityPlayground
              title="Will Change Playground"
              description="Apply the optimization hint before the animation starts (e.g., on hover parent)."
              options={utilities.map((u) => u.cls)}
              defaultValue="will-change-auto"
              buildMarkup={(willChangeClass, customClasses = "") => {
                return `<div class="group perspective-1000">
  <div class="${willChangeClass} transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 w-32 h-32 bg-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white ${customClasses}">
    Hover Me
  </div>
</div>`;
              }}
              renderPreview={(willChangeClass, customClasses = "") => {
                return (
                  <div className="h-48 flex items-center justify-center perspective-[1000px] group bg-slate-50 dark:bg-slate-900 border rounded-xl">
                    <div
                      className={`${willChangeClass} transition-transform duration-500 group-hover:rotate-y-180 group-hover:scale-110 w-32 h-32 bg-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white font-bold cursor-pointer ${customClasses}`}
                    >
                      Hover Me
                    </div>
                  </div>
                );
              }}
            />
          </section>
          <InteractiveChallenge
            title="The Jittery Card"
            description="This 3D card animation is complex. Without a hint, the browser might try to repaint it on every frame, causing stutter. Add 'will-change-transform' to tell the browser to keep this card on its own GPU layer for smooth motion."
            initialClass="will-change-auto"
            correctClass="will-change-transform"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "will-change-transform";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>&lt;!-- 3D Card Container --&gt;</CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="perspective-1000" />
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>&lt;!-- Animated Element --&gt;</CodeComment>
                    <div className="flex flex-wrap gap-2 items-center">
                      <CodeTag>&lt;div</CodeTag>
                      <span className="text-purple-400">class</span>
                      <span className="text-slate-300">=</span>
                      <span className="text-green-400">
                        "hover:rotate-12 ...
                      </span>

                      {/* Toggle Button */}
                      <button
                        onClick={toggle}
                        className={`
                            mx-1 px-1.5 rounded border text-xs font-bold transition-all font-mono align-middle
                            ${
                              isCorrect
                                ? "bg-green-500/20 text-green-400 border-green-500/50"
                                : "bg-red-500/20 text-red-400 border-red-500/50 animate-pulse"
                            }
                          `}
                      >
                        {cls}
                      </button>
                      <span className="text-green-400">"</span>
                      <CodeTag>&gt;</CodeTag>
                    </div>
                  </div>

                  <div className="pl-8 text-slate-500">
                    &lt;img src="..." /&gt;
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center overflow-hidden perspective-[1000px]">
                {/* Background Grid to show repainting visually */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,transparent)] bg-[length:20px_20px] opacity-20"></div>

                {/* The Card */}
                <div
                  className={`
                    w-48 h-64 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-2xl shadow-2xl 
                    flex flex-col items-center justify-center text-white
                    transition-transform duration-700 ease-in-out transform-style-3d
                    hover:rotate-y-12 hover:rotate-x-12 hover:scale-110 cursor-pointer
                    ${cls} /* The Utility Class */
                    ${isSolved ? "shadow-[0_0_50px_rgba(139,92,246,0.6)]" : ""}
                  `}
                  onMouseEnter={() => {
                    if (cls === "will-change-transform") onWin();
                  }}
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <div className="font-bold text-lg">Hover Me</div>

                  {/* Visualizer for 'Layer Status' */}
                  <div
                    className={`
                    absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-mono whitespace-nowrap
                    transition-all duration-500
                    ${
                      isSolved
                        ? "bg-green-500 text-green-950 opacity-100 translate-y-0"
                        : "bg-red-500 text-white opacity-0 translate-y-4"
                    }
                  `}
                  >
                    GPU LAYER ACTIVE
                  </div>
                </div>

                {/* Performance HUD Simulation */}
                <div className="absolute top-4 left-4 font-mono text-[10px] space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isSolved ? "bg-green-500" : "bg-slate-600"
                      }`}
                    ></div>
                    Composite Layer: {isSolved ? "ON" : "OFF"}
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isSolved ? "bg-blue-500" : "bg-red-500 animate-pulse"
                      }`}
                    ></div>
                    FPS Estimate: {isSolved ? "60 FPS" : "~45 FPS"}
                  </div>
                </div>

                {/* Instruction */}
                {!isSolved && (
                  <div className="absolute bottom-6 text-xs text-slate-500 animate-pulse">
                    Waiting for optimization hint...
                  </div>
                )}
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Complex Cards"
              description="Cards with shadows, gradients, and text rendering are expensive to repaint. Promotes them to a layer on hover."
              code={`<div class="group">
  <div class="will-change-transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl ...">
    </div>
</div>`}
            >
              <div className="group p-10 flex justify-center bg-slate-50 dark:bg-slate-900 rounded-xl">
                <div className="will-change-transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl w-40 h-48 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center p-4 cursor-pointer">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 text-xl">
                    ✨
                  </div>
                  <div className="font-bold text-sm">Magic Card</div>
                  <div className="text-xs text-slate-400 mt-2">
                    Hover to lift
                  </div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Sidebar Transitions"
              description="Prepare a sidebar for sliding in/out to ensure it doesn't drop frames."
              code={`<aside class="will-change-transform transition-transform -translate-x-full hover:translate-x-0 fixed left-0 top-0 h-full w-64 bg-slate-900">
  </aside>`}
            >
              <div className="h-40 relative overflow-hidden bg-slate-100 dark:bg-slate-900 border rounded-xl group">
                <div className="absolute top-0 left-0 h-full w-32 bg-slate-800 text-white p-4 transition-transform duration-500 -translate-x-[90%] group-hover:translate-x-0 will-change-transform shadow-xl z-10 flex flex-col justify-center">
                  <div className="font-bold mb-2">Menu</div>
                  <div className="h-2 bg-slate-600 rounded w-full mb-2"></div>
                  <div className="h-2 bg-slate-600 rounded w-2/3"></div>
                </div>
                <div className="p-4 pl-12 text-sm text-slate-500">
                  Hover left edge to slide menu
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Applying it to everything",
                reason:
                  "Every element with `will-change` consumes GPU memory. Using it on too many elements can actually crash the browser tab.",
                example: `* { will-change: transform; } /* ⛔️ DO NOT DO THIS */`,
              },
              {
                title: "Using it for non-animating elements",
                reason:
                  "If an element never moves or changes, `will-change` just wastes memory creating a compositing layer for nothing.",
                example: `<div class="will-change-transform">Static Text</div>`,
              },
              {
                title: "Forgetting to remove it",
                reason:
                  "Ideally, `will-change` should be applied via JavaScript right before an animation and removed after. In CSS, limit it to `:hover` or active states if possible, though Tailwind utility classes are often permanent.",
                example: `<div class="will-change-scroll">...</div> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "The Golden Rule:",
                text: "Don't optimize prematurely. Only add `will-change` if you actually see jank or stuttering in your animations.",
              },
              {
                bold: "Hardware Acceleration:",
                text: "`will-change: transform` and `opacity` are the safest properties to animate because they don't trigger layout recalculations.",
              },
              {
                bold: "Stacking Context:",
                text: "Be aware that `will-change` creates a new stacking context, which might change how `z-index` works for that element's children.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
