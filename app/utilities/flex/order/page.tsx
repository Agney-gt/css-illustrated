"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CodeBlock from "@/app/utilities/components/code-block"

// Animated flex item component
function FlexItem({ color, label, order }: { color: string; label: string; order: number }) {
  return (
    <div
      className="rounded p-4 text-white font-semibold flex items-center justify-center transition-all duration-700"
      style={{ backgroundColor: color, order }}
    >
      {label}
    </div>
  )
}

export default function FlexOrderPage() {
  const [demo1, setDemo1] = useState(0)
  const [demo2, setDemo2] = useState(0)
  const [demo3, setDemo3] = useState(0)

  useEffect(() => {
    const id1 = setInterval(() => setDemo1((n) => (n + 1) % 2), 2000)
    const id2 = setInterval(() => setDemo2((n) => (n + 1) % 3), 2200)
    const id3 = setInterval(() => setDemo3((n) => (n + 1) % 2), 2400)

    return () => {
      clearInterval(id1)
      clearInterval(id2)
      clearInterval(id3)
    }
  }, [])

  const orderClasses = [
    { class: "order-first", desc: "Moves the item to the beginning." },
    { class: "order-last", desc: "Moves the item to the end." },
    { class: "order-none", desc: "Resets to natural DOM order." },
    { class: "order-1", desc: "Sets order: 1" },
    { class: "order-2", desc: "Sets order: 2" },
    { class: "order-3", desc: "Sets order: 3" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section 1: Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground">Flex Order</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              <code className="bg-slate-700 px-1 rounded">order</code> controls the *visual ordering* of flex items
              without altering the actual DOM structure. Use this to rearrange content on different screen sizes or to
              highlight important elements.
            </p>
          </div>

          {/* Section 2: Grid of Classes */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Flex-Order Utility Classes</h2>
            <p className="text-muted-foreground">Click to copy a class to your clipboard.</p>

            <div className="grid md:grid-cols-3 gap-4">
              {orderClasses.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-4 hover:bg-card/50 transition cursor-pointer group"
                  onClick={() => navigator.clipboard.writeText(item.class)}
                >
                  <code className="text-black text-sm font-mono font-semibold">{item.class}</code>
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

  {/* Demo 1: Swap order */}
  <div className="space-y-2">
    <p className="text-muted-foreground text-l">
      <strong>Demo 1:</strong> Two boxes swap positions every 2 seconds to demonstrate basic order swapping.
      Box "A" and Box "B" switch their visual order while Box "C" remains fixed.
    </p>
    <div className="flex gap-4 bg-slate-800 h-32 rounded p-4">
      <FlexItem color="#63b3ed" label="A" order={demo1 === 0 ? 1 : 2} />
      <FlexItem color="#3182ce" label="B" order={demo1 === 0 ? 2 : 1} />
      <FlexItem color="#2b6cb0" label="C" order={3} />
    </div>
    <CodeBlock code={`<div className="flex gap-4">
  <div className="order-1">A</div>
  <div className="order-2">B</div>
  <div className="order-3">C</div>
</div>`} />
  </div>

  {/* Demo 2: Three-way reordering */}
  <div className="space-y-2">
    <p className="text-muted-foreground text-l">
      <strong>Demo 2:</strong> Three boxes cycle through three ordering patterns every 2.2 seconds.
      This simulates dynamic content prioritization, e.g., featured items moving to front.
    </p>
    <div className="flex gap-4 bg-slate-800 h-32 rounded p-4 transition-all duration-700">
      <FlexItem color="#f6ad55" label="1" order={[1, 3, 2][demo2]} />
      <FlexItem color="#ed8936" label="2" order={[2, 1, 3][demo2]} />
      <FlexItem color="#dd6b20" label="3" order={[3, 2, 1][demo2]} />
      <FlexItem color="#c05621" label="4" order={4} />
    </div>
    <CodeBlock code={`<div className="flex gap-4">
  <div className="order-1">1</div>
  <div className="order-2">2</div>
  <div className="order-3">3</div>
  <div className="order-4">4</div>
</div>`} />
  </div>

  {/* Demo 3: Highlight priority item */}
  <div className="space-y-2">
    <p className="text-muted-foreground text-l">
      <strong>Demo 3:</strong> One box ("Main") jumps to the front every 2.4 seconds to simulate priority content,
      while the other boxes maintain their positions. Useful for highlighting featured sections dynamically.
    </p>
    <div className="flex gap-4 bg-slate-800 h-32 rounded p-4">
      <FlexItem color="#9f7aea" label="Main" order={demo3 === 0 ? 3 : 1} />
      <FlexItem color="#805ad5" label="Side" order={2} />
      <FlexItem color="#6b46c1" label="Extra" order={3} />
    </div>
    <CodeBlock code={`<div className="flex gap-4">
  <div className="order-1">Main</div>
  <div className="order-2">Side</div>
  <div className="order-3">Extra</div>
</div>`} />
  </div>
</div>

          {/* Section 4: Real-world Examples with Code */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Real-World Examples</h2>

            {/* Example A */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Mobile-First Reversed Layout</h3>
              <p className="text-muted-foreground text-sm">
                On mobile, main content appears before the sidebar. On larger screens, normal order is restored.
              </p>
              <div className="flex gap-4 flex-col md:flex-row">
                <FlexItem color="#4299e1" label="Sidebar" order={2} />
                <FlexItem color="#63b3ed" label="Main Content" order={1} />
              </div>
              <CodeBlock code={`<div className="flex flex-col md:flex-row">
  <div className="order-2">Sidebar</div>
  <div className="order-1">Main Content</div>
</div>`} />
            </div>

            {/* Example B */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Navigation Bar Priority</h3>
              <p className="text-muted-foreground text-sm">
                The login button jumps to the first position when highlighted.
              </p>
              <div className="flex gap-4 items-center bg-slate-800 p-4 rounded">
                <FlexItem color="#f6ad55" label="Logo" order={1} />
                <FlexItem color="#68d391" label="Links" order={2} />
                <FlexItem color="#63b3ed" label="Login" order={demo3 === 0 ? 3 : 1} />
              </div>
              <CodeBlock code={`<div className="flex items-center">
  <div className="order-1">Logo</div>
  <div className="order-2">Links</div>
  <div className="order-3">Login</div>
</div>`} />
            </div>

            {/* Example C */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Featured Product Emphasis</h3>
              <p className="text-muted-foreground text-sm">
                Highlight a featured product by changing its order visually without rearranging DOM.
              </p>
              <div className="flex gap-4 flex-wrap">
                <FlexItem color="#ed64a6" label="Product A" order={2} />
                <FlexItem color="#ed64a6" label="Product B" order={demo1 === 0 ? 1 : 3} />
                <FlexItem color="#ed64a6" label="Product C" order={4} />
              </div>
              <CodeBlock code={`<div className="flex flex-wrap">
  <div className="order-2">Product A</div>
  <div className="order-1">Product B (featured)</div>
  <div className="order-4">Product C</div>
</div>`} />
            </div>
          </div>

          {/* Section 5: Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-foreground">Tips & Common Patterns</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>Use <code className="bg-slate-700 px-1 rounded">order</code> to rearrange items without changing DOM.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>Combine <code className="bg-slate-700 px-1 rounded">order</code> with <code className="bg-slate-700 px-1 rounded">flex-grow</code> for responsive layouts.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>Use numeric order values (<code>order-1</code>, <code>order-2</code>) to control sequence precisely.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">•</span>
                <span>Keep <code>order-none</code> for default DOM order where needed.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
