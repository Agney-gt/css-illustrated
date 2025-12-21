"use client" 
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PageHero } from "@/components/shared/page-hero"
import { UtilityGrid } from "@/components/shared/utility-grid"
import { UtilityPlayground } from "@/components/shared/utility_playground"
import { MentalModelSection } from "@/components/shared/mental-model-section"
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section"
import { ComparisonTable } from "@/components/shared/comparison-table"
import { ExampleSection, ExampleCard } from "@/components/shared/example-section"
import { TipsSection } from "@/components/shared/tips-section"

const breakAfterClasses = [
  { cls: "break-after-auto", desc: "Auto break behavior" },
  { cls: "break-after-avoid", desc: "Avoid breaking" },
  { cls: "break-after-all", desc: "Break after always" },
  { cls: "break-after-avoid-page", desc: "Avoid page break" },
  { cls: "break-after-page", desc: "Force page break" },
  { cls: "break-after-left", desc: "Break to left page" },
  { cls: "break-after-right", desc: "Break to right page" },
  { cls: "break-after-column", desc: "Break to next column" },
]

export default function BreakAfterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          {/* Hero Section */}
          <PageHero
            title="Break After"
            description="You should reach for this utility when you need precise control over where content pagination occurs in multi-column or print layouts. These utilities control how browsers insert page/column breaks after specific elements. This is a Layout layer concern that manages content flow and pagination."
          />

          {/* Mental Model */}
          <MentalModelSection
            title="How Browser Pagination Works"
            description="Break-after utilities tell the browser's pagination engine where to insert page or column breaks. This is different from height/width constraints because it affects document flow, not element dimensions."
            features={[
              "Breaks are hints, not commands - browsers may ignore them",
              "Only works in paginated contexts (print, columns, multi-page apps)",
              "Affects content flow, not element positioning",
              "Different from CSS 'page-break-after' but conceptually similar"
            ]}
            layerAssignment="Layout layer - controls content flow and pagination in multi-column or print contexts"
            browserBehavior="Browsers create a 'fragmentation context' when content needs to be split across pages/columns. Break utilities insert hints into this context."
          />

          {/* Utility Classes */}
          <UtilityGrid
            title="Available Classes"
            items={breakAfterClasses}
            prefix=""
          />

          {/* Interactive Playground */}
          <UtilityPlayground
            title="Break After Playground"
            description="See how different break-after values affect content flow in multi-column layouts. Notice how breaks only work when the container has a fragmentation context."
            options={[
              "break-after-auto",
              "break-after-avoid", 
              "break-after-column",
              "break-after-page"
            ]}
            defaultValue="break-after-auto"
            buildMarkup={(value) => `<div class="columns-2 gap-4 max-w-lg">
  <p class="p-3 bg-slate-100 rounded">First column content that might wrap...</p>
  <p class="${value} p-3 bg-blue-100 rounded">This breaks after</p>
  <p class="p-3 bg-slate-100 rounded">More content continues...</p>
</div>`}
            renderPreview={(value) => (
              <div className="columns-2 gap-4 max-w-lg">
                <p className="p-3 bg-slate-100 rounded text-sm">First column content that demonstrates how text flows naturally across column boundaries when no explicit break is specified.</p>
                <p className={`${value} p-3 bg-blue-100 rounded text-sm`}>This element tries to break after itself</p>
                <p className="p-3 bg-slate-100 rounded text-sm">More content that would normally continue flowing</p>
                <p className="p-3 bg-slate-100 rounded text-sm">Additional text to show flow behavior</p>
              </div>
            )}
            optionLabel={(v) => v.replace('break-after-', '')}
          />

          {/* Common Mistakes */}
          <CommonMistakesSection
            mistakes={[
              {
                title: "Using breaks without fragmentation context",
                reason: "Break utilities only work in paginated contexts like columns, print, or multi-page layouts. Normal single-page flow ignores them.",
                example: '<div class="break-after-column">Wont work</div>'
              },
              {
                title: "Expecting exact break positions",
                reason: "Browsers treat break hints as suggestions, not commands. They may ignore breaks if it would create orphaned content or violate other constraints.",
                example: '<p class="break-after-page">May or may not break here</p>'
              },
              {
                title: "Overusing break-after-page",
                reason: "Forcing page breaks can create poor user experience with many short pages. Use sparingly for logical document boundaries.",
                example: '<h3 class="break-after-page">Too many page breaks</h3>'
              },
              {
                title: "Mixing break-before and break-after",
                reason: "Applying both to adjacent elements creates conflicting break instructions that browsers must resolve unpredictably.",
                example: '<p class="break-after-column"></p><p class="break-before-column"></p>'
              }
            ]}
          />

          {/* Comparison Table */}
          <ComparisonTable
            title="Break Utilities Comparison"
            columns={["Utility", "Best For", "Context Required", "Common Use Case"]}
            rows={[
              {
                feature: "break-after-auto",
                values: ["Default behavior", "General content", "None", "Regular text flow"]
              },
              {
                feature: "break-after-column", 
                values: ["Multi-column layouts", "Magazine-style content", "columns-*", "Article layouts"]
              },
              {
                feature: "break-after-page",
                values: ["Print styles", "Document boundaries", "@media print", "Chapters/sections"]
              },
              {
                feature: "break-after-avoid",
                values: ["Keeping content together", "Preventing awkward breaks", "Any", "Figures/captions"]
              }
            ]}
          />

          {/* Real World Examples */}
          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Article with chapter breaks"
              copyText={`<article>
  <h2 class="break-after-page">Chapter 1</h2>
  <p>Chapter content...</p>
  <h2 class="break-after-page">Chapter 2</h2>
</article>`}
              code={`<article class="max-w-prose mx-auto">
  <!-- Layout: Document structure -->
  <h2 class="break-after-page text-2xl font-bold mb-4">Chapter 1</h2>
  <!-- Layout: Forces page break in print -->
  <p class="mb-6">Chapter content that flows normally...</p>
  
  <h2 class="break-after-page text-2xl font-bold mb-4">Chapter 2</h2>
  <!-- Layout: New page for next chapter -->
  <p class="mb-6">Next chapter content...</p>
</article>`}
              description="Forcing page breaks between chapters in print styles. This creates logical document boundaries that readers expect in printed materials."
            >
              <div className="max-w-prose space-y-4">
                <div className="border-b-2 border-dashed border-gray-300 pb-4">
                  <h2 className="text-xl font-bold">Chapter 1</h2>
                  <p className="text-sm text-gray-600 mt-2">Chapter content...</p>
                </div>
                <div className="border-b-2 border-dashed border-gray-300 pb-4">
                  <h2 className="text-xl font-bold">Chapter 2</h2>
                  <p className="text-sm text-gray-600 mt-2">Chapter content...</p>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Multi-column magazine layout"
              copyText={`<div class="columns-3 gap-6">
  <img class="break-after-column" src="..." />
  <p>Caption text stays with image</p>
</div>`}
              code={`<div class="columns-3 gap-6 max-w-4xl">
  <!-- Layout: Multi-column container -->
  <figure>
    <img class="w-full break-after-column rounded" src="..." alt="Article image" />
    <!-- Layout: Break ensures caption stays with image -->
    <figcaption class="text-sm text-gray-600 mt-2">Caption that travels with image</figcaption>
  </figure>
  <p>Article text continues in next column...</p>
</div>`}
              description="Keeping images and their captions together in multi-column layouts by breaking after the image element."
            >
              <div className="columns-2 gap-4 max-w-lg border rounded p-4">
                <div>
                  <div className="bg-gray-200 rounded h-24 mb-2"></div>
                  <p className="text-xs text-gray-600">Image caption</p>
                </div>
                <p className="text-sm">Article text continues flowing in the next column, demonstrating how break-after maintains visual cohesion.</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Preventing figure breaks"
              copyText={`<figure class="break-inside-avoid">
  <img src="..." />
  <figcaption>Stay together</figcaption>
</figure>`}
              code={`<figure class="break-inside-avoid border rounded p-4 max-w-sm">
  <!-- Shape: Visual container -->
  <!-- Layout: Prevents breaking inside this element -->
  <img class="w-full h-32 object-cover rounded mb-3" src="..." alt="Chart" />
  <figcaption class="text-sm font-medium">Chart: Q4 Revenue Growth</figcaption>
  <p class="text-xs text-gray-600 mt-2">This figure stays intact across page breaks</p>
</figure>`}
              description="Using break-inside-avoid to keep figures and their captions together. While this uses break-inside, it's the same concept of controlling fragmentation."
            >
              <div className="border rounded p-4 max-w-sm">
                <div className="bg-gray-200 rounded h-32 mb-3"></div>
                <figcaption className="text-sm font-medium">Chart: Q4 Revenue Growth</figcaption>
                <p className="text-xs text-gray-600 mt-2">This figure stays intact across page breaks</p>
              </div>
            </ExampleCard>
          </ExampleSection>

          {/* Tips Section */}
          <TipsSection
            tips={[
              { bold: "Fragmentation context required:", text: "Break utilities only work in print, columns, or multi-page layouts" },
              { bold: "Column breaks need:", text: "Parent with columns-* class to create fragmentation context" },
              { bold: "Hints, not commands:", text: "Browsers may ignore breaks to avoid orphaned content" },
              { bold: "Keep content together:", text: "Use break-after-avoid for figures, captions, and related elements" },
              { bold: "Print-only behavior:", text: "break-after-page only works in print media or paged contexts" },
              { bold: "Test properly:", text: "Use browser print preview, not screen rendering for validation" },
              { bold: "Natural flow preferred:", text: "Avoid overusing breaks - let content flow naturally when possible" },
              { bold: "Text flow control:", text: "Consider CSS widows/orphans properties for better typography" }
            ]}
          />

          {/* Pre-ship Checklist */}
          <div className="border border-border rounded-lg p-6 bg-card/30">
            <h3 className="text-lg font-semibold mb-4">Pre-Ship Checklist</h3>
            <div className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Layout Layer</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Fragmentation context exists (columns, print, etc)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Break points align with logical content boundaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>No conflicting break-before/break-after on adjacent elements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Content & Context</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Tested in target media (screen, print, etc)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>Content makes sense when breaks are ignored</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>No orphaned content created by breaks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
