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
  { cls: "scroll-p-0", desc: "No scroll padding" },
  { cls: "scroll-p-4", desc: "Scroll padding on all sides" },
  { cls: "scroll-px-4", desc: "Horizontal scroll padding" },
  { cls: "scroll-py-4", desc: "Vertical scroll padding" },
  { cls: "scroll-pt-10", desc: "Scroll padding top" },
  { cls: "scroll-pb-10", desc: "Scroll padding bottom" },
  { cls: "scroll-pl-4", desc: "Scroll padding left" },
  { cls: "scroll-pr-4", desc: "Scroll padding right" },
  { cls: "scroll-ps-4", desc: "Scroll padding inline start" },
  { cls: "scroll-pe-4", desc: "Scroll padding inline end" },
];

export default function ScrollPaddingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Padding"
            description="Control the internal offset of a scroll container when content scrolls into view or snaps. Essential for preventing content from hiding behind sticky headers."
          />

          <MentalModelSection
            title="Understanding Scroll Padding"
            description="Scroll padding is like 'internal breathing room' for a scroll container. Unlike regular padding, it doesn't affect the layout of static content. It specifically tells the browser: 'When you scroll something into view inside me, stop this far away from the edge'."
            features={[
              "Applied to the SCROLL CONTAINER (parent), not the children",
              "Crucial for containers with sticky headers/footers",
              "Works perfectly with CSS Scroll Snap",
              "Invisible during normal layout flow",
              "Sets the 'safe area' for scrollIntoView() calls",
            ]}
            layerAssignment="Interactivity Layer - Defines safe zones within a scrollport"
            browserBehavior="The browser effectively shrinks the 'snapping area' or 'viewing area' by the padding amount."
          />

          <ComparisonTable
            title="Scroll Padding vs Scroll Margin"
            columns={["Feature", "scroll-p-* (Padding)", "scroll-m-* (Margin)"]}
            rows={[
              {
                feature: "Applied To",
                values: ["Parent Container", "Child Target Element"],
              },
              {
                feature: "Scope",
                values: [
                  "Global (affects all children)",
                  "Local (affects specific child)",
                ],
              },
              {
                feature: "Best Use Case",
                values: [
                  "Sticky headers, Snap containers",
                  "Individual section offsets",
                ],
              },
              {
                feature: "Maintenance",
                values: ["Easier (one place)", "Harder (many places)"],
              },
            ]}
          />

          <UtilityGrid title="Scroll Padding Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Adjust the scroll padding to see how it affects where the content
              stops scrolling.
            </p>

            <UtilityPlayground
              title="Scroll Padding Playground"
              description="See how scroll padding pushes content away from the container edges during scroll operations."
              options={[
                "scroll-pt-0",
                "scroll-pt-24",
                "scroll-pt-12",
                "scroll-pl-12",
              ]}
              defaultValue="scroll-pt-0"
              buildMarkup={(paddingClass, customClasses = "") => {
                return `<div class="${paddingClass} h-64 overflow-y-auto border rounded relative snap-y snap-mandatory">
  <div class="sticky top-0 bg-blue-600/90 text-white p-2 z-10 h-12">
    Sticky Header (h-12)
  </div>
  
  <div class="space-y-8 p-4">
    <div class="h-32 bg-slate-100 rounded snap-start">Item 1</div>
    <div class="h-32 bg-slate-100 rounded snap-start">Item 2</div>
    <div class="h-32 bg-slate-100 rounded snap-start">Item 3</div>
  </div>
</div>`;
              }}
              renderPreview={(paddingClass, customClasses = "") => {
                return (
                  <div
                    className={`
                    h-64 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg relative bg-slate-50 dark:bg-slate-900 snap-y snap-mandatory scroll-smooth
                    ${paddingClass} ${customClasses}
                  `}
                  >
                    <div className="sticky top-0 left-0 right-0 bg-blue-600/90 backdrop-blur text-white p-3 z-10 h-12 flex items-center justify-between shadow-md">
                      <span className="text-xs font-bold">
                        Sticky Header (48px)
                      </span>
                    </div>

                    <div className="p-4 space-y-16">
                      <div className="h-12"></div>
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-32 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center snap-start"
                        >
                          Item {i}
                        </div>
                      ))}
                      <div className="h-32"></div>
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Cramped Carousel"
            description="This horizontal image gallery uses scroll snapping. Currently, when an image snaps into view, it sticks exactly to the left edge (`scroll-pl-0`), looking cramped. Add `scroll-pl-6` to the container to give the active image some breathing room from the edge."
            codeSnippet={`<div class="{input} flex overflow-x-auto snap-x snap-mandatory gap-4 py-8 bg-slate-900 rounded-xl">
  
  <div class="snap-start shrink-0 w-48 h-64 bg-indigo-500 rounded-lg shadow-lg ml-6">
    <img src="/img1.jpg" class="w-full h-full object-cover rounded-lg" />
  </div>

  <div class="snap-start shrink-0 w-48 h-64 bg-purple-500 rounded-lg shadow-lg">
    <img src="/img2.jpg" class="w-full h-full object-cover rounded-lg" />
  </div>

  </div>`}
            options={["scroll-pl-0", "scroll-pl-6", "pl-6", "ml-6"]}
            correctOption="scroll-pl-6"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-full max-w-md relative">
                  {/* The Carousel */}
                  <div
                    className={`
                      flex overflow-x-auto snap-x snap-mandatory gap-4 py-8 bg-slate-900 rounded-xl shadow-2xl no-scrollbar
                      ${userClass}
                    `}
                  >
                    {/* Spacer to simulate first-child margin if needed (usually handled by padding on container, but scroll-padding handles the SNAP point) */}
                    <div className="w-2 shrink-0"></div>

                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`
                          snap-start shrink-0 w-40 h-56 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl
                          ${
                            i === 1
                              ? "bg-indigo-500"
                              : i === 2
                              ? "bg-purple-500"
                              : i === 3
                              ? "bg-pink-500"
                              : "bg-orange-500"
                          }
                        `}
                      >
                        {i}
                      </div>
                    ))}
                    <div className="w-6 shrink-0"></div>
                  </div>

                  {/* Visualizer for the "Safe Zone" */}
                  {userClass === "scroll-pl-6" && (
                    <div className="absolute top-8 bottom-8 left-0 w-6 bg-green-500/20 border-r-2 border-green-500 pointer-events-none z-20 flex items-center justify-center animate-in fade-in">
                      <div className="text-[10px] text-green-400 -rotate-90 whitespace-nowrap font-bold">
                        Padding
                      </div>
                    </div>
                  )}

                  {/* Helper Hint */}
                  <div className="text-center mt-4 text-xs text-slate-400">
                    Try scrolling horizontally!
                  </div>
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Sticky header containers"
              description="Keeps scrollable content readable under pinned headers by setting a top scroll offset on the container."
              code={`<div class="scroll-pt-16 h-48 overflow-y-auto rounded-xl border bg-white relative">
  <div class="sticky top-0 bg-slate-900 text-white p-3 font-bold h-12 shadow-md">
    Sticky Header
  </div>
  <div class="p-4 space-y-8">
    <div class="snap-start scroll-mt-4">Item 1</div>
    <div class="snap-start scroll-mt-4">Item 2</div>
  </div>
</div>`}
            >
              <div className="scroll-pt-16 h-48 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 relative snap-y">
                <div className="sticky top-0 bg-slate-900 text-white p-3 font-bold h-12 shadow-md flex items-center text-sm z-10">
                  Sticky Header (h-12)
                </div>
                <div className="p-4 space-y-32">
                  <div className="h-8"></div>
                  <div className="snap-start bg-slate-100 dark:bg-slate-800 p-4 rounded border border-slate-300 dark:border-slate-600">
                    <p className="font-bold text-sm">Snap Target</p>
                    <p className="text-xs text-slate-500">
                      I stop below the header!
                    </p>
                  </div>
                  <div className="h-32"></div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Scrollable data panels"
              description="Adds breathing room for dense dashboards or filter lists."
              code={`<div class="scroll-pt-10 h-40 overflow-y-auto border p-2">
  <div class="sticky top-0 bg-gray-100 p-1 mb-2">Filters</div>
  </div>`}
            >
              <div className="scroll-pt-12 h-40 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2 relative">
                <div className="sticky top-0 bg-slate-200 dark:bg-slate-800 p-2 rounded text-xs font-bold mb-4 z-10">
                  Filters
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="mb-2 p-2 bg-white dark:bg-slate-800 rounded shadow-sm text-xs"
                  >
                    Filter Option {i}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Carousel & snap scrolling"
              description="Maintains consistent spacing when snapping items in a horizontal list."
              code={`<div class="scroll-pl-6 overflow-x-auto snap-x rounded-xl bg-slate-900 p-4 flex gap-4">
  <div class="snap-start w-32 h-20 bg-blue-500 rounded"></div>
  <div class="snap-start w-32 h-20 bg-green-500 rounded"></div>
</div>`}
            >
              <div className="scroll-pl-6 overflow-x-auto snap-x rounded-lg bg-slate-900 p-4 flex gap-4 no-scrollbar">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="snap-start shrink-0 w-32 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded border border-slate-600 flex items-center justify-center text-slate-400 text-xs font-mono"
                  >
                    Slide {i}
                  </div>
                ))}
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Confusing it with layout padding",
                reason:
                  "`scroll-padding` DOES NOT add visual space around content during normal rendering. It only affects the scroll offset calculation.",
                example: `<div class="scroll-p-10">Content</div> `,
              },
              {
                title: "Applying to the child instead of container",
                reason:
                  "Scroll padding must be applied to the scroll container (the element with `overflow: auto`), not the items inside it.",
                example: `<div class="overflow-auto">
  <div class="scroll-pt-10">...</div> </div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Container Scope:",
                text: "Scroll padding applies to the scroll container itself and affects ALL children within it.",
              },
              {
                bold: "Sticky Headers:",
                text: "Use `scroll-pt-*` equal to the height of your sticky header so anchor links don't scroll content underneath it.",
              },
              {
                bold: "Scroll Snap:",
                text: "Essential for CSS Scroll Snap to prevent items from snapping directly to the edge of the viewport.",
              },
              {
                bold: "Not Layout:",
                text: "If you need visual spacing that is always visible, use regular `padding` (`p-*`). Use `scroll-padding` specifically for scroll alignment.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
