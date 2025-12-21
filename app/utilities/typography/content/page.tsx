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
  { cls: "content-none", desc: "No pseudo-element content" },
  { cls: "content-['']" , desc: "Empty string content" },
  { cls: "content-['Hello']", desc: "Custom text content" },
  { cls: "content-['★']", desc: "Custom icon content" },
];

export default function ContentPage() {
  const [contentClass, setContentClass] = useState("content-['Hello']");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Content Utility"
            description="Generate `::before` and `::after` pseudo-element content using Tailwind’s `content` utilities."
          />

          <MentalModelSection
            title="Understanding the Content Utility"
            description="The `content` utility controls what is inserted into `::before` and `::after` using Tailwind’s built-in support for CSS `content` values."
            features={[
              "Use Tailwind `content` utilities to set pseudo-element content",
              "Supports strings, quoted values, and arbitrary content values",
              "Works with utilities that control pseudo-elements (`before:`, `after:`)",
              "Useful for icons, labels, or decorative text",
            ]}
            layerAssignment="Utilities layer — pseudo-elements"
            browserBehavior="CSS `content` property inserts generated content into pseudo-elements"
          />

          <ComparisonTable
            title="Content Utility Overview"
            columns={["Utility", "CSS Property", "Inserted Content"]}
            rows={[
              {
                feature: "content-none",
                values: ["content: none", "No content generated"],
              },
              {
                feature: `content-['…']`,
                values: ["content: '…'", "Custom content text"],
              },
            ]}
          />

          <UtilityGrid title="Content Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Apply different Tailwind `content` utilities to pseudo-elements and preview content insertion.
            </p>

            <UtilityPlayground
              title="Content Playground"
              description="Toggle content utilities on pseudo-elements."
              options={utilities.map(u => u.cls)}
              defaultValue="content-['Hello']"
              buildMarkup={(cls) => {
                return `<div class="relative before:block before:absolute before:-top-6 before:left-0 before:${cls} after:block after:absolute after:-bottom-6 after:left-0 after:${cls} p-12 border">
  Pseudo content example
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`relative before:block before:absolute before:-top-6 before:left-0 before:${cls} after:block after:absolute after:-bottom-6 after:left-0 after:${cls} p-12 border`}>
                    Pseudo content example
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Decorative Labels"
              description="Use custom content to inject decorative text via pseudo-elements."
              code={`<div class="relative before:content-['★'] before:absolute before:-top-4 before:left-0 text-xl">
  Heading
</div>`}
            >
              <div className="relative before:content-['★'] before:absolute before:-top-4 before:left-0 text-xl">
                Heading
              </div>
            </ExampleCard>

            <ExampleCard
              title="Empty Content Placeholder"
              description="Insert an empty pseudo-element for spacing or visuals."
              code={`<div class="relative before:content-[''] before:block before:h-4"></div>`}
            >
              <div className="relative before:content-[''] before:block before:h-4"></div>
            </ExampleCard>

            <ExampleCard
              title="Custom Icon Insertion"
              description="Use arbitrary content utilities for icons or symbols."
              code={`<div class="relative before:content-['🔥'] before:absolute before:-top-4 before:left-1">
  Fire icon
</div>`}
            >
              <div className="relative before:content-['🔥'] before:absolute before:-top-4 before:left-1">
                Fire icon
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Not using pseudo-element prefixes",
                reason: "The content utility works only with `before:` or `after:`.",
                example: `<div class="content-['Hello']"></div>`,
              },
              {
                title: "Unquoted values",
                reason: "Strings must be quoted.",
                example: `<div class="before:content-Hello"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Always pair with before/after:", text: "Use `before:` or `after:` to generate pseudo content." },
              { bold: "Quote strings:", text: "Ensure custom content values are quoted properly." },
              { bold: "Icons & symbols:", text: "Use arbitrary content values for emojis or symbols." },
              { bold: "Spacing with content:", text: "Insert empty content for paddings or visuals." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
