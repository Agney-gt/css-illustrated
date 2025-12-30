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
import { backgroundRepeatUtilities } from "@/lib/utilities"

export default function BackgroundRepeatPage() {
  const utilityItems = backgroundRepeatUtilities.classes.map(item => ({
    cls: item.class,
    desc: item.description
  }))

  const tips = [
    { bold: "bg-no-repeat:", text: "Perfect for hero images and single logos" },
    { bold: "bg-repeat-x:", text: "Ideal for horizontal borders and separators" },
    { bold: "bg-repeat-y:", text: "Great for vertical sidebars and patterns" },
    { bold: "bg-repeat-space:", text: "Best for tile patterns that shouldn't stretch" }
  ]

  const commonMistakes = [
    {
      title: "Using bg-repeat with large images",
      reason: "Large repeating images can cause performance issues and visual clutter.",
      example: `<div class="bg-repeat bg-900">❌ Large image repeated</div>`,
      level: "critical" as const
    },
    {
      title: "Forgetting bg-no-repeat with bg-cover",
      reason: "Cover images might repeat unwantedly when container expands.",
      example: `<div class="bg-cover">❌ Might repeat on scroll</div>`,
      level: "warning" as const
    },
    {
      title: "Using bg-repeat without sizing",
      reason: "Default auto sizing may cause unexpected repetition patterns.",
      example: `<div class="bg-repeat">❌ Uncontrolled repetition</div>`,
      level: "info" as const
    }
  ]

  const comparisonData = {
    title: "Background Repeat Properties Comparison",
    columns: ["Property", "X-Axis", "Y-Axis", "Best Use Case"],
    rows: [
      {
        feature: "bg-repeat",
        values: ["Repeats", "Repeats", "Seamless patterns", "Textures/watermarks"],
      },
      {
        feature: "bg-no-repeat",
        values: ["No repeat", "No repeat", "Single display", "Hero images/logos"],
      },
      {
        feature: "bg-repeat-x",
        values: ["Repeats", "No repeat", "Horizontal strips", "Borders/separators"],
      },
      {
        feature: "bg-repeat-y",
        values: ["No repeat", "Repeats", "Vertical strips", "Sidebars/columns"],
      }
    ]
  }

  const realWorldExamples = [
    {
      title: "Seamless Texture",
      description: "Subtle repeating background texture",
      code: `<section class="bg-repeat p-8" style="background-image: url('texture.svg'); background-size: 100px 100px;">
  <div class="bg-white/90 p-6 rounded-lg">
    <h2 class="text-xl font-bold">Content Area</h2>
    <p>Seamless background texture</p>
  </div>
</section>`,
      preview: (
        <div className="bg-repeat p-4 rounded" style={{backgroundSize: '40px 40px', backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, #f9fafb 10px, #f9fafb 20px)'}}>
          <div className="bg-white/90 p-3 rounded">
            <p className="text-sm font-bold">Seamless Texture</p>
          </div>
        </div>
      ),
      category: "Textures"
    },
    {
      title: "Horizontal Border",
      description: "Decorative top border using horizontal repeat",
      code: `<header class="bg-repeat-x h-16" style="background-image: url('border-pattern.svg'); background-size: 200px 16px;">
  <div class="flex items-center justify-center h-full">
    <h1 class="text-2xl font-bold">Header</h1>
  </div>
</header>`,
      preview: (
        <div className="bg-repeat-x h-12 relative" style={{backgroundSize: '60px 12px', backgroundImage: 'repeating-linear-gradient(90deg, #3b82f6, #3b82f6 20px, #93c5fd 20px, #93c5fd 40px)'}}>
          <div className="flex items-center justify-center h-full">
            <span className="bg-white px-2 text-sm font-bold">Border Pattern</span>
          </div>
        </div>
      ),
      category: "Borders"
    },
    {
      title: "Hero Section",
      description: "Non-repeating hero image",
      code: `<section class="bg-no-repeat bg-cover bg-center h-96" style="background-image: url('hero.jpg')">
  <div class="flex items-center justify-center h-full bg-black/40">
    <div class="text-center text-white">
      <h1 class="text-4xl font-bold mb-4">Hero Title</h1>
      <p class="text-xl">Subtitle text</p>
    </div>
  </div>
</section>`,
      preview: (
        <div className="bg-no-repeat bg-cover bg-center h-48 relative rounded" style={{backgroundImage: "url('https://picsum.photos/600/300?random=1')"}}>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="text-center text-white">
              <h2 className="text-lg font-bold">Hero Title</h2>
              <p className="text-sm">Subtitle text</p>
            </div>
          </div>
        </div>
      ),
      category: "Hero Sections"
    },
    {
      title: "Sidebar Pattern",
      description: "Vertical repeating pattern for sidebar",
      code: `<aside class="bg-repeat-y w-64 h-screen" style="background-image: url('sidebar-pattern.svg'); background-size: 64px 64px;">
  <nav class="p-6">
    <ul class="space-y-4">
      <li>Menu Item 1</li>
      <li>Menu Item 2</li>
    </ul>
  </nav>
</aside>`,
      preview: (
        <div className="bg-repeat-y w-32 h-48 p-3 rounded" style={{backgroundSize: '32px 32px', backgroundImage: 'repeating-linear-gradient(0deg, #f3f4f6, #f3f4f6 16px, #e5e7eb 16px, #e5e7eb 32px)'}}>
          <nav className="space-y-2">
            <div className="bg-white px-2 py-1 rounded text-sm">Menu 1</div>
            <div className="bg-white px-2 py-1 rounded text-sm">Menu 2</div>
          </nav>
        </div>
      ),
      category: "Navigation"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero 
            title={backgroundRepeatUtilities.title}
            description={backgroundRepeatUtilities.description}
          />

          <MentalModelSection
            title="Understanding Background Repetition"
            description="Background repeat controls how images tile within their container, affecting patterns, borders, and textures."
            features={[
              "Determines tiling behavior on X and Y axes independently",
              "Works with background-size for pattern scaling",
              "Affects performance - large patterns may impact rendering",
              "Essential for seamless textures and decorative elements"
            ]}
            layerAssignment="Background Layer - Controls visual presentation and tiling behavior"
            browserBehavior="Browser calculates optimal tiling based on container dimensions and repeat settings"
          />

          <UtilityGrid 
            title="Available Classes"
            items={utilityItems}
          />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different background repeat patterns."
            options={backgroundRepeatUtilities.classes.map(item => item.class)}
            defaultValue="bg-repeat"
            defaultCustomClasses="h-48 w-full border-2 border-dashed border-gray-300"
            buildMarkup={(repeatClass, customClasses = "") => {
              const classes = [repeatClass, customClasses].filter(Boolean).join(" ")
              return `<div class="${classes}" style="background-image: url('https://picsum.photos/100/100'); background-size: 50px 50px;">
  Pattern Background
</div>`
            }}
            renderPreview={(repeatClass, customClasses = "") => {
              const classes = [repeatClass, customClasses].filter(Boolean).join(" ")
              return (
                <div className={`text-white font-semibold ${classes}`} style={{backgroundSize: '50px 50px', backgroundImage: 'repeating-linear-gradient(45deg, #6366f1, #6366f1 25px, #a78bfa 25px, #a78bfa 50px)'}}>
                  Pattern Background
                </div>
              )
            }}
            optionLabel={(value) => value.replace("bg-repeat-", "").replace("bg-", "").replace("-", " ")}
          />

          <ComparisonTable {...comparisonData} />

          <RealWorldExamples 
            title="Real World Examples"
            description="See how background repeat utilities are used in practical applications."
            examples={realWorldExamples}
          />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Seamless Pattern"
              description="Create seamless repeating patterns"
              code={`<div class="bg-repeat p-8" 
     style="background-image: url('pattern.svg'); background-size: 60px 60px;">
  Pattern Content
</div>`}
            >
              <div className="bg-repeat p-4 rounded" style={{backgroundSize: '30px 30px', backgroundImage: 'repeating-linear-gradient(45deg, #10b981, #10b981 15px, #34d399 15px, #34d399 30px)'}}>
                <p className="text-white text-sm font-bold">Pattern Content</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Non-Repeating Hero"
              description="Single hero image without repetition"
              code={`<div class="bg-no-repeat bg-cover bg-center h-96" 
     style="background-image: url('hero.jpg')">
  Hero Content
</div>`}
            >
              <div className="bg-no-repeat bg-cover bg-center h-32 rounded" style={{backgroundImage: "url('https://picsum.photos/400/200?random=2')"}}>
                <p className="text-white text-sm font-bold">Hero Content</p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock language="jsx" code={backgroundRepeatUtilities.codeSnippet} />
          </div>

          <CommonMistakesSection mistakes={commonMistakes} />

          <TipsSection tips={tips} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
