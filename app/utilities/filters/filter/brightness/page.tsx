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
  { cls: "brightness-0", desc: "No brightness (completely dark)" },
  { cls: "brightness-50", desc: "Half brightness" },
  { cls: "brightness-75", desc: "75% brightness" },
  { cls: "brightness-90", desc: "90% brightness" },
  { cls: "brightness-100", desc: "Default (100%) brightness" },
  { cls: "brightness-110", desc: "110% brightness" },
  { cls: "brightness-125", desc: "125% brightness" },
  { cls: "brightness-150", desc: "150% brightness" },
  { cls: "brightness-200", desc: "200% brightness" },
];

export default function FilterBrightnessPage() {
  const [brightnessClass, setBrightnessClass] = useState("brightness-100");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Brightness"
            description="Control an element’s brightness level using Tailwind CSS filter brightness utilities."
          />

          <MentalModelSection
            title="Understanding Brightness Filters"
            description="Brightness utilities adjust the perceived brightness of an element using CSS `filter: brightness()`."
            features={[
              "Use utilities like `brightness-50`, `brightness-125`, etc.",
              "Works on images, backgrounds, and other graphical elements",
              "Needs the `filter` utility to enable CSS filter effects",
              "Supports arbitrary values via bracket syntax",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: brightness()` changes how light or dark an element appears"
          />

          <ComparisonTable
            title="Brightness Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "brightness-50",
                values: ["filter: brightness(0.5)", "Reduce brightness"],
              },
              {
                feature: "brightness-100",
                values: ["filter: brightness(1)", "No change (default)"],
              },
              {
                feature: "brightness-150",
                values: ["filter: brightness(1.5)", "Increase brightness"],
              },
              {
                feature: "brightness-200",
                values: ["filter: brightness(2)", "Double brightness"],
              },
            ]}
          />

          <UtilityGrid title="Brightness Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Select a brightness utility to preview how it changes an image’s brightness.
            </p>

            <UtilityPlayground
              title="Brightness Playground"
              description="Apply brightness utilities on an image with the `filter` class."
              options={utilities.map(u => u.cls)}
              defaultValue="brightness-100"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Brightness preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Brightness preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Dimmed Image"
              description="Use brightness utilities to darken an image."
              code={`<img class="filter brightness-75 w-full" src="/img/forest.jpg" />`}
            >
              <img className="filter brightness-75 w-full" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Bright Highlight"
              description="Increase brightness for emphasis."
              code={`<img class="filter brightness-150 w-full" src="/img/beach.jpg" />`}
            >
              <img className="filter brightness-150 w-full" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Hover Brightness Change"
              description="Animate brightness on hover."
              code={`<img class="filter brightness-100 hover:brightness-125 transition" src="/img/mountains.jpg" />`}
            >
              <img className="filter brightness-100 hover:brightness-125 transition" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not using `filter` utility",
                reason: "Brightness classes only take effect when the `filter` utility is present.",
                example: `<img class="brightness-125" src="/img/example.jpg" />`,
              },
              {
                title: "Too high brightness",
                reason: "Excessive brightness can wash out details in images.",
                example: `<img class="filter brightness-200" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Use `filter` class to turn on filter effects before brightness utilities." },
              { bold: "Use states:", text: "Pair with `hover:` or `focus:` for interactive effects." },
              { bold: "Responsive:", text: "Use responsive prefixes like `md:brightness-125`." },
              { bold: "Arbitrary values:", text: "Use `brightness-[value]` for custom brightness levels." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
