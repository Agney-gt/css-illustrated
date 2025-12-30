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
  { cls: "backdrop-grayscale-0", desc: "No backdrop grayscale" },
  { cls: "backdrop-grayscale", desc: "50% backdrop grayscale" },
  { cls: "backdrop-grayscale-50", desc: "50% backdrop grayscale" },
  { cls: "backdrop-grayscale-100", desc: "Full backdrop grayscale" },
];

export default function BackdropFilterGrayscalePage() {
  const [grayscaleClass, setGrayscaleClass] = useState("backdrop-grayscale-0");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Grayscale"
            description="Control how the area behind an element is desaturated using Tailwind’s backdrop grayscale utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Grayscale Filters"
            description="Backdrop grayscale utilities apply CSS `backdrop-filter: grayscale()` to desaturate the backdrop area behind an element."
            features={[
              "Use `backdrop-grayscale-0` for no desaturation",
              "Use `backdrop-grayscale` or `backdrop-grayscale-50` for partial desaturation",
              "Use `backdrop-grayscale-100` for full grayscale effect",
              "Requires semi-transparent overlays so the backdrop effect is visible",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: grayscale()` influences how colors behind an element appear by desaturating them"
          />

          <ComparisonTable
            title="Backdrop Grayscale Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "backdrop-grayscale-0",
                values: ["backdrop-filter: grayscale(0)", "No grayscale effect"],
              },
              {
                feature: "backdrop-grayscale-50",
                values: ["backdrop-filter: grayscale(0.5)", "Partial desaturation"],
              },
              {
                feature: "backdrop-grayscale-100",
                values: ["backdrop-filter: grayscale(1)", "Full grayscale effect"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Grayscale Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Select different backdrop grayscale utilities to preview how desaturation affects the backdrop area.
            </p>

            <UtilityPlayground
              title="Backdrop Grayscale Playground"
              description="Apply backdrop grayscale utilities on a semi-transparent overlay over an image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-grayscale-0"
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
              title="Partial Grayscale Backdrop"
              description="Use `backdrop-grayscale-50` to soften background color saturation behind a panel."
              code={`<div class="bg-white/30 backdrop-grayscale-50 backdrop-filter p-6">Content</div>`}
            >
              <div className="bg-white/30 backdrop-grayscale-50 backdrop-filter p-6">
                Content
              </div>
            </ExampleCard>

            <ExampleCard
              title="Full Grayscale Backdrop"
              description="Use `backdrop-grayscale-100` for a classic desaturated look."
              code={`<div class="bg-white/30 backdrop-grayscale-100 backdrop-filter p-6">Content</div>`}
            >
              <div className="bg-white/30 backdrop-grayscale-100 backdrop-filter p-6">
                Content
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Grayscale Use"
              description="Adjust backdrop grayscale at larger breakpoints."
              code={`<div class="bg-white/30 backdrop-grayscale-0 md:backdrop-grayscale-100 backdrop-filter p-6">
  Responsive grayscale
</div>`}
            >
              <div className="bg-white/30 backdrop-grayscale-0 md:backdrop-grayscale-100 backdrop-filter p-6">
                Responsive grayscale
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "No backdrop transparency",
                reason: "Backdrop grayscale has no visible effect without a semi-transparent or transparent layer.",
                example: `<div class="backdrop-grayscale-50"></div>`,
              },
              {
                title: "Missing `backdrop-filter` utility",
                reason: "Ensure at least one backdrop filter utility is present for effects to render.",
                example: `<div class="backdrop-grayscale-100"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use transparency:", text: "Make sure overlays have opacity so grayscale effects show." },
              { bold: "Combine effects:", text: "Pair with `backdrop-blur` and other filters for layered visuals." },
              { bold: "Responsive:", text: "Use responsive prefixes like `lg:backdrop-grayscale-100`." },
              { bold: "State variants:", text: "Apply `hover:` or `focus:` variants for interactive feedback." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
