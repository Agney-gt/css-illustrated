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
  { className: "scroll-mt-0", desc: "No scroll margin" },
  { className: "scroll-mt-16", desc: "Small offset from the top" },
  { className: "scroll-mt-24", desc: "Medium offset for fixed headers" },
  { className: "scroll-mt-32", desc: "Large offset for tall navigation bars" },
]

export default function ScrollMarginPage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="scroll-smooth h-52 overflow-y-auto rounded-xl border bg-slate-50 p-4 space-y-8 text-sm">
  <div class="h-48 rounded bg-slate-200"></div>

  <a href="#target" class="font-medium text-blue-600 underline">
    Scroll to highlighted section
  </a>

  <div class="h-48 rounded bg-slate-200"></div>

  <div id="target" class="${activeUtility} rounded-lg bg-green-600 px-4 py-3 text-white font-semibold">
    Target section
  </div>

  <div class="h-48 rounded bg-slate-200"></div>
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
            title="Scroll Margin"
            description="Control the offset applied when elements are scrolled into view, useful for fixed headers and anchor navigation."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Scroll Margin Utilities</h2>

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
                  label="Scroll Margin (Top)"
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
                  description="Click the link to see how the offset changes."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Documentation anchors"
                code={`<h2 id="api" class="scroll-mt-24">API</h2>`}
                description="Prevents headings from hiding under fixed headers."
              >
                <div className="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-white p-4 space-y-6">
                  <a href="#api" className="font-medium text-blue-600 underline">
                    Jump to API section
                  </a>
                  <div className="h-48 bg-slate-100 rounded"></div>
                  <h2 id="api" className="scroll-mt-24 text-lg font-semibold">
                    API Reference
                  </h2>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Sticky navbar layout"
                code={`<section class="scroll-mt-32">...</section>`}
                description="Aligns scroll position with tall sticky navigation."
              >
                <div className="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-slate-900 p-4 text-white space-y-6">
                  <a href="#features" className="underline text-slate-300">
                    Go to Features
                  </a>
                  <div className="h-48 bg-slate-800 rounded"></div>
                  <section
                    id="features"
                    className="scroll-mt-32 text-lg font-semibold"
                  >
                    Features
                  </section>
                </div>
              </ExampleCard>

              <ExampleCard
                title="In-page table of contents"
                code={`<li><a href="#chapter" /></li>`}
                description="Keeps section titles clearly visible when navigating."
              >
                <div className="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-slate-50 p-4 space-y-6">
                  <a href="#chapter" className="text-indigo-600 underline font-medium">
                    Chapter 2
                  </a>
                  <div className="h-56 bg-slate-200 rounded"></div>
                  <div
                    id="chapter"
                    className="scroll-mt-16 text-lg font-semibold"
                  >
                    Chapter 2: Layout
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Dashboard section focus"
                code={`<div class="scroll-mt-16">...</div>`}
                description="Creates breathing room when jumping between panels."
              >
                <div className="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-white p-4 space-y-4 text-sm">
                  <a href="#analytics" className="text-blue-600 underline">
                    View analytics
                  </a>
                  <div className="h-40 bg-slate-100 rounded"></div>
                  <div
                    id="analytics"
                    className="scroll-mt-16 rounded bg-blue-600 px-3 py-2 text-white font-medium"
                  >
                    Analytics Panel
                  </div>
                </div>
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. scroll-mt controls vertical offset when scrolling into view.",
              "2. Most commonly used with anchor links.",
              "3. Match values to fixed header height.",
              "4. Works with scrollIntoView and anchor navigation.",
              "5. Combine with scroll-smooth for better UX.",
              "6. Horizontal variants exist for x-axis scrolling.",
              "7. Scroll margin does not affect layout spacing.",
              "8. Especially useful in documentation and dashboards.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
