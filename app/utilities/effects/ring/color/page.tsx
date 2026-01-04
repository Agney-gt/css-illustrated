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

export default function RingColorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Ring Color Utilities"
        description="Complete guide to CSS ring color utilities. Control the color of outline rings for focus states, selection indicators, and decorative halos without affecting layout."
      />

      <MentalModelSection
        title="Understanding Ring Color"
        description="Ring color utilities allow you to tint the solid box-shadow rings created by the `ring` width utilities. Because rings are implemented as box-shadows, they follow the element's border-radius perfectly and don't take up layout space."
        features={[
          "Sets the color of the ring box-shadow",
          "Supports all Tailwind colors and opacity modifiers",
          "Perfect for custom focus rings and active states",
          "Follows border-radius automatically",
          "Can be combined with ring-offset-color for multi-layer effects",
        ]}
        layerAssignment="Effect Layer - Painted as a solid shadow outside the border"
        browserBehavior="Browser renders the ring as a box-shadow, blending with the background if opacity is used"
      />

      <ComparisonTable
        title="Ring Color vs Border Color"
        columns={["Property", "Mechanism", "Layout Impact", "Radius Support"]}
        rows={[
          {
            feature: "Ring Color",
            values: ["Box Shadow", "None (overlays)", "Matches element radius"],
          },
          {
            feature: "Border Color",
            values: [
              "Border Property",
              "Takes up space",
              "Matches element radius",
            ],
          },
          {
            feature: "Outline Color",
            values: [
              "Outline Property",
              "None (overlays)",
              "Matches radius (modern browsers)",
            ],
          },
        ]}
      />

      <UtilityGrid
        title="Ring Color Utilities"
        items={[
          { cls: "ring-blue-500", desc: "Primary blue ring" },
          { cls: "ring-red-500", desc: "Destructive red ring" },
          { cls: "ring-green-500", desc: "Success green ring" },
          { cls: "ring-yellow-400", desc: "Warning yellow ring" },
          { cls: "ring-transparent", desc: "Invisible ring" },
          { cls: "ring-current", desc: "Matches text color" },
        ]}
      />

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-3xl font-bold">Interactive Playground</h2>
        <p className="text-muted-foreground">
          Experiment with different ring colors and opacities to see how they
          interact with elements.
        </p>

        <UtilityPlayground
          title="Ring Color Playground"
          description="Test ring color utilities. Note that a ring-width utility (like ring-4) is required for the color to be visible."
          options={[
            "ring-blue-500",
            "ring-purple-500",
            "ring-pink-500",
            "ring-orange-500",
            "ring-teal-500",
            "ring-slate-400",
          ]}
          defaultValue="ring-blue-500"
          buildMarkup={(ringColor) => {
            return `<button class="ring-4 ${ringColor} ring-offset-2 px-6 py-3 rounded-lg bg-white shadow-sm font-semibold">
            Ring Button
</button>`;
          }}
          renderPreview={(ringColor) => {
            return (
              <button
                className={`ring-4 ${ringColor} ring-offset-2 ring-offset-white dark:ring-offset-slate-900 px-6 py-3 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 shadow-sm font-semibold transition-all`}
              >
                Ring Button
              </button>
            );
          }}
        />
      </section>

      <InteractiveChallenge
        title="The Dangerous Button"
        description="You have a 'Delete Account' button. Currently, when focused or active, it has a default blue ring (`ring-blue-500`), which feels too safe. Change the ring color to `ring-red-500` to visually warn the user that this is a destructive action."
        codeSnippet={`<button class="px-6 py-2 bg-white text-red-600 font-bold rounded-lg shadow-sm ring-2 {input} focus:outline-none">
      Delete Account
    </button>`}
        options={[
          "ring-blue-500",
          "ring-gray-300",
          "ring-red-500",
          "ring-green-500",
        ]}
        correctOption="ring-red-500"
        renderPreview={(userClass) => {
          const isDanger = userClass === "ring-red-500";
          return (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-12 rounded-lg">
              <div className="text-center space-y-4">
                <button
                  className={`
                        px-6 py-3 bg-white dark:bg-slate-900 text-red-600 font-bold rounded-lg shadow-md transition-all 
                        ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-950
                        ${userClass}
                      `}
                >
                  Delete Account
                </button>
                <div
                  className={`text-xs font-medium transition-all duration-500 ${
                    isDanger
                      ? "text-red-500 opacity-100"
                      : "text-slate-400 opacity-0"
                  }`}
                >
                  ⚠️ Warning Level: Critical
                </div>
              </div>
            </div>
          );
        }}
      />
      
      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Active Selection Card"
          description="Use a colored ring to indicate a selected state in a grid"
          code={`<div class="p-6 rounded-xl border border-indigo-100 ring-2 ring-indigo-600 ring-offset-2">
  <h3 class="text-indigo-900 font-bold">Pro Plan</h3>
  <p class="text-indigo-600">Selected</p>
</div>`}
        >
          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900 ring-2 ring-indigo-600 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-950 shadow-sm w-48 text-center">
            <h3 className="text-indigo-900 dark:text-indigo-300 font-bold text-lg">
              Pro Plan
            </h3>
            <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              Selected
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="User Status Indicator"
          description="Rings can create a gap between an avatar and a status dot (mimicking a cut-out)"
          code={`<div class="relative inline-block">
  <img class="w-12 h-12 rounded-full" src="..." />
  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 ring-2 ring-white rounded-full"></span>
</div>`}
        >
          <div className="relative inline-block">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl">
              👤
            </div>
            <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-slate-900"></span>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Focus Ring"
          description="Custom brand-colored focus ring replacing the default browser outline"
          code={`<input class="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Focus me..." />`}
        >
          <input
            className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-transparent w-full max-w-xs"
            placeholder="Focus me..."
          />
        </ExampleCard>

        <ExampleCard
          title="Opacity Modifier"
          description="Using color opacity for a subtle glow effect"
          code={`<button class="ring-4 ring-blue-500/30 px-4 py-2 bg-blue-600 text-white rounded">
  Soft Glow
</button>`}
        >
          <button className="ring-4 ring-blue-500/30 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-all">
            Soft Glow
          </button>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Forgetting Ring Width",
            reason:
              "Setting a `ring-color` does nothing if you haven't also set a `ring` width (e.g., `ring-2`). Defaults to 0 width.",
            example: `<div class="ring-red-500">No width set</div>`,
          },
          {
            title: "Low Contrast Focus",
            reason:
              "Using very light ring colors for focus states makes it hard for keyboard users to navigate.",
            example: `<button class="focus:ring-yellow-100">Too faint</button>`,
          },
          {
            title: "Clashing with Border",
            reason:
              "If you use both a border and a ring of the same color, they merge. Use `ring-offset` to separate them.",
            example: `<div class="border-blue-500 ring-blue-500">Looks like one thick border</div>`,
          },
        ]}
      />

      <TipsSection
        tips={[
          {
            bold: "Use for Focus:",
            text: "The primary use case is `focus:ring-{color}` to create accessible, custom focus indicators.",
          },
          {
            bold: "Ring Offset:",
            text: "Always pair colored rings with `ring-offset-{width}` and `ring-offset-{color}` when highlighting elements on colored backgrounds.",
          },
          {
            bold: "Inset Rings:",
            text: "Use `ring-inset` if you want the color to sit inside the element (like an inner border) without affecting layout size.",
          },
          {
            bold: "Group Focus:",
            text: "Use `group-focus:ring-{color}` on a parent element to light up a container when a child input is focused.",
          },
        ]}
      />
    </div>
  );
}
