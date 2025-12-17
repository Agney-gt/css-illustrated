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

const axisUtilities = [
  { className: "snap-none", desc: "Disable scroll snapping" },
  { className: "snap-x", desc: "Enable horizontal snapping" },
  { className: "snap-y", desc: "Enable vertical snapping" },
  { className: "snap-both", desc: "Enable snapping on both axes" },
]

const behaviorUtilities = [
  { className: "snap-mandatory", desc: "Force snapping to snap points" },
  { className: "snap-proximity", desc: "Snap when close to a snap point" },
]

export default function ScrollSnapTypePage() {
  const axisOptions = axisUtilities.map((u) => u.className)
  const behaviorOptions = behaviorUtilities.map((u) => u.className)

  const [axis, setAxis] = useState(axisOptions[1])
  const [behavior, setBehavior] = useState(behaviorOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    const snapClass =
      axis === "snap-none" ? "snap-none" : `${axis} ${behavior}`

    setCode(
      `
<div class="${snapClass} overflow-auto flex gap-6 p-6 rounded-xl border bg-slate-50">
  <div class="flex gap-6">
  <div class="snap-center w-64 h-36 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-medium">
    Item 1
  </div>
  <div class="snap-center w-64 h-36 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center font-medium">
    Item 2
  </div>
  <div class="snap-center w-64 h-36 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 text-white flex items-center justify-center font-medium">
    Item 3
  </div>
  </div>
</div>
      `.trim()
    )
  }, [axis, behavior])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageTitle
            title="Scroll Snap Type"
            description="Define the scroll snapping behavior of a container — direction and strictness of snapping."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Scroll Snap Type Utilities</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[...axisUtilities, ...behaviorUtilities].map((u) => (
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
              <div className="space-y-6">
                <UtilityExaButtons
                  label="Snap Axis"
                  options={axisOptions}
                  activeValue={axis}
                  onSelect={setAxis}
                />

                {axis !== "snap-none" && (
                  <UtilityExaButtons
                    label="Snap Behavior"
                    options={behaviorOptions}
                    activeValue={behavior}
                    onSelect={setBehavior}
                  />
                )}
              </div>

              <div className="md:col-span-2">
                <PreviewPanel
                  title="Live Preview"
                  code={code}
                  onCodeChange={setCode}
                  previewClass="p-6"
                  description="Scroll to explore axis and snap strictness."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Horizontal carousel"
                code={`<div class="snap-x snap-mandatory overflow-x-auto flex p-4 rounded-xl border bg-slate-900">
  <div class="flex gap-6">
    <div class="snap-center w-56 h-32 rounded-lg bg-slate-700 flex items-center justify-center text-white font-medium">
      Slide A
    </div>
    <div class="snap-center w-56 h-32 rounded-lg bg-slate-600 flex items-center justify-center text-white font-medium">
      Slide B
    </div>
    <div class="snap-center w-56 h-32 rounded-lg bg-slate-500 flex items-center justify-center text-white font-medium">
      Slide C
    </div>
  </div>
</div>`}
                description="Locks each slide cleanly into place."
              >
              </ExampleCard>

              <ExampleCard
                title="Vertical page sections"
                code={`<div class="snap-y snap-proximity h-48 overflow-y-auto rounded-xl border bg-white p-4 space-y-6">
  <div class="snap-start h-36 rounded-lg bg-green-600 text-white flex items-center justify-center font-semibold">
    Section One
  </div>
  <div class="snap-start h-36 rounded-lg bg-green-700 text-white flex items-center justify-center font-semibold">
    Section Two
  </div>
  <div class="snap-start h-36 rounded-lg bg-green-800 text-white flex items-center justify-center font-semibold">
    Section Three
  </div>
</div>`}
                description="Creates smooth, section-based scrolling."
              >
              </ExampleCard>

              <ExampleCard
                title="Two-axis gallery"
                code={`<div class="snap-both snap-mandatory h-48 w-full overflow-auto rounded-xl border bg-slate-50 p-4 grid grid-cols-2 gap-6">
  <div class="snap-center h-32 rounded bg-indigo-600 text-white flex items-center justify-center">
    A
  </div>
  <div class="snap-center h-32 rounded bg-indigo-700 text-white flex items-center justify-center">
    B
  </div>
  <div class="snap-center h-32 rounded bg-indigo-800 text-white flex items-center justify-center">
    C
  </div>
  <div class="snap-center h-32 rounded bg-indigo-900 text-white flex items-center justify-center">
    D
  </div>
</div>`}
                description="Supports grid-based snapping layouts."
              >
              </ExampleCard>

              <ExampleCard
                title="Snapping disabled"
                code={`<div class="snap-none overflow-x-auto flex gap-6 p-4 rounded-xl border bg-slate-900">
  <div class="flex gap-6">
  <div class="w-48 h-28 rounded bg-slate-700 text-white flex items-center justify-center">
    Free
  </div>
  <div class="w-48 h-28 rounded bg-slate-600 text-white flex items-center justify-center">
    Scroll
  </div>
  <div class="w-48 h-28 rounded bg-slate-500 text-white flex items-center justify-center">
    Mode
  </div>
  </div>
</div>`}
                description="Restores free-form scrolling when snapping isn’t desired."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Scroll snap type is applied on the scroll container.",
              "2. Always combine snap-mandatory or snap-proximity with an axis.",
              "3. snap-x and snap-y control direction.",
              "4. snap-both allows snapping on both axes.",
              "5. Use snap-mandatory for carousels and step-based flows.",
              "6. Use snap-proximity for natural scrolling.",
              "7. snap-none fully disables snapping.",
              "8. Works best with snap-align utilities on children.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
