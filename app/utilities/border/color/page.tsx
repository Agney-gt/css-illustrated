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

type BorderColor =
  | "border-red-500"
  | "border-blue-600"
  | "border-green-500"
  | "border-yellow-400"
  | "border-purple-500"
  | "border-gray-300"
  | "border-border"
  | "border-transparent";

type BorderWidth = "border" | "border-2" | "border-4";
type BorderRadius =
  | "rounded-none"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-full";
type BorderStyle = "border-solid" | "border-dashed" | "border-dotted";

export default function BorderColorPage() {
  const [copied, setCopied] = useState<string | null>(null);

  // Playground state
  const [color, setColor] = useState<BorderColor>("border-blue-600");
  const [width, setWidth] = useState<BorderWidth>("border");
  const [radius, setRadius] = useState<BorderRadius>("rounded-md");
  const [style, setStyle] = useState<BorderStyle>("border-solid");
  const [showShadow, setShowShadow] = useState(true);

  const utilities: { cls: BorderColor; desc: string }[] = [
    { cls: "border-red-500", desc: "Error / destructive" },
    { cls: "border-blue-600", desc: "Primary / action" },
    { cls: "border-green-500", desc: "Success / positive" },
    { cls: "border-yellow-400", desc: "Warning / attention" },
    { cls: "border-purple-500", desc: "Accent / brand" },
    { cls: "border-gray-300", desc: "Neutral / subtle" },
    { cls: "border-border", desc: "Design token (default)" },
    { cls: "border-transparent", desc: "Invisible frame / layout" },
  ];

  const borderWidths: BorderWidth[] = ["border", "border-2", "border-4"];
  const borderRadii: BorderRadius[] = [
    "rounded-none",
    "rounded",
    "rounded-md",
    "rounded-lg",
    "rounded-full",
  ];
  const borderStyles: BorderStyle[] = [
    "border-solid",
    "border-dashed",
    "border-dotted",
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied(null);
    }
  };

  // Map Tailwind border color classes to concrete CSS colors (fallbacks).
  // Use CSS variable for "border-border" so it respects your theme token if present.
  const colorMap: Record<BorderColor, string> = {
    "border-red-500": "#ef4444",
    "border-blue-600": "#2563eb",
    "border-green-500": "#22c55e",
    "border-yellow-400": "#f59e0b",
    "border-purple-500": "#a855f7",
    "border-gray-300": "#d1d5db",
    "border-border": "var(--border, #9ca3af)", // fallback if no CSS var
    "border-transparent": "transparent",
  };

  // Derive CSS border-style (strip "border-" prefix)
  const styleMap: Record<BorderStyle, string> = {
    "border-solid": "solid",
    "border-dashed": "dashed",
    "border-dotted": "dotted",
  };

  const playgroundMarkup = `<div class="${width} ${color} ${style} ${radius} p-4 ${
    showShadow ? "shadow-md" : ""
  }">
  Preview content
</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Border Color"
            description="Choose border colors for states, accents, focus rings and product frames. Use colored borders to convey status, highlight products, or create subtle separators."
          />

          <UtilityGrid
            title="Border Color Utilities"
            items={utilities}
            prefix="border-"
          />

          <MentalModelSection
            title="Understanding Border Color"
            description="Border colors establish visual hierarchy, convey state, and reinforce branding. They work with width, style, and radius to create comprehensive border systems."
            features={[
              "Colors provide semantic meaning (red=error, green=success, blue=primary)",
              "Works with opacity and transparency for subtle effects",
              "Combines with focus states for accessibility",
              "Responsive color changes adapt to different contexts",
              "Brand colors maintain visual consistency across components",
            ]}
            layerAssignment="Visual Layer - Adds semantic meaning and visual hierarchy"
            browserBehavior="Border colors inherit from computed color values and respect CSS color inheritance and opacity rules"
          />

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using color alone for state indication",
                reason:
                  "Users with color vision deficiency can't distinguish between states when only color changes",
                example:
                  "border-red-500 vs border-green-500 without additional indicators",
                level: "critical",
              },
              {
                title: "Poor contrast on dark backgrounds",
                reason:
                  "Light borders on dark backgrounds may be invisible to users with low vision",
                example: "border-gray-300 on dark-slate backgrounds",
                level: "warning",
              },
              {
                title: "Inconsistent color usage",
                reason:
                  "Using different colors for the same semantic meaning creates confusion",
                example:
                  "Sometimes using border-blue-500 for primary, sometimes border-purple-500",
                level: "info",
              },
            ]}
          />

          <UtilityPlayground
            title="Border Color Playground"
            description="Test different border colors with various widths, styles, and radius combinations."
            options={utilities.map((u) => u.cls)}
            defaultValue="border-blue-600"
            buildMarkup={(colorClass, customClasses = "") => {
              const borderColor = colorMap[colorClass as BorderColor];
              return `<div class="border-2 ${customClasses} p-6" style="border-color: ${borderColor};">
  Border Preview
