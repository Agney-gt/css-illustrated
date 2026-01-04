"use client";

import { useMemo, useState } from "react";
import FlexLayout from "./layout";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { ExampleSection, ExampleCard } from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { RealWorldExamples } from "@/components/cursor/real-world-examples";
import CodeBlock from "@/app/utilities/components/code-block";

type Direction =
  | "flex-row"
  | "flex-col"
  | "flex-row-reverse"
  | "flex-col-reverse";
type WrapMode = "flex-wrap" | "flex-wrap-reverse" | "flex-nowrap";

const ALL_UTILS = [
  "flex-row",
  "flex-col",
  "flex-row-reverse",
  "flex-col-reverse",
  "flex-wrap",
  "flex-wrap-reverse",
  "flex-nowrap",
  "flex-1",
  "flex-auto",
  "flex-initial",
  "flex-none",
  "flex-grow",
  "flex-grow-0",
  "flex-shrink",
  "flex-shrink-0",
  "basis-1/3",
  "basis-1/4",
  "basis-1/2",
  "order-first",
  "order-last",
  "order-1",
  "order-2",
];

export default function FlexOverviewPage() {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  // Playground state
  const [direction, setDirection] = useState<Direction>("flex-row");
  const [wrap, setWrap] = useState<WrapMode>("flex-wrap");
  const [gap, setGap] = useState("gap-4");
  const [align, setAlign] = useState("items-center");
  const [justify, setJustify] = useState("justify-start");
  const [itemBehavior, setItemBehavior] = useState<
    "flex-1" | "flex-none" | "flex-auto"
  >("flex-1");
  const [containerWidth, setContainerWidth] = useState("w-full");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied(null);
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_UTILS;
    return ALL_UTILS.filter(
      (u) => u.includes(q) || u.replace("-", " ").includes(q)
    );
  }, [query]);

  const playgroundMarkup = `<div class="flex ${direction} ${wrap} ${gap} ${align} ${justify} ${containerWidth}">
  <div class="${itemBehavior} p-3 rounded bg-slate-700 text-white text-center">Item 1</div>
  <div class="${itemBehavior} p-3 rounded bg-slate-700 text-white text-center">Item 2</div>
  <div class="${itemBehavior} p-3 rounded bg-slate-700 text-white text-center">Item 3</div>
</div>`;

