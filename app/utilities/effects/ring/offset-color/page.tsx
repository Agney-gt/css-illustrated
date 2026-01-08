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

export default function RingOffsetColorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Ring Offset Color"
        description="Utilities for changing the color of the ring offset. Essential for blending the 'fake gap' into different background colors, especially in dark mode."
      />

      <MentalModelSection
        title="Understanding Ring Offset Color"
        description="The ring offset creates a gap by painting a solid stroke of color between the element and the ring. By default, this color is white. If your element sits on a dark background, the white offset will look like a glaring white border. You use `ring-offset-{color}` to match the parent background, creating the illusion of transparency."
        features={[
          "Sets the color of the 'gap' created by ring-offset-width",
          "Must match the PARENT background color to look like a gap",
          "Supports all Tailwind colors (e.g., ring-offset-slate-900)",
          "Does not support true transparency (it paints solid pixels)",
          "Crucial for dark mode layouts",
        ]}
        layerAssignment="Masking Layer - Paints the 'invisible' space between element and ring"
        browserBehavior="Browser renders this as the first, innermost solid box-shadow layer."
      />

      <ComparisonTable
        title="Ring Offset Color Strategy"
        columns={["Scenario", "Offset Color Needed", "Why?"]}
        rows={[
          {
            feature: "White Card",
            values: [
              "ring-offset-white (Default)",
              "Matches the white card background",
            ],
          },
          {
            feature: "Dark Mode",
            values: [
              "ring-offset-slate-900 (etc)",
              "Must match the dark background to 'disappear'",
            ],
          },
          {
            feature: "Brand Gradient",
            values: [
              "Not Recommended",
              "Ring offset is solid; cannot match a gradient perfectly",
            ],
          },
        ]}
      />

      <UtilityGrid
        title="Ring Offset Color Utilities"
        items={[
          { cls: "ring-offset-white", desc: "Default white offset" },
          { cls: "ring-offset-black", desc: "Black offset" },
          { cls: "ring-offset-slate-50", desc: "Slate-50 offset" },
          { cls: "ring-offset-slate-900", desc: "Slate-900 offset" },
          { cls: "ring-offset-transparent", desc: "Transparent (rarely used)" },
          { cls: "ring-offset-current", desc: "Current text color" },
        ]}
      />

      <section className="space-y-6 border-t border-border pt-8">
        <h2 className="text-3xl font-bold">Interactive Playground</h2>
        <p className="text-muted-foreground">
          See how different offset colors blend (or clash) with the background.
        </p>

        <UtilityPlayground
          title="Offset Color Playground"
          description="Test ring offset colors. We've set a distinct background color (slate-800) so you can see which offset color blends in correctly."
          options={[
            "ring-offset-white",
            "ring-offset-black",
            "ring-offset-slate-800",
            "ring-offset-red-500",
            "ring-offset-blue-200",
          ]}
          defaultValue="ring-offset-white"
          buildMarkup={(offsetColor) => {
            return `<button class="bg-blue-500 text-white px-6 py-3 rounded-lg ring-2 ring-blue-300 ring-offset-4 ${offsetColor}">
  Focus Me
</button>`;
          }}
          renderPreview={(offsetColor) => {
            return (
              <div className="w-full h-full flex items-center justify-center bg-slate-800 p-8 rounded-lg">
                <button
                  className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition-all ring-4 ring-blue-400 ring-offset-4 ${offsetColor}`}
                >
                  Offset Button
                </button>
              </div>
            );
          }}
        />
      </section>

      <InteractiveChallenge
        title="The Dark Mode Glitch"
        description="You have a dark-themed card with an avatar. The avatar has a `ring-offset-2` to create a gap, but the offset color defaults to `white`. This creates an ugly white border around the avatar on the dark background. Fix it by changing the offset color to match the card's background: `ring-offset-slate-900`."
        codeSnippet={`<div class="bg-slate-900 p-6 rounded-xl">
      <img 
        src="..." 
        class="w-12 h-12 rounded-full ring-2 ring-blue-500 ring-offset-2 {input}" 
      />
    </div>`}
        options={[
          "ring-offset-white",
          "ring-offset-gray-200",
          "ring-offset-black",
          "ring-offset-slate-900",
        ]}
        correctOption="ring-offset-slate-900"
        renderPreview={(userClass) => (
          <div className="flex items-center justify-center w-full h-full bg-slate-50 p-12 rounded-lg">
            {/* The Dark Card Container */}
            <div className="bg-slate-900 p-8 rounded-xl shadow-2xl flex flex-col items-center gap-4 w-64 border border-slate-800">
              <div className="relative">
                {/* Avatar with the user's ring settings */}
                <div
                  className={`
                        w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl
                        ring-2 ring-blue-500 ring-offset-2
                        ${userClass}
                        transition-all duration-300
                      `}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                {/* Status Dot (Just for decoration) */}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
              </div>

              <div className="text-center">
                <div className="text-white font-semibold">User Profile</div>
                <div className="text-slate-400 text-xs">Dark Mode</div>
              </div>
            </div>
          </div>
        )}
      />

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Dark Mode Focus Ring"
          description="Correctly blending the focus ring offset in a dark theme."
          code={`<button class="bg-slate-800 text-white px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900">
  Dark Action
</button>`}
        >
          <div className="p-8 bg-slate-900 rounded-lg flex justify-center">
            <button className="bg-slate-800 text-white px-4 py-2 rounded font-medium border border-slate-700 focus:outline-none ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900 shadow-lg">
              Dark Action (Simulated Focus)
            </button>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Avatar Group on Colored Header"
          description="Avatars overlapping on a colored background need a matching offset."
          code={`<div class="bg-indigo-600 p-4 flex -space-x-2">
  <img class="w-10 h-10 rounded-full ring-2 ring-indigo-600" src="..." />
  <img class="w-10 h-10 rounded-full ring-2 ring-indigo-600" src="..." />
</div>`}
        >
          <div className="bg-indigo-600 p-6 rounded-lg flex justify-center -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-indigo-200 border-2 border-indigo-600 flex items-center justify-center text-xs font-bold text-indigo-800"
                // Using border to simulate the "cutout" effect simply here,
                // but in reality ring+offset is often smoother.
                // Let's use ring offset for the demo:
                style={{ border: "none", boxShadow: "0 0 0 2px #4f46e5" }}
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
            title: "Using White Offset in Dark Mode",
            reason:
              "This is the most common error. It creates a jagged white halo around elements in dark themes.",
            example: `<div class="dark:bg-black"><button class="ring-offset-white">Halo Effect</button></div>`,
          },
          {
            title: "Offset on Gradient Backgrounds",
            reason:
              "Ring offset is a solid color. It cannot match a gradient background, so it will look like a solid border cutting through the gradient.",
            example: `<div class="bg-gradient-to-r ..."><button class="ring-offset-2">Looks bad</button></div>`,
          },
        ]}
      />

      <TipsSection
        tips={[
          {
            bold: "Theme Configuration:",
            text: "Use `dark:ring-offset-slate-900` utilities to automatically switch offset colors when toggling dark mode.",
          },
          {
            bold: "Gradient Fix:",
            text: "If your background is a gradient, avoid `ring-offset` entirely. Use `outline` with `outline-offset` instead, as outline supports transparency.",
          },
          {
            bold: "Smooth Transition:",
            text: "If you transition background colors, remember to add `transition-all` so the `ring-offset-color` transitions smoothly with the background.",
          },
        ]}
      />
    </div>
  );
}
