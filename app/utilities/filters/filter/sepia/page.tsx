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
  { cls: "sepia-0", desc: "No sepia effect" },
  { cls: "sepia", desc: "Default sepia (100%)" },
  { cls: "sepia-50", desc: "50% sepia" },
  { cls: "sepia-100", desc: "100% sepia" },
];

export default function FilterSepiaPage() {
  const [sepiaClass, setSepiaClass] = useState("sepia-0");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Sepia"
            description="Apply sepia filter utilities to give elements a warm, antique look using Tailwind CSS."
          />

          <MentalModelSection
            title="Understanding Sepia Filters"
            description="Sepia utilities use CSS `filter: sepia()` to apply a vintage, warm tone to images or elements."
            features={[
              "Use `sepia-0` for no sepia effect",
              "Use `sepia` or `sepia-100` for full sepia tone",
              "Intermediate values like `sepia-50` for partial effects",
              "Requires the `filter` utility to enable CSS filter effects",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: sepia()` alters color tones toward sepia"
          />

          <ComparisonTable
            title="Sepia Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "sepia-0",
                values: ["filter: sepia(0)", "No sepia applied"],
              },
              {
                feature: "sepia-50",
                values: ["filter: sepia(0.5)", "Partial sepia effect"],
              },
              {
                feature: "sepia-100",
                values: ["filter: sepia(1)", "Full sepia effect"],
              },
            ]}
          />

          <UtilityGrid title="Sepia Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Apply sepia utilities on an image to preview the vintage color shift.
            </p>

            <UtilityPlayground
              title="Sepia Playground"
              description="Toggle sepia utilities on an image using the `filter` class."
              options={utilities.map(u => u.cls)}
              defaultValue="sepia-0"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Sepia preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Sepia preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Classic Sepia Portrait"
              description="Use `sepia-100` for a full warm tone effect."
              code={`<img class="filter sepia-100 w-full" src="/img/forest.jpg" />`}
            >
              <img className="filter sepia-100 w-full" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Subtle Sepia Look"
              description="Use `sepia-50` for a softer warm effect."
              code={`<img class="filter sepia-50 w-full" src="/img/beach.jpg" />`}
            >
              <img className="filter sepia-50 w-full" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Hover Sepia Effect"
              description="Transition into sepia on hover."
              code={`<img class="filter sepia-0 hover:sepia-100 transition" src="/img/mountains.jpg" />`}
            >
              <img className="filter sepia-0 hover:sepia-100 transition" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Forgetting `filter` utility",
                reason: "Sepia classes do nothing without the `filter` utility present.",
                example: `<img class="sepia-100" src="/img/example.jpg" />`,
              },
              {
                title: "Too strong sepia",
                reason: "High sepia values can wash out important details.",
                example: `<img class="filter sepia-100" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Use the `filter` utility to activate sepia effects." },
              { bold: "Interactive states:", text: "Pair with `hover:` or `focus:` for animations." },
              { bold: "Responsive usage:", text: "Use responsive prefixes like `md:sepia-50`." },
              { bold: "Combine utilities:", text: "Pair sepia with brightness or contrast for rich effects." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
