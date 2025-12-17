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
  {
    className: "snap-normal",
    desc: "Allows scrolling to skip snap points when scrolling fast",
  },
  {
    className: "snap-always",
    desc: "Forces the scroll to stop at every snap point",
  },
]

export default function ScrollSnapStopPage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="snap-x snap-mandatory overflow-x-auto flex p-6 rounded-xl border bg-slate-50">
  <div class="flex gap-6">
    <div class="snap-center ${activeUtility} w-64 h-36 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-medium">
      Item 1
    </div>
    <div class="snap-center ${activeUtility} w-64 h-36 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white flex items-center justify-center font-medium">
      Item 2
    </div>
    <div class="snap-center ${activeUtility} w-64 h-36 rounded-xl bg-gradient-to-br from-indigo-700 to-indigo-800 text-white flex items-center justify-center font-medium">
      Item 3
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
            title="Scroll Snap Stop"
            description="Control whether scrolling must stop at each snap point or can skip past items when scrolling quickly."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Scroll Snap Stop Utilities</h2>

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
                  label="Snap Stop Behavior"
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
                  description="Swipe fast and slow to feel the difference."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Product carousel (precise)"
                code={`<div class="snap-x snap-mandatory overflow-x-auto flex p-4 rounded-xl border bg-slate-900">
  <div class="flex gap-6">
    <div class="snap-center snap-always w-56 h-32 rounded-lg bg-slate-700 flex items-center justify-center text-white font-medium">
      Product A
    </div>
    <div class="snap-center snap-always w-56 h-32 rounded-lg bg-slate-600 flex items-center justify-center text-white font-medium">
      Product B
    </div>
    <div class="snap-center snap-always w-56 h-32 rounded-lg bg-slate-500 flex items-center justify-center text-white font-medium">
      Product C
    </div>
  </div>
</div>`}
                description="Encourages users to view each product one at a time."
              >
              </ExampleCard>

              <ExampleCard
                title="Media scrubber / timeline"
                code={`<div class="snap-x snap-proximity overflow-x-auto flex p-4 rounded-xl border bg-white">
  <div class="flex gap-4"> 
    <div class="snap-start snap-normal w-36 h-20 rounded bg-green-600 flex items-center justify-center text-white text-sm">
      00:10
    </div>
    <div class="snap-start snap-normal w-36 h-20 rounded bg-green-700 flex items-center justify-center text-white text-sm">
      01:20
    </div>
    <div class="snap-start snap-normal w-36 h-20 rounded bg-green-800 flex items-center justify-center text-white text-sm">
      02:45
    </div>
    <div class="snap-start snap-normal w-36 h-20 rounded bg-green-900 flex items-center justify-center text-white text-sm">
      03:15
    </div>
  </div>
</div>`}
                description="Allows users to jump quickly across long timelines."
              >
              </ExampleCard>

              <ExampleCard
                title="Onboarding steps"
                code={`<div class="snap-x snap-mandatory overflow-x-auto flex p-4 rounded-xl border bg-slate-50">
  <div class="flex gap-4">  
    <div class="snap-center snap-always w-64 h-36 rounded-xl bg-blue-600 text-white flex items-center justify-center font-semibold">
      Welcome
    </div>
    <div class="snap-center snap-always w-64 h-36 rounded-xl bg-blue-700 text-white flex items-center justify-center font-semibold">
      Permissions
    </div>
    <div class="snap-center snap-always w-64 h-36 rounded-xl bg-blue-800 text-white flex items-center justify-center font-semibold">
      Finish
    </div>
  </div>
</div>`}
                description="Ensures users progress through steps in order."
              >
              </ExampleCard>

              <ExampleCard
                title="Dense data scroller"
                code={`<div class="snap-x snap-proximity overflow-x-auto flex  p-4 rounded-xl border bg-slate-900">
  <div class="flex gap-4">
    <div class="snap-start snap-normal w-40 h-24 rounded bg-slate-700 text-white flex items-center justify-center text-sm">
      Data Type 1
    </div>
    <div class="snap-start snap-normal w-40 h-24 rounded bg-slate-600 text-white flex items-center justify-center text-sm">
      Data Type 2
    </div>
    <div class="snap-start snap-normal w-40 h-24 rounded bg-slate-500 text-white flex items-center justify-center text-sm">
      Data Type 3
    </div>
    <div class="snap-start snap-normal w-40 h-24 rounded bg-slate-400 text-white flex items-center justify-center text-sm">
      Data Type 4
    </div>
  </div>
</div>`}
                description="Keeps scrolling efficient when many items are present."
              >

              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. snap-always forces the scroll to stop at every snap point.",
              "2. snap-normal allows skipping items during fast scrolling.",
              "3. Use snap-always for step-by-step experiences.",
              "4. Use snap-normal for long or dense timelines.",
              "5. Works best with snap-mandatory or snap-proximity.",
              "6. Especially noticeable on touch devices.",
              "7. Combine with snap-center or snap-start for alignment.",
              "8. Test behavior with fast swipe gestures.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
