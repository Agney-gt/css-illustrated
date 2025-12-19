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
  { className: "select-none", desc: "Prevent users from selecting text" },
  { className: "select-text", desc: "Allow normal text selection" },
  { className: "select-all", desc: "Select all text on click" },
  { className: "select-auto", desc: "Browser decides selection behavior" },
]

export default function UserSelectPage() {
  const options = utilities.map((u) => u.className)
  const [select, setSelect] = useState(options[1])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<p class="${select} rounded-xl border bg-slate-50 p-6 text-sm">
  Try selecting this text using mouse, keyboard, or touch.
</p>
      `.trim()
    )
  }, [select])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageTitle
            title="User Select"
            description="Control whether users can select text or UI elements using mouse, touch, or keyboard."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">User Select Utilities</h2>

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
                  label="User select behavior"
                  options={options}
                  activeValue={select}
                  onSelect={setSelect}
                />
              </div>

              <div className="md:col-span-2">
                <PreviewPanel
                  title="Live Preview"
                  code={code}
                  onCodeChange={setCode}
                  previewClass="p-6"
                  description="Try selecting the content to feel the difference."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Interactive UI controls"
                code={`<div class="flex gap-4">
  <button class="select-none rounded-lg bg-blue-600 px-4 py-2 text-white font-medium">
    Primary action
  </button>
  <button class="select-none rounded-lg bg-slate-200 px-4 py-2 font-medium">
    Secondary
  </button>
</div>`}
                description="Avoids accidental text selection during interaction."
              >
              </ExampleCard>

              <ExampleCard
                title="Copy command blocks"
                code={`<code class="select-all block rounded-xl bg-slate-900 px-4 py-3 font-mono text-sm text-white">
npm install tailwindcss
</code>`}
                description="Instantly selects content for fast copying."
              >
              </ExampleCard>

              <ExampleCard
                title="Draggable cards"
                code={`<div class="select-none flex items-center justify-center h-28 rounded-xl bg-slate-800 text-white font-medium cursor-grab" draggable="true">
  Drag me
</div>`}
                description="Prevents selection while dragging items."
              >
              </ExampleCard>

              <ExampleCard
                title="Readable article text"
                code={`<article class="select-text rounded-xl border bg-white p-4 text-sm leading-relaxed">
Users can highlight and copy any part of this paragraph without
restriction, improving readability and accessibility.        
</article>`}
                description="Keeps long-form content selectable and accessible."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Use select-none on buttons, icons, and draggable UI.",
              "2. Use select-text for normal content and reading areas.",
              "3. select-all improves copy usability for code snippets.",
              "4. Avoid disabling selection on long-form text.",
              "5. Works with mouse, keyboard, and touch selection.",
              "6. Often combined with cursor and pointer utilities.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
