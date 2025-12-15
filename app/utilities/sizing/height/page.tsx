"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CodeBlock from "@/app/utilities/components/code-block"

// Demo box component
function Box({ classes = "", label = "", bg = "bg-blue-600" }: { classes?: string; label?: string; bg?: string }) {
  return (
    <div className={`${classes} ${bg} text-white rounded flex items-center justify-center font-semibold transition-all duration-500`}>
      {label}
    </div>
  )
}

export default function HeightPage() {
  // Demo 1: cycle through various fixed/screen/auto heights
  const [heightIdx, setHeightIdx] = useState(0)
  const heightClasses = [
    "h-16",   // fixed small
    "h-32",   // fixed bigger
    "h-64",   // fixed large
    "h-full", // full parent height
    "h-screen", // viewport
    "h-auto"  // auto height
  ]

  useEffect(() => {
    const t = setInterval(() => {
      setHeightIdx((i) => (i + 1) % heightClasses.length)
    }, 2000)
    return () => clearInterval(t)
  }, [])

  const utilities = [
    { cls: "h-0", desc: "Height 0px — collapse element." },
    { cls: "h-px", desc: "Height 1px." },
    { cls: "h-4", desc: "Height 1rem (~16px)." },
    { cls: "h-16", desc: "Height 4rem (~64px)." },
    { cls: "h-32", desc: "Height 8rem (~128px)." },
    { cls: "h-64", desc: "Height 16rem (~256px)." },
    { cls: "h-full", desc: "Height 100% of parent." },
    { cls: "h-screen", desc: "Height 100vh — full viewport height." },
    { cls: "h-auto", desc: "Height auto — content-based height." },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Heading */}
          <div className="space-y-4 text-left">
            <h1 className="text-5xl font-bold text-foreground">Height</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tailwind’s height utilities let you control an element’s <span className="font-semibold text-foreground">vertical size</span> — from fixed pixel/rem units, to content-based auto height, to full-parent or full-viewport height. Use these to build headers, hero sections, cards, or any layout that depends on explicit heights. 
            </p>
          </div>

          {/* Utilities Grid */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Height Utility Classes</h2>
            <p className="text-muted-foreground">Click a class to copy it to clipboard.</p>

            <div className="grid md:grid-cols-3 gap-4">
              {utilities.map((u, i) => (
                <div
                  key={i}
                  className="border border-border rounded-lg p-4 hover:bg-card/50 transition cursor-pointer group"
                  onClick={() => navigator.clipboard.writeText(u.cls)}
                >
                  <code className="text-sm font-mono font-semibold">{u.cls}</code>
                  <p className="text-sm text-muted-foreground mt-2">{u.desc}</p>
                  <span className="text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition">Click to copy</span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated / Interactive Demos */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Animated / Interactive Demos</h2>

            {/* Demo 1 — cycle different heights */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">1. Cycling Heights</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                The box below cycles through fixed, auto, full-parent and viewport heights — watch how its size changes dynamically.
              </p>
              <div className="flex justify-start bg-slate-800 p-4 rounded">
                <Box classes={`${heightClasses[heightIdx]} w-48`} label={heightClasses[heightIdx]} />
              </div>
              <CodeBlock
                language="html"
                code={`<div class="${heightClasses[heightIdx]} w-48 bg-blue-600 text-white rounded">
  ${heightClasses[heightIdx]}
</div>`}
              />
              <CodeBlock
                language="javascript"
                code={`// cycling height demo
const [heightIdx, setHeightIdx] = useState(0);
const heightClasses = ["h-16","h-32","h-64","h-full","h-screen","h-auto"];
useEffect(() => {
  const t = setInterval(() => setHeightIdx(i => (i+1) % heightClasses.length), 2000);
  return () => clearInterval(t);
}, []);`}
              />
            </div>

            {/* Demo 2 — fixed height card vs content-based height */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">2. Fixed vs Auto Height</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Compare a card with fixed height vs a card whose height adapts to its content. Useful when dealing with unknown content size or ensuring consistent layout.
              </p>
              <div className="flex gap-4">
                <div className="h-48 w-64 bg-slate-700 text-white p-4 rounded overflow-auto">
                  <p>Fixed height (h-48)</p>
                  <p>Content might overflow if too long…</p>
                </div>
                <div className="h-auto w-64 bg-slate-700 text-white p-4 rounded">
                  <p>Auto height (h-auto)</p>
                  <p>Content expands container naturally without overflow or extra scroll.</p>
                </div>
              </div>
              <CodeBlock
                language="html"
                code={`<!-- fixed -->
<div class="h-48 w-64 bg-slate-700 p-4 rounded">…</div>

<!-- auto -->
<div class="h-auto w-64 bg-slate-700 p-4 rounded">…</div>`}
              />
            </div>

            {/* Demo 3 — full viewport hero section */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">3. Full-Viewport Hero Section</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Use <code className="bg-slate-700 px-1 rounded">h-screen</code> (or newer viewport-height utilities like <code className="bg-slate-700 px-1 rounded">h-dvh</code> / <code className="bg-slate-700 px-1 rounded">h-svh</code>) to create a full-screen hero or landing section.
              </p>
              <div className="h-screen w-full bg-gradient-to-b from-indigo-600 to-indigo-400 flex items-center justify-center text-white rounded">
                <h2 className="text-3xl font-bold">Full-screen Hero</h2>
              </div>
              <CodeBlock
                language="html"
                code={`<section class="h-screen w-full bg-gradient-to-b from-indigo-600 to-indigo-400 flex items-center justify-center text-white">
  <h2 class="text-3xl font-bold">Full-screen Hero</h2>
</section>`}
              />
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Real-World Examples</h2>

            {/* Example 1 — fixed-height card list */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Fixed-height Card Grid</h3>
              <p className="text-muted-foreground text-sm">
                For uniform card heights in a grid (e.g. product cards), use a consistent height utility so all cards align properly.  
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-64 bg-slate-800 text-white rounded p-4">Card 1</div>
                <div className="h-64 bg-slate-700 text-white rounded p-4">Card 2 (longer content, clipped/scrollable)</div>
                <div className="h-64 bg-slate-600 text-white rounded p-4">Card 3</div>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="grid grid-cols-3 gap-4">
  <div class="h-64 bg-slate-800 p-4 rounded">Card 1</div>
  <div class="h-64 bg-slate-700 p-4 rounded">Card 2</div>
  <div class="h-64 bg-slate-600 p-4 rounded">Card 3</div>
</div>`}
              />
            </div>

            {/* Example 2 — full-height side + scroll content layout */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Sidebar + Full-Height Content Layout</h3>
              <p className="text-muted-foreground text-sm">
                Use a fixed header and a content area with height set to full parent/viewport to ensure the main content scrolls while header/footer stay static.  
              </p>
              <div className="h-screen flex flex-col bg-slate-900 rounded overflow-hidden">
                <header className="h-16 bg-indigo-600 text-white flex items-center px-4">Header</header>
                <main className="flex-1 overflow-auto bg-slate-800 p-4">
                  <p>Scrollable content here…</p>
                  <p>...</p>
                  <p>Long content so that scroll appears</p>
                </main>
                <footer className="h-12 bg-indigo-700 text-white flex items-center justify-center">Footer</footer>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="h-screen flex flex-col">
  <header class="h-16">Header</header>
  <main class="flex-1 overflow-auto">Content</main>
  <footer class="h-12">Footer</footer>
</div>`}
              />
            </div>

          </div>

          {/* Tips & Common Patterns */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-foreground">Tips & Common Patterns</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Use fixed height (e.g. <code className="bg-slate-700 px-1 rounded">h-64</code>) for uniform card layouts or grid items where content length may vary.</li>
              <li>Use <code className="bg-slate-700 px-1 rounded">h-auto</code> for elements whose height should adapt to content width/length dynamically.</li>
              <li>Use <code className="bg-slate-700 px-1 rounded">h-screen</code> (or viewport-based classes) for full-screen sections (hero, landing, full-page modals).</li>
              <li>Combine height utilities with flex growth (`flex-1`) or overflow control (`overflow-auto`) for scrollable content areas inside fixed-height containers.</li>
              <li>Be cautious with nested `h-full`: parent must have explicit height defined — otherwise `h-full` may collapse.</li>
            </ul>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
