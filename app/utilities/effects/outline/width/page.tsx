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

export default function OutlineWidthPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Outline Width Utilities"
        description="Complete guide to CSS outline width utilities. Control the thickness of element outlines for accessibility, focus states, and visual feedback without affecting layout."
      />

      <MentalModelSection
        title="Understanding Outline Width"
        description="Outline width controls the thickness of the outline drawn around elements. Unlike borders, outlines don't affect layout and are drawn outside the element box, making them perfect for focus indicators and accessibility."
        features={[
          "Outlines don't affect element layout or box model",
          "Width values range from 0 (none) to 8px in Tailwind",
          "Perfect for accessibility and focus states",
          "Drawn outside the border, overlapping other content",
          "Doesn't take up space in the document flow",
        ]}
        layerAssignment="Outline Layer - Visual feedback and accessibility indicators"
        browserBehavior="Browser renders outline outside element box model, overlapping adjacent content without affecting layout"
      />

      <ComparisonTable
        title="Outline Width vs Border Width"
        columns={["Property", "Layout Impact", "Use Case", "Accessibility"]}
        rows={[
          {
            feature: "Outline Width",
            values: [
              "No layout impact",
              "Focus indicators",
              "Excellent for keyboard navigation",
            ],
          },
          {
            feature: "Border Width",
            values: [
              "Affects box model",
              "Visual boundaries",
              "Can disrupt layout if misused",
            ],
          },
        ]}
      />

      <UtilityGrid
        title="Outline Width Utilities"
        items={[
          { cls: "outline-0", desc: "No outline" },
          { cls: "outline-1", desc: "1px outline" },
          { cls: "outline-2", desc: "2px outline" },
          { cls: "outline-4", desc: "4px outline" },
          { cls: "outline-8", desc: "8px outline" },
        ]}
      />

      <section className="space-y-6 border-t pt-8">
        <h2 className="text-3xl font-bold">Interactive Playground</h2>
        <p className="text-muted-foreground">
          Experiment with different outline widths and see how they affect focus
          states and accessibility.
        </p>

        <UtilityPlayground
          title="Outline Width Playground"
          description="Test outline width utilities and see their impact on focus states and visual feedback."
          options={[
            "outline-0",
            "outline-1",
            "outline-2",
            "outline-4",
            "outline-8",
          ]}
          defaultValue="outline-2"
          buildMarkup={(outlineClass) => {
            return `<button class="${outlineClass} outline-blue-500 focus:${outlineClass} focus:outline-blue-600 px-4 py-2 rounded">
  Focus Button
</button>`;
          }}
          renderPreview={(outlineClass) => {
            return (
              <button
                className={`${outlineClass} outline-blue-500 focus:${outlineClass} focus:outline-blue-600 px-4 py-2 rounded`}
              >
                Focus Button
              </button>
            );
          }}
        />
      </section>

      <InteractiveChallenge
        title="The Invisible Focus"
        description="You have a button that needs to be accessible for keyboard users. Currently, when focused, it has no outline (`outline-0`), making it impossible to see which element is selected. Add `outline-2` (and an `outline-blue-500` color) to create a clear, visible focus ring."
        codeSnippet={`<button class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium transition-all focus:outline-blue-500 {input}">
  Tab to Focus Me
</button>`}
        options={["outline-0", "outline-1", "outline-2", "outline-4"]}
        correctOption="outline-2"
        renderPreview={(userClass) => (
          <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-12 rounded-lg">
            <button
              className={`bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all focus:outline-blue-500 hover:bg-indigo-700 active:scale-95 ${userClass}`}
              style={
                userClass !== "outline-0"
                  ? { outlineStyle: "solid", outlineColor: "#3b82f6" }
                  : {}
              }
            >
              Focus Me
            </button>
          </div>
        )}
      />

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Focus States for Accessibility"
          description="Clear focus indicators for keyboard navigation"
          code={`<button class="outline-2 outline-blue-500 focus:outline-4 focus:outline-blue-600">
  Accessible Button
</button>`}
        >
          <button className="outline-2 outline-blue-500 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
            Accessible Button
          </button>
        </ExampleCard>

        <ExampleCard
          title="Form Input Focus"
          description="Enhanced focus states for form elements"
          code={`<input class="outline-0 focus:outline-2 focus:outline-blue-500 px-3 py-2 border rounded" placeholder="Email address" />`}
        >
          <input
            className="outline-0 focus:outline-2 focus:outline-blue-500 px-3 py-2 border rounded"
            placeholder="Email address"
          />
        </ExampleCard>

        <ExampleCard
          title="Custom Focus Ring"
          description="Thick focus rings for high contrast mode"
          code={`<a href="#" class="outline-0 focus:outline-8 focus:outline-yellow-400 text-blue-600">
  High Contrast Link
</a>`}
        >
          <a
            href="#"
            className="outline-0 focus:outline-8 focus:outline-yellow-400 text-blue-600"
          >
            High Contrast Link
          </a>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Using outline for visual decoration",
            reason:
              "Outlines are for accessibility feedback, not decoration. Use borders instead.",
            example: `<div class="outline-4 outline-blue-500">Wrong</div>`,
          },
          {
            title: "Removing all outlines",
            reason:
              "Never remove focus outlines completely without replacement. This breaks keyboard navigation.",
            example: `button { outline: none; }`,
          },
          {
            title: "Ignoring outline contrast",
            reason:
              "Ensure outlines have sufficient contrast against the background for visibility.",
            example: `<button class="outline-2 outline-gray-200 bg-white">Poor contrast</button>`,
          },
        ]}
      />

      <TipsSection
        tips={[
          {
            bold: "Focus management:",
            text: "Always provide visible focus indicators for interactive elements",
          },
          {
            bold: "Color contrast:",
            text: "Ensure outline colors have good contrast ratios (WCAG AA minimum)",
          },
          {
            bold: "Thickness balance:",
            text: "Use thicker outlines (2px+) for better visibility",
          },
          {
            bold: "Offset consideration:",
            text: "Combine with outline-offset to prevent overlap with borders",
          },
          {
            bold: "Testing:",
            text: "Test focus states with keyboard navigation only",
          },
        ]}
      />
    </div>
  );
}
