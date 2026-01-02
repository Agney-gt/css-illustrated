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
  { cls: "caret-inherit", desc: "Inherit caret color from parent" },
  { cls: "caret-current", desc: "Use current text color as caret" },
  { cls: "caret-transparent", desc: "Invisible caret" },
  { cls: "caret-black", desc: "Black caret color" },
  { cls: "caret-white", desc: "White caret color" },
  { cls: "caret-red-500", desc: "Red caret for alerts or errors" },
  { cls: "caret-orange-500", desc: "Orange caret for warnings" },
  { cls: "caret-amber-500", desc: "Amber caret for attention states" },
  { cls: "caret-yellow-500", desc: "Yellow caret highlight" },
  { cls: "caret-lime-500", desc: "Lime caret for success hints" },
  { cls: "caret-green-500", desc: "Green caret for success states" },
  { cls: "caret-emerald-500", desc: "Emerald caret accent" },
  { cls: "caret-teal-500", desc: "Teal caret accent" },
  { cls: "caret-cyan-500", desc: "Cyan caret accent" },
  { cls: "caret-sky-500", desc: "Sky caret accent" },
  { cls: "caret-blue-500", desc: "Primary blue caret" },
  { cls: "caret-indigo-500", desc: "Indigo caret accent" },
  { cls: "caret-violet-500", desc: "Violet caret accent" },
  { cls: "caret-purple-500", desc: "Purple caret for branding" },
  { cls: "caret-fuchsia-500", desc: "Fuchsia caret accent" },
  { cls: "caret-pink-500", desc: "Pink caret accent" },
  { cls: "caret-rose-500", desc: "Rose caret for destructive actions" },
  { cls: "caret-slate-500", desc: "Neutral slate caret" },
  { cls: "caret-gray-500", desc: "Neutral gray caret" },
  { cls: "caret-zinc-500", desc: "Muted zinc caret" },
  { cls: "caret-neutral-500", desc: "Neutral system caret" },
  { cls: "caret-stone-500", desc: "Stone caret accent" },
];

