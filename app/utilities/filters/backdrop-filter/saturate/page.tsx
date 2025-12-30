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
  { cls: "backdrop-saturate-0", desc: "No backdrop saturation" },
  { cls: "backdrop-saturate-50", desc: "50% backdrop saturation" },
  { cls: "backdrop-saturate-100", desc: "100% backdrop saturation" },
  { cls: "backdrop-saturate-150", desc: "150% backdrop saturation" },
  { cls: "backdrop-saturate-200", desc: "200% backdrop saturation" },
];

export default function BackdropFilterSaturatePage() {
  const [saturateClass, setSaturateClass] = useState("backdrop-saturate-100");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Saturate"
            description="Adjust how intense or muted colors appear behind an element using Tailwind’s backdrop saturate utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Saturate Filters"
            description="Backdrop saturate utilities use CSS `backdrop-filter: saturate()` to control how rich or muted colors behind an element appear."
            features={[
              "Use `backdrop-saturate-0` to remove color intensity",
              "Use `backdrop-saturate-100` for default saturation",
              "Higher values like `backdrop-saturate-150` increase color richness",
              "Works on semi-transparent overlays combined with other backdrop filter utilities",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: saturate()` adjusts the saturation level of content behind a transparent layer"
          />

          <ComparisonTable
            title="Backdrop Saturate Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "backdrop-saturate-0",
                values: ["backdrop-filter: saturate(0)", "Desaturates content behind the element"],
              },
              {
                feature: "backdrop-saturate-100",
                values: ["backdrop-filter: saturate(1)", "Default saturation"],
              },
              {
                feature: "backdrop-saturate-150",
                values: ["backdrop-filter: saturate(1.5)", "Increases color richness behind element"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Saturate Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Experiment with backdrop saturate utilities and preview how colors behind a panel shift in intensity.
            </p>

            <UtilityPlayground
              title="Backdrop Saturate Playground"
              description="Apply different backdrop saturate utilities on a semi-transparent overlay over an image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-saturate-100"
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
              title="Low Saturation Backdrop"
              description="Use `backdrop-saturate-50` to subtly mute colors behind a panel."
              code={`<div class="bg-white/30 backdrop-saturate-50 backdrop-filter p-6">
  Muted background
</div>`}
            >
              <div className="bg-white/30 backdrop-saturate-50 backdrop-filter p-6">
                Muted background
              </div>
            </ExampleCard>

            <ExampleCard
              title="High Saturation Backdrop"
              description="Use `backdrop-saturate-150` to make backdrop colors richer."
              code={`<div class="bg-white/30 backdrop-saturate-150 backdrop-filter p-6">
  Color rich background
</div>`}
            >
              <div className="bg-white/30 backdrop-saturate-150 backdrop-filter p-6">
                Color rich background
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Saturation Adjustment"
              description="Change backdrop saturation at larger breakpoints."
              code={`<div class="bg-white/30 backdrop-saturate-100 lg:backdrop-saturate-150 backdrop-filter p-6">
  Responsive saturation
</div>`}
            >
              <div className="bg-white/30 backdrop-saturate-100 lg:backdrop-saturate-150 backdrop-filter p-6">
                Responsive saturation
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Lack of transparency",
                reason: "Backdrop saturate effects are not visible without any semi-transparent layer above content.",
                example: `<div class="backdrop-saturate-150"></div>`,
              },
              {
                title: "Missing `backdrop-filter` utility",
                reason: "Ensure backdrop filters like blur or brightness are also applied so the effect shows up.",
                example: `<div class="bg-white/30 backdrop-saturate-150"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use transparency:", text: "Ensure your overlay has opacity so the backdrop saturate effect appears." },
              { bold: "Combine effects:", text: "Use with backdrop-blur and backdrop-opacity for layered visual styles." },
              { bold: "Responsive variants:", text: "Apply responsive prefixes like `md:backdrop-saturate-150`." },
              { bold: "State variants:", text: "Use hover/focus suffixes like `hover:backdrop-saturate-200`." },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
