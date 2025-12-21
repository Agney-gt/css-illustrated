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
  { cls: "bg-origin-border", desc: "Background originates from border box" },
  { cls: "bg-origin-padding", desc: "Background originates from padding box" },
  { cls: "bg-origin-content", desc: "Background originates from content box" },
];

export default function BackgroundOriginPage() {
  const [originClass, setOriginClass] = useState("bg-origin-border");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Background Origin"
            description="Control where an element’s background image is positioned relative to its box model."
          />

          <MentalModelSection
            title="Understanding Background Origin"
            description="Background origin determines whether a background paints from the border, padding, or content box."
            features={[
              "bg-origin-border uses the border box origin",
              "bg-origin-padding uses the padding box origin",
              "bg-origin-content uses the content box origin",
            ]}
            layerAssignment="Background utility"
            browserBehavior="Sets the CSS `background-origin` property on elements"
          />

          <ComparisonTable
            title="Background Origin Overview"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "bg-origin-border",
                values: ["background-origin: border-box", "Background starts from border box"],
              },
              {
                feature: "bg-origin-padding",
                values: ["background-origin: padding-box", "Background starts from padding box"],
              },
              {
                feature: "bg-origin-content",
                values: ["background-origin: content-box", "Background starts from content box"],
              },
            ]}
          />

          <UtilityGrid title="Background Origin Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different background-origin utilities and see how the image alignment changes.
            </p>

            <UtilityPlayground
              title="Background Origin Playground"
              description="Pick a background origin utility to preview how the background is rendered."
              options={utilities.map(u => u.cls)}
              defaultValue="bg-origin-border"
              buildMarkup={(cls) => {
                return `<div class="h-40 border-4 border-dashed bg-[url('/your-image.jpg')] ${cls} bg-cover bg-center">
  Origin: ${cls}
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`h-40 border-4 border-dashed bg-[url('/your-image.jpg')] ${cls} bg-cover bg-center`}>
                    Origin: {cls}
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Border Box Origin"
              description="Background begins from the border edge."
              code={`<div class="border-4 bg-[url('/img.jpg')] bg-origin-border p-4"></div>`}
            >
              <div className="border-4 bg-[url('/img.jpg')] bg-origin-border p-4"></div>
            </ExampleCard>

            <ExampleCard
              title="Padding Box Origin"
              description="Background begins from padding edge."
              code={`<div class="border-4 bg-[url('/img.jpg')] bg-origin-padding p-4"></div>`}
            >
              <div className="border-4 bg-[url('/img.jpg')] bg-origin-padding p-4"></div>
            </ExampleCard>

            <ExampleCard
              title="Content Box Origin"
              description="Background begins from content area."
              code={`<div class="border-4 bg-[url('/img.jpg')] bg-origin-content p-4"></div>`}
            >
              <div className="border-4 bg-[url('/img.jpg')] bg-origin-content p-4"></div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using origin without background",
                reason: "Background origin only affects elements with background images or colors.",
                example: `<div class="bg-origin-padding"></div>`,
              },
              {
                title: "Expecting huge shifts",
                reason: "Changes are subtle and depend on border/padding presence.",
                example: `<div class="border bg-origin-content"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Visible background:", text: "Ensure a background image/color is present." },
              { bold: "Border matters:", text: "Borders affect how origin changes render." },
              { bold: "Responsive utilities:", text: "Use responsive prefixes like `md:bg-origin-content`." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
