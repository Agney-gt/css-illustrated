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
  { cls: "resize-none", desc: "Prevents the element from being resized" },
  { cls: "resize-y", desc: "Allows resizing only vertically (height)" },
  { cls: "resize-x", desc: "Allows resizing only horizontally (width)" },
  { cls: "resize", desc: "Allows resizing in both directions" },
];

export default function ResizePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Resize"
            description="Control whether and how elements like textareas can be resized by the user. Essential for maintaining layout integrity in forms."
          />

          <MentalModelSection
            title="Understanding Resize Behavior"
            description="The resize utility controls the CSS 'resize' property, which typically adds a drag handle to the bottom-right corner of an element. This is most commonly used on textareas but can apply to any element with overflow: hidden/auto/scroll."
            features={[
              "Primarily used to restrict textarea expansion",
              "Prevents users from breaking layouts by dragging inputs too wide",
              "Works best when combined with min-height and max-height",
              "resize-y is the industry standard for comments and long-form text",
              "resize-none is useful for fixed-height inputs or custom auto-growing solutions",
            ]}
            layerAssignment="Layout/Interactivity Layer - Controls user-driven dimensions"
            browserBehavior="Browser adds a native OS-styled grip handle that users can drag to modify element width/height style attributes inline."
          />

          <ComparisonTable
            title="Resize Strategies"
            columns={["Class", "Direction", "Use Case", "Risk"]}
            rows={[
              {
                feature: "resize-y",
                values: [
                  "↕️ Vertical",
                  "Blog comments, Bios",
                  "Safe (preserves width)",
                ],
              },
              {
                feature: "resize-none",
                values: [
                  "🚫 Locked",
                  "Search bars, fixed UI",
                  "User frustration (if content hidden)",
                ],
              },
              {
                feature: "resize (default)",
                values: [
                  "↔️↕️ Both",
                  "Free-form canvas",
                  "⚠️ Can break page layout",
                ],
              },
              {
                feature: "resize-x",
                values: [
                  "↔️ Horizontal",
                  "Split-pane views",
                  "⚠️ Often overflows container",
                ],
              },
            ]}
          />

          <UtilityGrid title="Resize Utilities" items={utilities} />

          <InteractiveChallenge
            title="The Layout Breaker"
            description="You have a two-column dashboard. The default 'resize' property allows the user to drag the textarea sideways, potentially covering the sidebar or causing horizontal scroll. Fix it by restricting resize to vertical only."
            initialClass="resize"
            correctClass="resize-y"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "resize-y";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>&lt;!-- Dashboard Grid --&gt;</CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="grid grid-cols-3 gap-4" />
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4">
                    <CodeComment>&lt;!-- Main Content --&gt;</CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="col-span-2" />
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-8 flex flex-wrap gap-2 items-center">
                    <CodeTag>&lt;textarea</CodeTag>
                    <span className="text-purple-400">class</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">"w-full ...</span>

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
                    <CodeTag>/&gt;</CodeTag>
                  </div>

                  <div className="pl-4">
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>

                  <div className="pl-4 text-slate-500">
                    &lt;!-- Sidebar --&gt;
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-72 bg-slate-900 rounded-xl shadow-2xl border border-slate-800 flex flex-col justify-center p-6 overflow-hidden">
                {/* Simulated Dashboard */}
                <div className="grid grid-cols-3 gap-4 h-full relative z-10">
                  {/* Main Col */}
                  <div className="col-span-2 flex flex-col gap-2">
                    <div className="h-8 w-24 bg-slate-800 rounded animate-pulse" />
                    <div className="h-4 w-48 bg-slate-800/50 rounded mb-4" />

                    <div className="relative flex-1">
                      {/* Visual Guide for Danger Zone */}
                      {!isSolved && (
                        <div className="absolute top-0 bottom-0 left-full w-32 bg-red-500/10 border-l border-red-500/30 flex items-center justify-center">
                          <span className="text-[10px] text-red-400 font-mono rotate-90 whitespace-nowrap">
                            NO GO ZONE
                          </span>
                        </div>
                      )}

                      {/* THE TARGET INPUT */}
                      <textarea
                        className={`
                          w-full h-full p-4 rounded-lg bg-slate-800 border-2 text-slate-300 outline-none
                          focus:ring-2 focus:ring-blue-500/50
                          transition-all duration-300
                          
                          /* The Utility Class */
                          ${cls}
                          
                          ${
                            isSolved
                              ? "border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                              : "border-slate-700 hover:border-red-500/50"
                          }
                        `}
                        placeholder="Log Entry #402..."
                        defaultValue="Restricting horizontal resize prevents the text area from overlapping the sidebar or causing layout shifts."
                        // Win condition
                        onMouseUp={() => {
                          if (cls === "resize-y") onWin();
                        }} // Detect drag end
                        onClick={() => {
                          if (cls === "resize-y") onWin();
                        }}
                      />

                      {/* Resize Handle Visual Hint */}
                      {!isSolved && (
                        <div className="absolute bottom-1 right-1 pointer-events-none animate-bounce">
                          <div className="w-4 h-4 border-r-2 border-b-2 border-red-500 rounded-br cursor-se-resize" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Sidebar Col */}
                  <div className="col-span-1 bg-slate-950 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                    <div className="h-6 w-16 bg-slate-800 rounded" />
                    <div className="h-1 bg-slate-800 rounded w-full my-2" />
                    <div className="flex-1 space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="flex gap-2 items-center opacity-50"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <div className="h-2 w-12 bg-slate-800 rounded" />
                        </div>
                      ))}
                    </div>

                    {/* Interaction Feedback */}
                    {isSolved && (
                      <div className="mt-auto p-2 bg-green-900/30 border border-green-500/30 rounded text-green-400 text-xs text-center font-bold animate-in fade-in zoom-in">
                        LAYOUT SECURE
                      </div>
                    )}
                    {!isSolved && cls !== "resize-y" && (
                      <div className="mt-auto p-2 bg-red-900/20 border border-red-500/20 rounded text-red-400 text-xs text-center">
                        ⚠️ RISK OF OVERLAP
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try resizing the textarea below. Switch modes to see how
              constraints change.
            </p>

            <UtilityPlayground
              title="Resize Playground"
              description="Test the drag handle behavior on a standard textarea."
              options={utilities.map((u) => u.cls)}
              defaultValue="resize"
              buildMarkup={(resizeClass, customClasses = "") => {
                return `<div class="max-w-md mx-auto p-4 bg-white dark:bg-slate-900 rounded-lg border shadow-sm">
  <label class="block text-sm font-medium mb-2">User Feedback</label>
  <textarea
    class="${resizeClass} w-full h-32 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    placeholder="Try dragging the bottom-right corner..."
  ></textarea>
</div>`;
              }}
              renderPreview={(resizeClass, customClasses = "") => {
                return (
                  <div className="max-w-md mx-auto p-4 bg-white dark:bg-slate-900 rounded-lg border border-border shadow-sm">
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      User Feedback
                    </label>
                    <textarea
                      className={`${resizeClass} w-full h-32 rounded-md border border-input bg-transparent p-3 focus:ring-2 focus:ring-ring focus:outline-none text-foreground`}
                      placeholder="Try dragging the bottom-right corner..."
                    ></textarea>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Standard Chat Input"
              description="Allows expanding height to type long messages, but keeps width fixed to prevent layout breakage."
              code={`<div class="flex gap-2 items-end">
  <textarea 
    class="resize-y w-full h-12 min-h-[48px] max-h-[200px] p-3 rounded-lg border"
    placeholder="Type a message..."
  ></textarea>
  <button class="h-12 px-4 rounded-lg bg-blue-600 text-white">Send</button>
</div>`}
            >
              <div className="flex gap-2 items-end p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <textarea
                  className="resize-y w-full h-12 min-h-[48px] max-h-[150px] p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Type a message..."
                ></textarea>
                <button className="h-12 px-4 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Fixed Size Code Snippet"
              description="Disable resizing entirely for small, single-purpose inputs to maintain a strict grid."
              code={`<div class="grid grid-cols-2 gap-4">
  <div>
    <label class="text-xs font-mono mb-1 block">API_KEY</label>
    <textarea class="resize-none w-full h-20 p-2 font-mono text-xs border rounded bg-slate-900 text-green-400"></textarea>
  </div>
  <div>
    <label class="text-xs font-mono mb-1 block">SECRET</label>
    <textarea class="resize-none w-full h-20 p-2 font-mono text-xs border rounded bg-slate-900 text-green-400"></textarea>
  </div>
</div>`}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono mb-1 block text-muted-foreground">
                    API_KEY
                  </label>
                  <textarea
                    className="resize-none w-full h-20 p-2 font-mono text-xs border border-slate-700 rounded bg-slate-950 text-green-400 focus:outline-none focus:border-green-500"
                    defaultValue="pk_live_51M3..."
                  ></textarea>
                </div>
                <div>
                  <label className="text-xs font-mono mb-1 block text-muted-foreground">
                    SECRET
                  </label>
                  <textarea
                    className="resize-none w-full h-20 p-2 font-mono text-xs border border-slate-700 rounded bg-slate-950 text-green-400 focus:outline-none focus:border-green-500"
                    defaultValue="sk_live_04J9..."
                  ></textarea>
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using 'resize' without min/max constraints",
                reason:
                  "Users can drag the textarea to 0px height (invisible) or infinitely large (breaking the page).",
                example: `<textarea class="resize-y" /> 
<textarea class="resize-y min-h-[50px] max-h-[300px]" />
`,
              },
              {
                title: "Allowing horizontal resize in flex/grid",
                reason:
                  "Dragging width in a responsive layout often forces the container to overflow or squish sibling elements.",
                example: `<div class="flex">
  <textarea class="resize" /> <aside>Sidebar</aside>
</div>`,
              },
              {
                title: "Applying to non-resizable elements",
                reason:
                  "The resize property only works on elements with `overflow` not set to `visible` (usually). Typically only used on <textarea>.",
                example: `<div class="resize">
  Content
</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Default Behavior:",
                text: "Most browsers default textareas to `resize: both`. This is rarely what you want in a polished UI.",
              },
              {
                bold: "Best Practice:",
                text: "Use `resize-y` for almost all textareas. It allows users to see more text without breaking the page width.",
              },
              {
                bold: "Combined with Field Sizing:",
                text: "If you use `field-sizing-content` (auto-grow), you should usually set `resize-none` so the manual handle doesn't conflict with auto-sizing.",
              },
              {
                bold: "Visual Handle:",
                text: "The look of the drag handle is determined by the browser/OS and cannot be easily styled with standard CSS.",
              },
              {
                bold: "Div Resizing:",
                text: "You can make `<div>` elements resizable by adding `resize-y` AND `overflow-auto`. Useful for resizable panels.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
