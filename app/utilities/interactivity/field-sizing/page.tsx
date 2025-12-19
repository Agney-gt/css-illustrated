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
    className: "field-sizing-content",
    desc: "Input width adapts to its content",
  },
  {
    className: "field-sizing-fixed",
    desc: "Input keeps a fixed inline size",
  },
]

export default function FieldSizingPage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="space-y-3">
  <input
    type="text"
    class="${activeUtility} border rounded px-3 py-2"
    placeholder="Type here..."
  />

  <input
    type="text"
    class="${activeUtility} border rounded px-3 py-2"
    value="Short"
  />
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
            title="Field Sizing"
            description="Control how form fields calculate their inline size, either adapting to content or staying fixed."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Field Sizing Utilities</h2>

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
                  label="Field Sizing"
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
                  description="Type inside the input to observe inline size behavior."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Tag or token inputs"
                code={`<div className="space-x-2">
  <input
    class="field-sizing-content border rounded px-2 py-1"
    value="react"
  />
  <input
    class="field-sizing-content border rounded px-2 py-1"
    value="tailwind"
  />
</div>`}
                description="Automatically fit short dynamic values like tags or labels."
              >
                
              </ExampleCard>

              <ExampleCard
                title="Consistent form layouts"
                code={`<input class="field-sizing-fixed w-64 border px-3 py-2" placeholder="Email address" />`}
                description="Maintain predictable alignment in structured forms."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. field-sizing-content adapts to the text length.",
              "2. Ideal for tags, filters, and inline editors.",
              "3. field-sizing-fixed prevents layout shifts.",
              "4. Best suited for traditional forms.",
              "5. Combine with width utilities for precise control.",
              "6. Content sizing can feel unstable for long text.",
              "7. Fixed sizing improves visual consistency.",
              "8. Test with dynamic user input before choosing.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
