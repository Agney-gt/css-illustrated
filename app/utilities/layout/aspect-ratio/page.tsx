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
  { cls: "aspect-auto", desc: "Natural aspect ratio" },
  { cls: "aspect-square", desc: "1:1 ratio" },
  { cls: "aspect-video", desc: "16:9 ratio" },
  { cls: "aspect-1/1", desc: "Custom 1:1 ratio" },
  { cls: "aspect-4/3", desc: "Custom 4:3 ratio" },
  { cls: "aspect-[3/2]", desc: "Arbitrary 3:2 ratio" },
];

export default function AspectRatioPage() {
  const [ratioClass, setRatioClass] = useState("aspect-video");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Aspect Ratio"
            description="Control an element’s width-to-height ratio with Tailwind’s utilities."
          />

          <MentalModelSection
            title="Understanding Aspect Ratio"
            description="Aspect ratio utilities let you lock an element’s proportional relationship between width and height using modern CSS."
            features={[
              "Use `aspect-auto` to let the element size naturally",
              "Use `aspect-square` for a perfect 1:1 ratio",
              "Use `aspect-video` for standard 16:9 screens",
              "Custom ratios via slash or arbitrary bracket values",
            ]}
            layerAssignment="Layout utilities — size relationship"
            browserBehavior="CSS `aspect-ratio` maintains element proportions under varying widths and layouts"
          />

          <ComparisonTable
            title="Aspect Ratio Utilities"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "aspect-auto",
                values: ["aspect-ratio: auto", "Default proportion behavior"],
              },
              {
                feature: "aspect-square",
                values: ["aspect-ratio: 1 / 1", "Square dimension"],
              },
              {
                feature: "aspect-video",
                values: ["aspect-ratio: 16 / 9", "Widescreen ratio"],
              },
              {
                feature: "aspect-[value]",
                values: ["aspect-ratio: <custom>", "Arbitrary custom ratio"],
              },
            ]}
          />

          <UtilityGrid title="Aspect Ratio Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Select different aspect-ratio utilities and preview how they affect an element’s shape.
            </p>

            <UtilityPlayground
              title="Aspect Ratio Playground"
              description="Test aspect ratio utilities on a responsive box."
              options={utilities.map(u => u.cls)}
              defaultValue="aspect-video"
              buildMarkup={(cls) => {
                return `<div class="w-full ${cls} bg-gray-200 flex items-center justify-center">
  ${cls}
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`w-full ${cls} bg-gray-200 flex items-center justify-center`}>
                    {cls}
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Responsive Image Container"
              description="Maintain a 16:9 ratio for a video or image frame."
              code={`<div class="aspect-video">
  <img src="/img/photo.jpg" class="w-full h-full object-cover" />
</div>`}
            >
              <div className="aspect-video">
                <img src="/img/photo.jpg" className="w-full h-full object-cover" />
              </div>
            </ExampleCard>

            <ExampleCard
              title="Square Avatar"
              description="Use `aspect-square` to ensure consistent avatar sizes."
              code={`<div class="aspect-square w-24">
  <img src="/img/avatar.jpg" class="object-cover w-full h-full rounded-full" />
</div>`}
            >
              <div className="aspect-square w-24">
                <img src="/img/avatar.jpg" className="object-cover w-full h-full rounded-full" />
              </div>
            </ExampleCard>

            <ExampleCard
              title="Custom Ratio Box"
              description="Use an arbitrary aspect ratio via bracket syntax."
              code={`<div class="aspect-[3/2] bg-indigo-100">
  Custom 3:2 box
</div>`}
            >
              <div className="aspect-[3/2] bg-indigo-100">
                Custom 3:2 box
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not pairing with object-fit",
                reason: "For images/videos inside ratio boxes, use `object-cover` to fill the container.",
                example: `<div class="aspect-video"><img src="..." /></div>`,
              },
              {
                title: "Expecting fixed height",
                reason: "Aspect ratio controls proportions — width still dictates actual size.",
                example: `<div class="aspect-square"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use predefined ratios:", text: "Common ratios like `aspect-square` and `aspect-video` cover many use cases." },
              { bold: "Arbitrary values:", text: "Use `aspect-[value]` for non-standard proportions." },
              { bold: "Responsive variants:", text: "Use breakpoint prefixes like `md:aspect-square`." },
              { bold: "Combine with object-fit:", text: "Use `object-cover` for media inside aspect containers." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
