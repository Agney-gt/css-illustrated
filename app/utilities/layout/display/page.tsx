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
import { RealWorldExamples } from "@/components/cursor/real-world-examples"
import CodeBlock from "@/app/utilities/components/code-block"

export default function DisplayPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
            <PageHero 
              title="Display Utilities Overview"
              description="Complete guide to CSS display utilities for modern web development. Understand how elements are rendered and positioned to create responsive, accessible layouts."
            />

            <MentalModelSection
              title="Understanding Display Architecture"
              description="Display properties control how elements participate in the document flow and layout algorithms. Mastering display is fundamental to creating predictable, responsive layouts and understanding the box model."
              features={[
                "Display defines element participation in layout flow",
                "Affects box model, positioning, and parent-child relationships",
                "Controls element visibility and accessibility implications",
                "Layout algorithms differ by display type (block, flex, grid)",
                "Responsive design relies on display property changes"
              ]}
              layerAssignment="Display Layer - Controls element rendering and layout behavior"
              browserBehavior="Browser calculates layout based on display type, affecting element dimensions, positioning, and relationship with other elements"
            />

            <ComparisonTable
              title="Display Properties Comparison"
              columns={["Property", "Layout Flow", "Box Model", "Use Cases", "Accessibility"]}
              rows={[
                {
                  feature: "block",
                  values: ["Stacks vertically", "Full width available", "Main content sections", "Screen reader friendly"]
                },
                {
                  feature: "inline", 
                  values: ["Flows horizontally", "Width based on content", "Text decorations", "Preserves text flow"]
                },
                {
                  feature: "inline-block", 
                  values: ["Horizontal with block properties", "Respects width/height", "Buttons, tags", "Keyboard accessible"]
                },
                {
                  feature: "flex", 
                  values: ["Flexible container", "Customizable sizing", "Component layouts", "Focus management"]
                },
                {
                  feature: "grid", 
                  values: ["Two-dimensional", "Explicit positioning", "Page layouts", "Logical order maintained"]
                },
                {
                  feature: "hidden", 
                  values: ["Removed from flow", "Not rendered", "Conditional UI", "Use aria-hidden too"]
                },
                {
                  feature: "contents", 
                  values: ["Parent removed", "Children remain", "CSS grouping", "Complex nesting"]
                }
              ]}
            />

            <UtilityGrid
              title="Display Utilities Overview"
              items={[
                { cls: "block", desc: "Block-level display" },
                { cls: "inline-block", desc: "Inline with block properties" },
                { cls: "inline", desc: "Inline display" },
                { cls: "flex", desc: "Flex container" },
                { cls: "inline-flex", desc: "Inline flex container" },
                { cls: "grid", desc: "Grid container" },
                { cls: "inline-grid", desc: "Inline grid container" },
                { cls: "hidden", desc: "Hidden from view" },
                { cls: "contents", desc: "Container removed, children remain" },
                { cls: "table", desc: "Table display" }
              ]}
            />

            <section className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold">Interactive Playground</h2>
              <p className="text-muted-foreground">Experiment with different display properties and see how they affect layout and element behavior.</p>

              <UtilityPlayground
                title="Display Playground"
                description="Test display properties and see real-time effects on element layout and sizing."
                options={["block", "inline-block", "inline", "flex", "grid", "hidden"]}
                defaultValue="block"
                buildMarkup={(displayClass, customClasses = "") => {
                  const classes = [displayClass, customClasses].filter(Boolean).join(" ")
                  return `<div class="${classes} p-4 bg-blue-500 text-white">Display Preview</div>`
                }}
                renderPreview={(displayClass, customClasses = "") => {
                  if (displayClass === "hidden") {
                    return (
                      <div className="w-32 h-32 bg-slate-800 flex items-center justify-center text-white text-sm">
                        Element is hidden
                      </div>
                    )
                  }
                  return (
                    <div className={`${displayClass} ${customClasses} bg-blue-500 text-white p-4`}>
                      Display Preview
                    </div>
                  )
                }}
              />
            </section>

            <ExampleSection title="Real-World Examples">
              <ExampleCard
                title="Navigation Bar"
                description="Flex navigation with responsive layout"
                code={`<nav class="flex justify-between items-center p-4 bg-white shadow">
  <div class="flex items-center gap-4">
    <h1 class="font-bold">Logo</h1>
    <div class="hidden md:flex gap-6">
      <a href="#" class="hover:text-blue-600">Home</a>
      <a href="#" class="hover:text-blue-600">About</a>
    </div>
  </div>
  <button class="md:hidden">Menu</button>
</nav>`}
              >
                <nav className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
                  <div className="flex items-center gap-4">
                    <h1 className="font-bold">Logo</h1>
                    <div className="hidden md:flex gap-6">
                      <a href="#" className="hover:text-blue-600">Home</a>
                      <a href="#" className="hover:text-blue-600">About</a>
                    </div>
                  </div>
                  <button className="md:hidden px-2 py-1 border rounded">Menu</button>
                </nav>
              </ExampleCard>

              <ExampleCard
                title="Card Grid"
                description="Responsive grid layout for cards"
                code={`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow">
    <h3 class="font-semibold mb-2">Card Title</h3>
    <p class="text-gray-600">Card content goes here</p>
  </div>
</div>`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow border">
                    <h3 className="font-semibold mb-2">Card Title</h3>
                    <p className="text-gray-600">Card content goes here</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border">
                    <h3 className="font-semibold mb-2">Card Title</h3>
                    <p className="text-gray-600">Card content goes here</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow border">
                    <h3 className="font-semibold mb-2">Card Title</h3>
                    <p className="text-gray-600">Card content goes here</p>
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Inline Block Tags"
                description="Tags that flow inline but have block properties"
                code={`<div class="flex flex-wrap gap-2">
  <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
  <span class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Vue</span>
  <span class="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Angular</span>
</div>`}
              >
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Vue</span>
                  <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Angular</span>
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Conditional Display"
                description="Responsive elements that show/hide based on screen size"
                code={`<div class="block md:hidden">
  <p class="text-center">Mobile view: Simplified content</p>
</div>
<div class="hidden md:block">
  <p class="text-left">Desktop view: Full content with sidebar</p>
</div>`}
              >
                <div className="space-y-4">
                  <div className="block md:hidden p-4 bg-blue-100 text-blue-800 rounded-lg text-center">
                    Mobile view: Simplified content
                  </div>
                  <div className="hidden md:block p-4 bg-green-100 text-green-800 rounded-lg text-left">
                    Desktop view: Full content with sidebar
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Contents Display"
                description="Using contents to create CSS-only grouping"
                code={`<div class="contents text-red-500">
  <p>This text is red</p>
  <p>This text is also red</p>
</div>
<!-- But the div wrapper doesn't affect layout -->`}
              >
                <div className="contents text-blue-600 border-2 border-blue-200 p-2">
                  <p>This inherits blue color and border</p>
                  <p>But parent div doesn't affect layout</p>
                </div>
              </ExampleCard>
            </ExampleSection>

            <CommonMistakesSection
              mistakes={[
                {
                  title: "Using inline instead of inline-block for buttons",
                  reason: "inline elements don't respect width/height and can't have top/bottom margins, making button styling inconsistent.",
                  example: `<button class="inline">Wrong</button>
<button class="inline-block">Correct</button>`,
                  level: "critical"
                },
                {
                  title: "Forgetting hidden elements are still in DOM",
                  reason: "display: hidden removes elements visually but they remain in DOM and accessible to screen readers unless paired with aria-hidden.",
                  example: `<div class="hidden">Still accessible</div>
<div class="hidden" aria-hidden="true">Fully hidden</div>`,
                  level: "warning"
                },
                {
                  title: "Mixing block and inline incorrectly",
                  reason: "Placing block elements inside inline elements creates invalid HTML and unpredictable rendering across browsers.",
                  example: `<span class="inline"><div class="block">Invalid nesting</div></span>
<div class="block"><span class="inline">Valid nesting</span></div>`,
                  level: "critical"
                },
                {
                  title: "Overusing contents display",
                  reason: "display: contents removes the parent from accessibility tree, which can break navigation for screen reader users.",
                  example: `<div class="contents" role="group"> <!-- ARIA lost -->
<div role="group" class="contents"> <!-- ARIA preserved -->
  <button>Button 1</button>
  <button>Button 2</button>
</div>`,
                  level: "warning"
                },
                {
                  title: "Not considering focus management with hidden",
                  reason: "When elements are hidden/shown, focus can get trapped or lost. Always manage focus programmatically.",
                  example: `<div class="hidden" id="panel">
  <!-- Focus gets lost when this appears -->
  <input autofocus /> <!-- Use JavaScript instead -->
</div>`,
                  level: "warning"
                }
              ]}
            />

            <TipsSection 
              tips={[
                { bold: "Responsive first:", text: "Start with mobile-first block layouts, then enhance with flex/grid" },
                { bold: "Semantic HTML:", text: "Choose display based on content meaning, not visual preferences" },
                { bold: "Performance:", text: "Use simpler display values when complex layouts aren't needed" },
                { bold: "Testing:", text: "Always test display changes with screen readers and keyboard navigation" },
                { bold: "Animation:", text: "Display changes can't be animated - use opacity/transform instead" },
                { bold: "Print styles:", text: "Consider display: none for non-essential content in print media queries" }
              ]}
            />

            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold mb-4">Advanced Display Patterns</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Flexbox Centering</h3>
                  <CodeBlock 
                    code={`<div class="flex items-center justify-center h-64">
  <div class="bg-blue-500 text-white p-6">Perfectly centered</div>
</div>`} 
                    language="tsx" 
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Grid Centering</h3>
                  <CodeBlock 
                    code={`<div class="grid place-items-center h-64">
  <div class="bg-green-500 text-white p-6">Grid centered</div>
</div>`} 
                    language="tsx" 
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}