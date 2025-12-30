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
  { cls: "drop-shadow-sm", desc: "Small drop shadow" },
  { cls: "drop-shadow", desc: "Default drop shadow" },
  { cls: "drop-shadow-md", desc: "Medium drop shadow" },
  { cls: "drop-shadow-lg", desc: "Large drop shadow" },
  { cls: "drop-shadow-xl", desc: "Extra large drop shadow" },
  { cls: "drop-shadow-2xl", desc: "2× extra large drop shadow" },
  { cls: "drop-shadow-none", desc: "No drop shadow" },
];

export default function FilterDropShadowPage() {
  const [shadowClass, setShadowClass] = useState("drop-shadow");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Drop Shadow"
            description="Apply drop shadow filter utilities to elements for depth and emphasis."
          />

          <MentalModelSection
            title="Understanding Drop Shadow Filters"
            description="Drop shadow utilities use CSS `filter: drop-shadow()` to add shadow effects to elements."
            features={[
              "Use `drop-shadow-*` utilities for different shadow intensities",
              "Works on images, icons, and other visual elements",
              "Applies a realistic shadow rather than a box shadow",
              "Supports `drop-shadow-none` to remove shadow",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: drop-shadow()` applies a shadow effect around drawn content"
          />

          <ComparisonTable
            title="Drop Shadow Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "drop-shadow-sm",
                values: ["filter: drop-shadow(var(--tw-drop-shadow-sm))", "Small subtle shadow"],
              },
              {
                feature: "drop-shadow",
                values: ["filter: drop-shadow(var(--tw-drop-shadow))", "Default shadow"],
              },
              {
                feature: "drop-shadow-lg",
                values: ["filter: drop-shadow(var(--tw-drop-shadow-lg))", "Large shadow"],
              },
              {
                feature: "drop-shadow-none",
                values: ["filter: drop-shadow(0 0 #0000)", "No shadow"],
              },
            ]}
          />

          <UtilityGrid title="Drop Shadow Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different drop shadow utilities and preview how shadows change depth and realism.
            </p>

            <UtilityPlayground
              title="Drop Shadow Playground"
              description="Apply drop shadow utilities to an image with the `filter` class."
              options={utilities.map(u => u.cls)}
              defaultValue="drop-shadow"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Drop shadow preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Drop shadow preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Subtle Image Shadow"
              description="Use `drop-shadow-sm` for a light depth effect."
              code={`<img class="filter drop-shadow-sm w-full" src="/img/forest.jpg" />`}
            >
              <img className="filter drop-shadow-sm w-full" src="/img/forest.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Pronounced Shadow"
              description="Use a larger drop shadow for emphasis."
              code={`<img class="filter drop-shadow-lg w-full" src="/img/beach.jpg" />`}
            >
              <img className="filter drop-shadow-lg w-full" src="/img/beach.jpg" />
            </ExampleCard>

            <ExampleCard
              title="Shadow on Icons"
              description="Apply drop shadow to icon graphics."
              code={`<svg class="filter drop-shadow-lg w-12 h-12 text-gray-800" viewBox="0 0 24 24"></svg>`}
            >
              <svg className="filter drop-shadow-lg w-12 h-12 text-gray-800" viewBox="0 0 24 24"></svg>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not using `filter` utility",
                reason: "Drop shadow utilities require the `filter` class to enable the CSS filter property.",
                example: `<img class="drop-shadow-lg" src="/img/example.jpg" />`,
              },
              {
                title: "Over-shadowing content",
                reason: "Excessive shadows can make content look heavy or soft.",
                example: `<img class="filter drop-shadow-2xl" src="/img/example.jpg" />`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Use the `filter` utility with drop shadow utilities." },
              { bold: "Use on visuals:", text: "Best for images, icons, and illustrative elements." },
              { bold: "Combine states:", text: "Use with `hover:` or `focus:` for dynamic effects." },
              { bold: "Responsive:", text: "Add `md:drop-shadow-lg` for larger screens." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
