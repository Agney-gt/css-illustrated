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
  { cls: "backdrop-contrast-0", desc: "No contrast (completely flat backdrop)" },
  { cls: "backdrop-contrast-50", desc: "50% backdrop contrast" },
  { cls: "backdrop-contrast-75", desc: "75% backdrop contrast" },
  { cls: "backdrop-contrast-100", desc: "Default backdrop contrast" },
  { cls: "backdrop-contrast-125", desc: "125% backdrop contrast" },
  { cls: "backdrop-contrast-150", desc: "150% backdrop contrast" },
  { cls: "backdrop-contrast-200", desc: "200% backdrop contrast" },
];

export default function BackdropFilterContrastPage() {
  const [contrastClass, setContrastClass] = useState("backdrop-contrast-100");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Contrast"
            description="Adjust backdrop contrast using Tailwind’s backdrop contrast utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Contrast Filters"
            description="Backdrop contrast utilities use CSS `backdrop-filter: contrast()` to change the contrast of content behind an element."
            features={[
              "Increase or decrease contrast behind semi-transparent overlays",
              "Useful for enhancing background visuals behind UI elements",
              "Works with other backdrop filter utilities such as blur and brightness",
              "Requires semi-transparent backdrop to be visible",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: contrast()` alters how light and dark areas behind the element are displayed"
          />

          <ComparisonTable
            title="Backdrop Contrast Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "backdrop-contrast-50",
                values: ["backdrop-filter: contrast(50%)", "Lower contrast behind the element"],
              },
              {
                feature: "backdrop-contrast-100",
                values: ["backdrop-filter: contrast(100%)", "Default contrast (no change)"],
              },
              {
                feature: "backdrop-contrast-150",
                values: ["backdrop-filter: contrast(150%)", "Higher contrast behind the element"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Contrast Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Experiment with different backdrop contrast utilities and preview how they affect the backdrop area.
            </p>

            <UtilityPlayground
              title="Backdrop Contrast Playground"
              description="Apply backdrop contrast utilities on a semi-transparent overlay over an image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-contrast-100"
              buildMarkup={(cls) => {
                return `<div class="relative bg-[url('/img/mountains.jpg')] bg-cover bg-center h-40">
  <div class="absolute inset-0 bg-white/30 ${cls} backdrop-filter flex items-center justify-center text-black font-semibold">
    ${cls}
  </div>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className="relative bg-[url('/img/mountains.jpg')] bg-cover bg-center h-40">
                    <div className={`absolute inset-0 bg-white/30 ${cls} backdrop-filter flex items-center justify-center text-black font-semibold`}>
                      {cls}
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Low Contrast Backdrop"
              description="Subtly reduce backdrop contrast behind a panel."
              code={`<div class="bg-white/30 backdrop-contrast-75 backdrop-filter p-6">Low contrast panel</div>`}
            >
              <div className="bg-white/30 backdrop-contrast-75 backdrop-filter p-6">
                Low contrast panel
              </div>
            </ExampleCard>

            <ExampleCard
              title="High Contrast Backdrop"
              description="Increase contrast for strong backdrop definition."
              code={`<div class="bg-white/30 backdrop-contrast-125 backdrop-filter p-6">High contrast panel</div>`}
            >
              <div className="bg-white/30 backdrop-contrast-125 backdrop-filter p-6">
                High contrast panel
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Contrast Usage"
              description="Adjust backdrop contrast at different screen sizes."
              code={`<div class="bg-white/30 backdrop-contrast-100 md:backdrop-contrast-150 backdrop-filter p-6">
  Responsive contrast
</div>`}
            >
              <div className="bg-white/30 backdrop-contrast-100 md:backdrop-contrast-150 backdrop-filter p-6">
                Responsive contrast
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "No semi-transparent backdrop",
                reason: "Contrast changes behind a backdrop aren’t visible without transparency.",
                example: `<div class="backdrop-contrast-125"></div>`,
              },
              {
                title: "Missing `backdrop-filter` utility",
                reason: "Ensure a backdrop filter utility (like blur or brightness) is present to compose filters.",
                example: `<div class="backdrop-contrast-125"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use transparency:", text: "Ensure the overlay has some opacity so the backdrop effect is visible." },
              { bold: "Combine effects:", text: "Use with blur or brightness for richer visual results." },
              { bold: "Responsive variants:", text: "Add responsive prefixes like `lg:backdrop-contrast-125`." },
              { bold: "State variants:", text: "Apply `hover:` or `focus:` variants for interaction." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
