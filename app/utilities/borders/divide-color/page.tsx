"use client"

import { PageHero } from "@/components/shared/page-hero"
import { UtilityGrid } from "@/components/shared/utility-grid"
import { UtilityPlayground } from "@/components/shared/utility_playground"
import { ExampleSection, ExampleCard } from "@/components/shared/example-section"
import { TipsSection } from "@/components/shared/tips-section"
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section"
import { MentalModelSection } from "@/components/shared/mental-model-section"
import { ComparisonTable } from "@/components/shared/comparison-table"
import CodeBlock from "@/app/utilities/components/code-block"

export default function DivideColorPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero 
        title="Divide Color Utilities"
        description="Control the color of dividers between child elements. Use semantic color names for consistent theming, or brand colors for custom designs. Works with all divide width and style utilities."
      />

      <MentalModelSection
        title="Understanding Divide Color Architecture"
        description="Divide color utilities apply border colors to child elements using the same selector pattern as divide width utilities. This maintains consistency while allowing full color customization."
        features={[
          "Colors apply only to divider borders, not content",
          "Supports all Tailwind color palette options",
          "Can use opacity modifiers for subtle dividers",
          "Responsive variants adapt colors per breakpoint",
          "Works with dark/light mode for accessibility"
        ]}
        layerAssignment="Divide Color Layer - Defines visual tone and semantic meaning of separators"
        browserBehavior="Browser applies specified color to all divider borders between child elements"
      />

      <ComparisonTable
        title="Divide Color Usage Patterns"
        columns={["Color Type", "Use Case", "Visual Impact", "Semantic Meaning"]}
        rows={[
          {
            feature: "divide-gray-*",
            values: ["Neutral tones", "Subtle separation", "Low priority", "Standard dividers"]
          },
          {
            feature: "divide-blue-*", 
            values: ["Cool tones", "Interactive elements", "Medium priority", "Primary actions"]
          },
          {
            feature: "divide-red-*",
            values: ["Warm tones", "Error states", "High priority", "Destructive actions"]
          },
          {
            feature: "divide-green-*",
            values: ["Natural tones", "Success states", "Positive", "Confirmation"]
          },
          {
            feature: "divide-border",
            values: ["Design token", "System consistency", "Default", "Theme integration"]
          }
        ]}
      />

      <UtilityGrid
        title="Divide Color Utilities Overview"
        items={[
          { cls: "divide-gray-200", desc: "Light neutral separator" },
          { cls: "divide-gray-400", desc: "Medium neutral separator" },
          { cls: "divide-gray-600", desc: "Dark neutral separator" },
          { cls: "divide-blue-400", desc: "Blue primary separator" },
          { cls: "divide-blue-600", desc: "Dark blue separator" },
          { cls: "divide-red-400", desc: "Red warning separator" },
          { cls: "divide-red-600", desc: "Dark red error separator" },
          { cls: "divide-green-400", desc: "Green success separator" },
          { cls: "divide-border", desc: "Theme default separator" },
          { cls: "divide-transparent", desc: "Hidden separator" }
        ]}
      />

      <UtilityPlayground
        title="Divide Color Playground"
        description="Test different divider colors with various widths to see how they affect visual hierarchy and user experience."
        options={["divide-gray-300", "divide-blue-400", "divide-red-400", "divide-green-400", "divide-purple-400", "divide-border"]}
        defaultValue="divide-gray-300"
        buildMarkup={(colorClass, width = "divide-y") => {
          const classes = `${width} ${colorClass}`.trim()
          return `<div class="${classes}">
  <div class="p-4">Section 1</div>
  <div class="p-4">Section 2</div>
  <div class="p-4">Section 3</div>
</div>`
        }}
        renderPreview={(colorClass, width = "divide-y") => {
          const classes = `${width} ${colorClass}`.trim()
          return (
            <div className={classes}>
              <div className="p-4 bg-slate-700 text-white">Section 1</div>
              <div className="p-4 bg-slate-700 text-white">Section 2</div>
              <div className="p-4 bg-slate-700 text-white">Section 3</div>
            </div>
          )
        }}
        optionLabel={(color) => color.replace('divide-', '')}
      />

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Sidebar Navigation"
          description="Navigation with blue accent dividers for primary actions"
          code={`<nav class="divide-y-2 divide-blue-500">
  <a href="#" class="block px-4 py-3 hover:bg-blue-50">Dashboard</a>
  <a href="#" class="block px-4 py-3 hover:bg-blue-50">Analytics</a>
  <a href="#" class="block px-4 py-3 hover:bg-blue-50">Reports</a>
</nav>`}
        >
          <nav className="divide-y-2 divide-blue-400 w-56">
            <a href="#" className="block px-4 py-3 hover:bg-blue-900 text-white">Dashboard</a>
            <a href="#" className="block px-4 py-3 hover:bg-blue-900 text-white">Analytics</a>
            <a href="#" className="block px-4 py-3 hover:bg-blue-900 text-white">Reports</a>
          </nav>
        </ExampleCard>

        <ExampleCard
          title="Error List"
          description="Validation errors with red dividers for visual urgency"
          code={`<div class="divide-y divide-red-400 bg-red-50 p-4 rounded-lg">
  <p class="text-red-800">• Email is required</p>
  <p class="text-red-800">• Password must be 8+ characters</p>
  <p class="text-red-800">• Phone number format is invalid</p>
</div>`}
        >
          <div className="divide-y divide-red-400 bg-red-900/20 p-4 rounded-lg">
            <p className="text-red-300">• Email is required</p>
            <p className="text-red-300">• Password must be 8+ characters</p>
            <p className="text-red-300">• Phone number format is invalid</p>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Settings Menu"
          description="Settings sections with neutral gray dividers"
          code={`<div class="divide-y divide-gray-200">
  <div class="p-4">
    <h3 class="font-semibold">Profile Settings</h3>
    <p class="text-sm text-gray-600">Update your profile information</p>
  </div>
  <div class="p-4">
    <h3 class="font-semibold">Security</h3>
    <p class="text-sm text-gray-600">Manage password and authentication</p>
  </div>
</div>`}
        >
          <div className="divide-y divide-gray-300 w-80">
            <div className="p-4 bg-slate-700 text-white">
              <h3 className="font-semibold">Profile Settings</h3>
              <p className="text-sm text-gray-300">Update your profile information</p>
            </div>
            <div className="p-4 bg-slate-700 text-white">
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-gray-300">Manage password and authentication</p>
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Success Messages"
          description="Success indicators with green separators"
          code={`<div class="divide-y-2 divide-green-400 bg-green-50 p-4 rounded-lg">
  <p class="text-green-800">✓ Profile updated successfully</p>
  <p class="text-green-800">✓ Changes saved to database</p>
  <p class="text-green-800">✓ Notifications sent</p>
</div>`}
        >
          <div className="divide-y-2 divide-green-400 bg-green-900/20 p-4 rounded-lg">
            <p className="text-green-300">✓ Profile updated successfully</p>
            <p className="text-green-300">✓ Changes saved to database</p>
            <p className="text-green-300">✓ Notifications sent</p>
          </div>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Using low contrast colors",
            reason: "Light dividers on light backgrounds may be invisible, reducing accessibility",
            example: `<div class="divide-y divide-gray-100 bg-white"> <!-- Poor contrast -->\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>\n\n<!-- Better contrast -->\n<div class="divide-y divide-gray-300 bg-white">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
            level: "critical"
          },
          {
            title: "Inconsistent color scheme",
            reason: "Mixing unrelated divider colors creates visual confusion",
            example: `<div class="divide-y divide-blue-400 divide-red-400"> <!-- Invalid -->\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>\n\n<!-- Use single color -->\n<div class="divide-y divide-blue-400">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
            level: "warning"
          },
          {
            title: "Not considering dark mode",
            reason: "Fixed colors may not work in dark themes, causing visibility issues",
            example: `<div class="divide-y divide-gray-800"> <!-- Too dark for light mode -->\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>\n\n<!-- Use semantic tokens -->\n<div class="divide-y divide-border">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
            level: "warning"
          }
        ]}
      />

      <TipsSection 
        tips={[
          { bold: "Use semantic colors:", text: "Apply red for errors, green for success, blue for primary actions" },
          { bold: "Consider contrast:", text: "Ensure dividers have sufficient contrast against background colors" },
          { bold: "Dark mode support:", text: "Use divide-border or adjust colors for theme compatibility" },
          { bold: "Opacity modifiers:", text: "Use divide-blue-400/50 for subtle, reduced-visibility dividers" },
          { bold: "Brand consistency:", text: "Follow your brand guide for consistent divider colors" }
        ]}
      />
    </div>
  )
}
