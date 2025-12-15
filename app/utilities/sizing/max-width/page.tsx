"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

export default function MaxWidthPage() {
  // Animated demo state
  const [demoIdx, setDemoIdx] = useState(0);
  const demoMaxWidths = [
    "max-w-xs",
    "max-w-sm",
    "max-w-md",
    "max-w-lg",
    "max-w-xl",
    "max-w-2xl",
    "max-w-full",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoIdx((i) => (i + 1) % demoMaxWidths.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const utilities = [
    { cls: "max-w-xs", desc: "max-width: ~20rem (small card)" },
    { cls: "max-w-sm", desc: "max-width: ~24rem" },
    { cls: "max-w-md", desc: "max-width: ~28rem" },
    { cls: "max-w-lg", desc: "max-width: ~32rem" },
    { cls: "max-w-xl", desc: "max-width: ~36rem" },
    { cls: "max-w-2xl", desc: "max-width: ~42rem" },
    { cls: "max-w-3xl", desc: "max-width: ~48rem" },
    { cls: "max-w-full", desc: "max-width: 100% (no constraint)" },
    { cls: "max-w-prose", desc: "max-width for readable text (prose)" },
    { cls: "max-w-screen-lg", desc: "max-width at large screen breakpoint" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Heading */}
          <div className="space-y-4 text-left">
            <h1 className="text-5xl font-bold text-foreground">Max-Width</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Tailwind’s <span className="font-semibold text-foreground">max-width</span> utilities let you constrain how wide an element can grow, helping you control layout width, readability thresholds, and responsive content constraints — from small cards to centered containers. 
            </p>
          </div>

          {/* Utility Classes Grid */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Max-Width Utility Classes</h2>
            <p className="text-muted-foreground">Click to copy a class to use in your layout.</p>
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

            {/* Demo: cycling max widths */}
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm max-w-xl">
                This container cycles through different max-width utilities. Resize your browser to see the constraint in action (no matter how wide the viewport, it won’t exceed the set max-width).
              </p>

              <div className="flex justify-center">
                <div
                  className={`w-full transition-all duration-700 bg-indigo-600 text-white px-4 py-6 rounded ${demoMaxWidths[demoIdx]}`}
                >
                  <div className="text-center font-semibold">{demoMaxWidths[demoIdx]}</div>
                </div>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="w-full ${demoMaxWidths[demoIdx]} bg-indigo-600 text-white rounded px-4 py-6 text-center">
  ${demoMaxWidths[demoIdx]}
</div>`}
              />
            </div>

            {/* Demo: responsive breakpoints */}
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm max-w-xl">
                Use responsive prefixes to adjust max-width at breakpoints — here it grows at medium screens and above.
              </p>

              <div className="bg-teal-500 text-white p-6 rounded w-full max-w-sm md:max-w-lg">
                <span className="font-semibold">Responsive max-width</span>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="w-full max-w-sm md:max-w-lg bg-teal-500 text-white p-6 rounded">
  Responsive max-width
</div>`}
              />
            </div>

            {/* Demo: hover state max width */}
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm max-w-xl">
                Classes like <code className="bg-slate-700 px-1 rounded">hover:max-w-lg</code> let you animate constraints on interaction.
              </p>

              <div className="bg-yellow-500 text-black p-4 rounded max-w-sm hover:max-w-xl transition-all duration-500">
                Hover to expand max width
              </div>

              <CodeBlock
                language="html"
                code={`<div class="bg-yellow-500 text-black p-4 rounded max-w-sm hover:max-w-xl transition-all duration-500">
  Hover to expand max-width
</div>`}
              />
            </div>
          </div>

          {/* Real-World Examples */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">Real-World Examples</h2>

            {/* Example 1: Centered Container / Page Wrapper */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Centered Content Container</h3>
              <p className="text-muted-foreground text-sm">
                Constrain page content for classic layout centers using a medium or large max-width. Often combined with <code className="bg-slate-700 px-1 rounded">mx-auto</code> to center horizontally.
              </p>
              <div className="w-full max-w-3xl mx-auto bg-slate-800 text-white p-6 rounded">
                <p>This container will not grow beyond <code>max-w-3xl</code>.</p>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="max-w-3xl mx-auto w-full bg-slate-800 text-white p-6 rounded">
  Centered content…
</div>`}
              />
            </div>

            {/* Example 2: Readable Article / Text Block */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Readable Article Width</h3>
              <p className="text-muted-foreground text-sm">
                Constrain text blocks for better readability with <code className="bg-slate-700 px-1 rounded">max-w-prose</code>, ideal for blog posts or documentation. 
              </p>
              <div className="max-w-prose mx-auto text-black bg-white p-4 rounded shadow">
                <p>Tailwind’s max-width utilities help keep line length comfortable, improving readability for long text content.</p>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="max-w-prose mx-auto bg-white text-black p-4 rounded shadow">
  <p>Your readable text here…</p>
</div>`}
              />
            </div>

            {/* Example 3: Modal / Dialog Box */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Modal / Dialog Box</h3>
              <p className="text-muted-foreground text-sm">
                Use a moderate max-width inside a modal to prevent it from spanning too wide on large screens.
              </p>
              <div className="p-8 bg-white rounded shadow max-w-md mx-auto text-center">
                <p className="text-lg font-semibold">This is a modal</p>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="max-w-md bg-white p-8 rounded shadow mx-auto text-center">
  <p>Modal content</p>
</div>`}
              />
            </div>

            {/* Example 4: Responsive Card / Profile Panel */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Responsive Profile/Panel</h3>
              <p className="text-muted-foreground text-sm">
                Constrain the width of profile cards or panels with a combination of widths and max-width. Useful for settings panels or small components.
              </p>
              <div className="bg-indigo-600 text-white p-6 rounded max-w-sm w-full">
                <p>Profile panel constrained with max-width</p>
              </div>
              <CodeBlock
                language="html"
                code={`<div class="w-full max-w-sm bg-indigo-600 text-white p-6 rounded">
  Profile panel
</div>`}
              />
            </div>
          </div>

          {/* Tips & Common Patterns */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">  
            <h3 className="font-semibold text-foreground">Tips & Common Patterns</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Use <code className="bg-slate-700 px-1 rounded">max-w-prose</code> for readable text blocks on articles and blogs. </li>
              <li>Combine <code className="bg-slate-700 px-1 rounded">max-w-* mx-auto</code> to center layouts with constrained width.</li>
              <li>Use responsive modifiers like <code className="bg-slate-700 px-1 rounded">md:max-w-lg</code> to change max-width at breakpoints.</li>
              <li>Arbitrary values like <code className="bg-slate-700 px-1 rounded">max-w-[75ch]</code> can enforce ideal text length for UX.</li>
              <li>Constrain dialog/modals with moderate max-width so they don’t span too wide on large screens.</li>
            </ul>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
