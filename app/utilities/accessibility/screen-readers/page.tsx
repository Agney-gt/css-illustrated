"use client";

import React from "react";
import { PageHero } from "@/components/shared/page-hero";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function ScreenReadersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Screen Readers"
        description="Utilities for hiding content visually while keeping it accessible to screen readers. Essential for accessibility, allowing you to provide context to non-visual users without cluttering the UI."
      />

      <MentalModelSection
        title="The Invisible Layer"
        description="Think of your webpage as having two parallel experiences: the Visual Experience (what is seen) and the Auditory Experience (what is heard via screen reader). The `sr-only` utility allows you to inject information exclusively into the Auditory Experience without affecting the layout or appearance of the Visual Experience."
        features={[
          "Hides elements visually but keeps them in the DOM",
          "Ensures screen readers can still discover and read the content",
          "Crucial for icon-only buttons, skip links, and form labels",
          "Uses `clip` pattern to ensure zero visual footprint",
          "Can be toggled on focus (e.g., `focus:not-sr-only`)",
        ]}
        layerAssignment="Accessibility Layer - Enhances the semantic tree without painting pixels"
        browserBehavior="Applies absolute positioning, 1px dimensions, overflow hidden, and clipping to remove the element from the visual flow while keeping it readable by AT."
      />

      <ComparisonTable
        title="Hiding Techniques Compared"
        columns={["Method", "Visual", "Screen Reader", "Layout Space"]}
        rows={[
          {
            feature: "sr-only",
            values: ["Hidden", "Visible (Read)", "None (Removed from flow)"],
          },
          {
            feature: "display: none",
            values: ["Hidden", "Hidden (Ignored)", "None"],
          },
          {
            feature: "visibility: hidden",
            values: ["Hidden", "Hidden (Ignored)", "Preserved (Blank space)"],
          },
          {
            feature: "opacity-0",
            values: ["Hidden", "Visible (Read)", "Preserved (Blank space)"],
          },
        ]}
      />

      <UtilityGrid
        title="Screen Reader Utilities"
        items={[
          {
            cls: "sr-only",
            desc: "Hide visually but keep accessible to screen readers",
          },
          {
            cls: "not-sr-only",
            desc: "Undo sr-only (useful for focus states or breakpoints)",
          },
        ]}
      />

      {/* Interactive Playground */}
      <section className="space-y-4 border-t border-border pt-8">
        <h2 className="text-3xl font-bold">Interactive playground</h2>
        <p className="text-muted-foreground">
          Observe how `sr-only` differs from `opacity-0` or `invisible`. Notice
          how `sr-only` collapses the layout space, while others preserve it.
        </p>

        <UtilityPlayground
          title="Visibility Playground"
          description="Test different hiding utilities to see their effect on layout and visual appearance."
          options={["sr-only", "not-sr-only", "invisible", "opacity-0"]}
          defaultValue="sr-only"
          buildMarkup={(option) => {
            return `<div class="flex flex-col gap-2 border p-4">
  <div class="bg-slate-200 p-2">Item 1 (Visible)</div>
  
  <div class="bg-blue-500 text-white p-2 ${option}">
    Item 2 (${option})
  </div>

  <div class="bg-slate-200 p-2">Item 3 (Visible)</div>
</div>`;
          }}
          renderPreview={(option) => {
            return (
              <div className="w-64 border border-dashed border-slate-300 dark:border-slate-700 p-4 bg-white dark:bg-slate-900 rounded-lg">
                <div className="flex flex-col gap-2">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-center text-sm font-medium">
                    Item 1
                  </div>

                  <div
                    className={`bg-blue-500 text-white p-3 rounded text-center text-sm font-medium transition-all ${option}`}
                  >
                    Item 2 ({option})
                  </div>

                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded text-center text-sm font-medium">
                    Item 3
                  </div>
                </div>
              </div>
            );
          }}
        />
      </section>

      <InteractiveChallenge
        title="The Mystery Button"
        description="You have a search button represented only by a magnifying glass icon. A screen reader currently just announces 'Button' or nothing at all, confusing users. Add an `sr-only` span to give it a clear label of 'Search' without changing the design."
        codeSnippet={`<button class="p-2 bg-blue-600 rounded-full text-white">
        <svg class="w-5 h-5">...</svg> <span class="{input}">Search</span>
        </button>`}
        options={["hidden", "opacity-0", "sr-only", "block"]}
        correctOption="sr-only"
        renderPreview={(userClass) => {
          // Simulate Screen Reader Output logic
          let srOutput = "Button"; // Default for unlabeled button
          let visualState = "Icon Only";

          if (userClass === "sr-only") {
            srOutput = "Button: 'Search'";
            visualState = "Icon Only (Correct)";
          } else if (userClass === "block") {
            srOutput = "Button: 'Search'";
            visualState = "Icon + Text (Design Broken)";
          } else if (userClass === "hidden") {
            srOutput = "Button"; // Hidden text is ignored
            visualState = "Icon Only";
          } else if (userClass === "opacity-0") {
            srOutput = "Button: 'Search'"; // Opacity 0 is read
            visualState = "Icon + Invisible Gap (Layout Broken)";
          }

          return (
            <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg gap-8">
              {/* Visual Preview */}
              <div className="text-center">
                <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                  Visual View
                </p>
                <div className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                  <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 transition-all">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <span
                      className={userClass === "hidden" ? "hidden" : userClass}
                    >
                      Search
                    </span>
                  </button>
                </div>
              </div>

              {/* Simulated SR Output */}
              <div className="w-full max-w-xs">
                <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                  Screen Reader Output
                </p>
                <div
                  className={`p-4 rounded-lg font-mono text-sm border-l-4 shadow-sm transition-all ${
                    userClass === "sr-only"
                      ? "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300"
                      : "bg-slate-100 dark:bg-slate-800 border-slate-400 text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <span className="opacity-50">VoiceOver: </span>
                  &quot;{srOutput}&quot;
                </div>
              </div>
            </div>
          );
        }}
      />
      
      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Skip to Content Link"
          description="A link hidden by default that becomes visible when focused via keyboard. Essential for power users to skip navigation."
          code={`<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-blue-600 focus:shadow-lg focus:rounded-md">
  Skip to main content
</a>`}
        >
          <div className="relative h-20 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 flex items-center justify-center group">
            <p className="text-sm text-slate-400">
              Focus inside here and press Tab
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="sr-only focus:not-sr-only absolute top-4 left-4 z-10 px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow-xl transition-all outline-none ring-2 ring-white"
            >
              Skip to content
            </a>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Visually Hidden Form Label"
          description="When a visual design (like a newsletter input) implies the label, use `sr-only` to keep it accessible without clutter."
          code={`<form class="flex gap-2">
  <label for="email" class="sr-only">Email Address</label>
  <input id="email" type="email" placeholder="Enter your email..." class="px-4 py-2 rounded border" />
  <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">Subscribe</button>
</form>`}
        >
          <div className="flex gap-2 max-w-sm">
            <label htmlFor="demo-email" className="sr-only">
              Email Address
            </label>
            <input
              id="demo-email"
              type="email"
              placeholder="Enter your email..."
              className="flex-1 px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
              Subscribe
            </button>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Icon-Only Action Button"
          description="Providing a text alternative for an icon button (e.g., Close Modal)."
          code={`<button class="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
  <span class="sr-only">Close menu</span>
  <svg class="w-6 h-6">...</svg> </button>`}
        >
          <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="sr-only">Close menu</span>
            <svg
              className="w-6 h-6"
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
          </button>
        </ExampleCard>

        <ExampleCard
          title="Live Region Status"
          description="Announcing dynamic changes (like form submission success) to screen readers without requiring focus movement."
          code={`<div role="status" aria-live="polite" class="sr-only">
  Settings saved successfully.
</div>`}
        >
          <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900 rounded-md">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Visual Status: Saved</span>
            </div>
            {/* The sr-only element below would be announced by the screen reader */}
            <div className="sr-only">Settings saved successfully.</div>
          </div>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Hiding Focusable Elements Forever",
            reason:
              "If you hide a link with `sr-only` but don't add `focus:not-sr-only`, keyboard users will focus on an invisible element, which is very confusing.",
            example: `<a class="sr-only">Skip Link (Bad)</a>`,
            level: "critical",
          },
          {
            title: "Using display:none for Accessibility",
            reason:
              "Using `hidden` (display: none) removes the element from the accessibility tree entirely. Screen readers will NOT read it.",
            example: `<span class="hidden">Description (Ignored)</span>`,
            level: "critical",
          },
          {
            title: "Overusing sr-only",
            reason:
              "Don't hide content that would be useful for everyone. If an instruction is helpful, make it visible.",
            example: `<p class="sr-only">Password must be 8 chars...</p>`,
            level: "warning",
          },
        ]}
      />

      <TipsSection
        tips={[
          {
            bold: "Skip Links:",
            text: "Always use `sr-only focus:not-sr-only` for 'Skip to content' links to help keyboard users bypass navigation menus.",
          },
          {
            bold: "Testing:",
            text: "Use VoiceOver (Mac) or NVDA (Windows) to verify that your `sr-only` content is actually being read in the correct context.",
          },
          {
            bold: "Charts & Graphs:",
            text: "Use `sr-only` to provide a table or text summary of complex data visualizations.",
          },
        ]}
      />
    </div>
  );
}
