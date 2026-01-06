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

const utilities = [
  {
    cls: "snap-normal",
    desc: "Allows scrolling to skip snap points when scrolling fast (default)",
  },
  {
    cls: "snap-always",
    desc: "Forces the scroll to stop at every snap point",
  },
];

export default function ScrollSnapStopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Snap Stop"
            description="Control whether scrolling must stop at each snap point or can skip past items when scrolling quickly. Critical for ensuring users see every item in a list."
          />

          <MentalModelSection
            title="Understanding Snap Stop"
            description="When a user swipes forcefully on a touch screen or scroll wheel, the natural momentum might carry them past several items. `snap-stop` controls this physics engine. It decides if the momentum should be 'arrested' at the very next snap point, or if it can fly past multiple points."
            features={[
              "Applied to the CHILD items, not the container",
              "Works with `snap-x` or `snap-y` containers",
              "snap-normal: Default physics (can skip items)",
              "snap-always: 'Hard brake' physics (stops at every item)",
              "Essential for paginated content like slides or onboarding",
            ]}
            layerAssignment="Interactivity Layer - Modifies scroll momentum physics"
            browserBehavior="If 'always', the browser interrupts the scroll inertia to force a stop at the first encountered snap point."
          />

          <ComparisonTable
            title="Normal vs Always"
            columns={["Class", "Scroll Behavior", "Best Use Case"]}
            rows={[
              {
                feature: "snap-normal",
                values: [
                  "Fluid, can skip items",
                  "Long lists, Photo galleries, Timelines",
                ],
              },
              {
                feature: "snap-always",
                values: [
                  "Strict, stops at every item",
                  "Presentations, Onboarding, Full-screen sections",
                ],
              },
            ]}
          />

          <UtilityGrid title="Scroll Snap Stop Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Swipe fast (if on touch) or scroll quickly to feel the difference.
            </p>

            <UtilityPlayground
              title="Snap Stop Playground"
              description="Switch between normal and forced stopping behavior."
              options={utilities.map((u) => u.cls)}
              defaultValue="snap-normal"
              buildMarkup={(stopClass, customClasses = "") => {
                return `<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 border rounded-xl bg-slate-900 ${customClasses}">
  <div class="${stopClass} snap-center shrink-0 w-48 h-32 bg-indigo-500 rounded-lg flex items-center justify-center text-white">Item 1</div>
  <div class="${stopClass} snap-center shrink-0 w-48 h-32 bg-indigo-600 rounded-lg flex items-center justify-center text-white">Item 2</div>
  <div class="${stopClass} snap-center shrink-0 w-48 h-32 bg-indigo-700 rounded-lg flex items-center justify-center text-white">Item 3</div>
  <div class="${stopClass} snap-center shrink-0 w-48 h-32 bg-indigo-800 rounded-lg flex items-center justify-center text-white">Item 4</div>
</div>`;
              }}
              renderPreview={(stopClass, customClasses = "") => {
                return (
                  <div
                    className={`
                    w-full max-w-md snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 border border-slate-700 rounded-xl bg-slate-900 shadow-inner no-scrollbar
                    ${customClasses}
                  `}
                  >
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className={`
                          ${stopClass} snap-center shrink-0 w-48 h-32 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl border border-white/10
                        `}
                      >
                        {i}
                      </div>
                    ))}
                    <div className="shrink-0 w-24"></div>
                  </div>
                );
              }}
            />
          </section>

          {/* 🟢 THE INTERACTIVE CHALLENGE */}
          <InteractiveChallenge
            title="The Skippable Intro"
            description="This is an onboarding flow for a new app. Currently, users can swipe quickly and accidentally skip the middle slides (`snap-normal`), missing crucial instructions. Apply `snap-always` to the slides so the user is forced to see every single step."
            codeSnippet={`<div class="w-64 h-80 border rounded-xl overflow-hidden bg-white shadow-2xl relative">
  <div class="flex overflow-x-auto snap-x snap-mandatory h-full w-full no-scrollbar">
    
    <div class="{input} snap-center shrink-0 w-full h-full bg-blue-500 text-white flex flex-col items-center justify-center p-6 text-center">
      <div class="text-4xl mb-4">👋</div>
      <h3 class="font-bold text-lg">Welcome!</h3>
      <p class="text-sm opacity-90">Swipe to begin.</p>
    </div>

    <div class="{input} snap-center shrink-0 w-full h-full bg-purple-500 text-white flex flex-col items-center justify-center p-6 text-center">
      <div class="text-4xl mb-4">🔒</div>
      <h3 class="font-bold text-lg">Secure</h3>
      <p class="text-sm opacity-90">Your data is safe.</p>
    </div>

    <div class="{input} snap-center shrink-0 w-full h-full bg-green-500 text-white flex flex-col items-center justify-center p-6 text-center">
      <div class="text-4xl mb-4">🚀</div>
      <h3 class="font-bold text-lg">Ready</h3>
      <p class="text-sm opacity-90">Let's go!</p>
    </div>

  </div>
</div>`}
            options={[
              "snap-normal",
              "snap-center",
              "snap-always",
              "scroll-smooth",
            ]}
            correctOption="snap-always"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-64 h-80 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-2xl relative group">
                  <div className="flex overflow-x-auto snap-x snap-mandatory h-full w-full no-scrollbar">
                    {/* Items */}
                    {[
                      {
                        icon: "👋",
                        title: "Welcome!",
                        text: "Swipe to begin.",
                        color: "bg-blue-500",
                      },
                      {
                        icon: "🔒",
                        title: "Secure",
                        text: "Your data is safe.",
                        color: "bg-purple-500",
                      },
                      {
                        icon: "🚀",
                        title: "Ready",
                        text: "Let's go!",
                        color: "bg-green-500",
                      },
                    ].map((slide, i) => (
                      <div
                        key={i}
                        className={`
                          snap-center shrink-0 w-full h-full ${slide.color} text-white flex flex-col items-center justify-center p-6 text-center
                          ${userClass}
                        `}
                      >
                        <div className="text-4xl mb-4 drop-shadow-md">
                          {slide.icon}
                        </div>
                        <h3 className="font-bold text-xl mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-sm opacity-90">{slide.text}</p>
                        <div className="mt-8 text-[10px] opacity-50 font-mono">
                          Slide {i + 1}/3
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Visualizer */}
                  {userClass === "snap-always" && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse delay-75"></div>
                      <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse delay-150"></div>
                    </div>
                  )}

                  {userClass === "snap-always" && (
                    <div className="absolute top-4 right-4 bg-black/30 text-white text-[10px] px-2 py-1 rounded backdrop-blur-sm border border-white/20 animate-in fade-in">
                      ⚠️ Stop Forced
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Product carousel (precise)"
              description="Encourages users to view each product one at a time without skipping."
              code={`<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4">
  <div class="snap-center snap-always w-64 h-40 bg-slate-800 rounded-lg">
    Product A
  </div>
  <div class="snap-center snap-always w-64 h-40 bg-slate-700 rounded-lg">
    Product B
  </div>
</div>`}
            >
              <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 bg-slate-900 rounded-lg no-scrollbar">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="snap-center snap-always shrink-0 w-48 h-32 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 font-medium shadow-md border border-slate-600"
                  >
                    Product {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Media scrubber / timeline"
              description="Allows users to jump quickly across long timelines by allowing skips (snap-normal)."
              code={`<div class="snap-x snap-proximity overflow-x-auto flex gap-4 p-4">
  <div class="snap-start snap-normal w-32 h-16 bg-green-600 rounded">00:10</div>
  <div class="snap-start snap-normal w-32 h-16 bg-green-700 rounded">01:20</div>
</div>`}
            >
              <div className="snap-x snap-proximity overflow-x-auto flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 no-scrollbar">
                {["00:10", "01:20", "02:45", "03:15"].map((time, i) => (
                  <div
                    key={i}
                    className="snap-start snap-normal shrink-0 w-24 h-16 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-sm"
                  >
                    {time}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Onboarding steps"
              description="Ensures users progress through steps in order without accidentally swiping past one."
              code={`<div class="snap-x snap-mandatory overflow-x-auto flex gap-0 w-full">
  <div class="snap-center snap-always w-full h-48 bg-blue-600">Step 1</div>
  <div class="snap-center snap-always w-full h-48 bg-blue-700">Step 2</div>
</div>`}
            >
              <div className="snap-x snap-mandatory overflow-x-auto flex gap-0 w-full max-w-xs mx-auto rounded-lg overflow-hidden no-scrollbar">
                {["Step 1", "Step 2", "Step 3"].map((step, i) => (
                  <div
                    key={i}
                    className={`snap-center snap-always shrink-0 w-full h-32 flex items-center justify-center text-white font-bold ${
                      i === 0
                        ? "bg-blue-600"
                        : i === 1
                        ? "bg-blue-700"
                        : "bg-blue-800"
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Using on the container",
                reason:
                  "`snap-stop` classes must be placed on the CHILD items, not the scroll container itself.",
                example: `<div class="snap-x snap-always"> <div class="snap-center">...</div>
</div>`,
              },
              {
                title: "Overusing snap-always",
                reason:
                  "Forcing stops on long lists (like a photo gallery with 50 items) can feel frustrating and slow to navigate.",
                example: `<div class="snap-always"> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Context is Key:",
                text: "Use `snap-always` for paginated content where each item represents a distinct 'state' or 'slide'. Use `snap-normal` for browsing lists.",
              },
              {
                bold: "Touch vs Mouse:",
                text: "This property is most noticeable on touch devices where momentum scrolling is common. It might feel less impactful on a mouse wheel.",
              },
              {
                bold: "Mandatory:",
                text: "Usually combined with `snap-mandatory` on the parent to ensure the scroll always lands on a snap point, never in between.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
