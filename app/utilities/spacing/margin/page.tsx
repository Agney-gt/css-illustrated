"use client";

import React from "react";
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
} from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  { cls: "m-4", desc: "Apply margin to all sides" },
  { cls: "mx-auto", desc: "Center block elements horizontally" },
  { cls: "my-8", desc: "Apply vertical margin (top & bottom)" },
  { cls: "mt-4", desc: "Apply margin to the top only" },
  { cls: "-m-2", desc: "Apply negative margin (pull elements closer)" },
];

export default function MarginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Margin"
            description="Control the outer spacing of an element. Use margin to separate elements from their neighbors or center them within a container."
          />

          <MentalModelSection
            title="Margin vs. Padding"
            description="The Box Model is the foundation of CSS layout. Margin is the 'personal space' outside your element's border, pushing other elements away. Padding is the space inside the border, pushing the element's own content inward."
            features={[
              "Margin pushes neighbors away (Outer Space)",
              "Padding pushes content inward (Inner Space)",
              "Margins can collapse (overlap) vertically",
              "mx-auto is the standard technique for centering containers",
              "Negative margins can pull elements into overlap",
            ]}
            layerAssignment="Layout Layer - Defines element positioning and separation"
            browserBehavior="Margin is transparent and not part of the element's clickable area or background color. Vertical margins between block elements often collapse into the larger of the two values."
          />

          <ComparisonTable
            title="Spacing Strategies"
            columns={["Property", "Direction", "Visual Effect", "Best For"]}
            rows={[
              {
                feature: "m-{size}",
                values: ["All sides", "Isolates element", "Cards, Images"],
              },
              {
                feature: "mx-{size}",
                values: [
                  "Left & Right",
                  "Horizontal spacing",
                  "Buttons, Inline items",
                ],
              },
              {
                feature: "my-{size}",
                values: [
                  "Top & Bottom",
                  "Vertical spacing",
                  "Paragraphs, Sections",
                ],
              },
              {
                feature: "mx-auto",
                values: ["Left & Right", "Centers element", "Page containers"],
              },
            ]}
          />

          <UtilityGrid title="Common Margin Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Adjust the margin of the blue box to see how it pushes away from
              the surrounding text.
            </p>

            <UtilityPlayground
              title="Margin Playground"
              description="See how margin affects layout flow."
              options={["m-0", "m-4", "mx-8", "my-8", "ml-12"]}
              defaultValue="m-0"
              buildMarkup={(marginClass, customClasses = "") => {
                return `<div class="bg-slate-50 border rounded-lg p-4 text-slate-600 font-mono text-sm">
  <span>Text Before</span>
  <div class="${marginClass} inline-block bg-blue-500 text-white p-2 rounded ${customClasses}">
    Target
  </div>
  <span>Text After</span>
</div>`;
              }}
              renderPreview={(marginClass, customClasses = "") => {
                return (
                  <div className="bg-slate-50 border border-border rounded-lg p-8 text-slate-600 font-mono text-sm flex flex-wrap items-center">
                    <span className="bg-slate-200 p-2 rounded">Sibling 1</span>
                    <div
                      className={`${marginClass} bg-blue-500 text-white p-4 rounded shadow-lg transition-all duration-300 ${customClasses}`}
                    >
                      Target
                    </div>
                    <span className="bg-slate-200 p-2 rounded">Sibling 2</span>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Clingy Buttons"
            description="These two buttons are glued together, which looks broken and risks accidental clicks. Add a left margin to the 'Confirm' button to create a safe gap."
            initialClass="ml-0"
            correctClass="ml-4"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "ml-4";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>&lt;!-- Actions Container --&gt;</CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="flex" />{" "}
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeTag>&lt;button&gt;</CodeTag>Cancel
                    <CodeTag>&lt;/button&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>&lt;!-- The Confirm Button --&gt;</CodeComment>
                    <div className="flex flex-wrap gap-2 items-center">
                      <CodeTag>&lt;button</CodeTag>
                      <span className="text-purple-400">class</span>
                      <span className="text-slate-300">=</span>
                      <span className="text-green-400">"bg-blue-600 ...</span>

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
                    <div className="pl-4 text-slate-500">Confirm</div>
                    <CodeTag>&lt;/button&gt;</CodeTag>
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-100 rounded-xl shadow-inner border border-slate-200 flex flex-col items-center justify-center p-8">
                {/* Modal Simulation */}
                <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-2">
                    Delete Account?
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">
                    This action cannot be undone. Are you sure?
                  </p>

                  <div className="flex items-center justify-end relative">
                    <button className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded transition-colors">
                      Cancel
                    </button>

                    {/* Visualizer for the gap (appears between buttons) */}
                    {isSolved && (
                      <div className="mx-1 h-6 flex flex-col items-center justify-center animate-in fade-in zoom-in">
                        <div className="w-4 border-t border-red-400/50 relative top-1/2"></div>
                        <span className="text-[9px] text-red-500 font-mono bg-red-50 px-1 rounded relative -top-2">
                          16px
                        </span>
                      </div>
                    )}

                    {/* The Target Button */}
                    <button
                      onClick={() => {
                        if (cls === "ml-4") onWin();
                      }}
                      className={`
                          px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded shadow-sm transition-all duration-300
                          ${cls} /* The Utility Class */
                          ${
                            isSolved
                              ? "ring-2 ring-green-500 ring-offset-2"
                              : ""
                          }
                        `}
                    >
                      Confirm
                    </button>
                  </div>
                </div>

                {/* Error Overlay */}
                {!isSolved && cls === "ml-0" && (
                  <div className="absolute bottom-6 bg-red-100 text-red-600 text-xs px-3 py-1.5 rounded-full font-bold animate-pulse">
                    Risk of misclick! Buttons are touching.
                  </div>
                )}
              </div>
            )}
          />
          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Centering a Container"
              description="Using mx-auto with a max-width is the standard way to center page content."
              code={`<div class="max-w-md mx-auto bg-white rounded-xl shadow p-6">
  <h2 class="font-bold">Centered Card</h2>
  <p>This card stays in the middle of the screen.</p>
</div>`}
            >
              <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-lg">
                <div className="max-w-[200px] mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
                </div>
                <p className="text-center text-xs text-slate-400 mt-2">
                  mx-auto
                </p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Overlapping Elements"
              description="Using negative margin to pull an element over another."
              code={`<div class="bg-slate-800 h-32 rounded-t-xl"></div>
<div class="-mt-12 mx-6 bg-white p-4 rounded-xl shadow-lg relative">
  <h3 class="font-bold">Overlapping Card</h3>
</div>`}
            >
              <div className="p-4">
                <div className="bg-slate-800 h-24 rounded-t-xl w-full"></div>
                <div className="-mt-10 mx-6 bg-white dark:bg-slate-700 p-4 rounded-xl shadow-lg relative border border-slate-100 dark:border-slate-600">
                  <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-500 rounded"></div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="List Spacing"
              description="Using vertical margin (or space-y) to separate list items."
              code={`<ul>
  <li class="bg-white p-4 rounded shadow mb-4">Item 1</li>
  <li class="bg-white p-4 rounded shadow mb-4">Item 2</li>
  <li class="bg-white p-4 rounded shadow">Item 3</li>
</ul>`}
            >
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm mb-3 text-xs">
                  Item 1
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm mb-3 text-xs">
                  Item 2
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm text-xs">
                  Item 3
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Margin vs Padding",
                reason:
                  "Using margin to create space INSIDE a box (like text from a border) is wrong. Use padding for internal space, margin for external separation.",
                example: `<div class="bg-blue-500 m-4 text-white">...</div> <div class="bg-blue-500 p-4 text-white">...</div> `,
              },
              {
                title: "Collapsing Margins",
                reason:
                  "Vertical margins between two blocks often collapse to the largest value, rather than adding up. Padding does not collapse.",
                example: `<div class="mb-8">...</div>
<div class="mt-8">...</div>
`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Gap vs Margin:",
                text: "In flex or grid layouts, prefer `gap-*` (or `space-x/y-*`) over individual margins. It's cleaner and handles first/last child logic for you.",
              },
              {
                bold: "Centering:",
                text: "`mx-auto` only works if the element has a defined width (or max-width) and is display: block (or flex).",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
