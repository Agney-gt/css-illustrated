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
  { cls: "bg-blend-normal", desc: "No blending" },
  { cls: "bg-blend-multiply", desc: "Multiply blend" },
  { cls: "bg-blend-screen", desc: "Screen blend" },
  { cls: "bg-blend-overlay", desc: "Overlay blend" },
  { cls: "bg-blend-darken", desc: "Darken blend" },
  { cls: "bg-blend-lighten", desc: "Lighten blend" },
  { cls: "bg-blend-color-dodge", desc: "Color dodge blend" },
  { cls: "bg-blend-color-burn", desc: "Color burn blend" },
  { cls: "bg-blend-hard-light", desc: "Hard light blend" },
  { cls: "bg-blend-soft-light", desc: "Soft light blend" },
  { cls: "bg-blend-difference", desc: "Difference blend" },
  { cls: "bg-blend-exclusion", desc: "Exclusion blend" },
  { cls: "bg-blend-hue", desc: "Hue blend" },
  { cls: "bg-blend-saturation", desc: "Saturation blend" },
  { cls: "bg-blend-color", desc: "Color blend" },
  { cls: "bg-blend-luminosity", desc: "Luminosity blend" },
];

export default function BackgroundBlendModePage() {
  const [blendClass, setBlendClass] = useState("bg-blend-normal");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Background Blend Mode"
            description="Control how background images and colors are blended using Tailwind utilities."
          />

          <MentalModelSection
            title="Understanding Background Blend Mode"
            description="Background blend mode utilities determine how an element's background images blend with its background color."
            features={[
              "Blend multiple background layers",
              "Works on background image + color combinations",
              "Responsive and state variants supported",
              "Can create visual effects like multiply, overlay, and difference",
            ]}
            layerAssignment="Effects layer — background compositing"
            browserBehavior="CSS `background-blend-mode` determines how background layers combine"
          />

          <ComparisonTable
            title="Blend Mode Utilities"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "bg-blend-normal",
                values: ["background-blend-mode: normal", "No blending"],
              },
              {
                feature: "bg-blend-multiply",
                values: ["background-blend-mode: multiply", "Multiply colors"],
              },
              {
                feature: "bg-blend-screen",
                values: ["background-blend-mode: screen", "Brighten blend"],
              },
              {
                feature: "bg-blend-overlay",
                values: ["background-blend-mode: overlay", "Overlay effect"],
              },
            ]}
          />

          <UtilityGrid title="Background Blend Mode Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different blend mode utilities to see how a background image and color blend together.
            </p>

            <UtilityPlayground
              title="Background Blend Playground"
              description="Pick a blend utility and preview it with a sample background."
              options={utilities.map(u => u.cls)}
              defaultValue="bg-blend-normal"
              buildMarkup={(cls) => {
                return `<div class="h-40 bg-[url('/img/mountains.jpg')] bg-blue-600 ${cls} bg-cover bg-center flex items-center justify-center text-white font-bold">
  ${cls}
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`h-40 bg-[url('/img/mountains.jpg')] bg-blue-600 ${cls} bg-cover bg-center flex items-center justify-center text-white font-bold`}>
                    {cls}
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Multiply Blend"
              description="Use `bg-blend-multiply` to darken by multiplying color and image."
              code={`<div class="bg-blend-multiply bg-blue-700 bg-[url('/img/mountains.jpg')] bg-cover bg-center h-48"></div>`}
            >
              <div className="bg-blend-multiply bg-blue-700 bg-[url('/img/mountains.jpg')] bg-cover bg-center h-48"></div>
            </ExampleCard>

            <ExampleCard
              title="Overlay Blend"
              description="Use `bg-blend-overlay` for overlay effects."
              code={`<div class="bg-blend-overlay bg-red-500 bg-[url('/img/mountains.jpg')] bg-cover bg-center h-48"></div>`}
            >
              <div className="bg-blend-overlay bg-red-500 bg-[url('/img/mountains.jpg')] bg-cover bg-center h-48"></div>
            </ExampleCard>

            <ExampleCard
              title="Soft Light Blend"
              description="Use `bg-blend-soft-light` for subtle blending."
              code={`<div class="bg-blend-soft-light bg-yellow-400 bg-[url('/img/mountains.jpg')] bg-cover bg-center h-48"></div>`}
            >
              <div className="bg-blend-soft-light bg-yellow-400 bg-[url('/img/mountains.jpg')] bg-cover bg-center h-48"></div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "No background image",
                reason: "Blend modes have no effect without a background image + color.",
                example: `<div class="bg-blend-overlay"></div>`,
              },
              {
                title: "Low contrast combinations",
                reason: "Certain blends may make content hard to read.",
                example: `<div class="bg-blend-darken bg-white text-white"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use images and color:", text: "Blend utilities require both background image(s) and a background color." },
              { bold: "Responsive variants:", text: "Use responsive prefixes like `md:bg-blend-lighten`." },
              { bold: "Combine utilities:", text: "Pair with `bg-opacity` for subtler blends." },
              { bold: "Use text color carefully:", text: "Ensure readable contrast after blending." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
