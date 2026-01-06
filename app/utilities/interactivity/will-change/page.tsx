"use client";

import React, { useState } from "react";
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
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  {
    className: "will-change-auto",
    desc: "Let the browser decide optimization strategy",
  },
  {
    className: "will-change-scroll",
    desc: "Optimize for scroll position changes",
  },
  {
    className: "will-change-contents",
    desc: "Optimize for content updates",
  },
  {
    className: "will-change-transform",
    desc: "Optimize for transform animations",
  },
];

export default function WillChangePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Will Change"
            description="Hint to the browser which properties are likely to change, allowing it to optimize rendering and performance ahead of time."
          />

          <MentalModelSection
            title="Understanding Will Change"
            description="The `will-change` property acts like a 'heads-up' for the browser. It tells the browser engine to prepare expensive optimizations (like creating a new compositing layer) *before* an animation starts, preventing lag or flickering."
            features={[
              "Applied to the ELEMENT that will animate",
              "Prevents 'jank' (stuttering) during complex animations",
              "Promotes elements to their own GPU layer (compositing)",
              "Should be used sparingly to avoid memory bloat",
              "Crucial for smooth 60fps transitions on mobile",
            ]}
            layerAssignment="Performance Layer - Hints the rendering engine for future changes"
            browserBehavior="Browser pre-calculates and caches the element's texture or layout, so the actual change is cheap to render."
          />

          <ComparisonTable
            title="Strategies"
            columns={["Class", "Optimizes For", "Best Use Case"]}
            rows={[
              {
                feature: "will-change-transform",
                values: [
                  "Position / Scale / Rotation",
                  "Hover effects, Modal popups, Sliding menus",
                ],
              },
              {
                feature: "will-change-scroll",
                values: ["Scroll Position", "Parallax effects, Sticky headers"],
              },
              {
                feature: "will-change-contents",
                values: [
                  "Internal DOM changes",
                  "Dynamic lists, Typing effects",
                ],
              },
              {
                feature: "will-change-auto",
                values: [
                  "Standard behavior",
                  "Static elements (Default state)",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Will Change Utilities"
            items={utilities.map((u) => ({ cls: u.className, desc: u.desc }))}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Hover over the card to trigger the transform.
            </p>

            <UtilityPlayground
              title="Will Change Playground"
              description="Apply optimization hints to an animated element."
              options={utilities.map((u) => u.className)}
              defaultValue="will-change-auto"
              buildMarkup={(changeClass, customClasses = "") => {
                return `<div class="${changeClass} transition-transform duration-300 hover:scale-110 
  cursor-pointer rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 
  px-8 py-4 text-white font-medium shadow-lg ${customClasses}">
  Hover me
</div>`;
              }}
              renderPreview={(changeClass, customClasses = "") => {
                return (
                  <div className="w-full h-48 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                    <div
                      className={`
                      ${changeClass} transition-transform duration-300 hover:scale-110 cursor-pointer 
                      rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-4 text-white font-medium shadow-lg
                      ${customClasses}
                    `}
                    >
                      Hover me
                    </div>
                  </div>
                );
              }}
            />
          </section>

          {/* 🟢 THE INTERACTIVE CHALLENGE */}
          <InteractiveChallenge
            title="The Janky Animation"
            description="This 3D card animation works, but it's expensive for the browser to render. Without optimization, the browser 'repaints' the pixels on every frame (shown in red). Apply `will-change-transform` to promote it to a GPU layer (shown in green), making it buttery smooth."
            codeSnippet={`<div class="perspective-1000">
  <div 
    class="{input} w-48 h-64 bg-slate-800 rounded-2xl shadow-2xl p-6 
    transition-all duration-500 ease-out hover:scale-110 hover:-rotate-3"
  >
    <div class="w-12 h-12 rounded-full bg-indigo-500 mb-4"></div>
    <h3 class="text-white font-bold text-lg">Pro Plan</h3>
    <p class="text-slate-400 text-sm mt-2">Perfect for teams.</p>
    
    <button class="mt-8 w-full py-2 bg-white/10 rounded text-white text-sm">
      Upgrade
    </button>
  </div>
</div>`}
            options={[
              "will-change-auto",
              "will-change-scroll",
              "will-change-contents",
              "will-change-transform",
            ]}
            correctOption="will-change-transform"
            renderPreview={(userClass) => {
              const isOptimized = userClass === "will-change-transform";

              return (
                <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg perspective-[1000px] overflow-hidden relative">
                  {/* Legend */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 text-[10px] font-mono opacity-70">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500/20 border border-red-500 rounded"></div>
                      <span>CPU Repaint (Bad)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500/20 border border-green-500 rounded"></div>
                      <span>GPU Layer (Good)</span>
                    </div>
                  </div>

                  <div
                    className={`
                      w-48 h-64 bg-slate-800 rounded-2xl shadow-2xl p-6 relative group
                      transition-all duration-500 ease-out hover:scale-110 hover:-rotate-3 hover:shadow-indigo-500/20 cursor-pointer
                      transform-gpu border border-slate-700
                      ${userClass}
                    `}
                  >
                    {/* Visualizing Paint Cost vs Layer Promotion */}
                    {isOptimized ? (
                      // OPTIMIZED: Green tint + GPU Badge
                      <div className="absolute inset-0 rounded-2xl border-4 border-green-500/0 group-hover:border-green-500/50 transition-colors pointer-events-none z-20">
                        <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                          GPU Layer
                        </div>
                      </div>
                    ) : (
                      // UNOPTIMIZED: Red Flash (Simulating Repaint)
                      <div className="absolute inset-0 rounded-2xl bg-red-500/0 group-hover:animate-pulse group-hover:bg-red-500/10 pointer-events-none z-20">
                        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                          Repainting...
                        </div>
                      </div>
                    )}

                    <div className="w-12 h-12 rounded-full bg-indigo-500 mb-4 flex items-center justify-center text-white text-xl shadow-inner relative z-10">
                      ⚡
                    </div>
                    <h3 className="text-white font-bold text-lg relative z-10">
                      Pro Plan
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed relative z-10">
                      Unlock full power for your team.
                    </p>

                    <button className="mt-8 w-full py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-sm font-medium relative z-10">
                      Upgrade
                    </button>
                  </div>
                </div>
              );
            }}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Animated cards"
              description="Improves responsiveness for hover-driven motion on complex components."
              code={`<div class="will-change-transform transition-transform hover:-translate-y-2 rounded-xl bg-slate-800 p-5 text-white w-52">
  <div class="h-24 bg-slate-700 rounded mb-4"></div>
  <h4 class="font-bold">Product Card</h4>
</div>`}
            >
              <div className="will-change-transform transition-transform hover:-translate-y-2 duration-300 rounded-xl bg-slate-800 p-5 text-white w-48 shadow-xl cursor-pointer">
                <div className="h-24 bg-slate-700 rounded mb-4 flex items-center justify-center text-slate-500 text-2xl">
                  🖼️
                </div>
                <h4 className="font-bold text-sm">Product Card</h4>
                <div className="h-2 w-2/3 bg-slate-700 rounded mt-2"></div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Scrollable feed"
              description="Helps browsers prepare for frequent scroll position updates in complex lists."
              code={`<div class="will-change-scroll h-40 overflow-y-auto rounded-xl border bg-white p-3 space-y-3">
  <div class="rounded bg-slate-100 p-2">Feed item 1</div>
  <div class="rounded bg-slate-100 p-2">Feed item 2</div>
  </div>`}
            >
              <div className="will-change-scroll h-40 overflow-y-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-3 space-y-3 text-sm scroll-smooth">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded bg-slate-100 dark:bg-slate-800 p-2 text-slate-600 dark:text-slate-300"
                  >
                    Feed item {i + 1}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Floating action button"
              description="Keeps motion smooth for repeated entrance/exit animations."
              code={`<button class="will-change-transform transition-transform hover:scale-110 active:scale-95 rounded-full bg-indigo-600 w-12 h-12 text-white flex items-center justify-center shadow-lg">
  +
</button>`}
            >
              <div className="h-32 w-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-lg">
                <button className="will-change-transform transition-transform hover:scale-110 active:scale-95 duration-200 rounded-full bg-indigo-600 w-14 h-14 text-white flex items-center justify-center shadow-lg text-2xl pb-1">
                  +
                </button>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Applying to everything",
                reason:
                  "`will-change` forces the browser to keep textures in memory. Applying it to too many elements can cause the page to slow down or crash due to memory exhaustion.",
                example: `* { will-change: transform; } /* NEVER do this */`,
              },
              {
                title: "Leaving it on permanently",
                reason:
                  "Ideally, `will-change` should be applied via JavaScript right before an animation starts and removed after. Using it in CSS is okay for frequently interacting elements (like hover states), but use caution.",
                example: `.static-element { will-change: transform; } /* Waste of memory */`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Performance Hint:",
                text: "Remember, `will-change` is a hint, not a command. The browser may ignore it if resources are low.",
              },
              {
                bold: "Layer Promotion:",
                text: "Using `will-change: transform` or `opacity` often promotes the element to its own compositing layer, similar to the old `transform: translateZ(0)` hack.",
              },
              {
                bold: "Stacking Context:",
                text: "Be aware that using `will-change` creates a new stacking context, which might affect `z-index` behavior.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
