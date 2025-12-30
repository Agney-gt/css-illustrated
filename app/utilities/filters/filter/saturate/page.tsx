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
  { cls: "saturate-0", desc: "No saturation" },
  { cls: "saturate-50", desc: "50% saturation" },
  { cls: "saturate-100", desc: "100% saturation (default)" },
  { cls: "saturate-150", desc: "150% saturation" },
  { cls: "saturate-200", desc: "200% saturation" },
];

export default function FilterSaturatePage() {
  const [saturateClass, setSaturateClass] = useState("saturate-100");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Saturate"
            description="Apply CSS saturate filter utilities to adjust color intensity using Tailwind."
          />

          <MentalModelSection
            title="Understanding Saturate Filters"
            description="Saturate utilities use CSS `filter: saturate()` to control the intensity of colors. Higher values intensify color, lower values soften it."
            features={[
              "Use `saturate-0` for no color",
              "Use `saturate-100` for normal saturation",
              "Higher values like `saturate-150` increase intensity",
              "Requires the `filter` utility to enable filter effects"
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: saturate()` adjusts the richness of colors"
          />

          <ComparisonTable
            title="Saturate Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "saturate-0",
                values: ["filter: saturate(0)", "No color (grayscale)"],
              },
              {
                feature: "saturate-100",
                values: ["filter: saturate(1)", "Normal color"],
              },
              {
                feature: "saturate-200",
                values: ["filter: saturate(2)", "Very intense color"],
              },
            ]}
          />

          <UtilityGrid title="Saturate Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Select a saturate utility to preview how it affects color intensity.
            </p>

            <UtilityPlayground
              title="Saturate Playground"
              description="Apply saturate utilities on an image with the `filter` class."
              options={utilities.map(u => u.cls)}
              defaultValue="saturate-100"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Saturate preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Saturate preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Desaturated Image"
              description="Use `saturate-50` to soften the colors."
              code={`<img class="filter saturate-50 w-full" src="/img/forest.jpg" />`}
            >
              <img className="filter saturate-50 w-full" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Highly Saturated Photo"
              description="Use `saturate-150` for vibrant colors."
              code={`<img class="filter saturate-150 w-full" src="/img/beach.jpg" />`}
            >
              <img className="filter saturate-150 w-full" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Interactive Saturation on Hover"
              description="Increase saturation on hover for engagement."
              code={`<img class="filter saturate-100 hover:saturate-200 transition" src="/img/mountains.jpg" />`}
            >
              <img className="filter saturate-100 hover:saturate-200 transition" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not enabling filters",
                reason: "Saturate utilities only work if the `filter` utility is present.",
                example: `<img class="saturate-150" src="/img/example.jpg" />`,
              },
              {
                title: "Over-saturation",
                reason: "Very high saturation can distort visual content.",
                example: `<img class="filter saturate-200" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Always include `filter` to apply saturate utilities." },
              { bold: "Use interactive states:", text: "Pair with `hover:` or `focus:` utilities." },
              { bold: "Responsive:", text: "Use responsive prefixes like `md:saturate-150`." },
              { bold: "Arbitrary values:", text: "Use `saturate-[value]` for custom saturation levels." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
