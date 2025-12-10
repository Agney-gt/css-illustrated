"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CodeBlock from "@/app/utilities/components/code-block"

// Small visual item used in margin demos
function DemoItem({
  label,
  bg = "bg-blue-600",
  classes = "",
  onClick,
}: {
  label: string
  bg?: string
  classes?: string
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`${classes} ${bg} text-white rounded font-semibold flex items-center justify-center transition-all duration-500 cursor-default`}
      style={{ minWidth: 80, minHeight: 48 }}
    >
      {label}
    </div>
  )
}

export default function MarginPage() {
  // auto-cycling margins for Demo 1
  const [cycleIndex, setCycleIndex] = useState(0)
  const cycleMargins = ["m-0", "m-2", "m-4", "m-8", "m-12", "-m-2"]

  // click toggle margin for Demo 3
  const [clickedMargin, setClickedMargin] = useState("m-4")

  useEffect(() => {
    const t = setInterval(() => {
      setCycleIndex((i) => (i + 1) % cycleMargins.length)
    }, 1800)
    return () => clearInterval(t)
  }, [])

  const marginUtilities = [
    { cls: "m-0", desc: "No margin (0)" },
    { cls: "m-2", desc: "0.5rem (~8px) on all sides" },
    { cls: "m-4", desc: "1rem (~16px) on all sides" },
    { cls: "m-6", desc: "1.5rem (~24px) on all sides" },
    { cls: "m-8", desc: "2rem (~32px) on all sides" },
    { cls: "mx-auto", desc: "horizontal auto margin (centers block)" },
    { cls: "-m-2", desc: "negative margin (pulls element outward)" },
    { cls: "mt-4", desc: "margin-top only" },
    { cls: "mb-8", desc: "margin-bottom only" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Heading */}
          <div className="space-y-4 text-left">
            <h1 className="text-5xl font-bold text-foreground">Margin</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Margin controls the <span className="font-semibold text-foreground">outer spacing</span> around elements — the space that separates an element from siblings and the container. Tailwind exposes per-side, axis, auto and negative margin utilities to build precise layouts.
            </p>
          </div>

          {/* Utilities grid */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Margin Utility Classes</h2>
            <p className="text-muted-foreground">Click to copy a class to your clipboard.</p>

            <div className="grid md:grid-cols-3 gap-4">
              {marginUtilities.map((m, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-4 hover:bg-card/50 transition cursor-pointer group"
                  onClick={() => navigator.clipboard.writeText(m.cls)}
                >
                  <code className="text-sm font-mono font-semibold">{m.cls}</code>
                  <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
                  <span className="text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition">Click to copy</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demos */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Interactive Margin Demos</h2>

            {/* Demo 1: Auto-cycling margin */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">1. Auto-Cycling Margin</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                This row demonstrates the visual effect of different <code className="bg-slate-700 px-1 rounded">m-*</code> values applied to the middle item — notice how it pushes away from siblings or pulls inward with negative margins.
              </p>

              <div className="flex items-center bg-slate-800 p-4 rounded overflow-hidden">
                <DemoItem label="A" bg="bg-slate-700" />
                {/* the middle item receives the changing margin util */}
                <div className={`${cycleMargins[cycleIndex]} transition-all duration-500`}>
                  <DemoItem label={cycleMargins[cycleIndex]} bg="bg-blue-600" />
                </div>
                <DemoItem label="B" bg="bg-slate-700" />
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex items-center">
  <div class="...">A</div>
  <div class="${cycleMargins[cycleIndex]} transition-all duration-500">
    <div class="bg-blue-600 text-white rounded p-3">${cycleMargins[cycleIndex]}</div>
  </div>
  <div class="...">B</div>
</div>`}
              />

              <CodeBlock
                language="javascript"
                code={`// cycle margins
const [cycleIndex, setCycleIndex] = useState(0);
const cycleMargins = ["m-0","m-2","m-4","m-8","m-12","-m-2"];
useEffect(() => {
  const t = setInterval(() => setCycleIndex(i => (i+1) % cycleMargins.length), 1800);
  return () => clearInterval(t);
}, []);`}
              />
            </div>

            {/* Demo 2: Hover-expand margin */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">2. Hover-Expand Margin</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Hover the blue tile — it increases horizontal margin (simulated with <code className="bg-slate-700 px-1 rounded">mx-*</code> on hover) to create breathing room between neighboring items.
              </p>

              <div className="flex items-center bg-slate-800 p-4 rounded">
                <DemoItem label="Left" bg="bg-slate-700" />
                <div className="transition-all duration-300 mx-2 hover:mx-8">
                  <DemoItem label="Hover me" bg="bg-purple-600" />
                </div>
                <DemoItem label="Right" bg="bg-slate-700" />
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex items-center">
  <div class="...">Left</div>
  <div class="transition-all duration-300 mx-2 hover:mx-8">
    <div class="bg-purple-600 text-white rounded p-3">Hover me</div>
  </div>
  <div class="...">Right</div>
</div>`}
              />
            </div>

            {/* Demo 3: Click-toggle margin */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">3. Click-Toggle Margin</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Click the green box to toggle between a compact and a roomy margin. Useful to prototype spacing toggles for collapsed/expanded states.
              </p>

              <div className="flex items-center bg-slate-800 p-4 rounded">
                <DemoItem label="Left" bg="bg-slate-700" />
                <div
                  className={`${clickedMargin === "m-4" ? "m-4" : "m-12"} transition-all duration-500`}
                  onClick={() => setClickedMargin((s) => (s === "m-4" ? "m-12" : "m-4"))}
                >
                  <DemoItem label={`${clickedMargin} (click)`} bg="bg-green-600" classes="cursor-pointer" />
                </div>
                <DemoItem label="Right" bg="bg-slate-700" />
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex items-center">
  <div class="...">Left</div>
  <div class="\${clickedMargin === 'm-4' ? 'm-4' : 'm-12'} transition-all duration-500" onClick="toggle()">
    <div class="bg-green-600 text-white rounded p-3">m-4 (click)</div>
  </div>
  <div class="...">Right</div>
</div>`}
              />

              <CodeBlock
                language="javascript"
                code={`// click-toggle margin
const [clickedMargin, setClickedMargin] = useState("m-4");
// onClick => setClickedMargin(s => s === "m-4" ? "m-12" : "m-4")`}
              />
            </div>

            {/* Demo 4: Responsive margin */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">4. Responsive Margin</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                This example applies smaller margins on mobile and larger margins on desktop with responsive utilities (e.g. <code className="bg-slate-700 px-1 rounded">sm:mx-4 md:mx-12</code>).
              </p>

              <div className="flex items-center bg-slate-800 p-4 rounded">
                <div className="mx-2">Left</div>
                <div className="transition-all duration-500 mx-4 md:mx-12">
                  <div className="bg-orange-600 text-white rounded p-3">Responsive margin</div>
                </div>
                <div className="mx-2">Right</div>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex items-center">
  <div class="mx-2">Left</div>
  <div class="transition-all duration-500 mx-4 md:mx-12">
    <div class="bg-orange-600 text-white rounded p-3">Responsive margin</div>
  </div>
  <div class="mx-2">Right</div>
</div>`}
              />
            </div>
          </div>

          {/* Real-world examples */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Real-World Examples</h2>

            {/* Card grid spacing */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Card Grid Spacing</h3>
              <p className="text-muted-foreground text-sm">
                Use consistent <code className="bg-slate-700 px-1 rounded">m-*</code> or the <code className="bg-slate-700 px-1 rounded">gap-*</code> utilities to space cards evenly and keep a rhythm across the UI.
              </p>

              <div className="flex flex-wrap -m-4">
                <div className="m-4 w-64">
                  <div className="p-4 bg-slate-800 rounded text-white">Product card</div>
                </div>
                <div className="m-4 w-64">
                  <div className="p-4 bg-slate-700 rounded text-white">Product card</div>
                </div>
                <div className="m-4 w-64">
                  <div className="p-4 bg-slate-600 rounded text-white">Product card</div>
                </div>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex flex-wrap -m-4">
  <div class="m-4 w-64"><div class="p-4 bg-slate-800 rounded">Card</div></div>
  <div class="m-4 w-64"><div class="p-4 bg-slate-700 rounded">Card</div></div>
  <div class="m-4 w-64"><div class="p-4 bg-slate-600 rounded">Card</div></div>
</div>`}
              />
            </div>

            {/* Centering with mx-auto */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Centering Blocks with <code>mx-auto</code></h3>
              <p className="text-muted-foreground text-sm">
                Use <code className="bg-slate-700 px-1 rounded">mx-auto</code> to center fixed-width elements (e.g., hero containers or forms).
              </p>

              <div className="bg-indigo-600 rounded p-6">
                <div className="max-w-xl mx-auto bg-indigo-500 text-white rounded p-6">Centered container using mx-auto</div>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="max-w-xl mx-auto p-6 bg-indigo-500 text-white rounded">Centered container</div>`}
              />
            </div>

            {/* Negative margin for overlapping visuals */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Overlapping / Pull-up Effects (Negative Margin)</h3>
              <p className="text-muted-foreground text-sm">
                Negative margins (like <code className="bg-slate-700 px-1 rounded">-mt-6</code>) are useful to create overlapping cards, hero pull-ups or to visually tie elements together.
              </p>

              <div className="relative bg-slate-900 rounded p-8">
                <div className="bg-slate-700 text-white rounded p-4 -mt-8 max-w-sm">Overlapped box using -mt-8</div>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="relative p-8 bg-slate-900 rounded">
  <div class="-mt-8 bg-slate-700 text-white rounded p-4 max-w-sm">Pulled-up box</div>
</div>`}
              />
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-foreground">Tips & Common Patterns</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Prefer a consistent spacing system (4pt/8pt scale) and stick to it — consistency improves rhythm and predictability.</li>
              <li>Use <code className="bg-slate-700 px-1 rounded">gap-*</code> or <code className="bg-slate-700 px-1 rounded">space-x-*</code> inside flex/grid instead of many individual margins between children.</li>
              <li>Use negative margins (e.g., <code className="bg-slate-700 px-1 rounded">-mt-6</code>) sparingly to create intentional overlaps and visual anchors.</li>
              <li>Use responsive prefixes (e.g., <code className="bg-slate-700 px-1 rounded">md:mx-12</code>) to adapt outer spacing at breakpoints.</li>
            </ul>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
