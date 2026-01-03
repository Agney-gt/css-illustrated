"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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

const axisUtilities = [
  { className: "snap-none", desc: "Disable scroll snapping" },
  { className: "snap-x", desc: "Enable horizontal snapping" },
  { className: "snap-y", desc: "Enable vertical snapping" },
  { className: "snap-both", desc: "Enable snapping on both axes" },
];

const behaviorUtilities = [
  { className: "snap-mandatory", desc: "Force snapping to snap points" },
  { className: "snap-proximity", desc: "Snap when close to a snap point" },
];

export default function ScrollSnapTypePage() {
  const [axis, setAxis] = useState("snap-x");
  const [behavior, setBehavior] = useState("snap-mandatory");

  const activeClass = `${axis} ${behavior}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Snap Type"
            description="Define the scroll snapping behavior of a container. Control the direction (axis) and strictness (mandatory vs proximity) of snapping physics."
          />

          <MentalModelSection
            title="Understanding Scroll Snap Type"
            description="Think of Scroll Snap Type as enabling 'magnetism' on a scroll container. You define the direction of the magnetic field (x or y) and how strong the magnet is (mandatory or proximity). Without this property on the parent, any `snap-align` utilities on children are ignored."
            features={[
              "Applied to the SCROLL CONTAINER (parent)",
              "Mandatory: Always rests on a snap point",
              "Proximity: Only snaps if scrolling stops close enough",
              "Essential for carousels, full-page slides, and lists",
              "Works natively in all modern browsers",
            ]}
            layerAssignment="Interactivity Layer - Activates and configures scroll physics engine"
            browserBehavior="Tells the browser to monitor scroll position and velocity, and to animate to a specific point when the user stops interacting."
          />

          <ComparisonTable
            title="Mandatory vs Proximity"
            columns={["Strictness", "Behavior", "Best Use Case"]}
            rows={[
              {
                feature: "snap-mandatory",
                values: [
                  "Strict (Always Snaps)",
                  "Full-screen slides, Product carousels",
                ],
              },
              {
                feature: "snap-proximity",
                values: [
                  "Loose (Conditional Snap)",
                  "Long articles, Lists where free-scrolling is okay",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Scroll Snap Type Utilities"
            items={[...axisUtilities, ...behaviorUtilities].map((u) => ({
              cls: u.className,
              desc: u.desc,
            }))}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Adjust the axis and strictness to feel the difference in scroll
              physics.
            </p>

            <UtilityPlayground
              title="Snap Type Playground"
              description="Combine axis and behavior utilities."
              options={[
                "snap-x snap-mandatory",
                "snap-x snap-proximity",
                "snap-y snap-mandatory",
                "snap-none",
              ]}
              defaultValue="snap-x snap-mandatory"
              buildMarkup={(snapClass, customClasses = "") => {
                const isY = snapClass.includes("snap-y");
                return `<div class="${snapClass} overflow-${
                  isY ? "y" : "x"
                }-auto flex ${
                  isY ? "flex-col" : ""
                } gap-6 p-6 border rounded-xl bg-slate-50 ${customClasses}">
  <div class="snap-center shrink-0 w-64 h-36 bg-blue-500 rounded-xl flex items-center justify-center text-white">1</div>
  <div class="snap-center shrink-0 w-64 h-36 bg-blue-600 rounded-xl flex items-center justify-center text-white">2</div>
  <div class="snap-center shrink-0 w-64 h-36 bg-blue-700 rounded-xl flex items-center justify-center text-white">3</div>
</div>`;
              }}
              renderPreview={(snapClass, customClasses = "") => {
                const isY = snapClass.includes("snap-y");
                return (
                  <div
                    className={`
                    ${snapClass} overflow-auto flex ${
                      isY ? "flex-col h-64 w-full" : "flex-row w-full"
                    } gap-6 p-6 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 shadow-inner no-scrollbar
                    ${customClasses}
                  `}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`
                          snap-center shrink-0 w-64 h-36 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold text-3xl shadow-md
                        `}
                      >
                        {i}
                      </div>
                    ))}
                    {/* Spacer for snap end */}
                    <div className="shrink-0 w-1 h-1"></div>
                  </div>
                );
              }}
            />
          </section>

          {/* 🟢 THE INTERACTIVE CHALLENGE */}
          <InteractiveChallenge
            title="The Loose Stories"
            description="This story viewer scrolls freely, making it hard to land exactly on a story. It feels 'loose' and unpolished. Apply `snap-x snap-mandatory` to the container to enforce strict horizontal snapping."
            codeSnippet={`<div class="w-full max-w-sm aspect-[9/16] bg-black rounded-3xl overflow-hidden relative shadow-2xl border-4 border-slate-800">
  
  <div class="absolute top-4 left-0 right-0 px-6 flex justify-between text-white text-xs z-20 font-medium">
    <span>9:41</span>
    <span>5G</span>
  </div>

  <div class="{input} flex w-full h-full overflow-x-auto no-scrollbar">
    
    <div class="snap-center shrink-0 w-full h-full bg-indigo-600 flex items-center justify-center relative">
      <h2 class="text-white text-4xl font-bold tracking-tighter">STORY<br>ONE</h2>
    </div>

    <div class="snap-center shrink-0 w-full h-full bg-purple-600 flex items-center justify-center relative">
      <h2 class="text-white text-4xl font-bold tracking-tighter">STORY<br>TWO</h2>
    </div>

    </div>
