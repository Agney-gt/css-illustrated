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
  { cls: "backdrop-hue-rotate-0", desc: "No backdrop hue rotation" },
  { cls: "backdrop-hue-rotate-90", desc: "Rotate backdrop hue by 90°" },
  { cls: "backdrop-hue-rotate-180", desc: "Rotate backdrop hue by 180°" },
  { cls: "backdrop-hue-rotate-270", desc: "Rotate backdrop hue by 270°" },
  { cls: "backdrop-hue-rotate-[360deg]", desc: "Custom multi-degree hue rotate" },
];

export default function BackdropFilterHueRotatePage() {
  const [hueClass, setHueClass] = useState("backdrop-hue-rotate-0");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Hue Rotate"
            description="Control the color hue of the backdrop area behind an element with Tailwind’s backdrop hue rotate utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Hue Rotation Filters"
            description="Backdrop hue rotate utilities shift the hue of content behind a semi-transparent overlay using CSS `backdrop-filter: hue-rotate()`."
            features={[
              "Hue rotation shifts colors around the color wheel",
              "Apply positive or custom hue rotation values",
              "Works best with semi-transparent backdrops for visible effects",
              "Combine with other backdrop filter utilities like blur or contrast",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: hue-rotate()` alters the backdrop’s color hues based on the angle specified" 
          />

          <ComparisonTable
            title="Backdrop Hue Rotate Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "backdrop-hue-rotate-0",
                values: ["backdrop-filter: hue-rotate(0deg)", "No hue change"],
              },
              {
                feature: "backdrop-hue-rotate-90",
                values: ["backdrop-filter: hue-rotate(90deg)", "Shift hues 90°"],
              },
              {
                feature: "backdrop-hue-rotate-180",
                values: ["backdrop-filter: hue-rotate(180deg)", "Shift hues 180°"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Hue Rotate Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Apply different backdrop hue rotate utilities to see how background colors shift.
            </p>

            <UtilityPlayground
              title="Backdrop Hue Rotate Playground"
              description="Apply hue rotation to a semi-transparent overlay over a background image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-hue-rotate-0"
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
              title="Hue Shifted Backdrop"
              description="Use `backdrop-hue-rotate-90` for creative color effects."
              code={`<div class="bg-white/30 backdrop-hue-rotate-90 backdrop-filter p-6">
  Background hue shifted
</div>`}
            >
              <div className="bg-white/30 backdrop-hue-rotate-90 backdrop-filter p-6">
                Background hue shifted
              </div>
            </ExampleCard>

            <ExampleCard
              title="Strong Hue Rotation"
              description="Apply a 180° rotation for dramatic backdrop changes."
              code={`<div class="bg-white/30 backdrop-hue-rotate-180 backdrop-filter p-6">
  Deep hue change
</div>`}
            >
              <div className="bg-white/30 backdrop-hue-rotate-180 backdrop-filter p-6">
                Deep hue change
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Hue Adjustment"
              description="Increase hue rotation at larger breakpoints."
              code={`<div class="bg-white/30 backdrop-hue-rotate-0 md:backdrop-hue-rotate-90 backdrop-filter p-6">
  Responsive hues
</div>`}
            >
              <div className="bg-white/30 backdrop-hue-rotate-0 md:backdrop-hue-rotate-90 backdrop-filter p-6">
                Responsive hues
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "No semi-transparent background",
                reason: "Backdrop hue rotate effects are invisible without some transparency.",
                example: `<div class="backdrop-hue-rotate-90"></div>`,
              },
              {
                title: "Missing `backdrop-filter` utility",
                reason: "Backdrop filter utilities need to be composed (e.g., with backdrop-blur or backdrop-contrast) to work.",
                example: `<div class="backdrop-hue-rotate-90"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use transparency:", text: "Ensure semi-opaque overlays to see hue shifts." },
              { bold: "Combine filters:", text: "Pair with blur or brightness for richer effects." },
              { bold: "Responsive variants:", text: "Apply responsive prefixes like `lg:backdrop-hue-rotate-180`." },
              { bold: "State variants:", text: "Use `hover:` or `focus:` to animate color shifts." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
