"use client";

import React, { useState } from "react";
import ClassGrid from "@/app/utilities/components/class-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { TipsSection, TipItem } from "@/components/shared/tips-section";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function GridAutoRowsPage() {
  const utilities = [
    {
      class: "auto-rows-min",
      description: "Implicit rows sized to min-content",
    },
    {
      class: "auto-rows-max",
      description: "Implicit rows sized to max-content",
    },
    {
      class: "auto-rows-fr",
      description: "Implicit rows sized using fr units",
    },
    { class: "auto-rows-auto", description: "Implicit rows sized by auto" },
  ];

  // Mental Model for Grid Auto Rows
  const mentalModel = {
    title: "Mental Model: Implicit Grid Tracks",
    description:
      "Grid auto-rows control the height of rows you don't explicitly define. Think of them as 'default row heights' for overflow content.",
    features: [
      "Implicit tracks are created when items exceed explicit grid definition",
      "auto-rows-min: each row sized to its smallest content (min-content)",
      "auto-rows-max: each row sized to its largest content (max-content)",
      "auto-rows-fr: rows share remaining available height as fractions",
      "auto-rows-auto: browser's default auto sizing algorithm",
    ],
    layerAssignment:
      "Layout layer - controls track sizing within CSS Grid coordinate system",
    browserBehavior:
      "Implicit tracks follow minmax(auto, min-content) by default. auto-rows-* overrides this algorithm for all implicit rows.",
  };

  // Common Mistakes
  const commonMistakes = [
    {
      title: "Using auto-rows-fr without container height",
      reason:
        "Fractional units need available space to distribute. Without height, rows collapse to zero.",
      example: `<div class="grid auto-rows-fr">
  <div>Row 1</div>
  <div>Row 2</div>
</div>`,
      level: "critical" as const,
    },
    {
      title: "Expecting auto-rows to affect explicit rows",
      reason:
        "auto-rows-* only controls implicit tracks. Explicit grid-template-rows take precedence.",
      example: `<div class="grid grid-rows-[100px] auto-rows-fr">
  <div>This row stays 100px (explicit)</div>
  <div>This row gets fr sizing (implicit)</div>
</div>`,
      level: "warning" as const,
    },
    {
      title: "Mixing content-based and fraction-based auto-rows",
      reason:
        "auto-rows-min/max adapt to content, auto-rows-fr ignores content height. Choose one behavior per grid.",
      example: `<div class="grid auto-rows-min auto-rows-fr">
  <!-- Only the last auto-rows-* value applies -->
</div>`,
      level: "warning" as const,
    },
    {
      title: "Forgetting grid-flow direction",
      reason:
        "auto-rows work with grid-flow-row (default). grid-flow-column creates implicit columns instead.",
      example: `<div class="grid grid-flow-col auto-rows-min">
  <!-- This creates implicit columns, not rows -->
</div>`,
      level: "info" as const,
    },
  ];

  // Comparison Table
  const comparisonData = {
    title: "Auto Rows Variants Comparison",
    columns: ["Variant", "Sizing Algorithm", "Use Case", "Height Constraint"],
    rows: [
      {
        feature: "auto-rows-min",
        values: [
          "min-content",
          "Dynamic content",
          "Feeds, lists, chat",
          "Content-driven",
        ],
      },
      {
        feature: "auto-rows-max",
        values: [
          "max-content",
          "Largest content in row",
          "Mixed content grids",
          "Content-driven",
        ],
      },
      {
        feature: "auto-rows-fr",
        values: [
          "fractional units",
          "Equal height distribution",
          "Split layouts",
          "Container-driven",
        ],
      },
      {
        feature: "auto-rows-auto",
        values: [
          "auto algorithm",
          "Browser default",
          "Fallback behavior",
          "Content + container",
        ],
      },
    ],
  };

  // Utility Playground Configuration
  const playgroundConfig = {
    title: "Interactive Playground",
    description:
      "Explore how different auto-rows values affect implicit grid track sizing.",
    options: [
      "auto-rows-min",
      "auto-rows-max",
      "auto-rows-fr",
      "auto-rows-auto",
    ],
    defaultValue: "auto-rows-min",
    buildMarkup: (value: string, customClasses?: string) => {
      const gap = customClasses?.match(/gap-\w+/)?.[0] || "gap-4";
      const height = customClasses?.match(/h-\w+/)?.[0] || "h-auto";

      return `<div class="grid grid-flow-row ${value} ${gap} ${height}">
  <!-- implicit rows created as you add items -->
  <div class="p-3 bg-slate-700 rounded text-white">Item</div>
  <div class="p-3 bg-slate-700 rounded text-white">Item with more content</div>
  <div class="p-3 bg-slate-700 rounded text-white">Short</div>
</div>`;
    },
    renderPreview: (value: string, customClasses?: string) => {
      const gap = customClasses?.match(/gap-\w+/)?.[0] || "gap-4";
      const height = customClasses?.match(/h-\w+/)?.[0] || "h-64";

      return (
        <div className={`grid grid-flow-row ${value} ${gap} ${height}`}>
          <div className="p-3 bg-slate-700 rounded text-white">Short</div>
          <div className="p-3 bg-slate-700 rounded text-white">
            Item with more content that demonstrates row sizing
          </div>
          <div className="p-3 bg-slate-700 rounded text-white">Medium</div>
          <div className="p-3 bg-slate-700 rounded text-white">Very short</div>
          <div className="p-3 bg-slate-700 rounded text-white">
            Another item with variable content length
          </div>
        </div>
      );
    },
    optionLabel: (v: string) => v.replace("auto-rows-", ""),
    enableCodeEditor: true,
    defaultCustomClasses: "gap-4 h-64",
  };

  // Real World Examples Configuration
  const realWorldExamples = (
    <ExampleSection title="Real-World Examples">
      {/* Vertical news feed */}
      <ExampleCard
        title="Vertical news feed (auto-rows-min)"
        copyText={`<div class="grid grid-flow-row auto-rows-min gap-3">...</div>`}
        code={`<div class="grid grid-flow-row auto-rows-min gap-3">
  <article>Short headline</article>
  <article>Longer story with details</article>
</div>`}
        description={
          <>
            Use <code className="bg-slate-700 px-1 rounded">auto-rows-min</code>{" "}
            for feeds where each item should take only its required height.
            Perfect for news feeds, activity logs, and message threads.
          </>
        }
      >
        <div className="bg-slate-800 rounded p-3 h-48 overflow-auto">
          <div className="grid grid-flow-row auto-rows-min gap-2">
            <article className="p-2 bg-slate-700 rounded text-slate-200 text-sm">
              <div className="font-semibold">Breaking: Update Released</div>
              <div className="text-xs text-slate-400">
                Latest version now available
              </div>
            </article>
            <article className="p-2 bg-slate-700 rounded text-slate-200 text-sm">
              <div className="font-semibold">Community Event Announcement</div>
              <div className="text-xs text-slate-400">
                Join us this weekend for the annual meetup where we'll discuss
                the latest developments in the field and share experiences from
                various projects.
              </div>
            </article>
            <article className="p-2 bg-slate-700 rounded text-slate-200 text-sm">
              <div className="font-semibold">Quick Note</div>
              <div className="text-xs text-slate-400">
                Server maintenance complete
              </div>
            </article>
          </div>
        </div>
      </ExampleCard>

      {/* Equal height split */}
      <ExampleCard
        title="Two-row split layout (auto-rows-fr)"
        copyText={`<div class="grid grid-flow-row auto-rows-fr h-96 gap-4">...</div>`}
        code={`<div class="grid grid-flow-row auto-rows-fr h-96 gap-4">
  <div>Top pane (1fr)</div>
  <div>Bottom pane (1fr)</div>
</div>`}
        description={
          <>
            Use <code className="bg-slate-700 px-1 rounded">auto-rows-fr</code>{" "}
            to split available height between implicit rows evenly. Great for
            split views and dashboard layouts.
          </>
        }
      >
        <div className="bg-slate-800 rounded p-3 h-48 overflow-hidden">
          <div className="grid grid-flow-row auto-rows-fr gap-3 h-full">
            <div className="bg-slate-700 rounded p-4 text-slate-200 flex items-center justify-center text-sm">
              Top Pane (1fr - Equal height)
            </div>
            <div className="bg-slate-700 rounded p-4 text-slate-200 flex items-center justify-center text-sm">
              Bottom Pane (1fr - Equal height)
            </div>
          </div>
        </div>
      </ExampleCard>

      {/* Masonry-like grid */}
      <ExampleCard
        title="Masonry-like layout (custom auto-rows)"
        copyText={`<div class="grid auto-rows-[8rem] gap-4">...</div>`}
        code={`<div class="grid auto-rows-[8rem] gap-4" style="grid-template-columns: repeat(3, minmax(0, 1fr))">
  <div class="row-span-2">Tall item</div>
  <div class="row-span-1">Regular</div>
</div>`}
        description={
          <>
            Combine fixed auto-rows height with{" "}
            <code className="bg-slate-700 px-1 rounded">row-span-*</code> to
            create masonry-like layouts using CSS Grid.
          </>
        }
      >
        <div className="bg-slate-800 rounded p-3 h-48 overflow-hidden">
          <div
            className="grid auto-rows-[3rem] gap-2 h-full"
            style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
          >
            <div className="row-span-2 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">
              Tall
            </div>
            <div className="row-span-1 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">
              Short
            </div>
            <div className="row-span-1 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">
              Item
            </div>
            <div className="row-span-1 bg-slate-700 rounded flex items-center justify-center text-xs text-slate-300">
              Here
            </div>
          </div>
        </div>
      </ExampleCard>

      {/* Chat list */}
      <ExampleCard
        title="Chat interface (auto-rows-min)"
        copyText={`<div class="flex flex-col h-96">
  <div class="flex-1 overflow-auto">
    <div class="grid grid-flow-row auto-rows-min gap-3">...</div>
  </div>
  <div class="p-3 border-t">Input</div>
</div>`}
        description={
          <>
            Messages use{" "}
            <code className="bg-slate-700 px-1 rounded">auto-rows-min</code>{" "}
            while input stays fixed. Perfect for chat and comment interfaces.
          </>
        }
      >
        <div className="bg-slate-800 rounded p-3 h-48 flex flex-col">
          <div className="flex-1 overflow-auto mb-2">
            <div className="grid grid-flow-row auto-rows-min gap-2">
              <div className="p-2 bg-slate-700 rounded text-slate-200 text-xs">
                User: Hey there!
              </div>
              <div className="p-2 bg-slate-700 rounded text-slate-200 text-xs">
                You: Hi! How can I help you today? This is a longer message to
                show how rows expand.
              </div>
              <div className="p-2 bg-slate-700 rounded text-slate-200 text-xs">
                User: Thanks for asking!
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-slate-700 rounded p-2 text-xs text-slate-400">
              Type a message...
            </div>
          </div>
        </div>
      </ExampleCard>

      {/* Accessibility note */}
      <div className="md:col-span-2 text-sm text-muted-foreground border-t border-border pt-4">
        <strong>Accessibility reminder:</strong> auto-rows affects layout only.
        Keyboard/tab order and screen reader reading order follow DOM order.
        When using visual reordering with spans, ensure ARIA/focus management
        matches the visual experience.
      </div>
    </ExampleSection>
  );

  // Tips Section
  const tips = [
    {
      title: "Container height is required for auto-rows-fr",
      content:
        "Fractional units need available space. Without height, auto-rows-fr creates zero-height rows.",
    },
    {
      title: "auto-rows only affects implicit tracks",
      content:
        "Explicit grid-template-rows take precedence. auto-rows-* won't override explicitly defined rows.",
    },
    {
      title: "Use custom values for fixed row heights",
      content:
        "auto-rows-[8rem] creates fixed-height implicit tracks. Combine with row-span-* for masonry layouts.",
    },
    {
      title: "Grid-flow direction matters",
      content:
        "auto-rows work with grid-flow-row (default). grid-flow-column creates implicit columns instead.",
    },
    {
      title: "Min-max fallbacks provide safety",
      content:
        "auto-rows-[minmax(2rem,8rem)] ensures rows never shrink below minimum content needs.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Hero Section */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Grid — Auto Rows</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Control the size of implicitly-created grid rows. You should reach
              for this utility when you need dynamic row heights for feeds,
              split layouts, or masonry-style grids. Auto rows belong to the{" "}
              <strong>Layout layer</strong> and should be applied to the{" "}
              <strong>grid container</strong>.
            </p>
          </div>

          {/* Mental Model Section */}
          <MentalModelSection {...mentalModel} />

          {/* Common Mistakes */}
          <CommonMistakesSection mistakes={commonMistakes} />

          {/* Comparison Table */}
          <ComparisonTable {...comparisonData} />

          {/* Utilities Grid */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Auto Rows Utilities</h2>
              <p className="text-muted-foreground">
                Click a utility to copy it to clipboard.
              </p>
            </div>
            <ClassGrid classes={utilities} />
          </section>

          {/* Interactive Playground */}
          <UtilityPlayground {...playgroundConfig} />

          <InteractiveChallenge
            title="The Collapsed Grid"
            description="You have a vertical list of cards. You want them to evenly split the available height of the container (50% each), but currently, they are squished to their content height (`auto-rows-min`), leaving empty space at the bottom. Change the row sizing to `auto-rows-fr` to make them expand and fill the container perfectly."
            codeSnippet={`<div class="h-64 grid grid-cols-1 {input} gap-4 p-4 border rounded-xl">
  <div class="bg-indigo-500 rounded-lg p-4 text-white flex items-center justify-center">
    Top Panel
  </div>

  <div class="bg-indigo-600 rounded-lg p-4 text-white flex items-center justify-center">
    Bottom Panel
  </div>
</div>`}
            options={[
              "auto-rows-min",
              "auto-rows-max",
              "auto-rows-auto",
              "auto-rows-fr",
            ]}
            correctOption="auto-rows-fr"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
                <div
                  className={`w-full max-w-sm h-64 grid grid-cols-1 gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl shadow-lg transition-all duration-500 ${userClass}`}
                >
                  <div className="bg-indigo-500 rounded-lg p-4 text-white font-bold flex items-center justify-center shadow-md">
                    Top Panel
                  </div>
                  <div className="bg-indigo-600 rounded-lg p-4 text-white font-bold flex items-center justify-center shadow-md">
                    Bottom Panel
                  </div>
                </div>
              </div>
            )}
          />

          {/* Real World Examples */}
          {realWorldExamples}

          {/* Tips Section */}
          <TipsSection tips={tips} />
        </div>
      </main>
    </div>
  );
}
