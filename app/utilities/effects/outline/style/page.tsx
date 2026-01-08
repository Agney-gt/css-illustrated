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

export default function OutlineStylePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Outline Style Utilities"
        description="Complete guide to CSS outline style utilities. Control the visual appearance of element outlines with different line styles for emphasis, decoration, and accessibility feedback."
      />

      <MentalModelSection
        title="Understanding Outline Style"
        description="Outline style controls the line pattern used for element outlines. Different styles provide visual hierarchy and can indicate different types of interactions or states while maintaining accessibility."
        features={[
          "Styles apply to outline borders without affecting layout",
          "Supports solid, dashed, dotted, and double line patterns",
          "Essential for creating visual distinction between states",
          "Works with outline-width and outline-color properties",
          "Can create decorative effects while maintaining accessibility",
        ]}
        layerAssignment="Outline Layer - Visual pattern and emphasis styling"
        browserBehavior="Browser renders outline styles using the same line drawing algorithms as borders, but positioned outside the element box"
      />

      <ComparisonTable
        title="Outline Style vs Border Style"
        columns={["Property", "Layout Impact", "Use Cases", "Visual Priority"]}
        rows={[
          {
            feature: "Outline Style",
            values: [
              "No layout impact",
              "Focus states & indicators",
              "High for accessibility",
            ],
          },
          {
            feature: "Border Style",
            values: [
              "Affects box model",
              "Decorative elements",
              "Medium for visual design",
            ],
          },
        ]}
      />

      <UtilityGrid
        title="Outline Style Utilities"
        items={[
          { cls: "outline", desc: "Solid outline (default)" },
          { cls: "outline-dashed", desc: "Dashed outline pattern" },
          { cls: "outline-dotted", desc: "Dotted outline pattern" },
          { cls: "outline-double", desc: "Double line outline" },
          { cls: "outline-none", desc: "No outline (use carefully)" },
        ]}
      />

      <section className="space-y-6 border-t pt-8">
        <h2 className="text-3xl font-bold">Interactive Playground</h2>
        <p className="text-muted-foreground">
          Experiment with different outline styles and see their impact on
          visual feedback and accessibility.
        </p>

        <UtilityPlayground
          title="Outline Style Playground"
          description="Test outline style utilities with different widths and colors to create various visual effects."
          options={[
            "outline",
            "outline-dotted",
            "outline-double",
            "outline-dashed",
          ]}
          defaultValue="outline"
          buildMarkup={(outlineStyle) => {
            const styleName =
              outlineStyle.replace("outline-", "").charAt(0).toUpperCase() +
              outlineStyle.replace("outline-", "").slice(1);
            return `<button class="outline-2 outline-blue-500 ${outlineStyle} focus:outline-4 focus:outline-blue-600 focus:${outlineStyle} px-4 py-2 rounded">\n  ${styleName} Focus\n</button>`;
          }}
          renderPreview={(outlineStyle) => {
            const styleName =
              outlineStyle.replace("outline-", "").charAt(0).toUpperCase() +
              outlineStyle.replace("outline-", "").slice(1);
            return (
              <button
                className={`outline-2 outline-blue-500 ${outlineStyle} focus:outline-4 focus:outline-blue-600 focus:${outlineStyle} px-4 py-2 rounded`}
              >
                {styleName} Focus
              </button>
            );
          }}
        />
      </section>

      <InteractiveChallenge
        title="The Dashed Drop Zone"
        description="You have a file upload area. To make it feel interactive and 'droppable' when focused via keyboard, you want the focus ring to be dashed instead of the default solid. Change the focus style to `outline-dashed`."
        codeSnippet={`<button class="w-full h-32 bg-slate-100 rounded-xl border-2 border-slate-300 text-slate-500 focus:outline-2 focus:outline-indigo-500 {input} transition-all">
  Drop files here or Tab to select
</button>`}
        options={[
          "outline",
          "outline-dotted",
          "outline-double",
          "outline-dashed",
        ]}
        correctOption="outline-dashed"
        renderPreview={(userClass) => (
          <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
            <button
              className={`w-full max-w-sm h-40 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center gap-3 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all focus:outline-2 focus:outline-indigo-500 ${userClass}`}
              // Force visible outline style for preview purposes
              style={{
                outlineStyle: userClass.replace("outline-", "") || "solid",
                outlineWidth: "2px",
                outlineColor: "#6366f1",
              }}
            >
              <svg
                className="w-8 h-8 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium">Upload Area (Focused)</span>
            </button>
          </div>
        )}
      />

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Solid Focus States"
          description="Clean solid outlines for standard focus indicators"
          code={`<button class="outline outline-2 outline-blue-500 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
  Standard Button
</button>`}
        >
          <button className="outline outline-2 outline-blue-500 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
            Standard Button
          </button>
        </ExampleCard>

        <ExampleCard
          title="Dashed Attention States"
          description="Dashed outlines for attention-grabbing states"
          code={`<button class="outline-dashed outline-2 outline-orange-500 focus:outline-4 focus:outline-orange-600 px-4 py-2 rounded">
  Attention Required
</button>`}
        >
          <button className="outline-dashed outline-2 outline-orange-500 focus:outline-4 focus:outline-orange-600 px-4 py-2 rounded">
            Attention Required
          </button>
        </ExampleCard>

        <ExampleCard
          title="Dotted Indicators"
          description="Dotted outlines for subtle feedback"
          code={`<input class="outline-dotted outline-2 outline-purple-500 focus:outline-4 focus:outline-purple-600 px-3 py-2 border rounded" placeholder="Optional field" />`}
        >
          <input
            className="outline-dotted outline-2 outline-purple-500 focus:outline-4 focus:outline-purple-600 px-3 py-2 border rounded"
            placeholder="Optional field"
          />
        </ExampleCard>

        <ExampleCard
          title="Double Emphasis"
          description="Double outlines for high-priority focus"
          code={`<button class="outline-double outline-4 outline-red-500 focus:outline-8 focus:outline-red-600 px-4 py-2 rounded font-bold">
  Critical Action
</button>`}
        >
          <button className="outline-double outline-4 outline-red-500 focus:outline-8 focus:outline-red-600 px-4 py-2 rounded font-bold">
            Critical Action
          </button>
        </ExampleCard>

        <ExampleCard
          title="Custom Button Styles"
          description="Combining styles with different colors"
          code={`<button class="outline-dashed outline-2 outline-teal-500 focus:outline-dashed focus:outline-4 focus:outline-teal-600 bg-teal-50 text-teal-700 px-4 py-2 rounded">
  Teal Button
</button>`}
        >
          <button className="outline-dashed outline-2 outline-teal-500 focus:outline-dashed focus:outline-4 focus:outline-teal-600 bg-teal-50 text-teal-700 px-4 py-2 rounded">
            Teal Button
          </button>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Using outline-none everywhere",
            reason:
              "Removing all outlines breaks keyboard navigation accessibility. Always provide alternative focus indicators.",
            example: `button { outline: none; }`,
          },
          {
            title: "Inconsistent style usage",
            reason:
              "Use consistent outline styles for similar interaction types across your interface.",
            example: `<button class="outline-dashed">Primary</button>
<button class="outline-dotted">Primary</button>`,
          },
          {
            title: "Too thin outlines with complex styles",
            reason:
              "Complex outline styles (dotted, dashed) need sufficient width to be visible and recognizable.",
            example: `<button class="outline-dotted outline-1">Too thin</button>`,
          },
          {
            title: "Poor color combinations",
            reason:
              "Ensure outline colors work well with the chosen style and maintain sufficient contrast.",
            example: `<button class="outline-dashed outline-gray-300 bg-white">Poor visibility</button>`,
          },
        ]}
      />

      <TipsSection
        tips={[
          {
            bold: "Style consistency:",
            text: "Use consistent outline styles for similar interaction types",
          },
          {
            bold: "Minimum width:",
            text: "Use at least 2px width for dashed/dotted styles to remain visible",
          },
          {
            bold: "Visual hierarchy:",
            text: "Use different styles to indicate priority or type of interaction",
          },
          {
            bold: "Testing required:",
            text: "Test outline styles with keyboard navigation on all browsers",
          },
          {
            bold: "Accessibility first:",
            text: "Never remove focus outlines without providing clear alternatives",
          },
        ]}
      />
    </div>
  );
}
