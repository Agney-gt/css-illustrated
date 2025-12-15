// React Padding Page - updated per instructions
"use client"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";
import { useState, useEffect } from "react";

export default function PaddingPage() {
  const [demoIndex, setDemoIndex] = useState(0);
  const [clickedPad, setClickedPad] = useState("p-4");

  const demoPads = ["p-0", "p-4", "p-8", "px-8 py-4", "pt-12", "pb-12"]; // for improved visible animations

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoIndex((i) => (i + 1) % demoPads.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const paddingClasses = [
    { cls: "p-0", desc: "No padding (0px)" },
    { cls: "p-2", desc: "Padding: 0.5rem (~8px)" },
    { cls: "p-4", desc: "Padding: 1rem (~16px)" },
    { cls: "p-6", desc: "Padding: 1.5rem (~24px)" },
    { cls: "p-8", desc: "Padding: 2rem (~32px)" },
    { cls: "p-12", desc: "Padding: 3rem (~48px)" },
    { cls: "px-4 py-2", desc: "Horizontal 1rem, Vertical 0.5rem" },
    { cls: "pt-6", desc: "Padding Top: 1.5rem" },
    { cls: "pb-6", desc: "Padding Bottom: 1.5rem" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Heading Section */}
          <div className="space-y-4 text-left">
            <h1 className="text-5xl font-bold text-foreground">Padding</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Padding controls the <span className="font-semibold text-foreground">inner spacing</span> inside an element — the space between the <span className="font-semibold text-foreground">content</span> and its <span className="font-semibold text-foreground">edges/border</span>. Tailwind provides utilities to apply padding uniformly, vertically, horizontally, or on specific sides.
            </p>
          </div>

          {/* Padding Utilities Grid */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Padding Utility Classes</h2>
            <p className="text-muted-foreground">Click any class to copy.</p>

            <div className="grid md:grid-cols-3 gap-4">
              {paddingClasses.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-4 hover:bg-accent/30 transition cursor-pointer group"
                  onClick={() => navigator.clipboard.writeText(item.cls)}
                >
                  <code className="text-sm font-mono font-semibold">{item.cls}</code>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition mt-2">Click to copy</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demos Section */}
          {/* Demos Section */}
<div className="space-y-12 border-t border-border pt-8">
  <h2 className="text-3xl font-bold text-foreground">Interactive Padding Demos</h2>

  {/* 1️⃣ Auto-Cycling Padding Demo */}
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-foreground">1. Auto-Cycling Padding</h3>
    <p className="text-muted-foreground text-sm max-w-xl">
      This box automatically cycles through different padding values every 1.5 seconds to visually show how padding affects inner spacing.
    </p>

    <div className="flex justify-start">
      <div className={`transition-all duration-700 bg-blue-600 text-white rounded ${demoPads[demoIndex]}`}>
        <span className="font-semibold text-sm">{demoPads[demoIndex]}</span>
      </div>
    </div>

    <CodeBlock
      language="html"
      code={`<div class="\${demoPads[demoIndex]} bg-blue-600 text-white rounded transition-all duration-700">
  <span class="font-semibold text-sm">\${demoPads[demoIndex]}</span>
</div>`}
    />

    <CodeBlock
      language="javascript"
      code={`
const [demoIndex, setDemoIndex] = useState(0);
const demoPads = ["p-0", "p-4", "p-8", "px-8 py-4", "pt-12", "pb-12"];

useEffect(() => {
  const interval = setInterval(() => {
    setDemoIndex(i => (i + 1) % demoPads.length);
  }, 1500);

  return () => clearInterval(interval);
}, []);`}
    />
  </div>

  {/* 2️⃣ Hover-Expand Demo */}
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-foreground">2. Hover-Expand Padding</h3>
    <p className="text-muted-foreground text-sm max-w-xl">
      Hover over the box to smoothly increase its padding, demonstrating interactive spacing transitions.
    </p>

    <div className="flex justify-start">
      <div className="bg-purple-600 text-white rounded p-4 hover:p-12 transition-all duration-500">
        <span className="font-semibold text-sm">Hover Me (p-4 → p-12)</span>
      </div>
    </div>

    <CodeBlock
      language="html"
      code={`<div class="bg-purple-600 text-white rounded p-4 hover:p-12 transition-all duration-500">
  Hover Me (p-4 → p-12)
</div>`}
    />
  </div>

  {/* 3️⃣ Click-Toggle Padding Demo */}
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-foreground">3. Click-Toggle Padding</h3>
    <p className="text-muted-foreground text-sm max-w-xl">
      Clicking the box toggles between small and large padding values.
    </p>

    <div className="flex justify-start">
      <div
        onClick={() => setClickedPad(prev => (prev === "p-4" ? "p-12" : "p-4"))}
        className={`bg-green-600 text-white rounded cursor-pointer transition-all duration-500 ${clickedPad}`}
      >
        <span className="font-semibold text-sm">{clickedPad} (Click)</span>
      </div>
    </div>
  </div>
    <CodeBlock
      language="html"
      code={ 
  `  const [clickedPad, setClickedPad] = useState("p-4");
  <div 
  onClick={() => setClickedPad(p => p === "p-4" ? "p-12" : "p-4")}
  class="\${clickedPad} bg-green-600 text-white rounded cursor-pointer transition-all duration-500"
  >
  <span>\${clickedPad} (Click)</span>
  </div>`}
    />

    

  {/* 4️⃣ Responsive Padding Animation Demo */}
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-foreground">4. Responsive Padding Transition</h3>
    <p className="text-muted-foreground text-sm max-w-xl">
      Resize the screen to watch the padding animate between mobile and desktop sizes.
    </p>

    <div className="flex justify-start">
      <div className="bg-orange-600 text-white rounded p-4 md:p-12 transition-all duration-700">
        <span className="font-semibold text-sm">p-4 (mobile) → p-12 (desktop)</span>
      </div>
    </div>

    <CodeBlock
      language="html"
      code={`<div class="bg-orange-600 text-white rounded p-4 md:p-12 transition-all duration-700">
  p-4 (mobile) → p-12 (desktop)
</div>`}
    />
  </div>
</div>


          {/* Real-world Examples */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Real‑World Examples</h2>

            {/* Example 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Card with Inner Padding</h3>
              <div className="bg-slate-800 text-white rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Card Title</h3>
                <p>This card uses <code>p-6</code> for comfortable inner spacing.</p>
              </div>
              <CodeBlock language="html" code={`<div class="p-6 bg-slate-800 text-white rounded-lg">
  <h3 class="text-lg font-bold mb-2">Card Title</h3>
  <p>Card content goes here…</p>
</div>`} />
            </div>

            {/* Example 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Responsive Section Padding</h3>
              <div className="bg-green-600 text-white rounded-lg p-4 md:p-8">
                <h2 className="text-2xl font-bold mb-2">Section Title</h2>
                <p>This section increases padding on larger screens for improved layout spacing.</p>
              </div>
              <CodeBlock language="html" code={`<section class="p-4 md:p-8 bg-green-600 text-white rounded-lg">
  <h2 class="text-2xl font-bold mb-2">Section Title</h2>
  <p>Section content…</p>
</section>`} />
            </div>

          </div>
          {/* Tips & common patterns */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-foreground">Tips & Common Patterns</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Use <code className="bg-slate-700 px-1 rounded">p-{'{size}'}</code> to set uniform padding on all sides.</li>
              <li>Use <code className="bg-slate-700 px-1 rounded">px-{'{size}'}</code> or <code className="bg-slate-700 px-1 rounded">py-{'{size}'}</code> for only horizontal or vertical padding.</li>
              <li>For one-sided padding, use <code className="bg-slate-700 px-1 rounded">pt-{'{size}'}</code>, <code className="bg-slate-700 px-1 rounded">pl-{'{size}'}</code>, etc.</li>
              <li>Use responsive prefixes like <code className="bg-slate-700 px-1 rounded">md:p-8</code> so padding adjusts with screen size.</li>
              <li>If you need a custom padding not on default scale, use arbitrary values: <code className="bg-slate-700 px-1 rounded">p-[5px]</code>, etc.</li>
            </ul>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
