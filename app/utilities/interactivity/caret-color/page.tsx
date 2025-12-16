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
  { className: "caret-inherit", desc: "Inherit caret color from parent" },
  { className: "caret-current", desc: "Use current text color as caret" },
  { className: "caret-transparent", desc: "Invisible caret" },
  { className: "caret-black", desc: "Black caret color" },
  { className: "caret-white", desc: "White caret color" },

  { className: "caret-red-500", desc: "Red caret for alerts or errors" },
  { className: "caret-orange-500", desc: "Orange caret for warnings" },
  { className: "caret-amber-500", desc: "Amber caret for attention states" },
  { className: "caret-yellow-500", desc: "Yellow caret highlight" },
  { className: "caret-lime-500", desc: "Lime caret for success hints" },
  { className: "caret-green-500", desc: "Green caret for success states" },
  { className: "caret-emerald-500", desc: "Emerald caret accent" },
  { className: "caret-teal-500", desc: "Teal caret accent" },
  { className: "caret-cyan-500", desc: "Cyan caret accent" },
  { className: "caret-sky-500", desc: "Sky caret accent" },
  { className: "caret-blue-500", desc: "Primary blue caret" },
  { className: "caret-indigo-500", desc: "Indigo caret accent" },
  { className: "caret-violet-500", desc: "Violet caret accent" },
  { className: "caret-purple-500", desc: "Purple caret for branding" },
  { className: "caret-fuchsia-500", desc: "Fuchsia caret accent" },
  { className: "caret-pink-500", desc: "Pink caret accent" },
  { className: "caret-rose-500", desc: "Rose caret for destructive actions" },
  { className: "caret-slate-500", desc: "Neutral slate caret" },
  { className: "caret-gray-500", desc: "Neutral gray caret" },
  { className: "caret-zinc-500", desc: "Muted zinc caret" },
  { className: "caret-neutral-500", desc: "Neutral system caret" },
  { className: "caret-stone-500", desc: "Stone caret accent" },
]

export default function CaretColorPage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<input
  type="text"
  class="${activeUtility} border rounded px-3 py-2 w-full"
  placeholder="Click and start typing..."
/>
      `.trim()
    )
  }, [activeUtility])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageTitle
            title="Caret Color"
            description="Control the color of the text insertion cursor inside inputs and textareas."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Caret Color Utilities</h2>

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
                  label="Caret Colors"
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
                  description="Focus the input to see the caret color."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Brand-aligned input"
                code={`<input class="caret-purple-500 border px-3 py-2" />`}
                description="Subtle branding detail that improves perceived polish."
              >
                <input
                  className="caret-purple-500 border rounded px-3 py-2 w-full"
                  placeholder="Search products"
                />
              </ExampleCard>

              <ExampleCard
                title="Error state reinforcement"
                code={`<input class="caret-rose-500 border border-rose-400 px-3 py-2" />`}
                description="Use caret color to reinforce validation states."
              >
                <input
                  className="caret-rose-500 border border-rose-400 rounded px-3 py-2 w-full"
                  placeholder="Invalid value"
                />
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Caret color is visible only when the input is focused.",
              "2. Works with inputs and textareas, not contenteditable elements.",
              "3. Use subtle colors for better readability.",
              "4. caret-current syncs caret with text color automatically.",
              "5. Avoid low-contrast caret colors for accessibility.",
              "6. Caret color does not affect selection highlight color.",
              "7. Combine caret color with border and ring states for clarity.",
              "8. Overusing caret colors can distract users during typing.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
