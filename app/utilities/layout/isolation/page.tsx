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
  { cls: "isolate", desc: "Force a new stacking context" },
  { cls: "isolation-auto", desc: "Use default stacking behavior" },
];

export default function IsolationPage() {
  const [isoClass, setIsoClass] = useState("isolate");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Isolation Utilities"
            description="Control whether an element explicitly creates a new CSS stacking context using Tailwind’s isolation utilities."
          />

          <MentalModelSection
            title="Understanding Isolation"
            description="The `isolation` utilities toggle whether an element forms its own stacking context, which affects how overlapping elements are layered and blended."
            features={[
              "Use `isolate` to force a new stacking context",
              "Use `isolation-auto` to restore default context behavior",
              "Useful when combining with blend modes or complex z-index layouts",
              "Supports responsive and state variants",
            ]}
            layerAssignment="Layout utilities"
            browserBehavior="CSS `isolation` property controls whether an element creates a new stacking context, affecting blending and layering order"
          />

          <ComparisonTable
            title="Isolation Utility Overview"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "isolate",
                values: ["isolation: isolate;", "Creates a new stacking context"],
              },
              {
                feature: "isolation-auto",
                values: ["isolation: auto;", "Default stacking behavior"],
              },
            ]}
          />

          <UtilityGrid title="Isolation Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Toggle between isolation utilities to see how stacking contexts affect overlapping elements.
            </p>

            <UtilityPlayground
              title="Isolation Playground"
              description="Apply isolation utilities to a layered box example."
              options={utilities.map(u => u.cls)}
              defaultValue="isolate"
              buildMarkup={(cls) => {
                return `<div class="${cls} relative w-40 h-40">
  <div class="absolute inset-0 bg-blue-500 z-10"></div>
  <div class="absolute top-4 left-4 w-32 h-32 bg-red-500 mix-blend-multiply"></div>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`${cls} relative w-40 h-40`}>
                    <div className="absolute inset-0 bg-blue-500 z-10"></div>
                    <div className="absolute top-4 left-4 w-32 h-32 bg-red-500 mix-blend-multiply"></div>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Force Stacking Context for Blending"
              description="Use `isolate` when combining blend modes so elements don’t unexpectedly blend with ancestors."
              code={`<div class="isolate mix-blend-screen/overlay">
  <!-- content -->
</div>`}
            >
              <div className="isolate mix-blend-screen bg-gray-200 p-6">
                Blended content inside isolated stacking context
              </div>
            </ExampleCard>

            <ExampleCard
              title="Default Stacking Behavior"
              description="Use `isolation-auto` to allow natural stacking when explicit context isn’t needed."
              code={`<div class="isolation-auto">
  <div class="z-10">Layer 1</div>
  <div class="z-20">Layer 2</div>
</div>`}
            >
              <div className="isolation-auto">
                <div className="z-10 relative">Layer 1</div>
                <div className="z-20 relative">Layer 2</div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Forcing isolation unnecessarily",
                reason: "Creating a new stacking context when not needed can complicate layering logic for child elements.",
                example: `<div class="isolate z-10">...</div>`,
              },
              {
                title: "Assuming isolation replaces z-index control",
                reason: "Isolation only affects stacking context; `z-index` still controls relative layer order inside that context.",
                example: `<div class="isolate z-0">...</div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "When to isolate:", text: "Use `isolate` for mix-blend or overlapping layers that should not affect ancestors." },
              { bold: "Restore default:", text: "Use `isolation-auto` when returning to normal stacking behavior." },
              { bold: "Responsive control:", text: "Use responsive variants like `md:isolation-auto`." },
              { bold: "Combine with z-index:", text: "Isolation affects contexts, but z-index still controls ordering within each context." },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
