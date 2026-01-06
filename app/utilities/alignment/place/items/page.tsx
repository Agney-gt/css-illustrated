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

export default function PlaceItemsPage() {
  const placeItemsUtilities = [
    { cls: "place-items-center", desc: "Center items in their grid cells" },
    { cls: "place-items-start", desc: "Align items to start (top-left)" },
    { cls: "place-items-end", desc: "Align items to end (bottom-right)" },
    {
      cls: "place-items-stretch",
      desc: "Stretch items to fill cells (Default)",
    },
    { cls: "place-items-baseline", desc: "Align text baselines" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Place Items"
            description="Control how items are aligned within their specific grid cells. This is the shorthand for `align-items` (vertical) and `justify-items` (horizontal) at the same time."
          />

          <MentalModelSection
            title="The Cell Manager"
            description="While `place-content` moves the whole grid layout, `place-items` controls exactly where the content sits *inside* each individual grid cell. It allows you to center-align every single cell's content with just one class on the parent."
            features={[
              "Shorthand for `align-items` + `justify-items`",
              "Primarily used in CSS Grid layouts",
              "Controls position within the allocated cell area",
              "Default behavior is `stretch` (fill the cell)",
              "Perfect for grids of cards, icons, or avatars",
            ]}
            layerAssignment="Layout Layer - Micro-positioning of items within their grid tracks"
            browserBehavior="Sets the `place-items` property on the container, which instructs all direct children how to align themselves within their grid areas."
          />

          <ComparisonTable
            title="Place Items vs Place Content"
            columns={["Property", "Scope", "Analogy", "Typical Use"]}
            rows={[
              {
                feature: "place-items",
                values: [
                  "Inside each Cell",
                  "Centering the text on a button",
                  "Centering content inside grid cards",
                ],
              },
              {
                feature: "place-content",
                values: [
                  "The Whole Grid",
                  "Centering the button group on the page",
                  "Centering a grid layout on the screen",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Place Items Utilities"
            items={placeItemsUtilities}
            prefix=""
          />

          <UtilityPlayground
            title="Place Items Playground"
            description="See how items align within their grid cells. Notice how `stretch` fills the space, while `center` shrinks the item to its content size."
            options={[
              "place-items-center",
              "place-items-start",
              "place-items-end",
              "place-items-stretch",
            ]}
            defaultValue="place-items-center"
            buildMarkup={(
              value
            ) => `<div class="grid grid-cols-2 gap-4 h-64 ${value} bg-slate-100">
  <div class="bg-blue-500 p-4">1</div>
  <div class="bg-blue-500 p-4">2</div>
  <div class="bg-blue-500 p-4">3</div>
  <div class="bg-blue-500 p-4">4</div>
</div>`}
            renderPreview={(value) => (
              <div
                className={`grid grid-cols-2 gap-4 h-64 ${value} bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-4`}
              >
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-blue-500 text-white p-4 rounded shadow-sm font-bold flex items-center justify-center"
                  >
                    Cell {i}
                  </div>
                ))}
              </div>
            )}
          />

          <InteractiveChallenge
            title="The Unruly Dashboard"
            description="You have a dashboard grid. The cards have different heights, but you want the icons inside them to be perfectly centered in their respective cells. Currently, they are stretching to fill the cell height. Apply `place-items-center` to the grid container to center everything instantly."
            codeSnippet={`<div class="grid grid-cols-3 gap-4 h-48 bg-slate-100 p-4 {input}">
          <div class="card">Icon 1</div>
          <div class="card">Icon 2</div>
          <div class="card">Icon 3</div>
          </div>`}
            options={[
              "place-content-center",
              "items-center",
              "place-items-center",
              "justify-center",
            ]}
            correctOption="place-items-center"
            renderPreview={(userClass) => (
              <div className="w-full max-w-lg h-56 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 overflow-hidden relative">
                <div className="absolute top-2 left-2 text-[10px] text-slate-400 font-mono">
                  Grid Container
                </div>

                <div className={`grid grid-cols-3 gap-4 h-full ${userClass}`}>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-indigo-900 rounded-lg p-4 shadow-sm text-indigo-600 dark:text-indigo-400 font-bold flex flex-col justify-center items-center text-center"
                      style={
                        userClass === "place-items-stretch" || userClass === ""
                          ? {}
                          : { width: "80px", height: "80px" }
                      }
                    >
                      <span>Icon {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Feature Icons Grid"
              description="A 3x3 grid of feature icons where every icon is perfectly centered in its square."
              code={`<div class="grid grid-cols-3 gap-4 place-items-center">
  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">🚀</div>
  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">🛡️</div>
  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">⚡</div>
  </div>`}
            >
              <div className="grid grid-cols-3 gap-4 place-items-center p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                {["🚀", "🛡️", "⚡", "📱", "☁️", "🔒"].map((icon, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-lg hover:scale-110 transition-transform cursor-pointer"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Avatar Stack Alignment"
              description="Using `place-items-end` to align avatars to the bottom-right of their cells in a user list."
              code={`<div class="grid grid-cols-4 gap-2 place-items-end h-20">
  <img src="u1.jpg" class="w-8 h-8 rounded-full" />
  <img src="u2.jpg" class="w-8 h-8 rounded-full" />
  <img src="u3.jpg" class="w-8 h-8 rounded-full" />
  <img src="u4.jpg" class="w-8 h-8 rounded-full" />
</div>`}
            >
              <div className="grid grid-cols-4 gap-2 place-items-end h-20 bg-slate-50 dark:bg-slate-900 rounded p-2 border border-dashed border-slate-300 dark:border-slate-700">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-white shadow-sm"
                  ></div>
                ))}
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using on Flex Containers",
                reason:
                  "`place-items` is primarily a Grid property. In Flexbox, it doesn't work consistently across all browsers (Flexbox uses `align-items` and `justify-content`).",
                example: `<div class="flex place-items-center">...</div> `,
                level: "warning",
              },
              {
                title: "Confusing with Place Content",
                reason:
                  "`place-items` aligns the item INSIDE the cell. `place-content` moves the CELL inside the grid container.",
                example: `<div class="grid place-items-center"> `,
                level: "info",
              },
              {
                title: "Assuming it Centers Vertically only",
                reason:
                  "`place-items` is a shorthand for BOTH axes (X and Y). If you only want vertical centering, stick to `items-center`.",
                example: `<div class="grid place-items-center"> `,
                level: "info",
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "The 'Dead Center' Trick:",
                text: "For a full-page hero section, `grid place-items-center h-screen` is the fastest way to center content perfectly in the viewport.",
              },
              {
                bold: "Override Specific Items:",
                text: "You can set `place-items-center` on the parent, but override a specific child with `place-self-end`.",
              },
              {
                bold: "Stretch Default:",
                text: "Grid items default to `stretch`. If your images or buttons look stretched out, adding `place-items-start` allows them to shrink to their natural size.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
