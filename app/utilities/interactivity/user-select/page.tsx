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

const utilities = [
  { className: "select-none", desc: "Prevent users from selecting text" },
  { className: "select-text", desc: "Allow normal text selection (default)" },
  { className: "select-all", desc: "Select all text on a single click" },
  { className: "select-auto", desc: "Browser decides selection behavior" },
];

export default function UserSelectPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="User Select"
            description="Control whether users can select text or UI elements. Essential for creating polished interactive components like buttons, drag handles, and copy-paste areas."
          />

          <MentalModelSection
            title="Understanding Selection Behavior"
            description="Browser default behavior allows users to select almost any text. While good for accessibility, it can be annoying in interactive apps. For example, double-clicking a button shouldn't select its label, and dragging a card shouldn't highlight its description."
            features={[
              "select-none: Ideal for buttons, icons, nav items, and draggable elements",
              "select-text: Use for articles, comments, and data users might want to copy",
              "select-all: Perfect for read-only input fields, API keys, or code snippets",
              "Does NOT affect screen readers (content remains accessible)",
            ]}
            layerAssignment="Interactivity Layer - Modifies browser text highlighting engine"
            browserBehavior="Changes the CSS `user-select` property, preventing the browser's selection range from expanding into the element."
          />

          <ComparisonTable
            title="Selection Modes"
            columns={["Class", "Click Behavior", "Best Use Case"]}
            rows={[
              {
                feature: "select-none",
                values: ["No highlighting", "Buttons, Drag handles, Game UI"],
              },
              {
                feature: "select-text",
                values: ["Standard highlight", "Blog posts, Documentation"],
              },
              {
                feature: "select-all",
                values: [
                  "Highlights entire block",
                  "Code snippets, API Keys, Copy inputs",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="User Select Utilities"
            items={utilities.map((u) => ({ cls: u.className, desc: u.desc }))}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try selecting the text inside the box below.
            </p>

            <UtilityPlayground
              title="User Select Playground"
              description="Switch selection modes to see how they affect text highlighting."
              options={utilities.map((u) => u.className)}
              defaultValue="select-text"
              buildMarkup={(selectClass, customClasses = "") => {
                return `<div class="${selectClass} p-6 border rounded-lg bg-slate-50 text-center ${customClasses}">
  <p class="font-medium text-lg">Try to select this text.</p>
  <p class="text-sm text-slate-500 mt-2">Double click or drag cursor over me.</p>
</div>`;
              }}
              renderPreview={(selectClass, customClasses = "") => {
                return (
                  <div
                    className={`
                    w-full h-48 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-center justify-center p-6 text-center cursor-text
                    ${selectClass} ${customClasses}
                  `}
                  >
                    <p className="font-medium text-lg text-slate-800 dark:text-slate-200">
                      Try to select this text.
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Double click or drag cursor over me.
                    </p>
                    {selectClass === "select-all" && (
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded mt-4">
                        Tip: Click once!
                      </span>
                    )}
                  </div>
                );
              }}
            />
          </section>

          {/* 🟢 THE INTERACTIVE CHALLENGE */}
          <InteractiveChallenge
            title="The Draggable Card"
            description="This is a draggable Kanban card. Try to 'drag' it (click and pull). Currently, doing so selects the text (`select-text`), which ruins the drag experience. Apply `select-none` to the card so it feels like a solid object."
            codeSnippet={`<div class="w-64 bg-white p-4 rounded-lg shadow-lg border cursor-grab active:cursor-grabbing">
  <div class="flex justify-between items-start mb-2">
    <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">Task-12</span>
    <button class="text-gray-400 hover:text-gray-600">...</button>
  </div>
  
  <div class="{input}">
    <h3 class="font-bold text-slate-800 mb-1">Fix Navigation Bug</h3>
    <p class="text-slate-500 text-sm">
      Menu collapses unexpectedly on mobile viewports.
    </p>
  </div>

  <div class="mt-4 flex -space-x-2">
    <div class="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
    <div class="w-6 h-6 rounded-full bg-slate-400 border-2 border-white"></div>
  </div>
</div>`}
            options={[
              "select-none",
              "select-text",
              "select-all",
              "pointer-events-none",
            ]}
            correctOption="select-none"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg select-text">
                <div
                  className={`
                    w-64 bg-white dark:bg-slate-900 p-4 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 cursor-grab active:cursor-grabbing active:scale-[1.02] transition-transform
                    ${userClass}
                  `}
                >
                  <div className="flex justify-between items-start mb-3 pointer-events-none">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      Task-12
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-1">
                      Fix Navigation Bug
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-snug">
                      Menu collapses unexpectedly on mobile viewports when
                      rotating device.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center pointer-events-none">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-400 border-2 border-white dark:border-slate-900"></div>
                      <div className="w-6 h-6 rounded-full bg-teal-400 border-2 border-white dark:border-slate-900"></div>
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      Dec 12
                    </div>
                  </div>
                </div>

                {/* Status Overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
                  {userClass === "select-none" ? (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full animate-in fade-in zoom-in border border-green-200 shadow-sm">
                      ✅ Drag Ready (No Selection)
                    </span>
                  ) : (
                    <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full animate-in fade-in border border-amber-200 shadow-sm">
                      ⚠️ Text is Selectable
                    </span>
                  )}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Interactive UI controls"
              description="Buttons and tabs should usually have selection disabled so double-clicks don't highlight the label."
              code={`<div class="flex gap-4">
  <button class="select-none rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
    Submit
  </button>
  <button class="select-none rounded-lg bg-slate-200 px-4 py-2 hover:bg-slate-300">
    Cancel
  </button>
</div>`}
            >
              <div className="flex gap-4 p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <button className="select-none rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 active:scale-95 transition-all">
                  Submit
                </button>
                <button className="select-none rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all">
                  Cancel
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Copy command blocks"
              description="Makes code snippets easier to copy by selecting the entire block with a single click."
              code={`<code class="select-all block rounded bg-slate-900 px-4 py-3 font-mono text-sm text-green-400">
  npm install tailwindcss
</code>`}
            >
              <div className="bg-slate-900 p-4 rounded-lg shadow-md max-w-sm">
                <div className="text-xs text-slate-500 mb-2">
                  Click to select command:
                </div>
                <code className="select-all block rounded bg-black/50 px-4 py-3 font-mono text-sm text-green-400 border border-slate-700 cursor-text hover:border-slate-500 transition-colors">
                  npm install tailwindcss
                </code>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Readable article text"
              description="Long-form content should always remain selectable for accessibility and quoting."
              code={`<article class="select-text p-4">
  <h2 class="font-bold text-xl mb-2">Introduction</h2>
  <p>Users can highlight and copy any part of this paragraph without restriction.</p>
</article>`}
            >
              <div className="select-text p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-white">
                  Why Selection Matters
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Allowing users to select text is fundamental to the web. It
                  enables copying for notes, quoting in replies, and helps
                  assistive technologies parse content. Only disable it when it
                  actively interferes with interaction.
                </p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Applying globally",
                reason:
                  "Never apply `select-none` to the `body` or large containers. It frustrates users who want to copy information.",
                example: `<body class="select-none"> `,
              },
              {
                title: "Disabling on inputs",
                reason:
                  "Inputs and textareas usually need `select-text` (or auto) so users can edit their own text.",
                example: `<input class="select-none" /> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Buttons & Icons:",
                text: "Always use `select-none` on interactive elements like buttons, tabs, and icons to prevent ugly blue highlights on double-click.",
              },
              {
                bold: "Drag & Drop:",
                text: "Essential for draggable items. If text is selectable, the browser might interpret a drag as a text selection event instead.",
              },
              {
                bold: "One-Click Copy:",
                text: "Use `select-all` for things like API keys, invoice numbers, or terminal commands to speed up copying.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
