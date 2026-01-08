"use client";

import React from "react";
import { PageHero } from "@/components/shared/page-hero";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function BoxPage() {
  const boxUtilities = [
    { cls: "box-border", desc: "Include padding/border in width" },
    { cls: "box-content", desc: "Exclude padding/border from width" },
    { cls: "box-decoration-slice", desc: "Slice background/border" },
    { cls: "box-decoration-clone", desc: "Clone background/border" },
  ];

  const mentalModelFeatures = [
    "Controls how width/height calculations include padding and borders",
    "Affects layout behavior and element sizing predictability",
    "Essential for responsive design and component consistency",
  ];

  const commonMistakes = [
    {
      title: "Mixing box-sizing models",
      reason:
        "Using box-border on some elements and box-content on others creates inconsistent layouts",
      example:
        ".header { box-sizing: content-box; } .content { box-sizing: border-box; }",
      level: "critical" as const,
    },
    {
      title: "Forgetting box-sizing reset",
      reason:
        "Not setting a consistent box-sizing model leads to unexpected sizing behavior",
      example: "/* Missing: * { box-sizing: border-box; } */",
      level: "critical" as const,
    },
    {
      title: "Padding affects total width",
      reason:
        "With content-box, adding padding increases the total element width beyond specified",
      example: ".box { width: 200px; padding: 20px; /* Total: 240px! */ }",
      level: "warning" as const,
    },
  ];

  const comparisonData = {
    title: "Box Sizing Models Comparison",
    columns: ["Property", "box-border", "box-content"],
    rows: [
      {
        feature: "Width Calculation",
        values: [
          "width includes padding + border",
          "width excludes padding + border",
        ],
      },
      {
        feature: "Use Case",
        values: [
          "Predictable layouts, responsive design",
          "Traditional box model",
        ],
      },
      {
        feature: "Common Setting",
        values: ["Default modern approach", "Browser default (rarely used)"],
      },
      {
        feature: "Layout Impact",
        values: [
          "Elements don't overflow when padded",
          "Elements expand when padded",
        ],
      },
    ],
  };

  const tips = [
    {
      bold: "Set globally:",
      text: "Apply box-border to all elements with *, *::before, *::after for consistency.",
    },
    {
      bold: "Component libraries:",
      text: "Always use box-border for reusable components to ensure predictable sizing.",
    },
    {
      bold: "Responsive design:",
      text: "box-border prevents layout breakage when adding padding to percentage-based widths.",
    },
    {
      bold: "Form elements:",
      text: "Input elements often need explicit box-border for consistent sizing across browsers.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 space-y-12">
        <PageHero
          title="Box Sizing & Decoration"
          description="Control box sizing model and decoration breaking. Master the CSS box model for predictable layouts."
        />

        <MentalModelSection
          title="Understanding Box Sizing"
          description="Box sizing determines how width and height are calculated, affecting how elements interact with padding and borders. By default, browsers add padding to the width you specify. `box-border` changes this so padding pushes *inward*, keeping the width stable."
          features={mentalModelFeatures}
          layerAssignment="Layout & Box Model Layer - Controls element sizing calculations"
          browserBehavior="Modern browsers default to content-box. Most developers reset to border-box globally for consistency."
        />

        <UtilityGrid
          title="Available Box Utilities"
          items={boxUtilities}
          prefix=""
        />

        <ComparisonTable {...comparisonData} />

        <UtilityPlayground
          title="Interactive Box Sizing Demo"
          description="Explore how box-sizing affects element dimensions and layout behavior."
          options={["box-border", "box-content"]}
          defaultValue="box-border"
          buildMarkup={(value, customClasses) => {
            return `<div class="${value} w-48 p-4 border-4 border-blue-500 bg-blue-100 ${
              customClasses || ""
            }">
  Width: 192px
  <br />
  Padding: 16px each side
  <br />
  Border: 4px each side
</div>`;
          }}
          renderPreview={(value, customClasses) => (
            <div className="flex items-start gap-8">
              <div
                className={`${value} w-48 p-4 border-4 border-blue-500 bg-blue-100 text-center text-sm font-mono text-blue-900 ${
                  customClasses || ""
                }`}
              >
                <div className="space-y-1">
                  <div className="font-bold border-b border-blue-300 pb-1 mb-1">
                    {value}
                  </div>
                  <div>Width: 192px</div>
                  <div>Padding: 16px</div>
                  <div>Border: 4px</div>
                </div>
              </div>

              {/* Legend/Explanation */}
              <div className="text-sm space-y-2 text-muted-foreground max-w-xs">
                <p>
                  <strong>Total Calculated Width:</strong>
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    <span className="font-mono text-foreground">
                      box-border
                    </span>
                    : <strong>192px</strong> (Fixed)
                    <br />
                    <span className="text-xs">Content shrinks to fit.</span>
                  </li>
                  <li>
                    <span className="font-mono text-foreground">
                      box-content
                    </span>
                    : <strong>232px</strong>
                    <br />
                    <span className="text-xs">192 + 32(pad) + 8(border)</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          defaultCustomClasses=""
        />

        <InteractiveChallenge
          title="The Blown-Out Input"
          description="You are building a login form. You set the email input to `w-full` (100%) so it fills the card, and added `p-4` for comfortable typing. But look—the input is wider than the card! This is because the default `box-content` adds the padding *outside* the 100% width. Fix it with `box-border`."
          codeSnippet={`<div class="w-80 bg-white p-6 rounded-xl shadow-lg">
  <label class="block mb-2 font-bold text-slate-700">Email</label>
  
  <input 
    type="text" 
    class="w-full p-4 border-2 border-indigo-200 rounded-lg {input}" 
    placeholder="user@example.com"
  />
  
  <button class="w-full mt-4 bg-indigo-600 text-white p-3 rounded-lg">
    Sign In
  </button>
</div>`}
          options={["box-content", "block", "box-border", "inline-block"]}
          correctOption="box-border"
          renderPreview={(userClass) => {
            const isFixed = userClass === "box-border";
            return (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8">
                {/* Card Container */}
                <div className="w-72 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 relative">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address
                      </label>

                      {/* The Input - We purposefully don't use overflow-hidden on parent to show the bug */}
                      <div className="relative">
                        <input
                          type="text"
                          readOnly
                          placeholder="user@example.com"
                          className={`
                    w-full p-3 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg bg-slate-50 dark:bg-slate-800 outline-none focus:border-indigo-500 transition-all
                    ${userClass} 
                    /* Visualizing the error state strongly */
                    ${
                      !isFixed
                        ? "border-red-400 bg-red-50 dark:bg-red-900/10"
                        : ""
                    }
                  `}
                        />

                        {/* Bug Indicator */}
                        {!isFixed && (
                          <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-red-500 animate-bounce">
                            <svg
                              className="w-6 h-6 rotate-90"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-indigo-500/30 transition-all">
                      Sign In
                    </button>
                  </div>

                  {/* Reference Line to show container boundary */}
                  <div
                    className="absolute top-0 right-0 h-full w-px bg-red-500/30 border-r border-dashed border-red-500"
                    title="Container Edge"
                  ></div>
                </div>
              </div>
            );
          }}
        />

        <ExampleSection title="Real-World Examples">
          <ExampleCard
            title="Fluid Grid Layout"
            description="Using box-border ensures percentage widths (e.g., 50%) don't break when padding is added."
            code={`<div class="flex flex-wrap">
  <div class="w-1/2 p-4 box-border border">
    Column 1 (50%)
  </div>
  <div class="w-1/2 p-4 box-border border">
    Column 2 (50%)
  </div>
</div>`}
          >
            <div className="flex flex-wrap text-sm text-center">
              <div className="w-1/2 p-4 box-border border border-blue-200 bg-blue-50 text-blue-700">
                Column 1 (50%)
              </div>
              <div className="w-1/2 p-4 box-border border border-blue-200 bg-blue-50 text-blue-700">
                Column 2 (50%)
              </div>
            </div>
          </ExampleCard>

          <ExampleCard
            title="Form Input Sizing"
            description="Inputs often have default styling that makes sizing tricky. Explicit box-border keeps them consistent with other elements."
            code={`<input type="text" class="w-full p-3 border box-border" placeholder="Full width input" />`}
          >
            <div className="w-full max-w-sm">
              <input
                type="text"
                className="w-full p-3 border border-slate-300 rounded box-border text-sm"
                placeholder="I stay exactly 100% wide"
              />
            </div>
          </ExampleCard>
        </ExampleSection>

        <CommonMistakesSection mistakes={commonMistakes} />

        <TipsSection tips={tips} />
      </main>
    </div>
  );
}
