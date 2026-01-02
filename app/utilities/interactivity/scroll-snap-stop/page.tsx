"use client";

import { useState } from "react";
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
import {
  InteractiveChallenge,
  CodeTag,
  CodeAttr,
  CodeComment,
  ClassToggle,
} from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  {
    cls: "snap-normal",
    desc: "Allows skipping snap points when scrolling fast (default)",
  },
  {
    cls: "snap-always",
    desc: "Forces the scroll to stop at every snap point, preventing skipping",
  },
];

export default function ScrollSnapStopPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Snap Stop"
            description="Control whether scrolling must stop at each snap point or can skip past items when scrolling quickly. Critical for carousels where every item matters."
          />

          <MentalModelSection
            title="Understanding Snap Stop"
            description="Snap Stop is applied to the CHILD elements (the snap points). It dictates the 'braking power' of the snap point. Normal allows momentum to carry past it; Always acts like a brick wall, forcing a stop."
            features={[
              "Applied to children, not the container",
              "Controls momentum scrolling behavior",
              "snap-normal is standard (fast swipe = skip items)",
              "snap-always forces a stop at THIS element",
              "Essential for paginated tutorials or critical alerts",
            ]}
            layerAssignment="Interactivity Layer - Controls scroll momentum physics"
            browserBehavior="When a user swipes with high velocity, 'snap-always' overrides the physics engine to force a deceleration at the very next snap point."
          />

          <ComparisonTable
            title="Snap Stop Behavior"
            columns={["Class", "Swipe Effect", "User Feel", "Best For"]}
            rows={[
              {
                feature: "snap-normal",
                values: [
                  "Glides past multiple items",
                  "Fluid, fast",
                  "Photo galleries, long lists",
                ],
              },
              {
                feature: "snap-always",
                values: [
                  "Stops at EVERY item",
                  "Controlled, strict",
                  "Tutorials, Presentations, Full-screen pages",
                ],
              },
            ]}
          />

          <UtilityGrid title="Scroll Snap Stop Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Compare normal vs always stop behavior. Try swiping fast on touch
              devices or scrolling quickly.
            </p>

            <UtilityPlayground
              title="Snap Stop Playground"
              description="Switch between normal (skippable) and always (strict) stopping."
              options={utilities.map((u) => u.cls)}
              defaultValue="snap-normal"
              buildMarkup={(snapClass, customClasses = "") => {
                return `<div class="snap-x snap-mandatory overflow-x-auto flex gap-4 p-6 border rounded-xl bg-slate-50 ${customClasses}">
                <div class="w-1/2 shrink-0"></div>
                
                <div class="snap-center ${snapClass} shrink-0 w-48 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-md">
                Item 1
                </div>
                <div class="snap-center ${snapClass} shrink-0 w-48 h-32 bg-indigo-500 rounded-lg flex items-center justify-center text-white shadow-md">
                Item 2
                </div>
                <div class="snap-center ${snapClass} shrink-0 w-48 h-32 bg-purple-500 rounded-lg flex items-center justify-center text-white shadow-md">
                Item 3
                </div>
                <div class="snap-center ${snapClass} shrink-0 w-48 h-32 bg-pink-500 rounded-lg flex items-center justify-center text-white shadow-md">
                Item 4
                </div>
                
                <div class="w-1/2 shrink-0"></div>
                </div>`;
              }}
              renderPreview={(snapClass, customClasses = "") => {
                return (
                  <div
                    className={`snap-x snap-mandatory overflow-x-auto flex gap-4 p-6 border border-border rounded-xl bg-slate-50 dark:bg-slate-900 ${customClasses}`}
                  >
                    <div className="w-[40%] shrink-0"></div>
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`snap-center ${snapClass} shrink-0 w-48 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-md`}
                      >
                        Item {i}
                      </div>
                    ))}
                    <div className="w-[40%] shrink-0"></div>
                  </div>
                );
              }}
            />
          </section>
          <InteractiveChallenge
            title="The Runaway Carousel"
            description="This onboarding tutorial is too fast! Users are swiping quickly and missing steps 2 and 3 entirely. Force the scroll container to stop at every single slide so they don't miss anything."
            initialClass="snap-normal"
            correctClass="snap-always"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "snap-always";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>&lt;!-- Slide Container --&gt;</CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="snap-x ..." />{" "}
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>&lt;!-- Slide 1 --&gt;</CodeComment>
                    <div className="flex flex-wrap gap-2 items-center">
                      <CodeTag>&lt;div</CodeTag>
                      <span className="text-purple-400">class</span>
                      <span className="text-slate-300">=</span>
                      <span className="text-green-400">"snap-center ...</span>

                      {/* Toggle Button */}
                      <button
                        onClick={toggle}
                        className={`
                                mx-1 px-1.5 rounded border text-xs font-bold transition-all font-mono align-middle
                                ${
                                  isCorrect
                                    ? "bg-green-500/20 text-green-400 border-green-500/50"
                                    : "bg-red-500/20 text-red-400 border-red-500/50 animate-pulse"
                                }
                              `}
                      >
                        {cls}
                      </button>
                      <span className="text-green-400">"</span>
                      <CodeTag>&gt;</CodeTag>
                    </div>
                    <div className="pl-4 text-slate-500">Step 1...</div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>

                  <div className="pl-4 text-slate-500">
                    &lt;!-- Steps 2, 3, 4... --&gt;
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center overflow-hidden">
                {/* Scroll Container */}
                <div
                  className={`
                        w-full flex gap-4 px-[50%] overflow-x-auto pb-12 pt-12 items-center
                        snap-x snap-mandatory scroll-smooth
                      `}
                  onScroll={(e) => {
                    // Just a simple interaction check
                    if (cls === "snap-always" && !isSolved) {
                      setTimeout(onWin, 1000);
                    }
                  }}
                >
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`
                            shrink-0 w-64 h-48 rounded-2xl shadow-xl transform transition-all duration-300
                            flex flex-col items-center justify-center p-6 text-center
                            bg-slate-800 border border-slate-700
                            snap-center
                            ${cls} /* The Utility Class */
                            ${
                              isSolved
                                ? "border-green-500/50 bg-green-900/10"
                                : ""
                            }
                          `}
                    >
                      <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                        {i}
                      </div>
                      <h3 className="text-white font-bold text-lg mb-2">
                        Step {i}
                      </h3>
                      <p className="text-slate-400 text-xs">
                        {i === 1 && "Start here."}
                        {i === 2 && "Don't skip this!"}
                        {i === 3 && "Critical info."}
                        {i === 4 && "All done."}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Instructions */}
                <div className="absolute bottom-4 flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-slate-600"
                      />
                    ))}
                  </div>
                  <span className="text-slate-400 text-xs">
                    {isSolved
                      ? "Secure! Scrolling stops at every step. 🔒"
                      : "Try swiping fast! You might skip steps. 💨"}
                  </span>
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Full-screen Presentation"
              description="Ensures the user sees every slide without accidentally skipping one."
              code={`<div class="snap-y snap-mandatory h-screen overflow-y-scroll">
  <section class="snap-start snap-always h-screen bg-blue-600 flex items-center justify-center">
    Slide 1
  </section>
  <section class="snap-start snap-always h-screen bg-indigo-600 flex items-center justify-center">
    Slide 2
  </section>
</div>`}
            >
              <div className="h-64 snap-y snap-mandatory overflow-y-scroll border rounded-xl relative bg-slate-900">
                <div className="snap-start snap-always h-64 w-full flex items-center justify-center bg-blue-600 text-white font-bold text-2xl">
                  Slide 1
                </div>
                <div className="snap-start snap-always h-64 w-full flex items-center justify-center bg-indigo-600 text-white font-bold text-2xl">
                  Slide 2
                </div>
                <div className="absolute bottom-2 right-2 text-xs bg-black/50 text-white px-2 rounded pointer-events-none">
                  Scroll Y
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Date Picker Wheel"
              description="Ensures the wheel stops exactly on a number, never in between or skipping too fast."
              code={`<div class="snap-y snap-mandatory h-32 overflow-y-scroll">
  <div class="snap-center snap-always py-2">January</div>
  <div class="snap-center snap-always py-2">February</div>
  <div class="snap-center snap-always py-2">March</div>
</div>`}
            >
              <div className="h-32 snap-y snap-mandatory overflow-y-scroll relative bg-white dark:bg-slate-900 border rounded-xl no-scrollbar">
                <div className="py-[35%] space-y-0 text-center font-medium text-slate-600 dark:text-slate-300">
                  {["Jan", "Feb", "Mar", "Apr", "May"].map((m) => (
                    <div
                      key={m}
                      className="snap-center snap-always h-10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Applying snap-always to the container",
                reason:
                  "snap-stop classes belong on the CHILDREN, just like snap-align.",
                example: `<div class="snap-x snap-always"> <div>Item</div>
</div>`,
              },
              {
                title: "Using snap-always on long lists",
                reason:
                  "Forcing stops on a list of 100 items can be frustrating. Users want to scroll fast to the bottom.",
                example: `<div class="snap-y">
  <div class="snap-always">Item 1...100</div>
</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Context matters:",
                text: "Use `snap-always` for pagination (slides, steps). Use `snap-normal` for free-scrolling lists.",
              },
              {
                bold: "Mix & Match:",
                text: "You can mix them! Maybe the first item is `snap-always` (intro) and the rest are `snap-normal`.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
