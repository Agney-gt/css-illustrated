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
    className: "appearance-none",
    desc: "Removes native browser styling from form controls",
  },
  {
    className: "appearance-auto",
    desc: "Restores the browser’s default appearance",
  },
]

export default function AppearancePage() {
  const utilityOptions = utilities.map((u) => u.className)
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0])
  const [code, setCode] = useState("")

  useEffect(() => {
    setCode(
      `
<div class="space-y-4">
  <select class="${activeUtility} border rounded px-3 py-2 w-48">
    <option>Option A</option>
    <option>Option B</option>
  </select>

  <label class="flex items-center gap-2">
    <input type="checkbox" class="${activeUtility} w-4 h-4 border rounded" checked />
    Accept terms
  </label>
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
            title="Appearance"
            description="Control whether form controls use native browser styling or allow full custom UI design."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Appearance Utilities</h2>

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
                  label="Appearance"
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
                  description="Edit the HTML to see how browser styling changes."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Custom select dropdown"
                code={`<div class="relative">
  <select class="appearance-none w-full border rounded px-3 py-2 pr-8">
    <option>India</option>
    <option>USA</option>
  </select>
  <span class="absolute right-3 top-1/2 -translate-y-1/2">▽</span>
</div>`}
                description="Remove the native arrow and replace it with a custom icon."
              >
                <div className="relative w-52">
                  <select className="appearance-none w-full border rounded px-3 py-2 pr-8 bg-background">
                    <option>India</option>
                    <option>USA</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    ▽
                  </span>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Custom checkbox UI"
                code={`<label class="flex items-center gap-2">
  <input
    type="checkbox"
    class="appearance-none w-4 h-4 border rounded checked:bg-blue-600 checked:border-blue-600"
    checked
  />
  Remember me
</label>`}
                description="Appearance removal is the foundation for fully custom form controls."
              >
              </ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. appearance-none removes all native UI styling from controls.",
              "2. Always recreate removed affordances like arrows and checkmarks.",
              "3. appearance-auto restores browser defaults when needed.",
              "4. Native appearance varies across operating systems.",
              "5. Custom UI requires handling focus and accessibility states.",
              "6. appearance-none is commonly used with checkboxes and selects.",
              "7. Test form controls across browsers after removing appearance.",
              "8. appearance utilities do not affect non-form elements.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
