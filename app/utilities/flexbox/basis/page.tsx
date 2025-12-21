"use client"

import { useState, useEffect } from "react"
import FlexLayout from "../layout"
import { PageHero } from "@/components/shared/page-hero"
import { UtilityGrid } from "@/components/shared/utility-grid"
import { ExampleSection, ExampleCard } from "@/components/shared/example-section"
import { TipsSection } from "@/components/shared/tips-section"
import { MentalModelSection } from "@/components/shared/mental-model-section"
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section"
import CodeBlock from "@/app/utilities/components/code-block"

// Animated flex item component
function FlexItem({
  color,
  label,
  basis,
  grow = 0,
  shrink = 1,
}: {
  color: string
  label: string
  basis: string
  grow?: number
  shrink?: number
}) {
  return (
    <div
      className="rounded p-4 text-white font-semibold flex items-center justify-center transition-all duration-1000"
      style={{
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        backgroundColor: color,
      }}
    >
      {label}
    </div>
  )
}

export default function FlexBasisPage() {
  const [demo1Basis, setDemo1Basis] = useState(true)

  // NEW: Demo 2 + Demo 3 animated state
  const [demo2Cycle, setDemo2Cycle] = useState(0)
  const [demo3Cycle, setDemo3Cycle] = useState(0)

  useEffect(() => {
    // Demo 1 animation
    const interval1 = setInterval(() => setDemo1Basis((prev) => !prev), 2500)

    // Demo 2 animation (cycle through 3 patterns)
    const interval2 = setInterval(() => {
      setDemo2Cycle((n) => (n + 1) % 3)
    }, 2200)

    // Demo 3 animation (basis pulses)
    const interval3 = setInterval(() => {
      setDemo3Cycle((n) => (n + 1) % 2)
    }, 2000)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
      clearInterval(interval3)
    }
  }, [])

  const flexBasisClasses = [
    { class: "basis-0", desc: "flex-basis: 0 — starts from zero and grows/shrinks based on flex rules" },
    { class: "basis-auto", desc: "flex-basis: auto — item size depends on content" },
    { class: "basis-1/4", desc: "flex-basis: 25% of container width" },
    { class: "basis-1/3", desc: "flex-basis: 33.33% of container width" },
    { class: "basis-1/2", desc: "flex-basis: 50% of container width" },
    { class: "basis-full", desc: "flex-basis: 100% — takes full container width" },
  ]

