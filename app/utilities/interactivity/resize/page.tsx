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
  { className: "resize", desc: "Resize both horizontally and vertically" },
  { className: "resize-x", desc: "Resize horizontally only" },
  { className: "resize-y", desc: "Resize vertically only" },
  { className: "resize-none", desc: "Disable resizing" },
]

export default function ResizePage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<textarea
  class="${activeUtility} w-full h-28 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
  placeholder="Try resizing me..."
></textarea>
      `.trim()
    )
  }, [activeUtility])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageTitle
            title="Resize"
            description="Control whether and how elements like textareas can be resized by the user."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Resize Utilities</h2>

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
                  label="Resize Behavior"
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
                  previewClass="p-6 bg-slate-50 rounded-xl"
                  description="Drag the resize handle to see how each utility behaves."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Chat message input"
                code={`<div class="rounded-xl bg-slate-900 p-4">
  <textarea
    class="resize-y w-full h-24 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
    placeholder="Type a message…"
  ></textarea>
</div>`}
                description="Supports longer messages without breaking the layout."
              >
              </ExampleCard>

              <ExampleCard
                title="Structured form feedback"
                code={`<div class="space-y-2 rounded-xl bg-white p-4 shadow">
  <label class="text-sm font-medium">Feedback</label>
  <textarea
    class="resize-none w-full h-24 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
    placeholder="Share your thoughts"
  ></textarea>
</div>`}
                description="Keeps forms aligned and predictable."
              >
              </ExampleCard>

              <ExampleCard
                title="Resizable notes panel"
                code={`<div class="rounded-xl bg-yellow-50 p-4">
  <textarea
    class="resize w-full h-32 rounded-lg border border-yellow-300 bg-yellow-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
    placeholder="Write your notes…"
  ></textarea>
</div>`}
                description="Ideal for note-taking or draft writing."
              >
              </ExampleCard>

              <ExampleCard
                title="Horizontal-only editor"
                code={`<div class="rounded-xl bg-slate-950 p-4">
  <textarea
    class="resize-x w-full h-20 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 font-mono text-xs text-green-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
    placeholder="const message = 'Hello world'"
  ></textarea>
</div>`}
                description="Useful for code or single-line style editors."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. resize enables both horizontal and vertical resizing.",
              "2. resize-y is ideal for chat and comment inputs.",
              "3. resize-none prevents layout-breaking user resizing.",
              "4. resize-x is rarely used in form layouts.",
              "5. Resize utilities primarily affect textarea elements.",
              "6. Fixed resizing improves consistency in structured forms.",
              "7. Vertical resizing balances flexibility and stability.",
              "8. Always test resizing behavior in responsive layouts.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
