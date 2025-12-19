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
    className: "will-change-auto",
    desc: "Let the browser decide optimization strategy",
  },
  {
    className: "will-change-scroll",
    desc: "Optimize for scroll position changes",
  },
  {
    className: "will-change-contents",
    desc: "Optimize for content updates",
  },
  {
    className: "will-change-transform",
    desc: "Optimize for transform animations",
  },
]

export default function WillChangePage() {
  const options = utilities.map((u) => u.className)
  const [willChange, setWillChange] = useState(options[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="${willChange} transition-transform duration-300 hover:scale-110
            cursor-pointer rounded-xl bg-gradient-to-br from-blue-600 to-blue-700
            px-8 py-4 text-white font-medium shadow">
  Hover me
</div>
      `.trim()
    )
  }, [willChange])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageTitle
            title="Will Change"
            description="Hint to the browser which properties are likely to change, allowing it to optimize rendering and performance."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Will Change Utilities</h2>

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
                  label="Will change hint"
                  options={options}
                  activeValue={willChange}
                  onSelect={setWillChange}
                />
              </div>

              <div className="md:col-span-2">
                <PreviewPanel
                  title="Live Preview"
                  code={code}
                  onCodeChange={setCode}
                  previewClass="p-10 flex justify-center bg-slate-50 rounded-xl"
                  description="Hover to trigger a transform animation."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Animated cards"
                code={`<div class="will-change-transform transition-transform hover:-translate-y-2 rounded-xl bg-slate-800 p-5 text-white w-52">
  Product card
</div>`}
                description="Improves responsiveness for hover-driven motion."
              >
                
              </ExampleCard>

              <ExampleCard
                title="Scrollable feed"
                code={`<div class="will-change-scroll h-40 overflow-y-auto rounded-xl border bg-white p-3 space-y-3 text-sm">
<div class="rounded bg-slate-100 px-3 py-2" >Feed item 1</div>
<div class="rounded bg-slate-100 px-3 py-2" >Feed item 2</div>
<div class="rounded bg-slate-100 px-3 py-2" >Feed item 3</div>
<div class="rounded bg-slate-100 px-3 py-2" >Feed item 4</div>
<div class="rounded bg-slate-100 px-3 py-2" >Feed item 5</div>
<div class="rounded bg-slate-100 px-3 py-2" >Feed item 6</div>
</div>`}
                description="Helps browsers prepare for frequent scroll updates."
              >
                <div className="will-change-scroll h-40 overflow-y-auto rounded-xl border bg-white p-3 space-y-3 text-sm">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded bg-slate-100 px-3 py-2"
                    >
                      Feed item {i + 1}
                    </div>
                  ))}
                </div>
              </ExampleCard>

              <ExampleCard
                title="Live content updates"
                code={`<div class="will-change-contents rounded-xl border bg-slate-50 p-4 text-sm">
  <div class="mb-2 font-medium">Live stats</div>
  <div class="rounded bg-green-600 px-3 py-2 text-white">
    Active users: 128
  </div>
</div>`}
                description="Optimizes components that update text or layout frequently."
              >        
              </ExampleCard>

              <ExampleCard
                title="Floating action button"
                code={`<button class="will-change-transform transition-transform hover:scale-110 rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg">
  Action
</button>`}
                description="Keeps motion smooth for repeated entrance animations."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. will-change is a performance hint, not a guarantee.",
              "2. Use will-change-transform for animations and transitions.",
              "3. Avoid applying will-change globally or permanently.",
              "4. Overuse can increase memory and GPU usage.",
              "5. Best for elements that animate frequently.",
              "6. Remove will-change when the animation is no longer active.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