return (
    <FlexLayout>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">

        {/* Section 1: Description */}
        <PageHero 
          title="Flex Basis"
          description="Flex-basis sets initial main size of a flex item before it grows or shrinks. Think of it as 'starting width' of a flex item. When combined with flex-grow and flex-shrink, you get powerful responsive layouts."
        />

          <MentalModelSection
            title="Understanding Flex Basis"
            description="Flex basis establishes the initial main size of flex items before growing or shrinking occurs, providing predictable starting points for responsive behavior."
            features={[
              "Sets initial width/height before flex calculations",
              "Works with flex-grow and flex-shrink for responsive sizing",
              "Accepts length values, percentages, and auto",
              "Affects how remaining space is distributed",
              "Critical for creating predictable grid layouts"
            ]}
            layerAssignment="Sizing Layer - Defines initial item dimensions"
            browserBehavior="Browser calculates initial size based on basis, then applies grow/shrink calculations"
          />

          <UtilityGrid
            title="Flex-Basis Utility Classes"
            items={[
              { cls: "basis-0", desc: "flex-basis: 0 — starts from zero and grows/shrinks based on flex rules" },
              { cls: "basis-auto", desc: "flex-basis: auto — item size depends on content" },
              { cls: "basis-1/4", desc: "flex-basis: 25% of container width" },
              { cls: "basis-1/3", desc: "flex-basis: 33.33% of container width" },
              { cls: "basis-1/2", desc: "flex-basis: 50% of container width" },
              { cls: "basis-full", desc: "flex-basis: 100% — takes full container width" }
            ]}
          />

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using basis without considering container width",
                reason: "Fixed basis values can cause overflow in narrow containers",
                example: "<div class=\"basis-96\">Very wide content in small container</div>",
                level: "critical"
              },
              {
                title: "Confusing basis with width",
                reason: "Basis affects flex calculation, not direct width like in block layout",
                example: "<div class=\"basis-1/2 w-full\">Conflicting sizing</div>",
                level: "warning"
              },
              {
                title: "Not combining basis with grow",
                reason: "Fixed basis without grow leaves unused space in containers",
                example: "<div class=\"basis-1/3\">Content doesn't fill remaining space</div>",
                level: "info"
              }
            ]}
          />

          {/* Section 3: Animated Demonstrations */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Animated Demonstrations</h2>

            {/* Demo 1 */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <strong>Demo 1:</strong> Two items switch between <em>25%</em> and <em>50%</em> basis values. This shows how{" "}
                <code className="bg-slate-700 px-1 rounded">flex-basis</code> controls starting width dynamically.
              </p>

              <div className="flex gap-4 h-32 bg-slate-800 rounded p-4 overflow-hidden">
                <FlexItem color="#f56565" label="25% → 50%" basis={demo1Basis ? "25%" : "50%"} grow={1} />
                <FlexItem color="#ed8936" label="50% → 25%" basis={demo1Basis ? "50%" : "25%"} grow={1} />
                <FlexItem color="#48bb78" label="Fixed 25%" basis="25%" grow={1} />
              </div>
            </div>

            {/* Demo 2 (Full animation fix) */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <strong>Demo 2:</strong> Items animate through multiple basis values while using{" "}
                <code className="bg-slate-700 px-1 rounded">flex-grow</code> to fill remaining space dynamically.
              </p>

              <div className="flex gap-4 h-32 bg-slate-800 rounded p-4 transition-all duration-1000">
                <FlexItem
                  color="#63b3ed"
                  label="33% + grow"
                  basis={["30%", "25%", "35%"][demo2Cycle]}
                  grow={1}
                />
                <FlexItem
                  color="#4299e1"
                  label="33% + grow"
                  basis={["30%", "30%", "25%"][demo2Cycle]}
                  grow={1}
                />
                <FlexItem
                  color="#3182ce"
                  label="33% + grow"
                  basis={["30%", "45%", "40%"][demo2Cycle]}
                  grow={1}
                />
              </div>
            </div>

            {/* Demo 3 (Animated shrink demo) */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <strong>Demo 3:</strong> Basis values pulse between two sizes to demonstrate how{" "}
                <code className="bg-slate-700 px-1 rounded">flex-shrink</code> affects overflow behavior.
              </p>

              <div className="flex gap-4 w-96 overflow-x-auto bg-slate-800 rounded p-4 transition-all duration-1000">
                <FlexItem
                  color="#f6ad55"
                  label="No shrink"
                  basis={demo3Cycle ? "180px" : "130px"}
                  shrink={0}
                />
                <FlexItem color="#ed64a6" label="Shrinks" basis={demo3Cycle ? "180px" : "130px"} shrink={1} />
                <FlexItem color="#805ad5" label="Shrinks" basis={demo3Cycle ? "180px" : "130px"} shrink={1} />
              </div>
              <p className="text-xs text-muted-foreground">Resize or wait for animation to observe shrinking.</p>
            </div>
          </div>

          

          <ExampleSection title="Detailed Real-World Examples">

            {/* Example 1: Responsive Card Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Responsive Card Grid</h3>
              <div className="flex gap-4 flex-wrap">
                <FlexItem color="#4299e1" label="Card 1" basis="180px" grow={1} />
                <FlexItem color="#63b3ed" label="Card 2" basis="220px" grow={1} />
                <FlexItem color="#90cdf4" label="Card 3" basis="200px" grow={1} />
                <FlexItem color="#bee3f8" label="Card 4" basis="160px" grow={1} />
              </div>
              <p className="text-muted-foreground text-sm">
                Each card has a starting width (basis) and grows equally to fill remaining space.
              </p>
              <CodeBlock
                code={`<div class="flex gap-4 flex-wrap">
  <div class="flex-1 basis-44 bg-blue-600 rounded p-4">Card 1</div>
  <div class="flex-1 basis-56 bg-blue-500 rounded p-4">Card 2</div>
  <div class="flex-1 basis-50 bg-blue-400 rounded p-4">Card 3</div>
  <div class="flex-1 basis-40 bg-blue-300 rounded p-4">Card 4</div>
</div>`}
                language="jsx"
              />
            </div>

            {/* Example 2: Navigation */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Navigation Bar</h3>
              <div className="flex gap-4 items-center bg-slate-800 p-4 rounded">
                <FlexItem color="#f6ad55" label="Logo" basis="80px" />
                <FlexItem color="#68d391" label="Search" basis="200px" grow={1} />
                <FlexItem color="#63b3ed" label="Sign In" basis="100px" />
              </div>
              <p className="text-muted-foreground text-sm">
                Search input grows to fill available space; logo and button remain fixed.
              </p>
              <CodeBlock
                code={`<nav class="flex items-center gap-4 p-4 bg-slate-800 rounded">
  <div class="basis-20 bg-yellow-400 rounded">Logo</div>
  <input class="basis-48 flex-grow px-3 py-2 rounded" placeholder="Search..." />
  <button class="basis-24 px-4 py-2 bg-blue-600 text-white rounded">Sign In</button>
</nav>`}
                language="jsx"
              />
            </div>

            {/* Example 3: Form Layout */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Form with Flexible Input</h3>
              <div className="flex gap-4 items-end">
                <FlexItem color="#ed64a6" label="Email Input" basis="180px" grow={1} />
                <FlexItem color="#805ad5" label="Submit" basis="100px" />
              </div>
              <p className="text-muted-foreground text-sm">
                Input field flexes to fill space, button remains fixed.
              </p>
              <CodeBlock
                code={`<form class="flex gap-4 items-end">
  <input class="basis-44 flex-grow px-3 py-2 rounded border" placeholder="Email" />
  <button class="basis-24 px-6 py-2 bg-purple-600 text-white rounded">Submit</button>
</form>`}
                language="jsx"
              />
            </div>

            {/* Example 4: Sidebar + Main Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Sidebar + Main Content</h3>
              <div className="flex gap-6 min-h-[200px]">
                <FlexItem color="#f56565" label="Sidebar" basis="200px" />
                <FlexItem color="#48bb78" label="Main Content" basis="0" grow={1} />
              </div>
              <p className="text-muted-foreground text-sm">
                Sidebar stays fixed; main content grows dynamically to fill remaining space.
              </p>
              <CodeBlock
                code={`<div class="flex gap-6 min-h-screen">
  <aside class="flex-none w-48 bg-red-500 p-6">Sidebar</aside>
  <main class="flex-1 bg-green-500 p-6">Main Content</main>
</div>`}
                language="jsx"
              />
            </div>
          </ExampleSection>
          <TipsSection 
            tips={[
              { bold: "Equal columns:", text: "Use flex-1 to create equal-width columns that adapt to container" },
              { bold: "Responsive grids:", text: "Combine basis- with flex-grow for responsive grid layouts" },
              { bold: "Prevent shrinking:", text: "Use flex-shrink-0 to prevent items from shrinking below their size" },
              { bold: "Fixed elements:", text: "Use flex-none for fixed-size sidebars or buttons in flex containers" },
              { bold: "Content-based sizing:", text: "Use basis-auto for items that should size based on their content" }
            ]}
          />
        </div>
      </FlexLayout>
  )
}
