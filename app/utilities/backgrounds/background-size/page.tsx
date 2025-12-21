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
import { backgroundSizeUtilities } from "@/lib/utilities"

export default function BackgroundSizePage() {
  const utilityItems = backgroundSizeUtilities.classes.map(item => ({
    cls: item.class,
    desc: item.description
  }))

  const tips = [
    { bold: "bg-cover:", text: "Perfect for hero images and full-width banners" },
    { bold: "bg-contain:", text: "Great for logos and product images that must stay complete" },
    { bold: "bg-auto:", text: "Ideal for decorative patterns and textures" },
    { bold: "Combine with position:", text: "Use with bg-center, bg-top for precise placement" }
  ]

  const commonMistakes = [
    {
      title: "Using bg-cover on detailed images",
      reason: "bg-cover crops important parts of images when aspect ratios don't match.",
      example: `<div class="bg-cover">❌ Crops product image</div>`,
      level: "warning" as const
    },
    {
      title: "Forgetting background-position with bg-contain",
      reason: "bg-contain may leave empty space if image doesn't fill container.",
      example: `<div class="bg-contain">❌ Image might be misaligned</div>`,
      level: "warning" as const
    },
    {
      title: "Using bg-auto on large containers",
      reason: "bg-auto may show very small images in large containers.",
      example: `<div class="w-96 h-96 bg-auto">❌ Tiny pattern</div>`,
      level: "info" as const
    }
  ]

  const comparisonData = {
    title: "Background Size Properties Comparison",
    columns: ["Property", "Image Behavior", "Best For", "Container Size Impact"],
    rows: [
      {
        feature: "bg-auto",
        values: ["Natural size", "Icons, patterns", "Small elements", "No impact"],
      },
      {
        feature: "bg-cover",
        values: ["Covers fully", "Hero images", "Full sections", "May crop content"],
      },
      {
        feature: "bg-contain",
        values: ["Fits completely", "Logos, products", "Brand elements", "May leave space"],
      }
    ]
  }

  const realWorldExamples = [
    {
      title: "Hero Banner",
      description: "Full-width hero section with cover image",
      code: `<section class="bg-cover bg-center h-96" style="background-image: url('hero.jpg')">
  <div class="flex items-center justify-center h-full bg-black/50 text-white">
    <h1 class="text-4xl font-bold">Welcome</h1>
  </div>
</section>`,
      preview: (
        <div className="bg-cover bg-center h-48 relative rounded" style={{backgroundImage: "url('https://picsum.photos/600/300?random=1')"}}>
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
            <h2 className="text-xl font-bold">Hero Banner</h2>
          </div>
        </div>
      ),
      category: "Hero Sections"
    },
    {
      title: "Product Gallery",
      description: "Product images with contain sizing",
      code: `<div class="grid grid-cols-3 gap-4">
  <div class="bg-contain bg-center h-64" style="background-image: url('product1.jpg')"></div>
  <div class="bg-contain bg-center h-64" style="background-image: url('product2.jpg')"></div>
  <div class="bg-contain bg-center h-64" style="background-image: url('product3.jpg')"></div>
</div>`,
      preview: (
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-contain bg-center h-24 rounded" style={{backgroundImage: `url('https://picsum.photos/200/200?random=${i+10}')`}}></div>
          ))}
        </div>
      ),
      category: "E-commerce"
    },
    {
      title: "Pattern Background",
      description: "Subtle repeating pattern with auto sizing",
      code: `<div class="bg-repeat bg-auto p-8" style="background-image: url('pattern.svg')">
  <p>Content with pattern background</p>
</div>`,
      preview: (
        <div className="bg-repeat bg-auto p-4 rounded border" style={{backgroundImage: 'repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #ffffff 10px, #ffffff 20px)'}}>
          <p className="text-sm">Pattern Background</p>
        </div>
      ),
      category: "Patterns"
    },
    {
      title: "Logo Container",
      description: "Logo scaling with contain and centering",
      code: `<div class="bg-contain bg-center w-32 h-16" style="background-image: url('logo.svg')">
  <!-- Logo content -->
</div>`,
      preview: (
        <div className="bg-contain bg-center w-32 h-16 rounded border flex items-center justify-center" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100\' height=\'50\' fill=\'%234F46E5\'/%3E%3Ctext x=\'50\' y=\'30\' text-anchor=\'middle\' fill=\'white\' font-size=\'14\'%3ELOGO%3C/text%3E%3C/svg%3E")'}}>
        </div>
      ),
      category: "Branding"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero 
            title={backgroundSizeUtilities.title}
            description={backgroundSizeUtilities.description}
          />

          <MentalModelSection
            title="Understanding Background Image Sizing"
            description="Background size controls how images scale relative to their container, affecting coverage and readability."
            features={[
              "Controls image scaling behavior within defined container dimensions",
              "Works with background-position to determine image placement",
              "Affects performance - larger cover images may load slower",
              "Can be combined with background-repeat for patterned effects"
            ]}
            layerAssignment="Background Layer - Controls visual presentation layer behind content"
            browserBehavior="Browser calculates optimal scaling while maintaining image aspect ratio or covering requirements"
          />

          <UtilityGrid 
            title="Available Classes"
            items={utilityItems}
          />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different background sizes and positions."
            options={backgroundSizeUtilities.classes.map(item => item.class)}
            defaultValue="bg-cover"
            defaultCustomClasses="h-64 border-2 border-dashed border-gray-300 bg-center"
            buildMarkup={(sizeClass, customClasses = "") => {
              const classes = [sizeClass, customClasses].filter(Boolean).join(" ")
              return `<div class="${classes}" style="background-image: url('https://picsum.photos/400/300')">
  Background Image Demo
</div>`
            }}
            renderPreview={(sizeClass, customClasses = "") => {
              const classes = [sizeClass, customClasses].filter(Boolean).join(" ")
              return (
                <div className={`text-white font-semibold ${classes}`} style={{backgroundImage: "url('https://picsum.photos/400/300?random=5')"}}>
                  Background Image Demo
                </div>
              )
            }}
            optionLabel={(value) => value.replace("bg-", "").replace("-", " ")}
          />

          <ComparisonTable {...comparisonData} />

          <RealWorldExamples 
            title="Real World Examples"
            description="See how background size utilities are used in practical applications."
            examples={realWorldExamples}
          />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Full-Width Hero"
              description="Hero image covering entire viewport width"
              code={`<div class="bg-cover bg-center h-screen relative" 
     style="background-image: url('hero.jpg')">
  <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
    <h1 class="text-white text-5xl font-bold">Hero Title</h1>
  </div>
</div>`}
            >
              <div className="bg-cover bg-center h-48 relative rounded" style={{backgroundImage: "url('https://picsum.photos/800/400?random=2')"}}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-bold">Hero Title</h2>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Aspect Ratio Grid"
              description="Maintain aspect ratios with bg-contain"
              code={`<div class="grid grid-cols-2 gap-4">
  <div class="bg-contain bg-center h-48 bg-gray-100 rounded" 
       style="background-image: url('portrait.jpg')"></div>
  <div class="bg-contain bg-center h-48 bg-gray-100 rounded" 
       style="background-image: url('landscape.jpg')"></div>
</div>`}
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-contain bg-center h-24 bg-gray-100 rounded" style={{backgroundImage: "url('https://picsum.photos/300/400?random=3')"}}></div>
                <div className="bg-contain bg-center h-24 bg-gray-100 rounded" style={{backgroundImage: "url('https://picsum.photos/400/300?random=4')"}}></div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock language="jsx" code={backgroundSizeUtilities.codeSnippet} />
          </div>

          <CommonMistakesSection mistakes={commonMistakes} />

          <TipsSection tips={tips} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
