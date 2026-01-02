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

const axisUtilities = [
  { cls: "snap-x", desc: "Enable horizontal snapping" },
  { cls: "snap-y", desc: "Enable vertical snapping" },
  { cls: "snap-both", desc: "Enable snapping on both axes" },
  { cls: "snap-none", desc: "Disable scroll snapping" },
];

const behaviorUtilities = [
  {
    cls: "snap-mandatory",
    desc: "Forces scroll to always land on a snap point (strict)",
  },
  {
    cls: "snap-proximity",
    desc: "Snaps only if scroll lands close to a snap point (loose)",
  },
];

export default function ScrollSnapTypePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Snap Type"
            description="Define the scroll snapping behavior of a container — direction (axis) and strictness (behavior)."
          />

          <MentalModelSection
            title="Understanding Snap Type"
            description="Snap Type applies to the PARENT scroll container. It turns a regular overflow container into a 'magnetic' surface that pulls the viewport to align with child elements."
            features={[
              "Applied to the scroll container (parent)",
              "Defines the axis: X (horizontal), Y (vertical), or Both",
              "Defines strictness: Mandatory (always snaps) or Proximity (snaps if close)",
              "Required for any scroll snapping to work",
              "Works in tandem with snap-align on children",
            ]}
            layerAssignment="Interactivity Layer - Activates the scroll snap physics engine"
            browserBehavior="Tells the browser to monitor scroll position and automatically animate to the nearest valid snap point when the user stops scrolling."
          />

          <ComparisonTable
            title="Mandatory vs. Proximity"
            columns={["Behavior", "User Experience", "Best Use Case", "Risk"]}
            rows={[
              {
                feature: "snap-mandatory",
                values: [
                  "Always snaps",
                  "Precise, app-like",
                  "Carousels, Full-screen slides",
                  "Can feel 'trapped' if content varies in size",
                ],
              },
              {
                feature: "snap-proximity",
                values: [
                  "Snaps if close",
                  "Natural, flexible",
                  "Long lists, loose galleries",
                  "Might land between items",
                ],
              },
            ]}
          />

          <UtilityGrid title="Snap Axis Utilities" items={axisUtilities} />
          <UtilityGrid
            title="Snap Behavior Utilities"
            items={behaviorUtilities}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Experiment with different axes and strictness levels.
            </p>

            <UtilityPlayground
              title="Snap Type Playground"
              description="Toggle axis and behavior to see how the container handles scrolling."
              options={[
                "snap-none",
                "snap-x snap-mandatory",
                "snap-x snap-proximity",
                "snap-y snap-mandatory",
              ]}
              defaultValue="snap-none"
              buildMarkup={(snapClass, customClasses = "") => {
                const isY = snapClass.includes("snap-y");
                return `<div class="${snapClass} ${
                  isY ? "h-64 flex-col" : "flex"
                } gap-6 p-6 overflow-auto border rounded-xl bg-slate-50 ${customClasses}">
  <div class="snap-center shrink-0 w-40 h-40 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">1</div>
  <div class="snap-center shrink-0 w-40 h-40 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">2</div>
  <div class="snap-center shrink-0 w-40 h-40 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">3</div>
  <div class="snap-center shrink-0 w-40 h-40 bg-pink-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">4</div>
</div>`;
              }}
              renderPreview={(snapClass, customClasses = "") => {
                const isY = snapClass.includes("snap-y");
                return (
                  <div
                    className={`${snapClass} ${
                      isY
                        ? "h-64 flex-col overflow-y-auto"
                        : "flex overflow-x-auto"
                    } gap-6 p-6 border border-border rounded-xl bg-slate-50 dark:bg-slate-900 ${customClasses}`}
                  >
                    {/* Spacer to allow scrolling past ends */}
                    <div className="shrink-0 w-20 h-20"></div>

                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="snap-center shrink-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-md"
                      >
                        {i}
                      </div>
                    ))}

                    <div className="shrink-0 w-20 h-20"></div>
                  </div>
                );
              }}
            />
          </section>
          <InteractiveChallenge
            title="The Wobbly Carousel"
            description="The client wants this product carousel to lock firmly onto each item. Currently, it scrolls freely and stops at random positions. Enable mandatory horizontal snapping to fix it."
            initialClass="snap-none"
            correctClass="snap-x snap-mandatory"
            renderCode={(cls, toggle) => {
              const isCorrect = cls.includes("snap-x");
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>&lt;!-- Carousel Container --&gt;</CodeComment>
                    <div className="flex flex-wrap gap-2 items-center">
                      <CodeTag>&lt;div</CodeTag>
                      <span className="text-purple-400">class</span>
                      <span className="text-slate-300">=</span>
                      <span className="text-green-400">
                        "flex overflow-x-auto ...
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

                  <div className="pl-4 mt-2">
                    <CodeComment>
                      &lt;!-- Items (already have snap-center) --&gt;
                    </CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="snap-center w-64..." />{" "}
                    <CodeTag>&gt;</CodeTag>
                    <span className="text-slate-500">Item 1</span>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>

                  <div className="pl-4">...</div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center overflow-hidden">
                {/* Visual Alignment Line */}
                <div
                  className={`
                      absolute top-0 bottom-0 left-1/2 w-px bg-red-500/50 z-10
                      transition-opacity duration-300
                      ${isSolved ? "opacity-0" : "opacity-100"}
                    `}
                >
                  <div className="absolute top-4 left-2 text-[10px] text-red-400 font-mono whitespace-nowrap bg-black/50 px-1 rounded">
                    Target Center
                  </div>
                </div>

                {/* Success Indicator */}
                {isSolved && (
                  <div className="absolute inset-0 border-4 border-green-500/30 rounded-xl pointer-events-none z-20 flex items-center justify-center">
                    <div className="bg-green-900/80 text-green-400 px-4 py-2 rounded-full font-bold backdrop-blur animate-in fade-in zoom-in">
                      Snap Active! 🧲
                    </div>
                  </div>
                )}

                {/* Scroll Container */}
                <div
                  className={`
                        w-full flex gap-6 px-[50%] overflow-x-auto py-12 items-center
                        /* The Utility Class */
                        ${cls} 
                      `}
                  // Check if snapping happens
                  onScroll={(e) => {
                    const el = e.currentTarget;
                    // Simple heuristic: if we are close to a snap point, we win.
                    // (256px width + 24px gap = 280px stride)
                    const stride = 280;
                    const remainder = el.scrollLeft % stride;

                    // If snapped perfectly (remainder near 0 or stride) AND mandatory is on
                    if (
                      cls.includes("snap-mandatory") &&
                      (remainder < 5 || remainder > stride - 5)
                    ) {
                      if (!isSolved) setTimeout(onWin, 500);
                    }
                  }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`
                            shrink-0 w-64 h-40 rounded-xl shadow-xl transform transition-all duration-300
                            flex flex-col items-center justify-center p-6 text-center
                            bg-slate-800 border border-slate-700
                            snap-center
                            hover:scale-105
                          `}
                    >
                      <div className="text-4xl mb-2">📦</div>
                      <h3 className="text-white font-bold">Product {i}</h3>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-4 text-slate-500 text-xs">
                  {isSolved
                    ? "Try scrolling gently. It pulls back to center."
                    : "Scroll and release. It stops anywhere."}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Horizontal carousel"
              description="Locks each slide cleanly into place. Standard for mobile carousels."
              code={`<div class="snap-x snap-mandatory overflow-x-auto flex gap-4">
  <div class="snap-center shrink-0 w-64">Slide 1</div>
  <div class="snap-center shrink-0 w-64">Slide 2</div>
</div>`}
            >
              <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 border rounded bg-slate-900">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-32 h-20 bg-slate-700 rounded flex items-center justify-center text-white"
                  >
                    Slide {i}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Vertical page sections"
              description="Creates a TikTok-style full page scroll experience."
              code={`<div class="snap-y snap-mandatory h-64 overflow-y-auto">
  <section class="snap-start h-64 bg-green-600">Section 1</section>
  <section class="snap-start h-64 bg-blue-600">Section 2</section>
</div>`}
            >
              <div className="snap-y snap-mandatory h-40 overflow-y-auto border rounded relative">
                <div className="snap-start h-40 bg-green-600 flex items-center justify-center text-white font-bold">
                  Section 1
                </div>
                <div className="snap-start h-40 bg-blue-600 flex items-center justify-center text-white font-bold">
                  Section 2
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-white/50">
                  Scroll Y
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Two-axis gallery"
              description="A 2D grid that you can pan around, locking to cells."
              code={`<div class="snap-both snap-mandatory h-64 overflow-auto grid grid-cols-2 gap-4">
  <div class="snap-center h-40 bg-indigo-500">A</div>
  <div class="snap-center h-40 bg-indigo-600">B</div>
  <div class="snap-center h-40 bg-indigo-700">C</div>
  <div class="snap-center h-40 bg-indigo-800">D</div>
</div>`}
            >
              <div className="snap-both snap-mandatory h-40 overflow-auto grid grid-cols-2 gap-4 p-4 border rounded bg-slate-50 dark:bg-slate-900">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="snap-center h-32 bg-indigo-500 rounded flex items-center justify-center text-white font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Forgetting to set overflow",
                reason:
                  "Scroll snapping ONLY works if the container has `overflow-auto` or `overflow-scroll`. It needs to be a scroll container.",
                example: `<div class="snap-x snap-mandatory"> ...
</div>`,
              },
              {
                title: "Mixing axis and alignment",
                reason:
                  "`snap-type` (x/y/mandatory) goes on the PARENT. `snap-align` (start/center) goes on the CHILDREN.",
                example: `<div class="snap-x snap-center"> ...
</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Flexbox:",
                text: "Scroll snap works perfectly with flex containers. Just ensure flex items don't shrink unexpectedly.",
              },
              {
                bold: "Touchpads:",
                text: "Proximity snapping feels great on trackpads; Mandatory snapping feels solid on touchscreens.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
