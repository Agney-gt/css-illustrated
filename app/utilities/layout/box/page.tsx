import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHero } from "@/components/shared/page-hero"
import { MentalModelSection } from "@/components/shared/mental-model-section"
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section"
import { ComparisonTable } from "@/components/shared/comparison-table"
import { UtilityPlayground } from "@/components/shared/utility_playground"
import { TipsSection } from "@/components/shared/tips-section"
import { UtilityGrid } from "@/components/shared/utility-grid"

export default function BoxPage() {
  const boxUtilities = [
    { cls: "box-border", desc: "Include padding/border in width" },
    { cls: "box-content", desc: "Exclude padding/border from width" },
    { cls: "box-decoration-slice", desc: "Slice background/border" },
    { cls: "box-decoration-clone", desc: "Clone background/border" },
  ]

  const mentalModelFeatures = [
    "Controls how width/height calculations include padding and borders",
    "Affects layout behavior and element sizing predictability",
    "Essential for responsive design and component consistency"
  ]

  const commonMistakes = [
    {
      title: "Mixing box-sizing models",
      reason: "Using box-border on some elements and box-content on others creates inconsistent layouts",
      example: ".header { box-sizing: content-box; } .content { box-sizing: border-box; }",
      level: "critical" as const
    },
    {
      title: "Forgetting box-sizing reset",
      reason: "Not setting a consistent box-sizing model leads to unexpected sizing behavior",
      example: "/* Missing: * { box-sizing: border-box; } */",
      level: "critical" as const
    },
    {
      title: "Padding affects total width",
      reason: "With content-box, adding padding increases the total element width beyond specified",
      example: ".box { width: 200px; padding: 20px; /* Total: 240px! */ }",
      level: "warning" as const
    }
  ]

  const comparisonData = {
    title: "Box Sizing Models Comparison",
    columns: ["Property", "box-border", "box-content"],
    rows: [
      {
        feature: "Width Calculation",
        values: ["width includes padding + border", "width excludes padding + border"]
      },
      {
        feature: "Use Case",
        values: ["Predictable layouts, responsive design", "Traditional box model"]
      },
      {
        feature: "Common Setting",
        values: ["Default modern approach", "Browser default (rarely used)"]
      },
      {
        feature: "Layout Impact",
        values: ["Elements don't overflow when padded", "Elements expand when padded"]
      }
    ]
  }

  const tips = [
    {
      bold: "Set globally:",
      text: "Apply box-border to all elements with *, *::before, *::after for consistency."
    },
    {
      bold: "Component libraries:",
      text: "Always use box-border for reusable components to ensure predictable sizing."
    },
    {
      bold: "Responsive design:",
      text: "box-border prevents layout breakage when adding padding to percentage-based widths."
    },
    {
      bold: "Form elements:",
      text: "Input elements often need explicit box-border for consistent sizing across browsers."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12 space-y-12">
        <PageHero 
          title="Box Sizing & Decoration"
          description="Control box sizing model and decoration breaking. Master the CSS box model for predictable layouts."
        />

        <MentalModelSection
          title="Understanding Box Sizing"
          description="Box sizing determines how width and height are calculated, affecting how elements interact with padding and borders."
          features={mentalModelFeatures}
          layerAssignment="Layout & Box Model Layer - Controls element sizing calculations"
          browserBehavior="Modern browsers default to content-box. Most developers reset to border-box globally for consistency."
        />

        <UtilityPlayground
          title="Interactive Box Sizing Demo"
          description="Explore how box-sizing affects element dimensions and layout behavior."
          options={["box-border", "box-content"]}
          defaultValue="box-border"
          buildMarkup={(value, customClasses) => {
            return `<div class="${value} w-48 p-4 border-4 border-blue-500 bg-blue-100 ${customClasses || ''}">
  Width: 192px
  <br />
  Padding: 16px each side
  <br />
  Border: 4px each side
</div>`
          }}
          renderPreview={(value, customClasses) => (
            <div className={`${value} w-48 p-4 border-4 border-blue-500 bg-blue-100 text-center text-sm font-mono ${customClasses || ''}`}>
              <div className="space-y-1">
                <div>Width: 192px</div>
                <div>Padding: 16px</div>
                <div>Border: 4px</div>
              </div>
            </div>
          )}
          defaultCustomClasses="text-blue-900"
        />

        <ComparisonTable {...comparisonData} />

        <CommonMistakesSection mistakes={commonMistakes} />

        <UtilityGrid 
          title="Available Box Utilities"
          items={boxUtilities}
          prefix=""
        />

        <TipsSection tips={tips} />
      </main>
      <Footer />
    </div>
  )
}