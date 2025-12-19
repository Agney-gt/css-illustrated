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
import SrcollUtilitiesNotes from "../scrollUtilitiesNotes"

const utilities = [
  {
    className: "scroll-m-<number>",
    desc: "Set scroll margin on all sides using a spacing scale value.",
  },
  {
    className: "-scroll-m-<number>",
    desc: "Apply a negative scroll margin on all sides.",
  },
  {
    className: "scroll-m-(<custom-property>)",
    desc: "Set scroll margin on all sides using a CSS custom property.",
  },
  {
    className: "scroll-m-[<value>]",
    desc: "Set scroll margin on all sides using an arbitrary custom value.",
  },

  {
    className: "scroll-mx-<number>",
    desc: "Set horizontal (inline) scroll margin using a spacing scale value.",
  },
  {
    className: "-scroll-mx-<number>",
    desc: "Apply negative horizontal (inline) scroll margin.",
  },
  {
    className: "scroll-mx-(<custom-property>)",
    desc: "Set horizontal (inline) scroll margin using a CSS custom property.",
  },
  {
    className: "scroll-mx-[<value>]",
    desc: "Set horizontal (inline) scroll margin using an arbitrary custom value.",
  },

  {
    className: "scroll-my-<number>",
    desc: "Set vertical (block) scroll margin using a spacing scale value.",
  },
  {
    className: "-scroll-my-<number>",
    desc: "Apply negative vertical (block) scroll margin.",
  },
  {
    className: "scroll-my-(<custom-property>)",
    desc: "Set vertical (block) scroll margin using a CSS custom property.",
  },
  {
    className: "scroll-my-[<value>]",
    desc: "Set vertical (block) scroll margin using an arbitrary custom value.",
  },

  {
    className: "scroll-ms-<number>",
    desc: "Set scroll margin on the inline start side using a spacing scale value.",
  },
  {
    className: "-scroll-ms-<number>",
    desc: "Apply negative scroll margin to the inline start side.",
  },
  {
    className: "scroll-ms-(<custom-property>)",
    desc: "Set scroll margin on the inline start side using a CSS custom property.",
  },
  {
    className: "scroll-ms-[<value>]",
    desc: "Set scroll margin on the inline start side using an arbitrary custom value.",
  },

  {
    className: "scroll-me-<number>",
    desc: "Set scroll margin on the inline end side using a spacing scale value.",
  },
  {
    className: "-scroll-me-<number>",
    desc: "Apply negative scroll margin to the inline end side.",
  },
  {
    className: "scroll-me-(<custom-property>)",
    desc: "Set scroll margin on the inline end side using a CSS custom property.",
  },
  {
    className: "scroll-me-[<value>]",
    desc: "Set scroll margin on the inline end side using an arbitrary custom value.",
  },

  {
    className: "scroll-mt-<number>",
    desc: "Set scroll margin on the top side using a spacing scale value.",
  },
  {
    className: "-scroll-mt-<number>",
    desc: "Apply negative scroll margin to the top side.",
  },
  {
    className: "scroll-mt-(<custom-property>)",
    desc: "Set scroll margin on the top side using a CSS custom property.",
  },
  {
    className: "scroll-mt-[<value>]",
    desc: "Set scroll margin on the top side using an arbitrary custom value.",
  },

  {
    className: "scroll-mr-<number>",
    desc: "Set scroll margin on the right side using a spacing scale value.",
  },
  {
    className: "-scroll-mr-<number>",
    desc: "Apply negative scroll margin to the right side.",
  },
  {
    className: "scroll-mr-(<custom-property>)",
    desc: "Set scroll margin on the right side using a CSS custom property.",
  },
  {
    className: "scroll-mr-[<value>]",
    desc: "Set scroll margin on the right side using an arbitrary custom value.",
  },

  {
    className: "scroll-mb-<number>",
    desc: "Set scroll margin on the bottom side using a spacing scale value.",
  },
  {
    className: "-scroll-mb-<number>",
    desc: "Apply negative scroll margin to the bottom side.",
  },
  {
    className: "scroll-mb-(<custom-property>)",
    desc: "Set scroll margin on the bottom side using a CSS custom property.",
  },
  {
    className: "scroll-mb-[<value>]",
    desc: "Set scroll margin on the bottom side using an arbitrary custom value.",
  },

  {
    className: "scroll-ml-<number>",
    desc: "Set scroll margin on the left side using a spacing scale value.",
  },
  {
    className: "-scroll-ml-<number>",
    desc: "Apply negative scroll margin to the left side.",
  },
  {
    className: "scroll-ml-(<custom-property>)",
    desc: "Set scroll margin on the left side using a CSS custom property.",
  },
  {
    className: "scroll-ml-[<value>]",
    desc: "Set scroll margin on the left side using an arbitrary custom value.",
  },
]

