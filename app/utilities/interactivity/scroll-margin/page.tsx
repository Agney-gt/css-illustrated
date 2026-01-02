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
    cls: "scroll-mt-24",
    desc: "Top scroll margin (most common for sticky headers)",
  },
  {
    cls: "scroll-mb-8",
    desc: "Bottom scroll margin (good for sticky footers)",
  },
  { cls: "scroll-mx-4", desc: "Horizontal scroll margin (carousels)" },
  { cls: "scroll-m-0", desc: "Remove scroll margin" },
];

export default function ScrollMarginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Margin"
            description="Control the offset applied when an element is scrolled into view. The definitive fix for anchor links hiding behind sticky headers."
          />

          <MentalModelSection
            title="Understanding Scroll Margin"
            description="Scroll Margin is a Layout/Interactivity layer utility that creates an invisible 'safe zone' around an element specifically for scroll-snap and anchor navigation operations."
            features={[
              "Does NOT affect visual layout (like margin/padding)",
              "Only active during scroll-into-view events (anchor clicks, JS)",
              "The most common use case is offsetting sticky headers (scroll-mt)",
              "Works on the TARGET element (the section being scrolled to)",
              "Essential for Single Page Applications (SPAs) with in-page nav",
            ]}
            layerAssignment="Interactivity Layer - Defines scroll target offset zones"
            browserBehavior="When browser calculates 'top' of an element for scrolling, it subtracts the scroll-margin-top value from the element's actual position."
          />

          <ComparisonTable
            title="Scroll Margin vs Normal Margin"
            columns={["Property", "Layout Impact", "Scroll Impact", "Use Case"]}
            rows={[
              {
                feature: "margin-top (mt-*)",
                values: [
                  "Push content down",
                  "None (scrols to border)",
                  "Spacing elements visually",
                ],
              },
              {
                feature: "scroll-margin-top (scroll-mt-*)",
                values: [
                  "None (invisible)",
                  "Offsets scroll position",
                  "Fixing sticky header overlap",
                ],
              },
              {
                feature: "scroll-padding (scroll-p-*)",
                values: [
                  "None",
                  "Offsets container edge",
                  "Applied to CONTAINER, not child",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Common Scroll Margin Utilities"
            items={utilities}
          />

          <InteractiveChallenge
            title="The Hidden Headline"
            description="You have a sticky header that is 96px tall. When you click the 'Jump to Features' link, the title gets buried behind the header! Add scroll margin to the target section so it stops below the header."
            initialClass="scroll-mt-0"
            correctClass="scroll-mt-32"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "scroll-mt-32";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>
                      &lt;!-- Sticky Header (Height: 8rem / 128px) --&gt;
                    </CodeComment>
                    <CodeTag>&lt;nav</CodeTag>{" "}
                    <CodeAttr name="class" value="sticky top-0 h-32 ..." />
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4 text-slate-500">...</div>

                  <div className="mt-4">
                    <CodeComment>&lt;!-- Target Section --&gt;</CodeComment>
                    <CodeTag>&lt;section</CodeTag>{" "}
                    <CodeAttr name="id" value="features" />
                  </div>

                  <div className="pl-4 flex flex-wrap gap-2 items-center">
                    <span className="text-purple-400">class</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">"relative ...</span>

                    {/* Custom Toggle Button */}
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
                    <CodeTag>&lt;h2&gt;</CodeTag>Features
                    <CodeTag>&lt;/h2&gt;</CodeTag>
                  </div>

                  <div>
                    <CodeTag>&lt;/section&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden">
                {/* Simulated Viewport */}
                <div
                  id="margin-container"
                  className="w-full h-full overflow-y-auto relative scroll-smooth bg-slate-950"
                >
                  {/* Sticky Header */}
                  <div className="sticky top-0 z-20 h-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 flex items-center justify-between px-6 shadow-lg">
                    <span className="font-bold text-white tracking-widest">
                      LOGO
                    </span>
                    <button
                      className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const container =
                          document.getElementById("margin-container");
                        const target =
                          document.getElementById("features-target");
                        if (container && target) {
                          // Manually force anchor behavior to demonstrate the CSS property
                          target.scrollIntoView();
                          if (cls === "scroll-mt-32") {
                            setTimeout(onWin, 500);
                          }
                        }
                      }}
                    >
                      Jump to Features
                    </button>
                  </div>

                  {/* Spacer Content */}
                  <div className="p-6 space-y-6">
                    <div className="h-40 bg-slate-800/50 rounded-lg border border-slate-800 flex items-center justify-center text-slate-600 text-sm">
                      Hero Content
                    </div>
                    <div className="h-20 bg-slate-800/30 rounded-lg"></div>
                  </div>

                  {/* THE TARGET SECTION */}
                  <div
                    id="features-target"
                    className={`
                      relative p-6 border-t border-blue-500/30 transition-all duration-300
                      ${cls} /* Applies scroll-mt */
                      ${isSolved ? "bg-blue-900/20" : "bg-slate-900"}
                    `}
                  >
                    <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                      {isSolved && <span className="text-xl">🎉</span>}
                      Features Section
                    </h2>
                    <p className="text-slate-400 text-sm">
                      This is the content you are trying to read. If it's hidden
                      behind the header, the user will be confused.
                    </p>

                    {/* Visualizer of the margin */}
                    {isSolved && (
                      <div className="absolute -top-32 left-0 right-0 h-32 bg-stripes-white opacity-10 border-b border-white/20 pointer-events-none flex items-end justify-center pb-2">
                        <span className="text-xs text-white bg-slate-900 px-2 rounded">
                          Scroll Margin Zone (128px)
                        </span>
                      </div>
                    )}
                  </div>

                  {/* More Spacer */}
                  <div className="h-96 bg-slate-950 p-6">
                    <div className="h-full bg-slate-900/20 rounded border border-slate-800/50 border-dashed"></div>
                  </div>
                </div>

                {/* Overlays */}
                {!isSolved && cls === "scroll-mt-0" && (
                  <div className="absolute bottom-4 right-4 bg-red-500/20 border border-red-500/50 text-red-200 text-xs px-3 py-2 rounded animate-pulse">
                    ⚠️ Header obscures content on jump
                  </div>
                )}
              </div>
            )}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Scroll the container or click the link to see how `scroll-mt`
              creates a buffer zone.
            </p>

            <UtilityPlayground
              title="Scroll Margin Playground"
              description="Adjust the top margin to clear the sticky header."
              options={[
                "scroll-mt-0",
                "scroll-mt-12",
                "scroll-mt-24",
                "scroll-mt-32",
              ]}
              defaultValue="scroll-mt-0"
              buildMarkup={(marginClass, customClasses = "") => {
                return `<div class="h-60 overflow-y-auto relative border rounded-lg bg-slate-50 ${customClasses}">
  <div class="sticky top-0 bg-blue-600 text-white p-4 font-bold shadow-md z-10 h-16 flex items-center justify-between">
    <span>Sticky Header</span>
    <a href="#target" class="text-xs bg-white text-blue-600 px-2 py-1 rounded">Jump</a>
  </div>

  <div class="p-4 space-y-12">
    <div class="h-20 bg-slate-200 rounded">Spacer</div>
    
    <div id="target" class="${marginClass} bg-green-100 border border-green-400 p-4 rounded text-green-800 font-bold">
      Target Element
    </div>

    <div class="h-64 bg-slate-200 rounded">Bottom Spacer</div>
  </div>
</div>`;
              }}
              renderPreview={(marginClass, customClasses = "") => {
                return (
                  <div
                    className={`h-60 overflow-y-auto relative border border-border rounded-lg bg-slate-50 dark:bg-slate-900 ${customClasses} scroll-smooth`}
                  >
                    <div className="sticky top-0 bg-blue-600 text-white p-4 font-bold shadow-md z-10 h-16 flex items-center justify-between">
                      <span>Sticky Header</span>
                      <button
                        onClick={(e) => {
                          const container =
                            e.currentTarget.closest(".overflow-y-auto");
                          const target = container?.querySelector("#target-el");
                          if (target) target.scrollIntoView();
                        }}
                        className="text-xs bg-white text-blue-600 px-2 py-1 rounded hover:bg-blue-50 cursor-pointer"
                      >
                        Jump
                      </button>
                    </div>

                    <div className="p-4 space-y-12">
                      <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs text-muted-foreground">
                        Spacer
                      </div>

                      <div
                        id="target-el"
                        className={`${marginClass} bg-green-100 dark:bg-green-900/30 border border-green-400 p-4 rounded text-green-800 dark:text-green-300 font-bold relative`}
                      >
                        Target Element
                        <span className="block text-xs font-normal opacity-70 mt-1">
                          Top margin: {marginClass.replace("scroll-mt-", "")}{" "}
                          (Tailwind spacing)
                        </span>
                      </div>

                      <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded flex items-center justify-center text-xs text-muted-foreground">
                        Bottom Spacer
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Documentation anchors"
              description="Prevents headings from hiding under fixed headers when linking to sections."
              code={`<article>
  <div class="sticky top-0 h-16 bg-white shadow">Header</div>
  
  <div class="prose">
    <h2 id="installation" class="scroll-mt-24 text-2xl font-bold">
      Installation
    </h2>
    <p>...</p>
  </div>
</article>`}
            >
              <div className="h-48 overflow-y-auto relative border rounded-lg bg-white dark:bg-slate-900 scroll-smooth">
                <div className="sticky top-0 h-12 bg-white dark:bg-slate-800 shadow flex items-center px-4 text-sm font-bold border-b z-10">
                  Docs Header
                </div>
                <div className="p-4 space-y-8">
                  <p className="text-sm text-muted-foreground">
                    Scroll down or click{" "}
                    <button
                      onClick={(e) => {
                        e.currentTarget
                          .closest(".overflow-y-auto")
                          ?.querySelector("#install")
                          ?.scrollIntoView();
                      }}
                      className="text-blue-500 underline"
                    >
                      here
                    </button>
                  </p>
                  <div className="h-12"></div>
                  <h2
                    id="install"
                    className="scroll-mt-16 text-lg font-bold text-foreground border-b pb-2"
                  >
                    Installation
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    This heading clears the header comfortably.
                  </p>
                  <div className="h-40"></div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Horizontal Carousel Snap"
              description="Ensures images don't snap exactly to the edge, leaving a small gap."
              code={`<div class="flex overflow-x-auto snap-x scroll-p-4 gap-4">
  <img src="..." class="snap-start scroll-ml-4 w-64 rounded-lg" />
  <img src="..." class="snap-start scroll-ml-4 w-64 rounded-lg" />
</div>`}
            >
              <div className="relative">
                <div className="flex overflow-x-auto snap-x gap-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="snap-start scroll-ml-4 w-32 h-20 shrink-0 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-sm"
                    >
                      Item {i}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-center">
                  Try scrolling horizontally (snap enabled)
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Confusing scroll-margin with margin",
                reason:
                  "scroll-margin is INVISIBLE. It does not push content down visually. Use normal `margin` (`mt-*`) if you want visual spacing.",
                example: `<h2 class="scroll-mt-20">Title</h2> 
`,
              },
              {
                title: "Applying to the container",
                reason:
                  "`scroll-margin` goes on the CHILD (the target). `scroll-padding` goes on the PARENT (the container).",
                example: `<div class="scroll-mt-10 overflow-auto"> <div id="target">...</div>
</div>
`,
              },
              {
                title: "Using arbitrary values without testing",
                reason:
                  "If your header changes height on mobile, your fixed scroll-margin might be too small or too large.",
                example: `<h2 class="scroll-mt-[100px] lg:scroll-mt-[80px]">...</h2>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "The Formula:",
                text: "Set `scroll-mt` value >= Height of your sticky header + desired breathing room (e.g. 1rem).",
              },
              {
                bold: "Scroll Padding:",
                text: "Alternatively, you can set `scroll-pt-*` on the `html` or scrolling container to apply offset globally for all children.",
              },
              {
                bold: "Focus:",
                text: "This also improves accessibility when tabbing through focusable elements—ensures inputs aren't hidden behind headers when focused.",
              },
              {
                bold: "Tailwind Classes:",
                text: "Use `scroll-m-*`, `scroll-mx-*` (horizontal), `scroll-my-*` (vertical), `scroll-mt-*` (top), etc.",
              },
              {
                bold: "Performance:",
                text: "Zero layout shift impact. It only affects the scroll coordinate calculation.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
