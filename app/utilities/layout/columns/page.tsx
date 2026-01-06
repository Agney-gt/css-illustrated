"use client";

import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function ColumnsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Columns Utilities"
            description="Multi-column layout utilities for creating newspaper-style layouts. Understand how columns distribute content and when to use them versus flex/grid."
          />

          <MentalModelSection
            title="Understanding Column Layout Architecture"
            description="CSS columns create newspaper-style text flow by breaking content into vertical columns. Unlike flex/grid, columns are content-driven — the browser decides how to distribute text across available column space."
            features={[
              "Content flows naturally between columns without manual placement",
              "Browser balances column height automatically",
              "Column count is a Layout constraint that affects content flow",
              "Gap utilities control column separation",
              "Column-span allows elements to break out of flow",
              "Responsive behavior through responsive prefixes",
            ]}
            layerAssignment="Layout Layer - Controls content flow and distribution structure"
            browserBehavior="Browser splits content into vertical columns, balancing height and automatically flowing text between column boundaries"
          />

          <ComparisonTable
            title="Columns vs Other Layout Systems"
            columns={[
              "Approach",
              "Best For",
              "Content Control",
              "Manual Placement",
              "Responsive Behavior",
            ]}
            rows={[
              {
                feature: "Columns",
                values: [
                  "Text-heavy content",
                  "Automatic flow",
                  "No",
                  "Breakpoint-based count changes",
                ],
              },
              {
                feature: "Flexbox",
                values: [
                  "Component layouts",
                  "Manual control",
                  "Yes",
                  "Direction changes, wrapping",
                ],
              },
              {
                feature: "Grid",
                values: [
                  "2D layouts",
                  "Precise control",
                  "Yes",
                  "Track definitions, auto-fit",
                ],
              },
              {
                feature: "Float (legacy)",
                values: [
                  "Simple side-by-side",
                  "Limited",
                  "Partial",
                  "Media query overrides",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Columns Utilities Overview"
            items={[
              { cls: "columns-1", desc: "Single column flow" },
              { cls: "columns-2", desc: "Two column newspaper layout" },
              { cls: "columns-3", desc: "Three column magazine layout" },
              { cls: "columns-4", desc: "Four column compact layout" },
              { cls: "columns-5", desc: "Five column dense layout" },
              { cls: "columns-auto", desc: "Browser auto-determines columns" },
              { cls: "columns-3xs", desc: "Very narrow columns (16rem)" },
              { cls: "columns-2xs", desc: "Extra narrow columns (18rem)" },
              { cls: "columns-xs", desc: "Narrow columns (20rem)" },
              { cls: "columns-sm", desc: "Small columns (24rem)" },
              { cls: "columns-md", desc: "Medium columns (28rem)" },
              { cls: "columns-lg", desc: "Large columns (32rem)" },
              { cls: "columns-xl", desc: "Extra large columns (36rem)" },
              { cls: "columns-2xl", desc: "Very large columns (42rem)" },
              { cls: "columns-3xl", desc: "Huge columns (48rem)" },
            ]}
          />

          <UtilityPlayground
            title="Columns Playground"
            description="Experiment with column counts and see how text flows between columns. Notice how the browser balances content automatically."
            options={[
              "columns-1",
              "columns-2",
              "columns-3",
              "columns-4",
              "columns-auto",
            ]}
            defaultValue="columns-2"
            buildMarkup={(columnClass, customClasses = "") => {
              const classes = [columnClass, customClasses]
                .filter(Boolean)
                .join(" ");
              return `<div class="${classes} gap-6">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
</div>`;
            }}
            renderPreview={(columnClass, customClasses = "") => {
              return (
                <div
                  className={`${columnClass} ${customClasses} gap-4 text-sm`}
                >
                  <p className="bg-blue-500/20 p-3 rounded">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p className="bg-blue-500/20 p-3 rounded">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="bg-blue-500/20 p-3 rounded">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="bg-blue-500/20 p-3 rounded">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              );
            }}
          />

          <InteractiveChallenge
            title="The Sliced Image"
            description="You are building a photo gallery using columns. However, one of the images is landing exactly on a column break, causing it to be sliced in half! Apply the `break-inside-avoid` utility to the image container to force it to stay whole."
            codeSnippet={`<div class="columns-3 gap-4">
  <div class="mb-4 bg-slate-200 p-2">Item 1</div>
  <div class="mb-4 bg-slate-200 p-2">Item 2</div>
  
  <div class="mb-4 bg-blue-100 p-4 rounded-lg {input}">
    <img src="..." class="rounded" />
    <p>Do not split me!</p>
  </div>

  <div class="mb-4 bg-slate-200 p-2">Item 4</div>
</div>`}
            options={["block", "break-inside-avoid", "overflow-hidden", "flex"]}
            correctOption="break-inside-avoid"
            renderPreview={(userClass) => (
              <div className="w-full max-w-lg h-64 border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-white dark:bg-slate-900 overflow-hidden">
                <div className="columns-3 gap-4 text-xs h-full">
                  {/* Filler Items to force the break */}
                  <div className="mb-4 p-4 bg-slate-100 dark:bg-slate-800 rounded">
                    Story A
                  </div>
                  <div className="mb-4 p-12 bg-slate-100 dark:bg-slate-800 rounded">
                    Story B (Long)
                  </div>

                  {/* The Target Item */}
                  <div
                    className={`mb-4 border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20 p-2 rounded ${userClass}`}
                  >
                    <div className="h-16 w-full bg-blue-200 dark:bg-blue-800 rounded mb-2 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold">
                      IMAGE
                    </div>
                    <p className="text-center text-blue-900 dark:text-blue-100 font-semibold">
                      {userClass === "break-inside-avoid" ? "Safe!" : "Ouch!"}
                    </p>
                  </div>

                  {/* More Filler */}
                  <div className="mb-4 p-8 bg-slate-100 dark:bg-slate-800 rounded">
                    Story C
                  </div>
                  <div className="mb-4 p-4 bg-slate-100 dark:bg-slate-800 rounded">
                    Story D
                  </div>
                  <div className="mb-4 p-6 bg-slate-100 dark:bg-slate-800 rounded">
                    Story E
                  </div>
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Newspaper Article Layout"
              description="Classic newspaper-style article with automatic text flow between columns"
              code={`<!-- Layout: Column container -->
<article class="columns-3 gap-8 text-justify">
  <!-- Content: Automatically flows -->
  <h2 class="column-span-all text-2xl font-bold mb-6">Breaking News Story</h2>
  <p class="mb-4">Article content flows naturally between columns...</p>
  <p>More content continues in next available column...</p>
</article>`}
            >
              <article className="columns-3 gap-6 text-justify max-h-64 overflow-hidden">
                <h2 className="column-span-all text-lg font-bold mb-4">
                  Breaking News
                </h2>
                <p className="mb-3 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="mb-3 text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mb-3 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-sm text-muted-foreground">
                  Article continues...
                </p>
              </article>
            </ExampleCard>

            <ExampleCard
              title="Product Gallery with Captions"
              description="Product images that flow into columns with captions, automatically balancing height"
              code={`<!-- Layout: Column container with image flow -->
<div class="columns-4 gap-4">
  <!-- Shape: Image containers -->
  <div class="mb-4 break-inside-avoid">
    <img class="w-full rounded-lg mb-2" src="product1.jpg" alt="Product">
    <!-- Content: Caption text -->
    <p class="text-sm text-center">Product Name $29</p>
  </div>
  <!-- More products... -->
</div>`}
            >
              <div className="columns-4 gap-3 max-h-48">
                <div className="mb-3 break-inside-avoid">
                  <div className="bg-slate-200 rounded aspect-square mb-2"></div>
                  <p className="text-xs text-center">Product A $29</p>
                </div>
                <div className="mb-3 break-inside-avoid">
                  <div className="bg-slate-200 rounded aspect-square mb-2"></div>
                  <p className="text-xs text-center">Product B $39</p>
                </div>
                <div className="mb-3 break-inside-avoid">
                  <div className="bg-slate-200 rounded aspect-square mb-2"></div>
                  <p className="text-xs text-center">Product C $49</p>
                </div>
                <div className="mb-3 break-inside-avoid">
                  <div className="bg-slate-200 rounded aspect-square mb-2"></div>
                  <p className="text-xs text-center">Product D $59</p>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Documentation TOC with Sections"
              description="Table of contents where sections can span across all columns while maintaining flow"
              code={`<!-- Layout: Responsive columns -->
<div class="columns-2 md:columns-3 gap-6">
  <!-- Content: Section headers span full width -->
  <h3 class="column-span-all text-lg font-semibold mb-3">Getting Started</h3>
  <ul class="mb-4">
    <li>Installation guide</li>
    <li>Quick start</li>
  </ul>
  
  <h3 class="column-span-all text-lg font-semibold mb-3">Advanced Topics</h3>
  <ul>
    <li>Performance optimization</li>
    <li>Custom configurations</li>
  </ul>
</div>`}
            >
              <div className="columns-2 gap-4 max-h-48">
                <h3 className="column-span-all text-base font-semibold mb-2">
                  Getting Started
                </h3>
                <ul className="mb-3 text-sm space-y-1">
                  <li>• Installation</li>
                  <li>• Quick Start</li>
                  <li>• Basic Usage</li>
                </ul>
                <h3 className="column-span-all text-base font-semibold mb-2">
                  Components
                </h3>
                <ul className="text-sm space-y-1">
                  <li>• Buttons</li>
                  <li>• Forms</li>
                  <li>• Cards</li>
                </ul>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Recipe Card Layout"
              description="Recipe ingredients and instructions that flow naturally in magazine style"
              code={`<!-- Layout: Magazine-style columns -->
<div class="columns-2 gap-8">
  <!-- Content: Recipe sections -->
  <section>
    <h4 class="font-semibold mb-3">Ingredients</h4>
    <ul class="space-y-2">
      <li>2 cups flour</li>
      <li>1 cup sugar</li>
    </ul>
  </section>
  
  <section>
    <h4 class="font-semibold mb-3">Instructions</h4>
    <ol class="space-y-2">
      <li>Mix dry ingredients</li>
      <li>Add wet ingredients</li>
    </ol>
  </section>
</div>`}
            >
              <div className="columns-2 gap-6">
                <section>
                  <h4 className="font-semibold mb-2 text-sm">Ingredients</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• 2 cups flour</li>
                    <li>• 1 cup sugar</li>
                    <li>• 3 eggs</li>
                    <li>• 1/2 cup butter</li>
                  </ul>
                </section>
                <section>
                  <h4 className="font-semibold mb-2 text-sm">Instructions</h4>
                  <ol className="space-y-1 text-xs">
                    <li>1. Preheat oven to 350°F</li>
                    <li>2. Mix dry ingredients</li>
                    <li>3. Add wet ingredients</li>
                    <li>4. Bake for 30 minutes</li>
                  </ol>
                </section>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Columns Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using columns for component layouts",
                reason:
                  "Columns are designed for text flow, not precise component positioning. Components get unpredictably broken across column boundaries.",
                example: `<div class="columns-2">
  <div class="card">Card gets split across columns</div>
  <div class="card">Another broken card</div>
</div>`,
                level: "critical",
              },
              {
                title: "Missing column-gap causing touching text",
                reason:
                  "Without explicit gap, columns touch each other creating poor readability and visual confusion.",
                example: `<div class="columns-2">
  <!-- Text touching between columns -->
  <p>Column one text</p>
  <p>Column two text</p>
</div>`,
                level: "warning",
              },
              {
                title: "Images breaking awkwardly across columns",
                reason:
                  "Images don't know column boundaries and can be split across columns unless explicitly prevented.",
                example: `<div class="columns-2">
  <img src="wide-image.jpg" /> <!-- Breaks across columns -->
</div>`,
                level: "warning",
              },
              {
                title: "Inline elements interfering with column flow",
                reason:
                  "Inline-block or floated elements inside columns can disrupt natural text flow and create uneven columns.",
                example: `<div class="columns-2">
  <p>Text</p>
  <div class="inline-block">Disrupts flow</div>
  <p>More text</p>
</div>`,
                level: "warning",
              },
              {
                title: "Fixed height containers cutting off content",
                reason:
                  "Columns need vertical space to balance. Fixed height can truncate content before it flows to next column.",
                example: `<div class="columns-2 h-32 overflow-hidden">
  <!-- Content gets clipped -->
</div>`,
                level: "critical",
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Use for text content:",
                text: "Columns excel at text-heavy layouts like articles, documentation, and news",
              },
              {
                bold: "Prevent content breaks:",
                text: "Use break-inside-avoid on images, code blocks, and components that must stay together",
              },
              {
                bold: "Span when needed:",
                text: "Use column-span-all for headings that should extend across all columns",
              },
              {
                bold: "Set gaps explicitly:",
                text: "Always define column-gap to ensure readable separation between columns",
              },
              {
                bold: "Test content variations:",
                text: "Columns behave differently with varying content lengths—test with realistic content",
              },
              {
                bold: "Consider responsive needs:",
                text: "Use responsive prefixes to reduce column count on smaller screens",
              },
              {
                bold: "Avoid for UI components:",
                text: "Use flexbox or grid for component layouts, columns for content flow",
              },
              {
                bold: "Mind the overflow:",
                text: "Ensure containers have adequate height or use min-h-* for flexible column balancing",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
