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
  { cls: "contrast-0", desc: "No contrast (flat)" },
  { cls: "contrast-50", desc: "50% contrast" },
  { cls: "contrast-75", desc: "75% contrast" },
  { cls: "contrast-100", desc: "Default contrast" },
  { cls: "contrast-125", desc: "125% contrast" },
  { cls: "contrast-150", desc: "150% contrast" },
  { cls: "contrast-200", desc: "200% contrast" },
];

export default function FilterContrastPage() {
  const [contrastClass, setContrastClass] = useState("contrast-100");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Contrast"
            description="Control the contrast of elements using Tailwind CSS contrast filter utilities."
          />

          <MentalModelSection
            title="Understanding Contrast Filters"
            description="Contrast utilities use CSS `filter: contrast()` to adjust the difference between light and dark areas."
            features={[
              "Use classes like `contrast-50` or `contrast-150`",
              "Affects images, backgrounds, and other graphical elements",
              "Requires the `filter` utility to enable filter effects",
              "Supports arbitrary values via bracket syntax",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: contrast()` changes visual contrast intensity"
          />

          <ComparisonTable
            title="Contrast Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "contrast-50",
                values: ["filter: contrast(0.5)", "Lower contrast"],
              },
              {
                feature: "contrast-100",
                values: ["filter: contrast(1)", "No change (default)"],
              },
              {
                feature: "contrast-150",
                values: ["filter: contrast(1.5)", "Higher contrast"],
              },
              {
                feature: "contrast-200",
                values: ["filter: contrast(2)", "Maximum contrast"],
              },
            ]}
          />

          <UtilityGrid title="Contrast Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different contrast utilities on an image to see how they enhance or soften tones.
            </p>

            <UtilityPlayground
              title="Contrast Playground"
              description="Apply contrast utilities on an image with the `filter` class."
              options={utilities.map(u => u.cls)}
              defaultValue="contrast-100"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Contrast preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Contrast preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Low Contrast Image"
              description="Use lower contrast to soften harsh images."
              code={`<img class="filter contrast-75 w-full" src="/img/forest.jpg" />`}
            >
              <img className="filter contrast-75 w-full" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="High Contrast Emphasis"
              description="Use higher contrast to emphasize details."
              code={`<img class="filter contrast-150 w-full" src="/img/beach.jpg" />`}
            >
              <img className="filter contrast-150 w-full" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Hover Contrast"
              description="Adjust contrast on hover for a dynamic UI effect."
              code={`<img class="filter contrast-100 hover:contrast-125 transition" src="/img/mountains.jpg" />`}
            >
              <img className="filter contrast-100 hover:contrast-125 transition" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not using `filter` utility",
                reason: "Contrast utilities only work when `filter` is present.",
                example: `<img class="contrast-150" src="/img/example.jpg" />`,
              },
              {
                title: "Excessive contrast",
                reason: "Too high contrast can create unnatural visuals.",
                example: `<img class="filter contrast-200" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Always include `filter` to apply contrast utilities." },
              { bold: "Use interactive states:", text: "Pair with `hover` or `focus` for effects." },
              { bold: "Responsive usage:", text: "Use responsive prefixes like `md:contrast-150`." },
              { bold: "Arbitrary values:", text: "Use `contrast-[value]` for custom contrast levels." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
