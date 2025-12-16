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
    className: "scheme-normal",
    desc: "Use the browser or OS preferred color scheme",
  },
  {
    className: "scheme-light",
    desc: "Force native UI elements to render in light mode",
  },
  {
    className: "scheme-dark",
    desc: "Force native UI elements to render in dark mode",
  },
]

export default function ColorSchemePage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="${activeUtility} space-y-3 p-4 border rounded">
  <input
    type="text"
    class="border rounded px-3 py-2 w-full"
    placeholder="Text input"
  />

  <label class="flex items-center gap-2">
    <input type="checkbox" checked />
    Checkbox
  </label>

  <textarea
    class="border rounded px-3 py-2 w-full"
    placeholder="Textarea"
  ></textarea>
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
            title="Color Scheme"
            description="Control whether native UI elements render in light or dark mode, independent of your site theme."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Color Scheme Utilities</h2>

            <div className="grid md:grid-cols-3 gap-4">
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
                  label="Color Scheme"
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
                  description="Switch schemes to see how native UI elements adapt."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Dark widgets inside light UI"
                code={`<div class="scheme-dark">
  <input class="border px-3 py-2" />
</div>`}
                description="Force dark native controls inside an otherwise light interface."
              >
                <div className="scheme-dark p-3 border rounded space-y-2">
                  <input
                    className="border rounded px-3 py-2 w-full"
                    placeholder="Dark input"
                  />
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Checkbox
                  </label>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Respect system preference"
                code={`<div class="scheme-normal">
  <input class="border px-3 py-2" />
</div>`}
                description="Let the operating system decide light or dark mode automatically."
              >
                <div className="scheme-normal p-3 border rounded">
                  <input
                    className="border rounded px-3 py-2 w-full"
                    placeholder="System-based input"
                  />
                </div>
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Color scheme affects only native browser UI elements.",
              "2. Custom components are not affected by scheme utilities.",
              "3. scheme-dark and scheme-light override OS preferences.",
              "4. Use scheme-normal to respect system color settings.",
              "5. Forcing schemes can surprise users if overused.",
              "6. Useful for embedding widgets with fixed color requirements.",
              "7. Test across browsers and operating systems.",
              "8. Color scheme does not control Tailwind dark mode.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
