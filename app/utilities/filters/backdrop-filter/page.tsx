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
  { cls: "backdrop-filter", desc: "Enable backdrop filters" },
  { cls: "backdrop-filter-none", desc: "Disable all backdrop filters" },
];

export default function BackdropFilterPage() {
  const [filterClass, setFilterClass] = useState("backdrop-filter");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backdrop Filter Utilities"
            description="Enable and control CSS `backdrop-filter` effects applied behind elements, such as blur, brightness, and more."
          />

          <MentalModelSection
            title="How Backdrop Filters Work"
            description="Backdrop filter utilities apply CSS graphical effects like blur to the content behind a semi-transparent element."
            features={[
              "Use `backdrop-filter` to enable backdrop filter effects",
              "Use `backdrop-filter-none` to disable all filters",
              "Combine with backdrop filter helpers like `backdrop-blur-*`, `backdrop-brightness-*`, etc.",
              "Responsive and state variants are supported",
            ]}
            layerAssignment="Effects layer — Backdrop filters"
            browserBehavior="CSS `backdrop-filter` applies graphical effects to the area behind an element’s backdrop, requiring transparency or partial opacity to be visible" 
          />

          <ComparisonTable
            title="Backdrop Filter Utilities"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "backdrop-filter",
                values: ["backdrop-filter: var(--tw-backdrop-filter)", "Enables backdrop filters"],
              },
              {
                feature: "backdrop-filter-none",
                values: ["backdrop-filter: none", "Disables all backdrop filters"],
              },
            ]}
          />

          <UtilityGrid title="Backdrop Filter Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Toggle backdrop filter utilities and preview combined backdrop effects.
            </p>

            <UtilityPlayground
              title="Backdrop Filter Playground"
              description="Apply backdrop filter utilities together with helper classes for blur and brightness."
              options={utilities.map(u => u.cls)}
              defaultValue="backdrop-filter"
              buildMarkup={(cls) => {
                return `<div class="relative bg-[url('/img/mountains.jpg')] bg-cover bg-center h-40">
  <div class="${cls} backdrop-blur-sm backdrop-brightness-125 bg-white/30 flex items-center justify-center text-black font-semibold">
    ${cls}
  </div>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className="relative bg-[url('/img/mountains.jpg')] bg-cover bg-center h-40">
                    <div className={`${cls} backdrop-blur-sm backdrop-brightness-125 bg-white/30 flex items-center justify-center text-black font-semibold`}>
                      {cls}
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Frosted Glass Header"
              description="Use backdrop filters and blur to create a glass-like effect on a header."
              code={`<header class="backdrop-filter backdrop-blur-lg bg-white/40 p-6">
  <h1>Hello World</h1>
</header>`}
            >
              <header className="backdrop-filter backdrop-blur-lg bg-white/40 p-6">
                <h1>Hello World</h1>
              </header>
            </ExampleCard>

            <ExampleCard
              title="Backdrop Blur Card"
              description="Combine `backdrop-filter` and backdrop helpers on a card overlay."
              code={`<div class="relative bg-[url('/img/forest.jpg')] h-64">
  <div class="backdrop-filter backdrop-blur-md backdrop-brightness-110 bg-white/25 p-4 rounded">
    Content
  </div>
</div>`}
            >
              <div className="relative bg-[url('/img/forest.jpg')] h-64">
                <div className="backdrop-filter backdrop-blur-md backdrop-brightness-110 bg-white/25 p-4 rounded">
                  Content
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Disable Backdrop Filters on Large Screens"
              description="Use `backdrop-filter-none` responsively."
              code={`<div class="backdrop-filter backdrop-blur-sm md:backdrop-filter-none bg-white/30 p-4">
  Responsive overlay
</div>`}
            >
              <div className="backdrop-filter backdrop-blur-sm md:backdrop-filter-none bg-white/30 p-4">
                Responsive overlay
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using helper filters without enabling `backdrop-filter`",
                reason: "Helper classes like `backdrop-blur-*` have no effect without `backdrop-filter` present.",
                example: `<div class="backdrop-blur-lg"></div>`,
              },
              {
                title: "Backdrop filter without transparency",
                reason: "Backdrop filters are invisible unless the backdrop has some transparency.",
                example: `<div class="backdrop-filter bg-white"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Enable filters:", text: "Always include `backdrop-filter` before other backdrop filter helpers." },
              { bold: "Use transparency:", text: "Add transparency (e.g., `bg-white/30`) to see filter effects." },
              { bold: "Combine effects:", text: "Pair blur with brightness, contrast, and other helpers." },
              { bold: "Responsive variants:", text: "Use screen or state prefixes like `hover:backdrop-blur-lg`." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
