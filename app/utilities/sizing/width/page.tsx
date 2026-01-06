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
  WIDTH_HERO,
  WIDTH_UTILITIES,
  WIDTH_TIPS,
  WIDTH_EXAMPLES,
  WIDTH_PLAYGROUND,
} from "./data";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const widthCommonMistakes = [
  {
    title: "Using fixed widths on responsive layouts",
    reason:
      "Fixed widths don't adapt to different screen sizes and can cause overflow or unwanted whitespace.",
    example: '<div class="w-96">...</div> // Breaks on mobile',
    level: "critical" as const,
  },
  {
    title: "Not considering content overflow",
    reason:
      "Fixed width containers can clip content when it exceeds the defined width.",
    example: '<div class="w-32">Very long text that will overflow...</div>',
    level: "warning" as const,
  },
  {
    title: "Mixing width with padding incorrectly",
    reason:
      "Adding padding to an element with w-full makes it wider than its container due to the box model.",
    example: '<div class="w-full p-4">...</div> // Total width = 100% + 32px',
    level: "warning" as const,
  },
];

const widthMentalModel = {
  title: "Understanding Width in CSS",
  description:
    "Width utilities control the horizontal dimension of elements, affecting layout flow and content behavior.",
  features: [
    "Width sets the content area width (excluding padding, border, margin)",
    "Block elements default to 100% of parent width",
    "Inline elements ignore width unless changed to inline-block or block",
    "Percentage widths are calculated relative to the containing block",
  ],
  layerAssignment:
    "Layout properties that affect element positioning and space allocation",
  browserBehavior:
    "Browsers apply width based on the CSS box model and available horizontal space in the layout context.",
};

const widthComparisonTable = {
  title: "Width Approaches Comparison",
  columns: ["Method", "Use Case", "Responsive", "Content Adapt"],
  rows: [
    {
      feature: "Fixed (w-48)",
      values: [
        "Consistent sizing",
        "Requires breakpoints",
        "No",
        "May overflow",
      ],
    },
    {
      feature: "Fractional (w-1/2)",
      values: [
        "Relative layout",
        "Inherently responsive",
        "Yes",
        "Adapts with container",
      ],
    },
    {
      feature: "Full (w-full)",
      values: [
        "Fill container",
        "Responsive by default",
        "Yes",
        "Grows with container",
      ],
    },
    {
      feature: "Auto (w-auto)",
      values: ["Content-based", "Responsive to content", "Yes", "Perfect fit"],
    },
  ],
};

export default function WidthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero */}
          <PageHero {...WIDTH_HERO} />

          {/* Mental Model */}
          <MentalModelSection {...widthMentalModel} />

          {/* Utilities */}
          <UtilityGrid title="Width utilities" items={WIDTH_UTILITIES} />

          {/* Comparison Table */}
          <ComparisonTable {...widthComparisonTable} />

          {/* Playground */}
          <UtilityPlayground {...WIDTH_PLAYGROUND} />

          <InteractiveChallenge
            title="The Cramped Input"
            description="This newsletter signup form looks broken. The email input has a fixed width (`w-40`), leaving a huge empty gap in the card. Change the input's width to `w-full` so it stretches to fill the available space, making the form look professional."
            codeSnippet={`<div class="max-w-sm w-full bg-white p-6 rounded-xl shadow-lg border">
  <h3 class="font-bold text-lg mb-1">Newsletter</h3>
  <p class="text-slate-500 text-sm mb-4">Stay updated with our latest news.</p>
  
  <div class="flex flex-col gap-3">
    <label class="text-xs font-bold text-slate-700 uppercase">Email Address</label>
    
    <input 
      type="email" 
      class="{input} border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
      placeholder="you@example.com" 
    />
    
    <button class="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
      Subscribe
    </button>
  </div>
</div>`}
            options={["w-40", "w-1/2", "w-auto", "w-full"]}
            correctOption="w-full"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="max-w-sm w-full bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800">
                  <h3 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">
                    Newsletter
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Stay updated with our latest news.
                  </p>

                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                      Email Address
                    </label>

                    <div className="relative">
                      <input
                        type="email"
                        className={`
                          border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50 dark:bg-slate-800 transition-all
                          ${userClass}
                        `}
                        placeholder="you@example.com"
                        readOnly
                      />
                      {/* Visual Guide for Empty Space */}
                      {userClass !== "w-full" && (
                        <div className="absolute top-0 right-0 bottom-0 left-[11rem] bg-red-500/10 border border-red-500/30 border-dashed rounded flex items-center justify-center">
                          <span className="text-[10px] text-red-500 font-medium">
                            Wasted Space
                          </span>
                        </div>
                      )}
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 shadow-md transition-colors mt-2">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            )}
          />

          {/* Common Mistakes */}
          <CommonMistakesSection
            title="❌ Common Width Mistakes"
            mistakes={widthCommonMistakes}
          />

          {/* Real World Examples */}
          <div data-testid="Real World Examples">
            <ExampleSection title="Real-World Examples">
              {WIDTH_EXAMPLES.map((ex) => (
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
          <TipsSection tips={WIDTH_TIPS} />
        </div>
      </main>

    </div>
  );
}
