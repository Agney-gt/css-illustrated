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
  { cls: "hue-rotate-0", desc: "No hue rotation (default)" },
  { cls: "hue-rotate-15", desc: "Rotate hue by 15°" },
  { cls: "hue-rotate-30", desc: "Rotate hue by 30°" },
  { cls: "hue-rotate-60", desc: "Rotate hue by 60°" },
  { cls: "hue-rotate-90", desc: "Rotate hue by 90°" },
  { cls: "hue-rotate-180", desc: "Rotate hue by 180°" },
];

export default function FilterHueRotatePage() {
  const [hueClass, setHueClass] = useState("hue-rotate-0");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Hue Rotate"
            description="Apply hue rotation effects to elements using Tailwind’s filter hue-rotate utilities."
          />

          <MentalModelSection
            title="Understanding Hue Rotation Filters"
            description="Hue rotate utilities adjust an element’s hue using CSS `filter: hue-rotate()`, shifting all colors around the color wheel."
            features={[
              "Apply standard degree rotations via `hue-rotate-*` utilities",
              "Works on images and graphical content",
              "Requires the `filter` utility to enable filter effects",
              "Supports arbitrary values via bracket syntax",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: hue-rotate()` rotates visual hues of content"
          />

          <ComparisonTable
            title="Hue Rotate Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "hue-rotate-0",
                values: ["filter: hue-rotate(0deg)", "No hue shift"],
              },
              {
                feature: "hue-rotate-90",
                values: ["filter: hue-rotate(90deg)", "90° hue shift"],
              },
              {
                feature: "hue-rotate-180",
                values: ["filter: hue-rotate(180deg)", "180° hue shift"],
              },
              {
                feature: "hue-rotate-360",
                values: ["filter: hue-rotate(360deg)", "Full circle shift"],
              },
            ]}
          />

          <UtilityGrid title="Hue Rotate Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different hue rotate utilities on an image to preview the color shifts.
            </p>

            <UtilityPlayground
              title="Hue Rotate Playground"
              description="Apply hue rotate utilities on an image with the `filter` class."
              options={utilities.map(u => u.cls)}
              defaultValue="hue-rotate-0"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Hue rotate preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Hue rotate preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Vibrant Hue Shift"
              description="Use a moderate hue shift for creative visuals."
              code={`<img class="filter hue-rotate-60 w-full" src="/img/forest.jpg" />`}
            >
              <img className="filter hue-rotate-60 w-full" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Full Hue Rotation"
              description="Rotate hues a full 180° for a bold effect."
              code={`<img class="filter hue-rotate-180 w-full" src="/img/beach.jpg" />`}
            >
              <img className="filter hue-rotate-180 w-full" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Hover Hue Shift"
              description="Shift hue on hover for dynamic UI."
              code={`<img class="filter hue-rotate-0 hover:hue-rotate-90 transition" src="/img/mountains.jpg" />`}
            >
              <img className="filter hue-rotate-0 hover:hue-rotate-90 transition" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not using `filter` utility",
                reason: "Hue rotate classes only have effect when `filter` is present.",
                example: `<img class="hue-rotate-90" src="/img/example.jpg" />`,
              },
              {
                title: "Subtle shifts unnoticed",
                reason: "Small degree shifts may appear subtle depending on image colors.",
                example: `<img class="filter hue-rotate-15" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Use `filter` class to apply hue rotate utilities." },
              { bold: "Use states:", text: "Pair with `hover:` or `focus:` for interactive hue changes." },
              { bold: "Arbitrary values:", text: "Use classes like `hue-rotate-[deg]` for custom rotations." },
              { bold: "Responsive:", text: "Add responsive prefixes like `md:hue-rotate-90`." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
