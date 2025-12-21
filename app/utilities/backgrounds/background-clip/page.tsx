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
import CodeBlock from "@/app/utilities/components/code-block";

const utilities = [
  { cls: "bg-clip-border", desc: "Clip background to border box" },
  { cls: "bg-clip-padding", desc: "Clip background to padding box" },
  { cls: "bg-clip-content", desc: "Clip background to content box" },
  { cls: "bg-clip-text", desc: "Clip background to text shape" },
];

export default function BackgroundClipPage() {
  const [clipClass, setClipClass] = useState("bg-clip-border");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Background Clip"
            description="Control how an element’s background is clipped relative to its box model or text."
          />

          <MentalModelSection
            title="Understanding Background Clip"
            description="Background clip utilities determine where the background painting area is applied."
            features={[
              "bg-clip-border clips to the border box",
              "bg-clip-padding clips to the padding box",
              "bg-clip-content clips to the content box",
              "bg-clip-text crops the background to the text shape",
            ]}
            layerAssignment="Background utility"
            browserBehavior="Sets the CSS `background-clip` property on elements"
          />

          <ComparisonTable
            title="Background Clip Utilities Overview"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "bg-clip-border",
                values: ["background-clip: border-box", "Background extends to border"],
              },
              {
                feature: "bg-clip-padding",
                values: ["background-clip: padding-box", "Background inside padding"],
              },
              {
                feature: "bg-clip-content",
                values: ["background-clip: content-box", "Background inside content only"],
              },
              {
                feature: "bg-clip-text",
                values: ["background-clip: text", "Background clipped within text shape"],
              },
            ]}
          />

          <UtilityGrid title="Background Clip Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different clipping utilities and preview how backgrounds behave.
            </p>

            <UtilityPlayground
              title="Background Clip Playground"
              description="Pick a clip utility to preview how the background is clipped."
              options={utilities.map(u => u.cls)}
              defaultValue="bg-clip-border"
              buildMarkup={(cls) => {
                if (cls === "bg-clip-text") {
                  return `<div class="text-center text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-indigo-500 ${cls} text-transparent">
  Background Clip Text
</div>`;
                }
                return `<div class="w-full h-40 p-6 border-4 border-dashed bg-gradient-to-r from-blue-400 to-purple-500 ${cls}">
  Clipped: ${cls}
</div>`;
              }}
              renderPreview={(cls) => {
                if (cls === "bg-clip-text") {
                  return (
                    <div className={`text-center text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-indigo-500 ${cls} text-transparent`}>
                      Background Clip Text
                    </div>
                  );
                }
                return (
                  <div className={`w-full h-40 p-6 border-4 border-dashed bg-gradient-to-r from-blue-400 to-purple-500 ${cls}`}>
                    Clipped: {cls}
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Border Box Clipping"
              description="Clip background up to the border area."
              code={`<div class="bg-clip-border border-4 border-purple-600 bg-purple-300 p-4">
  Border box background
</div>`}
            >
              <div className="bg-clip-border border-4 border-purple-600 bg-purple-300 p-4">
                Border box background
              </div>
            </ExampleCard>

            <ExampleCard
              title="Padding Box Clipping"
              description="Clip background to padding area inside border."
              code={`<div class="bg-clip-padding border-4 border-pink-600 bg-pink-300 p-4">
  Padding box background
</div>`}
            >
              <div className="bg-clip-padding border-4 border-pink-600 bg-pink-300 p-4">
                Padding box background
              </div>
            </ExampleCard>

            <ExampleCard
              title="Text Gradient Clipping"
              description="Clip a gradient background inside text."
              code={`<p class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-4xl font-bold">
  Gradient Text
</p>`}
            >
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-4xl font-bold">
                Gradient Text
              </p>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using clip without background",
                reason: "Clipping applies only when a background (color/gradient/image) exists.",
                example: `<div class="bg-clip-border"></div>`,
              },
              {
                title: "Expecting bg-clip-text to color text",
                reason: "You must pair `bg-clip-text` with `text-transparent` and a background.",
                example: `<p class="bg-clip-text text-black">Text</p>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Background needed:", text: "Clipping effects require a visible background." },
              { bold: "Text clip combos:", text: "`bg-clip-text` works best with gradients and `text-transparent`." },
              { bold: "Box variants:", text: "Use padding or content clip for advanced layering." },
              { bold: "Responsive:", text: "Apply responsive prefixes like `md:bg-clip-padding`." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
