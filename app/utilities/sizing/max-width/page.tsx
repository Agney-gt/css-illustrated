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
  MAX_WIDTH_HERO,
  MAX_WIDTH_UTILITIES,
  MAX_WIDTH_TIPS,
  MAX_WIDTH_PLAYGROUND,
  MAX_WIDTH_EXAMPLES,
} from "./data";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const maxWidthCommonMistakes = [
  {
    title: "Not using max-width for readability",
    reason:
      "Unconstrained text on large screens creates very long lines that are difficult to read.",
    example:
      '<div class="w-full">Very long text line that spans the entire screen width...</div>',
    level: "warning" as const,
  },
  {
    title: "Using max-width on flex items incorrectly",
    reason:
      "max-width on flex items can prevent them from growing to fill available space.",
    example:
      '<div class="flex"><div class="flex-1 max-w-sm">Won\'t grow</div></div>',
    level: "info" as const,
  },
  {
    title: "Forgetting mx-auto for centering",
    reason:
      "max-width constrains size but doesn't center elements without explicit centering.",
    example: '<div class="max-w-md">Left-aligned content</div> // Not centered',
    level: "info" as const,
  },
];

const maxWidthMentalModel = {
  title: "Understanding Max-Width in CSS",
  description:
    "Max-width utilities establish an upper boundary for element width, preventing excessive growth while allowing natural shrinking.",
  features: [
    "Sets maximum width constraint but allows shrinking",
    "Improves readability by limiting line length",
    "Works naturally with responsive design",
    "Often paired with mx-auto for centering",
  ],
  layerAssignment:
    "Constraint-based layout properties that define maximum space boundaries",
  browserBehavior:
    "Browsers limit element growth during layout calculations when content exceeds max-width.",
};

const maxWidthComparisonTable = {
  title: "Width Constraint Strategies",
  columns: ["Approach", "Behavior", "Best For", "Responsive"],
  rows: [
    {
      feature: "max-w-prose",
      values: [
        "Optimal reading",
        "Articles, blog posts",
        "Text content",
        "Natural",
      ],
    },
    {
      feature: "max-w-md/lg/xl",
      values: ["Fixed maxima", "Forms, cards", "Components", "Adaptive"],
    },
    {
      feature: "max-w-full",
      values: ["Container limit", "Responsive images", "Media", "Fluid"],
    },
    {
      feature: "max-w-none",
      values: ["No limit", "Full-width banners", "Hero sections", "Explicit"],
    },
  ],
};

export default function MaxWidthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero */}
          <PageHero {...MAX_WIDTH_HERO} />

          {/* Mental Model */}
          <MentalModelSection {...maxWidthMentalModel} />

          {/* Utilities */}
          <UtilityGrid
            title="Max-width utilities"
            items={MAX_WIDTH_UTILITIES}
          />

          {/* Comparison Table */}
          <ComparisonTable {...maxWidthComparisonTable} />

          {/* Playground */}
          <UtilityPlayground {...MAX_WIDTH_PLAYGROUND} />

          <InteractiveChallenge
            title="The Unreadable Novel"
            description="This blog post is using `w-full` on a wide container. The lines of text are way too long, making it exhausting to read. Change the container class to `max-w-prose` (optimized for readability) and center it with `mx-auto` to fix the layout."
            codeSnippet={`<div class="bg-white p-8 rounded-xl shadow-sm border">
  <h1 class="text-2xl font-bold mb-4">The History of the Web</h1>
  
  <article class="{input} text-slate-600 space-y-4">
    <p>
      In the beginning, the web was simple. It consisted mostly of text documents linked together by hyperlinks. Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN.
    </p>
    <p>
      As browsers evolved, we gained the ability to style content with CSS, add interactivity with JavaScript, and eventually build complex applications that run entirely in the browser.
    </p>
  </article>
</div>`}
            options={[
              "w-full",
              "max-w-prose mx-auto",
              "max-w-xs mx-auto",
              "w-1/2",
            ]}
            correctOption="max-w-prose mx-auto"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
                <div className="w-full bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 h-[300px] overflow-y-auto custom-scrollbar">
                  <h1 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">
                    The History of the Web
                  </h1>

                  <article
                    className={`text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed transition-all duration-500 ${userClass}`}
                  >
                    <p>
                      In the beginning, the web was simple. It consisted mostly
                      of text documents linked together by hyperlinks. Tim
                      Berners-Lee invented the World Wide Web in 1989 while
                      working at CERN. The first website was hosted on
                      Berners-Lee's NeXT computer.
                    </p>
                    <p>
                      As browsers evolved, we gained the ability to style
                      content with CSS, add interactivity with JavaScript, and
                      eventually build complex applications that run entirely in
                      the browser. Today, the modern web is a platform for
                      everything from social networking to banking.
                    </p>
                    <p>
                      One fundamental principle of web design remains constant:
                      readability. If lines of text are too long, the reader's
                      eye struggles to track back to the start of the next line.
                      Constraining width is key.
                    </p>
                  </article>

                  {/* Visual Guide for Readability */}
                  {userClass === "max-w-prose mx-auto" && (
                    <div className="mt-8 flex justify-center">
                      <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full border border-green-200 animate-in fade-in zoom-in">
                        ✅ Optimal Line Length (~65ch)
                      </div>
                    </div>
                  )}
                  {userClass === "w-full" && (
                    <div className="mt-8 flex justify-center opacity-50">
                      <div className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full border border-red-200">
                        ❌ Lines are too long to scan comfortably
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          {/* Common Mistakes */}
          <CommonMistakesSection
            title="❌ Common Max-Width Mistakes"
            mistakes={maxWidthCommonMistakes}
          />

          {/* Real World Examples */}
          <div data-testid="Real World Examples">
            <ExampleSection title="Real-World Examples">
              {MAX_WIDTH_EXAMPLES.map((ex) => (
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
          <TipsSection tips={MAX_WIDTH_TIPS} />
        </div>
      </main>

    </div>
  );
}
