import React from "react"
import { PageHero } from "@/components/shared/page-hero"
import { MentalModelSection } from "@/components/shared/mental-model-section"
import { ComparisonTable } from "@/components/shared/comparison-table"
import { UtilityGrid } from "@/components/shared/utility-grid"
import { UtilityPlayground } from "@/components/shared/utility_playground"
import { ExampleSection, ExampleCard } from "@/components/shared/example-section"
import { TipsSection } from "@/components/shared/tips-section"
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section"

export default function OutlineOffsetPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero 
        title="Outline Offset Utilities"
        description="Complete guide to CSS outline offset utilities. Control the space between elements and their outlines for better visual separation and accessibility without affecting layout."
      />

      <MentalModelSection
        title="Understanding Outline Offset"
        description="Outline offset creates space between the element and its outline, preventing overlap with borders or other elements. This spacing improves visibility and reduces visual clutter in complex interfaces."
        features={[
          "Creates space between element and outline border",
          "Measured in pixels from 0 to 8px in Tailwind",
          "Prevents outline overlap with borders and shadows",
          "Improves accessibility by making focus indicators more visible",
          "Works with all outline styles and colors"
        ]}
        layerAssignment="Outline Layer - Spatial separation and visual breathing room"
        browserBehavior="Browser renders outline offset as measured distance from element border edge, extending into surrounding space"
      />

      <ComparisonTable
        title="Outline Offset vs Border Spacing"
        columns={["Property", "Purpose", "Visual Impact", "Layout Effect"]}
        rows={[
          {
            feature: "Outline Offset",
            values: ["Space around outline", "Creates breathing room", "No layout impact"]
          },
          {
            feature: "Border Spacing", 
            values: ["Space between borders", "Table cell separation", "Affects box model"]
          }
        ]}
      />

      <UtilityGrid
        title="Outline Offset Utilities"
        items={[
          { cls: "outline-offset-0", desc: "No offset" },
          { cls: "outline-offset-1", desc: "1px offset" },
          { cls: "outline-offset-2", desc: "2px offset" },
          { cls: "outline-offset-4", desc: "4px offset" },
          { cls: "outline-offset-8", desc: "8px offset" }
        ]}
      />

      <section className="space-y-6 border-t pt-8">
        <h2 className="text-3xl font-bold">Interactive Playground</h2>
        <p className="text-muted-foreground">Experiment with different outline offsets and see how they affect visual separation and accessibility.</p>

        <UtilityPlayground
          title="Outline Offset Playground"
          description="Test outline offset utilities with different border styles to understand spacing and visual effects."
          options={["outline-offset-0", "outline-offset-1", "outline-offset-2", "outline-offset-4", "outline-offset-8"]}
          defaultValue="outline-offset-2"
          buildMarkup={(outlineOffset) => {
            return `<button class="outline-2 outline-blue-500 ${outlineOffset} border-2 border-gray-300 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
  Offset Button
</button>`
          }}
          renderPreview={(outlineOffset) => {
            return (
              <button 
                className={`outline-2 outline-blue-500 ${outlineOffset} border-2 border-gray-300 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded`}
              >
                Offset Button
              </button>
            )
          }}
        />
      </section>

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Button with Border"
          description="Prevent outline overlap with element borders"
          code={`<button class="outline-2 outline-blue-500 outline-offset-2 border-2 border-gray-300 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
  Clear Focus
</button>`}
        >
          <button className="outline-2 outline-blue-500 outline-offset-2 border-2 border-gray-300 focus:outline-4 focus:outline-blue-600 px-4 py-2 rounded">
            Clear Focus
          </button>
        </ExampleCard>

        <ExampleCard
          title="Input Field Enhancement"
          description="Better focus separation for form inputs"
          code={`<input class="outline-2 outline-green-500 outline-offset-4 border border-gray-300 focus:outline-4 focus:outline-green-600 px-3 py-2 rounded" placeholder="Email address" />`}
        >
          <input 
            className="outline-2 outline-green-500 outline-offset-4 border border-gray-300 focus:outline-4 focus:outline-green-600 px-3 py-2 rounded" 
            placeholder="Email address" 
          />
        </ExampleCard>

        <ExampleCard
          title="Card Component Focus"
          description="Dramatic offset for card-level focus"
          code={`<div class="outline-4 outline-purple-500 outline-offset-8 border border-gray-200 rounded-lg p-4 focus:outline-8 focus:outline-purple-600">
  Card Content
</div>`}
        >
          <div className="outline-4 outline-purple-500 outline-offset-8 border border-gray-200 rounded-lg p-4 focus:outline-8 focus:outline-purple-600">
            Card Content
          </div>
        </ExampleCard>

        <ExampleCard
          title="Link Emphasis"
          description="Subtle offset for text links"
          code={`<a href="#" class="outline-1 outline-blue-600 outline-offset-1 focus:outline-2 focus:outline-blue-700">
  Link with offset
</a>`}
        >
          <a href="#" className="outline-1 outline-blue-600 outline-offset-1 focus:outline-2 focus:outline-blue-700">
            Link with offset
          </a>
        </ExampleCard>

        <ExampleCard
          title="Navigation Item"
          description="Clear separation for navigation elements"
          code={`<nav class="inline-block outline-2 outline-indigo-500 outline-offset-3 border border-indigo-200 rounded focus:outline-4 focus:outline-indigo-600 p-2">
  Nav Item
</nav>`}
        >
          <nav className="inline-block outline-2 outline-indigo-500 outline-offset-3 border border-indigo-200 rounded focus:outline-4 focus:outline-indigo-600 p-2">
            Nav Item
          </nav>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Excessive offsets",
            reason: "Large offsets can create visual disconnect between element and focus indicator, confusing users.",
            example: `<button class="outline-offset-16">Too far away</button>`
          },
          {
            title: "No offset with borders",
            reason: "Without offset, outlines overlap borders making them hard to distinguish.",
            example: `<button class="outline-2 border-2 outline-offset-0">Overlapped</button>`
          },
          {
            title: "Inconsistent offset usage",
            reason: "Use consistent offset values across similar elements for predictable behavior.",
            example: `<button class="outline-offset-2">Inconsistent</button>`
          },
          {
            title: "Offset without purpose",
            reason: "Only use offsets when they improve visibility or prevent overlap, not for decoration.",
            example: `<div class="outline-offset-4 outline-none">No purpose</div>`
          }
        ]}
      />

      <TipsSection 
        tips={[
          { bold: "Border separation:", text: "Use offset-2+ when elements have borders" },
          { bold: "Consistent spacing:", text: "Use consistent offset values across your interface" },
          { bold: "Visual balance:", text: "Balance offset size with outline width for best results" },
          { bold: "Testing required:", text: "Test offsets with different screen sizes and densities" },
          { bold: "Accessibility focus:", text: "Use offsets to make focus indicators more visible for all users" }
        ]}
      />
    </div>
  )
}