export default function CaretColorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Caret Color"
            description="Control the color of the text insertion cursor (caret) inside input fields and textareas. Enhance branding and provide visual feedback for different states."
          />

          <MentalModelSection
            title="Understanding Caret Color Control"
            description="Caret color is a Content layer utility that controls the visual appearance of the text insertion cursor. It affects only the cursor, not selection highlights or input styling."
            features={[
              "Controls only the text insertion cursor (blinking line/block)",
              "Visible only when element is focused and user is typing",
              "Inherits from parent elements unless explicitly set",
              "Does not affect text selection or text color",
              "Works with input[type=text], textarea, and contenteditable elements",
            ]}
            layerAssignment="Content Layer - Controls visual appearance of text insertion cursor"
            browserBehavior="Browser renders the caret with specified color when element receives focus, using system fallbacks for unsupported values"
          />

          <ComparisonTable
            title="Caret Color vs Related Text Styling"
            columns={["Utility", "What It Controls", "Scope", "Visibility"]}
            rows={[
              {
                feature: "caret-color",
                values: [
                  "Text insertion cursor",
                  "Focused inputs only",
                  "Only during typing",
                ],
              },
              {
                feature: "text-color",
                values: ["Text content", "All text elements", "Always visible"],
              },
              {
                feature: "selection-color",
                values: [
                  "Selection highlight",
                  "Selected text ranges",
                  "During selection",
                ],
              },
              {
                feature: "accent-color",
                values: [
                  "Form control highlights",
                  "Native controls only",
                  "During interaction",
                ],
              },
            ]}
          />

          <UtilityGrid title="Caret Color Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Test different caret colors on various input types to understand
              their visual impact and accessibility considerations.
            </p>

            <UtilityPlayground
              title="Caret Color Playground"
              description="Experiment with caret colors to see how they affect user experience and brand consistency."
              options={utilities.map((u) => u.cls)}
              defaultValue="caret-blue-500"
              buildMarkup={(caretClass, customClasses = "") => {
                return `<div class="space-y-4 ${customClasses}">
  <div class="space-y-2">
    <label class="block text-sm font-medium text-foreground">Text Input</label>
    <input 
      type="text" 
      class="${caretClass} border border-border rounded-md px-3 py-2 w-full bg-background text-foreground"
      placeholder="Start typing to see the caret..."
    />
  </div>

  <div class="space-y-2">
    <label class="block text-sm font-medium text-foreground">Email Input</label>
    <input 
      type="email" 
      class="${caretClass} border border-border rounded-md px-3 py-2 w-full bg-background text-foreground"
      placeholder="user@example.com"
    />
  </div>

  <div class="space-y-2">
    <label class="block text-sm font-medium text-foreground">Textarea</label>
    <textarea 
      class="${caretClass} border border-border rounded-md px-3 py-2 w-full bg-background text-foreground resize-none"
      rows="3"
      placeholder="Type multiple lines..."
    ></textarea>
  </div>
</div>`;
              }}
              renderPreview={(caretClass, customClasses = "") => {
                return (
                  <div className={`space-y-4 ${customClasses}`}>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Text Input
                      </label>
                      <input
                        type="text"
                        className={`${caretClass} border border-border rounded-md px-3 py-2 w-full bg-background text-foreground`}
                        placeholder="Start typing to see the caret..."
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Email Input
                      </label>
                      <input
                        type="email"
                        className={`${caretClass} border border-border rounded-md px-3 py-2 w-full bg-background text-foreground`}
                        placeholder="user@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-foreground">
                        Textarea
                      </label>
                      <textarea
                        className={`${caretClass} border border-border rounded-md px-3 py-2 w-full bg-background text-foreground resize-none`}
                        rows={3}
                        placeholder="Type multiple lines..."
                      ></textarea>
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Invisible Cursor"
            description="You are building a secure terminal UI. The background is black, but the caret (cursor) is also black, making it invisible! Change the caret color to green to make it usable."
            initialClass="caret-black"
            correctClass="caret-green-500"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "caret-green-500";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>&lt;!-- Terminal Input --&gt;</CodeComment>
                    <CodeTag>&lt;input</CodeTag>{" "}
                    <CodeAttr name="type" value="text" />
                  </div>

                  <div className="pl-4 flex flex-wrap gap-2 items-center">
                    <span className="text-purple-400">className</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">
                      "bg-black text-green-500 ...
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

                  <div>
                    <CodeTag>/&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-72 bg-black rounded-xl shadow-2xl border border-slate-800 flex flex-col items-center justify-center gap-6 overflow-hidden p-8 font-mono">
                {/* CRT Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none" />

                {/* Matrix Rain / Glow (On Win) */}
                <div
                  className={`absolute inset-0 bg-green-500/10 transition-opacity duration-1000 ${
                    isSolved ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-20 w-full max-w-md space-y-4">
                  <div className="text-green-500 text-sm">
                    {">"} SECURITY_LEVEL:{" "}
                    <span className="text-red-500">MAXIMUM</span>
                  </div>
                  <div className="text-green-500 text-sm">
                    {">"} ENTER_ACCESS_CODE:
                  </div>

                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 font-bold">
                      $
                    </span>

                    {/* THE TARGET INPUT */}
                    <input
                      type="text"
                      autoFocus
                      // We force focus so the caret is visible
                      ref={(input) => input && input.focus()}
                      className={`
                        w-full bg-slate-900 border-2 border-green-900 rounded p-3 pl-8
                        text-green-500 font-bold outline-none
                        focus:border-green-500 transition-all
                        
                        /* The Utility Class */
                        ${cls}
                      `}
                      defaultValue={isSolved ? "ACCESS_GRANTED" : ""}
                      placeholder="Type here..."
                      // Win condition
                      onChange={() => {
                        if (cls === "caret-green-500") onWin();
                      }}
                      onClick={() => {
                        if (cls === "caret-green-500") onWin();
                      }}
                    />
                  </div>

                  {/* Feedback Message */}
                  {!isSolved && cls === "caret-black" && (
                    <div className="text-red-500 text-xs animate-pulse">
                      ERROR: CURSOR_NOT_DETECTED. INPUT LOCATION UNKNOWN.
                    </div>
                  )}

                  {isSolved && (
                    <div className="text-green-400 text-xs animate-bounce">
                      SYSTEM UNLOCKED. WELCOME, ADMIN.
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Brand-aligned form inputs"
              description="Match caret color with your brand for a cohesive visual experience."
              code={`<form class="space-y-4">
  <div class="space-y-2">
    <label class="block text-sm font-medium text-purple-700 dark:text-purple-300">Name</label>
    <input 
      type="text" 
      class="caret-purple-500 border border-purple-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-500"
      placeholder="John Doe"
    />
  </div>

  <div class="space-y-2">
    <label class="block text-sm font-medium text-purple-700 dark:text-purple-300">Email</label>
    <input 
      type="email" 
      class="caret-purple-500 border border-purple-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-500"
      placeholder="john@example.com"
    />
  </div>
</form>`}
            >
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-700 dark:text-purple-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="caret-purple-500 border border-purple-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-500"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-purple-700 dark:text-purple-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="caret-purple-500 border border-purple-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-500"
                    placeholder="john@example.com"
                  />
                </div>
              </form>
            </ExampleCard>

            <ExampleCard
              title="Error state with red caret"
              description="Use semantic colors to reinforce validation states and guide users."
              code={`<div class="space-y-2">
  <label class="block text-sm font-medium text-rose-700 dark:text-rose-300">Email Address</label>
  <input 
    type="email" 
    class="caret-rose-500 border border-rose-400 rounded-md px-3 py-2 w-full bg-rose-50 dark:bg-rose-950 text-rose-900 dark:text-rose-100"
    placeholder="Invalid email address"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" class="text-sm text-rose-600 dark:text-rose-400">
    Please enter a valid email address
  </p>
</div>`}
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium text-rose-700 dark:text-rose-300">
                  Email Address
                </label>
                <input
                  type="email"
                  className="caret-rose-500 border border-rose-400 rounded-md px-3 py-2 w-full bg-rose-50 dark:bg-rose-950 text-rose-900 dark:text-rose-100"
                  placeholder="Invalid email address"
                  aria-invalid="true"
                />
                <p className="text-sm text-rose-600 dark:text-rose-400">
                  Please enter a valid email address
                </p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Theme-aware inputs"
              description="Use current color inheritance for automatic theme switching."
              code={`<div class="space-y-4">
  <!-- Light theme input -->
  <div class="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Light Theme</h3>
    <input 
      type="text" 
      class="caret-current border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      placeholder="Uses current text color"
    />
  </div>

  <!-- Dark theme input -->
  <div class="p-4 bg-slate-900 text-white rounded-lg border border-slate-700">
    <h3 class="text-lg font-semibold mb-2">Dark Theme</h3>
    <input 
      type="text" 
      class="caret-current border border-slate-600 rounded-md px-3 py-2 w-full bg-slate-800 text-white"
      placeholder="Adapts automatically"
    />
  </div>
</div>`}
            >
              <div className="space-y-4">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Light Theme
                  </h3>
                  <input
                    type="text"
                    className="caret-current border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                    placeholder="Uses current text color"
                  />
                </div>

                <div className="p-4 bg-slate-900 text-white rounded-lg border border-slate-700">
                  <h3 className="text-lg font-semibold mb-2">Dark Theme</h3>
                  <input
                    type="text"
                    className="caret-current border border-slate-600 rounded-md px-3 py-2 w-full bg-slate-800 text-white"
                    placeholder="Adapts automatically"
                  />
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Multi-state form controls"
              description="Different caret colors for different input purposes and states."
              code={`<div class="space-y-4">
  <!-- Success state -->
  <div class="space-y-2">
    <label class="block text-sm font-medium text-green-700 dark:text-green-300">Username</label>
    <input 
      type="text" 
      class="caret-green-500 border border-green-400 rounded-md px-3 py-2 w-full bg-green-50 dark:bg-green-950"
      placeholder="Available username"
      defaultValue="johndoe"
    />
  </div>

  <!-- Warning state -->
  <div class="space-y-2">
    <label class="block text-sm font-medium text-amber-700 dark:text-amber-300">Password</label>
    <input 
      type="password" 
      class="caret-amber-500 border border-amber-400 rounded-md px-3 py-2 w-full bg-amber-50 dark:bg-amber-950"
      placeholder="Weak password"
    />
  </div>

  <!-- Info state -->
  <div class="space-y-2">
    <label class="block text-sm font-medium text-blue-700 dark:text-blue-300">Search</label>
    <input 
      type="search" 
      class="caret-blue-500 border border-blue-400 rounded-md px-3 py-2 w-full bg-blue-50 dark:bg-blue-950"
      placeholder="Type to search..."
    />
  </div>
</div>`}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-green-700 dark:text-green-300">
                    Username
                  </label>
                  <input
                    type="text"
                    className="caret-green-500 border border-green-400 rounded-md px-3 py-2 w-full bg-green-50 dark:bg-green-950"
                    placeholder="Available username"
                    defaultValue="johndoe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-amber-700 dark:text-amber-300">
                    Password
                  </label>
                  <input
                    type="password"
                    className="caret-amber-500 border border-amber-400 rounded-md px-3 py-2 w-full bg-amber-50 dark:bg-amber-950"
                    placeholder="Weak password"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-700 dark:text-blue-300">
                    Search
                  </label>
                  <input
                    type="search"
                    className="caret-blue-500 border border-blue-400 rounded-md px-3 py-2 w-full bg-blue-50 dark:bg-blue-950"
                    placeholder="Type to search..."
                  />
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using low-contrast caret colors",
                reason:
                  "Carets with poor contrast become invisible and users can't see where they're typing.",
                example: `<input class="caret-gray-100 bg-white" />
<!-- Caret is nearly invisible on white background -->`,
              },
              {
                title: "Relying on caret color for accessibility",
                reason:
                  "Caret color alone doesn't make an input accessible; screen readers need proper labels and states.",
                example: `<input class="caret-blue-500" />
<!-- No labels, no aria attributes, not accessible -->`,
              },
              {
                title: "Using bright, distracting colors",
                reason:
                  "Oversaturated caret colors can distract users while typing and cause visual fatigue.",
                example: `<input class="caret-fuchsia-500" />
<!-- Bright fuchsia caret is distracting -->`,
              },
              {
                title: "Expecting caret-color to affect selection",
                reason:
                  "Caret color only controls the insertion cursor, not the text selection highlight color.",
                example: `<input class="caret-red-500" />
<!-- Selection highlight is still system default -->`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Focus visibility:",
                text: "Caret color is only visible when the input is focused and active.",
              },
              {
                bold: "Contrast is essential:",
                text: "Ensure caret color has sufficient contrast against the input background.",
              },
              {
                bold: "Use semantic colors:",
                text: "Match caret colors with the input state (red for errors, green for success).",
              },
              {
                bold: "Theme awareness:",
                text: "Use `caret-current` for automatic theme switching and consistency.",
              },
              {
                bold: "Subtlety works best:",
                text: "Avoid overly bright or saturated colors that distract from typing.",
              },
              {
                bold: "Inheritance matters:",
                text: "Caret color inherits from parent unless explicitly set.",
              },
              {
                bold: "Selection vs caret:",
                text: "Caret color doesn't affect text selection highlight color.",
              },
              {
                bold: "Input types:",
                text: "Works with text, email, password, search, and textarea elements.",
              },
              {
                bold: "Contenteditable:",
                text: "Also works with contenteditable elements for rich text editors.",
              },
              {
                bold: "Performance consideration:",
                text: "Changing caret color has negligible performance impact.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
