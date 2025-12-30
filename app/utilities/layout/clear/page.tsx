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
  { cls: "clear-none", desc: "Don’t clear any floats" },
  { cls: "clear-left", desc: "Clear floats on the left side" },
  { cls: "clear-right", desc: "Clear floats on the right side" },
  { cls: "clear-both", desc: "Clear floats on both sides" },
  { cls: "clear-start", desc: "Clear logical start floats" },
  { cls: "clear-end", desc: "Clear logical end floats" },
];

export default function ClearPage() {
  const [clearClass, setClearClass] = useState("clear-both");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Clear Utilities"
            description="Use Tailwind’s clear utilities to control how elements behave around floated elements."
          />

          <MentalModelSection
            title="Understanding Clear Utilities"
            description="Clear utilities prevent an element from sitting next to floated elements. They ensure content starts below floats, which helps keep layout predictable when images or other items are floated."
            features={[
              "Use `clear-left` or `clear-right` to block floats on one side",
              "`clear-both` stops floats on both sides",
              "Logical variants like `clear-start` and `clear-end` support RTL layouts",
              "Useful after a list of floated images or elements",
            ]}
            layerAssignment="Layout utilities"
            browserBehavior="CSS `clear` property controls whether an element can be adjacent to floated siblings"
          />

          <ComparisonTable
            title="Clear Utility Summary"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "clear-left",
                values: ["clear: left;", "Prevents floats on left side"],
              },
              {
                feature: "clear-right",
                values: ["clear: right;", "Prevents floats on right side"],
              },
              {
                feature: "clear-both",
                values: ["clear: both;", "Prevents floats on both sides"],
              },
            ]}
          />

          <UtilityGrid title="Clear Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Apply clear utilities to see how content flows around floated elements.
            </p>

            <UtilityPlayground
              title="Clear Playground"
              description="Float an image and clear subsequent text with different clear utilities."
              options={utilities.map(u => u.cls)}
              defaultValue="clear-both"
              buildMarkup={(cls) => {
                return `<div class="prose">
  <img src="/img/mountains.jpg" class="float-left w-32 h-32 mr-4 mb-2" />
  <p class="${cls}">This paragraph is cleared using <strong>${cls}</strong>.</p>
  <p>Following content flows normally below the cleared element.</p>
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className="prose">
                    <img
                      src="/img/mountains.jpg"
                      className="float-left w-32 h-32 mr-4 mb-2"
                    />
                    <p className={`${cls}`}>
                      This paragraph is cleared using <strong>{cls}</strong>.
                    </p>
                    <p>Following content flows normally below the cleared element.</p>
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Clear Left Float"
              description="Use `clear-left` to start below left-floated elements."
              code={`<p class="clear-left">This paragraph clears left floats.</p>`}
            >
              <p className="clear-left">This paragraph clears left floats.</p>
            </ExampleCard>

            <ExampleCard
              title="Clear Both Floats"
              description="Ensure an element starts below all floats using `clear-both`."
              code={`<p class="clear-both">This paragraph clears both floats.</p>`}
            >
              <p className="clear-both">This paragraph clears both floats.</p>
            </ExampleCard>

            <ExampleCard
              title="Logical Clear with RTL"
              description="Use `clear-start`/`clear-end` for direction-aware clearing."
              code={`<p class="clear-start">Clear start floats for logical layouts.</p>`}
            >
              <p className="clear-start">Clear start floats for logical layouts.</p>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Expecting clear to move floats",
                reason: "Clear affects the element itself, not neighboring floats — it moves the element below floats.",
                example: `<p class="clear-right">This won’t move the floated item.</p>`,
              },
              {
                title: "Missing float context",
                reason: "Clear utilities only matter when there are floats present.",
                example: `<p class="clear-left">No floats present.</p>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use after floats:", text: "Apply clear utilities to block content below floated elements." },
              { bold: "Prefer logical variants:", text: "Use `clear-start`/`clear-end` for RTL support." },
              { bold: "Responsive variants:", text: "Use `sm:clear-both` to clear at specific breakpoints." },
              { bold: "Combine with layout:", text: "Use with grid/flex when appropriate instead of floats." },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
