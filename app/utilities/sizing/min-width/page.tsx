"use client";
import React from "react";

import { UtilityGrid } from "@/components/shared/utility-grid";
import { TipsSection } from "@/components/shared/tips-section";
import { PageHero } from "@/components/shared/page-hero";
import {
  ExampleCard,
  ExampleSection,
} from "@/components/shared/example-section";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import {
  MIN_WIDTH_HERO,
  MIN_WIDTH_UTILITIES,
  MIN_WIDTH_TIPS,
  MIN_WIDTH_EXAMPLES,
  MIN_WIDTH_PLAYGROUND,
} from "./data";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const minWidthCommonMistakes = [
  {
    title: "Not using min-w-0 in flex containers",
    reason:
      "Flex items have min-width: auto by default, preventing them from shrinking smaller than their content.",
    example:
      '<div class="flex"><div class="flex-1">Long text...</div></div> // Won\'t shrink',
    level: "critical" as const,
  },
  {
    title: "Setting min-width larger than available space",
    reason:
      "When min-width exceeds available space, it causes overflow or breaks responsive layouts.",
    example:
      '<div class="min-w-screen w-full">...</div> // Always causes overflow',
    level: "warning" as const,
  },
  {
    title: "Confusing min-width with width",
    reason:
      "min-width sets a lower bound, not the actual width. Elements can still grow larger.",
    example: '<div class="min-w-48 w-full">...</div> // Width = full, min = 48',
    level: "info" as const,
  },
];

const minWidthMentalModel = {
  title: "Understanding Min-Width in CSS",
  description:
    "Min-width utilities establish a lower boundary for element width, preventing excessive shrinking while allowing growth.",
  features: [
    "Sets minimum width constraint but allows growth",
    "Flex items default to min-width: auto",
    "Prevents content from becoming unreadable",
    "Works with width, max-width, and responsive prefixes",
  ],
  layerAssignment:
    "Constraint-based layout properties that define minimum space requirements",
  browserBehavior:
    "Browsers enforce minimum width during layout calculations and flex/grid distribution.",
};

const minWidthComparisonTable = {
  title: "Width Constraints Comparison",
  columns: ["Property", "Behavior", "Use Case", "Typical Values"],
  rows: [
    {
      feature: "width",
      values: [
        "Fixed size",
        "Consistent dimensions",
        "w-48, w-64",
        "Pixels, rem, %",
      ],
    },
    {
      feature: "min-width",
      values: [
        "Minimum boundary",
        "Prevents shrinking",
        "min-w-48, min-w-0",
        "Same as width",
      ],
    },
    {
      feature: "max-width",
      values: [
        "Maximum boundary",
        "Prevents overflow",
        "max-w-xl, max-w-full",
        "Same as width",
      ],
    },
    {
      feature: "Combined",
      values: [
        "Range constraint",
        "Flexible but bounded",
        "min-w-32 max-w-64",
        "All of above",
      ],
    },
  ],
};

export default function MinWidthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero */}
          <PageHero {...MIN_WIDTH_HERO} />

          {/* Mental Model */}
          <MentalModelSection {...minWidthMentalModel} />

          {/* Utilities */}
          <UtilityGrid
            title="Min-width utilities"
            items={MIN_WIDTH_UTILITIES}
          />

          {/* Comparison Table */}
          <ComparisonTable {...minWidthComparisonTable} />

          {/* Playground */}
          <UtilityPlayground {...MIN_WIDTH_PLAYGROUND} />

          <InteractiveChallenge
            title="The Crushed Sidebar"
            description="This layout has a sidebar and a main content area. When the container gets narrow (like on a tablet), Flexbox squishes the sidebar into a tiny, unusable strip. Apply `min-w-[150px]` to the sidebar to ensure it never gets smaller than 150px, forcing the main content to shrink instead."
            codeSnippet={`<div class="flex w-full h-48 border rounded-xl overflow-hidden bg-slate-100">
  
  <aside class="{input} w-1/4 bg-slate-800 text-slate-300 p-4">
    <div class="font-bold mb-4">Menu</div>
    <div class="space-y-2">
      <div class="h-2 w-full bg-slate-600 rounded"></div>
      <div class="h-2 w-3/4 bg-slate-600 rounded"></div>
    </div>
  </aside>

  <main class="flex-1 bg-white p-4">
    <h1 class="font-bold text-lg">Dashboard</h1>
    <p class="text-sm text-slate-500">Welcome back!</p>
  </main>

</div>`}
            options={["min-w-0", "min-w-[150px]", "w-full", "min-w-full"]}
            correctOption="min-w-[150px]"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                {/* Simulated Narrow Viewport */}
                <div className="w-[300px] h-56 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden relative flex resize-x">
                  {/* Sidebar */}
                  <aside
                    className={`
                      w-1/4 bg-slate-800 text-slate-300 p-4 flex-shrink transition-all duration-300
                      ${userClass}
                    `}
                  >
                    <div className="font-bold mb-4 text-sm">Menu</div>
                    <div className="space-y-2 opacity-50">
                      <div className="h-2 w-full bg-slate-500 rounded"></div>
                      <div className="h-2 w-3/4 bg-slate-500 rounded"></div>
                      <div className="h-2 w-5/6 bg-slate-500 rounded"></div>
                    </div>
                  </aside>

                  {/* Main Content */}
                  <main className="flex-1 bg-white dark:bg-slate-50 p-4 overflow-hidden">
                    <h1 className="font-bold text-slate-800 text-sm mb-2">
                      Dashboard
                    </h1>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      This is the main content area. It should shrink to
                      accommodate the sidebar.
                    </p>
                    <div className="mt-4 h-20 bg-blue-50 rounded border border-blue-100"></div>
                  </main>

                  {/* Visualizer */}
                  {userClass !== "min-w-[150px]" && (
                    <div className="absolute top-1/2 left-2 text-xs text-red-400 font-bold -rotate-90 origin-left whitespace-nowrap animate-pulse">
                      ⚠️ Squished!
                    </div>
                  )}
                  {userClass === "min-w-[150px]" && (
                    <div className="absolute bottom-2 left-2 text-[10px] text-green-400 font-mono bg-slate-900/50 px-1 rounded">
                      Min: 150px
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          {/* Common Mistakes */}
          <CommonMistakesSection
            title="❌ Common Min-Width Mistakes"
            mistakes={minWidthCommonMistakes}
          />

          {/* Real World Examples */}
          <div data-testid="Real World Examples">
            <ExampleSection title="Real-World Examples">
              {MIN_WIDTH_EXAMPLES.map((ex) => (
                <ExampleCard
                  key={ex.title}
                  title={ex.title}
                  description={ex.description}
                  code={ex.code}
                >
                  {ex.preview}
                </ExampleCard>
              ))}
            </ExampleSection>
          </div>

          {/* Tips */}
          <TipsSection tips={MIN_WIDTH_TIPS} />
        </div>
      </main>

    </div>
  );
}
