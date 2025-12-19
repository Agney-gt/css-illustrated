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
  { className: "snap-start", desc: "Snap item to the start of the container" },
  { className: "snap-center", desc: "Snap item to the center of the container" },
  { className: "snap-end", desc: "Snap item to the end of the container" },
  { className: "snap-align-none", desc: "Disable snapping for this item" },
]

export default function ScrollSnapAlignPage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[1])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="snap-x snap-mandatory overflow-x-auto flex p-6 rounded-xl border bg-slate-50">
<div class="flex gap-6">
  <div class="${activeUtility} w-64 h-36 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-medium">
    Item 1
  </div>
  <div class="${activeUtility} w-64 h-36 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center font-medium">
    Item 2
  </div>
  <div class="${activeUtility} w-64 h-36 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 text-white flex items-center justify-center font-medium">
    Item 3
  </div>
  <div class="${activeUtility} w-64 h-36 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 text-white flex items-center justify-center font-medium">
    Item 4
  </div>
</div>
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
            title="Scroll Snap Align"
            description="Control how individual elements align within a scroll snap container."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Scroll Snap Align Utilities</h2>

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
                  label="Snap Alignment"
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
                  description="Scroll horizontally to feel the snap alignment."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Image carousel"
                code={`<div class="snap-x snap-mandatory overflow-x-auto flex p-4 rounded-xl border bg-slate-900">
  <div class="flex gap-6">
    <div class="snap-center w-64 h-36 rounded-lg bg-slate-700 flex-shrink-0"></div>
    <div class="snap-center w-64 h-36 rounded-lg bg-slate-600 flex-shrink-0"></div>
    <div class="snap-center w-64 h-36 rounded-lg bg-slate-500 flex-shrink-0"></div>
    <div class="snap-center w-64 h-36 rounded-lg bg-slate-400 flex-shrink-0"></div>
  </div>
</div>`}
                description="Centers each slide for a focused viewing experience."
              >
              </ExampleCard>

              <ExampleCard
                title="Horizontal timeline"
                code={`<div class="snap-x snap-proximity overflow-x-auto flex gap-8 p-4 rounded-xl border bg-white">
  <div class="flex gap-6">
    <div class="snap-start w-48 h-24 rounded-lg bg-green-600 flex items-center justify-center text-white font-medium">
      Step 1
    </div>
    <div class="snap-start w-48 h-24 rounded-lg bg-green-700 flex items-center justify-center text-white font-medium">
      Step 2
    </div>
    <div class="snap-start w-48 h-24 rounded-lg bg-green-800 flex items-center justify-center text-white font-medium">
      Step 3
    </div>
  </div>
</div>`}
                description="Keeps progress steps aligned and readable."
              >
              </ExampleCard>

              <ExampleCard
                title="Product cards row"
                code={`<div class="snap-x snap-mandatory overflow-x-auto flex gap-6 p-4 rounded-xl border bg-slate-50">
  <div class="flex gap-6">
    <div class="snap-center w-56 h-40 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-semibold">
      Product A
    </div>
    <div class="snap-center w-56 h-40 rounded-xl bg-indigo-700 text-white flex items-center justify-center font-semibold">
      Product B
    </div>
    <div class="snap-center w-56 h-40 rounded-xl bg-indigo-800 text-white flex items-center justify-center font-semibold">
      Product C
    </div>
  </div>
</div>`}
                description="Highlights one product at a time on mobile."
              >
              </ExampleCard>

              <ExampleCard
                title="Mixed snapping behavior"
                code={`<div class="snap-x snap-mandatory overflow-x-auto flex gap-6 p-4 rounded-xl border bg-slate-900">
  <div class="flex gap-6">
    <div class="snap-center w-56 h-32 rounded bg-slate-700 text-white flex items-center justify-center">
      Article
    </div>
    <div class="snap-align-none w-56 h-32 rounded bg-yellow-500 text-black flex items-center justify-center font-medium">
      Sponsored Ad
    </div>
    <div class="snap-center w-56 h-32 rounded bg-slate-600 text-white flex items-center justify-center">
      Article
    </div>
  </div>
</div>`}
                description="Allows exceptions inside snap-based layouts."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Snap alignment applies to individual children, not containers.",
              "2. Must be combined with snap-x or snap-y on the parent.",
              "3. snap-center works best for carousels.",
              "4. snap-start is ideal for lists and timelines.",
              "5. snap-align-none disables snapping for specific items.",
              "6. Combine with snap-mandatory or snap-proximity.",
              "7. Works for both horizontal and vertical scrolling.",
              "8. Test snapping behavior on touch devices.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
