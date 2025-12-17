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
    className: "scroll-auto",
    desc: "Instant scrolling without animation",
  },
  {
    className: "scroll-smooth",
    desc: "Smooth animated scrolling",
  },
]

export default function ScrollBehaviorPage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="${activeUtility} h-52 overflow-y-auto rounded-xl border bg-slate-50 p-4 space-y-8 text-sm">
  <p class="font-medium">Scroll inside the container or use the link.</p>

  <div class="h-40 rounded bg-slate-200"></div>

  <a href="#target" class="inline-block text-blue-600 underline font-medium">
    Jump to highlighted section
  </a>

  <div class="h-40 rounded bg-slate-200"></div>

  <div id="target" class="rounded-lg bg-green-600 px-4 py-3 text-white font-semibold">
    Target section
  </div>

  <div class="h-40 rounded bg-slate-200"></div>
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
            title="Scroll Behavior"
            description="Control how scrolling behaves when navigating within a page or scroll container."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Scroll Behavior Utilities</h2>

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
                  label="Scroll Behavior"
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
                  description="Scroll or jump to observe behavior."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Documentation navigation"
                code={`<html class="scroll-smooth">...</html>`}
                description="Creates a polished navigation experience for long-form content."
              >
                <div className="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-white p-4 space-y-4">
                  <a href="#section" className="text-blue-600 underline font-medium">
                    Jump to API section
                  </a>
                  <div className="h-40 bg-slate-100 rounded"></div>
                  <div id="section" className="font-semibold text-lg">
                    API Reference
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Modal or side panel"
                code={`<div class="scroll-auto overflow-y-auto"></div>`}
                description="Keeps interactions responsive in constrained layouts."
              >
                <div className="scroll-auto h-40 overflow-y-auto rounded-xl border bg-slate-900 p-4 text-slate-200 space-y-4 text-sm">
                  <p className="font-medium text-white">Settings</p>
                  <div className="h-32 bg-slate-800 rounded"></div>
                  <div className="h-32 bg-slate-800 rounded"></div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Table of contents jump"
                code={`<div class="scroll-smooth overflow-y-auto"></div>`}
                description="Helps users orient themselves when jumping between sections."
              >
                <div className="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-slate-50 p-4 space-y-6">
                  <a href="#chapter" className="font-medium text-indigo-600 underline">
                    Go to chapter 3
                  </a>
                  <div className="h-48 bg-slate-200 rounded"></div>
                  <div id="chapter" className="text-lg font-semibold">
                    Chapter 3
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Activity feed"
                code={`<div class="scroll-auto overflow-y-auto"></div>`}
                description="Immediate scrolling feels faster for live or frequently updating feeds."
              >
                <div className="scroll-auto h-40 overflow-y-auto rounded-xl border bg-white p-4 space-y-3 text-sm">
                  <div className="rounded bg-slate-100 px-3 py-2">User signed in</div>
                  <div className="rounded bg-slate-100 px-3 py-2">Profile updated</div>
                  <div className="rounded bg-slate-100 px-3 py-2">New message received</div>
                  <div className="rounded bg-slate-100 px-3 py-2">Settings saved</div>
                </div>
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. scroll-smooth animates anchor and programmatic scrolling.",
              "2. scroll-auto restores instant scrolling behavior.",
              "3. Apply scroll behavior to the scroll container or root.",
              "4. Smooth scrolling is best for navigation, not data entry.",
              "5. Avoid smooth scrolling for critical feedback loops.",
              "6. Works with anchor links and scrollIntoView.",
              "7. Test with long content and nested containers.",
              "8. Respect reduced-motion user preferences when possible.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
