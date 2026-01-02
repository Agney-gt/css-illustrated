"use client";

import React from "react";
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

// 🟢 Challenge Imports
import {
  InteractiveChallenge,
  CodeTag,
  CodeAttr,
  CodeComment,
} from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  {
    cls: "scroll-pt-24",
    desc: "Top scroll padding (essential for sticky headers)",
  },
  { cls: "scroll-pb-8", desc: "Bottom scroll padding" },
  {
    cls: "scroll-pl-4",
    desc: "Left scroll padding (great for horizontal carousels)",
  },
  { cls: "scroll-p-4", desc: "Padding on all sides" },
];

export default function ScrollPaddingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Padding"
            description="Control the internal offset of a scroll container. Essential for preventing content from snapping underneath sticky elements."
          />

          <MentalModelSection
            title="Understanding Scroll Padding"
            description="Scroll Padding is applied to the PARENT (the scroll container). It tells the browser 'don't consider this area as part of the viewable scrollport'. This effectively shrinks the area used for scroll snapping and anchor targeting."
            features={[
              "Applied to the scroll container (not the children)",
              "Global fix: affects all children inside the container",
              "Crucial for CSS Scroll Snap layouts",
              "Alternative to adding scroll-margin to every single child",
            ]}
            layerAssignment="Interactivity Layer - Defines container safe zones"
            browserBehavior="The browser treats the padded area as 'off-limits' for snapping, forcing items to snap below the padding."
          />

          <ComparisonTable
            title="When to use what?"
            columns={["Scenario", "Use Scroll Margin", "Use Scroll Padding"]}
            rows={[
              {
                feature: "Sticky Header on Page",
                values: ["On specific headings", "On the <html> tag"],
              },
              {
                feature: "Carousel / Slider",
                values: [
                  "If items have varied spacing",
                  "✅ Best choice (uniform offset)",
                ],
              },
              {
                feature: "Scroll Snap",
                values: [
                  "Works, but tedious",
                  "✅ Preferred (set once on parent)",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Common Scroll Padding Utilities"
            items={utilities}
          />

          {/* 🟢 THE INTERACTIVE CHALLENGE */}
          <InteractiveChallenge
            title="The Snapping Trap"
            description="This photo feed uses CSS Scroll Snap. However, the sticky 'Date Header' is covering the top of the photos when they snap into place. Add scroll padding to the container to push the snap point down."
            initialClass="scroll-pt-0"
            correctClass="scroll-pt-16"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "scroll-pt-16";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <CodeComment>&lt;!-- Scroll Container --&gt;</CodeComment>
                  <div className="flex flex-wrap gap-2 items-center">
                    <CodeTag>&lt;div</CodeTag>
                    <span className="text-purple-400">class</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">"snap-y ...</span>

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

                  <div className="pl-4 mt-2">
                    <CodeComment>
                      &lt;!-- Sticky Header (h-16) --&gt;
                    </CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="sticky top-0 h-16" />{" "}
                    <CodeTag>&gt;</CodeTag>
                    <span className="text-slate-400">Oct 24</span>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>&lt;!-- Snap Item --&gt;</CodeComment>
                    <CodeTag>&lt;img</CodeTag>{" "}
                    <CodeAttr name="class" value="snap-start ..." />{" "}
                    <CodeTag>/&gt;</CodeTag>
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden">
                {/* The Scroll Container */}
                <div
                  id="snap-container"
                  className={`
                    w-full h-full overflow-y-auto relative scroll-smooth snap-y snap-mandatory
                    ${cls} /* The Utility Class */
                  `}
                  onScroll={(e) => {
                    // Simple check to see if user has scrolled to the second item correctly
                    const el = e.currentTarget;
                    if (cls === "scroll-pt-16" && el.scrollTop > 50) {
                      if (!isSolved) setTimeout(onWin, 500);
                    }
                  }}
                >
                  {/* Sticky Date Header */}
                  <div className="sticky top-0 z-20 h-16 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 flex items-center justify-center shadow-lg">
                    <span className="font-mono text-blue-400 text-xs uppercase tracking-widest border border-blue-900 bg-blue-950/50 px-3 py-1 rounded-full">
                      October 2025
                    </span>
                  </div>

                  {/* Snap Items */}
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`
                        h-64 w-full snap-start border-b border-slate-800 p-6 flex flex-col justify-end
                        bg-slate-900
                        relative group
                      `}
                    >
                      <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center overflow-hidden">
                        <span className="text-4xl opacity-20 font-bold">
                          IMG_00{i}
                        </span>
                        {/* Visualizer line for the top of the item */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-500/50"></div>

                        {/* Visualizer for Padding Zone */}
                        {isSolved && i === 2 && (
                          <div className="absolute top-0 left-0 right-0 h-16 bg-green-500/20 border-b border-green-500/50 flex items-center justify-center text-xs text-green-300 font-bold">
                            Scroll Padding Zone
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Instructions Overlay */}
                  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-30">
                    <span className="bg-black/50 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur border border-white/10">
                      Scroll to snap next image
                    </span>
                  </div>
                </div>

                {/* Failure Overlay */}
                {!isSolved && cls === "scroll-pt-0" && (
                  <div className="absolute top-20 right-4 pointer-events-none z-40">
                    <div className="bg-red-500/20 border border-red-500/50 text-red-200 text-xs px-3 py-2 rounded animate-pulse max-w-[150px] text-center">
                      Image top is hidden behind header!
                    </div>
                  </div>
                )}
              </div>
            )}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              See how scroll padding affects snap alignment in this horizontal
              scroller.
            </p>

            <UtilityPlayground
              title="Scroll Padding Playground"
              description="Adjust the padding to see how the items align relative to the sticky label."
              options={["scroll-pl-0", "scroll-pl-12", "scroll-pl-24"]}
              defaultValue="scroll-pl-0"
              buildMarkup={(cls, customClasses = "") => {
                return `<div class="flex overflow-x-auto snap-x ${cls} ${customClasses} h-48 border rounded-lg bg-slate-50 relative">
  <div class="sticky left-0 w-12 bg-red-500 z-10 flex items-center justify-center text-white font-bold text-xs shadow-md">
    FIXED
  </div>
  
  <div class="snap-start w-32 h-32 bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-center shrink-0 m-4">
    1
  </div>
  <div class="snap-start w-32 h-32 bg-blue-100 border-2 border-blue-300 rounded-lg flex items-center justify-center shrink-0 m-4">
    2
  </div>
</div>`;
              }}
              renderPreview={(cls, customClasses = "") => {
                return (
                  <div
                    className={`relative w-full h-48 border border-border rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-950 ${customClasses}`}
                  >
                    <div
                      className={`flex overflow-x-auto snap-x snap-mandatory h-full items-center gap-4 p-4 ${cls}`}
                    >
                      <div className="sticky left-0 w-12 h-12 bg-red-500 text-white flex items-center justify-center text-xs font-bold rounded shadow z-10 shrink-0">
                        FIXED
                      </div>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="snap-start w-32 h-32 bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700 rounded-lg flex items-center justify-center shrink-0 text-blue-800 dark:text-blue-100 font-bold"
                        >
                          Item {i}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Command Palette"
              description="Ensures the first result isn't hidden under the search bar when scrolling."
              code={`<div class="scroll-pt-12 h-64 overflow-y-auto rounded-xl border bg-white relative">
  <input class="sticky top-0 h-12 w-full border-b px-4" placeholder="Search..." />
  <ul class="p-2 space-y-1">
    <li class="p-2 hover:bg-blue-50 rounded">Result 1</li>
    </ul>
</div>`}
            >
              <div className="h-40 overflow-y-auto relative border rounded-lg bg-white dark:bg-slate-900 scroll-pt-12 shadow-sm">
                <input
                  className="sticky top-0 h-10 w-full border-b px-4 text-sm bg-white/95 dark:bg-slate-900/95 backdrop-blur z-10 outline-none placeholder:text-muted-foreground"
                  placeholder="Search..."
                  readOnly
                />
                <ul className="p-2 space-y-1 text-sm">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <li
                      key={i}
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer text-foreground"
                    >
                      Result {i}
                    </li>
                  ))}
                </ul>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Carousel Snap Spacing"
              description="Adds start padding to a carousel so the first item isn't flush against the edge."
              code={`<div class="flex overflow-x-auto snap-x scroll-pl-6 pb-4">
  <div class="snap-start w-64 shrink-0 first:ml-6">...</div>
  <div class="snap-start w-64 shrink-0">...</div>
</div>`}
            >
              <div className="flex overflow-x-auto snap-x scroll-pl-6 pb-4 gap-4 border rounded-lg p-2 bg-slate-50 dark:bg-slate-950">
                <div className="snap-start w-32 h-20 bg-purple-500 rounded-lg shrink-0 ml-6 flex items-center justify-center text-white text-xs">
                  Item 1
                </div>
                <div className="snap-start w-32 h-20 bg-purple-400 rounded-lg shrink-0 flex items-center justify-center text-white text-xs">
                  Item 2
                </div>
                <div className="snap-start w-32 h-20 bg-purple-300 rounded-lg shrink-0 flex items-center justify-center text-white text-xs">
                  Item 3
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Applying padding to the child",
                reason:
                  "Scroll padding MUST be applied to the scroll container (parent). Scroll margin is for children.",
                example: `<div class="overflow-auto">
  <div class="scroll-pt-10">...</div> </div>`,
              },
              {
                title: "Thinking it adds visual padding",
                reason:
                  "Scroll padding generally doesn't affect visual layout (unless at the very start/end of scroll). It primarily affects the 'snap' and 'scroll-to' target area.",
                example: `<div class="scroll-p-10">
  </div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Parent vs Child:",
                text: "Remember: Scroll PADDING goes on the PARENT. Scroll MARGIN goes on the CHILD.",
              },
              {
                bold: "Sticky Headers:",
                text: "Use scroll-padding-top equal to your sticky header height on the <html> tag to fix anchor links globally.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
