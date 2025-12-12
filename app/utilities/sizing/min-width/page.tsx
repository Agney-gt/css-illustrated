"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

export default function MinWidthPage() {
  const [demoIdx, setDemoIdx] = useState(0);

  // Cycle through classes to demo min-w effects
  const demoClasses = [
    "min-w-0",
    "min-w-12",
    "min-w-24",
    "min-w-40",
    "min-w-64",
    "min-w-full",
    "min-w-max",
    "min-w-min",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoIdx((i) => (i + 1) % demoClasses.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const utilities = [
    { cls: "min-w-0", desc: "min-width: 0 — can collapse fully" },
    { cls: "min-w-12", desc: "min-width: 3rem (~48px)" },
    { cls: "min-w-24", desc: "min-width: 6rem (~96px)" },
    { cls: "min-w-40", desc: "min-width: 10rem (~160px)" },
    { cls: "min-w-64", desc: "min-width: 16rem (~256px)" },
    { cls: "min-w-full", desc: "min-width: 100% of parent" },
    { cls: "min-w-max", desc: "min-width: max-content" },
    { cls: "min-w-min", desc: "min-width: min-content" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Heading & Description */}
          <div className="space-y-4 text-left">
            <h1 className="text-5xl font-bold text-foreground">Min-Width</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tailwind’s <span className="font-semibold text-foreground">minimum width</span> utilities ensure elements don’t shrink below a set horizontal size. This is useful for cards, buttons, flex items, and responsive layouts.
            </p>
          </div>

          {/* Utilities Grid */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Min-Width Utility Classes</h2>
            <p className="text-muted-foreground">Click to copy a class to your clipboard.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {utilities.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-4 hover:bg-card/50 transition cursor-pointer group"
                  onClick={() => navigator.clipboard.writeText(item.cls)}
                >
                  <code className="text-sm font-mono font-semibold">{item.cls}</code>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  <span className="text-xs text-muted-foreground mt-3 opacity-0 group-hover:opacity-100 transition">
                    Click to copy
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Demonstrations */}
          <div className="space-y-10 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Animated Demonstrations</h2>

            {/* Demo 1: Cycle through min-width values */}
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm max-w-xl">
                This demo cycles through different <code className="bg-slate-700 px-1 rounded">min-w-*</code> classes to show how the minimum width affects shrinking behavior.
              </p>
              <div className="bg-slate-800 p-6 rounded flex justify-start">
                <div
                  className={`bg-blue-600 text-white p-4 rounded transition-all duration-700 ${demoClasses[demoIdx]}`}
                >
                  {demoClasses[demoIdx]}
                </div>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="${demoClasses[demoIdx]} bg-blue-600 text-white p-4 rounded">
  min-width demo
</div>`}
              />
            </div>

            {/* Demo 2: Flex items with minimum width */}
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm max-w-xl">
                In a flex container, items with <code className="bg-slate-700 px-1 rounded">min-w-* </code> ensure they don’t collapse below the given width.
              </p>
              <div className="flex bg-slate-800 p-4 gap-3 rounded overflow-auto">
                <div className="flex-1 min-w-24 bg-teal-600 text-white p-3 rounded text-center">min-w-24</div>
                <div className="flex-1 min-w-40 bg-teal-500 text-white p-3 rounded text-center">min-w-40</div>
                <div className="flex-1 min-w-64 bg-teal-400 text-white p-3 rounded text-center">min-w-64</div>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex gap-3">
  <div class="flex-1 min-w-24">…</div>
  <div class="flex-1 min-w-40">…</div>
  <div class="flex-1 min-w-64">…</div>
</div>`}
              />
            </div>

            {/* Demo 3: Responsive min-width */}
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm max-w-xl">
                Use responsive modifiers to change the minimum width at different breakpoints (e.g., <code className="bg-slate-700 px-1 rounded">sm:min-w-0</code>, <code className="bg-slate-700 px-1 rounded">md:min-w-full</code>).
              </p>
              <div className="flex bg-slate-800 p-4 rounded">
                <div className="min-w-32 sm:min-w-0 md:min-w-full bg-pink-600 text-white p-3 rounded text-center">
                  Responsive min-w
                </div>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="min-w-32 sm:min-w-0 md:min-w-full bg-pink-600 p-3 text-white rounded">
  Responsive min-width
</div>`}
              />
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Real-World Examples</h2>

            {/* Example 1: Table with scrollable rows */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Table with Scrollable Rows</h3>
              <p className="text-muted-foreground text-sm">
                Constrain the minimum width of table cells to avoid collapse, improve readability and preserve column alignment in responsive tables.
              </p>
              <div className="overflow-auto bg-slate-800 p-4 rounded">
                <table className="min-w-full text-white">
                  <thead>
                    <tr>
                      <th className="min-w-24 text-left">Name</th>
                      <th className="min-w-40 text-left">Email</th>
                      <th className="min-w-64 text-left">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="min-w-24">Alice</td>
                      <td className="min-w-40">alice@example.com</td>
                      <td className="min-w-64">Administrator</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <CodeBlock
                language="html"
                code={`<table class="min-w-full">
  <tr>
    <th class="min-w-24">Name</th>
    <th class="min-w-40">Email</th>
    <th class="min-w-64">Role</th>
  </tr>
</table>`}
              />
            </div>

            {/* Example 2: Button group with min widths */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Button Group with Consistent Width</h3>
              <p className="text-muted-foreground text-sm">
                Setting a minimum width on buttons ensures they don’t shrink too small, improving usability in toolbars and action bars.
              </p>
              <div className="flex gap-4">
                <button className="min-w-40 bg-indigo-600 text-white rounded py-2 px-4">Save Changes</button>
                <button className="min-w-40 bg-gray-600 text-white rounded py-2 px-4">Cancel</button>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="flex gap-4">
  <button class="min-w-40">Save Changes</button>
  <button class="min-w-40">Cancel</button>
</div>`}
              />
            </div>

            {/* Example 3: Card layout with aligned min widths */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Consistent Card Layout</h3>
              <p className="text-muted-foreground text-sm">
                Ensure cards align evenly even if content varies by setting a min-width — useful in galleries and dashboards.
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="bg-green-600 text-white p-4 rounded min-w-48">Card A</div>
                <div className="bg-green-500 text-white p-4 rounded min-w-48">Card B</div>
                <div className="bg-green-400 text-white p-4 rounded min-w-48">Card C</div>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="flex gap-4">
  <div class="min-w-48 bg-green-600">Card A</div>
  <div class="min-w-48 bg-green-500">Card B</div>
  <div class="min-w-48 bg-green-400">Card C</div>
</div>`}
              />
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-foreground">Tips & Common Patterns</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Use <code className="bg-slate-700 px-1 rounded">min-w-24</code> to keep elements usable even when space is tight.</li>
              <li>Pair with responsive modifiers (`sm:`, `md:`) to adjust minimum widths at breakpoints. </li>
              <li>Use <code className="bg-slate-700 px-1 rounded">min-w-full</code> for full-width fluid components inside constrained layouts.</li>
              <li>“min-w-max” and “min-w-min” ensure content doesn’t shrink below its intrinsic size.</li>
              <li>Use min-width for form fields and buttons so they don’t compress too small on narrow screens.</li>
            </ul>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
