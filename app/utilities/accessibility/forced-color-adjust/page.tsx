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
import { RealWorldExamples } from "@/components/shared/real-world-examples";
import CodeBlock from "@/app/utilities/components/code-block";

const utilities = [
  { cls: "forced-color-adjust-none", desc: "Opt out of forced colors" },
  { cls: "forced-color-adjust-auto", desc: "Allow forced colors" },
];

export default function ForcedColorAdjustPage() {
  const [fcAdjustClass, setFcAdjustClass] = useState("forced-color-adjust-none");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Forced Color Adjust"
            description="Control how elements respond to user forced color modes (like Windows High Contrast)."
          />

          <MentalModelSection
            title="How Forced Color Adjust Works"
            description="This utility lets you opt elements in or out of forced color mode adjustments."
            features={[
              "`none` prevents forced color overrides",
              "`auto` allows forced color overrides",
              "Useful in high contrast or accessibility modes",
              "Works on any element's rendering behavior",
            ]}
            layerAssignment="Accessibility layer"
            browserBehavior="Browsers enforce forced colors unless disabled via this utility"
          />

          <ComparisonTable
            title="Forced Color Adjust Utilities"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "forced-color-adjust-none",
                values: ["forced-color-adjust: none", "Opt out of forced color mode"],
              },
              {
                feature: "forced-color-adjust-auto",
                values: ["forced-color-adjust: auto", "Allow forced color mode"],
              },
            ]}
          />

          <UtilityGrid
            title="Forced Color Adjust Utilities"
            items={utilities}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try toggling forced color adjust and see how elements respond in high contrast mode.
            </p>

            <UtilityPlayground
              title="Forced Color Adjust Playground"
              description="Apply utilities to this preview."
              options={utilities.map(u => u.cls)}
              defaultValue="forced-color-adjust-none"
              buildMarkup={(cls) => {
                return `<div class="${cls} p-6 border rounded space-y-4">
  <p class="text-lg">Forced Color Adjust: ${cls}</p>
  <button class="px-4 py-2 bg-blue-600 text-white">Button</button>
  <div class="h-12 w-12 bg-red-500"></div>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`${cls} p-6 border rounded space-y-4`}>
                    <p className="text-lg">Forced Color Adjust: {cls}</p>
                    <button className="px-4 py-2 bg-blue-600 text-white">
                      Button
                    </button>
                    <div className="h-12 w-12 bg-red-500"></div>
                  </div>
                )
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Prevent Color Override"
              description="Use `forced-color-adjust-none` to keep branding colors intact."
              code={`<div class="forced-color-adjust-none bg-indigo-600 text-white p-4">
  <p>Brand content unaffected by forced color mode</p>
</div>`}
            >
              <div className="forced-color-adjust-none bg-indigo-600 text-white p-4">
                <p>Brand content unaffected by forced color mode</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Restore Forced Colors"
              description="Allow forced colors for accessibility when needed."
              code={`<div class="forced-color-adjust-auto">
  <p>Follows forced color mode</p>
</div>`}
            >
              <div className="forced-color-adjust-auto">
                <p>Follows forced color mode</p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes"
            mistakes={[
              {
                title: "Not using `auto` where accessibility is expected",
                reason: "Elements may refuse forced color adjustments.",
                example: `<div class="forced-color-adjust-none">
  <p>Always stays styled, even in high contrast</p>
</div>`,
              },
              {
                title: "Overusing forced-color-adjust",
                reason: "Too many overrides can reduce accessibility clarity.",
                example: `<span class="forced-color-adjust-none">Text</span>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Accessibility first:", text: "Use `forced-color-adjust-auto` for readable content." },
              { bold: "Brand elements:", text: "Opt key branding unaffected by forced color with `none`." },
              { bold: "Test modes:", text: "Try High Contrast mode to confirm behaviors." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
