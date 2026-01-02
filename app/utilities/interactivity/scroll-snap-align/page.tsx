"use client";

import { useState } from "react";
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
    cls: "snap-start",
    desc: "Snap the item's start edge to the container's start edge",
  },
  {
    cls: "snap-center",
    desc: "Snap the item's center to the container's center",
  },
  {
    cls: "snap-end",
    desc: "Snap the item's end edge to the container's end edge",
  },
  { cls: "snap-align-none", desc: "Disable snapping for this item" },
];

export default function ScrollSnapAlignPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Snap Align"
            description="Control how individual elements align within a scroll snap container. Essential for carousels, sliders, and focused navigation."
          />

          <MentalModelSection
            title="Understanding Snap Alignment"
            description="Snap Align is applied to the CHILD elements (the items being scrolled). It defines which point on the child element should lock onto the corresponding point of the parent container."
            features={[
              "Applied to children, not the container",
              "Works only if the parent has snap-x or snap-y",
              "snap-start aligns left edge (in LTR) or top edge",
              "snap-center aligns geometrical centers",
              "Crucial for centered carousels and full-screen sections",
            ]}
            layerAssignment="Interactivity Layer - Defines magnetic lock points"
            browserBehavior="When scrolling stops, the browser calculates the distance between the child's snap point and the container's snap point, then animates to minimize that distance."
          />

          <ComparisonTable
            title="Alignment Strategies"
            columns={["Class", "Visual Effect", "Best For"]}
            rows={[
              {
                feature: "snap-start",
                values: [
                  "Item sticks to left/top edge",
                  "Lists, Timelines, Standard sliders",
                ],
              },
              {
                feature: "snap-center",
                values: [
                  "Item floats in middle",
                  "3D Carousels, Focused galleries, Spotlight items",
                ],
              },
              {
                feature: "snap-end",
                values: [
                  "Item sticks to right/bottom edge",
                  "Chat message history, Right-aligned tools",
                ],
              },
            ]}
          />

          <UtilityGrid title="Scroll Snap Align Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Scroll horizontally to feel how the items lock into place based on
              the utility class.
            </p>

            <UtilityPlayground
              title="Snap Align Playground"
              description="Switch between alignment modes to see where the item stops."
              options={utilities.map((u) => u.cls)}
              defaultValue="snap-center"
              buildMarkup={(snapClass, customClasses = "") => {
                return `<div class="snap-x snap-mandatory overflow-x-auto flex gap-6 p-6 border rounded-xl bg-slate-50 ${customClasses}">
                <div class="w-1/2 shrink-0"></div>
                
                <div class="${snapClass} shrink-0 w-40 h-40 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                1
                </div>
                <div class="${snapClass} shrink-0 w-40 h-40 bg-indigo-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                2
                </div>
                <div class="${snapClass} shrink-0 w-40 h-40 bg-purple-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                3
                </div>
                
                <div class="w-1/2 shrink-0"></div>
                </div>`;
              }}
              renderPreview={(snapClass, customClasses = "") => {
                return (
                  <div
                    className={`snap-x snap-mandatory overflow-x-auto flex gap-6 p-6 border border-border rounded-xl bg-slate-50 dark:bg-slate-900 ${customClasses}`}
                  >
                    <div className="w-[40%] shrink-0"></div>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`${snapClass} shrink-0 w-40 h-40 bg-blue-500 dark:bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                      >
                        {i}
                      </div>
                    ))}
                    <div className="w-[40%] shrink-0"></div>
                  </div>
                );
              }}
            />
          </section>
          
          <InteractiveChallenge
            title="The Off-Center Gallery"
            description="This art gallery is designed to highlight the center piece. However, the current settings snap images to the left edge, making the center focus indicator useless. Change the alignment to snap-center."
            initialClass="snap-start"
            correctClass="snap-center"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "snap-center";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>
                      &lt;!-- The Scroll Container --&gt;
                    </CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="snap-x ..." />{" "}
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>&lt;!-- Art Piece --&gt;</CodeComment>
                    <div className="flex flex-wrap gap-2 items-center">
                      <CodeTag>&lt;img</CodeTag>
                      <span className="text-purple-400">class</span>
                      <span className="text-slate-300">=</span>
                      <span className="text-green-400">"w-48 ...</span>

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
                      <CodeTag>/&gt;</CodeTag>
                    </div>
                  </div>

                  <div className="pl-4 text-slate-500">
                    &lt;!-- More images... --&gt;
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center overflow-hidden">
                {/* Center Focus Indicator */}
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-48 border-x-2 border-yellow-500/30 bg-yellow-500/5 z-10 pointer-events-none flex flex-col items-center justify-between py-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)] animate-pulse"></div>
                  <span className="text-[10px] text-yellow-500 font-mono tracking-widest uppercase bg-slate-950 px-2">
                    Focus Zone
                  </span>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)] animate-pulse"></div>
                </div>

                {/* Scroll Container */}
                <div
                  className={`
                        w-full flex gap-32 px-[50%] overflow-x-auto pb-12 pt-12 items-center
                        snap-x snap-mandatory scroll-smooth
                      `}
                  // Check scroll position to award win
                  onScroll={(e) => {
                    const el = e.currentTarget;
                    // Simple logic: if user scrolls a bit and releases, CSS snap takes over.
                    // We check if an item ends up centered.
                    // For this demo, just switching the class is enough visual confirmation,
                    // but we can trigger confetti if they align perfectly.
                    if (
                      cls === "snap-center" &&
                      Math.abs(el.scrollLeft % (192 + 128)) < 10
                    ) {
                      if (!isSolved) setTimeout(onWin, 500);
                    }
                  }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`
                            shrink-0 w-48 h-64 rounded-lg shadow-2xl transform transition-all duration-500
                            flex items-center justify-center text-4xl font-bold relative
                            bg-gradient-to-br from-indigo-500 to-purple-600 text-white
                            ${cls} /* The Utility Class */
                            ${
                              isSolved
                                ? "shadow-[0_0_30px_rgba(99,102,241,0.4)]"
                                : ""
                            }
                          `}
                    >
                      {i}
                      {/* Reflection Effect */}
                      <div className="absolute top-full left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent opacity-20 transform scale-y-[-0.5] origin-top mask-image-gradient"></div>
                    </div>
                  ))}
                </div>

                {/* Instructions */}
                <div className="absolute bottom-4 text-slate-400 text-xs">
                  {isSolved
                    ? "Perfectly Centered! ✨"
                    : "Drag to scroll • Items stick to left edge ❌"}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Full-screen Sections"
              description="Classic 'snap-to-section' landing page behavior."
              code={`<div class="snap-y snap-mandatory h-screen overflow-y-scroll">
  <section class="snap-start h-screen bg-blue-600 text-white flex items-center justify-center">
    <h1>Hero Section</h1>
  </section>
  <section class="snap-start h-screen bg-white text-black flex items-center justify-center">
    <h2>Features</h2>
  </section>
</div>`}
            >
              <div className="h-64 snap-y snap-mandatory overflow-y-scroll border rounded-xl relative">
                <div className="snap-start h-64 bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                  Hero Section
                </div>
                <div className="snap-start h-64 bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xl">
                  Features
                </div>
                <div className="snap-start h-64 bg-slate-900 text-white flex items-center justify-center font-bold text-xl">
                  Footer
                </div>
                <div className="absolute bottom-2 right-2 text-xs bg-black/50 text-white px-2 rounded pointer-events-none">
                  Scroll Y
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Date Picker Wheel"
              description="Simulating an iOS-style picker where items snap to the center line."
              code={`<div class="snap-y snap-mandatory h-32 overflow-y-scroll relative">
  <div class="sticky top-12 h-8 border-y-2 border-blue-500 pointer-events-none"></div>
  <div class="py-12 space-y-2 text-center">
    <div class="snap-center h-8">January</div>
    <div class="snap-center h-8">February</div>
    <div class="snap-center h-8">March</div>
  </div>
</div>`}
            >
              <div className="h-32 snap-y snap-mandatory overflow-y-scroll relative bg-white dark:bg-slate-900 border rounded-xl no-scrollbar">
                <div className="sticky top-[38%] h-8 border-y-2 border-blue-500/50 bg-blue-500/10 pointer-events-none z-10"></div>
                <div className="py-[38%] space-y-0 text-center font-medium text-slate-400">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                    <div
                      key={m}
                      className="snap-center h-8 flex items-center justify-center hover:text-blue-500 transition-colors cursor-pointer"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Applying snap classes to the parent",
                reason:
                  "snap-align classes (`snap-start`, `snap-center`) belong on the CHILDREN. The parent only gets `snap-x` or `snap-y`.",
                example: `<div class="snap-x snap-center"> <div>Item</div>
</div>`,
              },
              {
                title: "Forgetting forced dimensions",
                reason:
                  "Snap alignment doesn't work well if the container doesn't have a defined size or overflow property.",
                example: `<div class="snap-x"> ...
</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Center vs Start:",
                text: "Use `snap-start` for grids and lists. Use `snap-center` for single-item focus (like galleries).",
              },
              {
                bold: "Padding:",
                text: "Remember that `scroll-padding` on the parent affects where `snap-start` aligns.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
