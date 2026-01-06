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

export default function TextColorPage() {
  const utilityItems = [
    { cls: "text-slate-500", desc: "Secondary text" },
    { cls: "text-blue-600", desc: "Primary brand color" },
    { cls: "text-red-600", desc: "Error/Destructive" },
    { cls: "text-green-600", desc: "Success/Positive" },
    { cls: "text-white", desc: "White text (for dark bg)" },
    { cls: "text-transparent", desc: "Transparent (for gradients)" },
    { cls: "text-current", desc: "Inherit parent color" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Text Color"
            description="Control the foreground color of your content. From headings and paragraphs to links and icons, text color utilities are the primary way to establish hierarchy and readability."
          />

          <MentalModelSection
            title="The Foreground Brush"
            description="Text color utilities set the CSS `color` property. This affects not just the text characters, but also text decorations (like underlines) and often SVGs that use `currentColor`. Unlike background colors, text colors cascade down the DOM tree—if you set a color on a parent, all children inherit it unless overridden."
            features={[
              "Controls the color of text, underlines, and bullets",
              "Cascades to child elements (Inheritance)",
              "Affects SVGs using `fill='currentColor'`",
              "Supports opacity modifiers (e.g., `text-blue-500/50`)",
              "Critical for legibility and accessibility compliance",
            ]}
            layerAssignment="Content Layer - Directly paints the glyphs and vector paths"
            browserBehavior="Sets the `color` property. Child elements inherit this value unless they have their own color defined."
          />

          <ComparisonTable
            title="Color Utility Roles"
            columns={["Property", "Target Area", "Inheritance", "Typical Use"]}
            rows={[
              {
                feature: "text-{color}",
                values: [
                  "Foreground (Glyphs)",
                  "Yes (Cascades)",
                  "Reading content, Icons",
                ],
              },
              {
                feature: "bg-{color}",
                values: [
                  "Background (Canvas)",
                  "No",
                  "Cards, Buttons, Sections",
                ],
              },
              {
                feature: "border-{color}",
                values: ["Border Stroke", "No", "Dividers, Inputs, Outlines"],
              },
            ]}
          />

          <UtilityGrid
            title="Common Text Utilities"
            items={utilityItems}
            prefix=""
          />

          <UtilityPlayground
            title="Text Color Playground"
            description="Experiment with different text colors and opacities. Notice how `text-current` behaves differently depending on the parent."
            options={[
              "text-slate-900",
              "text-slate-500",
              "text-blue-600",
              "text-sky-400",
              "text-indigo-500",
              "text-rose-500",
              "text-emerald-600",
              "text-transparent",
            ]}
            defaultValue="text-blue-600"
            buildMarkup={(
              value
            ) => `<div class="${value} font-bold text-xl text-center">
  The quick brown fox
  </div>`}
            renderPreview={(value) => (
              <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg max-w-sm w-full shadow-sm">
                <p className={`${value} font-bold text-2xl text-center`}>
                  The quick brown fox
                </p>
                {value === "text-transparent" && (
                  <p className="text-xs text-center text-slate-400 mt-2">
                    (Text is there, just transparent!)
                  </p>
                )}
              </div>
            )}
          />

          <InteractiveChallenge
            title="The Invisible Link"
            description="You have a dark blue alert box. The default link color is also blue, making the 'Undo' action nearly impossible to read against the background. Fix the contrast by changing the link's color to `text-white`."
            codeSnippet={`<div class="bg-blue-600 p-4 rounded-lg shadow-sm text-white flex justify-between">
          <span>Message deleted.</span>
          
          <button class="font-bold underline {input}">
          Undo
          </button>
          </div>`}
            options={[
              "text-blue-600",
              "text-black",
              "text-white",
              "text-gray-500",
            ]}
            correctOption="text-white"
            renderPreview={(userClass) => (
              <div className="w-full max-w-md p-8 bg-slate-100 dark:bg-slate-950 rounded-xl">
                <div className="bg-blue-600 p-4 rounded-lg shadow-md flex items-center justify-between">
                  <span className="text-white font-medium">
                    Message deleted.
                  </span>

                  <button
                    className={`font-bold underline text-sm transition-colors ${userClass}`}
                    onClick={(e) => e.preventDefault()}
                  >
                    Undo
                  </button>
                </div>

                <div className="mt-4 text-center text-sm text-slate-500">
                  {userClass === "text-white" ? (
                    <span className="text-green-600 font-bold flex items-center justify-center gap-2">
                      ✅ Readable & Accessible!
                    </span>
                  ) : (
                    <span className="text-red-500 font-medium">
                      ❌ Hard to read (Low Contrast)
                    </span>
                  )}
                </div>
              </div>
            )}
          />
          <ExampleSection title="Real-World Patterns">
            <ExampleCard
              title="Content Hierarchy"
              description="Using different shades of gray to establish visual hierarchy between headings, body text, and captions."
              code={`<div>
  <h1 class="text-slate-900 text-2xl font-bold">Project Omega</h1>
  <p class="text-slate-600 mt-2">A revolutionary new approach...</p>
  <span class="text-slate-400 text-sm">Last updated: Today</span>
</div>`}
            >
              <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <h1 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                  Project Omega
                </h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                  A revolutionary new approach to distributed systems
                  architecture, focused on resilience and speed.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-400 dark:text-slate-500 text-xs font-medium uppercase tracking-wide">
                    Last updated: 2 hours ago
                  </span>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Gradient Text"
              description="Using `text-transparent` combined with `bg-clip-text` to create stunning gradient text effects."
              code={`<h1 class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-extrabold text-4xl">
  Supercharged
</h1>`}
            >
              <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center justify-center">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-extrabold text-4xl tracking-tight">
                  Supercharged
                </h1>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Status Text"
              description="Semantic colors for feedback states like success, error, and warnings."
              code={`<ul class="space-y-2">
  <li class="text-green-600">✓ System operational</li>
  <li class="text-amber-500">⚠ High latency detected</li>
  <li class="text-red-600">✕ Database connection failed</li>
</ul>`}
            >
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 text-sm font-medium">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  System operational
                </div>
                <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 mb-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  High latency detected
                </div>
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Database connection failed
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            mistakes={[
              {
                title: "Low Contrast Ratios",
                reason:
                  "Using light gray text on a white background often fails WCAG accessibility standards. Aim for `text-slate-500` or darker on white.",
                example: `<p class="text-slate-300">Can you read me?</p> `,
                level: "critical",
              },
              {
                title: "Overriding with Specificity",
                reason:
                  "If a child element has a specific text color, setting a color on the parent won't override it. You must remove the child's class.",
                example: `<div class="text-red-500">
  <p class="text-blue-500">I stay blue!</p>
</div>`,
                level: "info",
              },
              {
                title: "Ignoring Dark Mode",
                reason:
                  "Hardcoded dark text (`text-gray-900`) will disappear on a dark mode background. Use `dark:text-white` modifiers.",
                example: `<p class="text-slate-900">Invisible in dark mode</p>`,
                level: "warning",
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Hover States:",
                text: "Add interactivity easily with hover modifiers: `text-slate-500 hover:text-blue-600`.",
              },
              {
                bold: "Text Current:",
                text: "Use `text-current` on an SVG icon so it automatically matches the text color of its parent button or link.",
              },
              {
                bold: "Design System:",
                text: "Stick to your theme's palette (e.g., `text-primary`, `text-muted`) rather than arbitrary hex values for consistency.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
