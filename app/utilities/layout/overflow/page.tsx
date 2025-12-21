"use client"


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

export default function OverflowPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
            <PageHero 
              title="Overflow Utilities"
              description="Control how content behaves when it exceeds container boundaries. Understand clipping, scrolling, and the browser's overflow algorithm to build predictable layouts."
            />

            <MentalModelSection
              title="Understanding Overflow Behavior"
              description="Overflow is a Shape-layer concern that creates clipping masks or reveals scrollbars. It doesn't affect layout dimensions—only what becomes visible when content exceeds its container's bounds."
              features={[
                "Overflow creates visual masks without changing element dimensions",
                "Content continues to exist even when clipped—scrollbars reveal it",
                "Auto overflow shows scrollbars only when needed, not proactively",
                "Separate axes (overflow-x/overflow-y) provide granular control",
                "Scrolling containers establish positioning contexts for children"
              ]}
              layerAssignment="Shape Layer - Controls content visibility boundaries"
              browserBehavior="Browser clips content to container's padding box, then calculates whether scrollbars are needed based on content dimensions vs container dimensions"
            />

            <ComparisonTable
              title="Overflow Behavior Comparison"
              columns={["Property", "When Scrollbars Appear", "Layout Impact", "Common Use Cases"]}
              rows={[
                {
                  feature: "overflow-visible",
                  values: ["Never", "Content may overlap other elements", "Default behavior, unrestricted content"],
                },
                {
                  feature: "overflow-hidden", 
                  values: ["Never", "No layout impact", "Image cropping, text truncation with ellipsis"],
                },
                {
                  feature: "overflow-auto", 
                  values: ["Only when content exceeds", "Scrollbar space reserved only when needed", "Responsive content areas, code blocks"],
                },
                {
                  feature: "overflow-scroll", 
                  values: ["Always", "Scrollbar space always reserved", "Consistent UI dimensions, terminal-like interfaces"],
                }
              ]}
            />

            <UtilityGrid
              title="Overflow Utilities Overview"
              items={[
                { cls: "overflow-auto", desc: "Auto scroll if needed" },
                { cls: "overflow-hidden", desc: "Hide overflow content" },
                { cls: "overflow-visible", desc: "Show overflow (default)" },
                { cls: "overflow-scroll", desc: "Always show scrollbars" },
                { cls: "overflow-x-auto", desc: "Horizontal scroll only" },
                { cls: "overflow-y-auto", desc: "Vertical scroll only" },
                { cls: "overflow-x-hidden", desc: "Hide horizontal overflow" },
                { cls: "overflow-y-hidden", desc: "Hide vertical overflow" },
              ]}
            />

            <CommonMistakesSection
              title="❌ Common Mistakes & Why They Happen"
              mistakes={[
                {
                  title: "Applying overflow-hidden at layout level",
                  reason: "Clips all content including navigation and important elements instead of isolating to specific shape containers.",
                  example: `<div className="overflow-hidden">  <!-- Layout container -->
  <img />
  <p>Text disappears</p>           <!-- Everything gets clipped -->
</div>`,
                  level: "critical"
                },
                {
                  title: "Using overflow-hidden for text truncation without truncate",
                  reason: "overflow-hidden only clips content—it doesn't add ellipsis. Text appears cut off without indication of truncation.",
                  example: `<div className="overflow-hidden w-32">Very long text that appears broken</div>`,
                  level: "warning"
                },
                {
                  title: "Percentage height without overflow context",
                  reason: "Child with h-full expands but parent doesn't constrain it, so content flows beyond visible bounds without scrollbars.",
                  example: `<div className="h-full">        <!-- No parent height defined -->
  <div className="overflow-auto">
    <!-- Content overflows invisibly -->
  </div>
</div>`,
                  level: "critical"
                },
                {
                  title: "Mixing layout and shape overflow concerns",
                  reason: "Using overflow for layout positioning instead of visual clipping creates unpredictable stacking and positioning contexts.",
                  example: `<div className="overflow-hidden relative">
  <div className="absolute -top-4">Escapes clipping</div>
</div>`,
                  level: "warning"
                },
                {
                  title: "overflow-scroll on mobile content",
                  reason: "Shows scrollbars even when content fits, wasting space and creating visual clutter on touch devices.",
                  example: `<div className="overflow-scroll h-32">
  <p>Short content with unnecessary scrollbars</p>
</div>`,
                  level: "info"
                }
              ]}
            />

            <section className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold">Interactive Playground</h2>
              <p className="text-muted-foreground">Experiment with overflow behaviors and understand how they interact with content dimensions and layout constraints.</p>

              <UtilityPlayground
                title="Overflow Playground"
                description="Test how different overflow values affect content visibility and scrollbar behavior."
                options={["overflow-visible", "overflow-hidden", "overflow-auto", "overflow-scroll"]}
                defaultValue="overflow-auto"
                buildMarkup={(overflowClass, customClasses = "") => {
                  return `<div class="${overflowClass} ${customClasses} w-64 h-32 border border-border">
  <p class="p-4">This content will demonstrate how ${overflowClass} affects visibility and scrolling behavior in a constrained container.</p>
</div>`
                }}
                renderPreview={(overflowClass, customClasses = "") => {
                  return (
                    <div className={`${overflowClass} ${customClasses} w-64 h-32 border border-border`}>
                      <p className="p-4">This content demonstrates how {overflowClass} affects visibility and scrolling in a constrained container. Try different overflow values to see the behavior change.</p>
                    </div>
                  )
                }}
                optionLabel={(value) => value.replace('overflow-', '').replace('-', ' ')}
              />
            </section>

            <ExampleSection title="Real-World Examples">
              <ExampleCard
                title="Responsive Code Block with Auto Scroll"
                description="Code container that scrolls only when content exceeds bounds, preserving layout consistency."
                code={`<!-- Layout: defines container with dimensions -->
<div className="w-full max-w-2xl">
  <!-- Shape: creates overflow context -->
  <div className="overflow-auto bg-slate-900 rounded-lg p-4 h-64">
    <!-- Content: fills container, scrolls if needed -->
    <pre className="text-sm text-slate-300">
      <code>{\`// Long code example that scrolls
const function example() {
  return "scrollable code";
}\`}</code>
    </pre>
  </div>
</div>`}
              >
                <div className="w-full max-w-md">
                  <div className="overflow-auto bg-slate-900 rounded-lg p-4 h-32">
                    <pre className="text-sm text-slate-300">
                      <code>{`// Long code that scrolls
const example = () => {
  return "demonstrates auto-scroll behavior";
};`}</code>
                    </pre>
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Image Gallery with Horizontal Scrolling"
                description="Touch-friendly horizontal scroll that only appears when images exceed container width."
                code={`<!-- Layout: establishes scrolling context -->
<div className="w-full">
  <!-- Shape: enables horizontal scrolling only -->
  <div className="overflow-x-auto flex gap-4 py-4">
    <!-- Content: individual images, each with shape -->
    <div className="w-32 h-24 overflow-hidden rounded-lg flex-shrink-0">
      <img className="w-full h-full object-cover" src="image1.jpg" alt="Gallery image" />
    </div>
    <div className="w-32 h-24 overflow-hidden rounded-lg flex-shrink-0">
      <img className="w-full h-full object-cover" src="image2.jpg" alt="Gallery image" />
    </div>
  </div>
</div>`}
              >
                <div className="w-full">
                  <div className="overflow-x-auto flex gap-4 py-4">
                    <div className="w-32 h-24 overflow-hidden rounded-lg flex-shrink-0 bg-slate-600"></div>
                    <div className="w-32 h-24 overflow-hidden rounded-lg flex-shrink-0 bg-slate-500"></div>
                    <div className="w-32 h-24 overflow-hidden rounded-lg flex-shrink-0 bg-slate-400"></div>
                    <div className="w-32 h-24 overflow-hidden rounded-lg flex-shrink-0 bg-slate-300"></div>
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Text Truncation with Hidden Overflow"
                description="Text that truncates with ellipsis, requiring both overflow-hidden and truncate utilities."
                code={`<!-- Layout: provides width constraint -->
<div className="w-64">
  <!-- Shape: enables truncation -->
  <div className="overflow-hidden">
    <!-- Content: applies ellipsis -->
    <p className="truncate text-sm font-medium">
      This very long text will be truncated with an ellipsis when it exceeds the container width.
    </p>
  </div>
</div>`}
              >
                <div className="w-64">
                  <div className="overflow-hidden">
                    <p className="truncate text-sm font-medium">
                      This very long text will be truncated with an ellipsis when it exceeds the container width.
                    </p>
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Modal Dialog with Fixed Height"
                description="Modal content that scrolls internally when content exceeds viewport, maintaining header and footer visibility."
                code={`<!-- Layout: defines modal structure -->
<div className="fixed inset-0 flex items-center justify-center">
  <div className="w-full max-w-md h-96 flex flex-col">
    <!-- Header: stays visible -->
    <div className="p-4 border-b">
      <h2 className="text-lg font-semibold">Modal Title</h2>
    </div>
    <!-- Shape: scrollable content area -->
    <div className="flex-1 overflow-auto p-4">
      <p>Long content that scrolls...</p>
    </div>
    <!-- Footer: stays visible -->
    <div className="p-4 border-t">
      <button>Close</button>
    </div>
  </div>
</div>`}
              >
                <div className="w-full max-w-sm h-64 flex flex-col border rounded-lg">
                  <div className="p-3 border-b bg-slate-100">
                    <h3 className="text-sm font-semibold">Modal Title</h3>
                  </div>
                  <div className="flex-1 overflow-auto p-3">
                    <p className="text-sm">This content area scrolls when it exceeds the available height while keeping header and footer visible at all times.</p>
                    <p className="text-sm mt-2">More content here...</p>
                    <p className="text-sm mt-2">Even more content...</p>
                  </div>
                  <div className="p-3 border-t bg-slate-100">
                    <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded">Close</button>
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Avatar Badge with Clipped Image"
                description="Circular avatar with clipped image—overflow-hidden creates the circular mask while object-cover fills it properly."
                code={`<!-- Layout: establishes positioning context -->
<div className="relative">
  <!-- Shape: creates circular mask -->
  <div className="w-16 h-16 rounded-full overflow-hidden">
    <!-- Content: fills circular shape -->
    <img className="w-full h-full object-cover" src="avatar.jpg" alt="User avatar" />
  </div>
  <!-- Badge: positioned relative to layout context -->
  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
</div>`}
              >
                <div className="relative inline-block">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-400"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              </ExampleCard>
            </ExampleSection>

            <TipsSection 
              tips={[
                { bold: "Shape vs Layout:", text: "Apply overflow to shape containers, not layout containers—don't clip entire layouts" },
                { bold: "Auto vs Scroll:", text: "Use overflow-auto for responsive design, overflow-scroll only when consistent dimensions are required" },
                { bold: "Truncation pattern:", text: "Text truncation needs both overflow-hidden and truncate—missing overflow creates text overflow" },
                { bold: "Mobile considerations:", text: "Touch devices don't show scrollbars for overflow-auto—provide visual hints that content scrolls" },
                { bold: "Stacking contexts:", text: "overflow creates positioning contexts—absolute children are positioned relative to overflow container" },
                { bold: "Performance:", text: "overflow-hidden is cheaper than overflow-auto—browsers don't need to calculate scroll behavior" }
              ]}
            />

            <RealWorldExamples 
              examples={[
                {
                  title: "Scrolling Table with Sticky Headers",
                  description: "Data table where headers stay visible while body scrolls horizontally and vertically.",
                  code: `<div className="w-full max-h-96 overflow-auto">
  <table className="w-full">
    <thead className="sticky top-0 bg-background">
      <tr>
        <th className="border p-2">Column 1</th>
        <th className="border p-2">Column 2</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border p-2">Data</td><td className="border p-2">More data</td></tr>
    </tbody>
  </table>
</div>`,
                  category: "Tables",
                  difficulty: "intermediate"
                },
                {
                  title: "Infinite Scroll Container",
                  description: "Container that loads more content as user scrolls, using overflow-auto for performance.",
                  code: `<div className="h-96 overflow-auto" onScroll={handleScroll}>
  <div className="space-y-4">
    {items.map(item => (
      <div key={item.id} className="p-4 border rounded">
        {item.content}
      </div>
    ))}
    {loading && <div className="text-center p-4">Loading...</div>}
  </div>
</div>`,
                  category: "Dynamic Content",
                  difficulty: "advanced"
                },
                {
                  title: "Text Overflow with Ellipsis",
                  description: "Single-line text that truncates with ellipsis when container width is exceeded.",
                  code: `<div className="w-48">
  <div className="overflow-hidden">
    <p className="truncate whitespace-nowrap">
      This long text will be truncated with an ellipsis
    </p>
  </div>
</div>`,
                  category: "Text",
                  difficulty: "beginner"
                },
                {
                  title: "Horizontal Image Carousel",
                  description: "Touch-friendly carousel that scrolls horizontally when images exceed container width.",
                  code: `<div className="overflow-x-auto snap-x snap-mandatory">
  <div className="flex gap-4">
    <div className="w-64 h-48 snap-start flex-shrink-0">
      <img className="w-full h-full object-cover rounded" src="slide1.jpg" alt="Slide 1" />
    </div>
    <div className="w-64 h-48 snap-start flex-shrink-0">
      <img className="w-full h-full object-cover rounded" src="slide2.jpg" alt="Slide 2" />
    </div>
  </div>
</div>`,
                  category: "Media",
                  difficulty: "intermediate"
                },
                {
                  title: "Dropdown Menu with Scrolling",
                  description: "Dropdown that scrolls when menu items exceed viewport height while keeping dropdown button visible.",
                  code: `<div className="relative">
  <button className="px-4 py-2 border rounded">Open Menu</button>
  <div className="absolute top-full mt-2 w-64 max-h-48 overflow-auto border rounded shadow-lg bg-background">
    <div className="p-2 space-y-1">
      {menuItems.map(item => (
        <button key={item.id} className="w-full text-left px-3 py-2 rounded hover:bg-muted">
          {item.label}
        </button>
      ))}
    </div>
  </div>
</div>`,
                  category: "Navigation",
                  difficulty: "intermediate"
                }
              ]}
            />

            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">Pre-Ship Checklist</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Shape Layer</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>[ ] Is overflow-hidden applied to shape wrappers, not layout containers?</li>
                    <li>[ ] Does text truncation include both overflow-hidden and truncate?</li>
                    <li>[ ] Are circular/rounded elements using overflow-hidden to mask content?</li>
                    <li>[ ] Does overflow-auto only appear when content actually exceeds bounds?</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Layout Layer</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>[ ] Does percentage height content have a parent with defined height?</li>
                    <li>[ ] Are absolute positioned elements positioned relative to the intended overflow container?</li>
                    <li>[ ] Is scrollbar-only space reserved consistently across the design?</li>
                    <li>[ ] Do fixed-height containers account for header/footer space when using overflow-auto?</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Content Layer</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>[ ] Do images have object-cover/object-contain when in overflow containers?</li>
                    <li>[ ] Does scrollable content have proper padding so text doesn't touch edges?</li>
                    <li>[ ] Are there visual indicators when content can scroll (auto overflow on mobile)?</li>
                    <li>[ ] Does text maintain readability when clipped (adequate line height, font size)?</li>
                  </ul>
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