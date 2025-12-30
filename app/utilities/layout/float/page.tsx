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
  { cls: "float-right", desc: "Float element to the right" },
  { cls: "float-left", desc: "Float element to the left" },
  { cls: "float-start", desc: "Float element to inline-start" },
  { cls: "float-end", desc: "Float element to inline-end" },
  { cls: "float-none", desc: "Reset float (no float)" },
];

export default function FloatPage() {
  const [floatClass, setFloatClass] = useState("float-right");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Float Utilities"
            description="Use Tailwind’s float utilities to control how an element floats and how surrounding content wraps around it."
          />

          <MentalModelSection
            title="Understanding Float Utilities"
            description="Float utilities let you take an element out of the normal flow and have surrounding content wrap around it, useful for images and layout control."
            features={[
              "Float to left, right, inline-start, or inline-end",
              "Reset float with `float-none`",
              "Works well for text wrapping around images or elements",
              "Use together with clear utilities to control wrapping behavior",
            ]}
            layerAssignment="Layout utilities"
            browserBehavior="CSS `float` positions an element to one side, affecting how inline and block content flows around it"
          />

          <ComparisonTable
            title="Float Utility Summary"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "float-right",
                values: ["float: right;", "Element floats right, content wraps on left"],
              },
              {
                feature: "float-left",
                values: ["float: left;", "Element floats left, content wraps on right"],
              },
              {
                feature: "float-none",
                values: ["float: none;", "Element doesn’t float"],
              },
            ]}
          />

          <UtilityGrid title="Float Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Apply float utilities and see how an image floats within a block of text.
            </p>

            <UtilityPlayground
              title="Float Playground"
              description="Use different float utilities to float the image and wrap text around it."
              options={utilities.map(u => u.cls)}
              defaultValue="float-right"
              buildMarkup={(cls) => {
                return `<div class="prose">
  <img src="/img/mountains.jpg" class="${cls} w-32 h-32 mr-4 mb-2" />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacus non purus aliquet...
  </p>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className="prose">
                    <img
                      src="/img/mountains.jpg"
                      className={`${cls} w-32 h-32 mr-4 mb-2`}
                      alt="Float example"
                    />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel lacus non purus aliquet...
                    </p>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Image Floated Left"
              description="Float an image to the left and wrap text around it."
              code={`<div class="prose">
  <img class="float-left w-32 h-32 mr-4 mb-2" src="/img/forest.jpg" />
  <p>Content wraps on the right</p>
</div>`}
            >
              <div className="prose">
                <img className="float-left w-32 h-32 mr-4 mb-2" src="/img/forest.jpg" />
                <p>Content wraps on the right</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Image Floated Right"
              description="Float an image to the right and let text flow on the left."
              code={`<div class="prose">
  <img class="float-right w-32 h-32 ml-4 mb-2" src="/img/beach.jpg" />
  <p>Text flows on the left</p>
</div>`}
            >
              <div className="prose">
                <img className="float-right w-32 h-32 ml-4 mb-2" src="/img/beach.jpg" />
                <p>Text flows on the left</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Resetting Float"
              description="Use `float-none` to ensure no float is applied."
              code={`<div class="prose">
  <img class="float-none w-32 h-32 mb-2" src="/img/mountains.jpg" />
  <p>Content stays below the image</p>
</div>`}
            >
              <div className="prose">
                <img className="float-none w-32 h-32 mb-2" src="/img/mountains.jpg" />
                <p>Content stays below the image</p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Forgetting to clear floats",
                reason: "Floating elements can cause following content to wrap unintentionally — use clear utilities to fix layout.",
                example: `<div class="float-left">...</div><p>Text may wrap under the image</p>`,
              },
              {
                title: "Using floats for layout only",
                reason: "Floats were historically used for layouts, but modern layouts favor flexbox or grid.",
                example: `<div class="float-right">...</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Clear after floats:", text: "Use clear utilities (`clear-left`, `clear-both`, etc.) to control wrapping effects." },
              { bold: "Use logical floats:", text: "Use `float-start` and `float-end` for RTL support." },
              { bold: "Responsive variants:", text: "Apply responsive prefixes like `md:float-left`." },
              { bold: "Prefer modern layout:", text: "Use flexbox or grid for complex layouts." },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
