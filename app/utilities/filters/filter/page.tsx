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
  { cls: "filter", desc: "Enable filter effects" },
  { cls: "filter-none", desc: "Disable all filters" },
];

export default function FilterPage() {
  const [filterClass, setFilterClass] = useState("filter");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Utilities"
            description="Enable and control CSS filter effects like blur, brightness, contrast, and more."
          />

          <MentalModelSection
            title="Understanding Filter Utilities"
            description="Filter utilities let you apply CSS filter effects (blur, brightness, contrast, etc.) to elements."
            features={[
              "Use `filter` to enable filter effects",
              "Use `filter-none` to remove all filters",
              "Combine with individual filter utilities like `blur-*`, `brightness-*`, `contrast-*`, etc.",
              "Supports arbitrary values via bracket syntax",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter` property applies graphical filter functions to elements"
          />

          <ComparisonTable
            title="Filter Utility Overview"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "filter",
                values: ["filter: var(--tw-filter)", "Enable filter effects"],
              },
              {
                feature: "filter-none",
                values: ["filter: none", "Disable all filters"],
              },
            ]}
          />

          <UtilityGrid title="Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Toggle between enabling and disabling filter effects.
            </p>

            <UtilityPlayground
              title="Filter Playground"
              description="Toggle filter utilities and preview combined filter effects."
              options={utilities.map(u => u.cls)}
              defaultValue="filter"
              buildMarkup={(cls) => {
                return `<img class="${cls} blur-lg brightness-125 contrast-125 saturate-150 sepia drop-shadow-lg w-full h-40 object-cover" src="/img/mountains.jpg" alt="Filters preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`${cls} blur-lg brightness-125 contrast-125 saturate-150 sepia drop-shadow-lg w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Filters preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Image with Filters"
              description="Combine multiple filter utilities after enabling filters."
              code={`<img class="filter blur-md brightness-125 contrast-125 saturate-150 drop-shadow-md" src="/img/beach.jpg" />`}
            >
              <img className="filter blur-md brightness-125 contrast-125 saturate-150 drop-shadow-md" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Hover Filter Effects"
              description="Apply filter effects on hover for interactive UI."
              code={`<img class="filter blur-sm hover:blur-lg transition" src="/img/forest.jpg" />`}
            >
              <img className="filter blur-sm hover:blur-lg transition" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Disable Filters"
              description="Use `filter-none` to remove all filter effects."
              code={`<img class="filter-none blur-lg brightness-150" src="/img/mountains.jpg" />`}
            >
              <img className="filter-none blur-lg brightness-150" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using filter utilities without enabling filter",
                reason: "Individual filter helpers (like `blur-*`) have no effect unless `filter` is present.",
                example: `<img class="blur-lg brightness-125" src="/img/example.jpg" />`,
              },
              {
                title: "Overloading filters",
                reason: "Too many filter effects can make visuals unclear or heavy.",
                example: `<img class="filter blur-3xl invert saturate-200" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters first:", text: "Use `filter` before applying specific filter utilities." },
              { bold: "Use `filter-none`:", text: "Remove all filters when needed for clarity." },
              { bold: "Combine selectively:", text: "Mix only needed filters for performance and readability." },
              { bold: "Responsive & states:", text: "Apply responsive and state variants like `hover:filter-none`." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
