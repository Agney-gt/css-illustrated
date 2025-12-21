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
  { cls: "backdrop-invert-0", desc: "No backdrop invert" },
  { cls: "backdrop-invert-50", desc: "50% backdrop invert" },
  { cls: "backdrop-invert", desc: "Full backdrop invert (100%)" },
];

export default function BackdropFilterInvertPage() {
  const [invertClass, setInvertClass] = useState("backdrop-invert-0");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Invert"
            description="Invert the colors of the backdrop area behind an element using Tailwind’s backdrop invert utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Invert Filters"
            description="Backdrop invert utilities apply CSS `backdrop-filter: invert()` to reverse color tones of the content behind a semi-transparent overlay."
            features={[
              "Use `backdrop-invert-0` for no invert",
              "Use `backdrop-invert-50` for partial inversion",
              "Use `backdrop-invert` (100%) for full invert",
              "Requires semi-transparent backdrop to see the effect",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: invert()` flips colors behind the element’s backdrop" 
          />

          <ComparisonTable
            title="Backdrop Invert Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "backdrop-invert-0",
                values: ["backdrop-filter: invert(0%)", "No inversion"],
              },
              {
                feature: "backdrop-invert-50",
                values: ["backdrop-filter: invert(50%)", "Partial inversion"],
              },
              {
                feature: "backdrop-invert",
                values: ["backdrop-filter: invert(100%)", "Full inversion"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Invert Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different backdrop invert utilities and preview how the background colors are reversed behind a transparent overlay.
            </p>

            <UtilityPlayground
              title="Backdrop Invert Playground"
              description="Apply backdrop invert utilities on a semi-transparent overlay over an image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-invert-0"
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
              title="Subtle Backdrop Inversion"
              description="Use `backdrop-invert-50` for a gentle color flip behind a translucent panel."
              code={`<div class="bg-white/30 backdrop-invert-50 backdrop-filter p-6">Content</div>`}
            >
              <div className="bg-white/30 backdrop-invert-50 backdrop-filter p-6">
                Content
              </div>
            </ExampleCard>

            <ExampleCard
              title="Full Backdrop Inversion"
              description="Use `backdrop-invert` to fully invert backdrop colors."
              code={`<div class="bg-white/30 backdrop-invert backdrop-filter p-6">Inverted backdrop</div>`}
            >
              <div className="bg-white/30 backdrop-invert backdrop-filter p-6">
                Inverted backdrop
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Backdrop Inversion"
              description="Adjust inversion at larger breakpoints."
              code={`<div class="bg-white/30 backdrop-invert-0 md:backdrop-invert backdrop-filter p-6">
  Responsive inversion
</div>`}
            >
              <div className="bg-white/30 backdrop-invert-0 md:backdrop-invert backdrop-filter p-6">
                Responsive inversion
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "No semi-transparent backdrop",
                reason: "Backdrop invert effects are invisible without transparency on the overlay.",
                example: `<div class="backdrop-invert"></div>`,
              },
              {
                title: "Missing `backdrop-filter` effects",
                reason: "Make sure another backdrop filter (like blur) or `backdrop-filter` utility is present to compose effects.",
                example: `<div class="backdrop-invert"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use transparency:", text: "Ensure overlay has opacity so the backdrop effect is visible." },
              { bold: "Combine with other filters:", text: "Pair with `backdrop-blur` or `backdrop-brightness` for richer visuals." },
              { bold: "Responsive variants:", text: "Use responsive prefixes like `lg:backdrop-invert-50`." },
              { bold: "State variants:", text: "Use `hover:` or `focus:` to animate backdrop inversion." },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