</div>`}
            options={[
              "snap-none",
              "snap-y snap-mandatory",
              "overflow-hidden",
              "snap-x snap-mandatory",
            ]}
            correctOption="snap-x snap-mandatory"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-64 aspect-[9/16] bg-black rounded-3xl overflow-hidden relative shadow-2xl border-[6px] border-slate-800 group">
                  {/* Fake UI */}
                  <div className="absolute top-3 left-0 right-0 px-5 flex justify-between text-white/80 text-[10px] z-20 font-medium tracking-wide">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                    </div>
                  </div>

                  {/* Scroll Container */}
                  <div
                    className={`${userClass} flex w-full h-full overflow-x-auto no-scrollbar`}
                  >
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`
                          snap-center shrink-0 w-full h-full flex flex-col items-center justify-center relative
                          ${
                            i === 1
                              ? "bg-gradient-to-b from-indigo-500 to-purple-600"
                              : i === 2
                              ? "bg-gradient-to-b from-purple-500 to-pink-600"
                              : "bg-gradient-to-b from-pink-500 to-orange-500"
                          }
                        `}
                      >
                        <h2 className="text-white text-4xl font-black tracking-tighter leading-none text-center drop-shadow-lg">
                          STORY
                          <br />
                          {i === 1 ? "ONE" : i === 2 ? "TWO" : "THREE"}
                        </h2>
                        <div className="mt-4 text-white/50 text-xs font-mono uppercase tracking-widest">
                          Swipe Left
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Success Visualizer */}
                  {userClass.includes("snap-mandatory") && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none z-30">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce delay-75"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce delay-150"></div>
                    </div>
                  )}

                  {/* Hint */}
                  {userClass === "snap-none" && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/20 z-30">
                      <div className="bg-red-500/80 text-white text-xs px-2 py-1 rounded font-bold rotate-12">
                        No Magnet!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Horizontal carousel"
              description="Uses 'snap-x snap-mandatory' to lock slides into place horizontally."
              code={`<div class="snap-x snap-mandatory overflow-x-auto flex gap-6 p-4 rounded-xl bg-slate-900">
  <div class="snap-center w-64 h-32 bg-slate-700 rounded-lg shrink-0"></div>
  <div class="snap-center w-64 h-32 bg-slate-600 rounded-lg shrink-0"></div>
  </div>`}
            >
              <div className="snap-x snap-mandatory overflow-x-auto flex gap-4 p-4 bg-slate-900 rounded-lg no-scrollbar">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="snap-center shrink-0 w-48 h-32 bg-slate-700 rounded-lg flex items-center justify-center text-slate-500 border border-slate-600 shadow-lg"
                  >
                    Slide {i}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Vertical page sections"
              description="Uses 'snap-y snap-proximity' for a natural scrolling feel that aligns sections when close."
              code={`<div class="snap-y snap-proximity h-48 overflow-y-auto rounded-xl border bg-white p-4 space-y-6">
  <div class="snap-start h-32 bg-green-600 text-white flex items-center justify-center rounded-lg">Section 1</div>
  <div class="snap-start h-32 bg-green-700 text-white flex items-center justify-center rounded-lg">Section 2</div>
</div>`}
            >
              <div className="snap-y snap-proximity h-48 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-4 space-y-6 no-scrollbar">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="snap-start shrink-0 h-32 rounded-lg bg-green-600 text-white flex items-center justify-center font-bold shadow-md"
                  >
                    Section {i}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Two-axis gallery"
              description="Snapping on both axes for a grid-like panning experience."
              code={`<div class="snap-both snap-mandatory h-48 overflow-auto grid grid-cols-2 gap-4 bg-slate-50 p-4">
  <div class="snap-center h-32 bg-indigo-600 rounded-lg"></div>
  <div class="snap-center h-32 bg-indigo-700 rounded-lg"></div>
  </div>`}
            >
              <div className="snap-both snap-mandatory h-48 overflow-auto grid grid-cols-2 gap-4 p-4 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="snap-center h-32 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Forgetting axis direction",
                reason:
                  "`snap-mandatory` alone does nothing. You must specify `snap-x`, `snap-y`, or `snap-both`.",
                example: `<div class="snap-mandatory"> `,
              },
              {
                title: "Not setting overflow",
                reason:
                  "Scroll snapping relies on the container having scrolling content. Without `overflow-auto` or `overflow-scroll`, snapping won't trigger.",
                example: `<div class="snap-x snap-mandatory"> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Mandatory vs Proximity:",
                text: "Use `snap-mandatory` when you want strict stops (slides). Use `snap-proximity` when you want fluid scrolling that 'suggests' alignment but doesn't force it.",
              },
              {
                bold: "Nested Snapping:",
                text: "You can nest snap containers! A vertical page snap container can hold a horizontal carousel snap container.",
              },
              {
                bold: "Touch vs Wheel:",
                text: "Snapping behavior feels different on trackpads vs mouse wheels. Always test on both.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
