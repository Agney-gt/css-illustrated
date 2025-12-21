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
import { backgroundColorUtilities } from "@/lib/utilities"

export default function BgColorPage() {
  const [selectedColor, setSelectedColor] = useState("bg-blue-600")
  const [customColors, setCustomColors] = useState("")
  
  const utilityItems = backgroundColorUtilities.classes.map(item => ({
    cls: item.class,
    desc: item.description
  }))

  const allTailwindColors = [
    "bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-green-500", 
    "bg-teal-500", "bg-blue-500", "bg-indigo-500", "bg-purple-500", 
    "bg-pink-500", "bg-gray-500", "bg-slate-700", "bg-zinc-700",
    "bg-neutral-700", "bg-stone-700", "bg-white", "bg-black"
  ]

  const tips = [
    { bold: "Semantic tokens:", text: "Use bg-background, bg-card for design system consistency" },
    { bold: "Contrast:", text: "Always ensure text remains readable on colored backgrounds" },
    { bold: "Hover states:", text: "Add darker/lighter variations for interactive elements" },
    { bold: "Dark mode:", text: "Use semantic colors that adapt to theme changes" }
  ]

  const commonMistakes = [
    {
      title: "Poor color contrast",
      reason: "Light text on light backgrounds or dark text on dark backgrounds makes content unreadable.",
      example: `<div class="bg-gray-100 text-gray-300">❌ Low contrast</div>`,
      level: "critical" as const
    },
    {
      title: "Hard-coded values",
      reason: "Avoid absolute colors that don't adapt to themes or accessibility.",
      example: `<div class="bg-#FF0000">❌ Hard-coded red</div>`,
      level: "warning" as const
    },
    {
      title: "Ignoring hover states",
      reason: "Interactive elements need visual feedback through background changes.",
      example: `<button class="bg-blue-500">❌ No hover state</button>`,
      level: "warning" as const
    }
  ]

  const comparisonData = {
    title: "Background Approaches Comparison",
    columns: ["Method", "Control", "Accessibility", "Best For"],
    rows: [
      {
        feature: "bg-color",
        values: ["Specific color", "Direct control", "Check contrast", "Accents, states"],
      },
      {
        feature: "bg-white/black",
        values: ["Extremes", "Simple", "High contrast", "Base backgrounds"],
      },
      {
        feature: "Semantic tokens",
        values: ["Theme-aware", "Indirect", "Automatic", "Design systems"],
      }
    ]
  }

  const realWorldExamples = [
    {
      title: "Status Badge",
      description: "Color-coded status indicators",
      code: `<div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
  Active
</div>
<div class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
  Error
</div>
<div class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
  Pending
</div>`,
      preview: (
        <div className="flex gap-2">
          <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Active</div>
          <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">Error</div>
          <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">Pending</div>
        </div>
      ),
      category: "UI Components"
    },
    {
      title: "Card System",
      description: "Semantic card backgrounds with theme support",
      code: `<div class="bg-card p-6 rounded-lg shadow-lg">
  <h3 class="text-lg font-semibold">Card Title</h3>
  <p class="text-muted-foreground">Card content with semantic background</p>
</div>`,
      preview: (
        <div className="bg-card p-4 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold">Card Title</h3>
          <p className="text-xs text-muted-foreground mt-1">Card content with semantic background</p>
        </div>
      ),
      category: "Design Systems"
    },
    {
      title: "Section Backgrounds",
      description: "Themed sections with proper contrast",
      code: `<section class="bg-slate-50 text-slate-900 py-12">
  <h2 class="text-2xl font-bold">Light Section</h2>
</section>

<section class="bg-slate-900 text-slate-50 py-12">
  <h2 class="text-2xl font-bold">Dark Section</h2>
</section>`,
      preview: (
        <div className="space-y-2">
          <div className="bg-slate-50 text-slate-900 p-4 rounded">
            <h4 className="text-sm font-bold">Light Section</h4>
          </div>
          <div className="bg-slate-900 text-slate-50 p-4 rounded">
            <h4 className="text-sm font-bold">Dark Section</h4>
          </div>
        </div>
      ),
      category: "Layouts"
    },
    {
      title: "Interactive Button",
      description: "Button with hover and active states",
      code: `<button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
  Interactive Button
</button>`,
      preview: (
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm">
          Interactive Button
        </button>
      ),
      category: "Interactive Elements"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero 
            title={backgroundColorUtilities.title}
            description={backgroundColorUtilities.description}
          />

          <MentalModelSection
            title="Understanding Background Colors"
            description="Background colors establish visual hierarchy, brand identity, and user experience through element filling."
            features={[
              "Colors create emotional responses and guide user attention",
              "Semantic tokens (bg-card, bg-background) adapt to themes",
              "Contrast is critical for accessibility and readability",
              "Hover states provide essential interactive feedback"
            ]}
            layerAssignment="Background Layer - Visual foundation beneath content"
            browserBehavior="Browser fills element background with solid color or gradient, overriding any default background"
          />

          <UtilityGrid 
            title="Available Classes"
            items={utilityItems}
          />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different background colors and text combinations."
            options={allTailwindColors}
            defaultValue="bg-blue-600"
            defaultCustomClasses="h-32 w-full flex items-center justify-center text-white font-bold rounded-lg"
            buildMarkup={(colorClass, customClasses = "") => {
              const classes = [colorClass, customClasses].filter(Boolean).join(" ")
              return `<div class="${classes}">
  Background Color Demo
</div>`
            }}
            renderPreview={(colorClass, customClasses = "") => {
              const classes = [colorClass, customClasses].filter(Boolean).join(" ")
              return (
                <div className={`text-white font-semibold rounded-lg ${classes}`}>
                  Background Color Demo
                </div>
              )
            }}
            optionLabel={(value) => value.replace("bg-", "").replace("-", " ")}
          />

          {/* Custom Color Selector */}
          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Color Explorer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-6">
              {allTailwindColors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-12 rounded border-2 transition-all ${
                    selectedColor === color
                      ? "border-blue-500 ring-2 ring-blue-300"
                      : "border-gray-300 hover:border-gray-400"
                  } ${color}`}
                >
                  {selectedColor === color && (
                    <div className="text-xs text-center">✓</div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Selected Color: {selectedColor}</h3>
              <div className={`h-32 rounded-lg flex items-center justify-center text-white font-bold ${selectedColor}`}>
                Live Preview
              </div>
            </div>
          </section>

          <ComparisonTable {...comparisonData} />

          <RealWorldExamples 
            title="Real World Examples"
            description="See how background color utilities are used in practical applications."
            examples={realWorldExamples}
          />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Status Indicators"
              description="Color-coded status and feedback elements"
              code={`<div class="bg-green-100 text-green-800 px-3 py-1 rounded">
  Success Message
</div>
<div class="bg-red-100 text-red-800 px-3 py-1 rounded">
  Error Message
</div>`}
            >
              <div className="flex gap-2">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Success</div>
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm">Error</div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Branding Colors"
              description="Consistent brand color usage"
              code={`<div class="bg-blue-600 text-white p-4 rounded-lg">
  Brand Element
</div>`}
            >
              <div className="bg-blue-600 text-white p-4 rounded-lg text-sm">
                Brand Element
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock language="jsx" code={backgroundColorUtilities.codeSnippet} />
          </div>

          <CommonMistakesSection mistakes={commonMistakes} />

          <TipsSection tips={tips} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
