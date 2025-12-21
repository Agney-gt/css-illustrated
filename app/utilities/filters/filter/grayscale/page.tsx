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
  { cls: "grayscale-0", desc: "No grayscale (full color)" },
  { cls: "grayscale", desc: "50% grayscale" },
  { cls: "grayscale-50", desc: "50% grayscale" },
  { cls: "grayscale-100", desc: "100% grayscale (black & white)" },
];

export default function FilterGrayscalePage() {
  const [grayscaleClass, setGrayscaleClass] = useState("grayscale-0");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Grayscale"
            description="Apply grayscale filter utilities to desaturate elements using CSS filter."
          />

          <MentalModelSection
            title="Understanding Grayscale Filters"
            description="Grayscale utilities convert an element’s colors to shades of gray using CSS `filter: grayscale()`."
            features={[
              "Use `grayscale-0` for full color",
              "Use `grayscale-100` for full grayscale",
              "Intermediate values provide partial desaturation",
              "Requires the `filter` utility to enable CSS filter effects",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: grayscale()` adjusts saturation of colors"
          />

          <ComparisonTable
            title="Grayscale Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "grayscale-0",
                values: ["filter: grayscale(0)", "No grayscale effect"],
              },
              {
                feature: "grayscale-50",
                values: ["filter: grayscale(0.5)", "Partial grayscale"],
              },
              {
                feature: "grayscale-100",
                values: ["filter: grayscale(1)", "Full grayscale (black & white)"],
              },
            ]}
          />

          <UtilityGrid title="Grayscale Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different grayscale utilities on an image to preview the desaturation effect.
            </p>

            <UtilityPlayground
              title="Grayscale Playground"
              description="Apply grayscale utilities on an image with the `filter` class."
              options={utilities.map(u => u.cls)}
              defaultValue="grayscale-0"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Grayscale preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Grayscale preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Partial Desaturation"
              description="Use `grayscale-50` for subtle desaturation."
              code={`<img class="filter grayscale-50 w-full" src="/img/forest.jpg" />`}
            >
              <img className="filter grayscale-50 w-full" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Black & White Image"
              description="Use `grayscale-100` for full grayscale effect."
              code={`<img class="filter grayscale-100 w-full" src="/img/beach.jpg" />`}
            >
              <img className="filter grayscale-100 w-full" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Hover Grayscale Transition"
              description="Animate grayscale on hover."
              code={`<img class="filter grayscale-0 hover:grayscale-100 transition" src="/img/mountains.jpg" />`}
            >
              <img className="filter grayscale-0 hover:grayscale-100 transition" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not using `filter` utility",
                reason: "Grayscale classes only take effect when the `filter` utility is present.",
                example: `<img class="grayscale-100" src="/img/example.jpg" />`,
              },
              {
                title: "Over-desaturation",
                reason: "Full grayscale can remove color information needed for UI clarity.",
                example: `<img class="filter grayscale-100" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Include the `filter` utility to activate grayscale classes." },
              { bold: "Use states:", text: "Pair with `hover:` or `focus:` for interactive effects." },
              { bold: "Responsive usage:", text: "Apply responsive prefixes like `md:grayscale-50`." },
              { bold: "Arbitrary values:", text: "Use `grayscale-[value]` for custom desaturation levels." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
