"use client";

import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function FlowsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Floats, Clear & Isolation Utilities"
        description="Master traditional CSS layout flows with modern floating controls, clearing mechanisms, and stacking context isolation. Understand when to use legacy floats versus modern flexbox/grid approaches."
      />

      <MentalModelSection
        title="Understanding Flow Layout Architecture"
        description="Float utilities control element positioning by removing items from normal document flow and allowing inline content to wrap around them. These are legacy Layout tools that predate flexbox and grid."
        features={[
          "Floats remove elements from normal document flow but preserve text wrapping",
          "Clearing prevents elements from wrapping around floated siblings",
          "Isolation creates new stacking contexts without positioning",
          "Floats affect inline content flow, not block layout",
          "Modern layouts prefer flexbox/grid for complex arrangements",
        ]}
        layerAssignment="Layout Layer - Controls element positioning and document flow behavior"
        browserBehavior="Browser calculates float layout by removing element from normal flow, then reflows inline content around the float box. Clearing properties insert clearance to prevent wrapping."
      />

      <ComparisonTable
        title="Flow Properties Comparison"
        columns={[
          "Property",
          "Layout Effect",
          "Modern Alternative",
          "When to Use",
        ]}
        rows={[
          {
            feature: "Float",
            values: [
              "Removes from flow",
              "flex: row",
              "Legacy text wrap",
              "Magazine layouts",
            ],
          },
          {
            feature: "Clear",
            values: [
              "Prevents wrapping",
              "flex: column",
              "Structure breaks",
              "After floats",
            ],
          },
          {
            feature: "Isolation",
            values: [
              "Stacking context",
              "z-index layers",
              "Component boundaries",
              "3D transforms",
            ],
          },
        ]}
      />

      <UtilityGrid
        title="Flow Utilities Overview"
        items={[
          { cls: "float-left", desc: "Float element left" },
          { cls: "float-right", desc: "Float element right" },
          { cls: "float-none", desc: "No float (default)" },
          { cls: "clear-left", desc: "Clear left floats" },
          { cls: "clear-right", desc: "Clear right floats" },
          { cls: "clear-both", desc: "Clear all floats" },
          { cls: "clear-none", desc: "Don't clear (default)" },
          { cls: "isolate", desc: "Create stacking context" },
          { cls: "isolation-auto", desc: "Auto stacking context" },
        ]}
      />

      <CommonMistakesSection
        title="❌ Common Flow Layout Mistakes & Why They Happen"
        mistakes={[
          {
            title: "Floating container collapses height",
            reason:
              "When children float, parent loses height calculation because floated elements are removed from normal flow. Parent wrapper collapses to zero height.",
            example: `<div class="border border-red-500">
  <div class="float-left">Floated content</div>
  <div class="float-right">More floated</div>
  <!-- Parent height = 0 -->
</div>`,
            level: "critical",
          },
          {
            title: "Using floats for main layout structure",
            reason:
              "Floats are designed for text wrapping, not structural layout. They create complex clearing requirements and responsive behavior is difficult.",
            example: `<div class="float-left w-1/3">Sidebar</div>
<div class="float-right w-2/3">Content</div>
<div class="clear-both"></div>`,
            level: "warning",
          },
          {
            title: "Forgetting to clear after floats",
            reason:
              "Uncleared floats cause subsequent content to wrap around floated elements, breaking intended visual hierarchy and layout flow.",
            example: `<div class="float-left">Image</div>
<p>This text wraps incorrectly</p>
<!-- Should have clearing here -->`,
            level: "critical",
          },
          {
            title: "Mixing floats with flexbox incorrectly",
            reason:
              "Floats on flex items are ignored, but still affect layout calculations. This creates confusing behavior where float classes seem to have no effect.",
            example: `<div class="flex">
  <div class="float-left">Float ignored</div>
  <div class="flex-grow">Flex works</div>
</div>`,
            level: "warning",
          },
        ]}
      />

      <section className="space-y-6 border-t pt-8">
        <h2 className="text-3xl font-bold">Interactive Flow Playground</h2>
        <p className="text-muted-foreground">
          Experiment with float positioning and see how clearing affects
          document flow. Notice how floated elements escape normal layout but
          text continues to wrap.
        </p>

        <UtilityPlayground
          title="Float Flow Playground"
          description="Test float properties and observe how they affect document flow and text wrapping behavior."
          options={["float-none", "float-left", "float-right"]}
          defaultValue="float-none"
          buildMarkup={(floatClass, clearClass = "") => {
            const classes = [floatClass, clearClass].filter(Boolean).join(" ");
            return `<div class="border border-border p-4 bg-slate-100">
  <div class="${classes} w-24 h-24 bg-blue-500 text-white p-2">Floated Box</div>
  <p class="mt-2">This text wraps around the floated element when it's positioned left or right. Notice how normal document flow continues around floated items.</p>
</div>`;
          }}
          renderPreview={(floatClass, clearClass = "") => {
            return (
              <div className="border border-border p-4 bg-slate-800">
                <div
                  className={`${floatClass} ${clearClass} w-24 h-24 bg-blue-500 text-white p-2 rounded flex-shrink-0`}
                >
                  Float Box
                </div>
                <p className="mt-2 text-white text-sm">
                  This text demonstrates wrapping behavior around the floated
                  box.
                </p>
              </div>
            );
          }}
        />
      </section>

      <InteractiveChallenge
        title="The Magazine Wrap"
        description="You are designing a blog post. Currently, the image sits on its own line, pushing the text down. This wastes space. Apply `float-left` to the image container so the text wraps elegantly around it, like a newspaper article."
        codeSnippet={`<article class="p-6 bg-white rounded-lg shadow-sm">
  <h2 class="text-xl font-bold mb-4">The Future of AI</h2>
  
  <div class="w-32 h-32 bg-indigo-100 rounded-lg mb-4 mr-4 {input}">
    <img src="..." />
  </div>
  
  <p>Artificial intelligence is rapidly evolving...</p>
  <p>In recent years, we have seen...</p>
</article>`}
        options={["block", "float-left", "float-right", "flex"]}
        correctOption="float-left"
        renderPreview={(userClass) => (
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">
              Editorial Layout
            </h3>

            <div
              className={`w-24 h-24 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-xs font-bold mb-2 mr-4 ${userClass}`}
            >
              IMAGE
            </div>

            <div className="text-sm text-slate-600 dark:text-slate-300 space-y-2 text-justify">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                {userClass === "float-left" ? (
                  <span className="text-green-600 font-semibold">
                    {" "}
                    Notice how this text is now wrapping around the image
                    container nicely?{" "}
                  </span>
                ) : (
                  " Currently, this text is pushed below the image block because divs are block-level by default."
                )}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>
          </div>
        )}
      />

      <ExampleSection title="Real-World Flow Examples">
        <ExampleCard
          title="Magazine-style Article Layout"
          description="Classic float layout for editorial content where images wrap naturally with text."
          code={`<article class="max-w-2xl p-6">
  <img class="float-left w-32 h-32 mr-4 mb-2 rounded-lg object-cover" 
       src="article.jpg" alt="Article image" />
  <h2 class="text-xl font-bold mb-2">Article Title</h2>
  <p class="text-gray-700">
    This article content wraps around the floated image, creating
    the magazine-style layout that's been used in publishing for decades.
  </p>
</article>`}
        >
          <div className="max-w-md mx-auto p-4 border border-border rounded-lg">
            <div className="float-left w-20 h-20 mr-3 mb-2 bg-slate-600 rounded-lg flex items-center justify-center text-white text-xs">
              Image
            </div>
            <h3 className="font-bold mb-1 text-sm">Article Title</h3>
            <p className="text-xs text-muted-foreground">
              This demonstrates text wrapping around floated elements for
              editorial layouts.
            </p>
            <div className="clear-both"></div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Pull Quote with Clearing"
          description="Floating pull quotes that emphasize content and require proper clearing."
          code={`<div class="max-w-2xl p-6">
  <blockquote class="float-right w-1/3 ml-4 p-4 bg-blue-50 
                   border-l-4 border-blue-500 italic">
    "This pull quote draws attention to key points."
  </blockquote>
  <p>Main article content flows around the pull quote...</p>
  <div class="clear-both mt-4">
    <p>Regular content continues after clearing.</p>
  </div>
</div>`}
        >
          <div className="max-w-md mx-auto p-4 border border-border rounded-lg">
            <div className="float-right w-1/3 ml-3 p-2 bg-blue-100 dark:bg-blue-900/20 border-l-4 border-blue-500 italic text-xs">
              "Key quote from article content that stands out visually."
            </div>
            <p className="text-xs mb-2">
              Main content flows around the pull quote on the right.
            </p>
            <div className="clear-both mt-2">
              <p className="text-xs text-muted-foreground">
                Content resets after clearing.
              </p>
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Isolation for 3D Cards"
          description="Using isolation to create new stacking contexts for 3D transforms."
          code={`<div class="isolate">
  <div class="transform-gpu perspective-1000">
    <div class="transform rotate-y-12 bg-gradient-to-r 
                from-blue-500 to-purple-600 p-6 rounded-lg 
                shadow-lg hover:shadow-xl transition-shadow">
      <h3 class="text-white font-bold">3D Card</h3>
      <p class="text-white/90 text-sm">3D transform with isolation</p>
    </div>
  </div>
</div>`}
        >
          <div className="isolate p-4 border border-border rounded-lg">
            <div className="transform-gpu perspective-1000">
              <div className="transform rotate-y-12 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-white text-xs">
                <div className="font-bold mb-1">3D Card</div>
                <div>Isolated transform</div>
              </div>
            </div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Clearfix Container Pattern"
          description="Modern clearfix to contain floated children and maintain container height."
          code={`<div class="border border-gray-300 p-4 
              after:content-[''] after:table after:clear-both">
  <div class="float-left w-16 h-16 bg-red-500 rounded mr-4"></div>
  <div class="float-right w-16 h-16 bg-blue-500 rounded ml-4"></div>
  <p class="mt-4">Container properly contains floated elements.</p>
</div>`}
        >
          <div className="border border-border p-4 after:content-[''] after:table after:clear-both">
            <div className="float-left w-12 h-12 bg-red-500 rounded mr-2"></div>
            <div className="float-right w-12 h-12 bg-blue-500 rounded ml-2"></div>
            <div className="text-xs text-muted-foreground mt-3">
              Container contains floats properly.
            </div>
          </div>
        </ExampleCard>
      </ExampleSection>

      <TipsSection
        tips={[
          {
            bold: "Use modern layout first:",
            text: "Prefer flexbox/grid over floats for structural layout - reserve floats for text wrapping",
          },
          {
            bold: "Always clear floats:",
            text: "Use clearfix techniques or explicit clearing to prevent layout collapse",
          },
          {
            bold: "Isolation for components:",
            text: "Use isolate to prevent 3D transforms from affecting sibling elements",
          },
          {
            bold: "Consider accessibility:",
            text: "Floating elements can disrupt reading order for screen readers",
          },
          {
            bold: "Test responsive behavior:",
            text: "Floats can create unexpected layouts on different screen sizes",
          },
        ]}
      />

      <section className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Pre-Ship Checklist</h2>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Layout Layer</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                ☐ Are floats only used for text wrapping, not main structure?
              </li>
              <li>☐ Do all floated elements have proper clearing?</li>
              <li>☐ Does container height contain floated children?</li>
              <li>☐ Would flexbox/grid be better for this layout?</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Shape Layer</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>☐ Are floated elements properly sized and shaped?</li>
              <li>☐ Do borders and shadows work correctly with floats?</li>
            </ul>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Content Layer</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>☐ Does text wrap correctly around floated elements?</li>
              <li>☐ Are images properly sized within floated containers?</li>
              <li>☐ Is reading order preserved for accessibility?</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
