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
  { cls: "invert-0", desc: "No inversion" },
  { cls: "invert", desc: "Full inversion (100%)" },
  { cls: "invert-50", desc: "50% inversion" },
  { cls: "invert-100", desc: "100% inversion" },
];

export default function FilterInvertPage() {
  const [invertClass, setInvertClass] = useState("invert-0");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Invert"
            description="Apply CSS invert filter utilities to reverse element colors using Tailwind CSS."
          />

          <MentalModelSection
            title="Understanding Invert Filters"
            description="Invert utilities apply CSS `filter: invert()` to flip colors. At 100%, black becomes white and vice-versa."
            features={[
              "Use `invert-0` for no inversion",
              "Use `invert` or `invert-100` for full color reversal",
              "Intermediate values like `invert-50` for partial effects",
              "Requires the `filter` utility to enable CSS filter effects",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: invert()` reverses the color value of pixels"
          />

          <ComparisonTable
            title="Invert Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "invert-0",
                values: ["filter: invert(0)", "No inversion"],
              },
              {
                feature: "invert-50",
                values: ["filter: invert(0.5)", "Partial inversion"],
              },
              {
                feature: "invert-100",
                values: ["filter: invert(1)", "Full inversion"],
              },
            ]}
          />

          <UtilityGrid title="Invert Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Test invert utilities on an image to preview how colors are reversed.
            </p>

            <UtilityPlayground
              title="Invert Playground"
              description="Apply invert utilities on an image with the `filter` class."
              options={utilities.map(u => u.cls)}
              defaultValue="invert-0"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Invert preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Invert preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Full Color Inversion"
              description="Use `invert` or `invert-100` to reverse an image’s colors."
              code={`<img class="filter invert-100 w-full" src="/img/forest.jpg" />`}
            >
              <img className="filter invert-100 w-full" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Partial Inversion"
              description="Use `invert-50` for a softer inverted look."
              code={`<img class="filter invert-50 w-full" src="/img/beach.jpg" />`}
            >
              <img className="filter invert-50 w-full" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Hover Invert Effect"
              description="Reverse colors on hover for interactive UIs."
              code={`<img class="filter invert-0 hover:invert-100 transition" src="/img/mountains.jpg" />`}
            >
              <img className="filter invert-0 hover:invert-100 transition" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Forgetting the `filter` class",
                reason: "Invert utilities only work when filters are enabled.",
                example: `<img class="invert-100" src="/img/example.jpg" />`,
              },
              {
                title: "Too much inversion",
                reason: "High inversion can make content hard to recognize.",
                example: `<img class="filter invert-100" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Include `filter` to apply invert utilities." },
              { bold: "Interactive states:", text: "Use with `hover:` or `focus:`." },
              { bold: "Responsive prefixes:", text: "Use responsive variants like `md:invert-50`." },
              { bold: "Combine with others:", text: "Pair with brightness or contrast for creative effects." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
