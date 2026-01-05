"use client";

import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const breakInsideClasses = [
  { cls: "break-inside-auto", desc: "Auto break behavior" },
  { cls: "break-inside-avoid", desc: "Avoid breaking inside" },
  { cls: "break-inside-avoid-page", desc: "Avoid page break" },
  { cls: "break-inside-avoid-column", desc: "Avoid column break" },
];

export default function BreakInsidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          {/* Hero Section */}
          <PageHero
            title="Break Inside"
            description="You should reach for this utility when you need to keep related content together across page or column breaks. This is essential for figures, tables, and grouped elements that should never be split. This is a Layout layer concern that maintains content cohesion."
          />

          {/* Mental Model */}
          <MentalModelSection
            title="How Break-Inside Maintains Cohesion"
            description="Break-inside utilities tell browsers to keep entire elements intact during pagination, preventing awkward splits that break user experience. This differs from break-before/after because it affects internal fragmentation, not boundaries."
            features={[
              "Prevents element from being split across pages/columns",
              "Applied to wrapper elements that contain related content",
              "Only works in fragmentation contexts (print, columns, etc)",
              "Essential for figures, tables, and grouped content",
            ]}
            layerAssignment="Layout layer - maintains content cohesion across pagination boundaries"
            browserBehavior="Browser treats element with break-inside-avoid as atomic unit during fragmentation, moving entire element if it would be split."
          />

          {/* Utility Classes */}
          <UtilityGrid
            title="Available Classes"
            items={breakInsideClasses}
            prefix=""
          />

          {/* Interactive Playground */}
          <UtilityPlayground
            title="Break Inside Playground"
            description="Test how break-inside keeps content together. The protected element moves entirely to next fragment when it would be split, while other content flows normally."
            options={[
              "break-inside-auto",
              "break-inside-avoid",
              "break-inside-avoid-column",
            ]}
            defaultValue="break-inside-auto"
            buildMarkup={(value) => `<div class="columns-2 gap-4 max-w-lg">
  <div class="${value} border-2 border-blue-500 p-4 rounded">
    <h4 class="font-bold">Important Figure</h4>
    <p>This entire box stays together or moves to next column entirely.</p>
    <img class="w-full h-16 bg-gray-300 rounded mt-2" />
  </div>
  <p class="p-3 bg-slate-100 rounded">Regular content...</p>
</div>`}
            renderPreview={(value) => (
              <div className="columns-2 gap-4 max-w-lg">
                <div
                  className={`${value} border-2 border-blue-500 p-4 rounded`}
                >
                  <h4 className="font-bold text-sm">Important Figure</h4>
                  <p className="text-xs mt-1">
                    This box stays together or moves entirely
                  </p>
                  <div className="w-full h-12 bg-gray-300 rounded mt-2"></div>
                </div>
                <p className="p-3 bg-slate-100 rounded text-sm">
                  Regular content flows normally around the protected element.
                </p>
                <p className="p-3 bg-slate-100 rounded text-sm">
                  More content demonstrates normal fragmentation.
                </p>
              </div>
            )}
            optionLabel={(v) => v.replace("break-inside-", "")}
          />

          <InteractiveChallenge
            title="The Split Quote"
            description="You have a testimonial card in a column layout. The user's photo is in one column, but their quote has spilled over to the next column, breaking the card in half. Apply `break-inside-avoid` to the card container to force the browser to keep the entire testimonial together."
            codeSnippet={`<div class="columns-2 gap-6 h-64">
  <div class="bg-gray-100 p-4 mb-4">Other content...</div>
  
  <div class="bg-blue-50 border border-blue-200 p-6 rounded-lg shadow-sm {input}">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-10 h-10 rounded-full bg-blue-200"></div>
      <div class="font-bold text-blue-800">Sarah J.</div>
    </div>
    <p class="text-blue-900">"This product completely changed our workflow. I can't imagine going back to the old way."</p>
  </div>
  
  <div class="bg-gray-100 p-4">More content...</div>
</div>`}
            options={[
              "break-inside-auto",
              "break-inside-avoid",
              "break-after-column",
              "overflow-hidden",
            ]}
            correctOption="break-inside-avoid"
            renderPreview={(userClass) => (
              <div className="w-full max-w-lg h-80 border border-dashed border-slate-300 dark:border-slate-700 p-4 rounded-lg bg-white dark:bg-slate-950 overflow-hidden relative">
                <div className="absolute top-2 right-2 text-xs text-slate-400">
                  columns-2
                </div>

                <div className="columns-2 gap-4 h-full text-sm">
                  {/* Filler to force the split position */}
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded mb-4 h-32">
                    <p className="text-slate-500">
                      Introductory content taking up space...
                    </p>
                  </div>

                  {/* The Target Card */}
                  <div
                    className={`bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded shadow-sm mb-4 ${userClass}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-700 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-blue-100">
                        SJ
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 dark:text-slate-100">
                          Sarah J.
                        </div>
                        <div className="text-[10px] text-slate-500">
                          Verified Buyer
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 text-xs italic">
                      "This product is amazing.{" "}
                      {userClass !== "break-inside-avoid" && (
                        <span className="bg-red-100 text-red-800 px-1 rounded font-bold">
                          [SPLIT HAPPENS HERE]
                        </span>
                      )}{" "}
                      It changed everything."
                    </p>
                  </div>

                  {/* More filler */}
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded mb-4 h-24">
                    <p className="text-slate-500">Next section...</p>
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded h-40">
                    <p className="text-slate-500">Footer stuff...</p>
                  </div>
                </div>
              </div>
            )}
          />

          {/* Common Mistakes */}
          <CommonMistakesSection
            mistakes={[
              {
                title: "Applying to single inline elements",
                reason:
                  "Break-inside affects element boundaries. Single inline elements don't have internal fragmentation to control.",
                example: '<span class="break-inside-avoid">Wont help</span>',
              },
              {
                title: "Using on container with no fragmentation context",
                reason:
                  "Break-inside only works when parent creates fragmentation (columns, print, etc). Normal flow ignores these hints.",
                example:
                  '<div class="break-inside-avoid">No columns here</div>',
              },
              {
                title: "Overusing break-inside-avoid",
                reason:
                  "Keeping too many elements intact can create poor space utilization and awkward page breaks with large empty areas.",
                example: '<p class="break-inside-avoid">Every paragraph</p>',
              },
              {
                title: "Applying to self-contained text",
                reason:
                  "Short text blocks rarely need protection from fragmentation. Use for composite elements instead.",
                example:
                  '<div class="break-inside-avoid"><p>Short text</p></div>',
              },
            ]}
          />

          {/* Comparison Table */}
          <ComparisonTable
            title="Break Utilities Comparison"
            columns={["Utility", "Controls", "Applied To", "Common Use Case"]}
            rows={[
              {
                feature: "break-inside-avoid",
                values: [
                  "Internal fragmentation",
                  "Container elements",
                  "Figures, tables, cards",
                ],
              },
              {
                feature: "break-before",
                values: [
                  "Fragmentation before",
                  "Elements needing new start",
                  "Chapters, sections",
                ],
              },
              {
                feature: "break-after",
                values: [
                  "Fragmentation after",
                  "Elements needing clean end",
                  "Chapter endings",
                ],
              },
              {
                feature: "break-inside-auto",
                values: [
                  "Default behavior",
                  "All elements",
                  "Normal content flow",
                ],
              },
            ]}
          />

          {/* Real World Examples */}
          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Figure with image and caption"
              copyText={`<figure class="break-inside-avoid">
  <img src="chart.png" alt="Sales data" />
  <figcaption>Q4 Sales increased 25%</figcaption>
</figure>`}
              code={`<article class="columns-2 gap-6 max-w-2xl">
  <p class="mb-4">Analysis text that might break across columns...</p>
  
  <figure class="break-inside-avoid border rounded-lg p-4 mb-4">
    <!-- Layout: This entire figure stays together -->
    <img class="w-full h-32 object-cover rounded mb-3" src="chart.png" alt="Sales data" />
    <figcaption class="text-sm font-medium">Q4 Sales increased 25%</figcaption>
    <!-- Shape: Visual container with border -->
    <p class="text-xs text-gray-600 mt-2">Image and caption travel together across columns</p>
  </figure>
  
  <p>Analysis continues...</p>
</article>`}
              description="Keeping figures and their captions together prevents awkward splits that disconnect data from its description."
            >
              <div className="columns-2 gap-4 max-w-lg border rounded p-4">
                <p className="p-2 bg-gray-100 rounded text-sm mb-2">
                  Analysis text...
                </p>
                <div className="border rounded p-3 col-span-2">
                  <div className="bg-gray-200 rounded h-20 mb-2"></div>
                  <figcaption className="text-sm font-medium">
                    Q4 Sales: 25% increase
                  </figcaption>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Product cards in catalog"
              copyText={`<div class="break-inside-avoid">
  <img src="product.jpg" alt="Product" />
  <h3>Product Name</h3>
  <p>$29.99</p>
</div>`}
              code={`<div class="columns-3 gap-4 max-w-4xl">
  <!-- Product 1 -->
  <div class="break-inside-avoid border rounded-lg p-4">
    <!-- Layout: Card stays intact -->
    <img class="w-full h-24 object-cover rounded mb-3" src="product1.jpg" alt="Product" />
    <h3 class="font-semibold text-sm mb-1">Premium Widget</h3>
    <p class="text-lg font-bold text-blue-600">$29.99</p>
    <p class="text-xs text-gray-600">Premium quality widget</p>
  </div>
  
  <!-- Product 2 -->
  <div class="break-inside-avoid border rounded-lg p-4">
    <!-- Layout: Another intact card -->
    <img class="w-full h-24 object-cover rounded mb-3" src="product2.jpg" alt="Product" />
    <h3 class="font-semibold text-sm mb-1">Standard Widget</h3>
    <p class="text-lg font-bold text-green-600">$19.99</p>
    <p class="text-xs text-gray-600">Standard widget option</p>
  </div>
</div>`}
              description="Product cards stay complete, preventing images from separating from prices and descriptions in multi-column catalogs."
            >
              <div className="columns-2 gap-3 max-w-lg border rounded p-4">
                <div className="border rounded p-3">
                  <div className="bg-gray-200 rounded h-16 mb-2"></div>
                  <h3 className="font-semibold text-xs mb-1">Premium Widget</h3>
                  <p className="text-sm font-bold">$29.99</p>
                </div>
                <div className="border rounded p-3">
                  <div className="bg-gray-200 rounded h-16 mb-2"></div>
                  <h3 className="font-semibold text-xs mb-1">
                    Standard Widget
                  </h3>
                  <p className="text-sm font-bold">$19.99</p>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Data table preservation"
              copyText={`<table class="break-inside-avoid w-full">
  <thead>
    <tr><th>Name</th><th>Score</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>95</td></tr>
    <tr><td>Bob</td><td>87</td></tr>
  </tbody>
</table>`}
              code={`<div class="columns-2 gap-6 max-w-3xl">
  <p class="mb-4">Report introduction text that may break normally...</p>
  
  <table class="break-inside-avoid w-full border rounded-lg overflow-hidden mb-4">
    <!-- Layout: Table moves as single unit -->
    <thead class="bg-gray-100">
      <tr><th class="p-2 text-left text-sm">Name</th><th class="p-2 text-left text-sm">Score</th></tr>
    </thead>
    <tbody>
      <tr class="border-t"><td class="p-2 text-sm">Alice</td><td class="p-2 text-sm">95</td></tr>
      <tr class="border-t"><td class="p-2 text-sm">Bob</td><td class="p-2 text-sm">87</td></tr>
      <tr class="border-t"><td class="p-2 text-sm">Carol</td><td class="p-2 text-sm">92</td></tr>
    </tbody>
  </table>
  
  <p>Report analysis continues...</p>
</div>`}
              description="Data tables stay together, preventing headers from separating from data rows which would make information unreadable."
            >
              <div className="border rounded p-4 max-w-sm">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-2 text-left">Name</th>
                      <th className="p-2 text-left">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2">Alice</td>
                      <td className="p-2">95</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Bob</td>
                      <td className="p-2">87</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ExampleCard>
          </ExampleSection>

          {/* Tips Section */}
          <TipsSection
            tips={[
              {
                bold: "Apply to containers:",
                text: "Use on wrapper elements that contain related content",
              },
              {
                bold: "Figures and tables:",
                text: "Essential for keeping charts with captions and data with headers",
              },
              {
                bold: "Product cards:",
                text: "Prevent images from separating from prices and descriptions",
              },
              {
                bold: "Fragmentation context:",
                text: "Only works in columns, print, or paged layouts",
              },
              {
                bold: "Space utilization:",
                text: "Balance protection with efficient use of page space",
              },
              {
                bold: "Test boundaries:",
                text: "Verify behavior with content that exactly fits columns",
              },
              {
                bold: "Combine with breaks:",
                text: "Use with break-before/after for complete control",
              },
              {
                bold: "Content hierarchy:",
                text: "Protect important content more than generic text",
              },
            ]}
          />

          {/* Pre-ship Checklist */}
          <div className="border border-border rounded-lg p-6 bg-card/30">
            <h3 className="text-lg font-semibold mb-4">Pre-Ship Checklist</h3>
            <div className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Layout Layer</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>
                        Fragmentation context exists (columns, print, etc)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Applied to appropriate container elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>
                        Balance between protection and space utilization
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">
                    Content & Context
                  </h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Related content grouped in protected elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Tested with various content sizes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>No excessive protection creating poor layout</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
