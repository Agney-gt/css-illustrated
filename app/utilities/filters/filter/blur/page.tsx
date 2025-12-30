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
  { cls: "blur-none", desc: "Remove blur" },
  { cls: "blur-sm", desc: "Small blur" },
  { cls: "blur", desc: "Default blur" },
  { cls: "blur-md", desc: "Medium blur" },
  { cls: "blur-lg", desc: "Large blur" },
  { cls: "blur-xl", desc: "Extra large blur" },
  { cls: "blur-2xl", desc: "2× extra large blur" },
  { cls: "blur-3xl", desc: "3× extra large blur" },
];

export default function FilterBlurPage() {
  const [blurClass, setBlurClass] = useState("blur-md");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Filter Blur"
            description="Apply Tailwind CSS blur utilities to soften elements with CSS `filter: blur()`."
          />

          <MentalModelSection
            title="Understanding Blur Filters"
            description="Blur utilities apply a CSS blur filter of different intensities, softening elements visually."
            features={[
              "Use `blur-sm` through `blur-3xl` for increasing blur strength",
              "Use `blur-none` to remove blur",
              "Combine with other filter utilities via `filter` class",
              "Supports arbitrary values via `[value]` syntax",
            ]}
            layerAssignment="Effects layer — filter utilities"
            browserBehavior="CSS `filter: blur()` applies a graphical blur to the element’s rendering"
          />

          <ComparisonTable
            title="Filter Blur Utilities"
            columns={["Utility", "CSS Rule", "Effect"]}
            rows={[
              {
                feature: "blur-none",
                values: ["filter: ;", "No blur applied"],
              },
              {
                feature: "blur-sm",
                values: ["filter: blur(var(--blur-sm))", "Small blur"], 
              },
              {
                feature: "blur-lg",
                values: ["filter: blur(var(--blur-lg))", "Large blur"],
              },
              {
                feature: "blur-3xl",
                values: ["filter: blur(var(--blur-3xl))", "Very large blur"],
              },
            ]}
          />

          <UtilityGrid title="Blur Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Choose different blur utilities to preview how they soften this image.
            </p>

            <UtilityPlayground
              title="Blur Playground"
              description="Apply a blur utility to an image and preview the effect."
              options={utilities.map(u => u.cls)}
              defaultValue="blur-md"
              buildMarkup={(cls) => {
                return `<img class="filter ${cls} w-full h-40 object-cover" src="/img/mountains.jpg" alt="Blur preview" />`;
              }}
              renderPreview={(cls) => {
                return (
                  <img
                    className={`filter ${cls} w-full h-40 object-cover`}
                    src="/img/mountains.jpg"
                    alt="Blur preview"
                  />
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Soft Background"
              description="Use blur on image backgrounds for subtle focus effects."
              code={`<div class="filter blur-lg">
  <img src="/img/beach.jpg" class="w-full" />
</div>`}
            >
              <div className="filter blur-lg">
                <img src="/img/beach.jpg" className="w-full" />
              </div>
            </ExampleCard>

            <ExampleCard
              title="Blur Behind Text"
              description="Blur an image behind overlayed text."
              code={`<div class="relative">
  <img src="/img/forest.jpg" class="filter blur-md w-full" />
  <div class="absolute inset-0 p-4 text-white">Overlay text</div>
</div>`}
            >
              <div className="relative">
                <img src="/img/forest.jpg" className="filter blur-md w-full" />
                <div className="absolute inset-0 p-4 text-white">Overlay text</div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Hover Blur Effect"
              description="Apply blur on hover for UX feedback."
              code={`<img class="filter blur-sm hover:blur-lg transition" src="/img/mountains.jpg" />`}
            >
              <img className="filter blur-sm hover:blur-lg transition" src="/img/mountains.jpg" />
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not using `filter` utility",
                reason: "Blur classes only work if the `filter` class is applied to enable CSS filters.",
                example: `<img class="blur-md" src="/img/example.jpg" />`,
              },
              {
                title: "Blurring text content",
                reason: "Blurring text directly can make it unreadable.",
                example: `<p class="filter blur-lg">Blurry text</p>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Use the `filter` class with any blur utility." },
              { bold: "Hover & states:", text: "Use responsive and state variants like `hover:blur-lg`." },
              { bold: "Arbitrary values:", text: "Use classes like `blur-[value]` for custom blur sizes." },
              { bold: "Combine effects:", text: "Combine blur with brightness, contrast, and more via `filter`." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
