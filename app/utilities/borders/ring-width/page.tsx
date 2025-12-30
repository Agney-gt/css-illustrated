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
  { cls: "ring-0", desc: "No ring" },
  { cls: "ring-1", desc: "Thin ring" },
  { cls: "ring-2", desc: "Slightly thicker ring" },
  { cls: "ring", desc: "Default ring thickness" },
  { cls: "ring-4", desc: "Medium thick ring" },
  { cls: "ring-8", desc: "Thick ring" },
];

export default function RingWidthPage() {
  const [ringClass, setRingClass] = useState("ring-2");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Ring Width"
            description="Control the thickness of outline ring shadows for focus and emphasis."
          />

          <MentalModelSection
            title="Understanding Ring Width"
            description="Ring width utilities control the thickness of an element’s focus or outline ring using box-shadow sizes."
            features={[
              "Control how thick the outline ring appears",
              "Useful for focus styles and emphasis",
              "Works with `ring-color`, `ring-offset`, and `ring-opacity` utilities",
              "Responsive and state variants available",
            ]}
            layerAssignment="Effects layer — focus & outline styling"
            browserBehavior="Rings are created via CSS box-shadow representing the outline thickness"
          />

          <ComparisonTable
            title="Ring Width Utilities"
            columns={["Utility", "Box Shadow Size", "Use Case"]}
            rows={[
              {
                feature: "ring-0",
                values: ["0px", "Remove ring entirely"],
              },
              {
                feature: "ring-1",
                values: ["1px", "Thin emphasis ring"],
              },
              {
                feature: "ring-2",
                values: ["2px", "Default thicker ring"],
              },
              {
                feature: "ring",
                values: ["3px (default)", "General focus ring"],
              },
              {
                feature: "ring-4",
                values: ["4px", "Heavier emphasis"],
              },
              {
                feature: "ring-8",
                values: ["8px", "Very thick ring"],
              },
            ]}
          />

          <UtilityGrid title="Ring Width Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Toggle different ring widths and preview how the ring appears.
            </p>

            <UtilityPlayground
              title="Ring Width Playground"
              description="Select a ring width utility and see the box-shadow change."
              options={utilities.map(u => u.cls)}
              defaultValue="ring-2"
              buildMarkup={(cls) => {
                return `<button class="${cls} ring-blue-500 px-6 py-3 text-white bg-gray-800 rounded">
  ${cls}
</button>`;
              }}
              renderPreview={(cls) => {
                return (
                  <button className={`${cls} ring-blue-500 px-6 py-3 text-white bg-gray-800 rounded`}>
                    {cls}
                  </button>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Focus Ring Example"
              description="Use ring utilities on focus states."
              code={`<button class="focus:ring-4 focus:ring-indigo-400 px-4 py-2">
  Focus Me
</button>`}
            >
              <button className="focus:ring-4 focus:ring-indigo-400 px-4 py-2">
                Focus Me
              </button>
            </ExampleCard>

            <ExampleCard
              title="Interactive Form Field"
              description="Apply a ring on form inputs for emphasis."
              code={`<input class="ring-2 ring-green-500 px-3 py-2 border rounded" placeholder="Type here"/>`}
            >
              <input className="ring-2 ring-green-500 px-3 py-2 border rounded" placeholder="Type here" />
            </ExampleCard>

            <ExampleCard
              title="Thick Ring Button"
              description="Make a button stand out with a heavy ring."
              code={`<button class="ring-8 ring-red-500 px-5 py-3">
  Important
</button>`}
            >
              <button className="ring-8 ring-red-500 px-5 py-3">
                Important
              </button>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes"
            mistakes={[
              {
                title: "Not pairing with ring-color",
                reason: "Ring width alone won’t show a visible effect without a ring color.",
                example: `<div class="ring-4"></div>`,
              },
              {
                title: "Expecting border instead",
                reason: "Ring utilities use shadows, not borders.",
                example: `<div class="ring-2 border-red-500"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Combine with color:", text: "Always use `ring-{color}` for visible rings." },
              { bold: "Use on focus:", text: "Ring width shines in focus states for accessibility." },
              { bold: "Responsive:", text: "Use responsive prefixes like `md:ring-4`." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
