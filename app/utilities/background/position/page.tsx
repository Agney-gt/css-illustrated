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
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge"
import CodeBlock from "@/app/utilities/components/code-block"
import { backgroundPositionUtilities } from "@/lib/utilities"

export default function BackgroundPositionPage() {
  const utilities = backgroundPositionUtilities.classes.map(item => item.class)
  const [activeClass, setActiveClass] = useState(utilities[0])

  const utilityItems = backgroundPositionUtilities.classes.map(item => ({
    cls: item.class,
    desc: item.description
  }))

  const tips = [
    { bold: "bg-center:", text: "Perfect for hero images and focal points" },
    { bold: "bg-top:", text: "Ideal for headers and top-aligned content" },
    { bold: "bg-bottom:", text: "Great for footers and bottom-heavy designs" },
    { bold: "Combine with size:", text: "Use with bg-cover/contain for complete control" }
  ]

  const commonMistakes = [
    {
      title: "Forgetting background-size with positioning",
      reason: "Without proper sizing, positioning may not work as expected.",
      example: `<div class="bg-center">❌ No size defined</div>`,
      level: "critical" as const
    },
    {
      title: "Using positioning with repeating patterns",
      reason: "Position has no effect on repeating patterns that fill the container.",
      example: `<div class="bg-repeat bg-left-top">❌ Position ignored</div>`,
      level: "warning" as const
    },
    {
      title: "Assuming default is center",
      reason: "Default background position is top-left, not center.",
      example: `<div class="bg-cover">❌ Actually top-left</div>`,
      level: "info" as const
    }
  ]

  const comparisonData = {
    title: "Background Position Properties Comparison",
    columns: ["Property", "X Position", "Y Position", "Common Use"],
    rows: [
      {
        feature: "bg-left-top",
        values: ["Left", "Top", "Corner branding", "Logos, watermarks"],
      },
      {
        feature: "bg-center",
        values: ["Center", "Center", "Balanced focus", "Hero images, portraits"],
      },
      {
        feature: "bg-right-bottom",
        values: ["Right", "Bottom", "Corner accents", "Decorative elements"],
      },
      {
        feature: "bg-top",
        values: ["Center", "Top", "Top focus", "Headers, banners"],
      },
      {
        feature: "bg-bottom",
        values: ["Center", "Bottom", "Bottom focus", "Footers, interfaces"],
      }
    ]
  }

  const positionMap: Record<string, string> = {
    "bg-left": "top-1/2 left-2 -translate-y-1/2",
    "bg-center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bg-right": "top-1/2 right-2 -translate-y-1/2",
    "bg-top": "top-2 left-1/2 -translate-x-1/2",
    "bg-bottom": "bottom-2 left-1/2 -translate-x-1/2",
    "bg-left-top": "top-2 left-2",
    "bg-right-top": "top-2 right-2",
    "bg-left-bottom": "bottom-2 left-2",
    "bg-right-bottom": "bottom-2 right-2",
  }

  const realWorldExamples = [
    {
      title: "Hero Section",
      description: "Centered hero background with overlay content",
      code: `<section class="bg-center bg-cover h-screen relative" style="background-image: url('hero.jpg')">
  <div class="absolute inset-0 flex items-center justify-center bg-black/40">
    <div class="text-center text-white">
      <h1 class="text-5xl font-bold mb-4">Hero Title</h1>
      <p class="text-xl">Centered content over background</p>
    </div>
  </div>
</section>`,
      preview: (
        <div className="bg-center bg-cover h-48 relative rounded" style={{backgroundImage: "url('https://picsum.photos/600/300?random=1')"}}>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="text-center text-white">
              <h2 className="text-lg font-bold">Hero Title</h2>
              <p className="text-sm">Centered content</p>
            </div>
          </div>
        </div>
      ),
      category: "Hero Sections"
    },
    {
      title: "Corner Logo",
      description: "Logo positioned in top-left corner",
      code: `<header class="relative bg-white h-20">
  <div class="absolute left-4 top-4 bg-no-repeat bg-contain w-16 h-16" 
       style="background-image: url('logo.svg')"></div>
  <nav class="flex items-center justify-center h-full">
    Navigation items
  </nav>
</header>`,
      preview: (
        <div className="relative bg-gray-100 h-16 rounded border">
          <div className="absolute left-2 top-2 bg-no-repeat bg-contain w-12 h-12" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%234F46E5\'/%3E%3Ctext x=\'50\' y=\'60\' text-anchor=\'middle\' fill=\'white\' font-size=\'20\'%3ELOGO%3C/text%3E%3C/svg%3E")'}}></div>
          <div className="flex items-center justify-center h-full px-16">
            <span className="text-sm">Navigation</span>
          </div>
        </div>
      ),
      category: "Branding"
    },
    {
      title: "Footer Background",
      description: "Bottom-aligned background for footer",
      code: `<footer class="bg-bottom bg-no-repeat p-8" 
     style="background-image: url('footer-pattern.png'); min-height: 200px;">
  <div class="text-center text-gray-600">
    <p>&copy; 2024 Company Name</p>
    <p>Bottom aligned background pattern</p>
  </div>
</footer>`,
      preview: (
        <div className="bg-bottom bg-no-repeat p-4 rounded" style={{backgroundImage: 'repeating-linear-gradient(0deg, #e5e7eb, #e5e7eb 10px, #f9fafb 10px, #f9fafb 20px)', minHeight: '120px'}}>
          <div className="text-center text-gray-600">
            <p className="text-sm">© 2024 Company</p>
            <p className="text-xs">Bottom aligned</p>
          </div>
        </div>
      ),
      category: "Footers"
    }
  ]

  const renderPreview = (cls: string) => (
    <div className="border border-border rounded-lg p-6 bg-gray-900 text-white text-center">
      <p className="font-semibold mb-4">Visual: {cls}</p>
      <div className={`relative w-full h-48 rounded-lg border bg-no-repeat bg-cover ${cls}`}
           style={{backgroundImage: "url('https://picsum.photos/400/200?text=Position')"}}>
        <div className={`absolute w-12 h-12 bg-purple-500/70 rounded-md backdrop-blur-sm transition-all duration-300 ${positionMap[cls] || 'top-4 left-4'}`} />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero 
            title={backgroundPositionUtilities.title}
            description={backgroundPositionUtilities.description}
          />

          <MentalModelSection
            title="Understanding Background Positioning"
            description="Background position controls where images appear within their container, affecting visual composition and content hierarchy."
            features={[
              "Positions images using keywords or specific coordinates",
              "Works with background-size to control scaling behavior",
              "Default position is top-left unless specified",
              "Essential for hero images, logos, and decorative elements"
            ]}
            layerAssignment="Background Layer - Controls visual placement within element boundaries"
            browserBehavior="Browser calculates image placement based on container dimensions and position keywords"
          />

          <UtilityGrid 
            title="Available Classes"
            items={utilityItems}
          />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different background positions."
            options={utilities}
            defaultValue="bg-center"
            defaultCustomClasses="h-48 w-full border-2 border-dashed border-gray-300 bg-cover"
            buildMarkup={(positionClass, customClasses = "") => {
              const classes = [positionClass, customClasses].filter(Boolean).join(" ")
              return `<div class="${classes}" style="background-image: url('https://picsum.photos/300/200')">
  Background Position Demo
</div>`
            }}
            renderPreview={(positionClass, customClasses = "") => {
              const classes = [positionClass, customClasses].filter(Boolean).join(" ")
              return (
                <div className={`text-white font-semibold ${classes}`} style={{backgroundImage: "url('https://picsum.photos/300/200?random=5')"}}>
                  Background Position Demo
                </div>
              )
            }}
            optionLabel={(value) => value.replace("bg-", "").replace("-", " ")}
          />

          {/* Interactive Position Selector */}
          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Position Visualizer</h2>
            <div className="flex flex-wrap gap-3">
              {utilities.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setActiveClass(cls)}
                  className={`px-4 py-2 rounded font-medium transition ${
                    activeClass === cls
                      ? "bg-blue-600 text-white shadow"
                      : "bg-card/20 hover:bg-card/30"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
            {renderPreview(activeClass)}
            <p className="text-sm text-muted-foreground">
              {backgroundPositionUtilities.classes.find(item => item.class === activeClass)?.description}
            </p>
          </section>

          <ComparisonTable {...comparisonData} />

          <InteractiveChallenge
            title="The Misplaced Watermark"
            description="A photography portfolio displays images with a brand watermark. The watermark should appear in the bottom-right corner, but it's currently showing in the top-left. Which position class will move it to the correct corner?"
            codeSnippet={`<div class="relative w-full h-64 bg-no-repeat bg-contain {input}"
     style="background-image: url('watermark.png')">
  <img src="photo.jpg" class="w-full h-full object-cover" />
</div>`}
            options={["bg-left-top", "bg-right-top", "bg-left-bottom", "bg-right-bottom"]}
            correctOption="bg-right-bottom"
            renderPreview={(userClass) => {
              let statusText = ""
              let isCorrect = false
              let positionLabel = ""

              const watermarkPosition: Record<string, string> = {
                "bg-left-top": "top-2 left-2",
                "bg-right-top": "top-2 right-2",
                "bg-left-bottom": "bottom-2 left-2",
                "bg-right-bottom": "bottom-2 right-2",
              }

              const cornerLabels: Record<string, string> = {
                "bg-left-top": "↖ Top Left",
                "bg-right-top": "↗ Top Right",
                "bg-left-bottom": "↙ Bottom Left",
                "bg-right-bottom": "↘ Bottom Right",
              }

              if (userClass === "bg-right-bottom") {
                statusText = "Perfect! Watermark is in the bottom-right corner."
                positionLabel = cornerLabels[userClass]
                isCorrect = true
              } else if (userClass === "bg-left-top") {
                statusText = "Watermark is top-left (default) — not the target corner"
                positionLabel = cornerLabels[userClass]
              } else if (userClass === "bg-right-top") {
                statusText = "Close! Right side, but wrong vertical position"
                positionLabel = cornerLabels[userClass]
              } else if (userClass === "bg-left-bottom") {
                statusText = "Bottom is correct, but wrong horizontal side"
                positionLabel = cornerLabels[userClass]
              } else {
                statusText = "Select an option to position the watermark"
                positionLabel = "—"
              }

              return (
                <div className="flex flex-col items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-6 rounded-lg gap-6">
                  <div className="text-center w-full max-w-lg">
                    <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">
                      Portfolio Image Preview
                    </p>
                    <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                      {/* Simulated photo */}
                      <div 
                        className="w-full h-48 bg-cover bg-center"
                        style={{
                          backgroundImage: "url('https://picsum.photos/600/400?random=landscape')"
                        }}
                      >
                        {/* Watermark overlay */}
                        <div className="relative w-full h-full">
                          <div 
                            className={`absolute transition-all duration-500 ease-out ${watermarkPosition[userClass] || watermarkPosition["bg-left-top"]}`}
                          >
                            <div className={`px-3 py-1.5 rounded text-xs font-bold shadow-lg transition-colors ${
                              isCorrect 
                                ? "bg-green-500 text-white" 
                                : "bg-white/90 text-slate-700"
                            }`}>
                              📷 PHOTO CO.
                            </div>
                          </div>
                          
                          {/* Target indicator */}
                          {!isCorrect && (
                            <div className="absolute bottom-2 right-2 px-3 py-1.5 rounded border-2 border-dashed border-green-400/60 text-xs text-green-600 dark:text-green-400 bg-green-50/50 dark:bg-green-900/20">
                              Target ↘
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Photo info bar */}
                      <div className="px-4 py-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">sunset_mountains.jpg</span>
                        <span className="text-xs text-slate-400">{positionLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner position guide */}
                  <div className="w-full max-w-lg">
                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                      Position Grid
                    </p>
                    <div className="grid grid-cols-3 gap-1 bg-slate-200 dark:bg-slate-800 rounded-lg p-1 text-xs">
                      <div className={`p-2 rounded text-center transition-colors ${userClass === "bg-left-top" ? "bg-blue-500 text-white" : "bg-white dark:bg-slate-900 text-slate-500"}`}>
                        ↖ TL
                      </div>
                      <div className="p-2 rounded text-center bg-white dark:bg-slate-900 text-slate-500">
                        ↑ T
                      </div>
                      <div className={`p-2 rounded text-center transition-colors ${userClass === "bg-right-top" ? "bg-blue-500 text-white" : "bg-white dark:bg-slate-900 text-slate-500"}`}>
                        ↗ TR
                      </div>
                      <div className="p-2 rounded text-center bg-white dark:bg-slate-900 text-slate-500">
                        ← L
                      </div>
                      <div className="p-2 rounded text-center bg-white dark:bg-slate-900 text-slate-500">
                        ⊕ C
                      </div>
                      <div className="p-2 rounded text-center bg-white dark:bg-slate-900 text-slate-500">
                        → R
                      </div>
                      <div className={`p-2 rounded text-center transition-colors ${userClass === "bg-left-bottom" ? "bg-blue-500 text-white" : "bg-white dark:bg-slate-900 text-slate-500"}`}>
                        ↙ BL
                      </div>
                      <div className="p-2 rounded text-center bg-white dark:bg-slate-900 text-slate-500">
                        ↓ B
                      </div>
                      <div className={`p-2 rounded text-center transition-colors ${userClass === "bg-right-bottom" ? "bg-green-500 text-white font-bold" : "bg-white dark:bg-slate-900 text-slate-500"}`}>
                        ↘ BR ✓
                      </div>
                    </div>
                  </div>

                  <div className="w-full max-w-lg">
                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">
                      Result
                    </p>
                    <div
                      className={`p-4 rounded-lg font-mono text-sm border-l-4 shadow-sm transition-all ${
                        isCorrect
                          ? "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-300"
                          : "bg-slate-100 dark:bg-slate-800 border-slate-400 text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      <span className="opacity-50">Status: </span>
                      &quot;{statusText}&quot;
                    </div>
                  </div>
                </div>
              )
            }}
          />

          <RealWorldExamples 
            title="Real World Examples"
            description="See how background position utilities are used in practical applications."
            examples={realWorldExamples}
          />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Centered Hero"
              description="Full-width hero with centered background"
              code={`<div class="bg-center bg-cover h-screen relative" 
     style="background-image: url('hero.jpg')">
  Content overlay
</div>`}
            >
              <div className="bg-center bg-cover h-32 relative rounded" style={{backgroundImage: "url('https://picsum.photos/400/200?random=6')"}}>
                <p className="text-white text-sm font-bold">Centered Hero</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Corner Placement"
              description="Position elements in specific corners"
              code={`<div class="bg-left-top bg-no-repeat p-8" 
     style="background-image: url('logo.svg')">
  Main content
</div>`}
            >
              <div className="bg-left-top bg-no-repeat p-4 rounded" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%234F46E5\'/%3E%3Ctext x=\'50\' y=\'60\' text-anchor=\'middle\' fill=\'white\' font-size=\'16\'%3EL%3C/text%3E%3C/svg%3E")'}}>
                <p className="text-sm font-bold">Corner Logo</p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock language="jsx" code={backgroundPositionUtilities.codeSnippet} />
          </div>

          <CommonMistakesSection mistakes={commonMistakes} />

          <TipsSection tips={tips} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
