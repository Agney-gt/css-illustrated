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
  { cls: "fill-none", desc: "No fill color" },
  { cls: "fill-current", desc: "Use current text color" },
  { cls: "fill-black", desc: "Black fill color" },
  { cls: "fill-white", desc: "White fill color" },
  { cls: "fill-red-500", desc: "Red fill color" },
  { cls: "fill-blue-500", desc: "Blue fill color" },
  { cls: "fill-green-500", desc: "Green fill color" },
  { cls: "fill-yellow-500", desc: "Yellow fill color" },
  { cls: "fill-purple-500", desc: "Purple fill color" },
];

export default function FillPage() {
  const [fillClass, setFillClass] = useState("fill-blue-500");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Fill"
            description="Control the fill color of SVG elements using Tailwind CSS utilities."
          />

          <MentalModelSection
            title="Understanding Fill Utilities"
            description="Fill utilities map directly to the SVG fill attribute and control how shapes are painted."
            features={[
              "Applies only to SVG elements",
              "Supports Tailwind color palette",
              "Can inherit text color with fill-current",
              "Works with hover, focus, and responsive variants",
            ]}
            layerAssignment="SVG & graphics layer"
            browserBehavior="CSS fill property controls the interior color of SVG shapes"
          />

          <ComparisonTable
            title="Fill Utility Overview"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "fill-current",
                values: ["fill: currentColor", "Inherits text color"],
              },
              {
                feature: "fill-none",
                values: ["fill: none", "No fill"],
              },
              {
                feature: "fill-{color}",
                values: ["fill: <color>", "Applies color to SVG shapes"],
              },
            ]}
          />

          <UtilityGrid title="Fill Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Switch fill utilities to see how they affect SVG icons.
            </p>

            <UtilityPlayground
              title="Fill Playground"
              description="Apply fill utilities to an SVG icon."
              options={utilities.map(u => u.cls)}
              defaultValue="fill-blue-500"
              buildMarkup={(cls) => {
                return `<svg class="w-20 h-20 ${cls}" viewBox="0 0 24 24">
  <path d="M12 2L2 22h20L12 2z"/>
</svg>`;
              }}
              renderPreview={(cls) => {
                return (
                  <svg className={`w-20 h-20 ${cls}`} viewBox="0 0 24 24">
                    <path d="M12 2L2 22h20L12 2z" />
                  </svg>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Icon Using Current Color"
              description="Match icon color with surrounding text."
              code={`<svg class="w-6 h-6 fill-current text-indigo-600"></svg>`}
            >
              <div className="text-indigo-600">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Status Icons"
              description="Use semantic colors for status indicators."
              code={`<svg class="fill-green-500"></svg>`}
            >
              <svg className="w-8 h-8 fill-green-500" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2z" />
              </svg>
            </ExampleCard>

            <ExampleCard
              title="Hover Fill Change"
              description="Change fill color on hover."
              code={`<svg class="fill-gray-400 hover:fill-blue-500 transition"></svg>`}
            >
              <svg
                className="w-8 h-8 fill-gray-400 hover:fill-blue-500 transition"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 22h20L12 2z" />
              </svg>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using fill on non-SVG elements",
                reason: "The fill property only affects SVG shapes.",
                example: `<div class="fill-red-500"></div>`,
              },
              {
                title: "Forgetting fill-current",
                reason: "SVGs won’t inherit text color without fill-current.",
                example: `<svg class="text-red-500"></svg>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "SVG only:", text: "Fill utilities apply only to SVG elements." },
              { bold: "Use fill-current:", text: "Inherit text color for flexible icon theming." },
              { bold: "Hover states:", text: "Use hover variants for interactive icons." },
              { bold: "Combine with stroke:", text: "Use `stroke-*` utilities for outlined icons." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
