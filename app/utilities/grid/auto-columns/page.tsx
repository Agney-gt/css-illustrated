"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type AutoColsMode =
  | "auto-cols-min"
  | "auto-cols-max"
  | "auto-cols-fr"
  | "auto-cols-auto";

export default function GridAutoColumnsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied(null);
    }
  };

  const utilities: { className: AutoColsMode; desc: string }[] = [
    {
      className: "auto-cols-min",
      desc: "Implicit columns sized to min-content",
    },
    {
      className: "auto-cols-max",
      desc: "Implicit columns sized to max-content",
    },
    {
      className: "auto-cols-fr",
      desc: "Implicit columns sized using fr units",
    },
    { className: "auto-cols-auto", desc: "Implicit columns sized by auto" },
  ];

  // playground controls
  const [autoCols, setAutoCols] = useState<AutoColsMode>("auto-cols-min");
  const [gap, setGap] = useState("gap-4");
  const [containerWidth, setContainerWidth] = useState("w-full");
  const [items, setItems] = useState(8);

  const playgroundMarkup = `<div class="grid grid-flow-col ${autoCols} ${gap}">
  <!-- implicit columns created as you add items -->
  <div class="p-3 bg-slate-700 rounded text-white">Item</div>
  ...
</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Grid — Auto Columns</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Control the size of implicitly-created grid columns. These
              utilities are most useful when you create horizontally-flowing
              grids (using{" "}
              <code className="bg-slate-700 px-1 rounded">grid-flow-col</code>)
              such as carousels, tag scrollers, and horizontal card rows.
            </p>
          </div>

          {/* Short comparison */}
          <div className="border border-border rounded-lg p-4 bg-card/20">
            <h2 className="text-2xl font-semibold">Quick comparison</h2>
            <div className="mt-3 grid md:grid-cols-4 gap-3 text-sm">
              <div className="p-3 bg-slate-800 rounded bg-white">
                <div className="font-medium">auto-cols-min</div>
                <div className="text-muted-foreground mt-1">
                  Use for tag/chip scrollers — columns fit smallest content
                  width.
                </div>
              </div>
              <div className="p-3 bg-slate-800 rounded bg-white">
                <div className="font-medium">auto-cols-max</div>
                <div className="text-muted-foreground mt-1">
                  Use when items have wide content that shouldn't be
                  constrained.
                </div>
              </div>
              <div className="p-3 bg-slate-800 rounded bg-white">
                <div className="font-medium">auto-cols-fr</div>
                <div className="text-muted-foreground mt-1">
                  Evenly distribute implicit columns using fractional units —
                  good for equal cards.
                </div>
              </div>
              <div className="p-3 bg-slate-800 rounded bg-white">
                <div className="font-medium">auto-cols-auto</div>
                <div className="text-muted-foreground mt-1">
                  Browser chooses column size by default (auto).
                </div>
              </div>
            </div>
          </div>

          {/* Utilities */}
          <div className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Auto Columns Utilities</h2>
              <p className="text-muted-foreground">
                Click a utility to copy it to clipboard.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {utilities.map((u) => (
                <button
                  key={u.className}
                  onClick={() => copyToClipboard(u.className)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group"
                  aria-label={`Copy ${u.className}`}
                >
                  <div className="flex items-center justify-between">
                    <code className="text-black text-sm font-mono text-accent font-semibold">
                      {u.className}
                    </code>
                    <span className="text-xs text-muted-foreground">
                      {copied === u.className ? "Copied" : "Copy"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{u.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Playground */}
          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Toggle different{" "}
              <code className="bg-slate-700 px-1 rounded">auto-cols-*</code>{" "}
              behaviors, gap, width and item count. No dropdowns — buttons only.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls (buttons) */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Auto columns
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {(
                      [
                        "auto-cols-min",
                        "auto-cols-max",
                        "auto-cols-fr",
                        "auto-cols-auto",
                      ] as AutoColsMode[]
                    ).map((m) => (
                      <button
                        key={m}
                        onClick={() => setAutoCols(m)}
                        className={`px-3 py-1 rounded border text-sm ${
                          autoCols === m
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {m.replace("auto-cols-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Gap
                  </label>
                  <div className="flex gap-2">
                    {["gap-2", "gap-4", "gap-6"].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGap(g)}
                        className={`px-3 py-1 rounded border text-sm ${
                          gap === g
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {g.replace("gap-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Container width
                  </label>
                  <div className="flex gap-2">
                    {[
                      { label: "full", cls: "w-full" },
                      { label: "md (640px)", cls: "w-[640px]" },
                      { label: "narrow (420px)", cls: "w-[420px]" },
                    ].map((c) => (
                      <button
                        key={c.cls}
                        onClick={() => setContainerWidth(c.cls)}
                        className={`px-3 py-1 rounded border text-sm ${
                          containerWidth === c.cls
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Number of items
                  </label>
                  <div className="flex gap-2">
                    {[4, 6, 8, 12].map((n) => (
                      <button
                        key={n}
                        onClick={() => setItems(n)}
                        className={`px-3 py-1 rounded border text-sm ${
                          items === n
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Playground preview */}
              <div className="md:col-span-2 space-y-3">
                <div className="border border-border rounded-lg p-4 bg-card/30">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Playground</div>
                      <div className="text-xs text-muted-foreground">
                        Live preview of implicit columns
                      </div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div className="text-xs text-muted-foreground">
                        Markup
                      </div>
                      <button
                        onClick={() => copyToClipboard(playgroundMarkup)}
                        className="text-xs px-3 py-1 rounded bg-muted/10 hover:bg-muted/20"
                      >
                        Copy markup
                      </button>
                    </div>
                  </div>

                  <div
                    className={`rounded p-4 bg-slate-800 overflow-x-auto ${containerWidth}`}
                    aria-live="polite"
                  >
                    <div
                      className={`grid grid-flow-col ${autoCols} ${gap} items-stretch`}
                    >
                      {Array.from({ length: items }).map((_, i) => (
                        <div
                          key={i}
                          className="p-3 bg-slate-700 rounded text-white min-w-[120px] flex items-center justify-center text-center"
                        >
                          Item {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Note:</strong>{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-cols-min
                    </code>{" "}
                    gives the smallest column width that fits content;{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-cols-max
                    </code>{" "}
                    uses largest content;{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-cols-fr
                    </code>{" "}
                    uses fractional distribution;{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-cols-auto
                    </code>{" "}
                    is browser default.
                  </p>

                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>
            </div>
          </div>

          {/* Real-world examples with visuals */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">
              Real-World Examples — visuals & code
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Horizontal card row (auto-cols-fr) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Horizontal card row (equal cards)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("grid grid-flow-col auto-cols-fr gap-4")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-x-auto">
                  <div className="grid grid-flow-col auto-cols-fr gap-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <article
                        key={i}
                        className="min-w-[220px] bg-slate-700 rounded p-4 text-slate-200"
                      >
                        <div className="font-semibold">Card {i + 1}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Short description
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-flow-col auto-cols-fr gap-4">
  <div class="min-w-[220px]">Card 1</div>
  <div class="min-w-[220px]">Card 2</div>
</div>`}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Use this pattern for product lists, equal-featured cards,
                    and horizontally-scrollable galleries where each card should
                    get an equal share of the visible area.
                  </p>
                </div>
              </div>

              {/* Tag scroller (auto-cols-min) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Tag / chip scroller (natural widths)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("grid grid-flow-col auto-cols-min gap-2")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-x-auto">
                  <div className="grid grid-flow-col auto-cols-min gap-2 items-center">
                    {[
                      "react",
                      "tailwindcss",
                      "ux",
                      "design",
                      "a11y",
                      "perf",
                      "testing",
                      "storybook",
                    ].map((t) => (
                      <div
                        key={t}
                        className="px-3 py-1 bg-slate-700 rounded text-slate-200 whitespace-nowrap"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-flow-col auto-cols-min gap-2 overflow-x-auto">
  <div class="px-3 py-1">tag</div>
  <div class="px-3 py-1">another</div>
</div>`}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Great for tag pickers and chip inputs where items should
                    keep their intrinsic width.
                  </p>
                </div>
              </div>

              {/* Featured carousel with snap (auto-cols-fr + snap) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Featured carousel (snap + fr)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        'div class="grid grid-flow-col auto-cols-fr gap-4 snap-x snap-mandatory overflow-x-auto"'
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-x-auto snap-x snap-mandatory">
                  <div className="grid grid-flow-col auto-cols-fr gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="min-w-[320px] bg-slate-700 rounded p-4 text-slate-200 snap-start"
                      >
                        <div className="font-bold">Featured {i + 1}</div>
                        <div className="text-sm text-muted-foreground mt-2">
                          Larger hero style card for promotions
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-flow-col auto-cols-fr gap-4 snap-x snap-mandatory overflow-x-auto">
  <div class="min-w-[320px] snap-start">Item</div>
  ...
</div>`}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Combine{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-cols-fr
                    </code>{" "}
                    with{" "}
                    <code className="bg-slate-700 px-1 rounded">snap-x</code>{" "}
                    for a polished carousel UX that keeps cards equal width.
                  </p>
                </div>
              </div>

              {/* Variable portrait gallery (auto-cols-max) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Portrait gallery (variable widths)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("grid grid-flow-col auto-cols-max gap-3")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-x-auto">
                  <div className="grid grid-flow-col auto-cols-max gap-3 items-start">
                    <div className="w-[220px] h-40 bg-slate-700 rounded" />
                    <div className="w-[160px] h-28 bg-slate-700 rounded" />
                    <div className="w-[280px] h-36 bg-slate-700 rounded" />
                    <div className="w-[120px] h-20 bg-slate-700 rounded" />
                    <div className="w-[200px] h-32 bg-slate-700 rounded" />
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-flow-col auto-cols-max gap-3 overflow-x-auto">
  <div class="w-[220px]">Large</div>
  <div class="w-[160px]">Medium</div>
</div>`}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Use when content has varying intrinsic width (images,
                    variable text blocks). Columns size to the largest item in
                    each implicit column.
                  </p>
                </div>
              </div>

              {/* News ticker / timeline (auto-cols-min + aria-live) */}
              <div className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    News ticker / timeline (accessible)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        '<div class="grid grid-flow-col auto-cols-min gap-2 overflow-x-auto" role="list">...'
                      )
                    }
                  ></button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-x-auto">
                  <div
                    className="grid grid-flow-col auto-cols-min gap-3 items-center"
                    role="list"
                    aria-label="Breaking news ticker"
                  >
                    {[
                      "Breaking: Event A",
                      "Update: Service B",
                      "Alert: Item C",
                      "Note: Release D",
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 bg-slate-700 rounded text-slate-200 whitespace-nowrap"
                        role="listitem"
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    For live-updating content, use ARIA attributes (
                    <code className="bg-slate-700 px-1 rounded">
                      role="list"
                    </code>
                    ,{" "}
                    <code className="bg-slate-700 px-1 rounded">aria-live</code>
                    ) and make sure updates are announced politely (
                    <code className="bg-slate-700 px-1 rounded">
                      aria-live="polite"
                    </code>
                    ) if necessary.
                  </p>
                </div>
              </div>

              {/* Accessibility note (full width) */}
              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility reminder:</strong> &nbsp;the DOM order
                defines keyboard/tab order and screen-reader reading order.
                Visual layout with implicit columns is a rendering concern — if
                visual order and DOM order diverge, fix focus management, use
                clear labels/roles, or reorder DOM if keyboard navigation should
                match visual placement.
              </div>
            </div>
          </div>

          {/* Side-by-side comparison: auto-cols-min vs auto-cols-fr */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Side-by-side comparison</h2>
            <p className="text-muted-foreground">
              Quick visual contrast: how{" "}
              <code className="bg-slate-700 px-1 rounded">auto-cols-min</code>{" "}
              compares with{" "}
              <code className="bg-slate-700 px-1 rounded">auto-cols-fr</code>.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="font-semibold mb-3">
                  auto-cols-min (natural widths)
                </div>
                <div className="bg-slate-800 rounded p-3 overflow-x-auto">
                  <div className="grid grid-flow-col auto-cols-min gap-3 items-center">
                    {["Short", "A longer label", "XL label text", "Tiny"].map(
                      (t, i) => (
                        <div
                          key={i}
                          className="px-3 py-2 bg-slate-700 rounded whitespace-nowrap text-slate-200"
                        >
                          {t}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="font-semibold mb-3">
                  auto-cols-fr (equal fractional columns)
                </div>
                <div className="bg-slate-800 rounded p-3 overflow-x-auto">
                  <div className="grid grid-flow-col auto-cols-fr gap-3">
                    {["Short", "A longer label", "XL label text", "Tiny"].map(
                      (t, i) => (
                        <div
                          key={i}
                          className="min-w-[160px] p-2 bg-slate-700 rounded text-slate-200"
                        >
                          {t}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Use this comparison to pick the best utility for your scenario:
              natural content sizing vs equal columns.
            </div>
          </div>

          {/* Tips & Pitfalls */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Tips, pitfalls & best practices</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <strong>Min widths:</strong> add{" "}
                <code className="bg-slate-700 px-1 rounded">min-w-[]</code> or{" "}
                <code className="bg-slate-700 px-1 rounded">min-w-[120px]</code>{" "}
                to children to avoid extremely narrow columns.
              </li>
              <li>
                <strong>Horizontal scroll:</strong> when preventing wrap or when
                columns overflow, pair with{" "}
                <code className="bg-slate-700 px-1 rounded">
                  overflow-x-auto
                </code>
                .
              </li>
              <li>
                <strong>Snapping:</strong> combine with{" "}
                <code className="bg-slate-700 px-1 rounded">snap-x</code> /{" "}
                <code className="bg-slate-700 px-1 rounded">
                  snap-mandatory
                </code>{" "}
                for carousels.
              </li>
              <li>
                <strong>Performance:</strong> avoid extremely large numbers of
                implicit columns in a single scroll area — virtualize if you
                have hundreds of items.
              </li>
              <li>
                <strong>Accessibility:</strong> verify keyboard navigation and
                logical reading order — adjust DOM or focus when necessary.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
