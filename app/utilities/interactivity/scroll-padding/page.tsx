"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageTitle from "@/components/otherComponents/pageTitle"
import UtilityCard from "@/components/otherComponents/utilityClassCard"
import UtilityExaButtons from "@/components/otherComponents/utilityExaBtn"
import PreviewPanel from "@/components/otherComponents/previewPanel"
import ExampleCard from "@/components/otherComponents/realWorldExampleCard"
import SummaryTips from "@/components/otherComponents/summaryTips"

const utilities = [
  { className: "scroll-pt-0", desc: "No scroll padding at the top" },
  { className: "scroll-pt-16", desc: "Small internal padding offset" },
  { className: "scroll-pt-24", desc: "Medium padding for sticky headers" },
  { className: "scroll-pt-32", desc: "Large padding for tall toolbars" },
]

export default function ScrollPaddingPage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="${activeUtility} h-52 overflow-y-auto rounded-xl border bg-slate-50 p-4 space-y-6 text-sm">
  <div class="sticky top-0 z-10 rounded bg-slate-900 px-3 py-2 text-white font-medium">
    Sticky header
  </div>

  <div class="h-48 rounded bg-slate-200"></div>

  <div class="rounded-lg bg-green-600 px-4 py-3 text-white font-medium">
    First item
  </div>

  <div class="h-48 rounded bg-slate-200"></div>

  <div class="rounded-lg bg-purple-600 px-4 py-3 text-white font-medium">
    Second item
  </div>

  <div class="h-48 rounded bg-slate-200"></div>
</div>
      `.trim()
    )
  }, [activeUtility])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageTitle
            title="Scroll Padding"
            description="Control the internal offset of a scroll container when content scrolls into view."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Scroll Padding Utilities</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {utilities.map((u) => (
                <UtilityCard
                  key={u.className}
                  classNameValue={u.className}
                  description={u.desc}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="space-y-4">
                <UtilityExaButtons
                  label="Scroll Padding (Top)"
                  options={utilityOptions}
                  activeValue={activeUtility}
                  onSelect={setActiveUtility}
                />
              </div>

              <div className="md:col-span-2">
                <PreviewPanel
                  title="Live Preview"
                  code={code}
                  onCodeChange={setCode}
                  previewClass="p-6"
                  description="Scroll to see how content clears the sticky header."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Sticky header containers"
                code={`<div class="scroll-pt-24 overflow-y-auto"></div>`}
                description="Keeps scrollable content readable under pinned headers."
              >
                <div className="scroll-pt-24 h-40 overflow-y-auto rounded-xl border bg-white">
                  <div className="sticky top-0 z-10 bg-slate-800 px-3 py-2 text-white font-medium">
                    Messages
                  </div>
                  <div className="h-40 bg-slate-100 rounded"></div>
                  <p className="px-3 py-2 text-sm">Conversation content</p>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Scrollable data panels"
                code={`<div class="scroll-pt-32 overflow-y-auto"></div>`}
                description="Adds breathing room for dense dashboards."
              >
                <div className="scroll-pt-32 h-40 overflow-y-auto rounded-xl border bg-slate-900 p-3 text-slate-200 space-y-3 text-sm">
                  <div className="sticky top-0 bg-slate-950 px-2 py-1 font-medium">
                    Filters
                  </div>
                  <div className="h-48 bg-slate-800 rounded"></div>
                  <div className="rounded bg-slate-800 px-2 py-1">
                    Chart content
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Carousel & snap scrolling"
                code={`<div class="scroll-pt-16 overflow-x-auto"></div>`}
                description="Maintains consistent spacing when snapping items."
              >
                <div className="scroll-pt-16 overflow-x-auto whitespace-nowrap rounded-xl border bg-slate-50 p-4">
                  <div className="inline-block h-24 w-56 rounded-lg bg-blue-500 mr-4" />
                  <div className="inline-block h-24 w-56 rounded-lg bg-green-500 mr-4" />
                  <div className="inline-block h-24 w-56 rounded-lg bg-purple-500 mr-4" />
                </div>
              </ExampleCard>

              <ExampleCard
                title="Command palette results"
                code={`<div class="scroll-pt-16 overflow-y-auto"></div>`}
                description="Ensures highlighted results are never hidden."
              >
                <div className="scroll-pt-16 h-40 overflow-y-auto rounded-xl border bg-white p-3 space-y-2 text-sm">
                  <div className="sticky top-0 bg-white font-medium">
                    Search results
                  </div>
                  <div className="h-32 bg-slate-100 rounded"></div>
                  <div className="rounded bg-indigo-600 px-3 py-2 text-white">
                    Selected item
                  </div>
                </div>
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Scroll padding applies to the scroll container itself.",
              "2. Different from scroll margin, which applies to target elements.",
              "3. Commonly used with sticky headers.",
              "4. Useful for scroll snap and carousel layouts.",
              "5. Does not affect layout spacing outside the container.",
              "6. Combine with scroll-smooth for polished UX.",
              "7. Padding values should reflect header height.",
              "8. Works with both vertical and horizontal scrolling.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
