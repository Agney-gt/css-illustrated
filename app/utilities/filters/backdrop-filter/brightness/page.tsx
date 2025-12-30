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
  { cls: "backdrop-brightness-0", desc: "No brightness" },
  { cls: "backdrop-brightness-50", desc: "50% brightness" },
  { cls: "backdrop-brightness-75", desc: "75% brightness" },
  { cls: "backdrop-brightness-90", desc: "90% brightness" },
  { cls: "backdrop-brightness-100", desc: "100% brightness (default)" },
  { cls: "backdrop-brightness-110", desc: "110% brightness" },
  { cls: "backdrop-brightness-125", desc: "125% brightness" },
  { cls: "backdrop-brightness-150", desc: "150% brightness" },
  { cls: "backdrop-brightness-200", desc: "200% brightness" },
];

export default function BackdropFilterBrightnessPage() {
  const [brightnessClass, setBrightnessClass] = useState("backdrop-brightness-100");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Brightness"
            description="Control the brightness of the area behind an element using Tailwind’s backdrop brightness utilities."
          />

          <MentalModelSection
            title="Understanding Backdrop Brightness Filters"
            description="Backdrop brightness utilities apply CSS `backdrop-filter: brightness()` to adjust how bright or dark the backdrop appears." 
            features={[
              "Use classes like `backdrop-brightness-50` and `backdrop-brightness-150` for different effects",
              "Requires backdrop filters to be visible (semi-transparent layer)",
              "Works with other backdrop filter utilities (blur, contrast, saturate, etc.)",
              "Supports arbitrary values with bracket syntax",
            ]}
            layerAssignment="Effects layer — backdrop filter utilities"
            browserBehavior="CSS `backdrop-filter: brightness()` changes how light or dark the backdrop content appears" 
          />

          <ComparisonTable
            title="Backdrop Brightness Utility Overview"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "backdrop-brightness-50",
                values: ["backdrop-filter: brightness(50%)", "Darken backdrop"],
              },
              {
                feature: "backdrop-brightness-100",
                values: ["backdrop-filter: brightness(100%)", "Default brightness"],
              },
              {
                feature: "backdrop-brightness-150",
                values: ["backdrop-filter: brightness(150%)", "Brighten backdrop"],
              },
              {
                feature: "backdrop-brightness-200",
                values: ["backdrop-filter: brightness(200%)", "High brightness"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Brightness Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different backdrop brightness utilities and see how the backdrop effect changes.
            </p>

            <UtilityPlayground
              title="Backdrop Brightness Playground"
              description="Apply backdrop brightness utilities on a semi-transparent overlay over a background image."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-brightness-100"
              buildMarkup={(cls) => {
                return `<div class="relative bg-[url('/img/mountains.jpg')] bg-cover bg-center h-40">
  <div class="absolute inset-0 bg-white/30 ${cls} flex items-center justify-center text-black font-semibold">
    ${cls}
  </div>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className="relative bg-[url('/img/mountains.jpg')] bg-cover bg-center h-40">
                    <div className={`absolute inset-0 bg-white/30 ${cls} flex items-center justify-center text-black font-semibold`}>
                      {cls}
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Dimmed Backdrop"
              description="Use `backdrop-brightness-75` to subtly darken content behind a panel."
              code={`<div class="bg-white/30 backdrop-brightness-75 backdrop-filter p-6">...</div>`}
            >
              <div className="bg-white/30 backdrop-brightness-75 backdrop-filter p-6">
                Dimmed backdrop content
              </div>
            </ExampleCard>

            <ExampleCard
              title="Brightened Backdrop"
              description="Use `backdrop-brightness-150` to lighten the backdrop area."
              code={`<div class="bg-white/30 backdrop-brightness-150 backdrop-filter p-6">...</div>`}
            >
              <div className="bg-white/30 backdrop-brightness-150 backdrop-filter p-6">
                Brightened backdrop content
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Brightness Adjustment"
              description="Increase brightness at larger breakpoints."
              code={`<div class="bg-white/30 backdrop-brightness-90 md:backdrop-brightness-125 backdrop-filter p-6">Responsive</div>`}
            >
              <div className="bg-white/30 backdrop-brightness-90 md:backdrop-brightness-125 backdrop-filter p-6">
                Responsive brightness
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Forgetting backdrop transparency",
                reason: "Backdrop brightness has no visible effect without a transparent or semi-transparent backdrop layer.",
                example: `<div class="backdrop-brightness-75"></div>`,
              },
              {
                title: "Missing `backdrop-filter` utility",
                reason: "Brightness utilities require `backdrop-filter` (or other backdrop filter utilities) to work.",
                example: `<div class="backdrop-brightness-125"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable backdrop filters:", text: "Use `backdrop-filter` or another backdrop filter utility alongside brightness." },
              { bold: "Use proper transparency:", text: "Ensure your backdrop layer has partial opacity to see the effect." },
              { bold: "Responsive variants:", text: "Use responsive prefixes like `md:backdrop-brightness-125`." },
              { bold: "Combine effects:", text: "Pair with other backdrop utilities like `backdrop-blur` and `backdrop-contrast` for rich visuals." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
