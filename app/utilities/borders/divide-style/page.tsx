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

export default function DivideStylePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero 
        title="Divide Style Utilities"
        description="Control the style of dividers between child elements. Choose from solid, dashed, dotted, or double borders to create different visual effects and hierarchy levels."
      />

      <MentalModelSection
        title="Understanding Divide Style Architecture"
        description="Divide style utilities modify the CSS border-style property for divider elements. This changes the visual appearance while maintaining consistent spacing and layout structure."
        features={[
          "Styles apply only to divider borders, not affecting other borders",
          "Works independently from width and color utilities",
          "Maintains consistent spacing regardless of style choice",
          "Responsive variants adapt styles per breakpoint",
          "Combines with opacity modifiers for subtle effects"
        ]}
        layerAssignment="Divide Style Layer - Defines visual character and decorative appearance of separators"
        browserBehavior="Browser applies specified border style to all divider borders between child elements"
      />

<ComparisonTable
        title="Divide Style Visual Impact"
        columns={["Style", "Visual Effect", "Best For", "Hierarchy Level"]}
        rows={[
          {
            feature: "divide-solid",
            values: ["Continuous line", "Standard separation", "Content sections", "Medium priority"]
          },
          {
            feature: "divide-dashed", 
            values: ["Broken segments", "Soft separation", "Related items", "Low priority"]
          },
          {
            feature: "divide-dotted",
            values: ["Small dots", "Minimal separation", "Categories", "Very low priority"]
          },
          {
            feature: "divide-double",
            values: ["Double lines", "Strong emphasis", "Major sections", "High priority"]
          }
        ]}
      />

      <UtilityGrid
        title="Divide Style Utilities Overview"
        items={[
          { cls: "divide-solid", desc: "Continuous line divider" },
          { cls: "divide-dashed", desc: "Dashed line segments" },
          { cls: "divide-dotted", desc: "Small dot pattern" },
          { cls: "divide-double", desc: "Double line emphasis" }
        ]}
      />

      <UtilityPlayground
        title="Divide Style Playground"
        description="Test different divider styles and see how they affect visual separation and user perception."
        options={["divide-solid", "divide-dashed", "divide-dotted", "divide-double"]}
        defaultValue="divide-solid"
        buildMarkup={(styleClass, color = "divide-gray-400", width = "divide-y-2") => {
          const classes = `${width} ${styleClass} ${color}`.trim()
          return `<div class="${classes}">
  <div class="p-4">Section 1</div>
  <div class="p-4">Section 2</div>
  <div class="p-4">Section 3</div>
</div>`
        }}
        renderPreview={(styleClass, color = "divide-gray-400", width = "divide-y-2") => {
          const classes = `${width} ${styleClass} ${color}`.trim()
          return (
            <div className={classes}>
              <div className="p-4 bg-slate-700 text-white">Section 1</div>
              <div className="p-4 bg-slate-700 text-white">Section 2</div>
              <div className="p-4 bg-slate-700 text-white">Section 3</div>
            </div>
          )
        }}
        optionLabel={(style) => style.replace('divide-', '')}
      />

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Settings Sections"
          description="Major setting sections with double dividers for strong separation"
          code={`<div class="divide-y-2 divide-double divide-gray-400">
  <div class="p-6">
    <h3 class="text-lg font-semibold">Account Settings</h3>
    <p>Manage your profile and preferences</p>
  </div>
  <div class="p-6">
    <h3 class="text-lg font-semibold">Security Settings</h3>
    <p>Control access and authentication</p>
  </div>
</div>`}
        >
          <div className="divide-y-2 divide-double divide-gray-300 w-80">
            <div className="p-4 bg-slate-700 text-white">
              <h3 className="text-lg font-semibold">Account Settings</h3>
              <p className="text-sm text-gray-300">Manage your profile</p>
            </div>
            <div className="p-4 bg-slate-700 text-white">
              <h3 className="text-lg font-semibold">Security Settings</h3>
              <p className="text-sm text-gray-300">Control access</p>
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Menu Categories"
          description="Menu with dashed dividers to group related items"
          code={`<div class="divide-y divide-dashed divide-gray-300">
  <div class="p-3">
    <h4 class="font-medium text-sm text-gray-500">Navigation</h4>
    <a href="#" class="block py-1">Home</a>
    <a href="#" class="block py-1">About</a>
  </div>
  <div class="p-3">
    <h4 class="font-medium text-sm text-gray-500">Resources</h4>
    <a href="#" class="block py-1">Documentation</a>
    <a href="#" class="block py-1">Support</a>
  </div>
</div>`}
        >
          <div className="divide-y divide-dashed divide-gray-300 w-64">
            <div className="p-3 bg-slate-700 text-white">
              <h4 className="font-medium text-sm text-gray-300">Navigation</h4>
              <a href="#" className="block py-1 text-white">Home</a>
              <a href="#" className="block py-1 text-white">About</a>
            </div>
            <div className="p-3 bg-slate-700 text-white">
              <h4 className="font-medium text-sm text-gray-300">Resources</h4>
              <a href="#" className="block py-1 text-white">Documentation</a>
              <a href="#" className="block py-1 text-white">Support</a>
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="List Items"
          description="Simple list with dotted dividers for minimal visual separation"
          code={`<div class="divide-y divide-dotted divide-gray-400">
  <div class="py-2">First item in the list</div>
  <div class="py-2">Second item in the list</div>
  <div class="py-2">Third item in the list</div>
</div>`}
        >
          <div className="divide-y divide-dotted divide-gray-400 w-64">
            <div className="py-2 bg-slate-700 text-white px-3">First item in the list</div>
            <div className="py-2 bg-slate-700 text-white px-3">Second item in the list</div>
            <div className="py-2 bg-slate-700 text-white px-3">Third item in the list</div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Form Sections"
          description="Form with solid dividers for clear section separation"
          code={`<div class="divide-y divide-solid divide-gray-200">
  <div class="p-4">
    <h3 class="font-semibold mb-3">Personal Information</h3>
    <input class="w-full border border-gray-300 rounded p-2 mb-2" placeholder="Name" />
    <input class="w-full border border-gray-300 rounded p-2" placeholder="Email" />
  </div>
  <div class="p-4">
    <h3 class="font-semibold mb-3">Address</h3>
    <input class="w-full border border-gray-300 rounded p-2 mb-2" placeholder="Street" />
    <input class="w-full border border-gray-300 rounded p-2" placeholder="City" />
  </div>
</div>`}
        >
          <div className="divide-y divide-solid divide-gray-300 w-80">
            <div className="p-4 bg-slate-700 text-white">
              <h3 className="font-semibold mb-3">Personal Information</h3>
              <input className="w-full border border-gray-600 rounded p-2 mb-2 bg-slate-600 text-white" placeholder="Name" />
              <input className="w-full border border-gray-600 rounded p-2 bg-slate-600 text-white" placeholder="Email" />
            </div>
            <div className="p-4 bg-slate-700 text-white">
              <h3 className="font-semibold mb-3">Address</h3>
              <input className="w-full border border-gray-600 rounded p-2 mb-2 bg-slate-600 text-white" placeholder="Street" />
              <input className="w-full border border-gray-600 rounded p-2 bg-slate-600 text-white" placeholder="City" />
            </div>
          </div>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Using inappropriate styles",
            reason: "Double dividers are too heavy for simple lists, while dotted may be too subtle for major sections",
            example: `<div class="divide-y-4 divide-double"> <!-- Too heavy for simple list -->\n  <li>Item 1</li>\n  <li>Item 2</li>\n</div>\n\n<!-- Better for simple list -->\n<div class="divide-y divide-dashed">\n  <li>Item 1</li>\n  <li>Item 2</li>\n</div>`,
            level: "warning"
          },
          {
            title: "Not combining with width",
            reason: "Some styles (like dotted) need minimum width to be visible",
            example: `<div class="divide-y divide-dotted"> <!-- May be invisible -->\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>\n\n<!-- Add width for visibility -->\n<div class="divide-y-2 divide-dotted">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
            level: "critical"
          },
          {
            title: "Inconsistent style patterns",
            reason: "Mixing different divider styles creates visual inconsistency",
            example: `<div class="divide-y divide-dashed divide-solid"> <!-- Conflicting -->\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>\n\n<!-- Use single style -->\n<div class="divide-y divide-dashed">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
            level: "warning"
          }
        ]}
      />

      <TipsSection 
        tips={[
          { bold: "Match hierarchy:", text: "Use solid for medium, dashed for low, double for high priority sections" },
          { bold: "Consider visibility:", text: "Dotted and dashed styles may need increased width for visibility" },
          { bold: "Maintain consistency:", text: "Stick to one divider style pattern per interface section" },
          { bold: "Double lines:", text: "Use divide-double sparingly for major section breaks only" },
          { bold: "Combine with spacing:", text: "Add padding to ensure dividers have breathing room" }
        ]}
      />
    </div>
  )
}
