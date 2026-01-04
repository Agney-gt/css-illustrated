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
  {
    cls: "field-sizing-content",
    desc: "Input width adapts to its content",
  },
  {
    cls: "field-sizing-fixed",
    desc: "Input keeps a fixed inline size (default)",
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
            description="Control how form fields calculate their inline size. Choose between fixed widths or dynamic sizing that adapts to the content length."
          />

          <MentalModelSection
            title="Understanding Field Sizing"
            description="Traditionally, input fields have a default fixed width that ignores their content. Field Sizing utilities allow you to break this behavior, making inputs behave more like 'span' elements that grow and shrink with their text."
            features={[
              "field-sizing-content: Input grows as you type",
              "field-sizing-fixed: Standard browser behavior",
              "Perfect for tag inputs, inline editing, and dense forms",
              "Prevents massive empty spaces in compact layouts",
              "Works on <input>, <textarea>, and <select> elements",
            ]}
            layerAssignment="Interactivity Layer - Controls dynamic layout behavior of form elements"
            browserBehavior="Sets the CSS 'field-sizing' property. 'content' tells the browser to calculate width based on the 'value' attribute."
          />

          <ComparisonTable
            title="Content vs Fixed Sizing"
            columns={["Feature", "field-sizing-content", "field-sizing-fixed"]}
            rows={[
              {
                feature: "Width Calculation",
                values: [
                  "Based on input value length",
                  "Based on width / default",
                ],
              },
              {
                feature: "Layout Shift",
                values: ["Dynamic (grows/shrinks)", "Stable (static width)"],
              },
              {
                feature: "Best For",
                values: ["Tags, Search filters", "Login forms, Address fields"],
              },
              {
                feature: "CSS Equivalent",
                values: ["field-sizing: content", "field-sizing: fixed"],
              },
            ]}
          />

          <UtilityGrid title="Field Sizing Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Type inside the input to observe inline size behavior.
            </p>

            <UtilityPlayground
              title="Field Sizing Playground"
              description="Switch between fixed and content-based sizing."
              options={utilities.map((u) => u.cls)}
              defaultValue="field-sizing-content"
              buildMarkup={(sizingClass, customClasses = "") => {
                return `<div class="flex flex-col gap-4 ${customClasses}">
  <input 
    type="text" 
    class="${sizingClass} border border-border rounded px-3 py-2 bg-background min-w-[100px]" 
    placeholder="Type here..." 
  />
  <select class="${sizingClass} border border-border rounded px-3 py-2 bg-background">
    <option>Short</option>
    <option>A much longer option text</option>
  </select>
</div>`;
              }}
              renderPreview={(sizingClass, customClasses = "") => {
                return (
                  <div
                    className={`flex flex-col items-start gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg ${customClasses}`}
                  >
                    <input
                      type="text"
                      className={`${sizingClass} border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[100px] transition-all`}
                      placeholder="Type here..."
                    />
                    <select
                      className={`${sizingClass} border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                    >
                      <option>Short</option>
                      <option>A much longer option text</option>
                    </select>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Rigid Tags"
            description="This tag editor looks broken. The 'design' tag has a huge empty gap because the input is fixed width. Change the field sizing so the input shrinks perfectly to fit the text 'design'."
            codeSnippet={`<div class="flex flex-wrap gap-2 p-4 bg-white border rounded-lg max-w-sm">
  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">react</span>
  <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">css</span>
  
  <input 
    type="text" 
    value="design" 
    class="{input} bg-blue-50 text-blue-800 px-2 py-1 rounded text-sm font-medium outline-none border border-blue-200"
  />
</div>`}
            options={[
              "field-sizing-fixed",
              "w-auto",
              "field-sizing-content",
              "flex-1",
            ]}
            correctOption="field-sizing-content"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-900 p-8 rounded-lg">
                <div className="flex flex-wrap gap-2 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm w-full max-w-sm">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                    react
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                    css
                  </span>

                  <input
                    type="text"
                    defaultValue="design"
                    className={`
                      bg-blue-50 dark:bg-blue-900/10 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium 
                      outline-none border border-blue-200 dark:border-blue-800 focus:ring-2 focus:ring-blue-500
                      ${userClass}
                    `}
                  />

                  {/* Visualizer for extra space */}
                  {userClass !== "field-sizing-content" && (
                    <div className="flex-1 h-8 border-l-2 border-dashed border-red-300 relative">
                      <span className="absolute top-1/2 -translate-y-1/2 left-2 text-[10px] text-red-400 whitespace-nowrap">
                        Wasted Space
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Tag or token inputs"
              description="Automatically fit short dynamic values like tags or labels without layout gaps."
              code={`<div class="flex gap-2">
  <span class="badge">React</span>
  <input
    class="field-sizing-content border rounded px-2 py-1 min-w-[3rem]"
    placeholder="Add..."
  />
</div>`}
            >
              <div className="flex gap-2 items-center p-4 bg-white dark:bg-slate-900 rounded-lg border">
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-sm font-medium border border-slate-200 dark:border-slate-700">
                  React
                </span>
                <input
                  className="field-sizing-content border border-slate-300 dark:border-slate-600 rounded px-2 py-1 text-sm bg-transparent min-w-[3rem] focus:outline-none focus:border-blue-500"
                  placeholder="Add..."
                />
              </div>
            </ExampleCard>

            <ExampleCard
              title="Consistent form layouts"
              description="Maintain predictable alignment in structured forms using fixed sizing."
              code={`<form class="space-y-4">
  <div>
    <label class="block text-xs font-bold mb-1">Email</label>
    <input class="field-sizing-fixed w-full border px-3 py-2 rounded" placeholder="john@example.com" />
  </div>
</form>`}
            >
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border max-w-xs mx-auto">
                <label className="block text-xs font-bold mb-1 text-slate-500">
                  Email
                </label>
                <input
                  className="field-sizing-fixed w-full border border-slate-300 dark:border-slate-600 px-3 py-2 rounded text-sm bg-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Forgetting min-width",
                reason:
                  "When `field-sizing-content` is empty, the input might disappear entirely. Always set a `min-w` utility.",
                example: `<input class="field-sizing-content min-w-[40px]" /> `,
              },
              {
                title: "Using on incompatible elements",
                reason:
                  "Field sizing works on form inputs, textareas, and selects. It does not work on regular `div` or `span` elements.",
                example: `<div class="field-sizing-content">...</div> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Tags & Filters:",
                text: "This utility is perfect for inline editing interfaces, tag clouds, and compact search filters.",
              },
              {
                bold: "Textarea Growth:",
                text: "Using `field-sizing-content` on a textarea makes it auto-grow vertically as the user types!",
              },
              {
                bold: "Smooth Transition:",
                text: "Combine with `transition-all` to animate the width changes as users type.",
              },
              {
                bold: "Browser Support:",
                text: "This uses the new CSS `field-sizing` property. Ensure your target browsers support it or provide a fallback.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
