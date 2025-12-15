"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";
import { useState, useEffect } from "react";

export default function WidthPage() {
  const [demoIndex, setDemoIndex] = useState(0);
  const demoWidths = ["w-24", "w-48", "w-64", "w-1/4", "w-1/2", "w-full"];

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoIndex((i) => (i + 1) % demoWidths.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const widthClasses = [
    { cls: "w-24", desc: "Width: 6rem (~96px)" },
    { cls: "w-32", desc: "Width: 8rem (~128px)" },
    { cls: "w-48", desc: "Width: 12rem (~192px)" },
    { cls: "w-64", desc: "Width: 16rem (~256px)" },
    { cls: "w-1/4", desc: "Width: 25% of parent" },
    { cls: "w-1/2", desc: "Width: 50% of parent" },
    { cls: "w-full", desc: "Full width of parent" },
    { cls: "w-auto", desc: "Width depends on content" },
    { cls: "max-w-xs", desc: "Max width: 20rem (~320px)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Heading */}
          <div className="space-y-4 text-left">
            <h1 className="text-5xl font-bold text-foreground">Width</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Width utilities in Tailwind control the <span className="font-semibold text-foreground">horizontal size</span> of elements. You can use fixed, fractional, full, or content-based widths, and combine them with responsive modifiers for dynamic layouts.
            </p>
          </div>

          {/* Width Classes Grid */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Width Utility Classes</h2>
            <p className="text-muted-foreground">Click to copy any class.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {widthClasses.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-4 hover:bg-accent/30 transition cursor-pointer group"
                  onClick={() => navigator.clipboard.writeText(item.cls)}
                >
                  <code className="text-sm font-mono font-semibold">{item.cls}</code>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition mt-2">
                    Click to copy
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Demonstrations */}
          <div className="space-y-8 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Animated Demonstrations</h2>

            {/* Demo 1 */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm max-w-xl">
                This box cycles through different width classes every 1.5 seconds to show how horizontal size changes.
              </p>
              <div className="flex justify-start">
                <div className={`transition-all duration-700 bg-blue-600 text-white rounded ${demoWidths[demoIndex]} h-12 flex items-center justify-center`}>
                  <span className="font-semibold text-sm">{demoWidths[demoIndex]}</span>
                </div>
              </div>
              <CodeBlock language="html" code={`<div class="${demoWidths[demoIndex]} h-12 bg-blue-600 rounded text-white flex items-center justify-center">Width demo</div>`} />
            </div>

            {/* Demo 2 */}
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm max-w-xl">
                Multiple boxes with different fractional widths (1/4, 1/2, full) within a flex container.
              </p>
              <div className="flex gap-4">
                <div className="w-1/4 h-12 bg-green-500 rounded flex items-center justify-center text-white">w-1/4</div>
                <div className="w-1/2 h-12 bg-green-400 rounded flex items-center justify-center text-white">w-1/2</div>
                <div className="w-full h-12 bg-green-300 rounded flex items-center justify-center text-white">w-full</div>
              </div>
              <CodeBlock language="html" code={`<div class="flex gap-4">
  <div class="w-1/4 h-12 bg-green-500 rounded flex items-center justify-center text-white">w-1/4</div>
  <div class="w-1/2 h-12 bg-green-400 rounded flex items-center justify-center text-white">w-1/2</div>
  <div class="w-full h-12 bg-green-300 rounded flex items-center justify-center text-white">w-full</div>
</div>`} />
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Real-World Examples</h2>

            {/* Example 1: Responsive Card Layout */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Responsive Card Layout</h3>
              <div className="flex gap-4 flex-wrap">
                <div className="w-48 bg-blue-500 text-white rounded p-4">Card 1</div>
                <div className="w-64 bg-blue-400 text-white rounded p-4">Card 2</div>
                <div className="w-56 bg-blue-300 text-white rounded p-4">Card 3</div>
                <div className="w-40 bg-blue-200 text-white rounded p-4">Card 4</div>
              </div>
              <CodeBlock language="html" code={`<div class="flex gap-4 flex-wrap">
  <div class="w-48 bg-blue-500 text-white rounded p-4">Card 1</div>
  <div class="w-64 bg-blue-400 text-white rounded p-4">Card 2</div>
  <div class="w-56 bg-blue-300 text-white rounded p-4">Card 3</div>
  <div class="w-40 bg-blue-200 text-white rounded p-4">Card 4</div>
</div>`} />
            </div>

            {/* Example 2: Sidebar + Main */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Sidebar + Main Content</h3>
              <div className="flex gap-6 min-h-[150px]">
                <div className="w-48 bg-red-500 text-white rounded p-4">Sidebar</div>
                <div className="flex-1 bg-green-500 text-white rounded p-4">Main Content</div>
              </div>
              <CodeBlock language="html" code={`<div class="flex gap-6 min-h-[150px]">
  <div class="w-48 bg-red-500 text-white rounded p-4">Sidebar</div>
  <div class="flex-1 bg-green-500 text-white rounded p-4">Main Content</div>
</div>`} />
            </div>

            {/* Example 3: Horizontal Form Layout */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Horizontal Form Layout</h3>
              <div className="flex gap-4">
                <input className="w-1/2 p-2 rounded border" placeholder="Email" />
                <button className="w-1/4 bg-purple-600 text-white rounded p-2">Submit</button>
              </div>
              <CodeBlock language="html" code={`<div class="flex gap-4">
  <input class="w-1/2 p-2 rounded border" placeholder="Email" />
  <button class="w-1/4 bg-purple-600 text-white rounded p-2">Submit</button>
</div>`} />
            </div>
          </div>

          {/* Tips Section */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-foreground">Tips & Common Patterns</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Use fixed widths like <code className="bg-slate-700 px-1 rounded">w-24</code> for consistent sizing.</li>
              <li>Use fractional widths like <code className="bg-slate-700 px-1 rounded">w-1/2</code> or <code className="bg-slate-700 px-1 rounded">w-1/4</code> for flexible layouts.</li>
              <li>Combine <code className="bg-slate-700 px-1 rounded">w-full</code> with <code className="bg-slate-700 px-1 rounded">flex-1</code> to fill remaining space.</li>
              <li>Use responsive prefixes like <code className="bg-slate-700 px-1 rounded">md:w-1/2</code> to adjust width on different screen sizes.</li>
              <li>Arbitrary values like <code className="bg-slate-700 px-1 rounded">w-[300px]</code> can be used for custom widths.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
