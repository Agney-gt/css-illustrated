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

export default function FontFamilyPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
            <PageHero 
              title="Font Family Utilities"
              description="Master CSS font-family utilities to control typefaces and create consistent typography. Learn when to use system fonts vs custom fonts for optimal performance and visual design."
            />

            <MentalModelSection
              title="Understanding Font Family Architecture"
              description="Font family determines the visual personality and readability of your text. System fonts provide consistency with user preferences while custom fonts offer unique branding opportunities."
              features={[
                "System fonts respect user preferences and improve accessibility",
                "Custom fonts enhance brand identity but impact performance",
                "Font stacks provide fallbacks for reliability",
                "Font loading strategies affect user experience",
                "Web fonts require licensing and file management"
              ]}
              layerAssignment="Typography Layer - Controls typeface selection and visual identity"
              browserBehavior="Browser renders text using specified font family, falling back through the font stack until it finds an available font"
            />

            <ComparisonTable
              title="Font Family Categories"
              columns={["Font Type", "Use Cases", "Performance", "Visual Character"]}
              rows={[
                {
                  feature: "System Sans-serif",
                  values: ["UI elements, body text", "Excellent", "Clean, modern, familiar"]
                },
                {
                  feature: "System Serif", 
                  values: ["Articles, editorial", "Excellent", "Traditional, readable"]
                },
                {
                  feature: "Monospace", 
                  values: ["Code, technical content", "Excellent", "Technical, precise"]
                },
                {
                  feature: "Web Fonts", 
                  values: ["Branding, headlines", "Variable", "Custom, branded"]
                }
              ]}
            />

            <UtilityGrid
              title="Font Family Utilities"
              items={[
                { cls: "font-sans", desc: "System sans-serif (UI Optimized)" },
                { cls: "font-serif", desc: "System serif (Reading Optimized)" },
                { cls: "font-mono", desc: "Monospace font (Code/Data)" }
              ]}
            />

            <section className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold">Font Family Playground</h2>
              <p className="text-muted-foreground">Test different font families and see how they affect readability and visual appearance.</p>

              <UtilityPlayground
                title="Font Family Explorer"
                description="Compare different font families with the same text content."
                options={["font-sans", "font-serif", "font-mono"]}
                defaultValue="font-sans"
                buildMarkup={(value, customClasses = "") => {
                  const classes = [value, customClasses].filter(Boolean).join(" ")
                  return `<p class="${classes}">The quick brown fox jumps over the lazy dog</p>`
                }}
                renderPreview={(value, customClasses = "") => {
                  return (
                    <div className="space-y-4">
                      <p className={`${value} ${customClasses} text-white text-lg`}>
                        The quick brown fox jumps over the lazy dog
                      </p>
                      <p className={`${value} ${customClasses} text-gray-300 text-sm`}>
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
                      </p>
                    </div>
                  )
                }}
              />
            </section>

            <ExampleSection title="Real-World Examples">
              <ExampleCard
                title="Article Content"
                description="Serif font for improved reading experience in long-form content"
                code={`<article class="font-serif max-w-2xl mx-auto">
  <h1 class="text-3xl font-bold">Article Title</h1>
  <p class="text-lg leading-relaxed mt-4">Article content with serif font...</p>
</article>`}
              >
                <div className="font-serif max-w-md p-4">
                  <h1 className="text-xl font-bold">Article Title</h1>
                  <p className="text-sm leading-relaxed mt-2">Article content with serif font for improved readability in longer texts.</p>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Application UI"
                description="Sans-serif font for clean, modern interface elements"
                code={`<div class="font-sans bg-white rounded-lg p-6">
  <h2 class="font-semibold text-lg">Dashboard</h2>
  <p class="text-gray-600 mt-2">Modern UI with sans-serif font</p>
</div>`}
              >
                <div className="font-sans bg-white rounded-lg p-6 text-gray-900">
                  <h2 className="font-semibold text-lg">Dashboard</h2>
                  <p className="text-gray-600 mt-2">Modern UI with sans-serif font</p>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Code Display"
                description="Monospace font for code and technical content"
                code={`<pre class="font-mono bg-gray-900 text-green-400 p-4 rounded">
  <code>function hello() { return 'world'; }</code>
</pre>`}
              >
                <pre className="font-mono bg-gray-900 text-green-400 p-4 rounded max-w-md">
                  <code>function hello() &lcub; return 'world'; &rcub;</code>
                </pre>
              </ExampleCard>

              <ExampleCard
                title="Mixed Typography"
                description="Combining fonts for visual hierarchy and branding"
                code={`<div>
  <h1 class="font-serif text-4xl">Brand Title</h1>
  <p class="font-sans text-gray-600">Body content in sans-serif</p>
  <code class="font-mono bg-gray-100 px-2 py-1 rounded">code snippet</code>
</div>`}
              >
                <div className="space-y-2">
                  <h1 className="font-serif text-2xl text-gray-900">Brand Title</h1>
                  <p className="font-sans text-gray-600 text-sm">Body content in sans-serif</p>
                  <code className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">code snippet</code>
                </div>
              </ExampleCard>
            </ExampleSection>

            <CommonMistakesSection
              mistakes={[
                {
                  title: "Using too many font families",
                  reason: "Multiple typefaces create visual noise and inconsistency, reducing readability and brand cohesion.",
                  example: "font-serif font-mono font-sans in one element",
                  level: "critical"
                },
                {
                  title: "No font stack fallbacks",
                  reason: "Custom fonts may fail to load, leaving users with system defaults that don't match your design.",
                  example: "@font-face without proper fallbacks",
                  level: "critical"
                },
                {
                  title: "Web fonts without performance optimization",
                  reason: "Large font files slow down page load, especially on mobile connections.",
                  example: "Multiple font formats and no font-display strategy",
                  level: "warning"
                },
                {
                  title: "Ignoring system preferences",
                  reason: "Users may have specific font preferences for accessibility or comfort.",
                  example: "Forcing custom fonts without respecting user settings",
                  level: "info"
                }
              ]}
            />

            <TipsSection 
              tips={[
                { bold: "Establish font hierarchy:", text: "Use different font families for headers vs body vs code" },
                { bold: "Use system fonts:", text: "Prioritize system fonts for better performance and accessibility" },
                { bold: "Font loading strategy:", text: "Implement font-display: swap for better perceived performance" },
                { bold: "Limit web fonts:", text: "Use custom fonts sparingly to maintain fast load times" },
                { bold: "Test across platforms:", text: "System fonts vary by OS - test on Windows, macOS, and mobile" }
              ]}
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}