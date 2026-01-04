"use client";

import { useState } from "react";
import FlexLayout from "../layout";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { ExampleSection, ExampleCard } from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import CodeBlock from "@/app/utilities/components/code-block";

type Direction =
  | "flex-row"
  | "flex-col"
  | "flex-row-reverse"
  | "flex-col-reverse";

export default function FlexDirectionPage() {
const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const utilities = [
    { className: "flex-row", desc: "Row direction (left to right)" },
    { className: "flex-col", desc: "Column direction (top to bottom)" },
    { className: "flex-row-reverse", desc: "Row reverse (right to left)" },
    { className: "flex-col-reverse", desc: "Column reverse (bottom to top)" },
  ];

  // Playground controls
  const [playDirection, setPlayDirection] = useState<Direction>("flex-row");
  const [gapSize, setGapSize] = useState("gap-4");
  const [alignItems, setAlignItems] = useState("items-center");
  const [justify, setJustify] = useState("justify-start");

  const playgroundMarkup = `<div class="flex ${playDirection} ${gapSize} ${alignItems} ${justify}">
  <div class="px-4 py-2 bg-slate-700 rounded text-white">Item 1</div>
  <div class="px-4 py-2 bg-slate-700 rounded text-white">Item 2</div>
  <div class="px-4 py-2 bg-slate-700 rounded text-white">Item 3</div>
</div>`;

return (
    <FlexLayout>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
        {/* Header */}
        <PageHero 
          title="Flex Direction"
          description="Control the direction flex items are laid out — and learn how that affects real UI patterns."
        />

        <MentalModelSection
          title="Understanding Flex Direction"
          description="Flex direction establishes the main axis along which flex items are laid out, fundamentally affecting layout behavior."
          features={[
            "Main axis determines primary layout direction",
            "Cross axis is perpendicular to main axis for alignment",
            "Writing mode affects direction interpretation",
            "Reverse utilities only change visual order, not DOM order",
            "Direction affects how other flex properties behave"
          ]}
          layerAssignment="Layout Direction - Defines main axis and item flow direction"
          browserBehavior="Browser calculates main axis based on direction and positions items accordingly"
        />

        <CommonMistakesSection
          mistakes={[
            {
              title: "Using flex-direction: column for horizontal layouts",
              reason: "The opposite of intended layout, causing stacking instead of side-by-side arrangement",
              example: "<div class=\"flex flex-col\">Horizontal nav items</div>",
              level: "critical"
            },
            {
              title: "Not testing keyboard order with reverse directions",
              reason: "Visual reordering breaks accessibility expectations for screen reader and keyboard users",
              example: "<div class=\"flex-row-reverse\">Important content first in DOM</div>",
              level: "warning"
            },
            {
              title: "Missing responsive direction changes",
              reason: "Layouts don't adapt properly between mobile and desktop viewports",
              example: "<div class=\"flex-row\">Stays horizontal on mobile</div>",
              level: "info"
            }
          ]}
        />

          <UtilityGrid
            title="Flex Direction Utilities"
            items={[
              { cls: "flex-row", desc: "Row direction (left to right)" },
              { cls: "flex-col", desc: "Column direction (top to bottom)" },
              { cls: "flex-row-reverse", desc: "Row reverse (right to left)" },
              { cls: "flex-col-reverse", desc: "Column reverse (bottom to top)" }
            ]}
          />

          {/* Interactive Playground */}
          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try different directions + alignment to see how direction
              interacts with layout, order, and alignment.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Direction
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {(
                      [
                        "flex-row",
                        "flex-col",
                        "flex-row-reverse",
                        "flex-col-reverse",
                      ] as Direction[]
                    ).map((d) => (
                      <button
                        key={d}
                        onClick={() => setPlayDirection(d)}
                        className={`px-3 py-1 rounded border cursor-pointer ${
                          playDirection === d
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        } text-sm`}
                      >
                        {d.replace("flex-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Gap
                  </label>
                  <div className="flex gap-2">
                    {["gap-2", "gap-4", "gap-6"].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGapSize(g)}
                        className={`px-3 py-1 rounded border cursor-pointer ${
                          gapSize === g
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        } text-sm`}
                      >
                        {g.replace("gap-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Align items (cross-axis)
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { label: "start", cls: "items-start" },
                      { label: "center", cls: "items-center" },
                      { label: "end", cls: "items-end" },
                      { label: "stretch", cls: "items-stretch" },
                    ].map((a) => (
                      <button
                        key={a.cls}
                        onClick={() => setAlignItems(a.cls)}
                        className={`px-3 py-1 rounded border cursor-pointer ${
                          alignItems === a.cls
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        } text-sm`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Justify (main-axis)
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { label: "start", cls: "justify-start" },
                      { label: "center", cls: "justify-center" },
                      { label: "end", cls: "justify-end" },
                      { label: "between", cls: "justify-between" },
                    ].map((j) => (
                      <button
                        key={j.cls}
                        onClick={() => setJustify(j.cls)}
                        className={`px-3 py-1 rounded border cursor-pointer ${
                          justify === j.cls
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        } text-sm`}
                      >
                        {j.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Playground demo */}
              <div className="md:col-span-2 space-y-3">
                <div className="border border-border rounded-lg p-4 bg-card/30">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Playground</div>
                      <div className="text-xs text-muted-foreground">
                        Live preview of selected direction + alignment
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(playgroundMarkup)}
                      className="text-xs px-3 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer"
                    >
                      Copy markup
                    </button>
                  </div>

                  <div
                    className={`flex ${playDirection} ${gapSize} ${alignItems} ${justify} h-50 rounded p-4 bg-slate-800`}
                    aria-live="polite"
                    role="group"
                  >
                    <div className="px-4 py-2 bg-slate-700 rounded text-white flex items-center justify-center">
                      DOM 1
                    </div>
                    <div className="px-4 py-2 bg-slate-700 rounded text-white flex items-center justify-center">
                      DOM 2
                    </div>
                    <div className="px-4 py-2 bg-slate-700 rounded text-white flex items-center justify-center">
                      DOM 3
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Tip:</strong> reverse utilities only change visual
                    order — DOM order stays the same (important for keyboard &
                    screen reader users).
                  </p>

                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>
            </div>
          </div>

          {/* Demos with explanations */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Direction Demos (annotated)</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Row demo */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-2 flex items-baseline justify-between">
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    flex-row
                  </code>
                  <button
                    onClick={() => copyToClipboard("flex-row")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <div className="flex gap-4 h-28 bg-slate-800 rounded p-3 items-center">
                  <div className="px-4 py-2 bg-blue-500 rounded text-white">
                    Item A
                  </div>
                  <div className="px-4 py-2 bg-blue-400 rounded text-white">
                    Item B
                  </div>
                  <div className="px-4 py-2 bg-blue-300 rounded text-white">
                    Item C
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Default horizontal flow: good for navs, toolbars, and rows of
                  cards. Use{" "}
                  <code className="bg-slate-700 px-1 rounded">flex-row</code>{" "}
                  when main content flows left→right.
                </p>
              </div>

              {/* Column demo */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-2 flex items-baseline justify-between">
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    flex-col
                  </code>
                  <button
                    onClick={() => copyToClipboard("flex-col")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <div
                  className="flex flex-col gap-3 bg-slate-800 rounded p-3"
                  style={{ minHeight: 120 }}
                >
                  <div className="px-4 py-2 bg-green-500 rounded text-white">
                    Profile
                  </div>
                  <div className="px-4 py-2 bg-green-400 rounded text-white">
                    Settings
                  </div>
                  <div className="px-4 py-2 bg-green-300 rounded text-white">
                    Logout
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Stack content vertically — useful for sidebars, forms, and
                  stacked lists. Combine with responsive variants (e.g.{" "}
                  <code className="bg-slate-700 px-1 rounded">md:flex-row</code>
                  ) for mobile-first layouts.
                </p>
              </div>

              {/* Row reverse demo */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-2 flex items-baseline justify-between">
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    flex-row-reverse
                  </code>
                  <button
                    onClick={() => copyToClipboard("flex-row-reverse")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <div className="flex flex-row-reverse gap-4 h-28 bg-slate-800 rounded p-3 items-center">
                  <div className="px-4 py-2 bg-purple-300 rounded text-white">
                    A
                  </div>
                  <div className="px-4 py-2 bg-purple-400 rounded text-white">
                    B
                  </div>
                  <div className="px-4 py-2 bg-purple-500 rounded text-white">
                    C
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Visually reverses the main-axis. Good when you want a visual
                  order that differs from DOM order (be cautious — keep keyboard
                  order & accessibility in mind).
                </p>
              </div>

              {/* Column reverse demo */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-2 flex items-baseline justify-between">
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    flex-col-reverse
                  </code>
                  <button
                    onClick={() => copyToClipboard("flex-col-reverse")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
                <div
                  className="flex flex-col-reverse gap-3 bg-slate-800 rounded p-3"
                  style={{ minHeight: 120 }}
                >
                  <div className="px-4 py-2 bg-rose-300 rounded text-white text-center">
                    1
                  </div>
                  <div className="px-4 py-2 bg-rose-400 rounded text-white text-center">
                    2
                  </div>
                  <div className="px-4 py-2 bg-rose-500 rounded text-white text-center">
                    3
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Reverses vertical stacking. Useful for chat UIs or timelines
                  where newest content should appear at the top visually while
                  preserving DOM order.
                </p>
              </div>
            </div>
          </div>

          <ExampleSection title="Real-World Examples — explained">
            <div className="grid md:grid-cols-2 gap-6">
              {/* 1. Responsive navigation */}
              <div className="border border-border rounded-lg p-4 bg-card/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <nav className="flex flex-col md:flex-row items-center gap-2">
                      <div className="font-bold text-white">Logo</div>
                      <div className="flex gap-2 flex-1 justify-center">
                        <a className="text-sm text-slate-200">Home</a>
                        <a className="text-sm text-slate-200">Contact</a>
                      </div>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                        Sign In
                      </button>
                    </nav>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Responsive navigation
                      </h3>
                      <button
                        onClick={() => copyToClipboard("flex-col md:flex-row")}
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2 max-w-full overflow-hidden">
                      <CodeBlock
                        code={`<nav class="flex md:flex-row flex-col items-center gap-4 p-4">
  <div class="font-bold">Logo</div>
  <div class="flex gap-4 flex-1 justify-center"> ... </div>
  <button>Sign In</button>
</nav>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Stack on mobile (
                        <code className="bg-slate-700 px-1 rounded">
                          flex-col
                        </code>
                        ) and switch to{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          md:flex-row
                        </code>{" "}
                        on larger screens so navs adapt without overflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Sidebar + content */}
              <div className="border border-border rounded-lg p-4 bg-card/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <div className="flex gap-3">
                      <aside className="flex-shrink-0 w-36 flex flex-col gap-2 p-2 bg-slate-700 rounded text-white">
                        <a>Link 1</a>
                        <a>Link 2</a>
                        <a>Link 3</a>
                      </aside>
                      <main className="flex-1 p-2 bg-slate-900 rounded text-slate-200 min-w-0">
                        Main content
                      </main>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Sidebar + content
                      </h3>
                      <button
                        onClick={() =>
                          copyToClipboard("flex flex-col (sidebar)")
                        }
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<div class="flex">
  <aside class="flex-shrink-0 w-56 flex flex-col p-4"> ... </aside>
  <main class="flex-1 p-6">Main content</main>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Use a fixed (non-shrinking) sidebar and{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          flex-1 min-w-0
                        </code>{" "}
                        for main so it can shrink without causing overflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Chat / Timeline (newest on top) */}
              <div className="border border-border rounded-lg p-4 bg-card/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3 overflow-auto">
                    <div className="flex flex-col-reverse gap-2 max-h-40">
                      <div className="p-2 rounded bg-slate-700 text-white text-sm">
                        Newest message
                      </div>
                      <div className="p-2 rounded bg-slate-700/90 text-white text-sm">
                        Older message
                      </div>
                      <div className="p-2 rounded bg-slate-700/80 text-white text-sm">
                        Oldest message
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Chat / Timeline (newest on top)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("flex-col-reverse")}
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<div class="flex flex-col-reverse gap-3" aria-live="polite" role="log">
  <div class="p-3 rounded bg-slate-700 text-white">Newest message</div>
  <div class="p-3 rounded bg-slate-700/90 text-white">Older message</div>
  <div class="p-3 rounded bg-slate-700/80 text-white">Oldest message</div>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Keep DOM chronological and use{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          flex-col-reverse
                        </code>{" "}
                        visually — preserves keyboard & screen reader order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Image gallery (wrapping row) */}
              <div className="border border-border rounded-lg p-4 bg-card/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3 overflow-auto">
                    <div className="flex flex-row flex-wrap gap-3">
                      <div className="w-36 h-24 bg-slate-700 rounded flex-shrink-0" />
                      <div className="w-36 h-24 bg-slate-700 rounded flex-shrink-0" />
                      <div className="w-36 h-24 bg-slate-700 rounded flex-shrink-0" />
                      <div className="w-36 h-24 bg-slate-700 rounded flex-shrink-0" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Image gallery (wrapping row)
                      </h3>
                      <button
                        onClick={() =>
                          copyToClipboard("flex-row flex-wrap gap-3")
                        }
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<div class="flex flex-row flex-wrap gap-3">
  <img class="w-48 h-32 object-cover rounded" src="/img/1.jpg" />
  <img class="w-48 h-32 object-cover rounded" src="/img/2.jpg" />
  <img class="w-48 h-32 object-cover rounded" src="/img/3.jpg" />
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Fixed item sizes (or{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          basis-
                        </code>{" "}
                        utilities) + wrapping produce consistent gallery rows
                        without overflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Product card (responsive media position) */}
              <div className="border border-border rounded-lg p-4 bg-card/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3 overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-3 items-start">
                      <div className="w-full md:w-25 h-28 bg-slate-700 rounded flex-shrink-0" />
                      <div className="flex-1 text-slate-200 min-w-0">
                        <div className="font-semibold">Product title</div>
                        <div className="text-sm text-muted-foreground">
                          Short description...
                        </div>
                        <div className="mt-2 flex gap-2">
                          <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                            Buy
                          </button>
                          <button className="px-3 py-1 border rounded text-sm">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Product card (responsive)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("flex-col md:flex-row")}
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<div class="flex flex-col md:flex-row gap-4 p-4 border rounded">
  <img class="w-full md:w-48 h-40 object-cover rounded" src="/product.jpg" alt="Product" />
  <div class="flex-1"> ... </div>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Stack media above content on mobile and put it left on
                        desktop (
                        <code className="bg-slate-700 px-1 rounded">
                          flex-col md:flex-row
                        </code>
                        ) for compact, reusable cards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Form layout (labels + inputs horizontally on wide screens) */}
              <div className="border border-border rounded-lg p-4 bg-card/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <form className="space-y-3">
                      {/* make this container min-w-0 so the flex-1 input can shrink */}
                      <div className="flex flex-col md:flex-row md:items-center md:gap-3 md:min-w-0">
                        <label className="md:w-36 md:flex-shrink-0 text-sm text-slate-200">
                          Full name
                        </label>
                        {/* input should be able to shrink: w-full and min-w-0 */}
                        <input className="flex-1 w-full min-w-0 px-3 py-2 rounded border bg-slate-700 text-white" />
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center md:gap-3 md:min-w-0">
                        <label className="md:w-36 md:flex-shrink-0 text-sm text-slate-200">
                          Email
                        </label>
                        <input className="flex-1 w-full min-w-0 px-3 py-2 rounded border bg-slate-700 text-white" />
                      </div>
                    </form>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Form layout
                      </h3>
                      <button
                        onClick={() => copyToClipboard("flex-col md:flex-row")}
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<form class="space-y-4">
  <div class="flex flex-col md:flex-row md:items-center md:gap-4 md:min-w-0">
    <label class="md:w-40 md:flex-shrink-0">Full name</label>
    <input class="flex-1 w-full min-w-0" />
  </div>
</form>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Stack labels above inputs on mobile (flex-col), then
                        switch to horizontal label+field on desktop. Use{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          min-w-0
                        </code>{" "}
                        on the flex container so the field can shrink instead of
                        overflowing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 7. Toolbar / actions (row-reverse for primary placement) */}
              <div className="border border-border rounded-lg p-4 bg-card/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <div className="flex flex-row-reverse gap-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                        Save
                      </button>
                      <button className="text-white px-3 py-1 border rounded text-sm">
                        Cancel
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Toolbar / Actions
                      </h3>
                      <button
                        onClick={() => copyToClipboard("flex-row-reverse")}
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<div class="flex flex-row-reverse gap-2">
  <button class="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
  <button class="px-3 py-1 border rounded">Cancel</button>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Use{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          flex-row-reverse
                        </code>{" "}
                        to visually place the primary action on the right but
                        keep a logical DOM order. Double-check keyboard focus
                        order when using this.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 8. Breadcrumbs (row & wrap) */}
              <div className="border border-border rounded-lg p-4 bg-card/20 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <nav aria-label="Breadcrumb">
                      <ol className="flex flex-row gap-2 flex-wrap items-center text-sm text-slate-200">
                        <li>Home</li>
                        <li>/</li>
                        <li>Products</li>
                        <li>/</li>
                        <li>Cool sneakers</li>
                      </ol>
                    </nav>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground">
                        Breadcrumbs (row & wrap)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("flex-row flex-wrap")}
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<nav aria-label="Breadcrumb">
  <ol class="flex flex-row gap-2 flex-wrap items-center text-sm">
    <li>Home</li>
    <li>/</li>
    <li>Products</li>
    <li>/</li>
    <li>Cool sneakers</li>
  </ol>
</nav>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Breadcrumbs usually read left→right — add{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          flex-wrap
                        </code>{" "}
                        so they wrap gracefully on small screens rather than
                        truncate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ExampleSection>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Accessibility note</h3>
            <p className="text-sm text-muted-foreground">
              Reversing visual order (
              <code className="bg-slate-700 px-1 rounded">*-reverse</code>)
              doesn't change DOM order — keyboard and screen reader users
              still navigate to original DOM order. If visual order must
              match keyboard order, rearrange DOM instead of relying only on
              reverse utilities.
            </p>
          </div>
         

          <TipsSection 
            tips={[
              { bold: "Direction choice:", text: "Use flex-row for horizontal UI, flex-col for stacked UI" },
              { bold: "Responsive design:", text: "Prefer responsive switches like md:flex-row for mobile-first layouts" },
              { bold: "Reverse utilities:", text: "Use sparingly and test keyboard accessibility when using *-reverse" },
              { bold: "Writing modes:", text: "Consider international layouts where flex-start/flex-end may behave differently" },
              { bold: "Main axis:", text: "Direction determines main axis - affects justify-content behavior" }
            ]}
          />
        </div>
      </FlexLayout>
  );
}
