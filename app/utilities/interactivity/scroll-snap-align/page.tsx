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
  { className: "snap-start", desc: "Snap item to the start of the container" },
  {
    className: "snap-center",
    desc: "Snap item to the center of the container",
  },
  { className: "snap-end", desc: "Snap item to the end of the container" },
  { className: "snap-align-none", desc: "Disable snapping for this item" },
];

export default function ScrollSnapAlignPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Snap Align"
            description="Control how individual elements align within a scroll snap container. Essential for creating polished carousels, lists, and full-page slides."
          />

          <MentalModelSection
            title="Understanding Snap Alignment"
            description="Scroll snap alignment works like a magnet. When you stop scrolling a container (that has `snap-type` set), the browser calculates which child element is closest to the 'snap point' and pulls it into place. This utility defines exactly which part of the CHILD element should lock onto the container."
            features={[
              "Applied to the CHILD items, not the container",
              "Works only if the parent has `snap-x` or `snap-y`",
              "snap-start: Aligns the item's start edge with the container's start edge",
              "snap-center: Aligns the item's center with the container's center",
              "snap-end: Aligns the item's end edge with the container's end edge",
            ]}
            layerAssignment="Interactivity Layer - Defines magnetic anchor points for scroll physics"
            browserBehavior="Browser monitors scroll velocity and position. On scroll end, it animates to the nearest valid snap point defined by these classes."
          />

          <ComparisonTable
            title="Alignment Strategies"
            columns={["Class", "Alignment Logic", "Best Use Case"]}
            rows={[
              {
                feature: "snap-start",
                values: [
                  "Top/Left edge matches container",
                  "Vertical lists, Text blocks",
                ],
              },
              {
                feature: "snap-center",
                values: [
                  "Center matches container",
                  "Photo galleries, Carousels, 3D cards",
                ],
              },
              {
                feature: "snap-end",
                values: [
                  "Bottom/Right edge matches container",
                  "Chat logs, Right-aligned flows",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Scroll Snap Align Utilities"
            items={utilities.map((u) => ({ cls: u.className, desc: u.desc }))}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Scroll horizontally to feel how the items lock into place based on
              the alignment class.
            </p>

            <UtilityPlayground
              title="Snap Align Playground"
              description="Switch alignment modes on the child items."
              options={utilities.map((u) => u.className)}
              defaultValue="snap-center"
              buildMarkup={(alignClass, customClasses = "") => {
                return `<div class="snap-x snap-mandatory overflow-x-auto flex gap-6 p-8 border rounded-xl bg-slate-900 ${customClasses}">
  <div class="${alignClass} shrink-0 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">1</div>
  <div class="${alignClass} shrink-0 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">2</div>
  <div class="${alignClass} shrink-0 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">3</div>
  <div class="${alignClass} shrink-0 w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white">4</div>
</div>`;
              }}
              renderPreview={(alignClass, customClasses = "") => {
                return (
                  <div
                    className={`
                    w-full max-w-md snap-x snap-mandatory overflow-x-auto flex gap-6 p-8 border border-slate-700 rounded-xl bg-slate-900 shadow-inner no-scrollbar
                    ${customClasses}
                  `}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`
                          ${alignClass} shrink-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl border border-white/10
                        `}
                      >
                        {i}
                      </div>
                    ))}
                    {/* Extra space to allow snapping the last item if needed */}
                    <div className="shrink-0 w-24"></div>
                  </div>
                );
              }}
            />
          </section>

          {/* 🟢 THE INTERACTIVE CHALLENGE */}
          <InteractiveChallenge
            title="The Drifting Contact List"
            description="This contact picker is annoying to use. When you scroll, it stops randomly between names, cutting them off. Apply `snap-start` to the list items so they snap perfectly to the top of the container."
            codeSnippet={`<div class="w-64 h-48 border rounded-xl overflow-hidden bg-white shadow-lg">
  <div class="bg-gray-100 p-2 text-xs font-bold uppercase text-gray-500 border-b">Contacts</div>
  
  <div class="h-full overflow-y-auto snap-y snap-mandatory pb-8">
    
    <div class="{input} h-12 flex items-center gap-3 px-4 border-b hover:bg-gray-50">
      <div class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">JD</div>
      <span class="text-sm font-medium">John Doe</span>
    </div>

    <div class="{input} h-12 flex items-center gap-3 px-4 border-b hover:bg-gray-50">
      <div class="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold">JS</div>
      <span class="text-sm font-medium">Jane Smith</span>
    </div>

    </div>
</div>`}
            options={[
              "snap-align-none",
              "snap-center",
              "scroll-smooth",
              "snap-start",
            ]}
            correctOption="snap-start"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-64 h-56 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-xl flex flex-col">
                  <div className="bg-slate-50 dark:bg-slate-800 p-3 text-xs font-bold uppercase text-slate-400 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span>Contacts</span>
                    <span className="text-[10px] bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">
                      Scroll me
                    </span>
                  </div>

                  <div className="flex-1 overflow-y-auto snap-y snap-mandatory pb-12 relative no-scrollbar">
                    {/* Items */}
                    {[
                      {
                        name: "Alice Adams",
                        initial: "AA",
                        color: "bg-blue-100 text-blue-600",
                      },
                      {
                        name: "Bob Brown",
                        initial: "BB",
                        color: "bg-green-100 text-green-600",
                      },
                      {
                        name: "Charlie Cox",
                        initial: "CC",
                        color: "bg-purple-100 text-purple-600",
                      },
                      {
                        name: "Daisy Duck",
                        initial: "DD",
                        color: "bg-pink-100 text-pink-600",
                      },
                      {
                        name: "Evan Evans",
                        initial: "EE",
                        color: "bg-orange-100 text-orange-600",
                      },
                      {
                        name: "Frank Fox",
                        initial: "FF",
                        color: "bg-red-100 text-red-600",
                      },
                    ].map((person, i) => (
                      <div
                        key={i}
                        className={`
                          h-14 flex items-center gap-3 px-4 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors
                          ${userClass}
                        `}
                      >
                        <div
                          className={`w-8 h-8 rounded-full ${person.color} flex items-center justify-center text-xs font-bold shrink-0`}
                        >
                          {person.initial}
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          {person.name}
                        </span>
                      </div>
                    ))}

                    {/* Visualizer for snap point */}
                    {userClass === "snap-start" && (
                      <div className="absolute top-0 left-0 right-0 h-14 pointer-events-none border-2 border-green-500/30 bg-green-500/5 z-10 animate-pulse flex items-center justify-end pr-2">
                        <span className="text-[10px] text-green-600 font-bold bg-green-100 px-1 rounded">
                          Snapped
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Image carousel"
              description="Uses 'snap-center' to ensure the active image is perfectly centered in the viewport."
              code={`<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4">
  <div class="snap-center shrink-0 w-64 h-36 bg-slate-700 rounded-lg"></div>
  <div class="snap-center shrink-0 w-64 h-36 bg-slate-600 rounded-lg"></div>
  <div class="snap-center shrink-0 w-64 h-36 bg-slate-500 rounded-lg"></div>
</div>`}
            >
              <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 bg-slate-900 rounded-lg no-scrollbar">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-48 h-32 bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 shadow-md border border-slate-600"
                  >
                    Slide {i}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Horizontal timeline"
              description="Uses 'snap-start' to align timeline steps to the left edge."
              code={`<div class="snap-x snap-proximity overflow-x-auto flex gap-8 p-4">
  <div class="snap-start w-32 h-16 bg-blue-600 rounded flex items-center justify-center text-white">Step 1</div>
  <div class="snap-start w-32 h-16 bg-blue-700 rounded flex items-center justify-center text-white">Step 2</div>
</div>`}
            >
              <div className="snap-x snap-proximity overflow-x-auto flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 no-scrollbar">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="snap-start shrink-0 w-24 h-16 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  >
                    Step {i}
                  </div>
                ))}
                <div className="w-12 shrink-0"></div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Product cards row"
              description="Snap-start ensures the first product is fully visible when scrolling stops."
              code={`<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4">
  <div class="snap-start w-40 h-48 bg-white border rounded-lg shadow-sm">
    Product A
  </div>
  </div>`}
            >
              <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="snap-start shrink-0 w-32 h-40 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm flex items-center justify-center text-xs font-medium text-slate-500"
                  >
                    Product {i}
                  </div>
                ))}
                <div className="w-8 shrink-0"></div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Forgetting the parent utility",
                reason:
                  "`snap-start/center/end` on children does nothing unless the parent container has `snap-x` or `snap-y` AND `snap-mandatory` (or proximity).",
                example: `<div class="overflow-auto"> <div class="snap-center">...</div>
</div>`,
              },
              {
                title: "Mixing alignment axes",
                reason:
                  "Using `snap-center` on a vertical list (`snap-y`) often cuts off the top and bottom of the item if the item is taller than the viewport.",
                example: `<div class="snap-y ...">
  <div class="snap-center h-screen">...</div> </div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Center vs Start:",
                text: "Use `snap-center` when items are smaller than the viewport (like a carousel). Use `snap-start` when items take up most of the screen.",
              },
              {
                bold: "Scroll Padding:",
                text: "Combine with `scroll-pl-*` (or `scroll-pt-*`) on the parent container to add an offset to the snap point, preventing items from sticking to the absolute edge.",
              },
              {
                bold: "Mandatory vs Proximity:",
                text: "Use `snap-mandatory` for carousels (always snap). Use `snap-proximity` for document flows (only snap if close).",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
