"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
  HEIGHT_HERO,
  HEIGHT_UTILITIES,
  HEIGHT_TIPS,
  HEIGHT_EXAMPLES,
  HEIGHT_PLAYGROUND,
} from "./data";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const heightCommonMistakes = [
  {
    title: "Using h-full without parent height",
    reason:
      "h-full requires the parent element to have an explicit height set, otherwise it won't work.",
    example: '<div class="h-full">Won\'t work</div> // Parent has no height',
    level: "critical" as const,
  },
  {
    title: "Fixed heights causing content overflow",
    reason:
      "Fixed heights can clip content when it exceeds the defined height without proper overflow handling.",
    example: '<div class="h-32">Very long content that gets clipped...</div>',
    level: "warning" as const,
  },
  {
    title: "Using h-screen for mobile",
    reason:
      "h-screen includes browser UI height on mobile, making content taller than the visible area.",
    example: '<div class="h-screen">Too tall on mobile due to browser UI</div>',
    level: "warning" as const,
  },
];

const heightMentalModel = {
  title: "Understanding Height in CSS",
  description:
    "Height utilities control the vertical dimension of elements, affecting layout flow and content behavior.",
  features: [
    "Height sets the content area height (excluding padding, border, margin)",
    "Block elements default to auto height based on content",
    "h-full requires parent to have explicit height",
    "h-screen uses 100vh which includes browser UI on mobile",
  ],
  layerAssignment:
    "Layout properties that affect element positioning and vertical space allocation",
  browserBehavior:
    "Browsers calculate height based on content, parent constraints, and viewport dimensions.",
};

const heightComparisonTable = {
  title: "Height Approaches Comparison",
  columns: ["Method", "Use Case", "Responsive", "Content Flow"],
  rows: [
    {
      feature: "Fixed (h-64)",
      values: [
        "Consistent sizing",
        "Requires breakpoints",
        "No",
        "May need overflow",
      ],
    },
    {
      feature: "Auto (h-auto)",
      values: ["Content-based", "Responsive to content", "Yes", "Natural flow"],
    },
    {
      feature: "Full (h-full)",
      values: ["Fill parent", "Depends on parent", "Yes", "Constrained"],
    },
    {
      feature: "Screen (h-screen)",
      values: [
        "Full viewport",
        "Viewport-relative",
        "Yes",
        "Fixed to viewport",
      ],
    },
  ],
};

export default function HeightPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero */}
          <PageHero {...HEIGHT_HERO} />

          {/* Mental Model */}
          <MentalModelSection {...heightMentalModel} />

          {/* Utilities */}
          <UtilityGrid title="Height utilities" items={HEIGHT_UTILITIES} />

          {/* Comparison Table */}
          <ComparisonTable {...heightComparisonTable} />

          {/* Playground */}
          <UtilityPlayground {...HEIGHT_PLAYGROUND} />

          <InteractiveChallenge
            title="The Underwhelming Hero"
            description="This 'Hero' banner is supposed to cover the entire viewport to make a bold first impression. Currently, it's set to `h-auto` (default), so it's only as tall as the text inside, which looks weak. Change the height to `h-full` (to fill the preview window) so it looks like a proper full-screen section."
            codeSnippet={`<div class="h-[400px] w-full overflow-hidden border rounded-xl">
  
  <div class="{input} w-full bg-slate-900 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
    
    <div class="absolute inset-0 bg-gradient-to-tr from-indigo-900/50 to-purple-900/50"></div>
    
    <div class="relative z-10">
      <h1 class="text-3xl font-bold text-white mb-4">Build Faster</h1>
      <p class="text-slate-300 mb-8 max-w-xs">The ultimate toolkit for developers.</p>
      <button class="bg-indigo-500 text-white px-6 py-2 rounded-full font-medium">Get Started</button>
    </div>

  </div>

  <div class="p-8 bg-white">
    <h2 class="font-bold text-slate-800">Features</h2>
    <p class="text-slate-500 text-sm mt-2">More content down here...</p>
  </div>
</div>`}
            options={["h-auto", "h-32", "h-full", "h-px"]}
            correctOption="h-full"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                {/* Simulated Viewport Container */}
                <div className="w-full max-w-sm h-[400px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-y-auto relative shadow-2xl no-scrollbar">
                  {/* Hero Section */}
                  <div
                    className={`
                      w-full bg-slate-900 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden transition-all duration-500
                      ${userClass}
                    `}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-800 via-slate-900 to-black opacity-80"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

                    <div className="relative z-10 animate-in fade-in zoom-in duration-700">
                      <h1 className="text-3xl font-black text-white mb-4 tracking-tight">
                        BUILD FASTER
                      </h1>
                      <p className="text-slate-300 mb-8 text-sm max-w-[200px] mx-auto leading-relaxed">
                        The ultimate toolkit for modern web developers.
                      </p>
                      <button className="bg-indigo-500 hover:bg-indigo-400 transition-colors text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-500/30">
                        Get Started
                      </button>
                    </div>

                    {/* Height Indicator */}
                    {userClass === "h-full" && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 h-4/5 w-px bg-indigo-500/50 flex items-center justify-center">
                        <div className="bg-indigo-500 text-white text-[10px] font-mono py-1 px-2 rounded rotate-90 whitespace-nowrap">
                          100% Height
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Following Content */}
                  <div className="p-8 bg-white dark:bg-slate-50">
                    <h2 className="font-bold text-slate-800 text-lg mb-2">
                      Features
                    </h2>
                    <div className="space-y-3">
                      <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded w-full"></div>
                      <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />

          {/* Common Mistakes */}
          <CommonMistakesSection
            title="❌ Common Height Mistakes"
            mistakes={heightCommonMistakes}
          />

          {/* Real World Examples */}
          <div data-testid="Real World Examples">
            <ExampleSection title="Real-World Examples">
              {HEIGHT_EXAMPLES.map((ex) => (
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
          <TipsSection tips={HEIGHT_TIPS} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
