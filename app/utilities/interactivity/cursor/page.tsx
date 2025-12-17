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
  { className: "cursor-auto", desc: "Let the browser decide the cursor" },
  { className: "cursor-default", desc: "Default arrow cursor" },
  { className: "cursor-pointer", desc: "Indicates clickable elements" },
  { className: "cursor-text", desc: "Text selection cursor" },
  { className: "cursor-move", desc: "Indicates draggable content" },
  { className: "cursor-wait", desc: "Background process running" },
  { className: "cursor-help", desc: "Help or information available" },
  { className: "cursor-not-allowed", desc: "Action is disabled" },
  { className: "cursor-grab", desc: "Grabbable content" },
  { className: "cursor-grabbing", desc: "Content is being dragged" },
  { className: "cursor-zoom-in", desc: "Zoom-in action available" },
  { className: "cursor-zoom-out", desc: "Zoom-out action available" },
]

export default function CursorPage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="space-y-4">
  <button class="${activeUtility} px-4 py-2 border rounded">
    Hover me
  </button>

  <div class="${activeUtility} px-4 py-6 border rounded w-fit">
    Hover this area
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
            title="Cursor"
            description="Control the mouse cursor style to communicate interactivity and system states."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Cursor Utilities</h2>

            <div className="grid md:grid-cols-4 gap-4">
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
                  label="Cursor Types"
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
                  previewClass="p-4"
                  description="Hover over elements to see cursor changes."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Disabled action"
                code={`<button disabled class="cursor-not-allowed bg-blue-500 px-4 py-2 rounded border opacity-60">Submit</button>`}
                description="Clearly communicate disabled states."
              >
              </ExampleCard>

              <ExampleCard
                title="Draggable content"
                code={`<div class="cursor-grab bg-zinc-700 px-4 py-2 border rounded w-fit" draggable="true">Drag me</div>`}
                description="Indicate draggable or movable UI elements."
              >
              </ExampleCard>

              <ExampleCard
                title="Clickable card"
                code={`<div class="cursor-pointer bg-blue-500 px-4 py-6 border rounded hover:bg-blue-300">Open details</div>`}
                description="Used for cards or list items that navigate on click."
              >
              </ExampleCard>

              <ExampleCard
                title="Text editor"
                code={`<textarea class="cursor-text w-full p-3 border rounded" placeholder="Type here"></textarea>`}
                description="Indicates text input and selection areas."
              >
              </ExampleCard>

              <ExampleCard
                title="Image zoom"
                code={`<img class="cursor-zoom-in px-2 py-3" src="https://picsum.photos/seed/picsum/200/300"/>`}
                description="Common in galleries and product images."
              >
              </ExampleCard>

              <ExampleCard
                title="Loading state"
                code={`<button class="cursor-wait bg-slate-500 px-4 py-2 border rounded">Processing</button>`}
                description="Used when background tasks are running."
              >
              </ExampleCard>

              <ExampleCard
                title="Help tooltip"
                code={`<span class="cursor-help inline-flex items-center justify-center w-8 h-8 border rounded-full">?</span>`}
                description="Indicates additional information is available."
              >
              </ExampleCard>

              <ExampleCard
                title="Sortable list"
                code={`<li class="cursor-move bg-slate-500 px-4 py-2 border rounded w-fit">List item</li>`}
                description="Used in sortable or reorderable lists."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Cursor styles provide visual hints, not functionality.",
              "2. Always match cursor behavior with actual interaction.",
              "3. Use cursor-pointer only for clickable elements.",
              "4. cursor-not-allowed works best with reduced opacity.",
              "5. Avoid misleading cursors that break user expectations.",
              "6. Cursor utilities do not replace keyboard accessibility.",
              "7. Combine cursor styles with hover and focus states.",
              "8. Touch devices do not display cursors.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
