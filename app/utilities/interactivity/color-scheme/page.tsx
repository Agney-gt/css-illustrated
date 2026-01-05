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
    cls: "scheme-normal",
    desc: "Use the browser or OS preferred color scheme",
  },
  {
    cls: "scheme-light",
    desc: "Force native UI elements to render in light mode",
  },
  {
    cls: "scheme-dark",
    desc: "Force native UI elements to render in dark mode",
  },
];

export default function ColorSchemePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Color Scheme"
            description="Control whether native UI elements render in light or dark mode, independent of your site theme. Essential for mixed-theme interfaces and embedded widgets."
          />

          <MentalModelSection
            title="Understanding Color Scheme"
            description="The `color-scheme` property tells the browser which theme the element is designed for. This allows the browser to render native form controls (scrollbars, inputs, checkboxes) with the appropriate light or dark default styles."
            features={[
              "Affects native browser UI (scrollbars, inputs, forms)",
              "Can override the user's OS preference for specific sections",
              "scheme-dark usually renders dark backgrounds and light text on inputs",
              "Crucial for 'Dark Mode' sections within 'Light Mode' pages (and vice versa)",
              "Does NOT automatically change Tailwind colors (bg-*, text-*)",
            ]}
            layerAssignment="Content Layer - Hints rendering mode to browser engine"
            browserBehavior="Browser switches its internal stylesheet for native controls to match the requested scheme."
          />

          <ComparisonTable
            title="Color Scheme vs Dark Mode"
            columns={[
              "Feature",
              "Color Scheme Utility",
              "Dark Mode Class (dark:)",
            ]}
            rows={[
              {
                feature: "Target",
                values: ["Native Browser UI", "Custom CSS Styles"],
              },
              {
                feature: "Scrollbars",
                values: ["✅ Affected", "🚫 Not Affected"],
              },
              {
                feature: "Inputs (Default)",
                values: ["✅ Switches Theme", "🚫 Manual Styling Needed"],
              },
              {
                feature: "Purpose",
                values: ["System consistency", "Custom design"],
              },
            ]}
          />

          <UtilityGrid title="Color Scheme Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Switch schemes to see how native UI elements adapt their default
              styling.
            </p>

            <UtilityPlayground
              title="Color Scheme Playground"
              description="Toggle between schemes to see the effect on standard form elements."
              options={utilities.map((u) => u.cls)}
              defaultValue="scheme-normal"
              buildMarkup={(schemeClass, customClasses = "") => {
                return `<div class="${schemeClass} space-y-4 p-6 border rounded-lg ${customClasses}">
  <input type="text" class="border rounded px-3 py-2 w-full" placeholder="Text input" />
  
  <div class="flex items-center gap-4">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked /> Checkbox
    </label>
    <label class="flex items-center gap-2">
      <input type="radio" checked /> Radio
    </label>
  </div>

  <input type="date" class="border rounded px-3 py-2" />
</div>`;
              }}
              renderPreview={(schemeClass, customClasses = "") => {
                return (
                  <div
                    className={`${schemeClass} space-y-4 p-6 border border-slate-300 dark:border-slate-700 rounded-lg ${customClasses} bg-transparent`}
                  >
                    <input
                      type="text"
                      className="border border-slate-400 rounded px-3 py-2 w-full"
                      placeholder="Text input (Native)"
                    />

                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked /> Checkbox
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" defaultChecked /> Radio
                      </label>
                    </div>

                    <input
                      type="date"
                      className="border border-slate-400 rounded px-3 py-2"
                    />
                    <div className="text-xs text-muted-foreground mt-2">
                      *Note: Styles above depend on your OS/Browser defaults.
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Blinding Sidebar"
            description="You have a dark-themed sidebar, but the native search input inside it is rendering in 'Light Mode' (white background), which is blindingly bright. Force the browser to render the input in dark mode to match the sidebar."
            codeSnippet={`<aside class="w-64 bg-slate-900 text-white p-6 rounded-xl shadow-2xl">
  <div class="font-bold mb-4 text-slate-400 uppercase text-xs tracking-widest">Tools</div>
  
  <div class="{input} space-y-4">
    <input 
      type="search" 
      placeholder="Search tools..." 
      class="w-full border border-slate-700 rounded px-3 py-2"
    />
    
    <div class="space-y-2">
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" checked /> 
        <span>Show hidden</span>
      </label>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" /> 
        <span>Enable logs</span>
      </label>
    </div>
  </div>
</aside>`}
            options={["scheme-light", "scheme-dark", "dark", "bg-black"]}
            correctOption="scheme-dark"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <aside className="w-64 bg-slate-900 text-white p-6 rounded-xl shadow-2xl">
                  <div className="font-bold mb-4 text-slate-400 uppercase text-xs tracking-widest">
                    Tools
                  </div>

                  <div className={`${userClass} space-y-4`}>
                    <input
                      type="search"
                      placeholder="Search tools..."
                      className="w-full border border-slate-700 rounded px-3 py-2"
                    />

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input type="checkbox" defaultChecked />
                        <span>Show hidden</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm text-slate-300">
                        <input type="checkbox" />
                        <span>Enable logs</span>
                      </label>
                    </div>
                  </div>

                  {userClass === "scheme-dark" && (
                    <div className="mt-6 text-center animate-in fade-in zoom-in">
                      <span className="bg-green-900/50 text-green-400 text-[10px] px-2 py-1 rounded border border-green-800">
                        Dark Inputs Active
                      </span>
                    </div>
                  )}
                </aside>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Dark widgets inside light UI"
              description="Force dark native controls inside an otherwise light interface."
              code={`<div class="scheme-dark bg-slate-900 text-white p-6 rounded-lg">
  <h3 class="mb-4 font-bold">Dark Console</h3>
  <input class="w-full border border-slate-700 rounded px-3 py-2" placeholder="Command..." />
  <div class="mt-4 flex gap-4">
    <label class="flex gap-2"><input type="checkbox" checked /> Verbose</label>
  </div>
</div>`}
            >
              <div className="scheme-dark bg-slate-900 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                <h3 className="mb-4 font-bold">Dark Console</h3>
                <input
                  className="w-full border border-slate-700 rounded px-3 py-2"
                  placeholder="Command..."
                />
                <div className="mt-4 flex gap-4 text-sm text-slate-300">
                  <label className="flex gap-2 items-center">
                    <input type="checkbox" defaultChecked /> Verbose
                  </label>
                  <label className="flex gap-2 items-center">
                    <input type="checkbox" /> Debug
                  </label>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Respect system preference"
              description="Let the operating system decide light or dark mode automatically (default behavior)."
              code={`<div class="scheme-normal p-6 border rounded-lg bg-background text-foreground">
  <label class="block mb-2 font-medium">System Preference</label>
  <select class="w-full border rounded px-3 py-2">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>`}
            >
              <div className="scheme-normal p-6 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-950 max-w-sm mx-auto">
                <label className="block mb-2 font-medium text-sm">
                  System Preference
                </label>
                <select className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <p className="text-xs text-muted-foreground mt-2">
                  This control matches your OS theme.
                </p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Expecting scheme-* to change Tailwind colors",
                reason:
                  "`scheme-dark` does NOT change `bg-white` to `bg-black`. It only tells the browser how to render NATIVE controls (scrollbars, default inputs).",
                example: `<div class="scheme-dark bg-white"> `,
              },
              {
                title: "Using on custom-styled inputs",
                reason:
                  "If you have `appearance-none` and fully custom styles, `scheme-*` might not have a visible effect on the input itself.",
                example: `<input class="appearance-none border-red-500 scheme-dark" /> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Scrollbars:",
                text: "Setting `scheme-dark` on the `html` or `body` tag is the easiest way to get dark scrollbars on the entire page.",
              },
              {
                bold: "Isolation:",
                text: "You can mix schemes! Have a `scheme-light` card inside a `scheme-dark` page.",
              },
              {
                bold: "CSS Variable:",
                text: "This utility sets the `color-scheme` CSS property.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
