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
  { cls: "backdrop-sepia-0", desc: "No backdrop sepia" },
  { cls: "backdrop-sepia-25", desc: "25% backdrop sepia" },
  { cls: "backdrop-sepia-50", desc: "50% backdrop sepia" },
  { cls: "backdrop-sepia-75", desc: "75% backdrop sepia" },
  { cls: "backdrop-sepia", desc: "Full (100%) backdrop sepia" },
];

export default function BackdropFilterSepiaPage() {
  const [sepiaClass, setSepiaClass] = useState("backdrop-sepia-50");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Sepia"
            description="Apply sepia filter effects to the content behind an element using Tailwind’s backdrop sepia utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Sepia Filters"
            description="Backdrop sepia utilities use CSS `backdrop-filter: sepia()` to shift the colors behind an element toward a warm, brownish tone."
            features={[
              "Use `backdrop-sepia-0` for no sepia effect",
              "Intermediate values like `backdrop-sepia-25` soften the effect",
              "Use `backdrop-sepia` (100%) for full sepia tone",
              "Requires a semi-transparent overlay to see the effect",
              "Combine with other backdrop filter utilities for richer visuals",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: sepia()` desaturates and recolors backdrop content toward a sepia tone"
          />

          <ComparisonTable
            title="Backdrop Sepia Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "backdrop-sepia-0",
                values: ["backdrop-filter: sepia(0%)", "No sepia effect"],
              },
              {
                feature: "backdrop-sepia-50",
                values: ["backdrop-filter: sepia(50%)", "Moderate sepia effect"],
              },
              {
                feature: "backdrop-sepia",
                values: ["backdrop-filter: sepia(100%)", "Full sepia tone"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Sepia Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different backdrop sepia utilities to see how the color tones shift for content behind a semi-transparent layer.
            </p>

            <UtilityPlayground
              title="Backdrop Sepia Playground"
              description="Apply backdrop sepia utilities on a semi-transparent overlay over a background image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-sepia-50"
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
              title="Subtle Sepia Backdrop"
              description="Use `backdrop-sepia-25` for a gentle warm tone behind UI panels."
              code={`<div class="bg-white/30 backdrop-sepia-25 backdrop-filter p-6">
  Gentle backdrop
</div>`}
            >
              <div className="bg-white/30 backdrop-sepia-25 backdrop-filter p-6">
                Gentle backdrop
              </div>
            </ExampleCard>

            <ExampleCard
              title="Warm Sepia Backdrop"
              description="Use `backdrop-sepia` for a full sepia backdrop effect."
              code={`<div class="bg-white/30 backdrop-sepia backdrop-filter p-6">
  Warm backdrop
</div>`}
            >
              <div className="bg-white/30 backdrop-sepia backdrop-filter p-6">
                Warm backdrop
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Sepia Adjustments"
              description="Increase sepia intensity at larger breakpoints."
              code={`<div class="bg-white/30 backdrop-sepia-0 md:backdrop-sepia backdrop-filter p-6">
  Responsive sepia
</div>`}
            >
              <div className="bg-white/30 backdrop-sepia-0 md:backdrop-sepia backdrop-filter p-6">
                Responsive sepia
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "No semi-transparent backdrop",
                reason: "Sepia effects are invisible without some opacity in the overlay layer.",
                example: `<div class="backdrop-sepia-50"></div>`,
              },
              {
                title: "Missing `backdrop-filter` effects",
                reason: "Ensure you combine backdrop sepia with another backdrop filter (like blur) or a `backdrop-filter` utility for visibility.",
                example: `<div class="backdrop-sepia"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use transparency:", text: "Make sure overlays have partial opacity so sepia effects show." },
              { bold: "Combine with blur:", text: "Pair with `backdrop-blur` for a classic frosted look." },
              { bold: "Responsive variants:", text: "Use responsive prefixes like `md:backdrop-sepia`." },
              { bold: "Interactive states:", text: "Use `hover:` or `focus:` to animate sepia effects." },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