</div>`;
            }}
            renderPreview={(colorClass, customClasses = "") => {
              const borderColor = colorMap[colorClass as BorderColor];
              return (
                <div
                  className="border-2 p-6 bg-slate-700 text-white"
                  style={{ borderColor }}
                >
                  Border Preview
                </div>
              );
            }}
            optionLabel={(value) => value.replace("border-", "")}
            defaultCustomClasses="rounded-md"
          />

          <InteractiveChallenge
            title="The Error State"
            description="A user has entered an invalid email address. The input currently has a generic neutral border, so the error isn't obvious. Switch the class to `border-red-500` to turn the border red and trigger the error message."
            codeSnippet={`<div class="flex flex-col gap-2">
  <label class="text-sm font-medium">Email Address</label>
  <div class="relative">
    <input 
      type="email" 
      value="bad-email@" 
      class="w-full px-4 py-2 rounded-lg border-2 outline-none transition-all {input}"
    />
    
    <svg class="absolute right-3 top-3 text-red-500 ...">...</svg>
  </div>
  <p class="text-xs text-red-500">Invalid email format</p>
</div>`}
            options={[
              "border-gray-200",
              "border-blue-500",
              "border-red-500",
              "border-green-500",
            ]}
            correctOption="border-red-500"
            renderPreview={(userClass) => {
              const isError = userClass === "border-red-500";
              return (
                <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                  <div className="w-full max-w-xs bg-white dark:bg-slate-900 p-6 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-500">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        Email Address
                      </label>

                      <div className="relative group">
                        <input
                          type="text"
                          readOnly
                          value="ojasv@gmai" 
                          className={`
                            w-full px-4 py-3 rounded-lg border-2 outline-none font-medium transition-all duration-300
                            ${userClass}
                            ${
                              isError
                                ? "bg-red-50 text-red-900 dark:bg-red-900/10 dark:text-red-100 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 pr-10" // Error Styles
                                : "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-white border-slate-200 dark:border-slate-700 focus:border-blue-500" // Default Styles
                            }
                          `}
                        />

                        <div
                          className={`absolute right-3 top-3.5 text-red-500 transition-all duration-300 transform ${
                            isError
                              ? "opacity-100 scale-100 rotate-0"
                              : "opacity-0 scale-50 -rotate-90"
                          }`}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isError
                            ? "max-h-10 opacity-100 mt-1"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <p className="text-xs text-red-600 dark:text-red-400 font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-pulse"></span>
                          Invalid email address format.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                      <button
                        className={`px-5 py-2 rounded-lg text-sm font-bold text-white transition-all duration-300 shadow-md transform active:scale-95 ${
                          isError
                            ? "bg-red-500 shadow-red-500/30"
                            : "bg-slate-900 hover:bg-slate-800"
                        }`}
                      >
                        {isError ? "Retry" : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            }}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Featured Product Tile"
              description="Use bold colored borders to highlight special products or limited editions"
              code={`<div class="border-4 border-purple-500 rounded-lg p-4">
  <h3 class="font-semibold">Limited Edition</h3>
  <p class="text-sm text-muted-foreground">Use a bold frame to highlight</p>
