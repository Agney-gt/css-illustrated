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
    className: "scroll-p-<number>",
    desc: "Set scroll padding on all sides using a spacing scale value.",
  },
  {
    className: "-scroll-p-<number>",
    desc: "Apply a negative scroll padding on all sides.",
  },
  {
    className: "scroll-p-(<custom-property>)",
    desc: "Set scroll padding on all sides using a CSS custom property.",
  },
  {
    className: "scroll-p-[<value>]",
    desc: "Set scroll padding on all sides using an arbitrary custom value.",
  },

  {
    className: "scroll-px-<number>",
    desc: "Set horizontal (inline) scroll padding using a spacing scale value.",
  },
  {
    className: "-scroll-px-<number>",
    desc: "Apply negative horizontal (inline) scroll padding.",
  },
  {
    className: "scroll-px-(<custom-property>)",
    desc: "Set horizontal (inline) scroll padding using a CSS custom property.",
  },
  {
    className: "scroll-px-[<value>]",
    desc: "Set horizontal (inline) scroll padding using an arbitrary custom value.",
  },

  {
    className: "scroll-py-<number>",
    desc: "Set vertical (block) scroll padding using a spacing scale value.",
  },
  {
    className: "-scroll-py-<number>",
    desc: "Apply negative vertical (block) scroll padding.",
  },
  {
    className: "scroll-py-(<custom-property>)",
    desc: "Set vertical (block) scroll padding using a CSS custom property.",
  },
  {
    className: "scroll-py-[<value>]",
    desc: "Set vertical (block) scroll padding using an arbitrary custom value.",
  },

  {
    className: "scroll-ps-<number>",
    desc: "Set scroll padding on the inline start side using a spacing scale value.",
  },
  {
    className: "-scroll-ps-<number>",
    desc: "Apply negative scroll padding to the inline start side.",
  },
  {
    className: "scroll-ps-(<custom-property>)",
    desc: "Set scroll padding on the inline start side using a CSS custom property.",
  },
  {
    className: "scroll-ps-[<value>]",
    desc: "Set scroll padding on the inline start side using an arbitrary custom value.",
  },

  {
    className: "scroll-pe-<number>",
    desc: "Set scroll padding on the inline end side using a spacing scale value.",
  },
  {
    className: "-scroll-pe-<number>",
    desc: "Apply negative scroll padding to the inline end side.",
  },
  {
    className: "scroll-pe-(<custom-property>)",
    desc: "Set scroll padding on the inline end side using a CSS custom property.",
  },
  {
    className: "scroll-pe-[<value>]",
    desc: "Set scroll padding on the inline end side using an arbitrary custom value.",
  },

  {
    className: "scroll-pt-<number>",
    desc: "Set scroll padding on the top side using a spacing scale value.",
  },
  {
    className: "-scroll-pt-<number>",
    desc: "Apply negative scroll padding to the top side.",
  },
  {
    className: "scroll-pt-(<custom-property>)",
    desc: "Set scroll padding on the top side using a CSS custom property.",
  },
  {
    className: "scroll-pt-[<value>]",
    desc: "Set scroll padding on the top side using an arbitrary custom value.",
  },

  {
    className: "scroll-pr-<number>",
    desc: "Set scroll padding on the right side using a spacing scale value.",
  },
  {
    className: "-scroll-pr-<number>",
    desc: "Apply negative scroll padding to the right side.",
  },
  {
    className: "scroll-pr-(<custom-property>)",
    desc: "Set scroll padding on the right side using a CSS custom property.",
  },
  {
    className: "scroll-pr-[<value>]",
    desc: "Set scroll padding on the right side using an arbitrary custom value.",
  },

  {
    className: "scroll-pb-<number>",
    desc: "Set scroll padding on the bottom side using a spacing scale value.",
  },
  {
    className: "-scroll-pb-<number>",
    desc: "Apply negative scroll padding to the bottom side.",
  },
  {
    className: "scroll-pb-(<custom-property>)",
    desc: "Set scroll padding on the bottom side using a CSS custom property.",
  },
  {
    className: "scroll-pb-[<value>]",
    desc: "Set scroll padding on the bottom side using an arbitrary custom value.",
  },

  {
    className: "scroll-pl-<number>",
    desc: "Set scroll padding on the left side using a spacing scale value.",
  },
  {
    className: "-scroll-pl-<number>",
    desc: "Apply negative scroll padding to the left side.",
  },
  {
    className: "scroll-pl-(<custom-property>)",
    desc: "Set scroll padding on the left side using a CSS custom property.",
  },
  {
    className: "scroll-pl-[<value>]",
    desc: "Set scroll padding on the left side using an arbitrary custom value.",
  },
]