return (
    <FlexLayout>
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
        {/* Header */}
        <PageHero 
          title="Flex — Overview"
          description="Core flex utilities, patterns and hands-on playground — learn how direction, wrap, grow/shrink and basis interact to build responsive UIs."
        />

        <MentalModelSection
          title="Understanding Flexbox Architecture"
          description="Flexbox is a one-dimensional layout model that provides powerful ways to arrange, align, and distribute space among items in a container."
          features={[
            "Main axis and cross-axis concepts for flexible layout control",
            "Direction-aware layout that adapts to writing modes",
            "Flexible sizing with grow, shrink, and basis properties",
            "Automatic space distribution and alignment capabilities",
            "Responsive behavior through wrap and flex direction"
          ]}
          layerAssignment="Layout Layer - Provides flexible one-dimensional layout system"
          browserBehavior="Browser calculates available space and distributes items based on flex properties, respecting container constraints"
        />

        <ComparisonTable
          title="Flex Properties Comparison"
          columns={["Property", "Main Axis", "Cross Axis", "Common Use Cases"]}
          rows={[
            {
              feature: "Direction",
              values: ["Controls main axis", "Affects alignment", "Row/Column layout", "Navs, sidebars"]
            },
            {
              feature: "Wrap",
              values: ["Line breaking", "Multi-line layout", "Overflow control", "Galleries, tags"]
            },
            {
              feature: "Grow/Shrink",
              values: ["Space distribution", "Scaling behavior", "Size adaptation", "Responsive grids"]
            },
            {
              feature: "Basis",
              values: ["Initial size", "Starting dimensions", "Width/height control", "Card layouts"]
            }
          ]}
        />

        <UtilityGrid
          title="Flex Utilities Overview"
          items={[
            { cls: "flex-row", desc: "Horizontal layout (default)" },
            { cls: "flex-col", desc: "Vertical stacking" },
            { cls: "flex-row-reverse", desc: "Horizontal reverse" },
            { cls: "flex-col-reverse", desc: "Vertical reverse" },
            { cls: "flex-wrap", desc: "Allow wrapping" },
            { cls: "flex-nowrap", desc: "No wrapping (default)" },
            { cls: "flex-1", desc: "Equal growing" },
            { cls: "flex-auto", desc: "Grow based on content" },
            { cls: "flex-none", desc: "No growing/shrinking" },
            { cls: "flex-grow", desc: "Allow growing" },
            { cls: "flex-shrink", desc: "Allow shrinking" },
            { cls: "basis-1/2", desc: "50% starting width" },
            { cls: "order-1", desc: "Change visual order" },
            { cls: "items-center", desc: "Cross-axis center" },
            { cls: "justify-between", desc: "Space between items" }
          ]}
        />

        <div className="flex gap-3 items-center flex-wrap">
          <div className="flex-1 md:flex-initial w-full md:w-96">
            <label className="sr-only">Search utilities</label>
            <input
              className="w-full px-3 py-2 rounded border bg-card/10 text-sm"
              placeholder="Search utilities (e.g. flex-col, flex-wrap, basis-1/3)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="ml-auto flex gap-2">
            <button
              onClick={() => copyToClipboard(playgroundMarkup)}
              className="px-3 py-1 text-sm rounded border border-border hover:bg-card/50 cursor-pointer"
            >
              Copy playground markup
            </button>
            <button
              onClick={() =>
                copyToClipboard(
                  `<div class="flex flex-row gap-4"><div class="flex-1">A</div><div class="w-24">B</div></div>`
                )
              }
              className="px-3 py-1 text-sm rounded border border-border hover:bg-card/50 cursor-pointer"
            >
              Copy quick example
            </button>
          </div>
        </div>

          {/* Utilities grid + cheat */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {/* Playground */}
              <div className="border border-border rounded-lg p-4 bg-card/30">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-lg font-semibold">
                      Interactive Playground
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Tweak direction, wrap, alignment and item sizing — live
                      preview below.
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {copied === playgroundMarkup ? "Copied!" : ""}
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-3 mb-3">
                  {/* direction */}
                  <div className="md:col-span-1">
                    <div className="text-xs text-muted-foreground mb-1">
                      Direction
                    </div>
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
                          onClick={() => setDirection(d)}
                          className={`px-2 py-1 rounded border text-sm ${
                            direction === d
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-border"
                          }`}
                        >
                          {d.replace("flex-", "")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* wrap */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Wrap
                    </div>
                    <div className="flex gap-2">
                      {(
                        [
                          "flex-wrap",
                          "flex-wrap-reverse",
                          "flex-nowrap",
                        ] as WrapMode[]
                      ).map((w) => (
                        <button
                          key={w}
                          onClick={() => setWrap(w)}
                          className={`px-2 py-1 rounded border text-sm ${
                            wrap === w
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-border"
                          }`}
                        >
                          {w.replace("flex-", "")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* gap */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Gap
                    </div>
                    <div className="flex gap-2">
                      {["gap-2", "gap-4", "gap-6"].map((g) => (
                        <button
                          key={g}
                          onClick={() => setGap(g)}
                          className={`px-2 py-1 rounded border text-sm ${
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

                  {/* alignment */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">
                      Align / Justify
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {[
                        { l: "items-start", t: "align-start" },
                        { l: "items-center", t: "align-center" },
                        { l: "items-end", t: "align-end" },
                        { l: "justify-start", t: "justify-start" },
                        { l: "justify-center", t: "justify-center" },
                        { l: "justify-end", t: "justify-end" },
                        { l: "justify-between", t: "between" },
                      ].map((opt) => {
                        const isAlign = opt.l.startsWith("items");
                        const active = isAlign
                          ? align === opt.l
                          : justify === opt.l;
                        return (
                          <button
                            key={opt.l}
                            onClick={() =>
                              isAlign ? setAlign(opt.l) : setJustify(opt.l)
                            }
                            className={`px-2 py-1 rounded border text-sm ${
                              active
                                ? "border-blue-500 bg-blue-500/10"
                                : "border-border"
                            }`}
                          >
                            {opt.t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* item sizing controls */}
                <div className="flex gap-3 items-center mb-4 flex-wrap">
                  <div className="text-xs text-muted-foreground mr-2">
                    Item behavior
                  </div>
                  {(["flex-1", "flex-auto", "flex-none"] as const).map((b) => (
                    <button
                      key={b}
                      onClick={() => setItemBehavior(b)}
                      className={`px-2 py-1 rounded border text-sm ${
                        itemBehavior === b
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      {b}
                    </button>
                  ))}

                  <div className="ml-auto flex gap-2">
                    <div className="text-xs text-muted-foreground self-center">
                      Container width
                    </div>
                    {[
                      { label: "full", cls: "w-full" },
                      { label: "md (640px)", cls: "w-[640px]" },
                      { label: "narrow (420px)", cls: "w-[420px]" },
                    ].map((c) => (
                      <button
                        key={c.cls}
                        onClick={() => setContainerWidth(c.cls)}
                        className={`px-2 py-1 rounded border text-sm ${
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

                {/* preview */}
                <div
                  className={`rounded p-4 bg-slate-800 overflow-auto ${containerWidth}`}
                >
                  <div
                    className={`flex ${direction} ${wrap} ${gap} ${align} ${justify}`}
                  >
                    <div
                      className={`${itemBehavior} p-3 rounded bg-slate-700 text-white text-center min-w-[120px]`}
                    >
                      Item 1
                    </div>
                    <div
                      className={`${itemBehavior} p-3 rounded bg-slate-700 text-white text-center min-w-[120px]`}
                    >
                      Item 2
                    </div>
                    <div
                      className={`${itemBehavior} p-3 rounded bg-slate-700 text-white text-center min-w-[120px]`}
                    >
                      Item 3
                    </div>
                    <div
                      className={`${itemBehavior} p-3 rounded bg-slate-700 text-white text-center min-w-[120px]`}
                    >
                      Item 4
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-xs text-muted-foreground mb-1">
                    Playground markup
                  </div>
                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>

              {/* searchable utilities listing */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold">Common flex utilities</div>
                    <div className="text-xs text-muted-foreground">
                      Click to copy a utility
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {filtered.length} results
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {filtered.map((u) => (
                    <button
                      key={u}
                      onClick={() => copyToClipboard(u)}
                      className="text-left rounded-lg p-2 border border-border hover:bg-card/50 text-sm flex items-center justify-between cursor-pointer"
                    >
                      <code className="text-black font-mono text-accent">{u}</code>
                      <span className="text-xs text-muted-foreground">
                        {copied === u ? "Copied" : "Copy"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* cheat-sheet / summary column */}
            <aside className="space-y-4">
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold">Quick cheat sheet</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Direction:</strong> flex-row (default) / flex-col /
                    *-reverse
                  </li>
                  <li>
                    <strong>Wrap:</strong> flex-wrap / flex-nowrap /
                    flex-wrap-reverse
                  </li>
                  <li>
                    <strong>Sizing:</strong> flex-1 / flex-auto / flex-none
                  </li>
                  <li>
                    <strong>Grow / Shrink:</strong> flex-grow / flex-grow-0 /
                    flex-shrink / flex-shrink-0
                  </li>
                  <li>
                    <strong>Basis:</strong> basis-1/3 / basis-1/2 / basis-full
                  </li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold">When to use</h3>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>Row: navs, toolbars, horizontal card rows.</li>
                  <li>Column: stacked sidebars, forms, vertical lists.</li>
                  <li>Wrap: tags, galleries, responsive grids.</li>
                  <li>
                    Reverse: visually reorder without changing DOM (test
                    keyboard).
                  </li>
                </ul>
              </div>
            </aside>
          </section>

          {/* Real-world visuals & annotated examples */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">
              Real-world examples (visuals + code)
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Responsive nav */}
              <ExampleCard
                title="Responsive navigation"
                code={`<nav class="flex md:flex-row flex-col items-center gap-4 p-4">
  <div class="font-bold">Logo</div>
  <div class="flex gap-4 flex-1 justify-center"> ... </div>
  <button>Sign In</button>
</nav>`}
                description={
                  <>
                    Stack on mobile with{" "}
                    <code className="bg-slate-700 px-1 rounded">flex-col</code>,
                    switch to{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      md:flex-row
                    </code>{" "}
                    for desktop so nav adapts without overflow.
                  </>
                }
              >
                <div className="bg-slate-800 rounded p-3">
                  <nav className="flex flex-col md:flex-row items-center gap-3">
                    <div className="font-bold text-white">Logo</div>
                    <div className="flex gap-3 flex-1 justify-center">
                      <a className="text-sm text-slate-200">Home</a>
                      <a className="text-sm text-slate-200">About</a>
                      <a className="text-sm text-slate-200">Contact</a>
                    </div>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                      Sign In
                    </button>
                  </nav>
                </div>
              </ExampleCard>

              {/* Sidebar + content */}
              <ExampleCard
                title="Sidebar + content"
                code={`<div class="flex">
  <aside class="flex-shrink-0 w-56 flex flex-col p-4"> ... </aside>
  <main class="flex-1 p-6">Main content</main>
</div>`}
                description={
                  <>
                    Sidebar uses{" "}
                    <code className="bg-slate-700 px-1 rounded">flex-col</code>{" "}
                    to stack links. Mark it{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      flex-shrink-0
                    </code>{" "}
                    so it keeps width.
                  </>
                }
              >
                <div className="bg-slate-800 rounded p-3">
                  <div className="flex">
                    <aside className="flex-shrink-0 w-44 flex flex-col gap-2 p-2 bg-slate-700 rounded text-white">
                      <a>Link 1</a>
                      <a>Link 2</a>
                      <a>Link 3</a>
                    </aside>
                    <main className="flex-1 p-3 ml-3 bg-slate-900 rounded text-slate-200">
                      Main content
                    </main>
                  </div>
                </div>
              </ExampleCard>

              {/* Product card */}
              <ExampleCard
                title="Product card (responsive)"
                code={`<div class="flex flex-col md:flex-row gap-4 p-4 border rounded">
  <img class="w-full md:w-48 h-40 object-cover rounded" src="/product.jpg" alt="Product" />
  <div class="flex-1"> ... </div>
</div>`}
                description={
                  <>
                    Stack image above content on mobile (
                    <code className="bg-slate-700 px-1 rounded">flex-col</code>)
                    and place left on desktop (
                    <code className="bg-slate-700 px-1 rounded">
                      md:flex-row
                    </code>
                    ).
                  </>
                }
              >
                <div className="bg-slate-800 rounded p-3">
                  <div className="flex flex-col md:flex-row gap-3 items-start">
                    <div className="w-full md:w-40 h-28 bg-slate-700 rounded" />
                    <div className="flex-1 text-slate-200">
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
              </ExampleCard>

              {/* Gallery */}
              <ExampleCard
                title="Image gallery (wrap)"
                code={`<div class="flex flex-row flex-wrap gap-3">
  <img class="w-48 h-32 object-cover rounded" src="/img/1.jpg" />
  <img class="w-48 h-32 object-cover rounded" src="/img/2.jpg" />
</div>`}
                description={
                  <>
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      flex-row flex-wrap
                    </code>{" "}
                    for photo galleries — combine with fixed widths or{" "}
                    <code className="bg-slate-700 px-1 rounded">basis-</code>{" "}
                    utilities for consistent rows.
                  </>
                }
              >
                <div className="bg-slate-800 rounded p-3">
                  <div className="flex flex-row flex-wrap gap-3">
                    <div className="w-36 h-24 bg-slate-700 rounded" />
                    <div className="w-36 h-24 bg-slate-700 rounded" />
                    <div className="w-36 h-24 bg-slate-700 rounded" />
                    <div className="w-36 h-24 bg-slate-700 rounded" />
                  </div>
                </div>
              </ExampleCard>

              {/* Chat / timeline */}
              <ExampleCard
                title="Chat / timeline (newest on top)"
                code={`<div class="flex flex-col-reverse gap-3" aria-live="polite" role="log">
  <div class="p-3 rounded bg-slate-700 text-white">Newest</div>
  <div class="p-3 rounded bg-slate-700/90 text-white">Older</div>
</div>`}
                description={
                  <>
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      flex-col-reverse
                    </code>{" "}
                    to show newest visually at top while keeping chronological
                    DOM order. Add{" "}
                    <code className="bg-slate-700 px-1 rounded">aria-live</code>{" "}
                    for polite updates.
                  </>
                }
              >
                <div className="bg-slate-800 rounded p-3">
                  <div className="flex flex-col-reverse gap-2 max-h-40 overflow-auto">
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
              </ExampleCard>

              {/* Toolbar / actions */}
              <ExampleCard
                title="Toolbar / actions (nowrap)"
                code={`<div class="flex flex-nowrap gap-2 overflow-x-auto">
  <button class="px-4 py-2">Action</button>
  ...
</div>`}
                description={
                  <>
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      flex-nowrap
                    </code>{" "}
                    for toolbars and pair with{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      overflow-x-auto
                    </code>{" "}
                    to allow horizontal scrolling.
                  </>
                }
              >
                <div className="bg-slate-800 rounded p-3">
                  <div className="overflow-x-auto">
                    <div className="flex flex-nowrap gap-3">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <button
                          key={i}
                          className="px-3 py-1 bg-slate-700 text-white rounded whitespace-nowrap text-sm"
                        >
                          Action {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </ExampleCard>

              {/* Breadcrumbs */}
              <ExampleCard
                title="Breadcrumbs (wrap)"
                code={`<ol class="flex flex-row gap-2 flex-wrap items-center text-sm">
  <li>Home</li><li>/</li><li>Products</li><li>/</li><li>Item</li>
</ol>`}
                description={
                  <>
                    Breadcrumbs read left→right — allow{" "}
                    <code className="bg-slate-700 px-1 rounded">flex-wrap</code>{" "}
                    so they wrap gracefully on small screens.
                  </>
                }
              >
                <div className="bg-slate-800 rounded p-3">
                  <nav aria-label="breadcrumb">
                    <ol className="flex flex-row gap-2 flex-wrap items-center text-sm text-slate-200">
                      <li>Home</li>
                      <li>/</li>
                      <li>Products</li>
                      <li>/</li>
                      <li>Cool sneakers</li>
                    </ol>
                  </nav>
                </div>
              </ExampleCard>

              {/* Tag input */}
              <ExampleCard
                title="Tag input / chips (wrapping)"
                code={`<div class="flex flex-row flex-wrap gap-2">
  <span class="px-2 py-1 rounded bg-slate-700 text-white">#ux</span>
  <input class="flex-1 min-w-[120px]" placeholder="Add tag" />
</div>`}
                description={
                  <>
                    Let chips wrap naturally; keep the input with{" "}
                    <code className="bg-slate-700 px-1 rounded">min-w</code> so
                    it doesn't collapse.
                  </>
                }
              >
                <div className="bg-slate-800 rounded p-3">
                  <div className="flex flex-row flex-wrap gap-2 items-center">
                    <span className="px-2 py-1 rounded bg-slate-700 text-white">
                      #ux
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-700 text-white">
                      #design
                    </span>
                    <input
                      className="flex-1 min-w-[120px] px-2 py-1 rounded border bg-slate-700 text-white"
                      placeholder="Add tag"
                    />
                  </div>
                </div>
              </ExampleCard>
            </div>

            <div className="text-sm text-muted-foreground">
              <strong>Accessibility note:</strong> Visual reordering (order /
              *-reverse) does not change DOM order — keyboard and screen-reader
              users follow DOM. If visual order must match keyboard order,
              change the DOM or manage focus/ARIA.
            </div>
          </section>

          <TipsSection 
            tips={[
              { bold: "Responsive switches:", text: "Use md:flex-row/flex-col for mobile-first design patterns" },
              { bold: "Combine properties:", text: "Use basis- with flex-grow for predictable card widths" },
              { bold: "Wrap handling:", text: "Use flex-wrap for tags/galleries with fixed widths to maintain rows" },
              { bold: "Order testing:", text: "Always test keyboard navigation when using *-reverse utilities" },
              { bold: "Performance:", text: "Flexbox is GPU-accelerated - prefer over manual calculations" }
            ]}
          />
        </div>
      </FlexLayout>
  );
}


