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

export default function PlaceContentPage() {
  const placeContentUtilities = [
    { cls: "place-content-center", desc: "Pack items in center (Both axes)" },
    { cls: "place-content-start", desc: "Pack items at start (Both axes)" },
    { cls: "place-content-end", desc: "Pack items at end (Both axes)" },
    { cls: "place-content-between", desc: "Space between items (Both axes)" },
    { cls: "place-content-around", desc: "Space around items (Both axes)" },
    { cls: "place-content-evenly", desc: "Even spacing (Both axes)" },
    { cls: "place-content-stretch", desc: "Stretch to fill (Both axes)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Place Content"
            description="The ultimate shorthand for positioning. Control both `align-content` and `justify-content` at the same time to pack rows and columns exactly where you want them in a grid or multi-line flex container."
          />

          <MentalModelSection
            title="The 2D Packer"
            description="Think of `place-content` as a 'Gravity Controller' for your layout. It grabs the entire block of content (all your grid cells or wrapped flex rows) and moves that entire block within the container. It answers the question: 'Where should this cluster of stuff sit inside this big box?'"
            features={[
              "Shorthand for `align-content` (Vertical/Cross) + `justify-content` (Horizontal/Main)",
              "Mostly used in CSS Grid layouts",
              "Works in Flexbox ONLY if `flex-wrap: wrap` is on and there are multiple lines",
              "Moves the group of items, not the items relative to each other (unless spacing is used)",
            ]}
            layerAssignment="Layout Layer - Macro-level positioning of the entire content content block"
            browserBehavior="Sets the `place-content` CSS property, which maps to `align-content` and `justify-content` simultaneously."
          />

          <ComparisonTable
            title="Placement vs Alignment"
            columns={["Property", "Axis Controlled", "Target", "Best For"]}
            rows={[
              {
                feature: "place-content",
                values: [
                  "Both X & Y",
                  "Content Block",
                  "Centering a grid in a page",
                ],
              },
              {
                feature: "place-items",
                values: [
                  "Both X & Y",
                  "Individual Items",
                  "Centering content inside cells",
                ],
              },
              {
                feature: "justify-content",
                values: [
                  "Main / Inline",
                  "Content Distribution",
                  "Spacing buttons in a row",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Place Content Utilities"
            items={placeContentUtilities}
            prefix=""
          />

          <UtilityPlayground
            title="Place Content Playground"
            description="See how the entire content block moves within the container space. Note: The container must be larger than the content for this to work."
            options={[
              "place-content-center",
              "place-content-start",
              "place-content-end",
              "place-content-between",
              "place-content-around",
              "place-content-stretch",
            ]}
            defaultValue="place-content-center"
            buildMarkup={(
              value
            ) => `<div class="grid grid-cols-3 gap-4 h-64 ${value} bg-slate-100">
            <div class="w-12 h-12 bg-blue-500"></div>
            <div class="w-12 h-12 bg-blue-500"></div>
            <div class="w-12 h-12 bg-blue-500"></div>
            </div>`}
            renderPreview={(value) => (
              <div
                className={`grid grid-cols-3 gap-4 h-64 ${value} bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-4`}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-blue-500 rounded shadow-sm flex items-center justify-center text-white font-bold text-xs"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            )}
          />

          <InteractiveChallenge
            title="The Hero Grid"
            description="You are building a hero section with a 2x2 grid of partner logos. Currently, the logos are stuck in the top-left corner of the gray hero area. Use `place-content-center` to move the entire grid of logos to the dead center of the container."
            codeSnippet={`<div class="grid grid-cols-2 h-64 bg-slate-900 gap-4 {input}">
    <div class="logo-box">Logo 1</div>
    <div class="logo-box">Logo 2</div>
    <div class="logo-box">Logo 3</div>
    <div class="logo-box">Logo 4</div>
  </div>`}
            options={[
              "place-items-center",
              "justify-center",
              "content-center",
              "place-content-center",
            ]}
            correctOption="place-content-center"
            renderPreview={(userClass) => (
              <div className="w-full max-w-lg h-64 bg-slate-900 rounded-xl overflow-hidden relative">
                <div className="absolute top-2 left-2 text-[10px] text-slate-500 font-mono">
                  h-64 container
                </div>
                {/* The Grid Container */}
                <div
                  className={`grid grid-cols-2 gap-4 h-full p-4 ${userClass}`}
                >
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-white/50 border border-white/5"
                    >
                      L{i}
                    </div>
                  ))}
                </div>
                {/* Visual Helpers */}
                {userClass === "place-content-center" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[152px] h-[152px] border-2 border-green-500/30 rounded-xl"></div>
                  </div>
                )}
              </div>
            )}
          />
          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Centered Error Page"
              description="The easiest way to center a grid of error content (icon, text, button) in the middle of the screen."
              code={`<div class="grid h-screen place-content-center text-center gap-4">
  <div class="text-6xl">404</div>
  <h1 class="text-2xl font-bold">Page not found</h1>
  <button>Go Home</button>
</div>`}
            >
              <div className="h-48 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 grid place-content-center text-center gap-2">
                <div className="text-4xl">🚧</div>
                <h3 className="font-bold text-slate-700 dark:text-slate-200">
                  Coming Soon
                </h3>
                <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  Notify Me
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Spaced App Icons"
              description="Using `place-content-between` to push groups of icons to the edges of a container."
              code={`<div class="grid grid-cols-3 h-32 place-content-between">
  <div>A</div><div>B</div><div>C</div>
  
  <div>X</div><div>Y</div><div>Z</div>
</div>`}
            >
              <div className="h-32 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg grid grid-cols-3 gap-4 place-content-between">
                {[1, 2, 3].map((i) => (
                  <div
                    key={`top-${i}`}
                    className="h-8 bg-white dark:bg-slate-700 rounded shadow-sm"
                  ></div>
                ))}
                {[1, 2, 3].map((i) => (
                  <div
                    key={`bot-${i}`}
                    className="h-8 bg-blue-100 dark:bg-blue-900 rounded shadow-sm"
                  ></div>
                ))}
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using on Flexbox without Wrap",
                reason:
                  "`place-content` includes `align-content`, which only works in Flexbox if `flex-wrap: wrap` is present and there are multiple lines.",
                example: `<div class="flex place-content-center">...</div> `,
                level: "warning",
              },
              {
                title: "Confusing with Place Items",
                reason:
                  "`place-content` moves the WHOLE block of items. `place-items` aligns items INSIDE their specific grid cells.",
                example: `<div class="grid place-content-center"> `,
                level: "info",
              },
              {
                title: "No Container Height",
                reason:
                  "If the container height fits the content exactly, there is no extra space to 'place' the content into. The property will appear to do nothing.",
                example: `<div class="grid place-content-center h-auto">...</div> `,
                level: "critical",
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "The Ultimate Center:",
                text: "`grid place-content-center` is the modern, 2-property way to perfectly center everything (block + inline axes) in a container.",
              },
              {
                bold: "Gap Awareness:",
                text: "`place-content` respects your `gap` settings. It moves the items and their gaps as one cohesive unit.",
              },
              {
                bold: "Grid Tracks:",
                text: "Remember, this moves the Grid Tracks themselves inside the container, not just the HTML elements.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
