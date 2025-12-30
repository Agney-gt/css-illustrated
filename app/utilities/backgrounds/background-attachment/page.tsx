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
  { cls: "bg-fixed", desc: "Fix background relative to viewport" },
  { cls: "bg-local", desc: "Scroll with container" },
  { cls: "bg-scroll", desc: "Scroll with viewport" },
];

export default function BackgroundAttachmentPage() {
  const [bgAttachClass, setBgAttachClass] = useState("bg-fixed");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Background Attachment"
            description="Control how background images behave when the page or container scrolls."
          />

          <MentalModelSection
            title="Understanding Background Attachment"
            description="Background attachment determines whether a background image stays fixed or scrolls with content or viewport."
            features={[
              "bg-fixed keeps the background fixed relative to viewport",
              "bg-local moves background with container scroll",
              "bg-scroll moves background with viewport scroll",
            ]}
            layerAssignment="Background utility"
            browserBehavior="Sets CSS background-attachment property on elements"
          />

          <ComparisonTable
            title="Attachment Utilities Overview"
            columns={["Utility", "Property", "Behavior"]}
            rows={[
              {
                feature: "bg-fixed",
                values: ["background-attachment: fixed", "Fixed relative to viewport"],
              },
              {
                feature: "bg-local",
                values: ["background-attachment: local", "Scrolls with container"],
              },
              {
                feature: "bg-scroll",
                values: ["background-attachment: scroll", "Scrolls with viewport"],
              },
            ]}
          />

          <UtilityGrid title="Background Attachment Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different background-attachment utilities and preview how a background image behaves when scrolling.
            </p>

            <UtilityPlayground
              title="Background Attachment Playground"
              description="Pick a utility to preview how background scroll behavior changes."
              options={utilities.map(u => u.cls)}
              defaultValue="bg-fixed"
              buildMarkup={(cls) => {
                return `<div class="h-64 bg-[url('/your-image.jpg')] ${cls} bg-cover bg-center border">
  <p class="mt-48 text-white font-bold text-center">Attachment: ${cls}</p>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`h-64 bg-[url('/your-image.jpg')] ${cls} bg-cover bg-center border`}>
                    <p className="mt-48 text-white font-bold text-center">
                      Attachment: {cls}
                    </p>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Fixed Background Header"
              description="Use `bg-fixed` to create a static background effect on a hero section."
              code={`<header class="bg-fixed bg-[url('/header.jpg')] bg-cover bg-center h-80"></header>`}
            >
              <div className="bg-fixed bg-[url('/header.jpg')] bg-cover bg-center h-80"></div>
            </ExampleCard>

            <ExampleCard
              title="Container Scroll Background"
              description="Use `bg-local` inside scrollable containers."
              code={`<div class="overflow-auto h-64">
  <div class="bg-local bg-[url('/pattern.jpg')] bg-repeat h-96"></div>
</div>`}
            >
              <div className="overflow-auto h-64 border">
                <div className="bg-local bg-[url('/pattern.jpg')] bg-repeat h-96"></div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Standard Scroll Background"
              description="Use `bg-scroll` to let background scroll normally with page."
              code={`<div class="bg-scroll bg-[url('/scene.jpg')] bg-cover bg-center h-64"></div>`}
            >
              <div className="bg-scroll bg-[url('/scene.jpg')] bg-cover bg-center h-64"></div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes"
            mistakes={[
              {
                title: "Using attachment without a background image",
                reason: "Effects only apply when background images are set.",
                example: `<div class="bg-fixed"></div>`,
              },
              {
                title: "Expecting `bg-fixed` inside overflow containers",
                reason: "Fixed attaches to viewport, ignoring local scroll contexts.",
                example: `<div class="overflow-auto bg-fixed"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use images:", text: "Background attachment only affects background images." },
              { bold: "Viewport effects:", text: "bg-fixed creates a parallax-like effect." },
              { bold: "Container contexts:", text: "bg-local is useful in inner scrollable regions." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
