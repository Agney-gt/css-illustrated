"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CodeBlock from "@/app/utilities/components/code-block"

// Animated flex item component
function GrowItem({
  color,
  label,
  grow = 0,
  basis = "auto",
  shrink = 1,
}: {
  color: string
  label: string
  grow?: number
  basis?: string
  shrink?: number
}) {
  return (
    <div
      className="rounded p-4 text-white font-semibold flex items-center justify-center transition-all duration-1000"
      style={{
        flexGrow: grow,
        flexBasis: basis,
        flexShrink: shrink,
        backgroundColor: color,
      }}
    >
      {label}
    </div>
  )
}

export default function FlexGrowPage() {
  const [demo1Cycle, setDemo1Cycle] = useState(0)
  const [demo2Pulse, setDemo2Pulse] = useState(true)
  const [demo3Alt, setDemo3Alt] = useState(false)

  useEffect(() => {
    const interval1 = setInterval(() => setDemo1Cycle((n) => (n + 1) % 3), 2200)

    const interval2 = setInterval(() => setDemo2Pulse((p) => !p), 2000)

    const interval3 = setInterval(() => setDemo3Alt((x) => !x), 2500)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
      clearInterval(interval3)
    }
  }, [])

  const flexGrowClasses = [
    { class: "grow", desc: "flex-grow: 1 — item expands to fill available space" },
    { class: "grow-0", desc: "flex-grow: 0 — item will NOT grow" },
    { class: "basis-auto grow", desc: "Start at content size, then grow" },
    { class: "basis-1/3 grow", desc: "Start at 33% width, grows if possible" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Section 1: Description */}
          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-bold text-foreground">Flex Grow</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <strong>flex-grow</strong> controls how much a flex item expands relative to others.
              A value of <code className="bg-slate-700 px-1 rounded">1</code> means it can grow and share remaining
              space; <code className="bg-slate-700 px-1 rounded">0</code> prevents growth.
            </p>
          </div>

          {/* Section 2: Grid of Classes */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Flex-Grow Utility Classes</h2>
            <p className="text-muted-foreground">Click to copy a class.</p>

            <div className="grid md:grid-cols-3 gap-4">
              {flexGrowClasses.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-4 hover:bg-card/50 transition cursor-pointer group"
                  onClick={() => navigator.clipboard.writeText(item.class)}
                >
                  <code className="text-black text-sm font-mono text-accent font-semibold">{item.class}</code>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  <span className="text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition">
                    Click to copy
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Animated Demonstrations */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Animated Demonstrations</h2>

            {/* Demo 1 */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <strong>Demo 1:</strong> Items cycle between different grow values (0 → 1 → 2), showing how
                <code className="bg-slate-700 px-1 rounded">flex-grow</code> distributes leftover space.
              </p>

              <div className="flex gap-4 h-32 bg-slate-800 rounded p-4 overflow-hidden">
                <GrowItem
                  color="#63b3ed"
                  label="Grows More"
                  grow={[0, 1, 2][demo1Cycle]}
                  basis="120px"
                />
                <GrowItem
                  color="#4299e1"
                  label="Grows"
                  grow={[1, 2, 1][demo1Cycle]}
                  basis="120px"
                />
                <GrowItem color="#3182ce" label="Fixed" grow={0} basis="120px" />
              </div>
            </div>

            {/* Demo 2 */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <strong>Demo 2:</strong> Items pulse between small and large basis while the grow property smoothens layout.
              </p>

              <div className="flex gap-4 h-32 bg-slate-800 rounded p-4 transition-all duration-1000">
                <GrowItem
                  color="#f6ad55"
                  label="Pulse + Grow"
                  basis={demo2Pulse ? "80px" : "150px"}
                  grow={1}
                />
                <GrowItem
                  color="#ed8936"
                  label="Pulse + Grow"
                  basis={demo2Pulse ? "120px" : "70px"}
                  grow={2}
                />
                <GrowItem color="#dd6b20" label="Fixed" basis="80px" grow={0} />
              </div>
            </div>

            {/* Demo 3 */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <strong>Demo 3:</strong> One item alternates between grow states while others remain stable.
              </p>

              <div className="flex gap-4 h-32 w-full bg-slate-800 rounded p-4">
                <GrowItem
                  color="#9f7aea"
                  label="Alternating Grow"
                  grow={demo3Alt ? 0 : 2}
                  basis="100px"
                />
                <GrowItem color="#805ad5" label="Stable" grow={1} basis="120px" />
                <GrowItem color="#6b46c1" label="Stable" grow={1} basis="120px" />
              </div>
            </div>
          </div>

          {/* Section 4: Real-World Examples */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Real-World Examples</h2>

            {/* Example 1: Pricing Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Pricing Layout</h3>
              <div className="flex gap-4">
                <GrowItem color="#48bb78" label="Basic" grow={1} basis="180px" />
                <GrowItem color="#38a169" label="Pro (Grows Most)" grow={2} basis="200px" />
                <GrowItem color="#2f855a" label="Enterprise" grow={1} basis="180px" />
              </div>
              <CodeBlock
                code={`<div class="flex gap-4">
  <div class="basis-44 grow bg-green-400 p-4 rounded">Basic</div>
  <div class="basis-52 grow-[2] bg-green-500 p-4 rounded">Pro</div>
  <div class="basis-44 grow bg-green-600 p-4 rounded">Enterprise</div>
</div>`}
                language="jsx"
              />
            </div>

            {/* Example 2: Media Object */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Media Object (Thumbnail + Content)</h3>
              <div className="flex gap-4 items-center bg-slate-800 p-4 rounded">
                <GrowItem color="#f56565" label="Thumbnail" grow={0} basis="120px" />
                <GrowItem color="#fc8181" label="Content Expands" grow={1} basis="0" />
              </div>
              <CodeBlock
                code={`<div class="flex gap-4 items-center bg-slate-800 p-4 rounded">
  <div class="basis-32 grow-0 bg-red-500 p-4 rounded">Thumbnail</div>
  <div class="grow bg-red-300 p-4 rounded">Content</div>
</div>`}
                language="jsx"
              />
            </div>

            {/* Example 3: Button Group */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Button Toolbar</h3>
              <div className="flex gap-4 items-end">
                <GrowItem color="#63b3ed" label="Back" basis="100px" />
                <GrowItem color="#4299e1" label="Auto-Space Filler" grow={1} basis="0" />
                <GrowItem color="#3182ce" label="Next" basis="100px" />
              </div>
              <CodeBlock
                code={`<div class="flex gap-4">
  <button class="basis-24 bg-blue-400 rounded p-3">Back</button>
  <div class="grow"></div>
  <button class="basis-24 bg-blue-600 rounded p-3">Next</button>
</div>`}
                language="jsx"
              />
            </div>

            {/* Example 4: Dashboard Panels */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Dashboard Panels</h3>
              <div className="flex gap-6 min-h-[200px]">
                <GrowItem color="#ecc94b" label="Sidebar" basis="220px" grow={0} />
                <GrowItem color="#48bb78" label="Main Content (Grows)" grow={1} basis="0" />
                <GrowItem color="#63b3ed" label="Stats Panel (Grows)" grow={1} basis="0" />
              </div>
              <CodeBlock
                code={`<div class="flex gap-6">
  <aside class="basis-56 grow-0 bg-yellow-400 p-6">Sidebar</aside>
  <main class="grow bg-green-500 p-6">Main Content</main>
  <section class="grow bg-blue-400 p-6">Stats</section>
</div>`}
                language="jsx"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Section 5: Tips (same UI style) */}
        <div className="bg-blue-500/10 border ml-30 mr-30 border-blue-500/30 p-6 rounded-lg space-y-3 mt-12">
  <h3 className="font-semibold text-foreground">Tips for Using flex-grow</h3>
  <ul className="space-y-2 text-sm text-muted-foreground">
    <li className="flex gap-2"><span className="text-blue-400">•</span>Use <code className="bg-slate-700 px-1 rounded">grow</code> when an item should expand to fill leftover space.</li>
    <li className="flex gap-2"><span className="text-blue-400">•</span>Use <code className="bg-slate-700 px-1 rounded">grow-0</code> to prevent an item from expanding.</li>
    <li className="flex gap-2"><span className="text-blue-400">•</span>Higher <code className="bg-slate-700 px-1 rounded">grow</code> values give items a larger share of remaining space.</li>
    <li className="flex gap-2"><span className="text-blue-400">•</span>Combine <code className="bg-slate-700 px-1 rounded">basis-*</code> with <code className="bg-slate-700 px-1 rounded">grow</code> for powerful adaptive layouts.</li>
  </ul>
       </div>

      <Footer />
    </div>
  )
}


