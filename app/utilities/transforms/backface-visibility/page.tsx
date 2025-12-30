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
  { cls: "backface-visible", desc: "Backface is visible when rotated" },
  { cls: "backface-hidden", desc: "Backface is hidden when rotated" },
];

export default function BackfaceVisibilityPage() {
  const [visClass, setVisClass] = useState("backface-visible");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Backface Visibility"
            description="Control whether the back side of an element is visible when it’s rotated in 3D space."
          />

          <MentalModelSection
            title="Understanding Backface Visibility"
            description="Backface visibility determines whether the reverse side of a transformed element shows when viewed from behind."
            features={[
              "`backface-visible` shows the backface when rotated",
              "`backface-hidden` hides the backface",
              "Useful for 3D transforms and flip animations",
              "Works with `transform` and `rotate-*` utilities",
            ]}
            layerAssignment="Transform utilities — 3D transforms"
            browserBehavior="CSS `backface-visibility` controls whether the backside of an element is visible when rotated"
          />

          <ComparisonTable
            title="Backface Visibility Utilities"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "backface-visible",
                values: ["backface-visibility: visible", "Backside is visible"],
              },
              {
                feature: "backface-hidden",
                values: ["backface-visibility: hidden", "Backside is hidden"],
              },
            ]}
          />

          <UtilityGrid title="Backface Visibility Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Toggle backface visibility and see how a rotated card behaves.
            </p>

            <UtilityPlayground
              title="Backface Playground"
              description="Apply backface visibility utilities to the back of a flip card."
              options={utilities.map(u => u.cls)}
              defaultValue="backface-visible"
              buildMarkup={(cls) => {
                return `<div class="perspective-500">
  <div class="relative w-40 h-40 transform-style-preserve-3d hover:rotate-y-180 transition">
    <div class="absolute inset-0 bg-blue-500 text-white flex items-center justify-center">
      Front
    </div>
    <div class="absolute inset-0 bg-red-500 text-white flex items-center justify-center ${cls}">
      Back
    </div>
  </div>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className="perspective-500">
                    <div className="relative w-40 h-40 transform-style-preserve-3d hover:rotate-y-180 transition">
                      <div className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center">
                        Front
                      </div>
                      <div className={`absolute inset-0 bg-red-500 text-white flex items-center justify-center ${cls}`}>
                        Back
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="3D Flip Card"
              description="Hide the backside when flipping an element."
              code={`<div class="relative w-48 h-48 transform-style-preserve-3d hover:rotate-y-180 transition">
  <div class="absolute inset-0 bg-indigo-600 text-white flex items-center justify-center">
    Front
  </div>
  <div class="absolute inset-0 bg-indigo-800 text-white flex items-center justify-center backface-hidden">
    Back
  </div>
</div>`}
            >
              <div className="relative w-48 h-48 transform-style-preserve-3d hover:rotate-y-180 transition">
                <div className="absolute inset-0 bg-indigo-600 text-white flex items-center justify-center">
                  Front
                </div>
                <div className="absolute inset-0 bg-indigo-800 text-white flex items-center justify-center backface-hidden">
                  Back
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Visible Backface Card"
              description="Keep both faces visible when rotated."
              code={`<div class="relative w-48 h-48 transform-style-preserve-3d hover:rotate-y-180 transition">
  <div class="absolute inset-0 bg-green-600 text-white flex items-center justify-center">
    Front
  </div>
  <div class="absolute inset-0 bg-green-800 text-white flex items-center justify-center backface-visible">
    Back
  </div>
</div>`}
            >
              <div className="relative w-48 h-48 transform-style-preserve-3d hover:rotate-y-180 transition">
                <div className="absolute inset-0 bg-green-600 text-white flex items-center justify-center">
                  Front
                </div>
                <div className="absolute inset-0 bg-green-800 text-white flex items-center justify-center backface-visible">
                  Back
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Without 3D transform context",
                reason: "Backface visibility has no effect without 3D transforms like rotateY/rotateX.",
                example: `<div class="backface-hidden"></div>`,
              },
              {
                title: "Expecting 2D behavior",
                reason: "Backface visibility is only relevant when elements can rotate in 3D.",
                example: `<div class="rotate-45 backface-hidden"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use with transforms:", text: "Backface visibility works only when 3D transforms are in effect." },
              { bold: "Hide unnecessary backs:", text: "Use `backface-hidden` for flip cards to avoid showing backside." },
              { bold: "Pair with preserve-3d:", text: "Use `transform-style-preserve-3d` for nested 3D children." },
              { bold: "Responsive:", text: "Use responsive prefixes like `md:backface-hidden`." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
