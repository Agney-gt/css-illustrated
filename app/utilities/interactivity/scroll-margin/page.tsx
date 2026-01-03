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
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  { cls: "scroll-m-0", desc: "No scroll margin" },
  { cls: "scroll-m-4", desc: "Scroll margin on all sides" },
  { cls: "scroll-mx-4", desc: "Horizontal scroll margin" },
  { cls: "scroll-my-4", desc: "Vertical scroll margin" },
  { cls: "scroll-mt-10", desc: "Scroll margin top (common for headers)" },
  { cls: "scroll-mb-10", desc: "Scroll margin bottom" },
  { cls: "scroll-ml-4", desc: "Scroll margin left" },
  { cls: "scroll-mr-4", desc: "Scroll margin right" },
  { cls: "scroll-ms-4", desc: "Scroll margin inline start" },
  { cls: "scroll-me-4", desc: "Scroll margin inline end" },
];

export default function ScrollMarginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Margin"
            description="Control the offset applied when elements are scrolled into view. Essential for fixed headers and anchor navigation to prevent content from being hidden."
          />

          <MentalModelSection
            title="Understanding Scroll Margin"
            description="Scroll margin acts like an invisible buffer around an element that is only relevant during scroll operations (like clicking an anchor link). It effectively 'pushes' the scroll position away from the element without affecting the layout flow."
            features={[
              "Does NOT affect visual layout (like regular margin)",
              "Only active during scrollIntoView or anchor navigation",
              "Crucial for fixing 'hidden under header' bugs",
              "Works on the scroll TARGET, not the container",
              "Can be set per side (top, bottom, left, right)",
            ]}
            layerAssignment="Interactivity Layer - Modifies the final scroll destination calculation"
            browserBehavior="When scrolling to an element, the browser subtracts the scroll-margin from the element's position to determine where to stop."
          />

          <ComparisonTable
            title="Scroll Margin vs Regular Margin"
            columns={["Feature", "scroll-m-*", "m-*"]}
            rows={[
              {
                feature: "Visual Spacing",
                values: ["None (invisible)", "Visible layout space"],
              },
              {
                feature: "Effect Trigger",
                values: ["Scrolling to element", "Always active"],
              },
              {
                feature: "Primary Use Case",
                values: ["Sticky header offset", "Element separation"],
              },
              {
                feature: "Impact on Neighbors",
                values: ["None", "Pushes neighbors away"],
              },
            ]}
          />

          <UtilityGrid title="Scroll Margin Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Click the link to see how the offset changes based on the scroll
              margin.
            </p>

            <UtilityPlayground
              title="Scroll Margin Playground"
              description="Adjust the top scroll margin to see how it affects where the scroll stops relative to the sticky header."
              options={[
                "scroll-mt-0",
                "scroll-mt-12",
                "scroll-mt-24",
                "scroll-mt-32",
              ]}
              defaultValue="scroll-mt-0"
              buildMarkup={(marginClass, customClasses = "") => {
                return `<div class="h-64 overflow-y-auto border rounded relative">
  <div class="sticky top-0 bg-blue-600 text-white p-2 z-10 h-12 flex items-center">
    Fixed Header (h-12)
  </div>
  
  <div class="p-4 space-y-32">
    <a href="#target" class="text-blue-500 underline block">Jump to Target</a>
    
    <div id="target" class="${marginClass} bg-green-100 p-4 rounded border border-green-500">
      Target Element
    </div>
    
    <div class="h-64"></div>
  </div>
</div>`;
              }}
              renderPreview={(marginClass, customClasses = "") => {
                return (
                  <div
                    className={`
                    h-64 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg relative bg-slate-50 dark:bg-slate-900
                    ${customClasses}
                  `}
                  >
                    <div className="sticky top-0 left-0 right-0 bg-blue-600/90 backdrop-blur text-white p-3 z-10 h-12 flex items-center justify-between shadow-md">
                      <span className="text-xs font-bold">
                        Fixed Header (48px)
                      </span>
                      <button
                        onClick={(e) => {
                          const container =
                            e.currentTarget.closest(".overflow-y-auto");
                          const target =
                            container?.querySelector("#playground-target");
                          if (target)
                            target.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}
                        className="text-[10px] bg-white text-blue-600 px-2 py-1 rounded font-bold"
                      >
                        Jump ↓
                      </button>
                    </div>

                    <div className="p-6 space-y-32">
                      <p className="text-sm text-slate-500 text-center">
                        Scroll down or click Jump...
                      </p>

                      <div
                        id="playground-target"
                        className={`
                          bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-300 p-4 rounded-lg font-bold text-center
                          ${marginClass}
                        `}
                      >
                        Target Element
                        <div className="text-[10px] font-normal opacity-75 mt-1">
                          {marginClass}
                        </div>
                      </div>

                      <div className="h-64"></div>
                    </div>
                  </div>
                );
              }}
            />
          </section>

          {/* 🟢 THE INTERACTIVE CHALLENGE */}
          <InteractiveChallenge
            title="The Hidden Heading"
            description="When you click 'Go to Section', the target heading scrolls directly to the top of the container, getting completely hidden behind the sticky header. Add `scroll-mt-14` (56px) to the target to give it enough breathing room."
            codeSnippet={`<div class="h-80 overflow-y-auto relative bg-white border rounded-xl">
  <header class="sticky top-0 h-14 bg-indigo-600 text-white flex items-center px-4 shadow-lg z-10 justify-between">
    <span class="font-bold">My Site</span>
    <a href="#target" class="text-xs bg-white/20 px-2 py-1 rounded">Go to Section</a>
  </header>

  <div class="p-6 space-y-8">
    <p class="text-slate-400">Scroll down...</p>
    <div class="h-64 bg-slate-50 rounded"></div>
    
    <h2 
      id="target" 
      class="{input} text-2xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2"
    >
      Important Section
    </h2>
    <p>This content should be visible below the header, not behind it.</p>
    
    <div class="h-64"></div>
  </div>
</div>`}
            options={["scroll-mt-0", "scroll-mt-4", "scroll-mt-14", "mt-14"]}
            correctOption="scroll-mt-14"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-full max-w-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 flex flex-col h-80 relative group">
                  {/* Sticky Header */}
                  <div className="sticky top-0 h-14 bg-indigo-600 text-white flex items-center px-4 shadow-lg z-20 justify-between shrink-0">
                    <span className="font-bold text-sm">My Site</span>
                    <button
                      onClick={(e) => {
                        const card = e.currentTarget.closest(".group");
                        const scrollContainer =
                          card?.querySelector(".overflow-y-auto");
                        const target =
                          scrollContainer?.querySelector("#challenge-target");

                        if (target && scrollContainer) {
                          // Use standard scrollIntoView - the iframe/sandbox of the docs site usually contains this correctly.
                          // However, to be extra safe and prevent page jump, we can use scrollTo if we calculate offset manually,
                          // BUT scroll-margin relies on the browser's native calculation during scrollIntoView.
                          // So we stick to scrollIntoView but add block: 'nearest' or 'start'.
                          target.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      className="text-xs bg-white/20 hover:bg-white/30 transition-colors px-2 py-1 rounded font-medium"
                    >
                      Go to Section ↓
                    </button>
                  </div>

                  {/* Scroll Container */}
                  <div className="flex-1 overflow-y-auto p-6 scroll-smooth relative">
                    <p className="text-slate-400 text-sm mb-8 text-center">
                      Scroll down...
                    </p>
                    <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded mb-12"></div>

                    {/* The Target Element */}
                    <div
                      id="challenge-target"
                      className={`
                        border-b-2 border-indigo-100 dark:border-indigo-900 pb-2 mb-4
                        ${userClass}
                      `}
                    >
                      <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                        Important Section
                      </h2>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      If the scroll margin is correct, this title is perfectly
                      positioned below the header. If not, it's hiding!
                    </p>

                    <div className="h-64"></div>
                  </div>

                  {/* Visualizer showing the invisible buffer */}
                  {userClass === "scroll-mt-14" && (
                    <div className="absolute top-14 left-0 right-0 h-14 bg-green-500/10 border-b border-green-500/30 pointer-events-none flex items-end justify-center pb-1 z-30 animate-in fade-in">
                      <span className="text-[10px] text-green-600 font-mono bg-green-100 px-1 rounded">
                        56px Buffer
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Documentation anchors"
              description="Prevents headings from hiding under fixed headers in long documents."
              code={`<h2 id="api" class="scroll-mt-24 text-lg font-semibold">
  API Reference
</h2>`}
            >
              <div className="h-40 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 relative">
                <div className="sticky top-0 h-12 bg-white/95 dark:bg-slate-900/95 border-b flex items-center px-4 text-xs font-bold z-10 text-slate-500">
                  Fixed Navbar (h-12)
                </div>
                <div className="p-4 space-y-12">
                  <div className="h-12"></div>
                  <div id="ex1-target" className="scroll-mt-16">
                    <h3 className="font-bold text-slate-800 dark:text-slate-200">
                      API Reference
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      This header clears the navbar.
                    </p>
                  </div>
                  <div className="h-32"></div>
                </div>
                <button
                  className="absolute bottom-2 right-2 bg-slate-100 dark:bg-slate-800 text-xs px-2 py-1 rounded shadow"
                  onClick={(e) =>
                    e.currentTarget.parentElement
                      ?.querySelector("#ex1-target")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  Test Scroll
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Horizontal scroll snapping"
              description="Ensures horizontally scrolled items don't stick to the very edge of the screen."
              code={`<div class="flex overflow-x-auto snap-x">
  <div class="scroll-ml-6 snap-start ...">Item 1</div>
  <div class="scroll-ml-6 snap-start ...">Item 2</div>
</div>`}
            >
              <div className="flex overflow-x-auto snap-x gap-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-lg pb-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="scroll-ml-6 snap-start shrink-0 w-32 h-20 bg-white dark:bg-slate-800 rounded shadow-sm flex items-center justify-center border border-slate-200 dark:border-slate-700 text-sm font-medium"
                  >
                    Item {i}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Focus management"
              description="When programmatically focusing an input, ensure it doesn't get obscured by UI elements."
              code={`<input 
  type="text" 
  class="scroll-mt-4 scroll-mb-20" 
  onfocus="this.scrollIntoView()" 
/>`}
            >
              <div className="h-32 overflow-y-auto rounded-lg border bg-white dark:bg-slate-900 p-4 relative">
                <div className="h-32"></div>
                <input
                  type="text"
                  placeholder="Focus me..."
                  className="scroll-mb-12 w-full border rounded px-2 py-1 text-sm mb-4"
                  onFocus={(e) =>
                    e.target.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                    })
                  }
                />
                <div className="h-32"></div>
                <div className="sticky bottom-0 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs p-2 text-center">
                  Fixed Bottom Banner
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Confusing it with layout margin",
                reason:
                  "`scroll-margin` is invisible and DOES NOT affect the layout flow or spacing between elements. It only applies to the scroll snap area.",
                example: `<div class="scroll-mt-10">...</div> `,
              },
              {
                title: "Applying to the container instead of the target",
                reason:
                  "Scroll margin must be applied to the child element you are scrolling TO, not the parent container doing the scrolling.",
                example: `<div class="scroll-mt-10 overflow-auto"> <div id="target">...</div>
</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Header Height:",
                text: "A good rule of thumb is to set `scroll-mt` equal to your fixed header's height plus a little extra breathing room (e.g., header 4rem + 1rem = scroll-mt-20).",
              },
              {
                bold: "Horizontal Lists:",
                text: "Use `scroll-mx` or `scroll-ml` for horizontal carousels to prevent items from sticking to the absolute edge of the viewport.",
              },
              {
                bold: "Focus behavior:",
                text: "Browsers often automatically scroll focused inputs into view. `scroll-margin` helps ensure they aren't hidden behind sticky footers or headers when this happens.",
              },
              {
                bold: "Scroll Padding:",
                text: "Alternatively, you can use `scroll-padding` on the parent container, which applies to all children globally.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
