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
} from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  {
    cls: "field-sizing-fixed",
    desc: "Form element size is determined by width/height properties (Default)",
  },
  {
    cls: "field-sizing-content",
    desc: "Form element adapts its size to fit the content",
  },
];

export default function FieldSizingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Field Sizing"
            description="Control how form inputs and textareas resize based on their content. Create auto-growing inputs without JavaScript."
          />

          <MentalModelSection
            title="Understanding Field Sizing"
            description="Field Sizing is a Content layer utility that changes how the browser calculates the intrinsic size of form controls. It allows inputs to behave like 'fit-content' elements."
            features={[
              "Enables auto-growing textareas without JavaScript hacks",
              "Allows text inputs to shrink/grow based on typed value",
              "Respects min-width, max-width, min-height, and max-height constraints",
              "Works natively in modern browsers",
              "Great for chat inputs, dynamic titles, and code editors",
            ]}
            layerAssignment="Content Layer - Controls intrinsic sizing logic of replaced elements"
            browserBehavior="Browser recalculates layout of the input element on every keystroke to wrap the content tightly."
          />

          <ComparisonTable
            title="Field Sizing vs Traditional Methods"
            columns={["Method", "Auto-grow", "Performance", "Implementation"]}
            rows={[
              {
                feature: "field-sizing-content",
                values: [
                  "✅ Native CSS",
                  "🚀 High (Layout engine)",
                  "One CSS class",
                ],
              },
              {
                feature: "JS (resize observer)",
                values: [
                  "✅ Yes",
                  "⚠️ Medium (JS overhead)",
                  "Event listeners + Height calc",
                ],
              },
              {
                feature: "contenteditable",
                values: [
                  "✅ Yes",
                  "❌ Low (Security risks)",
                  "Complex HTML structure",
                ],
              },
              {
                feature: "rows='5'",
                values: ["❌ Fixed size", "🚀 High", "Static attribute"],
              },
            ]}
          />

          <UtilityGrid title="Field Sizing Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Compare fixed vs. content sizing on different inputs. Try typing
              in the fields below.
            </p>

            <UtilityPlayground
              title="Field Sizing Playground"
              description="Type in the inputs to see how they resize."
              options={utilities.map((u) => u.cls)}
              defaultValue="field-sizing-fixed"
              buildMarkup={(sizingClass, customClasses = "") => {
                return `<div class="space-y-6 max-w-sm mx-auto p-4 ${customClasses}">
  <label class="block space-y-2">
  <span class="text-sm font-medium">Dynamic Title</span>
  <input 
  type="text" 
  class="${sizingClass} min-w-[150px] p-2 text-xl font-bold border-b-2 border-primary bg-transparent focus:outline-none"
  value="Untitled Doc"
  />
  </label>
  
  <label class="block space-y-2">
  <span class="text-sm font-medium">Auto-growing Notes</span>
  <textarea 
  class="${sizingClass} w-full p-3 border rounded-lg bg-background min-h-[40px]"
  placeholder="Type multiple lines..."
  >Type more text here to see me grow...</textarea>
  </label>
  </div>`;
              }}
              renderPreview={(sizingClass, customClasses = "") => {
                return (
                  <div
                    className={`space-y-6 max-w-sm mx-auto p-4 ${customClasses}`}
                  >
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-foreground">
                        Dynamic Title
                      </span>
                      <input
                        type="text"
                        className={`${sizingClass} min-w-[150px] p-2 text-xl font-bold border-b-2 border-primary bg-transparent focus:outline-none text-foreground`}
                        defaultValue="Untitled Doc"
                      />
                    </label>

                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-foreground">
                        Auto-growing Notes
                      </span>
                      <textarea
                        className={`${sizingClass} w-full p-3 border border-border rounded-lg bg-background text-foreground min-h-[40px]`}
                        placeholder="Type multiple lines..."
                        defaultValue="Type more text here to see me grow..."
                      ></textarea>
                    </label>
                  </div>
                );
              }}
            />
          </section>
          <InteractiveChallenge
            title="The Cramped Comment Box"
            description="Users are complaining that they can't see their whole message while typing long reviews. The comment box is stuck at a fixed height. Use 'field-sizing-content' to make it expand automatically."
            initialClass="field-sizing-fixed"
            correctClass="field-sizing-content"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "field-sizing-content";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>&lt;!-- Comment Form --&gt;</CodeComment>
                    <CodeTag>&lt;form</CodeTag>{" "}
                    <CodeAttr name="class" value="max-w-md mx-auto" />
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>&lt;!-- The Textarea --&gt;</CodeComment>
                    <CodeTag>&lt;textarea</CodeTag>
                  </div>

                  <div className="pl-8 flex flex-wrap gap-2 items-center">
                    <span className="text-purple-400">className</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">
                      "w-full min-h-[40px] ...
                    </span>

                    {/* Custom Toggle Button */}
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
                  </div>

                  <div className="pl-4">
                    <CodeTag>&gt;</CodeTag>
                    <span className="text-slate-400">...content...</span>
                    <CodeTag>&lt;/textarea&gt;</CodeTag>
                  </div>

                  <div>
                    <CodeTag>&lt;/form&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-72 bg-slate-50 rounded-xl shadow-inner border border-slate-200 flex flex-col items-center justify-center p-8 overflow-hidden">
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                  <div className="p-4 bg-slate-100 border-b border-slate-200 flex justify-between items-center">
                    <span className="font-semibold text-slate-700 text-sm">
                      Write a review
                    </span>
                    {isSolved && (
                      <span className="text-green-600 text-xs font-bold animate-pulse">
                        AUTO-EXPAND ACTIVE
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xs">
                        JD
                      </div>

                      {/* THE TARGET INPUT */}
                      <textarea
                        className={`
                w-full p-3 rounded-lg border border-slate-300 
                text-slate-700 text-sm leading-relaxed
                focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none
                bg-slate-50
                resize-none /* Disable manual resize to force utility usage */
                
                /* The Utility Class */
                ${cls}
                
                ${
                  isSolved
                    ? "shadow-[0_0_15px_rgba(59,130,246,0.3)] border-blue-400"
                    : ""
                }
              `}
                        placeholder="Share your experience..."
                        // Pre-filled long content to demonstrate the issue
                        defaultValue="I absolutely loved this product! It has completely changed my workflow. The interface is intuitive, the features are robust, and the support team is super responsive. I would highly recommend this to anyone looking for a solution that just works right out of the box."
                        // Win condition: User interacts with the "fixed" text area
                        onClick={() => {
                          if (cls === "field-sizing-content") onWin();
                        }}
                        onChange={() => {
                          if (cls === "field-sizing-content") onWin();
                        }}
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          if (cls === "field-sizing-content") onWin();
                        }}
                        className={`
                px-4 py-2 rounded-lg font-medium text-sm transition-all
                ${
                  isSolved
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }
              `}
                      >
                        Post Review
                      </button>
                    </div>
                  </div>
                </div>

                {/* Error Visual for Fixed Mode */}
                {cls === "field-sizing-fixed" && !isSolved && (
                  <div className="absolute bottom-6 bg-red-100 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm border border-red-200 animate-bounce">
                    ⚠️ Content is hidden!
                  </div>
                )}
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Chat Input"
              description="A chat input that expands upward as the user types a long message."
              code={`<div class="fixed bottom-0 w-full bg-white border-t p-4">
  <div class="max-w-2xl mx-auto flex gap-2">
    <textarea 
      class="field-sizing-content w-full max-h-40 min-h-[44px] p-3 border rounded-2xl resize-none"
      placeholder="Message..."
    ></textarea>
    <button class="bg-blue-500 text-white rounded-full w-11 h-11 flex-shrink-0">
      ↑
    </button>
  </div>
</div>`}
            >
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <div className="flex gap-2 items-end">
                  <textarea
                    className="field-sizing-content w-full max-h-40 min-h-[44px] p-3 border border-slate-300 dark:border-slate-600 rounded-2xl resize-none bg-slate-50 dark:bg-slate-800 text-foreground"
                    placeholder="Message..."
                    rows={1}
                  ></textarea>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-11 h-11 flex-shrink-0 flex items-center justify-center transition-colors">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        transform="rotate(-90 12 12)"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Code Editor Line Numbers"
              description="Input that grows horizontally with its content, useful for inline editing."
              code={`<div class="flex items-center gap-2 font-mono bg-slate-900 text-slate-200 p-4 rounded">
  <span class="text-slate-500">const</span>
  <input 
    type="text" 
    class="field-sizing-content min-w-[2ch] bg-transparent border-b border-slate-700 focus:border-blue-500 outline-none p-0" 
    value="myVariable" 
  />
  <span class="text-slate-500">=</span>
  <span class="text-green-400">100;</span>
</div>`}
            >
              <div className="flex items-center gap-2 font-mono bg-slate-900 text-slate-200 p-4 rounded text-sm">
                <span className="text-purple-400">const</span>
                <input
                  type="text"
                  className="field-sizing-content min-w-[2ch] bg-transparent border-b border-slate-700 focus:border-blue-500 outline-none p-0 text-yellow-200"
                  defaultValue="myVariable"
                />
                <span className="text-slate-500">=</span>
                <span className="text-green-400">100;</span>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Select Dropdown Sizing"
              description="Makes a select element fit its currently selected option width."
              code={`<div class="flex items-center gap-2">
  <span>Sort by:</span>
  <select class="field-sizing-content p-2 border rounded bg-transparent font-bold">
    <option>Relevance</option>
    <option>Date</option>
    <option>Price: Low to High</option>
  </select>
</div>`}
            >
              <div className="flex items-center gap-2 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="field-sizing-content p-2 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 font-bold text-sm text-foreground">
                  <option>Relevance</option>
                  <option>Date</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Forgetting max-height/width",
                reason:
                  "Without constraints, a `field-sizing-content` input can grow infinitely and break your layout.",
                example: `<textarea class="field-sizing-content">
</textarea>
`,
              },
              {
                title: "Expecting animation",
                reason:
                  "Height changes caused by `field-sizing` happen instantly and generally cannot be transitioned with CSS `transition`.",
                example: `<textarea class="field-sizing-content transition-all duration-300">
`,
              },
              {
                title: "Using on block elements",
                reason:
                  "Field sizing only applies to form controls (replaced elements) like input, select, and textarea.",
                example: `<div class="field-sizing-content">
</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Max Constraints:",
                text: "Always set `max-width` or `max-height` when using content sizing to prevent layout breakage.",
              },
              {
                bold: "Min Constraints:",
                text: "Set a `min-width` or `min-height` so the input doesn't disappear when empty.",
              },
              {
                bold: "Textareas:",
                text: "This is the best modern way to create 'auto-expanding' textareas without JavaScript.",
              },
              {
                bold: "Inputs:",
                text: "Use on `<input type='text'>` to make it shrink-wrap its value, great for inline editing.",
              },
              {
                bold: "Selects:",
                text: "On `<select>`, it makes the width adapt to the *selected* option, not the widest option.",
              },
              {
                bold: "Browser Support:",
                text: "This is a newer property. Test on older browsers or provide a fallback (like standard `w-full`).",
              },
              {
                bold: "Vertical Align:",
                text: "When resizing inputs inline, ensure `vertical-align` is set correctly to align with surrounding text.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
