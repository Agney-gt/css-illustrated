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

type BorderWidth =
  | "border-0"
  | "border"
  | "border-2"
  | "border-4"
  | "border-8"
  | "border-x-2"
  | "border-y-4"
  | "border-t-2"
  | "border-r-4";

type BorderStyle =
  | "border-solid"
  | "border-dashed"
  | "border-dotted"
  | "border-double"
  | "border-none";

export default function BorderWidthPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [widthClass, setWidthClass] = useState<BorderWidth>("border");
  const [styleClass, setStyleClass] = useState<BorderStyle>("border-solid");
  const [colorClass, setColorClass] = useState("border-border");
  const [radius, setRadius] = useState("rounded-md");
  const [showShadow, setShowShadow] = useState(true);
  const [items, setItems] = useState(3);

  const utilities: { cls: BorderWidth; desc: string }[] = [
    { cls: "border-0", desc: "No border" },
    { cls: "border", desc: "1px border (default)" },
    { cls: "border-2", desc: "2px border" },
    { cls: "border-4", desc: "4px border" },
    { cls: "border-8", desc: "8px border" },
    { cls: "border-x-2", desc: "2px left+right borders" },
    { cls: "border-y-4", desc: "4px top+bottom borders" },
    { cls: "border-t-2", desc: "2px top border" },
    { cls: "border-r-4", desc: "4px right border" },
  ];

  const styles: BorderStyle[] = [
    "border-solid",
    "border-dashed",
    "border-dotted",
    "border-double",
    "border-none",
  ];

  const colors = [
    "border-border",
    "border-blue-600",
    "border-green-500",
    "border-red-500",
    "border-yellow-400",
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

  const playgroundMarkup = `<div class="${widthClass} ${styleClass} ${colorClass} ${radius} ${
    showShadow ? "shadow-md" : ""
  } p-6">
  Preview content
</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero 
            title="Border Width"
            description="Control border thickness on elements — from hairline outlines to bold frames. Useful for cards, inputs, focus rings, table dividers and emphasis."
          />

          <UtilityGrid
            title="Border Width Utilities"
            items={utilities}
            prefix="border-"
          />

          <MentalModelSection
            title="Understanding Border Width"
            description="Border width controls the visual weight and emphasis of element boundaries. Thicker borders draw more attention but take up more space."
            features={[
              "Width affects total element size (box model impact)",
              "Thicker borders create visual hierarchy and emphasis",
              "Combines with color and style for complete control",
              "Responsive widths adapt to screen sizes",
              "Width changes can cause layout shift if not managed carefully"
            ]}
            layerAssignment="Visual Weight Layer - Controls emphasis and attention through line thickness"
            browserBehavior="Border width adds to the element's box size unless using box-sizing: border-box"
          />

          <ComparisonTable
            title="Border Width Comparison"
            columns={["Width", "Visual Impact", "Layout Effect", "Best Use Cases"]}
            rows={[
              {
                feature: "0 (border-0)",
                values: ["No visible border", "Minimal, clean", "No space taken", "Minimalist designs, hover states"]
              },
              {
                feature: "1px (border)",
                values: ["Hairline", "Subtle", "Minimal space", "Form inputs, subtle dividers"]
              },
              {
                feature: "2px (border-2)",
                values: ["Thin but visible", "Moderate", "Small space", "Cards, buttons, focus states"]
              },
              {
                feature: "4px (border-4)",
                values: ["Noticeable", "Strong", "Significant space", "Featured content, emphasis"]
              },
              {
                feature: "8px (border-8)",
                values: ["Very bold", "Heavy emphasis", "Large space", "Special highlights, frames"]
              }
            ]}
          />

          <UtilityPlayground
            title="Border Width Playground"
            description="Test different border widths and see how they affect visual hierarchy and layout."
            options={utilities.map(u => u.cls)}
            defaultValue="border"
            buildMarkup={(widthClass, customClasses = "") => {
              return `<div class="${widthClass} border-solid ${customClasses} p-6 bg-slate-700">
  Border Preview
</div>`;
            }}
            renderPreview={(widthClass, customClasses = "") => {
              return (
                <div className={`${widthClass} border-solid ${customClasses} p-6 bg-slate-700 text-white`}>
                  Border Preview
                </div>
              );
            }}
            optionLabel={(value) => value.replace("border-", "") || "0"}
            defaultCustomClasses="rounded-md"
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Featured Card"
              description="Thick borders draw attention and create visual hierarchy"
              code={`<div class="border-4 border-blue-600 rounded-md p-4">
  <h3 class="font-semibold">Featured Card</h3>
  <p class="text-sm text-muted-foreground">Emphasized content</p>
</div>`}
            >
              <div className="border-4 border-blue-600 rounded-md p-4 bg-slate-700">
                <h3 className="font-semibold text-slate-100">Featured Card</h3>
                <p className="text-sm text-muted-foreground">Emphasized content</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Focus State Input"
              description="Increase border width on focus for clear visual feedback"
              code={`<input class="border border-border focus:border-2 focus:border-blue-600 rounded px-3 py-2 bg-slate-700 text-white" placeholder="Your name" />`}
            >
              <input 
                className="border border-border focus:border-2 focus:border-blue-600 rounded px-3 py-2 bg-slate-700 text-white w-full" 
                placeholder="Your name" 
              />
            </ExampleCard>

            <ExampleCard
              title="Table Row Dividers"
              description="Use border-y for clean table and list separators"
              code={`<div class="divide-y divide-border">
  <div class="py-3">Row 1</div>
  <div class="py-3">Row 2</div>
  <div class="py-3">Row 3</div>
</div>`}
            >
              <div className="divide-y divide-border bg-slate-700">
                <div className="py-3 text-slate-200">Row 1</div>
                <div className="py-3 text-slate-200">Row 2</div>
                <div className="py-3 text-slate-200">Row 3</div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Avatar with Border"
              description="Subtle borders define avatar boundaries while maintaining clean look"
              code={`<div class="w-14 h-14 rounded-full border-2 border-green-500 bg-slate-700 text-white flex items-center justify-center">
  AL
</div>`}
            >
              <div className="w-14 h-14 rounded-full border-2 border-green-500 bg-slate-700 text-white flex items-center justify-center">
                AL
              </div>
            </ExampleCard>

            <ExampleCard
              title="Timeline Accent"
              description="Left borders create visual hierarchy for timeline items"
              code={`<div class="border-l-4 border-blue-600 pl-4 bg-slate-700 p-3 rounded">
  <div class="font-semibold text-slate-100">Release 1.4</div>
  <div class="text-sm text-muted-foreground">Bug fixes and improvements</div>
</div>`}
            >
              <div className="border-l-4 border-blue-600 pl-4 bg-slate-700 p-3 rounded">
                <div className="font-semibold text-slate-100">Release 1.4</div>
                <div className="text-sm text-muted-foreground">Bug fixes and improvements</div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Price Comparison"
              description="Vertical dividers separate pricing tiers cleanly"
              code={`<div class="flex divide-x divide-border">
  <div class="flex-1 p-4 text-center">
    <div class="font-semibold">Basic</div>
    <div class="text-2xl font-bold">Free</div>
  </div>
  <div class="flex-1 p-4 text-center border-l-4 border-blue-600">
    <div class="font-semibold">Pro</div>
    <div class="text-2xl font-bold">₹499</div>
  </div>
  <div class="flex-1 p-4 text-center">
    <div class="font-semibold">Enterprise</div>
    <div class="text-2xl font-bold">Contact</div>
  </div>
</div>`}
            >
              <div className="flex divide-x divide-border">
                <div className="flex-1 p-4 text-center">
                  <div className="font-semibold text-slate-100">Basic</div>
                  <div className="text-2xl font-bold text-slate-100">Free</div>
                </div>
                <div className="flex-1 p-4 text-center border-l-4 border-blue-600 bg-slate-700">
                  <div className="font-semibold text-slate-100">Pro</div>
                  <div className="text-2xl font-bold text-slate-100">₹499</div>
                </div>
                <div className="flex-1 p-4 text-center">
                  <div className="font-semibold text-slate-100">Enterprise</div>
                  <div className="text-2xl font-bold text-slate-100">Contact</div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Draft Placeholder"
              description="Dashed borders indicate temporary or draft content"
              code={`<div class="border-dashed border-2 border-border rounded-md p-4 bg-slate-700">
  <div class="font-semibold text-slate-100">Draft Content</div>
  <div class="text-sm text-muted-foreground">This is a placeholder</div>
</div>`}
            >
              <div className="border-dashed border-2 border-border rounded-md p-4 bg-slate-700">
                <div className="font-semibold text-slate-100">Draft Content</div>
                <div className="text-sm text-muted-foreground">This is a placeholder</div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Modal Header Accent"
              description="Top borders create strong modal header emphasis"
              code={`<div class="border-t-4 border-blue-600 p-4 bg-slate-700">
  <div class="font-semibold text-slate-100">Modal Title</div>
  <div class="text-sm text-muted-foreground">Important action required</div>
</div>`}
            >
              <div className="border-t-4 border-blue-600 p-4 bg-slate-700 rounded-t-md">
                <div className="font-semibold text-slate-100">Modal Title</div>
                <div className="text-sm text-muted-foreground">Important action required</div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <TipsSection 
            tips={[
              { bold: "Use thin borders:", text: "(1px) for subtle dividers; thicker borders for emphasis or separated modules" },
              { bold: "Prefer outline / ring for focus:", text: "ring utilities don't affect layout like borders do" },
              { bold: "Combine with border-style:", text: "(dashed/dotted) for secondary separators (e.g., print previews, placeholders)" },
              { bold: "Responsive borders:", text: "try responsive widths (md:border-2) to increase emphasis on larger screens" },
              { bold: "Consider layout impact:", text: "thick borders increase element size, plan accordingly in your layout" }
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
