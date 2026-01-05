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

const breakBeforeClasses = [
  { cls: "break-before-auto", desc: "Auto break behavior" },
  { cls: "break-before-avoid", desc: "Avoid breaking" },
  { cls: "break-before-all", desc: "Always break before" },
  { cls: "break-before-avoid-page", desc: "Avoid page break" },
  { cls: "break-before-page", desc: "Force page break" },
  { cls: "break-before-left", desc: "Break to left page" },
  { cls: "break-before-right", desc: "Break to right page" },
  { cls: "break-before-column", desc: "Break to next column" },
];

export default function BreakBeforePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          {/* Hero Section */}
          <PageHero
            title="Break Before"
            description="You should reach for this utility when you need to force content to start on a new page, column, or line before a specific element. This is essential for creating logical document boundaries and proper print layouts. This is a Layout layer concern that controls pagination flow."
          />

          {/* Mental Model */}
          <MentalModelSection
            title="How Break-Before Controls Flow"
            description="Break-before utilities insert pagination hints before elements, essentially telling the browser to start a new page/column before rendering this element. This differs from break-after because it affects what comes before, not what comes after."
            features={[
              "Breaks occur before the element they're applied to",
              "Creates logical boundaries for document structure",
              "Only works in fragmentation contexts (print, columns, etc)",
              "Complements break-after for precise pagination control",
            ]}
            layerAssignment="Layout layer - manages content flow and pagination before elements"
            browserBehavior="Browser evaluates break-before before rendering the element, potentially moving it to next fragment to maintain document integrity."
          />

          {/* Utility Classes */}
          <UtilityGrid
            title="Available Classes"
            items={breakBeforeClasses}
            prefix=""
          />

          {/* Interactive Playground */}
          <UtilityPlayground
            title="Break Before Playground"
            description="Test how break-before affects content flow. Notice how the element with break-before always starts on a new column/page, while content before it stays put."
            options={[
              "break-before-auto",
              "break-before-column",
              "break-before-page",
              "break-before-avoid",
            ]}
            defaultValue="break-before-auto"
            buildMarkup={(value) => `<div class="columns-2 gap-4 max-w-lg">
  <p class="p-3 bg-slate-100 rounded">Content before...</p>
  <p class="${value} p-3 bg-blue-100 rounded">This starts new</p>
  <p class="p-3 bg-slate-100 rounded">More content follows...</p>
</div>`}
            renderPreview={(value) => (
              <div className="columns-2 gap-4 max-w-lg">
                <p className="p-3 bg-slate-100 rounded text-sm">
                  Content before that demonstrates normal flow when no explicit
                  break is specified.
                </p>
                <p className={`${value} p-3 bg-blue-100 rounded text-sm`}>
                  This element may start new
                </p>
                <p className="p-3 bg-slate-100 rounded text-sm">
                  More content continues after the break
                </p>
                <p className="p-3 bg-slate-100 rounded text-sm">
                  Additional text to show flow behavior
                </p>
              </div>
            )}
            optionLabel={(v) => v.replace("break-before-", "")}
          />

          <InteractiveChallenge
            title="The Bad Page Start"
            description="You are designing a print stylesheet. A major section heading ('Chapter 2') is starting at the very bottom of the first page, leaving no room for its content. This looks unprofessional. Use `break-before-page` on the heading to force it to start fresh on the next page."
            codeSnippet={`<div class="space-y-4">
  <div class="h-32 p-4 bg-slate-100 rounded">End of Chapter 1 content...</div>
  
  <h2 class="text-xl font-bold {input}">
    Chapter 2: New Beginnings
  </h2>
  
  <p>The story continues on a fresh page...</p>
</div>`}
            options={[
              "break-before-auto",
              "break-before-avoid",
              "break-before-column",
              "break-before-page",
            ]}
            correctOption="break-before-page"
            renderPreview={(userClass) => (
              <div className="w-full max-w-md h-80 bg-slate-200/50 dark:bg-slate-900/50 rounded-xl p-4 overflow-hidden relative border border-dashed border-slate-300 dark:border-slate-700">
                <div className="absolute top-2 right-2 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Print Preview Mode
                </div>

                {/* Simulated "Page 1" */}
                <div className="bg-white dark:bg-slate-800 shadow-sm p-6 mb-4 h-48 rounded flex flex-col justify-end">
                  <p className="text-slate-400 text-xs mb-2">
                    ...previous content ending.
                  </p>
                  <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full mb-1"></div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-2/3 mb-4"></div>

                  {/* The Target Element - If NOT fixed, it renders here */}
                  {userClass !== "break-before-page" && (
                    <div className="mt-auto pt-4 border-t border-red-200 bg-red-50 dark:bg-red-900/10 p-2 rounded">
                      <h2 className="text-lg font-bold text-red-600 dark:text-red-400">
                        Chapter 2
                      </h2>
                      <p className="text-xs text-red-500">
                        Starts at bottom (Bad)
                      </p>
                    </div>
                  )}
                </div>

                {/* Simulated "Page 2" */}
                <div className="bg-white dark:bg-slate-800 shadow-sm p-6 h-48 rounded relative">
                  {userClass === "break-before-page" ? (
                    <div className="animate-in slide-in-from-top-4 fade-in duration-500">
                      <h2 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2">
                        Chapter 2
                      </h2>
                      <p className="text-xs text-slate-500 mb-2">
                        Starts fresh on new page (Good!)
                      </p>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-full mb-1"></div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-700 rounded w-3/4"></div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-slate-300 text-xs italic">
                      Page 2 content...
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          {/* Common Mistakes */}
          <CommonMistakesSection
            mistakes={[
              {
                title: "Using breaks without fragmentation context",
                reason:
                  "Break-before only works in paginated contexts like columns, print, or multi-page layouts. Normal single-page flow ignores these hints.",
                example: '<div class="break-before-column">Wont work</div>',
              },
              {
                title: "Expecting exact break positioning",
                reason:
                  "Browsers treat break-before as suggestions. They may move breaks to avoid orphaned content or create better page flow.",
                example:
                  '<h2 class="break-before-page">May not start exactly here</h2>',
              },
              {
                title: "Overusing break-before-page",
                reason:
                  "Forcing page breaks before every heading creates poor user experience with many short pages. Use for major document boundaries.",
                example: '<h3 class="break-before-page">Too many pages</h3>',
              },
              {
                title: "Mixing with break-after incorrectly",
                reason:
                  "Applying break-before and break-after to adjacent elements creates conflicting instructions that browsers resolve unpredictably.",
                example:
                  '<p class="break-after-column"></p><p class="break-before-column"></p>',
              },
            ]}
          />

          {/* Comparison Table */}
          <ComparisonTable
            title="Break Before vs Break After"
            columns={["Aspect", "Break Before", "Break After", "Best Practice"]}
            rows={[
              {
                feature: "Element relationship",
                values: [
                  "Affects what comes BEFORE",
                  "Affects what comes AFTER",
                  "Use based on content logic",
                ],
              },
              {
                feature: "Common use case",
                values: [
                  "Start new chapter/section",
                  "End chapter/section cleanly",
                  "Match document structure",
                ],
              },
              {
                feature: "Heading usage",
                values: [
                  "Apply to heading itself",
                  "Apply to element before heading",
                  "Prefer break-before for headings",
                ],
              },
              {
                feature: "Print layout",
                values: [
                  "Force new page start",
                  "Clean page endings",
                  "Combine for complete control",
                ],
              },
            ]}
          />

          {/* Real World Examples */}
          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Chapter headings in print"
              copyText={`<h2 class="break-before-page">Chapter 1</h2>
<p>Chapter content starts on new page</p>`}
              code={`<article class="max-w-prose mx-auto">
  <!-- Layout: Previous chapter content -->
  
  <h2 class="break-before-page text-2xl font-bold mb-4">Chapter 1</h2>
  <!-- Layout: Forces new page before this heading -->
  <p class="mb-6">Chapter content that starts on a fresh page...</p>
  
  <h2 class="break-before-page text-2xl font-bold mb-4">Chapter 2</h2>
  <!-- Layout: New page for next major section -->
  <p class="mb-6">Next chapter content...</p>
</article>`}
              description="Using break-before-page for chapter headings ensures each major section starts on a fresh page in print layouts."
            >
              <div className="max-w-prose space-y-4">
                <div className="border-b-2 border-dashed border-gray-300 pb-2">
                  <p className="text-sm text-gray-500">
                    End of previous chapter...
                  </p>
                </div>
                <div className="border-t-2 border-gray-300 pt-4">
                  <h2 className="text-xl font-bold">Chapter 1</h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Starts on new page...
                  </p>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Multi-column article sections"
              copyText={`<section>
  <h3 class="break-before-column">New Section</h3>
  <p>Section content...</p>
</section>`}
              code={`<article class="columns-3 gap-6 max-w-4xl">
  <section class="mb-6">
    <h3 class="text-lg font-semibold mb-3">Introduction</h3>
    <p class="text-sm">Introduction content that flows across columns...</p>
  </section>
  
  <section class="mb-6">
    <h3 class="break-before-column text-lg font-semibold mb-3">Methods</h3>
    <!-- Layout: New column for major section -->
    <p class="text-sm">Method section starts in fresh column...</p>
  </section>
  
  <section class="mb-6">
    <h3 class="break-before-column text-lg font-semibold mb-3">Results</h3>
    <!-- Layout: Another column break for clarity -->
    <p class="text-sm">Results in their own column...</p>
  </section>
</article>`}
              description="Starting each major section in a new column creates clear visual separation in multi-column layouts."
            >
              <div className="columns-3 gap-2 max-w-lg border rounded p-4">
                <div className="border-r border-gray-300 pr-2">
                  <h3 className="text-sm font-bold">Introduction</h3>
                  <p className="text-xs mt-1">Intro content...</p>
                </div>
                <div className="border-r border-gray-300 px-2">
                  <h3 className="text-sm font-bold">Methods</h3>
                  <p className="text-xs mt-1">New column start...</p>
                </div>
                <div className="pl-2">
                  <h3 className="text-sm font-bold">Results</h3>
                  <p className="text-xs mt-1">Fresh column...</p>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Avoiding breaks before important content"
              copyText={`<figure class="break-before-avoid">
  <img src="..." alt="Critical chart" />
  <figcaption>Important data</figcaption>
</figure>`}
              code={`<div class="columns-2 gap-4 max-w-lg">
  <p class="p-3 bg-slate-100 rounded">Content that might break...</p>
  
  <figure class="break-before-avoid border-2 border-blue-200 p-4 rounded">
    <!-- Layout: Prevents column break before this figure -->
    <img class="w-full h-24 object-cover rounded mb-2" src="..." alt="Important chart" />
    <figcaption class="text-sm font-medium">Critical sales data Q4</figcaption>
    <p class="text-xs text-gray-600 mt-1">This figure stays with preceding content</p>
  </figure>
  
  <p class="p-3 bg-slate-100 rounded">Following content...</p>
</div>`}
              description="Using break-before-avoid to keep important figures with preceding content, preventing awkward column breaks."
            >
              <div className="columns-2 gap-4 max-w-lg border rounded p-4">
                <p className="p-2 bg-gray-100 rounded text-sm">
                  Content that flows...
                </p>
                <div className="border-2 border-blue-200 p-3 rounded col-span-2">
                  <div className="bg-gray-200 rounded h-20 mb-2"></div>
                  <figcaption className="text-sm font-medium">
                    Critical data stays together
                  </figcaption>
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          {/* Tips Section */}
          <TipsSection
            tips={[
              {
                bold: "Fragmentation context required:",
                text: "Break-before only works in print, columns, or multi-page layouts",
              },
              {
                bold: "Use for document structure:",
                text: "Perfect for chapters, sections, and major content boundaries",
              },
              {
                bold: "Headings benefit most:",
                text: "Apply to headings rather than paragraphs for semantic clarity",
              },
              {
                bold: "Combine with break-after:",
                text: "Use both for complete control of content flow",
              },
              {
                bold: "Test in print preview:",
                text: "Always validate print layouts with browser print preview tools",
              },
              {
                bold: "Avoid overuse:",
                text: "Too many breaks create fragmented reading experience",
              },
              {
                bold: "Consider widows/orphans:",
                text: "Text flow properties complement break utilities",
              },
              {
                bold: "Semantic hierarchy:",
                text: "Match break usage to document structure logic",
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
                      <span>Breaks align with document hierarchy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>
                        No conflicting break-before/break-after combinations
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
                      <span>Tested in target media (screen, print, etc)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Document structure is preserved</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>No excessive fragmentation of content</span>
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
