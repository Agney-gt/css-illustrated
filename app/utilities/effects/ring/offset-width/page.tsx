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

export default function RingOffsetWidthPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Ring Offset Width"
        description="Utilities for simulating space between an outline ring and an element. Essential for creating distinct focus states, 'cutout' effects on overlapping avatars, and high-contrast selection indicators."
      />

      <MentalModelSection
        title="Understanding Ring Offset"
        description="The ring offset utility doesn't actually make the element smaller or add margin. Instead, it paints a solid stroke of color (matching the background) *outside* the element, pushing the actual ring further out. Think of it as a 'masking halo' that creates visual separation."
        features={[
          "Simulates a gap between element and ring",
          "Implemented as a solid box-shadow layer",
          "Must be paired with a ring width (e.g., ring-2)",
          "Defaults to white color (change with ring-offset-{color})",
          "Crucial for accessibility on busy backgrounds",
        ]}
        layerAssignment="Effect Layer - Paints a solid 'spacer' shadow behind the main ring"
        browserBehavior="Browser renders the offset as the first layer of the box-shadow stack, effectively masking the area immediately surrounding the border."
      />

      <ComparisonTable
        title="Ring Offset vs Outline Offset"
        columns={["Property", "Mechanism", "Visual Gap", "Transparency"]}
        rows={[
          {
            feature: "Ring Offset",
            values: [
              "Solid Box Shadow",
              "Fake (painted solid color)",
              "No (masks background)",
            ],
          },
          {
            feature: "Outline Offset",
            values: [
              "Outline Property",
              "Real (transparent space)",
              "Yes (shows background)",
            ],
          },
        ]}
      />

      <UtilityGrid
        title="Ring Offset Utilities"
        items={[
          { cls: "ring-offset-0", desc: "0px offset" },
          { cls: "ring-offset-1", desc: "1px offset" },
          { cls: "ring-offset-2", desc: "2px offset (Standard)" },
          { cls: "ring-offset-4", desc: "4px offset" },
          { cls: "ring-offset-8", desc: "8px offset" },
        ]}
      />


      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-3xl font-bold">Interactive Playground</h2>
        <p className="text-muted-foreground">
          See how ring offsets create separation. Note: We use a dark background
          ring here so you can see the white offset clearly.
        </p>

        <UtilityPlayground
          title="Offset Playground"
          description="Test ring offset widths. The ring itself is set to black (`ring-black`) so you can clearly see the white offset gap created by the utility."
          options={[
            "ring-offset-0",
            "ring-offset-1",
            "ring-offset-2",
            "ring-offset-4",
            "ring-offset-8",
          ]}
          defaultValue="ring-offset-2"
          buildMarkup={(offset) => {
            return `<button class="bg-indigo-500 text-white px-6 py-3 rounded-lg ring-4 ring-black ${offset}">
  Offset Button
</button>`;
          }}
          renderPreview={(offset) => {
            return (
              <button
              className={`bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all ring-4 ring-black ${offset}`}
              >
                Offset Button
              </button>
            );
          }}
        />
      </section>
          <InteractiveChallenge
            title="The Invisible Selection"
            description="You are building a color picker. When the user selects the black swatch, the black focus ring merges with the black button, making the selection invisible! Add `ring-offset-2` to paint a white gap between the swatch and the ring, making the selection pop."
            codeSnippet={`<div class="flex gap-4">
      <button class="w-12 h-12 bg-black rounded-full ring-2 ring-black {input}">
        </button>
    </div>`}
            options={[
              "ring-offset-0",
              "ring-offset-1",
              "ring-offset-2",
              "ring-offset-4",
            ]}
            correctOption="ring-offset-2"
            renderPreview={(userClass) => {
              const hasOffset = userClass !== "ring-offset-0";
              return (
                <div className="flex items-center justify-center w-full h-full bg-slate-50 p-12 rounded-lg">
                  <div className="flex gap-6">
                    {/* Unselected Swatch */}
                    <div className="w-12 h-12 bg-red-500 rounded-full cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
    
                    {/* The Target Swatch */}
                    <div
                      className={`
                        w-12 h-12 bg-black rounded-full transition-all duration-300 relative
                        ring-2 ring-black
                        ${userClass}
                        /* For demo purposes, ensuring offset color matches background if not specified, though tailwind default is white which works here */
                        ring-offset-slate-50 
                      `}
                    >
                      {/* Checkmark to indicate selection */}
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </div>
    
                    {/* Unselected Swatch */}
                    <div className="w-12 h-12 bg-blue-500 rounded-full cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            }}
          />

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Color Swatch Selection"
          description="Crucial for selecting colors that might match the ring color."
          code={`<button class="w-10 h-10 rounded-full bg-blue-600 ring-2 ring-blue-600 ring-offset-2">
  </button>`}
        >
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-blue-600 ring-2 ring-blue-600 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 shadow-sm"></button>
            <button className="w-10 h-10 rounded-full bg-green-500 ring-2 ring-green-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 shadow-sm"></button>
            <button className="w-10 h-10 rounded-full bg-black ring-2 ring-black ring-offset-2 ring-offset-white dark:ring-offset-slate-900 shadow-sm dark:bg-white dark:ring-white"></button>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Accessible Focus Ring"
          description="Standard focus pattern that separates the ring from the button border."
          code={`<button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  Cancel
</button>`}
        >
          <button className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-200 px-4 py-2 rounded font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-all focus:outline-none ring-2 ring-indigo-500 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-900">
            Cancel (Simulated Focus)
          </button>
        </ExampleCard>

        <ExampleCard
          title="Avatar Cutout Effect"
          description="While not technically a 'focus' state, ring offsets are often used on avatar groups to create a 'cutout' border effect that matches the background."
          code={`<div class="flex -space-x-4">
  <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="..." />
  <img class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800" src="..." />
  <img class="w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800" src="..." />
</div>`}
        >
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 ring-2 ring-white dark:ring-slate-900 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-400"
              >
                U{i}
              </div>
            ))}
          </div>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Using on Transparent Backgrounds",
            reason:
              "Ring offset paints a solid color. If your background is a gradient or image, the offset will look like a solid border, not a gap.",
            example: `<div class="bg-gradient-to-r ..."><button class="ring-offset-2">Looks bad</button></div>`,
          },
          {
            title: "Forgetting Ring Width",
            reason:
              "Offset pushes the ring out, but if the ring has 0 width (default), you won't see anything.",
            example: `<div class="ring-offset-4">No ring visible</div>`,
          },
          {
            title: "Mismatching Offset Color",
            reason:
              "If the `ring-offset-color` doesn't match the parent background, it looks like a double border instead of a gap.",
            example: `<div class="bg-black"><button class="ring-offset-2 ring-offset-white">White border on black bg</button></div>`,
          },
        ]}
      />

      <TipsSection
        tips={[
          {
            bold: "Dark Mode:",
            text: "Always update `ring-offset-{color}` in dark mode (e.g., `dark:ring-offset-slate-900`) so the gap blends in.",
          },
          {
            bold: "Focus Consistency:",
            text: "Use `ring-offset-2` globally for buttons to create a consistent, accessible focus style.",
          },
          {
            bold: "Complex Backgrounds:",
            text: "If you have a complex background image, avoid `ring-offset` and use `outline` properties instead, which support true transparency.",
          },
        ]}
      />
    </div>
  );
}
