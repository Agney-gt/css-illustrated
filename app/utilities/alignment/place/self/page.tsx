"use client";

import React from "react";
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

export default function PlaceSelfPage() {
  const placeSelfUtilities = [
    { cls: "place-self-auto", desc: "Inherit container alignment" },
    { cls: "place-self-start", desc: "Align to start (top-left)" },
    { cls: "place-self-end", desc: "Align to end (bottom-right)" },
    { cls: "place-self-center", desc: "Center in both axes" },
    { cls: "place-self-stretch", desc: "Stretch to fill (Default)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Place Self"
            description="Control how a single item aligns itself within its grid cell. This shorthand sets both `align-self` and `justify-self` at once, giving you precise control over one item without affecting its siblings."
          />

          <MentalModelSection
            title="The Grid Rebel"
            description="Most items in a grid follow the rules set by `place-items` on the container. `place-self` is for the rebels. It lets a specific grid item break rank and position itself differently—like pinning a notification badge to the top-right corner while everything else is centered."
            features={[
              "Shorthand for `align-self` + `justify-self`",
              "Applied to individual Grid Items (children)",
              "Overrides the container's `place-items` value",
              "Controls positioning within the specific grid cell",
              "Essential for badges, close buttons, and unique cell layouts",
            ]}
            layerAssignment="Layout Layer - Override positioning for a specific grid child"
            browserBehavior="The browser calculates the item's grid area first, then positions the item within that area based on the place-self values."
          />

          <ComparisonTable
            title="Place Self vs Place Items"
            columns={["Property", "Applied To", "Scope", "Common Use"]}
            rows={[
              {
                feature: "place-items",
                values: [
                  "Grid Container",
                  "All Children",
                  "Default alignment for the whole grid",
                ],
              },
              {
                feature: "place-self",
                values: [
                  "Grid Item",
                  "Specific Item",
                  "Overriding alignment for one cell",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Place Self Utilities"
            items={placeSelfUtilities}
            prefix=""
          />

          <UtilityPlayground
            title="Place Self Playground"
            description="See how a single item moves within its grid cell."
            options={[
              "place-self-auto",
              "place-self-start",
              "place-self-end",
              "place-self-center",
              "place-self-stretch",
            ]}
            defaultValue="place-self-center"
            buildMarkup={(
              value
            ) => `<div class="grid grid-cols-2 gap-4 h-64 bg-slate-100 p-4">
  <div class="bg-blue-300">1 (Default)</div>
  <div class="bg-blue-500 text-white ${value}">2 (${value})</div>
  <div class="bg-blue-300">3 (Default)</div>
  <div class="bg-blue-300">4 (Default)</div>
</div>`}
            renderPreview={(value) => (
              <div className="grid grid-cols-2 gap-4 h-64 bg-slate-100 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                  1
                </div>

                {/* The Target Item */}
                <div
                  className={`${value} bg-indigo-600 text-white p-4 rounded shadow-lg font-bold flex items-center justify-center text-center`}
                >
                  Target
                </div>

                <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                  3
                </div>
                <div className="bg-blue-200 dark:bg-blue-900/30 rounded flex items-center justify-center text-blue-800 dark:text-blue-200 font-medium">
                  4
                </div>
              </div>
            )}
          />

          <InteractiveChallenge
            title="The Corner Badge"
            description="You have a product card with a 'New' badge. The grid cell for the badge covers the whole card image area (thanks to grid overlap). Currently, the badge is stretching to fill the whole area. Use `place-self-end` (or `place-self-start`) to pin it to a corner."
            codeSnippet={`<div class="grid grid-cols-1 grid-rows-1 w-64 h-64 border rounded-lg overflow-hidden">
              <img src="product.jpg" class="col-start-1 row-start-1 w-full h-full object-cover" />
              
              <div class="col-start-1 row-start-1 bg-red-500 text-white px-3 py-1 rounded {input}">
                NEW
              </div>
            </div>`}
            options={[
              "place-self-auto",
              "place-self-center",
              "place-self-start",
              "place-self-end", // Bottom Right
            ]}
            correctOption="place-self-start" // Suggesting top-left for standard badge, or let user decide. Let's aim for top-left.
            renderPreview={(userClass) => {
              // Map user selection to visual position for feedback
              let feedback = "";
              if (
                userClass === "place-self-auto" ||
                userClass === "place-self-stretch"
              )
                feedback = "Filling the whole cell (Default)";
              if (userClass === "place-self-center")
                feedback = "Floating in the middle";
              if (userClass === "place-self-start")
                feedback = "Top-Left Corner (Standard)";
              if (userClass === "place-self-end")
                feedback = "Bottom-Right Corner";

              return (
                <div className="w-full max-w-sm h-64 flex items-center justify-center">
                  <div className="relative grid grid-cols-1 grid-rows-1 w-48 h-48 rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                    {/* Background Layer */}
                    <div className="col-start-1 row-start-1 bg-slate-200 dark:bg-slate-800 w-full h-full flex items-center justify-center text-slate-400">
                      Product Image
                    </div>

                    {/* Badge Layer */}
                    <div
                      className={`col-start-1 row-start-1 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow-sm ${userClass} m-2`}
                      style={
                        userClass.includes("stretch") ||
                        userClass.includes("auto")
                          ? {
                              height: "100%",
                              width: "100%",
                              margin: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }
                          : {}
                      }
                    >
                      NEW
                    </div>
                  </div>
                  <div className="absolute bottom-4 text-xs text-slate-500 font-mono">
                    {feedback}
                  </div>
                </div>
              );
            }}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Modal Close Button"
              description="In a modal header grid, use `place-self-end` to pin the close button to the far right, regardless of the title's position."
              code={`<div class="grid grid-cols-[1fr_auto] items-center gap-4 border-b p-4">
  <h2 class="font-bold text-lg">Settings</h2>
  <button class="place-self-end text-gray-500 hover:text-red-500">
    ✕
  </button>
</div>`}
            >
              <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-slate-100 dark:border-slate-700 p-4">
                  <h2 className="font-bold text-slate-800 dark:text-slate-100">
                    Settings
                  </h2>
                  <button className="place-self-end text-slate-400 hover:text-red-500 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                    ✕
                  </button>
                </div>
                <div className="p-4 h-20 bg-slate-50 dark:bg-slate-900/50"></div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Overlay Text Positioning"
              description="Using a 1x1 grid stack to overlay text on an image. `place-self-center` centers the text perfectly over the image."
              code={`<div class="grid grid-cols-1 grid-rows-1">
  <img src="banner.jpg" class="col-start-1 row-start-1 w-full h-32 object-cover" />
  
  <div class="col-start-1 row-start-1 place-self-center bg-black/50 text-white p-2 rounded">
    Centered Title
  </div>
</div>`}
            >
              <div className="grid grid-cols-1 grid-rows-1 rounded-lg overflow-hidden w-full max-w-sm">
                <div className="col-start-1 row-start-1 w-full h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="col-start-1 row-start-1 place-self-center bg-black/40 text-white font-bold px-4 py-2 rounded backdrop-blur-sm">
                  Centered Overlay
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using on Flex Items",
                reason:
                  "`place-self` is primarily for CSS Grid. While `align-self` works in Flexbox, `justify-self` (horizontal) is ignored in Flexbox. Use margin auto for horizontal alignment in Flexbox.",
                example: `<div class="flex"><div class="place-self-end">...</div></div> `,
                level: "warning",
              },
              {
                title: "Confusing with Place Items",
                reason:
                  "`place-items` goes on the container (parent). `place-self` goes on the item (child).",
                example: `<div class="grid place-self-center">...</div> `,
                level: "info",
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Grid Stacking:",
                text: "The most powerful use of `place-self` is when stacking items in the same grid cell (e.g., `col-start-1 row-start-1`). It acts like absolute positioning but relative to the grid track!",
              },
              {
                bold: "Auto Margins Alternative:",
                text: "In many cases, `margin: auto` (e.g., `mx-auto`) achieves a similar 'centering' effect, but `place-self` is more semantic for Grid layouts.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