const utilitiesExamples = [ 
  { exa: "scroll-m-10" },
  { exa: "-scroll-m-12" },
  { exa: "scroll-m-(--scroll-offset)" },
  { exa: "scroll-m-[10px]" },
  { exa: "scroll-mx-32" },
  { exa: "-scroll-mx-20" },
  { exa: "scroll-mx-(--scroll-offset)" },
  { exa: "scroll-mx-[20px]" },
  { exa: "scroll-my-16" },
  { exa: "-scroll-my-24" },
  { exa: "scroll-my-(--scroll-offset)" },
  { exa: "scroll-my-[40px]" },
  { exa: "scroll-ms-24" },
  { exa: "-scroll-ms-20" },
  { exa: "scroll-ms-(--scroll-offset)" },
  { exa: "scroll-ms-[16px]" },
  { exa: "scroll-me-36" },
  { exa: "-scroll-me-48" },
  { exa: "scroll-me-(--scroll-offset)" },
  { exa: "scroll-me-[18px]" },
  { exa: "scroll-mt-32" },
  { exa: "-scroll-mt-40" },
  { exa: "scroll-mt-(--scroll-offset)" },
  { exa: "scroll-mt-[40px]" },
  { exa: "scroll-mr-12" },
  { exa: "-scroll-mr-32" },
  { exa: "scroll-mr-(--scroll-offset)" },
  { exa: "scroll-mr-[34px]" },
  { exa: "scroll-mb-16" },
  { exa: "-scroll-mb-48" },
  { exa: "scroll-mb-(--scroll-offset)" },
  { exa: "scroll-mb-[32px]" },
  { exa: "scroll-ml-64" },
  { exa: "-scroll-ml-56" },
  { exa: "scroll-ml-(--scroll-offset)" },
  { exa: "scroll-ml-[8px]" } 
  ]

export default function ScrollMarginPage() {
  const utilityExaOptions = utilitiesExamples.map((u) => u.exa)
  const [activeUtilityExa, setActiveUtility] = useState(utilityExaOptions[0])
  const [code, setCode] = useState("")
useEffect(() => {
  const isVertical = /(scroll-m$|scroll-my|scroll-mt|scroll-mb)/.test(activeUtilityExa)
  const isHorizontal = /(scroll-m$|scroll-mx|scroll-ml|scroll-mr|scroll-ms|scroll-me)/.test(activeUtilityExa)

  setCode(
    `<div class="h-64 overflow-y-auto rounded-xl border bg-slate-50 text-sm">
  <div class="sticky top-0 z-10 bg-white border-b px-4 py-2 font-semibold">
    Sticky Header
  </div>

  <div class="space-y-16 p-4">
    <div class="h-40 rounded bg-slate-200"></div>

    <a href="#v-target" class="inline-block text-blue-600 underline">
      Scroll to vertical target
    </a>

    <div class="h-40 rounded bg-slate-200"></div>

    <div
      id="v-target"
      class="${isVertical ? activeUtilityExa : ""} rounded-lg bg-green-600 px-4 py-3 text-white font-semibold"
    >
      Vertical Target
      ${!isVertical ? '<div class="text-xs opacity-75">(no vertical effect)</div>' : ""}
    </div>

    <div class="h-40 rounded bg-slate-200"></div>
  </div>
</div>
<div class="mt-10 overflow-x-auto rounded-xl border bg-slate-50 p-4 text-sm">
  <div class="flex w-[1200px] gap-16 items-center">

    <div class="w-64 h-32 rounded bg-slate-200"></div>

    <a href="#h-target" class="shrink-0 text-blue-600 underline">
      Scroll horizontally →
    </a>

    <div class="w-64 h-32 rounded bg-slate-200"></div>

    <div
      id="h-target"
      class="${isHorizontal ? activeUtilityExa : ""} w-64 h-32 flex items-center justify-center rounded bg-green-600 text-white font-semibold"
    >
      Horizontal Target
      ${!isHorizontal ? '<div class="text-xs opacity-75">(no horizontal effect)</div>' : ""}
    </div>

    <div class="w-64 h-32 rounded bg-slate-200"></div>
  </div>
</div>
    `.trim()
  )
}, [activeUtilityExa])



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

          <SrcollUtilitiesNotes />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="space-y-4">
                <UtilityExaButtons
                  label="Scroll Margin (Top)"
                  options={utilityExaOptions}
                  activeValue={activeUtilityExa}
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
                code={`<div class="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-white p-4 space-y-6">
  <a href="#api" class="font-medium text-blue-600 underline">
    Jump to API section
  </a>
  <div class="h-48 bg-slate-100 rounded"></div>
  <h2 id="api" class="scroll-mt-24 text-lg font-semibold">
    API Reference
  </h2>
</div>`}
                description="Prevents headings from hiding under fixed headers."
              >
              </ExampleCard>

              <ExampleCard
                title="Sticky navbar layout"
                code={`<div class="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-slate-900 p-4 text-white space-y-6">
  <a href="#features" class="underline text-slate-300">
    Go to Features
  </a>
  <div class="h-48 bg-slate-800 rounded"></div>
  <section
    id="features"
    class="scroll-mt-32 text-lg font-semibold"
  >
    Features
  </section>
</div>`}
                description="Aligns scroll position with tall sticky navigation."
              >
              </ExampleCard>

              <ExampleCard
                title="In-page table of contents"
                code={`<div class="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-slate-50 p-4 space-y-6">
  <a href="#chapter" class="text-indigo-600 underline font-medium">
    Chapter 2
  </a>
  <div class="h-56 bg-slate-200 rounded"></div>
  <div
    id="chapter"
    class="scroll-mt-16 text-lg font-semibold"
  >
    Chapter 2: Layout
  </div>
</div>`}
                description="Keeps section titles clearly visible when navigating."
              >
              </ExampleCard>

              <ExampleCard
                title="Dashboard section focus"
                code={`<div class="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-white p-4 space-y-4 text-sm">
  <a href="#analytics" class="text-blue-600 underline">
    View analytics
  </a>
  <div class="h-40 bg-slate-100 rounded"></div>
  <div
    id="analytics"
    class="scroll-mt-16 rounded bg-blue-600 px-3 py-2 text-white font-medium"
  >
    Analytics Panel
  </div>
</div>`}
                description="Creates breathing room when jumping between panels."
              >
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
              "9. scroll-margin only matters when scrolling TO an element, not around it"
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
