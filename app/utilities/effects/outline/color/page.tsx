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

export default function OutlineColorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Outline Color Utilities"
        description="Complete guide to CSS outline color utilities. Control the color of element outlines for brand consistency, accessibility, and visual feedback without affecting layout."
      />

      <MentalModelSection
        title="Understanding Outline Color"
        description="Outline color controls the visual appearance of focus indicators and accessibility markers. Proper color selection ensures compliance with WCAG guidelines and maintains brand consistency across interactive elements."
        features={[
          "Colors apply to outline borders drawn outside elements",
          "Supports all Tailwind color utilities including design tokens",
          "Essential for accessibility and WCAG compliance",
          "Works with opacity modifiers for subtle effects",
          "Can be combined with outline-width and outline-style",
        ]}
        layerAssignment="Outline Layer - Visual feedback and accessibility color coding"
        browserBehavior="Browser renders outline colors using the same color space as text colors, supporting hex, rgb, and CSS custom properties"
      />

      <ComparisonTable
        title="Outline Color vs Border Color"
        columns={[
          "Property",
          "Layout Impact",
          "Best For",
          "Accessibility Impact",
        ]}
        rows={[
          {
            feature: "Outline Color",
            values: [
              "No layout impact",
              "Focus states & feedback",
              "Critical for keyboard users",
            ],
          },
          {
            feature: "Border Color",
            values: [
              "Affects box model",
              "Visual boundaries",
              "Visual enhancement only",
            ],
          },
        ]}
      />

      <UtilityGrid
        title="Outline Color Utilities"
        items={[
          { cls: "outline-red-500", desc: "Red outline for errors" },
          { cls: "outline-blue-400", desc: "Blue outline for info" },
          { cls: "outline-green-600", desc: "Green outline for success" },
          { cls: "outline-yellow-500", desc: "Yellow outline for warnings" },
          { cls: "outline-ring", desc: "Default ring color" },
          { cls: "outline-gray-400", desc: "Gray outline for neutral" },
        ]}
      />

      <section className="space-y-6 border-t pt-8">
        <h2 className="text-3xl font-bold">Interactive Playground</h2>
        <p className="text-muted-foreground">
          Experiment with different outline colors and see their impact on
          accessibility and visual feedback.
        </p>

        <UtilityPlayground
          title="Outline Color Playground"
          description="Test outline color utilities with different background colors to ensure accessibility compliance."
          options={[
            "outline-blue-500",
            "outline-red-500",
            "outline-green-600",
            "outline-yellow-500",
            "outline-purple-500",
            "outline-gray-400",
          ]}
          defaultValue="outline-blue-500"
          buildMarkup={(outlineColor) => {
            return `<button class="outline-2 ${outlineColor} focus:outline-4 focus:${outlineColor} px-4 py-2 rounded">
  Colored Focus
</button>`;
          }}
          renderPreview={(outlineColor) => {
            return (
              <button
                className={`outline-2 ${outlineColor} focus:outline-4 focus:${outlineColor} px-4 py-2 rounded`}
              >
                Colored Focus
              </button>
            );
          }}
        />
      </section>

      <InteractiveChallenge
        title="The Clashing Focus"
        description="You have an input field showing an error state with a red border. However, when the user clicks (focuses) on it, the outline turns blue (`outline-blue-500`), clashing with the error message. Change the focus outline color to `outline-red-500` to maintain the error context."
        codeSnippet={`<div class="flex flex-col gap-1">
  <label class="text-sm font-medium text-red-600">Password</label>
  <input 
    type="password" 
    value="wrongpass" 
    class="border-red-300 text-red-900 focus:outline-2 {input} rounded-md px-3 py-2"
  />
  <span class="text-xs text-red-500">Incorrect password</span>
</div>`}
        options={[
          "outline-blue-500",
          "outline-red-500",
          "outline-green-500",
          "outline-gray-500",
        ]}
        correctOption="outline-red-500"
        renderPreview={(userClass) => {
          const isError = userClass === "outline-red-500";
          return (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-12 rounded-lg">
              <div className="w-full max-w-xs bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-red-600 dark:text-red-400">
                    Password
                  </label>
                  <input
                    type="text"
                    value="wrongpass"
                    readOnly
                    style={{
                      outlineStyle: "solid",
                      outlineWidth: "2px",
                      outlineColor: isError ? "#ef4444" : "#3b82f6", 
                    }}
                    className={`w-full px-3 py-2 rounded-md border border-red-300 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-100 dark:border-red-800 transition-all`}
                  />
                  <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium">
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
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Incorrect password
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Error States"
          description="Red outlines for validation errors"
          code={`<input class="outline-2 outline-red-500 focus:outline-4 focus:outline-red-600 border border-red-300 px-3 py-2 rounded" placeholder="Required field" />`}
        >
          <input
            className="outline-2 outline-red-500 focus:outline-4 focus:outline-red-600 border border-red-300 px-3 py-2 rounded"
            placeholder="Required field"
          />
        </ExampleCard>

        <ExampleCard
          title="Success Confirmation"
          description="Green outlines for successful actions"
          code={`<button class="outline-2 outline-green-600 focus:outline-4 focus:outline-green-700 bg-green-500 text-white px-4 py-2 rounded">
  Save Success
</button>`}
        >
          <button className="outline-2 outline-green-600 focus:outline-4 focus:outline-green-700 bg-green-500 text-white px-4 py-2 rounded">
            Save Success
          </button>
        </ExampleCard>

        <ExampleCard
          title="Warning Actions"
          description="Yellow outlines for destructive actions"
          code={`<button class="outline-2 outline-yellow-500 focus:outline-4 focus:outline-yellow-600 text-yellow-700 px-4 py-2 rounded border border-yellow-300">
  Delete Item
</button>`}
        >
          <button className="outline-2 outline-yellow-500 focus:outline-4 focus:outline-yellow-600 text-yellow-700 px-4 py-2 rounded border border-yellow-300">
            Delete Item
          </button>
        </ExampleCard>

        <ExampleCard
          title="Primary Actions"
          description="Brand color outlines for main actions"
          code={`<a href="#" class="outline-2 outline-blue-600 focus:outline-4 focus:outline-blue-700 text-blue-600 font-medium">
  Primary Link
</a>`}
        >
          <a
            href="#"
            className="outline-2 outline-blue-600 focus:outline-4 focus:outline-blue-700 text-blue-600 font-medium"
          >
            Primary Link
          </a>
        </ExampleCard>

        <ExampleCard
          title="High Contrast Mode"
          description="Bright yellow for high contrast accessibility"
          code={`<button class="outline-4 outline-yellow-400 focus:outline-8 focus:outline-yellow-300 bg-black text-white px-4 py-2 rounded">
  High Contrast
</button>`}
        >
          <button className="outline-4 outline-yellow-400 focus:outline-8 focus:outline-yellow-300 bg-black text-white px-4 py-2 rounded">
            High Contrast
          </button>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Poor color contrast",
            reason:
              "Outline colors must have sufficient contrast (4.5:1 for normal text, 3:1 for large text) against their background.",
            example: `<button class="outline-2 outline-gray-200 bg-white">Poor contrast</button>`,
          },
          {
            title: "Color-only information",
            reason:
              "Don't rely solely on outline color to convey meaning. Use it with other visual cues like icons, text, or patterns.",
            example: `<button class="outline-red-500">Error button</button>`,
          },
          {
            title: "Inconsistent color usage",
            reason:
              "Maintain consistent color meanings across your interface (red for errors, green for success, etc.).",
            example: `<button class="outline-green-500">Delete</button>`,
          },
          {
            title: "Ignoring dark mode",
            reason:
              "Ensure outline colors work well in both light and dark modes. Test with different theme combinations.",
            example: `<button class="outline-gray-300">Dark mode issue</button>`,
          },
        ]}
      />

      <TipsSection
        tips={[
          {
            bold: "WCAG compliance:",
            text: "Ensure 4.5:1 contrast ratio for normal text, 3:1 for large text",
          },
          {
            bold: "Brand consistency:",
            text: "Use brand colors consistently for primary actions",
          },
          {
            bold: "Semantic colors:",
            text: "Follow conventions: red=error, green=success, yellow=warning",
          },
          {
            bold: "Dark mode:",
            text: "Test outline colors in both light and dark themes",
          },
          {
            bold: "Opacity usage:",
            text: "Use opacity modifiers for subtle, non-critical feedback",
          },
        ]}
      />
    </div>
  );
}
