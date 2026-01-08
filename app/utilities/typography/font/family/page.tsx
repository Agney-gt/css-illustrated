"use client";

import React from "react";
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

export default function FontFamilyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Font Family"
            description="Control the typeface of your text. From clean UI sans-serifs to readable article serifs and precise code monospaces, font family establishes the voice and function of your content."
          />

          <MentalModelSection
            title="The Voice of Text"
            description="Font family is the most defining characteristic of typography. It determines the shape of the glyphs (characters). CSS uses a 'stack' mechanism: you list fonts in order of preference, and the browser uses the first one it has available on the user's system."
            features={[
              "Sets the `font-family` CSS property",
              "Uses 'System Stacks' by default for best performance",
              "Falls back gracefully if a custom font fails to load",
              "Inherited by child elements automatically",
              "Crucial for readability (Mono for code, Serif for long form)",
            ]}
            layerAssignment="Typography Layer - Defines the visual character shape"
            browserBehavior="The browser iterates through the comma-separated list of fonts. It stops at the first font installed on the device or loaded via web fonts."
          />

          <ComparisonTable
            title="Font Classifications"
            columns={["Class", "Characteristics", "Best Use Case"]}
            rows={[
              {
                feature: "font-sans",
                values: [
                  "Clean, no serifs, modern",
                  "UI, Dashboards, Headings, Buttons",
                ],
              },
              {
                feature: "font-serif",
                values: [
                  "Decorated strokes, traditional",
                  "Long-form articles, Editorials, Books",
                ],
              },
              {
                feature: "font-mono",
                values: [
                  "Fixed width per character",
                  "Code blocks, Data tables, IDs, IP addresses",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Font Family Utilities"
            items={[
              { cls: "font-sans", desc: "System Sans-Serif (Default)" },
              { cls: "font-serif", desc: "System Serif" },
              { cls: "font-mono", desc: "System Monospace" },
            ]}
            prefix=""
          />

          <UtilityPlayground
            title="Font Family Playground"
            description="See how the 'personality' of the text changes with different font families."
            options={["font-sans", "font-serif", "font-mono"]}
            defaultValue="font-sans"
            buildMarkup={(value) => `<div class="${value} p-4">
  <h3 class="text-xl font-bold">The Quick Brown Fox</h3>
  <p>Jumps over the lazy dog.</p>
  <p class="text-sm opacity-70">0123456789</p>
</div>`}
            renderPreview={(value) => (
              <div
                className={`${value} p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg max-w-md w-full`}
              >
                <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                  Typography Matters
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                  The typeface you choose influences how users perceive your
                  content. It affects reading speed, comprehension, and brand
                  perception.
                </p>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded text-sm text-slate-600 dark:text-slate-400">
                  ID: <span className="font-bold">user_8l0O1</span>
                </div>
              </div>
            )}
          />
          <InteractiveChallenge
            title="The Ambiguous Password"
            description="You are displaying a temporary password or API key. The current font is sans-serif, making it impossible to tell the difference between 'Zero' (0) and 'Oh' (O), or 'One' (1) and 'El' (l). Switch to `font-mono` to make every character distinct and readable."
            codeSnippet={`<div class="bg-slate-100 p-6 rounded-lg text-center">
          <p class="text-sm text-slate-500 mb-2">Your API Key:</p>
          
          <div class="text-2xl bg-white border p-3 rounded {input}">
          0l1O5S
          </div>
          
          <p class="text-xs mt-2">Is that a Zero or an Oh?</p>
          </div>`}
            options={["font-sans", "font-serif", "italic", "font-mono"]}
            correctOption="font-mono"
            renderPreview={(userClass) => (
              <div className="w-full max-w-sm p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wider font-bold">
                    Verification Code
                  </p>
                  <div
                    className={`text-3xl p-4 bg-slate-50 dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-100 mb-4 tracking-widest ${userClass}`}
                  >
                    0l1O5S
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    {userClass === "font-mono" ? (
                      <div className="text-green-600 dark:text-green-400 font-medium flex items-center justify-center gap-2">
                        <span>✓</span> Distinct characters
                      </div>
                    ) : (
                      <div className="text-red-500 flex items-center justify-center gap-2">
                        <span>⚠</span> Ambiguous shapes
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Code Snippet"
              description="Monospace fonts are essential for code blocks to align indentation and make characters distinct."
              code={`<div class="bg-slate-900 text-slate-200 p-4 rounded-lg font-mono text-sm">
  <span class="text-purple-400">const</span> <span class="text-blue-400">value</span> = <span class="text-green-400">100</span>;
  <br />
  <span class="text-yellow-400">console</span>.log(value);
</div>`}
            >
              <div className="bg-slate-900 p-4 rounded-lg w-full font-mono text-sm shadow-inner">
                <div className="flex gap-2">
                  <div className="text-slate-600 select-none border-r border-slate-700 pr-2 text-right">
                    1
                  </div>
                  <div>
                    <span className="text-purple-400">export</span>{" "}
                    <span className="text-purple-400">default</span>{" "}
                    <span className="text-blue-400">function</span>{" "}
                    <span className="text-yellow-300">App</span>() {"{"}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-slate-600 select-none border-r border-slate-700 pr-2 text-right">
                    2
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-green-400">"Hello World"</span>;
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="text-slate-600 select-none border-r border-slate-700 pr-2 text-right">
                    3
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Editorial Layout"
              description="Serif fonts are often used for headings or body text in journalism to convey authority and tradition."
              code={`<article>
  <h1 class="font-serif text-3xl font-bold mb-4">The State of the Web</h1>
  <p class="font-serif text-lg leading-relaxed">
    In an era of rapid technological advancement...
  </p>
</article>`}
            >
              <div className="max-w-md">
                <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2 block font-sans">
                  Opinion
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  The Art of Slow Living
                </h2>
                <p className="font-serif text-slate-700 dark:text-slate-300 leading-relaxed">
                  In a world that constantly demands our attention, finding
                  moments of stillness has become a radical act of rebellion.
                </p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Dashboard UI"
              description="Sans-serif fonts are the standard for UI elements because they render clearly at small sizes and look modern."
              code={`<div class="font-sans">
  <div class="text-xs font-bold text-gray-500 uppercase">Revenue</div>
  <div class="text-2xl font-bold">$12,450.00</div>
</div>`}
            >
              <div className="font-sans p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Total Users
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">
                    8,420
                  </div>
                </div>
                <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  +12%
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            mistakes={[
              {
                title: "Mixing too many fonts",
                reason:
                  "Using more than 2-3 font families typically makes a design look cluttered and unstructured.",
                example: `<h1 class="font-serif">Title</h1>
<h2 class="font-mono">Sub</h2>
<p class="font-sans">Body</p>`,
                level: "warning",
              },
              {
                title: "Ignoring Line Height",
                reason:
                  "Different font families have different natural heights. When switching fonts, you often need to adjust `leading` (line-height) to maintain readability.",
                example: `<p class="font-serif leading-none">Cramped Text</p>`,
                level: "info",
              },
              {
                title: "Using Mono for Body Text",
                reason:
                  "Monospace fonts are harder to read in long paragraphs because the uneven spacing disrupts the natural reading flow.",
                example: `<p class="font-mono">Long paragraph of text...</p>`,
                level: "warning",
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "System Fonts First:",
                text: "Tailwind's defaults use the native system font stack (San Francisco on Mac, Segoe UI on Windows, etc.). This ensures your app feels 'native' and loads instantly with zero layout shift.",
              },
              {
                bold: "Numbers in Tables:",
                text: "Use `font-mono` (or `tabular-nums`) for tables of financial data so that decimal points and digits align vertically.",
              },
              {
                bold: "Contrast Pairing:",
                text: "A classic design pattern is `font-serif` for Headings and `font-sans` for Body text (or vice versa).",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
