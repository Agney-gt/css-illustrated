"use client";

import { useState } from "react";
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
import CodeBlock from "@/app/utilities/components/code-block";
import { alignSelfUtilities } from "@/lib/utilities";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function AlignSelfPage() {
  const utilityItems = alignSelfUtilities.classes.map((item) => ({
    cls: item.class,
    desc: item.description,
  }));

  const tips = [
    {
      bold: "self-center:",
      text: "Perfect for centering specific items in a flex container",
    },
    {
      bold: "self-start:",
      text: "Great for aligning buttons to the top of a card",
    },
    {
      bold: "self-end:",
      text: "Ideal for aligning action buttons to the bottom",
    },
    {
      bold: "Combine with gap:",
      text: "Use with spacing utilities for consistent layouts",
    },
    {
      bold: "Override align-items:",
      text: "Self properties override container alignment",
    },
  ];

  const commonMistakes = [
    {
      title: "Using align-self on the container",
      reason:
        "align-self only works on individual items, not the container itself. Use align-items on the container.",
      example: `<div class="flex self-center">❌ Won't work</div>`,
      level: "critical" as const,
    },
    {
      title: "Not having a flex/grid container",
      reason:
        "align-self only works inside flex or grid containers. It has no effect on regular block elements.",
      example: `<div class="self-center">❌ No container</div>`,
      level: "critical" as const,
    },
    {
      title: "Forgetting height on flex container",
      reason:
        "Without height, self-alignment has no space to work with. Items will appear unchanged.",
      example: `<div class="flex h-0">❌ No height</div>`,
      level: "warning" as const,
    },
    {
      title: "Using self-auto without understanding",
      reason:
        "self-auto means the item follows the container's align-items value, not that it automatically centers.",
      example: `<div class="self-auto">✅ Follows container</div>`,
      level: "info" as const,
    },
  ];

  const comparisonData = {
    title: "Alignment Properties Comparison",
    columns: ["Property", "Applied To", "Scope", "Axis", "Use Case"],
    rows: [
      {
        feature: "align-items",
        values: [
          "Container",
          "All items",
          "Cross axis",
          "Vertical in flex-row",
          "Set default alignment",
        ],
      },
      {
        feature: "align-self",
        values: [
          "Individual item",
          "Single item",
          "Cross axis",
          "Vertical in flex-row",
          "Override container",
        ],
      },
      {
        feature: "justify-content",
        values: [
          "Container",
          "All items",
          "Main axis",
          "Horizontal in flex-row",
          "Distribute space",
        ],
      },
      {
        feature: "justify-self",
        values: [
          "Individual item",
          "Single item",
          "Main/Inline axis",
          "Grid only",
          "Grid item positioning",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero
            title={alignSelfUtilities.title}
            description={alignSelfUtilities.description}
          />

          <MentalModelSection
            title="Understanding Individual Item Alignment"
            description="align-self allows individual flex/grid items to override the container's align-items setting and control their own alignment on the cross axis."
            features={[
              "Works on individual flex and grid items (not containers)",
              "Overrides the container's align-items value",
              "Cross axis is vertical in flex-row, horizontal in flex-column",
              "Default value is 'auto' which inherits from container",
            ]}
            layerAssignment="Applied to child items, overrides container alignment"
            browserBehavior="Browser calculates individual item positioning independently from siblings"
          />

          <UtilityGrid
            title="Available Classes"
            items={utilityItems}
            prefix="self-"
          />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different align-self values on individual items within a container."
            options={alignSelfUtilities.classes.map((item) => item.class)}
            defaultValue="self-auto"
            defaultCustomClasses="h-48 gap-4 p-4 border-2 border-dashed border-gray-300 items-center"
            buildMarkup={(utilityClass, customClasses = "") => {
              const containerClasses = `flex ${customClasses}`;

              return `<div class="${containerClasses}">
  <div class="bg-blue-500 text-white p-4 rounded self-auto">Auto</div>
  <div class="bg-green-500 text-white p-4 rounded ${utilityClass}">Custom</div>
  <div class="bg-purple-500 text-white p-4 rounded self-auto">Auto</div>
  <div class="bg-orange-500 text-white p-4 rounded self-end">End</div>
</div>`;
            }}
            renderPreview={(utilityClass, customClasses = "") => {
              const containerClasses = `flex ${customClasses}`;

              return (
                <div className={containerClasses}>
                  <div className="bg-blue-500 text-white p-4 rounded self-auto">
                    Auto
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded self-auto">
                    Auto
                  </div>
                  <div className="bg-purple-500 text-white p-4 rounded self-auto">
                    Auto
                  </div>
                  <div
                    className={`bg-orange-500 text-white p-4 rounded ${utilityClass}`}
                  >
                    Custom
                  </div>
                </div>
              );
            }}
            optionLabel={(value) =>
              value.replace("self-", "").replace("-", " ")
            }
          />

          <InteractiveChallenge
            title="The Hanging Quote"
            description="You're building a testimonial card. The text is vertically centered using `items-center` on the parent. However, the large quote icon looks awkward in the middle—it should hang at the top. Apply `self-start` to the icon to fix its alignment."
            codeSnippet={`<div class="flex items-center gap-4 bg-white p-6 rounded shadow">
  <div class="text-4xl text-blue-500 {input}">
    ❝
  </div>
  
  <p class="text-gray-600">
    This product completely changed our workflow. 
    It's intuitive, fast, and reliable.
  </p>
</div>`}
            options={["self-auto", "self-start", "self-end", "self-center"]}
            correctOption="self-start"
            renderPreview={(userClass) => (
              <div className="w-full max-w-lg p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded shadow-sm">
                  <div
                    className={`text-6xl leading-[0] text-blue-500 font-serif ${userClass} transition-all duration-500`}
                  >
                    ❝
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    <p className="mb-2">
                      The alignment of this icon makes a huge difference in
                      visual polish.
                    </p>
                    <p>
                      {userClass === "self-start"
                        ? "✅ Perfect! The quote hangs correctly at the start."
                        : "❌ The icon feels floaty when centered."}
                    </p>
                  </div>
                </div>
              </div>
            )}
          />

          <ComparisonTable {...comparisonData} />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Card with Action Button"
              description="Button sticks to bottom while content stays at top"
              code={`<div class="flex h-64 p-4 border rounded-lg">
  <div class="flex-1 self-start">
    <h3 className="font-bold mb-2">Card Title</h3>
    <p className="text-sm text-gray-600">Card content goes here</p>
  </div>
  <button class="self-end bg-blue-500 text-white px-4 py-2 rounded">
    Action
  </button>
</div>`}
            >
              <div className="flex h-64 p-4 border rounded-lg">
                <div className="flex-1 self-start">
                  <h3 className="font-bold mb-2">Card Title</h3>
                  <p className="text-sm text-gray-600">
                    Card content goes here
                  </p>
                </div>
                <button className="self-end bg-blue-500 text-white px-4 py-2 rounded">
                  Action
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Mixed Alignment List"
              description="Different items aligned differently for visual hierarchy"
              code={`<div class="grid grid-cols-2 gap-4 h-48">
  <div class="self-start bg-gray-100 p-3 rounded">Top</div>
  <div class="self-center bg-gray-100 p-3 rounded">Center</div>
  <div class="self-end bg-gray-100 p-3 rounded">Bottom</div>
  <div class="self-stretch bg-gray-100 p-3 rounded">Stretch</div>
</div>`}
            >
              <div className="grid grid-cols-2 gap-4 h-48">
                <div className="self-start bg-gray-100 p-3 rounded">Top</div>
                <div className="self-center bg-gray-100 p-3 rounded">
                  Center
                </div>
                <div className="self-end bg-gray-100 p-3 rounded">Bottom</div>
                <div className="self-stretch bg-gray-100 p-3 rounded">
                  Stretch
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Navigation with Logo"
              description="Logo centered, items aligned differently"
              code={`<div class="flex items-center justify-between h-16 p-4 border">
  <div class="self-start bg-blue-500 text-white px-3 py-1 rounded">Menu</div>
  <div class="self-center bg-gray-200 px-3 py-1 rounded">Logo</div>
  <div class="self-end bg-green-500 text-white px-3 py-1 rounded">User</div>
</div>`}
            >
              <div className="flex items-center justify-between h-16 p-4 border">
                <div className="self-start bg-blue-500 text-white px-3 py-1 rounded">
                  Menu
                </div>
                <div className="self-center bg-gray-200 px-3 py-1 rounded">
                  Logo
                </div>
                <div className="self-end bg-green-500 text-white px-3 py-1 rounded">
                  User
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock language="jsx" code={alignSelfUtilities.codeSnippet} />
          </div>

          <CommonMistakesSection mistakes={commonMistakes} />

          <TipsSection tips={tips} />
        </div>
      </main>
    </div>
  );
}
