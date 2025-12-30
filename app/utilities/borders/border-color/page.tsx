"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { ExampleSection, ExampleCard } from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import CodeBlock from "@/app/utilities/components/code-block";

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
      <Navbar />
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
              "Brand colors maintain visual consistency across components"
            ]}
            layerAssignment="Visual Layer - Adds semantic meaning and visual hierarchy"
            browserBehavior="Border colors inherit from computed color values and respect CSS color inheritance and opacity rules"
          />

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using color alone for state indication",
                reason: "Users with color vision deficiency can't distinguish between states when only color changes",
                example: "border-red-500 vs border-green-500 without additional indicators",
                level: "critical"
              },
              {
                title: "Poor contrast on dark backgrounds",
                reason: "Light borders on dark backgrounds may be invisible to users with low vision",
                example: "border-gray-300 on dark-slate backgrounds",
                level: "warning"
              },
              {
                title: "Inconsistent color usage",
                reason: "Using different colors for the same semantic meaning creates confusion",
                example: "Sometimes using border-blue-500 for primary, sometimes border-purple-500",
                level: "info"
              }
            ]}
          />

          <UtilityPlayground
            title="Border Color Playground"
            description="Test different border colors with various widths, styles, and radius combinations."
            options={utilities.map(u => u.cls)}
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

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Featured Product Tile"
              description="Use bold colored borders to highlight special products or limited editions"
              code={`<div class="border-4 border-purple-500 rounded-lg p-4">
  <h3 class="font-semibold">Limited Edition</h3>
  <p class="text-sm text-muted-foreground">Use a bold frame to highlight</p>
</div>`}
            >
              <div className="border-4 rounded-lg p-4 bg-slate-700" style={{ borderColor: "#a855f7" }}>
                <div className="font-semibold text-slate-100">Limited edition</div>
                <div className="text-sm text-muted-foreground mt-1">Use a bold frame to highlight</div>
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
                <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-white" style={{ border: "2px solid #22c55e" }}>
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
              <div className="rounded-md p-3 bg-slate-700 flex gap-3 items-start" style={{ borderLeft: "4px solid #2563eb" }}>
                <div className="text-white font-semibold">Update</div>
                <div className="text-sm text-muted-foreground">New features available</div>
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
              <div className="rounded-md p-4 bg-slate-700" style={{ borderLeft: "4px solid #22c55e" }}>
                <div className="font-semibold text-slate-100">Payment successful</div>
                <div className="text-sm text-muted-foreground mt-1">Your invoice has been paid</div>
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
              <div className="rounded-md p-4 bg-slate-700" style={{ border: "2px solid #2563eb" }}>
                <div className="font-semibold text-slate-100">Pro — highlighted</div>
                <div className="text-2xl font-bold text-slate-100">₹499</div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <TipsSection 
            tips={[
              { bold: "Subtle separators:", text: "use neutral borders (border-gray-300) for dividers, and bold colored borders for emphasis" },
              { bold: "Focus vs state:", text: "prefer ring or outline for focus to avoid layout shift when border width changes" },
              { bold: "Combine with radius:", text: "a colored thin border with a small radius looks modern and crisp" },
              { bold: "Visual hierarchy:", text: "use border width + color to create a hierarchy — thin neutral borders for structure, thicker colored borders for featured items" },
              { bold: "Semantic colors:", text: "establish consistent color meanings (green=success, red=error, blue=primary)" }
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
