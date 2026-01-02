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
  { cls: "select-none", desc: "Prevent users from selecting text" },
  { cls: "select-text", desc: "Allow normal text selection (default)" },
  { cls: "select-all", desc: "Select all text on a single click" },
  { cls: "select-auto", desc: "Browser decides selection behavior" },
];

export default function UserSelectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="User Select"
            description="Control whether users can select text or UI elements. Useful for preventing accidental highlighting on buttons or enabling one-click copying for codes."
          />

          <MentalModelSection
            title="Understanding User Select"
            description="User Select controls the browser's selection engine for a specific element. It dictates whether the text cursor (caret) can highlight content."
            features={[
              "select-none: Makes text behave like an image (unselectable)",
              "select-text: Standard browser behavior",
              "select-all: Clicks highlight the entire element contents",
              "Inherits from parent elements",
              "Does not affect keyboard navigation or accessibility",
            ]}
            layerAssignment="Interactivity Layer - Controls text selection capabilities"
            browserBehavior="Browser blocks the selection start event (none) or modifies the selection range on click (all)."
          />

          <ComparisonTable
            title="When to use what?"
            columns={["Class", "Best Use Case", "Avoid On"]}
            rows={[
              {
                feature: "select-none",
                values: [
                  "Buttons, Icons, Draggables",
                  "Articles, Blog posts, Error messages",
                ],
              },
              {
                feature: "select-all",
                values: [
                  "API Keys, Code snippets, URLs",
                  "Paragraphs, Buttons",
                ],
              },
              {
                feature: "select-text",
                values: [
                  "Long-form content, Bios",
                  "Custom interactive widgets",
                ],
              },
            ]}
          />

          <UtilityGrid title="User Select Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try selecting the text in the boxes below to feel the difference.
            </p>

            <UtilityPlayground
              title="User Select Playground"
              description="Test different selection behaviors."
              options={utilities.map((u) => u.cls)}
              defaultValue="select-text"
              buildMarkup={(selectClass, customClasses = "") => {
                return `<div class="p-6 bg-slate-50 border rounded-xl space-y-4 ${customClasses}">
  <p class="${selectClass} text-lg font-medium text-slate-800">
    Try selecting this text.
  </p>
  <div class="${selectClass} bg-blue-100 p-4 rounded text-blue-900">
    The background box is also affected.
  </div>
</div>`;
              }}
              renderPreview={(selectClass, customClasses = "") => {
                return (
                  <div
                    className={`p-6 bg-slate-50 dark:bg-slate-900 border border-border rounded-xl space-y-4 ${customClasses}`}
                  >
                    <p
                      className={`${selectClass} text-lg font-medium text-slate-800 dark:text-slate-200`}
                    >
                      Try selecting this text.
                    </p>
                    <div
                      className={`${selectClass} bg-blue-100 dark:bg-blue-900/30 p-4 rounded text-blue-900 dark:text-blue-200`}
                    >
                      The background box is also affected.
                    </div>
                  </div>
                );
              }}
            />
          </section>
          <InteractiveChallenge
            title="The Stubborn Copy"
            description="Users are frustrated because they can't copy this API Key! It's currently unselectable. Change the class to 'select-all' so they can highlight it instantly with one click."
            initialClass="select-none"
            correctClass="select-all"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "select-all";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>&lt;!-- API Key Display --&gt;</CodeComment>
                    <CodeTag>&lt;div</CodeTag>{" "}
                    <CodeAttr name="class" value="border p-4 rounded" />{" "}
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>&lt;!-- The Secret Key --&gt;</CodeComment>
                    <div className="flex flex-wrap gap-2 items-center">
                      <CodeTag>&lt;code</CodeTag>
                      <span className="text-purple-400">class</span>
                      <span className="text-slate-300">=</span>
                      <span className="text-green-400">"bg-slate-800 ...</span>

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
                    <div className="pl-4 text-slate-500">sk_live_51Mz...</div>
                    <CodeTag>&lt;/code&gt;</CodeTag>
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-50 rounded-xl shadow-inner border border-slate-200 flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-700 mb-4">
                    Your API Key
                  </h3>

                  <div className="flex gap-2">
                    <div
                      className={`
                             flex-1 p-3 bg-slate-900 text-green-400 font-mono text-sm rounded border border-slate-700
                             truncate cursor-text
                             /* The Utility Class */
                             ${cls}
                          `}
                      // Simulate "copy" success on click if selected
                      onClick={(e) => {
                        if (cls === "select-all") {
                          // Visually simulate selection for the demo
                          const range = document.createRange();
                          range.selectNodeContents(e.currentTarget);
                          const sel = window.getSelection();
                          sel?.removeAllRanges();
                          sel?.addRange(range);

                          if (!isSolved) setTimeout(onWin, 600);
                        }
                      }}
                    >
                      sk_live_51Mz92B8X9J2kL5mN
                    </div>
                    <button className="bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-700 px-3 rounded">
                      📋
                    </button>
                  </div>

                  <p className="text-xs text-slate-400 mt-2">
                    {isSolved
                      ? "Perfect! One click selects everything. ✅"
                      : "Try to select the key text. You can't! 🚫"}
                  </p>
                </div>

                {/* Mouse Cursor Simulation */}
                {!isSolved && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="animate-pulse bg-red-500/10 text-red-500 text-xs px-2 py-1 rounded border border-red-500/20 transform translate-y-16">
                      Selection Disabled
                    </div>
                  </div>
                )}
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Interactive UI controls"
              description="Prevents buttons text from turning blue (selected) when clicked rapidly."
              code={`<div class="flex gap-4">
  <button class="select-none rounded-lg bg-blue-600 px-4 py-2 text-white font-medium active:scale-95">
    Primary action
  </button>
  <button class="select-none rounded-lg bg-slate-200 px-4 py-2 font-medium active:scale-95">
    Secondary
  </button>
</div>`}
            >
              <div className="flex gap-4">
                <button className="select-none rounded-lg bg-blue-600 px-4 py-2 text-white font-medium active:scale-95 transition-transform">
                  Primary action
                </button>
                <button className="select-none rounded-lg bg-slate-200 dark:bg-slate-700 dark:text-white px-4 py-2 font-medium active:scale-95 transition-transform">
                  Secondary
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Copy command blocks"
              description="Instantly selects the install command for fast copying."
              code={`<div class="bg-slate-900 p-4 rounded-lg flex items-center justify-between">
  <code class="select-all font-mono text-sm text-green-400">
    npm install tailwindcss
  </code>
</div>`}
            >
              <div className="bg-slate-900 p-4 rounded-lg flex items-center justify-between shadow-inner w-full">
                <code className="select-all font-mono text-sm text-green-400 w-full cursor-text">
                  npm install tailwindcss
                </code>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Draggable cards"
              description="Prevents text selection while dragging items in a Kanban board."
              code={`<div class="select-none w-48 h-24 rounded-xl bg-yellow-100 border-2 border-yellow-300 p-4 shadow-sm cursor-grab active:cursor-grabbing">
  <span class="font-bold text-yellow-900">Task #402</span>
  <p class="text-xs text-yellow-800">Drag me!</p>
</div>`}
            >
              <div className="select-none w-48 h-24 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-300 dark:border-yellow-700 p-4 shadow-sm cursor-grab active:cursor-grabbing transform hover:-translate-y-1 transition-transform">
                <span className="font-bold text-yellow-900 dark:text-yellow-100">
                  Task #402
                </span>
                <p className="text-xs text-yellow-800 dark:text-yellow-200/80 mt-1">
                  Drag me!
                </p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Disabling selection on content",
                reason:
                  "Never use `select-none` on articles, blog posts, or error messages. Users often need to copy text to share or search.",
                example: `<p class="select-none">Error: 404</p> `,
              },
              {
                title: "Confusing with pointer-events",
                reason:
                  "`select-none` stops highlighting. `pointer-events-none` stops clicking. Buttons need `select-none` but MUST have pointer events.",
                example: `<button class="pointer-events-none">Click me</button> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Buttons:",
                text: "Always add `select-none` to custom buttons to prevent the text cursor from appearing on double-click.",
              },
              {
                bold: "Inputs:",
                text: "User select doesn't usually apply to editable inputs (like textareas), which are handled by the OS.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
