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

export default function FontSizePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
            <PageHero 
              title="Font Size Utilities"
              description="Master CSS font-size utilities to create readable, accessible text hierarchies. Learn how to scale typography for different devices and maintain consistent visual rhythm."
            />

            <MentalModelSection
              title="Understanding Font Size Architecture"
              description="Font size controls text readability and visual hierarchy. Proper sizing ensures content is accessible while establishing clear information structure and visual flow."
              features={[
                "Font size affects readability and accessibility standards",
                "Responsive scaling adapts to different screen sizes",
                "Text hierarchy guides users through content",
                "Line height works with size for optimal spacing",
                "Zoom and text resize support improve accessibility"
              ]}
              layerAssignment="Typography Layer - Controls text scale and visual hierarchy"
              browserBehavior="Browser renders text at specified size, calculating line height and spacing based on font metrics and CSS properties"
            />

            <ComparisonTable
              title="Font Size Categories"
              columns={["Size Range", "Use Cases", "Accessibility", "Visual Impact"]}
              rows={[
                {
                  feature: "Text XS (12px)",
                  values: ["Metadata, captions", "May be too small", "Minimal visual weight", "Supporting information"]
                },
                {
                  feature: "Text SM (14px)", 
                  values: ["Secondary text, labels", "Good readability", "Light hierarchy", "Support content"]
                },
                {
                  feature: "Text Base (16px)", 
                  values: ["Body text, paragraphs", "Excellent readability", "Standard baseline", "Main content"]
                },
                {
                  feature: "Text LG+ (18px+)", 
                  values: ["Headlines, emphasis", "Very accessible", "Strong hierarchy", "Important information"]
                }
              ]}
            />

            <UtilityGrid
              title="Font Size Utilities"
              items={[
                { cls: "text-xs", desc: "Extra small (12px)" },
                { cls: "text-sm", desc: "Small (14px)" },
                { cls: "text-base", desc: "Base (16px)" },
                { cls: "text-lg", desc: "Large (18px)" },
                { cls: "text-xl", desc: "Extra large (20px)" },
                { cls: "text-2xl", desc: "2X large (24px)" },
                { cls: "text-3xl", desc: "3X large (30px)" },
                { cls: "text-4xl", desc: "4X large (36px)" },
                { cls: "text-5xl", desc: "5X large (48px)" },
                { cls: "text-6xl", desc: "6X large (60px)" },
                { cls: "text-7xl", desc: "7X large (72px)" },
                { cls: "text-8xl", desc: "8X large (96px)" },
                { cls: "text-9xl", desc: "9X large (128px)" }
              ]}
            />

            <section className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold">Font Size Playground</h2>
              <p className="text-muted-foreground">Experiment with different font sizes and see how they affect readability and visual hierarchy.</p>

              <UtilityPlayground
                title="Font Size Explorer"
                description="Compare different font sizes with the same content."
                options={["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl"]}
                defaultValue="text-base"
                buildMarkup={(value, customClasses = "") => {
                  const classes = [value, customClasses].filter(Boolean).join(" ")
                  return `<p class="${classes}">Typography testing text for size comparison</p>`
                }}
                renderPreview={(value, customClasses = "") => {
                  return (
                    <div className="space-y-4">
                      <p className={`${value} ${customClasses} text-white`}>
                        Typography testing text for size comparison
                      </p>
                      <p className={`${value} ${customClasses} text-gray-300`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  )
                }}
              />
            </section>

            <ExampleSection title="Real-World Examples">
              <ExampleCard
                title="Article Typography Scale"
                description="Hierarchical sizing for long-form content"
                code={`<article class="max-w-3xl">
  <h1 class="text-4xl font-bold">Article Title</h1>
  <h2 class="text-2xl font-semibold mt-6">Section Heading</h2>
  <p class="text-base leading-relaxed mt-4">Body paragraph content...</p>
  <p class="text-sm text-gray-500 mt-2">Author metadata</p>
</article>`}
              >
                <div className="max-w-md space-y-3">
                  <h1 className="text-2xl font-bold">Article Title</h1>
                  <h2 className="text-lg font-semibold">Section Heading</h2>
                  <p className="text-sm leading-relaxed">Body paragraph content with appropriate sizing for readability.</p>
                  <p className="text-xs text-gray-500">Author metadata</p>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Dashboard UI Scale"
                description="Compact sizing for interface elements"
                code={`<div class="bg-white rounded-lg p-6">
  <h3 class="text-lg font-semibold">Dashboard</h3>
  <p class="text-sm text-gray-600 mt-2">Summary text</p>
  <div class="text-xs text-gray-500 mt-4">Last updated</div>
</div>`}
              >
                <div className="bg-white rounded-lg p-6 text-gray-900">
                  <h3 className="text-lg font-semibold">Dashboard</h3>
                  <p className="text-sm text-gray-600 mt-2">Summary text</p>
                  <div className="text-xs text-gray-500 mt-4">Last updated: 2 minutes ago</div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Marketing Headlines"
                description="Large, impactful text for marketing copy"
                code={`<div class="text-center py-12">
  <h1 class="text-5xl font-bold">Big Impact</h1>
  <p class="text-xl mt-4">Supporting headline text</p>
  <p class="text-base text-gray-600 mt-6">Description paragraph</p>
</div>`}
              >
                <div className="text-center py-8">
                  <h1 className="text-3xl font-bold">Big Impact</h1>
                  <p className="text-lg mt-2">Supporting headline text</p>
                  <p className="text-sm text-gray-600 mt-4">Description paragraph</p>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Mobile-First Responsive"
                description="Text that scales appropriately across devices"
                code={`<div class="text-2xl md:text-4xl">
  Responsive Heading
</div>
<p class="text-sm md:text-base">
  Responsive body text
</p>`}
              >
                <div className="space-y-3">
                  <div className="text-xl md:text-2xl">
                    Responsive Heading
                  </div>
                  <p className="text-xs md:text-sm">
                    Responsive body text that adapts to screen size
                  </p>
                </div>
              </ExampleCard>
            </ExampleSection>

            <CommonMistakesSection
              mistakes={[
                {
                  title: "Text smaller than 16px without zoom support",
                  reason: "Text below 16px can be difficult to read and may not meet accessibility guidelines for users with visual impairments.",
                  example: "text-xs text-xs for body content",
                  level: "critical"
                },
                {
                  title: "Insufficient size contrast",
                  reason: "Text sizes that are too similar create unclear hierarchy and make content difficult to scan.",
                  example: "text-base text-lg text-xl without clear purpose",
                  level: "warning"
                },
                {
                  title: "Fixed sizes without responsiveness",
                  reason: "Fixed text sizes don't adapt to different screen sizes, creating usability issues on mobile devices.",
                  example: "text-4xl without responsive variants",
                  level: "warning"
                },
                {
                  title: "Ignoring browser zoom",
                  reason: "Users who zoom the browser should have text that scales appropriately for readability.",
                  example: "px units that don't scale with zoom",
                  level: "info"
                }
              ]}
            />

            <TipsSection 
              tips={[
                { bold: "Establish scale:", text: "Use consistent size ratios for typography hierarchy" },
                { bold: "16px baseline:", text: "Use 16px as minimum for body text to ensure accessibility" },
                { bold: "Responsive sizing:", text: "Scale text appropriately for mobile and desktop" },
                { bold: "Line height pairing:", text: "Match line height to font size for optimal readability" },
                { bold: "Test zoom:", text: "Ensure text remains readable at 200% browser zoom" }
              ]}
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}