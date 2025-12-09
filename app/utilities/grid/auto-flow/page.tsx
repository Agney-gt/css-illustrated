"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type AutoFlow =
  | "grid-flow-row"
  | "grid-flow-col"
  | "grid-flow-row-dense"
  | "grid-flow-col-dense";

export default function GridAutoFlowPage() {
  const [flow, setFlow] = useState<AutoFlow>("grid-flow-row");
  const [cols, setCols] = useState<
    "grid-cols-2" | "grid-cols-3" | "grid-cols-4"
  >("grid-cols-3");
  const [copied, setCopied] = useState<string | null>(null);

  const playgroundMarkup = `<div class="grid ${cols} ${flow} gap-4">
  <div class="h-24">1</div>
  <div class="h-48">2 (tall)</div>
  <div class="h-20">3</div>
  <div class="h-36">4</div>
  <div class="h-28">5</div>
  <div class="h-32">6</div>
</div>`;

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      setCopied(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          {/* Header */}
          <header className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">Grid — Auto Flow</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Choose how auto-placed grid items fill the grid. Use{" "}
              <code className="bg-slate-700 px-1 rounded">grid-flow-row</code>{" "}
              (default) to fill rows,{" "}
              <code className="bg-slate-700 px-1 rounded">grid-flow-col</code>{" "}
              for horizontal flow, or add{" "}
              <code className="bg-slate-700 px-1 rounded">-dense</code>
              to pack items into gaps.
            </p>
          </header>
          {/* Playground + utilities (focused only on auto-flow) */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="border border-border rounded-lg p-4 bg-card/30">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-lg font-semibold">
                      Interactive Auto-Flow Playground
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Toggle modes to see how items are placed.
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => copyToClipboard(playgroundMarkup)}
                      className="px-3 py-1 text-sm rounded border border-border hover:bg-card/50 cursor-pointer"
                    >
                      Copy markup
                    </button>
                    <span className="text-xs text-muted-foreground">
                      {copied === playgroundMarkup ? "Copied" : ""}
                    </span>
                  </div>
                </div>

                {/* Controls: flow + simple column count */}
                <div className="flex gap-4 items-start mb-4 flex-wrap">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Auto flow
                    </div>
                    <div className="flex gap-2">
                      {(
                        [
                          "grid-flow-row",
                          "grid-flow-col",
                          "grid-flow-row-dense",
                          "grid-flow-col-dense",
                        ] as AutoFlow[]
                      ).map((f) => (
                        <button
                          key={f}
                          onClick={() => setFlow(f)}
                          className={`px-3 py-1 rounded text-sm border ${
                            flow === f
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-border"
                          }`}
                        >
                          {f.replace("grid-flow-", "")}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Columns
                    </div>
                    <div className="flex gap-2">
                      {(
                        ["grid-cols-2", "grid-cols-3", "grid-cols-4"] as const
                      ).map((c) => (
                        <button
                          key={c}
                          onClick={() => setCols(c)}
                          className={`px-3 py-1 rounded text-sm border ${
                            cols === c
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-border"
                          }`}
                        >
                          {c.replace("grid-cols-", "")}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Playground preview */}
                <div className="rounded p-4 bg-slate-800 overflow-auto">
                  <div className={`grid ${cols} ${flow} gap-4`}>
                    <div className="bg-slate-700 rounded p-3 h-24 flex items-center justify-center text-slate-200">
                      1
                    </div>
                    <div className="bg-slate-700 rounded p-3 h-48 flex items-center justify-center text-slate-200">
                      2 (tall)
                    </div>
                    <div className="bg-slate-700 rounded p-3 h-20 flex items-center justify-center text-slate-200">
                      3
                    </div>
                    <div className="bg-slate-700 rounded p-3 h-36 flex items-center justify-center text-slate-200">
                      4
                    </div>
                    <div className="bg-slate-700 rounded p-3 h-28 flex items-center justify-center text-slate-200">
                      5
                    </div>
                    <div className="bg-slate-700 rounded p-3 h-32 flex items-center justify-center text-slate-200">
                      6
                    </div>
                    <div className="bg-slate-700 rounded p-3 h-20 flex items-center justify-center text-slate-200">
                      7
                    </div>
                    <div className="bg-slate-700 rounded p-3 h-44 flex items-center justify-center text-slate-200">
                      8 (tall)
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>

              {/* Focused explanation */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold">What changes between modes?</h3>
                <ul className="list-disc ml-5 mt-2 text-sm text-muted-foreground space-y-2">
                  <li>
                    <strong>grid-flow-row</strong> — place items left→right into
                    rows (default placement).
                  </li>
                  <li>
                    <strong>grid-flow-col</strong> — place items top→bottom into
                    columns (useful for horizontal galleries when paired with{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      overflow-x-auto
                    </code>
                    ).
                  </li>
                  <li>
                    <strong>-dense</strong> — attempt to fill gaps with later
                    items; may change visual order (test keyboard/focus
                    behavior).
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick cheat & utilities list */}
            <aside className="space-y-4">
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold">Auto-flow utilities</h3>
                <div className="mt-3 grid gap-2">
                  {[
                    "grid-flow-row",
                    "grid-flow-col",
                    "grid-flow-row-dense",
                    "grid-flow-col-dense",
                  ].map((u) => (
                    <button
                      key={u}
                      onClick={() => copyToClipboard(u)}
                      className="flex items-center justify-between px-3 py-2 rounded border border-border hover:bg-card/50 text-sm cursor-pointer"
                    >
                      <code className="text-black font-mono text-accent">
                        {u}
                      </code>
                      <span className="text-xs text-muted-foreground">
                        {copied === u ? "Copied" : "Copy"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold">When to use</h3>
                <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                  <li>
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      grid-flow-row
                    </code>{" "}
                    for typical card grids.
                  </li>
                  <li>
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      grid-flow-col
                    </code>{" "}
                    for horizontal scrollers (cards-as-columns).
                  </li>
                  <li>
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">-dense</code> to
                    reduce gaps when items have variable sizes (be mindful of
                    visual order).
                  </li>
                </ul>
              </div>
            </aside>
          </section>
          {/* Visual examples section (auto-flow focused) */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Visual examples — auto flow</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Row flow example */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Row flow (default)</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-3 grid-flow-row gap-4">...</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="grid grid-cols-3 grid-flow-row gap-3">
                    <div className="h-24 bg-slate-700 rounded" />
                    <div className="h-48 bg-slate-700 rounded" />
                    <div className="h-20 bg-slate-700 rounded" />
                    <div className="h-36 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-32 bg-slate-700 rounded" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  Items placed into rows left → right, then wrap to the next row
                  by column count.
                </p>
              </div>

              {/* Column flow example */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Column flow</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-3 grid-flow-col gap-4">...</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto">
                  <div className="grid grid-cols-3 grid-flow-col gap-3">
                    <div className="h-24 bg-slate-700 rounded" />
                    <div className="h-48 bg-slate-700 rounded" />
                    <div className="h-20 bg-slate-700 rounded" />
                    <div className="h-36 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-32 bg-slate-700 rounded" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  Items flow top→bottom into columns, then continue left→right
                  across columns.
                </p>
              </div>

              {/* Dense packing example */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">
                    Row-dense (pack gaps)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-3 grid-flow-row-dense gap-4">...</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="grid grid-cols-3 grid-flow-row-dense gap-3">
                    <div className="h-20 bg-slate-700 rounded" />
                    <div className="h-48 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-32 bg-slate-700 rounded" />
                    <div className="h-24 bg-slate-700 rounded" />
                    <div className="h-40 bg-slate-700 rounded" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  Dense mode attempts to fill holes left by variable heights —
                  visually tighter but may reorder items.
                </p>
              </div>

              {/* Column-dense example */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">
                    Col-dense (horizontal packing)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-3 grid-flow-col-dense gap-4">...</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto">
                  <div className="grid grid-cols-3 grid-flow-col-dense gap-3">
                    <div className="h-24 bg-slate-700 rounded" />
                    <div className="h-44 bg-slate-700 rounded" />
                    <div className="h-20 bg-slate-700 rounded" />
                    <div className="h-36 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-32 bg-slate-700 rounded" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-2">
                  Column dense fills vertical gaps when items are auto-placed
                  into columns.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">
              Real-World Auto-Flow Examples — Visuals
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 1. Masonry-style photo feed (row-dense) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Masonry photo feed</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-3 grid-flow-row-dense gap-3">
  <img class="w-full rounded h-48 object-cover" src="..." />
  <img class="w-full rounded h-32 object-cover" src="..." />
  <img class="w-full rounded h-64 object-cover" src="..." />
  ...
</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  {/* visual */}
                  <div className="grid grid-cols-3 grid-flow-row-dense gap-3">
                    <div className="h-56 bg-slate-700 rounded" />
                    <div className="h-32 bg-slate-700 rounded" />
                    <div className="h-72 bg-slate-700 rounded" />
                    <div className="h-44 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-36 bg-slate-700 rounded" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Use{" "}
                  <code className="bg-slate-700 px-1 rounded">
                    grid-flow-row-dense
                  </code>{" "}
                  to pack differently-sized photos and reduce gaps (visual
                  masonry). Note: dense can change visual order.
                </p>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-cols-3 grid-flow-row-dense gap-3">
  <img class="w-full rounded h-48 object-cover" src="..." />
  <img class="w-full rounded h-32 object-cover" src="..." />
  <img class="w-full rounded h-64 object-cover" src="..." />
  <!-- more items -->
</div>`}
                  />
                </div>
              </div>

              {/* 2. Product pack with dense packing (row-dense) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">
                    Product tiles (tight pack)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-4 grid-flow-row-dense gap-4">
                        <div class="h-40">Featured</div>
                        <div class="h-28">Card</div>
                        <div class="h-36">Card</div>
                        ...
                        </div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="grid grid-cols-4 grid-flow-row-dense gap-3">
                    <div className="col-span-2 h-44 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-36 bg-slate-700 rounded" />
                    <div className="h-32 bg-slate-700 rounded" />
                    <div className="h-24 bg-slate-700 rounded" />
                    <div className="h-40 bg-slate-700 rounded" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Dense row packing helps fill the grid when cards vary in
                  height — useful for catalogue pages with promotions (but
                  review visual order).
                </p>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-cols-4 grid-flow-row-dense gap-4">
                      <div class="col-span-2 h-44">Featured product</div>
                      <div class="h-28">Product</div>
                      <div class="h-36">Product</div>
                      <!-- more -->
                      </div>`}
                  />
                </div>
              </div>

              {/* 3. News / Article feed (column flow) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">News / Article feed</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-3 grid-flow-col gap-4">
          <article class="h-40">Item 1</article>
          <article class="h-64">Item 2</article>
          <article class="h-36">Item 3</article>
          ...
        </div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto">
                  <div className="grid grid-cols-3 grid-flow-col gap-3">
                    <div className="h-36 bg-slate-700 rounded p-2" />
                    <div className="h-64 bg-slate-700 rounded p-2" />
                    <div className="h-44 bg-slate-700 rounded p-2" />
                    <div className="h-28 bg-slate-700 rounded p-2" />
                    <div className="h-40 bg-slate-700 rounded p-2" />
                    <div className="h-32 bg-slate-700 rounded p-2" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Use{" "}
                  <code className="bg-slate-700 px-1 rounded">
                    grid-flow-col
                  </code>{" "}
                  to present a horizontally-flowing article stream (good when
                  you want column-first filling for sideways layouts or
                  scrollers).
                </p>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-cols-3 grid-flow-col gap-4">
          <article class="h-40">Article 1</article>
          <article class="h-64">Article 2</article>
          <article class="h-36">Article 3</article>
          <!-- more -->
        </div>`}
                  />
                </div>
              </div>

              {/* 4. Portfolio thumbnails (row flow with responsive columns) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">
                    Portfolio thumbnails
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3">
                      <div class="h-32">Thumb</div>
                      <div class="h-32">Thumb</div>
                      ...
                      </div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3">
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Use regular row flow for predictable thumbnail grids and
                  switch column counts responsively for different breakpoints.
                </p>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-3">
                      <img class="h-28 w-full object-cover rounded" src="..." />
                      <!-- more thumbs -->
                      </div>`}
                  />
                </div>
              </div>

              {/* 5. Dashboard widgets (column-dense) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Dashboard widgets</h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="grid grid-cols-4 grid-flow-col-dense gap-4">
  <div class="h-24">Metric</div>
  <div class="h-44">Chart</div>
  <div class="h-32">Table</div>
  ...
</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto">
                  <div className="grid grid-cols-4 grid-flow-col-dense gap-3">
                    <div className="h-24 bg-slate-700 rounded" />
                    <div className="h-44 bg-slate-700 rounded" />
                    <div className="h-32 bg-slate-700 rounded" />
                    <div className="h-20 bg-slate-700 rounded" />
                    <div className="h-40 bg-slate-700 rounded" />
                    <div className="h-28 bg-slate-700 rounded" />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Column dense is handy when widgets have different heights and
                  you want vertical gaps filled across columns to use screen
                  real estate efficiently.
                </p>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-cols-4 grid-flow-col-dense gap-4">
  <div class="h-24">Small metric</div>
  <div class="h-44">Large chart</div>
  <div class="h-32">Table</div>
  <!-- more widgets -->
</div>`}
                  />
                </div>
              </div>

              {/* 6. Tag cloud / chips (wrap-friendly, fallback) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">
                    Tag cloud / chips (wrap fallback)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="flex flex-row flex-wrap gap-2">
  <span class="px-2 py-1 rounded">#design</span>
  <span class="px-2 py-1 rounded">#ux</span>
  <input class="flex-1 min-w-[120px]" placeholder="Add tag" />
</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="flex flex-row flex-wrap gap-2">
                    <span className="px-3 py-1 rounded bg-slate-700 text-white">
                      #ux
                    </span>
                    <span className="px-3 py-1 rounded bg-slate-700 text-white">
                      #design
                    </span>
                    <span className="px-3 py-1 rounded bg-slate-700 text-white">
                      #react
                    </span>
                    <span className="px-3 py-1 rounded bg-slate-700 text-white">
                      #tailwind
                    </span>
                    <input
                      className="flex-1 min-w-[140px] px-2 py-1 rounded border bg-slate-700 text-white"
                      placeholder="Add tag"
                    />
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  When grid isn't the right fit, combine flex-wrap for chip/tag
                  UIs — they wrap naturally and keep items accessible in DOM
                  order.
                </p>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="flex flex-row flex-wrap gap-2">
  <span class="px-2 py-1 rounded">#ux</span>
  <span class="px-2 py-1 rounded">#design</span>
  <input class="flex-1 min-w-[120px]" placeholder="Add tag" />
</div>`}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* Accessibility reminder (paste after examples) */}
          <div className="border border-border rounded-lg p-4 bg-card/10">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 8v4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-foreground">
                  Accessibility reminder
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Grid auto-flow (especially{" "}
                  <code className="bg-slate-700 px-1 rounded">-dense</code>)
                  changes visual placement but <strong>not DOM order</strong>.
                  Keyboard navigation, tab order and screen readers still follow
                  DOM order.
                </p>

                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Prefer semantic markup</strong> (e.g.,{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      &lt;ul role="list"&gt;
                    </code>{" "}
                    +{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      &lt;li role="listitem"&gt;
                    </code>
                    ) for collections.
                  </li>
                  <li>
                    <strong>If visual order must match focus:</strong> reorder
                    the DOM or manage focus programmatically (set focus to the
                    visually-first element after layout changes).
                  </li>
                  <li>
                    <strong>Announce dynamic changes:</strong> use{" "}
                    <code className="bg-slate-700 px-1 rounded">aria-live</code>{" "}
                    or accessible headings for updates to grids/galleries.
                  </li>
                </ul>

                <p className="text-xs text-muted-foreground mt-3">
                  Test with keyboard only (Tab/Shift+Tab), a screen reader
                  (NVDA/VoiceOver) and by resizing the viewport — dense
                  placement can be surprising if not considered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