</div>`}
            >
              <div
                className="border-4 rounded-lg p-4 bg-slate-700"
                style={{ borderColor: "#a855f7" }}
              >
                <div className="font-semibold text-slate-100">
                  Limited edition
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Use a bold frame to highlight
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Avatar with Status Ring"
              description="Combine border colors with rings to show user status indicators"
              code={`<div class="relative">
  <div class="w-14 h-14 rounded-full border-2 border-green-500 bg-slate-700">AL</div>
  <span class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background"></span>
</div>`}
            >
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-white"
                  style={{ border: "2px solid #22c55e" }}
                >
                  AL
                </div>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background" />
              </div>
            </ExampleCard>

            <ExampleCard
              title="Input Focus Accent"
              description="Use colored borders for focus states to provide clear visual feedback"
              code={`<input class="border border-border focus:border-2 focus:border-blue-600 rounded" placeholder="Search..." />`}
            >
              <input
                className="w-full px-3 py-2 rounded border border-border bg-slate-700 text-white focus:outline-none focus:border-2 focus:border-blue-600"
                placeholder="Search..."
              />
            </ExampleCard>

            <ExampleCard
              title="Notification Banner"
              description="Left accent borders create clear visual hierarchy for notifications"
              code={`<div class="border-l-4 border-blue-600 pl-3 rounded-md bg-slate-700">
  <div class="font-semibold">Update</div>
  <div class="text-sm text-muted-foreground">New features available</div>
</div>`}
            >
              <div
                className="rounded-md p-3 bg-slate-700 flex gap-3 items-start"
                style={{ borderLeft: "4px solid #2563eb" }}
              >
                <div className="text-white font-semibold">Update</div>
                <div className="text-sm text-muted-foreground">
                  New features available
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Success Payment Card"
              description="Green accent borders indicate successful completion states"
              code={`<div class="border-l-4 border-green-500 pl-4 rounded-md bg-slate-700">
  <div class="font-semibold">Payment successful</div>
  <div class="text-sm text-muted-foreground">Invoice paid</div>
</div>`}
            >
              <div
                className="rounded-md p-4 bg-slate-700"
                style={{ borderLeft: "4px solid #22c55e" }}
              >
                <div className="font-semibold text-slate-100">
                  Payment successful
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Your invoice has been paid
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Highlighted Pricing Plan"
              description="Use colored borders to emphasize recommended pricing tiers"
              code={`<div class="border-2 border-blue-600 rounded-md bg-slate-700 p-4">
  <div class="font-semibold">Pro — highlighted</div>
  <div class="text-2xl font-bold">₹499</div>
</div>`}
            >
              <div
                className="rounded-md p-4 bg-slate-700"
                style={{ border: "2px solid #2563eb" }}
              >
                <div className="font-semibold text-slate-100">
                  Pro — highlighted
                </div>
                <div className="text-2xl font-bold text-slate-100">₹499</div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <TipsSection
            tips={[
              {
                bold: "Subtle separators:",
                text: "use neutral borders (border-gray-300) for dividers, and bold colored borders for emphasis",
              },
              {
                bold: "Focus vs state:",
                text: "prefer ring or outline for focus to avoid layout shift when border width changes",
              },
              {
                bold: "Combine with radius:",
                text: "a colored thin border with a small radius looks modern and crisp",
              },
              {
                bold: "Visual hierarchy:",
                text: "use border width + color to create a hierarchy — thin neutral borders for structure, thicker colored borders for featured items",
              },
              {
                bold: "Semantic colors:",
                text: "establish consistent color meanings (green=success, red=error, blue=primary)",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
