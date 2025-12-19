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
  { className: "touch-auto", desc: "Browser handles all default touch behaviors" },
  { className: "touch-none", desc: "Disable all touch interactions" },
  { className: "touch-pan-x", desc: "Allow horizontal panning only" },
  { className: "touch-pan-y", desc: "Allow vertical panning only" },
  { className: "touch-pinch-zoom", desc: "Allow pinch zoom gestures" },
]

export default function TouchActionPage() {
  const options = utilities.map((u) => u.className)
  const [action, setAction] = useState(options[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="${action} overflow-x-auto rounded-xl border bg-slate-50 p-6">
  <div class="flex gap-6 w-max">
    <div class="w-64 h-36 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-medium">
      Card 1
    </div>
    <div class="w-64 h-36 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center font-medium">
      Card 2
    </div>
    <div class="w-64 h-36 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 text-white flex items-center justify-center font-medium">
      Card 3
    </div>
    <div class="w-64 h-36 rounded-xl bg-gradient-to-br from-blue-800 to-blue-900 text-white flex items-center justify-center font-medium">
      Card 4
    </div>
  </div>
</div>
      `.trim()
    )
  }, [action])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageTitle
            title="Touch Action"
            description="Control how touch input behaves on touch-enabled devices, including scrolling, panning, and zooming."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Touch Action Utilities</h2>

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
              <div>
                <UtilityExaButtons
                  label="Touch action"
                  options={options}
                  activeValue={action}
                  onSelect={setAction}
                />
              </div>

              <div className="md:col-span-2">
                <PreviewPanel
                  title="Live Preview"
                  code={code}
                  onCodeChange={setCode}
                  previewClass="p-6"
                  description="Try swiping horizontally, vertically, or pinching on touch devices."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Swipeable carousel"
                code={`<div class="touch-pan-x overflow-x-auto flex p-4 rounded-xl border bg-slate-900">
  <div class="flex gap-6">
  <div class="w-56 h-32 rounded-lg bg-slate-700 flex items-center justify-center text-white font-medium">
    Slide 1
  </div>
  <div class="w-56 h-32 rounded-lg bg-slate-600 flex items-center justify-center text-white font-medium">
    Slide 2
  </div>
  <div class="w-56 h-32 rounded-lg bg-slate-500 flex items-center justify-center text-white font-medium">
    Slide 3
  </div>
  <div class="w-56 h-32 rounded-lg bg-slate-500 flex items-center justify-center text-white font-medium">
    Slide 4
  </div>
  </div>
</div>`}
                description="Allows horizontal swiping without triggering page scroll."
              >
                
              </ExampleCard>

              <ExampleCard
                title="Vertical gesture panel"
                code={`<div class="touch-pan-y h-40 overflow-x-auto rounded-xl border bg-white p-4 space-y-3">
  <div class="h-16 rounded bg-slate-100 flex items-center justify-center">
    Top
  </div>
    <div class="h-16 rounded bg-slate-200 flex items-center justify-center">
    Middle
  </div>
  <div class="h-16 rounded bg-slate-300 flex items-center justify-center">
    Bottom
  </div>
</div>`}
                description="Preserves vertical interactions while blocking horizontal drift."
              >
              </ExampleCard>

              <ExampleCard
                title="Custom drawing canvas"
                code={`<canvas class="touch-none rounded-xl bg-slate-800"></canvas>`}
                description="Gives full control over pointer events."
              >
                <div className="touch-none h-36 rounded-xl bg-slate-800 flex items-center justify-center text-white font-medium">
                  Draw here
                </div>
              </ExampleCard>

              <ExampleCard
                title="Zoomable media viewer"
                code={`<div class="touch-pinch-zoom h-36 rounded-xl border bg-slate-50 flex items-center justify-center text-slate-700 font-medium">
  Pinch to zoom
</div>`}
                description="Allows zoom gestures while preventing accidental panning."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. touch-action affects touch and pointer devices only.",
              "2. Use touch-pan-x for horizontal carousels.",
              "3. Use touch-pan-y for vertical gesture areas.",
              "4. touch-none is required for custom drag or drawing logic.",
              "5. touch-pinch-zoom allows zooming while blocking panning.",
              "6. Helps improve scroll performance by avoiding browser heuristics.",
              "7. Has no visible effect on mouse-only devices.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
