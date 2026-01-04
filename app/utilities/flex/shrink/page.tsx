"use client"

import { useState, useEffect } from "react"
import FlexLayout from "../layout"
import { PageHero } from "@/components/shared/page-hero"
import { UtilityGrid } from "@/components/shared/utility-grid"
import { UtilityPlayground } from "@/components/shared/utility_playground"
import { ExampleSection, ExampleCard } from "@/components/shared/example-section"
import { TipsSection } from "@/components/shared/tips-section"
import { MentalModelSection } from "@/components/shared/mental-model-section"
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section"
import { ComparisonTable } from "@/components/shared/comparison-table"

// Animated flex item component for shrink demos
function ShrinkItem({
  color,
  label,
  shrink = 1,
  basis = "auto",
  grow = 0,
}: {
  color: string
  label: string
  shrink?: number
  basis?: string
  grow?: number
}) {
  return (
    <div
      className="rounded p-4 text-white font-semibold flex items-center justify-center transition-all duration-1000 whitespace-nowrap"
      style={{
        flexShrink: shrink,
        flexBasis: basis,
        flexGrow: grow,
        backgroundColor: color,
      }}
    >
      {label}
    </div>
  )
}

export default function FlexShrinkPage() {
  const [demo1Cycle, setDemo1Cycle] = useState(0)
  const [demo2Shrink, setDemo2Shrink] = useState(true)
  const [demo3Constrain, setDemo3Constrain] = useState(false)

  useEffect(() => {
    const interval1 = setInterval(() => setDemo1Cycle((n) => (n + 1) % 3), 2500)
    const interval2 = setInterval(() => setDemo2Shrink((s) => !s), 2000)
    const interval3 = setInterval(() => setDemo3Constrain((c) => !c), 3000)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
      clearInterval(interval3)
    }
  }, [])

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">

        {/* Section 1: Hero with Intent-First Framing */}
        <PageHero 
          title="Flex Shrink"
          description="You should reach for flex-shrink when you need items to contract when space becomes limited. flex-shrink controls how aggressively items give up space — higher values shrink more, zero prevents shrinking entirely."
        />

        {/* Section 2: Mental Model - How Browsers Think */}
        <MentalModelSection
          title="Understanding Flex-Shrink Architecture"
          description="Flex shrink is a **Layout layer** utility that controls space contraction when containers are too small. It operates in three phases: basis allocation → overflow detection → proportional shrinking."
          features={[
            "Browser first gives each item its flex-basis (content size or explicit basis)",
            "Browser detects if total item size exceeds container width",
            "Browser distributes shortfall proportionally to shrink values",
            "Higher shrink values give up more space, shrink-0 items maintain size"
          ]}
          layerAssignment="Layout layer — controls space contraction on overflow. Apply to flex children, not containers."
          browserBehavior="If no overflow exists (items fit comfortably), shrink has no visible effect. Items only shrink when container is too small."
        />

        {/* Section 3: Comparison Table */}
        <ComparisonTable
          title="Flex Properties Comparison"
          columns={["Property", "Controls", "When To Use", "Common Pitfalls"]}
          rows={[
            {
              feature: "flex-shrink",
              values: ["Space contraction", "Items shrink when needed", "Overflow prevention", "Can make content unreadable"]
            },
            {
              feature: "flex-grow", 
              values: ["Space expansion", "Fill remaining space", "Responsive distribution", "Needs available space"]
            },
            {
              feature: "flex-basis", 
              values: ["Starting size", "Initial size before grow/shrink", "Content size control", "Auto vs fixed confusion"]
            }
          ]}
        />

        {/* Section 4: Utility Grid - Behavior-Based Grouping */}
        <div className="space-y-6 border-t border-border pt-8">
          <h2 className="text-3xl font-bold text-foreground">Flex-Shrink Utility Classes</h2>
          <p className="text-muted-foreground">Click to copy a class.</p>

          <UtilityGrid
            items={[
              { cls: "shrink", desc: "flex-shrink: 1 — can shrink when needed" },
              { cls: "shrink-0", desc: "flex-shrink: 0 — will NOT shrink" },
              { cls: "shrink-[2]", desc: "flex-shrink: 2 — shrinks twice as much" },
              { cls: "shrink-[3]", desc: "flex-shrink: 3 — shrinks three times as much" },
              { cls: "basis-auto shrink-0", desc: "Content size + no shrinking" },
              { cls: "basis-full shrink", desc: "Full width + can shrink" }
            ]}
          />
        </div>

        {/* Section 5: Common Mistakes */}
        <CommonMistakesSection
          title="❌ Common Mistakes & Why They Happen"
          mistakes={[
            {
              title: "Making critical UI elements unreadable",
              reason: "Aggressive shrinking can make buttons, labels, or controls too small to use",
              example: `<div class="flex w-32">\n  <button class="shrink-[3]">Important</button>\n  <button class="shrink">Normal</button>\n</div>`,
              level: 'critical'
            },
            {
              title: "Using shrink without overflow constraints",
              reason: "Shrink only works when container has fixed width and overflow occurs",
              example: `<div class="flex shrink"> <!-- Container is unlimited width -->\n  <div>Won't shrink</div>\n</div>`,
              level: 'critical'
            },
            {
              title: "Forgetting whitespace protection",
              reason: "Text in shrinking items may wrap or truncate unexpectedly",
              example: `<div class="flex w-48">\n  <div class="shrink">Text might wrap</div>\n  <div>Fixed</div>\n</div>`,
              level: 'warning'
            },
            {
              title: "Combining shrink with min-width",
              reason: "min-width conflicts with shrink and can prevent intended behavior",
              example: `<div class="flex w-32">\n  <div class="shrink min-w-24">Won't shrink past 24</div>\n</div>`,
              level: 'warning'
            }
          ]}
        />

        {/* Section 6: Interactive Playground */}
        <UtilityPlayground
          title="Flex-Shrink Playground"
          description="Test how flex-shrink handles space constraints. Notice how shrink values only affect behavior when items don't fit in the container."
          options={["shrink-0", "shrink", "shrink-[2]", "shrink-[3]", "basis-auto shrink-0"]}
          defaultValue="shrink"
          buildMarkup={(shrinkClass, customClasses = "") => {
            return `<div class="flex gap-4 w-80 ${customClasses}">
          <div class="${shrinkClass} bg-blue-500 p-4 rounded text-white whitespace-nowrap">Shrinking Item</div>
          <div class="basis-32 bg-red-500 p-4 rounded text-white">Fixed 128px</div>
          <div class="basis-24 bg-green-500 p-4 rounded text-white">Fixed 96px</div>
        </div>`
          }}
          renderPreview={(shrinkClass, customClasses = "") => {
            return (
              <div className={`flex gap-4 w-80 ${customClasses}`}>
                <div className={`${shrinkClass} bg-blue-500 p-4 rounded text-white whitespace-nowrap`}>
                  Shrinking Item
                </div>
                <div className="basis-32 bg-red-500 p-4 rounded text-white">
                  Fixed 128px
                </div>
                <div className="basis-24 bg-green-500 p-4 rounded text-white">
                  Fixed 96px
                </div>
              </div>
            )
          }}
        />

        {/* Section 7: Real-World Examples */}
        <ExampleSection title="Real-World Examples">
          {/* Example 1: Navigation Bar with Logo */}
          <ExampleCard
            title="Navigation with Fixed Logo"
            description="Navigation bar where logo never shrinks but menu items can shrink on small screens."
            code={`<div class="flex gap-4 w-full">                <!-- Layout: nav container -->
            <div class="shrink-0 basis-32">                 <!-- Layout: fixed logo -->
              <img src="/logo.png" alt="Logo" />
            </div>
            <nav class="shrink flex gap-2">                 <!-- Layout: shrinking nav -->
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>`}
          >
            <div className="flex gap-4 items-center bg-slate-800 p-4 rounded">
              <div className="shrink-0 basis-32 bg-blue-600 p-2 rounded text-white text-center font-bold">
                LOGO
              </div>
              <nav className="shrink flex gap-2">
                <a href="#" className="px-3 py-1 bg-slate-700 text-white rounded text-sm">Home</a>
                <a href="#" className="px-3 py-1 bg-slate-700 text-white rounded text-sm">About</a>
                <a href="#" className="px-3 py-1 bg-slate-700 text-white rounded text-sm">Contact</a>
              </nav>
            </div>
          </ExampleCard>

          {/* Example 2: Button Group */}
          <ExampleCard
            title="Button Group with Priority"
            description="Primary action button stays large, secondary buttons shrink on small screens."
            code={`<div class="flex gap-2 w-64">              <!-- Layout: button group -->
              <button class="shrink-0 bg-blue-600 text-white px-4 py-2 rounded"> <!-- Layout: primary action -->
                Save
              </button>
              <button class="shrink bg-slate-200 text-gray-800 px-4 py-2 rounded">   <!-- Layout: secondary action -->
                Cancel
              </button>
              <button class="shrink bg-slate-200 text-gray-800 px-4 py-2 rounded">   <!-- Layout: tertiary action -->
                Delete
              </button>
            </div>`}
          >
            <div className="flex gap-2 w-64">
              <button className="shrink-0 bg-blue-600 text-white px-4 py-2 rounded">
                Save
              </button>
              <button className="shrink bg-slate-600 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button className="shrink bg-slate-600 text-white px-4 py-2 rounded">
                Delete
              </button>
            </div>
          </ExampleCard>

          {/* Example 3: Product Card Layout */}
          <ExampleCard
            title="Product Card with Fixed Image"
            description="Product image maintains size while title and description can shrink."
            code={`<div class="flex gap-4 w-80">                      <!-- Layout: card container -->
              <img class="shrink-0 w-20 h-20 rounded" src="product.jpg" /> <!-- Layout: fixed image -->
              <div class="shrink">                                 <!-- Layout: flexible content -->
                <h3 class="font-bold">Product Title</h3>
                <p class="text-sm text-muted-foreground">Description</p>
              </div>
            </div>`}
          >
            <div className="flex gap-4 w-80">
              <div className="shrink-0 w-20 h-20 bg-slate-600 rounded flex items-center justify-center text-white">
                IMG
              </div>
              <div className="shrink">
                <h3 className="font-bold text-white">Product Title</h3>
                <p className="text-sm text-slate-300">Description text that can shrink</p>
              </div>
            </div>
          </ExampleCard>

          {/* Example 4: Form with Fixed Labels */}
          <ExampleCard
            title="Form with Fixed Labels"
            description="Form labels never shrink but input fields can adapt to container width."
            code={`<div class="flex gap-3 items-center">               <!-- Layout: form row -->
              <label class="shrink-0 w-24 text-right">Name:</label>    <!-- Layout: fixed label -->
              <input class="shrink flex-1 px-2 py-1 border rounded" />    <!-- Layout: flexible input -->
            </div>`}
          >
            <div className="flex gap-3 items-center">
              <label className="shrink-0 w-24 text-right text-white">Name:</label>
              <input className="shrink flex-1 px-2 py-1 border rounded bg-slate-700 text-white" placeholder="Enter name" />
            </div>
          </ExampleCard>
        </ExampleSection>

        {/* Section 8: Animated Demonstrations */}
        <div className="space-y-6 border-t border-border pt-8">
          <h2 className="text-3xl font-bold text-foreground">Live Demonstrations</h2>

          {/* Demo 1: Shrink Values Comparison */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              <strong>Demo 1:</strong> Items cycle through different shrink values. Notice how higher shrink values contract more aggressively.
            </p>

            <div className="flex gap-4 h-32 bg-slate-800 rounded p-4 overflow-hidden">
              <ShrinkItem
                color="#ef4444"
                label="Shrink 0"
                shrink={[0, 1, 2][demo1Cycle]}
                basis="150px"
              />
              <ShrinkItem
                color="#f59e0b"
                label="Shrink 1"
                shrink={[1, 2, 3][demo1Cycle]}
                basis="150px"
              />
              <ShrinkItem color="#10b981" label="Fixed" shrink={0} basis="100px" />
            </div>
          </div>

          {/* Demo 2: Container Constraint Toggle */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              <strong>Demo 2:</strong> Container width changes to show shrink behavior. Items only shrink when constrained.
            </p>

            <div className="bg-slate-800 rounded p-4 transition-all duration-1000">
              <div className={`flex gap-4 ${demo2Shrink ? 'w-64' : 'w-96'} transition-all duration-1000`}>
                <ShrinkItem color="#3b82f6" label="Can Shrink" shrink={1} basis="120px" />
                <ShrinkItem color="#8b5cf6" label="Never Shrinks" shrink={0} basis="100px" />
                <ShrinkItem color="#ec4899" label="Shrink Fast" shrink={2} basis="120px" />
              </div>
            </div>
          </div>

          {/* Demo 3: Real-world Form Scenario */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              <strong>Demo 3:</strong> Form elements demonstrate practical shrink behavior with labels and inputs.
            </p>

            <div className={`bg-slate-800 rounded p-4 transition-all duration-1000 ${demo3Constrain ? 'w-80' : 'w-full'}`}>
              <div className="space-y-3">
                <div className="flex gap-3 items-center">
                  <label className="shrink-0 w-24 text-right text-white">Email:</label>
                  <input className="shrink flex-1 px-3 py-2 border rounded bg-slate-700 text-white" placeholder="user@example.com" />
                </div>
                <div className="flex gap-3 items-center">
                  <label className="shrink-0 w-24 text-right text-white">Phone:</label>
                  <input className="shrink flex-1 px-3 py-2 border rounded bg-slate-700 text-white" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="flex gap-2 ml-auto">
                  <button className="shrink-0 bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                  <button className="shrink bg-slate-600 text-white px-4 py-2 rounded">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          <TipsSection
            tips={[
              { 
                bold: "Layout Layer Rules:", 
                text: "flex-shrink only works on direct children of display:flex containers" 
              },
              { 
                bold: "Overflow required:", 
                text: "Items only shrink when container width is smaller than total item width" 
              },
              { 
                bold: "Proportional thinking:", 
                text: "Higher shrink values give up proportionally more space when needed" 
              },
              { 
                bold: "Content protection:", 
                text: "Use shrink-0 for critical UI that must remain readable" 
              },
              { 
                bold: "Width conflicts:", 
                text: "min-width and width constraints can override shrink behavior" 
              }
            ]}
          />

        </div></div>
    </>
  )
}