const utilitiesExamples = [
  {exa:"scroll-p-32"},
  {exa:"-scroll-p-40"},
  {exa:"scroll-p-(--custom-space)"},
  {exa:"scroll-p-[10px]"},
  {exa:"scroll-px-32"},
  {exa:"-scroll-px-40"},
  {exa:"scroll-px-(--custom-space)"},
  {exa:"scroll-px-[10px]"},
  {exa:"scroll-py-32"},
  {exa:"-scroll-py-40"},
  {exa:"scroll-py-(--custom-space)"},
  {exa:"scroll-py-[10px]"},
  {exa:"scroll-ps-32"},
  {exa:"-scroll-ps-40"},
  {exa:"scroll-ps-(--custom-space)"},
  {exa:"scroll-ps-[10px]"},
  {exa:"scroll-pe-32"},
  {exa:"-scroll-pe-40"},
  {exa:"scroll-pe-(--custom-space)"},
  {exa:"scroll-pe-[10px]"},
  {exa:"scroll-pt-32"},
  {exa:"-scroll-pt-40"},
  {exa:"scroll-pt-(--custom-space)"},
  {exa:"scroll-pt-[10px]"},
  {exa:"scroll-pr-32"},
  {exa:"-scroll-pr-40"},
  {exa:"scroll-pr-(--custom-space)"},
  {exa:"scroll-pr-[10px]"},
  {exa:"scroll-pb-32"},
  {exa:"-scroll-pb-40"},
  {exa:"scroll-pb-(--custom-space)"},
  {exa:"scroll-pb-[10px]"},
  {exa:"scroll-pl-32"},
  {exa:"-scroll-pl-40"},
  {exa:"scroll-pl-(--custom-space)"},
  {exa:"scroll-pl-[10px]"},
]


export default function ScrollPaddingPage() {
  const utilityExaOptions = utilitiesExamples.map((u) => u.exa)
  const [activeUtilityExa, setActiveUtility] = useState(utilityExaOptions[0])
  const [code, setCode] = useState("")

useEffect(() => {
  setCode(
    `
<div class="${activeUtilityExa} h-64 overflow-y-auto rounded-xl border bg-slate-50 text-sm
            scroll-smooth scroll-snap-y scroll-snap-mandatory">

  <div class="sticky top-0 z-10 bg-slate-900 px-4 py-3 text-white font-medium">
    Sticky Header (Scroll Padding Demo)
  </div>

  <section class="h-56 scroll-snap-start flex items-center justify-center bg-slate-200">
    Section 1
  </section>

  <section class="h-56 scroll-snap-start flex items-center justify-center bg-green-600 text-white">
    Section 2
  </section>

  <section class="h-56 scroll-snap-start flex items-center justify-center bg-purple-600 text-white">
    Section 3
  </section>

  <section class="h-56 scroll-snap-start flex items-center justify-center bg-orange-500 text-white">
    Section 4
  </section>
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
            title="Scroll Padding"
            description="Control the internal offset of a scroll container when content scrolls into view."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Scroll Padding Utilities</h2>

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
                  label="Scroll Padding (Top)"
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
                  description="Scroll to see how content clears the sticky header."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Sticky header containers"
                code={`<div class="scroll-pt-24 h-40 overflow-y-auto rounded-xl border bg-white">
  <div class="sticky top-0 z-10 bg-slate-800 px-3 py-2 text-white font-medium">
    Messages
  </div>
  <div class="h-40 bg-slate-200"></div>
  <p class="px-3 py-2 text-sm">Conversation content</p>
</div>`}
                description="Keeps scrollable content readable under pinned headers."
              >
              </ExampleCard>

              <ExampleCard
                title="Scrollable data panels"
                code={`<div class="scroll-pt-32 h-40 overflow-y-auto rounded-xl border bg-slate-600 p-3 text-slate-200 space-y-3 text-sm">
  <div class="sticky top-0 bg-slate-950 px-2 py-1 font-medium">
    Filters
  </div>
  <div class="h-48 bg-slate-800 rounded"></div>
  <div class="rounded bg-slate-800 px-2 py-1">
    Chart content
  </div>
</div>`}
                description="Adds breathing room for dense dashboards."
              >
              </ExampleCard>

              <ExampleCard
                title="Carousel & snap scrolling"
                code={`<div class="scroll-pt-16 overflow-x-auto whitespace-nowrap rounded-xl border bg-slate-50 p-4">
  <div class="inline-block h-24 w-56 rounded-lg bg-blue-500 mr-4" ></div>
  <div class="inline-block h-24 w-56 rounded-lg bg-green-500 mr-4" ></div>
  <div class="inline-block h-24 w-56 rounded-lg bg-purple-500 mr-4" ></div>
</div>`}
                description="Maintains consistent spacing when snapping items."
              >
              </ExampleCard>

              <ExampleCard
                title="Command palette results"
                code={`<div class="scroll-pt-16 h-40 overflow-y-auto rounded-xl border bg-white p-3 space-y-2 text-sm">
  <div class="sticky top-0 bg-white font-medium">
    Search results
  </div>
  <div class="h-32 bg-slate-100 rounded"></div>
  <div class="rounded bg-indigo-600 px-3 py-2 text-white">
    Selected item
  </div>
</div>`}
                description="Ensures highlighted results are never hidden."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Scroll padding applies to the scroll container itself.",
              "2. Different from scroll margin, which applies to target elements.",
              "3. Commonly used with sticky headers.",
              "4. Useful for scroll snap and carousel layouts.",
              "5. Does not affect layout spacing outside the container.",
              "6. Combine with scroll-smooth for polished UX.",
              "7. Padding values should reflect header height.",
              "8. Works with both vertical and horizontal scrolling.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
