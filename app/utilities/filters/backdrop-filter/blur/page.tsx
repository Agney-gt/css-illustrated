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
  { cls: "backdrop-blur-none", desc: "No backdrop blur" },
  { cls: "backdrop-blur-xs", desc: "Extra small blur" },
  { cls: "backdrop-blur-sm", desc: "Small blur" },
  { cls: "backdrop-blur-md", desc: "Medium blur" },
  { cls: "backdrop-blur-lg", desc: "Large blur" },
  { cls: "backdrop-blur-xl", desc: "Extra large blur" },
  { cls: "backdrop-blur-2xl", desc: "2× extra large blur" },
  { cls: "backdrop-blur-3xl", desc: "3× extra large blur" },
];

export default function BackdropFilterBlurPage() {
  const [blurClass, setBlurClass] = useState("backdrop-blur-sm");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Blur"
            description="Apply CSS backdrop blur effects to the area behind an element using Tailwind’s backdrop-blur utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Blur Filters"
            description="Backdrop blur utilities use CSS `backdrop-filter: blur()` to soften or obscure elements behind a semi-transparent overlay."
            features={[
              "Use various intensities like `backdrop-blur-sm`, `backdrop-blur-lg`, etc.",
              "Requires a semi-transparent background layer to reveal the effect",
              "Works well for modals, panels, and frosted glass visuals",
              "Supports arbitrary values via bracket syntax (`backdrop-blur-[value]`)",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: blur()` lets you blur the content behind an element" 
          />

          <ComparisonTable
            title="Backdrop Blur Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "backdrop-blur-none",
                values: ["backdrop-filter: blur(0)", "No blur"],
              },
              {
                feature: "backdrop-blur-sm",
                values: ["backdrop-filter: blur(var(--blur-sm))", "Small blur"],
              },
              {
                feature: "backdrop-blur-lg",
                values: ["backdrop-filter: blur(var(--blur-lg))", "Large blur"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Blur Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different backdrop blur utilities and see how the backdrop behind a panel softens.
            </p>

            <UtilityPlayground
              title="Backdrop Blur Playground"
              description="Apply backdrop blur utilities on a semi-transparent overlay over a background image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-blur-sm"
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
              title="Subtle Blur Backdrop"
              description="Use `backdrop-blur-sm` for a gentle blur effect behind UI panels."
              code={`<div class="bg-white/30 backdrop-blur-sm backdrop-filter p-6">
  Frosted panel
</div>`}
            >
              <div className="bg-white/30 backdrop-blur-sm backdrop-filter p-6">
                Frosted panel
              </div>
            </ExampleCard>

            <ExampleCard
              title="Pronounced Blur Backdrop"
              description="Use `backdrop-blur-xl` for a strong blur behind overlays."
              code={`<div class="bg-white/30 backdrop-blur-xl backdrop-filter p-6">
  Strong blur
</div>`}
            >
              <div className="bg-white/30 backdrop-blur-xl backdrop-filter p-6">
                Strong blur
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Blur Adjustments"
              description="Apply larger blur effects at bigger screen sizes."
              code={`<div class="bg-white/30 backdrop-blur-sm lg:backdrop-blur-lg backdrop-filter p-6">
  Responsive blur
</div>`}
            >
              <div className="bg-white/30 backdrop-blur-sm lg:backdrop-blur-lg backdrop-filter p-6">
                Responsive blur
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "No semi-transparent backdrop",
                reason: "Backdrop blur effects are invisible without a transparent or semi-transparent layer.",
                example: `<div class="backdrop-blur-sm"></div>`,
              },
              {
                title: "Missing `backdrop-filter` utility",
                reason: "Use `backdrop-filter` to enable all backdrop filter utilities collectively.",
                example: `<div class="backdrop-blur-lg"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use transparency:", text: "Ensure overlays have opacity so the blur effect is visible behind UI." },
              { bold: "Combine filters:", text: "Pair with other backdrop utilities like brightness or contrast for richer effects." },
              { bold: "Responsive variants:", text: "Use responsive prefixes like `md:backdrop-blur-md`." },
              { bold: "Custom values:", text: "Use `backdrop-blur-[value]` for arbitrary blur levels." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
