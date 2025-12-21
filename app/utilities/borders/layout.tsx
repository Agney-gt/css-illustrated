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
import { RealWorldExamples } from "@/components/shared/real-world-examples"
import CodeBlock from "@/app/utilities/components/code-block"

export default function BorderLayoutPage() {
  return (
    <>
  <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero 
            title="Border Utilities Overview"
            description="Complete guide to CSS border utilities for modern web development. Understand width, style, radius, and color properties to create visually appealing and functional interfaces."
          />

          <MentalModelSection
            title="Understanding Border Architecture"
            description="Borders are fundamental UI components that create visual hierarchy, define boundaries, and provide interactive feedback. Mastering borders enables you to build everything from simple dividers to complex design systems."
            features={[
              "Borders affect layout without changing element dimensions",
              "Four core properties: width, style, radius, and color",
              "Box model affects padding, margin, and background calculations",
              "Visual hierarchy established through border weight and color",
              "Interactive states require border changes (hover, focus, active)"
            ]}
            layerAssignment="Border Layer - Defines visual boundaries and container separation"
            browserBehavior="Browser renders borders as box around content, calculating total dimensions (border-box model)"
          />

          <ComparisonTable
            title="Border Properties Comparison"
            columns={["Property", "What It Controls", "Common Use Cases", "Visual Impact"]}
            rows={[
              {
                feature: "Width",
                values: ["Border thickness", "Space consumption", "Visual emphasis", "Layout separation"]
              },
              {
                feature: "Style", 
                values: ["Line appearance", "Visual style", "Decoration type", "Border patterns"]
              },
              {
                feature: "Radius", 
                values: ["Corner rounding", "Modern vs classic", "Softness", "Touch targets"]
              },
              {
                feature: "Color", 
                values: ["Visual feedback", "Branding consistency", "State indication", "Accessibility"]
              }
            ]}
          />

          <UtilityGrid
            title="Border Utilities Overview"
            items={[
              { cls: "border", desc: "1px border (default)" },
              { cls: "border-2", desc: "2px border" },
              { cls: "border-4", desc: "4px border" },
              { cls: "border-8", desc: "8px border" },
              { cls: "border-solid", desc: "Continuous stroke (default)" },
              { cls: "border-dashed", desc: "Dashed separators" },
              { cls: "border-dotted", desc: "Dotted decorative" },
              { cls: "border-double", desc: "Double line emphasis" },
              { cls: "rounded-none", desc: "No rounding" },
              { cls: "rounded", desc: "Default radius" },
              { cls: "rounded-lg", desc: "Large radius" },
              { cls: "rounded-full", desc: "Pill/circle" },
              { cls: "border-border", desc: "Design token default" },
              { cls: "border-gray-300", desc: "Neutral subtle" },
              { cls: "border-blue-600", desc: "Primary action" },
              { cls: "border-red-500", desc: "Error/destructive" }
            ]}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">Experiment with different border combinations and see how they affect layout and visual hierarchy.</p>

            <UtilityPlayground
              title="Border Playground"
              description="Test border properties and see real-time effects on element sizing and spacing."
              options={["border", "border-2", "border-4", "border-0"]}
              defaultValue="border"
              buildMarkup={(borderClass, style = "", radius = "", color = "") => {
                const classes = [borderClass, style, radius, color].filter(Boolean).join(" ")
                return `<div class="${classes} p-6">Border Preview</div>`
              }}
              renderPreview={(borderClass, style = "", radius = "", color = "") => {
                return (
                  <div className="w-32 h-32 bg-slate-700 border-slate-200 p-6 flex items-center justify-center text-white">
                    Border Preview
                  </div>
                )
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Card Component"
              description="Card with colored border and shadow for visual hierarchy"
              code={`<div class="border-2 border-blue-200 bg-white rounded-lg shadow-lg p-6">
  <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
  <p class="text-gray-600">Card content with blue accent border</p>
</div>`}
            >
              <div className="border-2 border-blue-200 bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900">Card Title</h3>
                <p className="text-gray-600">Card content with blue accent border</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Navigation Menu"
              description="Navigation with border separators and hover states"
              code={`<nav class="flex items-center gap-4 border-b border-gray-300">
  <a href="#" class="border-b border-transparent px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">Home</a>
  <a href="#" class="border-b border-transparent px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">About</a>
</nav>`}
            >
              <nav className="flex items-center gap-4 border-b border-gray-300 p-4">
                <a href="#" className="border-b border-transparent px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">Home</a>
                <a href="#" className="border-b border-transparent px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">About</a>
                <a href="#" className="border-b border-transparent px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors">Features</a>
              </nav>
            </ExampleCard>

            <ExampleCard
              title="Modal Dialog"
              description="Modal with thick borders and drop shadow for emphasis"
              code={`<div class="border-4 border-gray-300 rounded-xl bg-white p-6">
  <h2 className="text-xl font-bold text-gray-900">Modal Title</h2>
  <p class="text-gray-600">Modal content goes here</p>
  <button class="mt-4 border border-gray-300 rounded-md p-2 bg-gray-100">Close</button>
</div>`}
            >
              <div className="border-4 border-gray-300 rounded-xl bg-white p-6 max-w-md">
                <h2 className="text-xl font-bold text-gray-900">Modal Title</h2>
                <p className="text-gray-600">Modal content goes here</p>
                <button className="mt-4 border border-gray-300 rounded-md p-2 bg-gray-100">Close</button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Form Input"
              description="Input field with focus states and validation borders"
              code={`<input class="border border-gray-300 focus:border-2 focus:border-blue-600 px-3 py-2 rounded-md bg-white text-gray-900" placeholder="Enter your email" />`}
            >
              <div className="border border-gray-300 rounded-md p-3">
                <input className="border border-gray-300 focus:border-2 focus:border-blue-600 px-3 py-2 rounded-md bg-white text-gray-900 w-full" placeholder="Enter your email" />
              </div>
            </ExampleCard>
          </ExampleSection>

          <TipsSection 
            tips={[
              { bold: "Combine properties:", text: "Use border-[width] [style] [radius] [color] for complete control" },
              { bold: "Focus vs state:", text: "Always include border changes for interactive elements" },
              { bold: "Responsive borders:", text: "Use responsive widths to adapt to screen sizes" },
              { bold: "Performance:", text: "Use border-style instead of multiple borders for better performance" },
              { bold: "Accessibility:", text: "Don't rely on color alone for state indication" }
            ]}
          />
          </div>
        </main>
      </div>
      <Footer /></>
   
  )
}