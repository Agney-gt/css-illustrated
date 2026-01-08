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
import CodeBlock from "@/app/utilities/components/code-block";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

type BorderWidth = "border" | "border-2" | "border-4" | "border-0";
type BorderRadius =
  | "rounded-none"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-full";

type BorderStyleClass =
  | "border-solid"
  | "border-dashed"
  | "border-dotted"
  | "border-double"
  | "border-none";

export default function BorderStylePage() {
  const [copied, setCopied] = useState<string | null>(null);

  // Playground state
  const [style, setStyle] = useState<BorderStyleClass>("border-solid");
  const [width, setWidth] = useState<BorderWidth>("border");
  const [radius, setRadius] = useState<BorderRadius>("rounded-md");
  const [showShadow, setShowShadow] = useState(true);
  const [color, setColor] = useState("#2563eb");

  const styleUtilities: { cls: BorderStyleClass; desc: string }[] = [
    { cls: "border-solid", desc: "Continuous stroke (default)" },
    { cls: "border-dashed", desc: "Dashed — good for placeholders" },
    { cls: "border-dotted", desc: "Dotted — subtle decorative" },
    { cls: "border-double", desc: "Double line — high emphasis" },
    { cls: "border-none", desc: "No visible border" },
  ];

  const borderWidths: BorderWidth[] = [
    "border",
    "border-2",
    "border-4",
    "border-0",
  ];
  const borderRadii: BorderRadius[] = [
    "rounded-none",
    "rounded",
    "rounded-md",
    "rounded-lg",
    "rounded-full",
  ];

  const styleMap: Record<BorderStyleClass, string> = {
    "border-solid": "solid",
    "border-dashed": "dashed",
    "border-dotted": "dotted",
    "border-double": "double",
    "border-none": "none",
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied(null);
    }
  };

  const playgroundMarkup = `<div class="${width} ${style} ${radius} p-4" style="border-color: ${color};">\n  Preview content\n</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Border Style"
            description="Explore how different border styles affect rhythm and emphasis — dashed placeholders, dotted badges, double frames for emphasis, and when to hide borders entirely."
          />

          <UtilityGrid
            title="Border Style Utilities"
            items={styleUtilities}
            prefix="border-"
          />

          <MentalModelSection
            title="Understanding Border Styles"
            description="Border styles control the visual appearance of lines, from solid strokes to decorative patterns. They work independently from width, color, and radius."
            features={[
              "Solid borders provide continuous, professional lines",
              "Dashed borders indicate placeholders and temporary content",
              "Dotted borders create subtle decorative separators",
              "Double borders add emphasis and visual weight",
              "No border (none) creates clean, minimal interfaces",
            ]}
            layerAssignment="Visual Appearance Layer - Controls line patterns and decorative effects"
            browserBehavior="Border styles are rendered using CSS border-style property, affecting how the border line is drawn"
          />

          <ComparisonTable
            title="Border Style Comparison"
            columns={["Style", "Visual Impact", "Common Use Cases", "Best For"]}
            rows={[
              {
                feature: "Solid",
                values: [
                  "Continuous line",
                  "Professional, stable",
                  "Forms, buttons, cards",
                  "Primary UI elements",
                ],
              },
              {
                feature: "Dashed",
                values: [
                  "Broken line",
                  "Temporary, optional",
                  "Placeholders, draft areas",
                  "Upload zones, optional content",
                ],
              },
              {
                feature: "Dotted",
                values: [
                  "Dot sequence",
                  "Subtle, light",
                  "Separators, badges",
                  "Decorative accents",
                ],
              },
              {
                feature: "Double",
                values: [
                  "Two parallel lines",
                  "Emphasis, formal",
                  "Certificates, frames",
                  "Important content",
                ],
              },
              {
                feature: "None",
                values: [
                  "No visible line",
                  "Clean, minimal",
                  "Minimalist designs",
                  "Clean interfaces",
                ],
              },
            ]}
          />

          <UtilityPlayground
            title="Border Style Playground"
            description="Test different border styles with various widths and colors to see visual impact."
            options={styleUtilities.map((u) => u.cls)}
            defaultValue="border-solid"
            buildMarkup={(styleClass, customClasses = "") => {
              const borderStyle = styleMap[styleClass as BorderStyleClass];
              return `<div class="border-2 ${customClasses} p-6" style="border-style: ${borderStyle}; border-color: #2563eb;">
  Border Preview
</div>`;
            }}
            renderPreview={(styleClass, customClasses = "") => {
              const borderStyle = styleMap[styleClass as BorderStyleClass];
              return (
                <div
                  className="border-2 p-6 bg-slate-700 text-white"
                  style={{ borderStyle: borderStyle, borderColor: "#2563eb" }}
                >
                  Border Preview
                </div>
              );
            }}
            optionLabel={(value) => value.replace("border-", "")}
            defaultCustomClasses="rounded-md"
          />

          <InteractiveChallenge
            title="The Upload Zone"
            description="You are building a file upload component. It currently has a solid border (`border-solid`), which makes it look like a regular content box. Change the border style to `border-dashed` to make it instantly recognizable as a drop zone."
            codeSnippet={`<div class="w-full h-32 flex flex-col items-center justify-center rounded-xl border-2 border-indigo-300 bg-indigo-50 {input} cursor-pointer hover:bg-indigo-100 transition-colors">
  <svg class="w-8 h-8 text-indigo-500 mb-2">...</svg>
  <span class="text-sm font-medium text-indigo-700">Drag files here</span>
