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
  { cls: "backdrop-opacity-0", desc: "Fully transparent backdrop filter" },
  { cls: "backdrop-opacity-20", desc: "20% backdrop opacity" },
  { cls: "backdrop-opacity-40", desc: "40% backdrop opacity" },
  { cls: "backdrop-opacity-60", desc: "60% backdrop opacity" },
  { cls: "backdrop-opacity-80", desc: "80% backdrop opacity" },
  { cls: "backdrop-opacity-100", desc: "100% backdrop opacity (default)" },
];

export default function BackdropFilterOpacityPage() {
  const [opacityClass, setOpacityClass] = useState("backdrop-opacity-60");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Opacity"
            description="Control how opaque or transparent backdrop filters appear using Tailwind’s `backdrop-opacity-*` utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Opacity Filters"
            description="Backdrop opacity utilities adjust how visible the combined backdrop filter effects are behind a semi-transparent overlay."
            features={[
              "Use `backdrop-opacity-0` to make backdrop filters invisible",
              "Use values like `backdrop-opacity-60` for partial visibility",
              "Combine with other backdrop filter utilities such as blur or contrast",
              "Works with responsive and state variants",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: opacity()` determines how transparent backdrop effects like blur or contrast appear behind the element"
          />

          <ComparisonTable
            title="Backdrop Opacity Utility Overview"
            columns={["Utility", "CSS Rule", "Effect on Backdrop"]}
            rows={[
              {
                feature: "backdrop-opacity-20",
                values: ["backdrop-filter: opacity(20%)", "Very transparent backdrop filter"],
              },
              {
                feature: "backdrop-opacity-60",
                values: ["backdrop-filter: opacity(60%)", "Moderate opacity"],
              },
              {
                feature: "backdrop-opacity-100",
                values: ["backdrop-filter: opacity(100%)", "Full opacity (no transparency)"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Opacity Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Change backdrop opacity and see how transparent the backdrop filter effects become.
            </p>

            <UtilityPlayground
              title="Backdrop Opacity Playground"
              description="Apply different backdrop opacity values over a semi-transparent overlay on a background image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-opacity-60"
              buildMarkup={(cls) => {
                return `<div class="relative bg-[url('/img/mountains.jpg')] bg-cover bg-center h-40">
  <div class="absolute inset-0 bg-white/30 backdrop-blur-md ${cls} backdrop-filter flex items-center justify-center text-black font-semibold">
    ${cls}
  </div>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className="relative bg-[url('/img/mountains.jpg')] bg-cover bg-center h-40">
                    <div className={`absolute inset-0 bg-white/30 backdrop-blur-md ${cls} backdrop-filter flex items-center justify-center text-black font-semibold`}>
                      {cls}
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Light Frosted Glass"
              description="Use lower backdrop opacity for a subtle frosted glass effect."
              code={`<div class="bg-white/30 backdrop-blur-md backdrop-opacity-30 backdrop-filter p-6">Subtle glass</div>`}
            >
              <div className="bg-white/30 backdrop-blur-md backdrop-opacity-30 backdrop-filter p-6">
                Subtle glass
              </div>
            </ExampleCard>

            <ExampleCard
              title="Moderate Opacity Backdrop"
              description="Balanced backdrop opacity for clear yet softened background."
              code={`<div class="bg-white/30 backdrop-blur-lg backdrop-opacity-60 backdrop-filter p-6">Balanced</div>`}
            >
              <div className="bg-white/30 backdrop-blur-lg backdrop-opacity-60 backdrop-filter p-6">
                Balanced
              </div>
            </ExampleCard>

            <ExampleCard
              title="High Opacity Overlay"
              description="Use high opacity when backdrop content should remain vivid."
              code={`<div class="bg-white/30 backdrop-blur-lg backdrop-opacity-90 backdrop-filter p-6">Clear</div>`}
            >
              <div className="bg-white/30 backdrop-blur-lg backdrop-opacity-90 backdrop-filter p-6">
                Clear
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "No semi-transparent backdrop",
                reason: "Backdrop opacity effects are invisible without a semi-transparent layer above content.",
                example: `<div class="backdrop-opacity-60"></div>`,
              },
              {
                title: "Forgetting `backdrop-filter` utility",
                reason: "Make sure backdrop filters like blur, contrast, etc. are present to see combined visual effects.",
                example: `<div class="bg-white/30 backdrop-opacity-80"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use with other filters:", text: "Combine `backdrop-opacity-*` with `backdrop-blur` or others for rich glass effects." },
              { bold: "Responsive usage:", text: "Apply responsive prefixes like `md:backdrop-opacity-80`." },
              { bold: "Interactive states:", text: "Use `hover:` or `focus:` variants for dynamic UI." },
              { bold: "Arbitrary values:", text: "Use `backdrop-opacity-[value]` for custom opacity levels." },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
