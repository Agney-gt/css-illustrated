"use client";

import React from "react";
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

export default function AlignContentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Align Content"
            description="Control how rows are positioned in multi-line flex and grid containers. Essential for packing wrapped items tightly or spacing them evenly when there is extra vertical space."
          />

          <MentalModelSection
            title="The Multi-Line Manager"
            description="Align Content (`content-*`) is the manager for *lines*, not items. It only activates when your container has wrapping enabled (`flex-wrap`) AND has extra vertical height. It decides whether those lines should pack together in the center, spread apart to edges, or stretch to fill the void."
            features={[
              "Only works on multi-line containers (flex-wrap or multi-row grid)",
              "Does nothing if there is only one line of content",
              "Controls the distribution of space between rows",
              "Commonly used for tag clouds, galleries, and dashboard grids",
              "Counterpart to `justify-content` but for the cross-axis (vertical in rows)",
            ]}
            layerAssignment="Layout Layer - Distributes secondary axis space among multiple lines"
            browserBehavior="If flex items wrap into multiple lines, the browser uses this property to determine how to distribute the remaining empty space in the cross axis."
          />

          <ComparisonTable
            title="Align Items vs Align Content"
            columns={["Property", "Targets", "Requirement", "Visual Effect"]}
            rows={[
              {
                feature: "align-content",
                values: [
                  "Entire Rows/Lines",
                  "Wrapping + Extra Height",
                  "Packs rows together or spreads them",
                ],
              },
              {
                feature: "align-items",
                values: [
                  "Individual Items",
                  "None",
                  "Aligns items within their specific line",
                ],
              },
              {
                feature: "justify-content",
                values: [
                  "Main Axis Distribution",
                  "None",
                  "Distributes items horizontally (in row)",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Align Content Utilities"
            items={[
              { cls: "content-center", desc: "Pack rows in the center" },
              { cls: "content-start", desc: "Pack rows at the start" },
              { cls: "content-end", desc: "Pack rows at the end" },
              { cls: "content-between", desc: "Equal space between rows" },
              { cls: "content-around", desc: "Equal space around rows" },
              { cls: "content-evenly", desc: "Equal space everywhere" },
              {
                cls: "content-stretch",
                desc: "Stretch rows to fill height (Default)",
              },
            ]}
          />

          <UtilityPlayground
            title="Align Content Playground"
            description="See how multiple lines of content react to different alignment utilities. Note: We've forced the container to be taller than the content so you can see the effect."
            options={[
              "content-start",
              "content-center",
              "content-end",
              "content-between",
              "content-around",
              "content-evenly",
              "content-stretch",
            ]}
            defaultValue="content-start"
            buildMarkup={(
              value
            ) => `<div class="flex flex-wrap h-64 ${value} gap-4 bg-slate-100 p-4">
  <div class="w-1/3 h-12 bg-blue-500">1</div>
  <div class="w-1/3 h-12 bg-blue-500">2</div>
  <div class="w-1/3 h-12 bg-blue-500">3</div>
  </div>`}
            renderPreview={(value) => (
              <div
                className={`flex flex-wrap h-64 ${value} gap-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-32 h-12 bg-blue-500 text-white flex items-center justify-center rounded font-bold shadow-sm"
                  >
                    Item {i + 1}
                  </div>
                ))}
              </div>
            )}
          />
          
          <InteractiveChallenge
            title="The Gapped Tag Cloud"
            description="You have a container of tags with a fixed height. The tags wrap to a second line, but because of the default behavior (`content-stretch`), there is a huge, ugly gap between the two rows. Use `content-center` to pack the rows tightly together in the middle of the container."
            codeSnippet={`<div class="flex flex-wrap h-48 bg-slate-100 rounded-lg p-4 {input} gap-2">
    <span class="badge">React</span>
    <span class="badge">Vue</span>
    <span class="badge">Angular</span>
    <span class="badge">Svelte</span>
    <span class="badge">Next.js</span>
    <span class="badge">Nuxt</span>
    <span class="badge">Remix</span>
  </div>`}
            options={[
              "items-center",
              "content-center",
              "justify-center",
              "content-between",
            ]}
            correctOption="content-center"
            renderPreview={(userClass) => (
              <div
                className={`w-full max-w-md h-48 bg-slate-100 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-4 flex flex-wrap gap-2 ${userClass}`}
              >
                {[
                  "React",
                  "Vue",
                  "Angular",
                  "Svelte",
                  "Next.js",
                  "Nuxt",
                  "Remix",
                  "Gatsby",
                  "Astro",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium shadow-sm text-slate-700 dark:text-slate-200 h-fit"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Centered Footer Grid"
              description="A footer with multiple links that wraps on smaller screens. Using `content-center` keeps the block of links centered vertically if the footer has a min-height."
              code={`<footer class="h-40 flex flex-wrap content-center justify-center gap-6 bg-slate-900 text-white">
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
  <a href="#">Privacy</a>
  <a href="#">Terms</a>
</footer>`}
            >
              <div className="h-40 w-full bg-slate-900 rounded-lg flex flex-wrap content-center justify-center gap-x-6 gap-y-2 text-slate-300 text-sm">
                <a href="#" className="hover:text-white">
                  About
                </a>
                <a href="#" className="hover:text-white">
                  Services
                </a>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Spaced Dashboard Cards"
              description="Using `content-between` to push rows of dashboard cards to the top and bottom edges of the viewport."
              code={`<div class="h-64 flex flex-wrap content-between">
  <div class="w-full">Header Stats...</div>
  
  <div class="w-full">Footer Actions...</div>
</div>`}
            >
              <div className="h-64 bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg p-4 flex flex-wrap content-between">
                <div className="w-full flex gap-4">
                  <div className="flex-1 h-16 bg-white dark:bg-slate-700 rounded shadow-sm"></div>
                  <div className="flex-1 h-16 bg-white dark:bg-slate-700 rounded shadow-sm"></div>
                </div>
                <div className="w-full h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded flex items-center justify-center text-sm font-medium">
                  Action Bar (Pushed to bottom)
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using on Single Lines",
                reason:
                  "`align-content` has NO effect if there is only one line of flex items. Use `align-items` instead for single-line centering.",
                example: `<div class="flex content-center">...</div> `,
                level: "critical",
              },
              {
                title: "Forgetting Flex Wrap",
                reason:
                  "By default, flexbox tries to fit everything on one line. You must add `flex-wrap` for `align-content` to trigger.",
                example: `<div class="flex content-center">...</div> `,
                level: "warning",
              },
              {
                title: "No Container Height",
                reason:
                  "If the container height is `auto` (default), it shrinks to fit the content. There is no 'extra space' to distribute, so `content-*` does nothing visibly.",
                example: `<div class="flex flex-wrap content-center h-auto">...</div>`,
                level: "info",
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Pack it tight:",
                text: "Use `content-start` (or `center`) when you have a tall container but want rows to sit closely together, avoiding the 'drift' effect of `stretch`.",
              },
              {
                bold: "Grid friendly:",
                text: "This works exactly the same in CSS Grid (`grid` layouts) for aligning grid tracks in the block axis.",
              },
              {
                bold: "Responsive switch:",
                text: "Often used as `content-start md:content-center` to change layout density on larger screens.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
