"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHero } from "@/components/shared/page-hero"
import { UtilityGrid } from "@/components/shared/utility-grid"
import { UtilityPlayground } from "@/components/shared/utility_playground"
import { ExampleSection, ExampleCard } from "@/components/shared/example-section"
import { TipsSection } from "@/components/shared/tips-section"
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section"
import { MentalModelSection } from "@/components/shared/mental-model-section"
import { ComparisonTable } from "@/components/shared/comparison-table"
import CodeBlock from "@/app/utilities/components/code-block"
import { alignItemsUtilities } from "@/lib/utilities"

export default function AlignItemsPage() {
  const [selectedAlignment, setSelectedAlignment] = useState("items-center")
  const [isFlex, setIsFlex] = useState(true)

  const utilityItems = alignItemsUtilities.classes.map(item => ({
    cls: item.class,
    desc: item.description
  }))

  const tips = [
    { bold: "items-start:", text: "Perfect for top-aligning cards in a flex row" },
    { bold: "items-center:", text: "Ideal for vertically centering navigation items" },
    { bold: "items-stretch:", text: "Great for equal-height card layouts" },
    { bold: "Combine with gap:", text: "Use with spacing utilities for consistent layouts" }
  ]

  const commonMistakes = [
    {
      title: "Using vertical-align with flexbox",
      reason: "vertical-align doesn't work with flexbox items. Use align-items instead.",
      example: `<div class="flex">
  <div class="vertical-align-middle">❌ Won't work</div>
</div>`,
      level: "critical" as const
    },
    {
      title: "Forgetting height on flex container",
      reason: "Without height, align-items has no space to work with in column direction.",
      example: `<div class="flex items-center">❌ No height</div>`,
      level: "warning" as const
    },
    {
      title: "Using items-center on single item",
      reason: "Single item has nothing to align with, so alignment appears to have no effect.",
      example: `<div class="flex items-center">
  <div>Only one item</div>
</div>`,
      level: "info" as const
    }
  ]

  const comparisonData = {
    title: "Alignment Properties Comparison",
    columns: ["Property", "Axis", "Container", "Items", "Use Case"],
    rows: [
      {
        feature: "align-items",
        values: ["Cross axis", "Flex/Grid container", "Child items", "Vertical alignment in row", "Center nav items"]
      },
      {
        feature: "justify-items",
        values: ["Main/Inline axis", "Grid container", "Grid items", "Horizontal grid alignment", "Grid cell positioning"]
      },
      {
        feature: "justify-content",
        values: ["Main axis", "Flex/Grid container", "All items", "Distribute extra space", "Space between cards"]
      },
      {
        feature: "align-content",
        values: ["Cross axis", "Flex/Grid container", "Line groups", "Multi-line alignment", "Wrap distribution"]
      }
    ]
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero 
            title={alignItemsUtilities.title}
            description={alignItemsUtilities.description}
          />

          <MentalModelSection
            title="Understanding Cross-Axis Alignment"
            description="Align-items controls how flex/grid items are positioned along the cross axis (perpendicular to the main flow direction)."
            features={[
              "Works on flex and grid containers (not the items themselves)",
              "Cross axis is vertical in flex-row, horizontal in flex-column",
              "Default value is 'stretch' for flex containers",
              "Individual items can override with align-self"
            ]}
            layerAssignment="Applied to parent container, affects child items"
            browserBehavior="Browser calculates cross-axis size and distributes items according to the specified alignment rule"
          />

          <UtilityGrid 
            title="Available Classes"
            items={utilityItems}
            prefix="items-"
          />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different align-items values and customize the layout with additional classes."
            options={alignItemsUtilities.classes.map(item => item.class)}
            defaultValue="items-center"
            defaultCustomClasses="h-48 gap-4 p-4 border-2 border-dashed border-gray-300"
            buildMarkup={(utilityClass, customClasses = "") => {
              const isFlex = customClasses.includes("flex") || !customClasses.includes("grid")
              const layoutClass = isFlex ? "flex" : "grid grid-cols-3"
              const classes = [layoutClass, utilityClass, customClasses].filter(Boolean).join(" ")
              
              return `<div class="${classes}">
  <div class="bg-blue-500 text-white p-4 rounded">Short</div>
  <div class="bg-green-500 text-white p-4 rounded">Medium<br/>Content</div>
  <div class="bg-purple-500 text-white p-4 rounded">Very<br/>Long<br/>Content<br/>Here</div>
  ${isFlex ? '<div class="bg-orange-500 text-white p-4 rounded">Extra</div>' : ''}
</div>`
            }}
            renderPreview={(utilityClass, customClasses = "") => {
              const isFlex = customClasses.includes("flex") || !customClasses.includes("grid")
              const layoutClass = isFlex ? "flex" : "grid grid-cols-3"
              const classes = [layoutClass, utilityClass, customClasses].filter(Boolean).join(" ")
              
              return (
                <div className={classes}>
                  <div className="bg-blue-500 text-white p-4 rounded">Short</div>
                  <div className="bg-green-500 text-white p-4 rounded">Medium<br/>Content</div>
                  <div className="bg-purple-500 text-white p-4 rounded">Very<br/>Long<br/>Content<br/>Here</div>
                  {isFlex && <div className="bg-orange-500 text-white p-4 rounded">Extra</div>}
                </div>
              )
            }}
            optionLabel={(value) => value.replace("items-", "").replace("-", " ")}
          />

          <ComparisonTable {...comparisonData} />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Navigation Bar"
              description="Vertically center navigation items"
              code={`<nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
  <div className="font-bold">Logo</div>
  <div className="flex gap-6">
    <a href="#" className="hover:underline">Home</a>
    <a href="#" className="hover:underline">About</a>
    <a href="#" className="hover:underline">Contact</a>
  </div>
</nav>`}
            >
              <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
                <div className="font-bold">Logo</div>
                <div className="flex gap-6">
                  <a href="#" className="hover:underline">Home</a>
                  <a href="#" className="hover:underline">About</a>
                  <a href="#" className="hover:underline">Contact</a>
                </div>
              </nav>
            </ExampleCard>

            <ExampleCard
              title="Card Layout"
              description="Equal height cards with different content"
              code={`<div className="grid grid-cols-3 gap-4">
  <div className="flex items-center p-6 border rounded-lg">
    <div>
      <h3 className="font-bold">Short</h3>
      <p>Brief content</p>
    </div>
  </div>
  <div className="flex items-center p-6 border rounded-lg">
    <div>
      <h3 className="font-bold">Medium</h3>
      <p>Medium length content that spans multiple lines</p>
    </div>
  </div>
  <div className="flex items-center p-6 border rounded-lg">
    <div>
      <h3 className="font-bold">Long</h3>
      <p>This card has much longer content but still maintains perfect alignment</p>
    </div>
  </div>
</div>`}
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center p-6 border rounded-lg">
                  <div>
                    <h3 className="font-bold">Short</h3>
                    <p>Brief content</p>
                  </div>
                </div>
                <div className="flex items-center p-6 border rounded-lg">
                  <div>
                    <h3 className="font-bold">Medium</h3>
                    <p>Medium length content that spans multiple lines</p>
                  </div>
                </div>
                <div className="flex items-center p-6 border rounded-lg">
                  <div>
                    <h3 className="font-bold">Long</h3>
                    <p>This card has much longer content</p>
                  </div>
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock language="jsx" code={alignItemsUtilities.codeSnippet} />
          </div>

          <CommonMistakesSection mistakes={commonMistakes} />

          <TipsSection tips={tips} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
