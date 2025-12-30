"use client";

import { useState } from "react";
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

const utilities = [
  { cls: "bg-red-500", desc: "Red background color" },
  { cls: "bg-blue-500", desc: "Blue background color" },
  { cls: "bg-green-500", desc: "Green background color" },
  { cls: "bg-yellow-500", desc: "Yellow background color" },
  { cls: "bg-purple-500", desc: "Purple background color" },
  { cls: "bg-pink-500", desc: "Pink background color" },
  { cls: "bg-slate-500", desc: "Slate background color" },
  { cls: "bg-neutral-500", desc: "Neutral background color" },
  { cls: "bg-black", desc: "Black background color" },
  { cls: "bg-white", desc: "White background color" },
];

export default function ColorsPage() {
  const [colorClass, setColorClass] = useState("bg-blue-500");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Colors"
            description="Use Tailwind’s color palette to style text, backgrounds, borders, rings, and more."
          />

          <MentalModelSection
            title="Understanding Color Utilities"
            description="Tailwind colors are tokenized design primitives that work consistently across multiple utilities."
            features={[
              "Shared palette across all color-based utilities",
              "Available in multiple shades per color",
              "Supports opacity modifiers",
              "Works with themes and CSS variables",
            ]}
            layerAssignment="Design tokens layer"
            browserBehavior="Colors are applied via CSS variables and utility classes"
          />

          <ComparisonTable
            title="Color Utility Usage"
            columns={["Utility Type", "Example", "Effect"]}
            rows={[
              {
                feature: "Background",
                values: ["bg-blue-500", "Sets background color"],
              },
              {
                feature: "Text",
                values: ["text-red-600", "Sets text color"],
              },
              {
                feature: "Border",
                values: ["border-green-400", "Sets border color"],
              },
              {
                feature: "Ring",
                values: ["ring-indigo-500", "Sets ring color"],
              },
            ]}
          />

          <UtilityGrid title="Example Color Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Switch between colors to see how they affect different elements.
            </p>

            <UtilityPlayground
              title="Colors Playground"
              description="Apply color utilities to a sample component."
              options={utilities.map(u => u.cls)}
              defaultValue="bg-blue-500"
              buildMarkup={(cls) => {
                return `<div class="p-6 rounded text-white ${cls}">
  Background: ${cls}
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`p-6 rounded text-white ${cls}`}>
                    Background: {cls}
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Colored Buttons"
              description="Use background and text colors together."
              code={`<button class="bg-indigo-500 text-white px-4 py-2 rounded">
  Button
</button>`}
            >
              <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                Button
              </button>
            </ExampleCard>

            <ExampleCard
              title="Alert States"
              description="Use semantic colors for feedback."
              code={`<div class="bg-red-100 text-red-700 p-4 rounded">
  Error message
</div>`}
            >
              <div className="bg-red-100 text-red-700 p-4 rounded">
                Error message
              </div>
            </ExampleCard>

            <ExampleCard
              title="Text Emphasis"
              description="Highlight important text."
              code={`<p class="text-green-600 font-semibold">
  Success text
</p>`}
            >
              <p className="text-green-600 font-semibold">
                Success text
              </p>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using colors without contrast",
                reason: "Low contrast combinations reduce readability.",
                example: `<p class="text-yellow-200 bg-white">Text</p>`,
              },
              {
                title: "Hardcoding colors",
                reason: "Breaks consistency with design tokens.",
                example: `<div style="color:#ff0000">Text</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Semantic usage:", text: "Use color meaning consistently across UI." },
              { bold: "Contrast:", text: "Ensure accessible contrast ratios." },
              { bold: "Opacity:", text: "Use slash opacity for subtle variations." },
              { bold: "Reuse palette:", text: "Apply the same colors to text, border, and ring utilities." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
