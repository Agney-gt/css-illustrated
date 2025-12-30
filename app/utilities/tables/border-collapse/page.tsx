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
  { cls: "border-collapse", desc: "Collapse adjacent table borders" },
  { cls: "border-separate", desc: "Separate table cell borders" },
];

export default function BorderCollapsePage() {
  const [borderClass, setBorderClass] = useState("border-collapse");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Border Collapse"
            description="Control whether table cell borders collapse into one or remain separate."
          />

          <MentalModelSection
            title="Understanding Border Collapse"
            description="Border collapse utilities determine how adjacent table cell borders are rendered."
            features={[
              "`border-collapse` merges adjacent cell borders",
              "`border-separate` keeps borders distinct",
              "Useful for styling structured data tables",
              "Responsive variants available",
            ]}
            layerAssignment="Table layout utilities"
            browserBehavior="CSS `border-collapse` controls how borders between table cells are combined or separated"
          />

          <ComparisonTable
            title="Border Collapse Utility Summary"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "border-collapse",
                values: ["border-collapse: collapse;", "Combined borders"],
              },
              {
                feature: "border-separate",
                values: ["border-collapse: separate;", "Separate cell borders"],
              },
            ]}
          />

          <UtilityGrid title="Border Collapse Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try switching how a table’s cell borders behave when adjacent.
            </p>

            <UtilityPlayground
              title="Border Collapse Playground"
              description="Change between collapsed and separate border behavior."
              options={utilities.map(u => u.cls)}
              defaultValue="border-collapse"
              buildMarkup={(cls) => {
                return `<table class="${cls} table-auto border border-gray-400 w-full">
  <thead>
    <tr>
      <th class="border border-gray-300 px-2 py-1">Name</th>
      <th class="border border-gray-300 px-2 py-1">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-2 py-1">Alice</td>
      <td class="border border-gray-300 px-2 py-1">24</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-2 py-1">Bob</td>
      <td class="border border-gray-300 px-2 py-1">30</td>
    </tr>
  </tbody>
</table>`;
              }}
              renderPreview={(cls) => {
                return (
                  <table className={`${cls} table-auto border border-gray-400 w-full`}>
                    <thead>
                      <tr>
                        <th className="border border-gray-300 px-2 py-1">Name</th>
                        <th className="border border-gray-300 px-2 py-1">Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Alice</td>
                        <td className="border border-gray-300 px-2 py-1">24</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">Bob</td>
                        <td className="border border-gray-300 px-2 py-1">30</td>
                      </tr>
                    </tbody>
                  </table>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Collapsed Borders Table"
              description="Use `border-collapse` to unify table borders for a cleaner look."
              code={`<table class="border-collapse border table-auto">
  <tr><th class="border px-2">State</th><th class="border px-2">City</th></tr>
  <tr><td class="border px-2">Ohio</td><td class="border px-2">Columbus</td></tr>
</table>`}
            >
              <table className="border-collapse border table-auto">
                <tr><th className="border px-2">State</th><th className="border px-2">City</th></tr>
                <tr><td className="border px-2">Ohio</td><td className="border px-2">Columbus</td></tr>
              </table>
            </ExampleCard>

            <ExampleCard
              title="Separated Borders Table"
              description="Use `border-separate` when each cell’s border should remain distinct."
              code={`<table class="border-separate border table-auto">
  <tr><th class="border px-2">State</th><th class="border px-2">City</th></tr>
  <tr><td class="border px-2">Michigan</td><td class="border px-2">Detroit</td></tr>
</table>`}
            >
              <table className="border-separate border table-auto">
                <tr><th className="border px-2">State</th><th className="border px-2">City</th></tr>
                <tr><td className="border px-2">Michigan</td><td className="border px-2">Detroit</td></tr>
              </table>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Expecting collapse on non-table elements",
                reason: "These utilities only affect table elements.",
                example: `<div class="border-collapse"></div>`,
              },
              {
                title: "Missing `table-auto/table-fixed`",
                reason: "Tables may render unpredictably without layout utilities.",
                example: `<table class="border-separate"></table>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use with tables:", text: "Apply only to `<table>` elements for expected behavior." },
              { bold: "Responsive variants:", text: "Use responsive prefixes like `md:border-separate`." },
              { bold: "Combine with spacing:", text: "Use `border-spacing-*` with `border-separate` for spacing control." },
              { bold: "Cell borders:", text: "Add `border` utilities to cells to enhance visibility." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