</div>`}
            options={[
              "border-solid",
              "border-dashed",
              "border-dotted",
              "border-double",
            ]}
            correctOption="border-dashed"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                <div
                  className={`w-full max-w-sm h-40 flex flex-col items-center justify-center rounded-xl border-2 border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 cursor-pointer hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30 transition-all duration-300 ${userClass}`}
                >
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-800 rounded-full mb-3">
                    <svg
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                    {userClass === "border-dashed"
                      ? "Perfect! Drop files here."
                      : "Drag & drop files"}
                  </span>
                  <span className="text-xs text-indigo-500 dark:text-indigo-400 mt-1">
                    SVG, PNG, JPG or GIF
                  </span>
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="File Upload Placeholder"
              description="Dashed borders indicate drop zones and optional content areas"
              code={`<div class="border-dashed border-2 rounded-lg p-6 text-center">
  <div class="text-2xl mb-2">📁</div>
  <div class="font-semibold">Drop files here</div>
  <div class="text-sm text-muted-foreground">or click to browse</div>
</div>`}
            >
              <div className="border-dashed border-2 rounded-lg p-6 text-center bg-slate-700">
                <div className="text-2xl mb-2">📁</div>
                <div className="font-semibold text-slate-100">
                  Drop files here
                </div>
                <div className="text-sm text-muted-foreground">
                  or click to browse
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Premium Badge"
              description="Double borders create emphasis for special features or content"
              code={`<div class="border-double border-4 rounded-lg p-4">
  <div class="text-xl font-bold text-purple-400">PREMIUM</div>
  <div class="text-sm">Special feature unlocked</div>
</div>`}
            >
              <div
                className="border-double border-4 rounded-lg p-4 bg-slate-700"
                style={{ borderColor: "#a855f7" }}
              >
                <div className="text-xl font-bold text-purple-400">PREMIUM</div>
                <div className="text-sm text-slate-300">
                  Special feature unlocked
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Clean Search Input"
              description="Borderless inputs create minimalist, modern interfaces"
              code={`<input class="border-none focus:ring-2 focus:ring-blue-600 rounded px-4 py-2 bg-slate-700 text-white" placeholder="Search..." />`}
            >
              <input
                className="border-none focus:ring-2 focus:ring-blue-600 rounded px-4 py-2 bg-slate-700 text-white w-full"
                placeholder="Search..."
              />
            </ExampleCard>

            <ExampleCard
              title="Error State Input"
              description="Dashed red borders clearly indicate validation errors"
              code={`<input class="border-dashed border-2 border-red-500 rounded px-3 py-2 bg-slate-700 text-white" placeholder="Email" />`}
            >
              <div className="space-y-2">
                <label className="block text-sm text-slate-200">Email</label>
                <input
                  className="border-dashed border-2 rounded px-3 py-2 bg-slate-700 text-white w-full"
                  placeholder="Email"
                  style={{ borderColor: "#ef4444" }}
                />
                <div className="text-xs text-red-400">
                  Please enter a valid email
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Progress Stepper"
              description="Dotted connectors create lighter, more approachable progress indicators"
              code={`<div class="flex items-center gap-4">
  <div class="w-8 h-8 rounded-full bg-blue-600 text-white text-sm">1</div>
  <div class="flex-1 h-0.5 border-t-2 border-dotted border-slate-400"></div>
  <div class="w-8 h-8 rounded-full border-2 border-slate-400 text-slate-400 text-sm">2</div>
  <div class="flex-1 h-0.5 border-t-2 border-dotted border-slate-400"></div>
  <div class="w-8 h-8 rounded-full border-2 border-slate-400 text-slate-400 text-sm">3</div>
</div>`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center">
                  1
                </div>
                <div
                  className="flex-1 h-0.5"
                  style={{ borderTop: "2px dotted #94a3b8" }}
                ></div>
                <div
                  className="w-8 h-8 rounded-full border-2 text-slate-400 text-sm flex items-center justify-center"
                  style={{ borderColor: "#94a3b8" }}
                >
                  2
                </div>
                <div
                  className="flex-1 h-0.5"
                  style={{ borderTop: "2px dotted #94a3b8" }}
                ></div>
                <div
                  className="w-8 h-8 rounded-full border-2 text-slate-400 text-sm flex items-center justify-center"
                  style={{ borderColor: "#94a3b8" }}
                >
                  3
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Resizable Panel"
              description="Dashed borders indicate interactive resize areas"
              code={`<div class="flex">
  <div class="flex-1 p-4 bg-slate-700">Content</div>
  <div class="w-2 border-l-2 border-dashed border-slate-400 cursor-col-resize"></div>
</div>`}
            >
              <div className="flex">
                <div className="flex-1 p-4 bg-slate-700 text-slate-200">
                  Content
                </div>
                <div
                  className="w-2 cursor-col-resize"
                  style={{ borderLeft: "2px dashed #94a3b8" }}
                ></div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <TipsSection
            tips={[
              {
                bold: "Use dashed/dotted:",
                text: "for placeholders and optional elements",
              },
              {
                bold: "Reserve double:",
                text: "for high emphasis (but use sparingly)",
              },
              {
                bold: "Hide borders:",
                text: "when you prefer minimal, clean surfaces — provide an alternative focus indicator",
              },
              {
                bold: "Combine:",
                text: "style + width + color for clear visual language (e.g., subtle dotted neutral for badges; solid colored for status)",
              },
              {
                bold: "Accessibility:",
                text: "don't rely on border style alone for state indication",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
