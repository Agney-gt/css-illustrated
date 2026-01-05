"use client";

import { useState } from "react";
import CodeBlock from "@/app/utilities/components/code-block";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { RealWorldExamples } from "@/components/shared/real-world-examples";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

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
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
          <PageHero
            title="Grid — Auto Flow"
            description="You should reach for auto-flow utilities when you want to control how grid items automatically position themselves without explicit placement. Auto-flow determines the algorithm browsers use to fill empty grid cells — row-first (default), column-first, or dense packing for tighter layouts."
          />

          <MentalModelSection
            title="Understanding Grid Auto Flow Mechanics"
            description="Auto-flow is the browser's placement algorithm when you don't specify grid-item positions. It's a layout concern that determines coordinate assignment for automatically placed items."
            features={[
              "Default row flow places items left→right, then wraps to next row",
              "Column flow places items top→bottom, then wraps to next column",
              "Dense mode backfills gaps with later items (visual reordering)",
              "Flow algorithm respects explicit grid tracks (grid-template-areas)",
              "Implicit tracks are created automatically when items exceed defined tracks",
            ]}
            layerAssignment="Layout Layer - Controls automatic item positioning algorithm"
            browserBehavior="Browser evaluates each auto-placed item against current grid state, placing it according to flow direction and optionally filling gaps in dense mode"
          />

          <ComparisonTable
            title="Grid Flow Modes: Algorithm Behavior"
            columns={[
              "Flow Mode",
              "Algorithm",
              "Visual Order vs DOM",
              "Best Use Case",
            ]}
            rows={[
              {
                feature: "grid-flow-row",
                values: [
                  "Place left→right, wrap down",
                  "Matches DOM order",
                  "Predictable card grids",
                  "Standard layouts",
                ],
              },
              {
                feature: "grid-flow-col",
                values: [
                  "Place top→bottom, wrap right",
                  "Matches DOM order",
                  "Column-first galleries",
                  "Horizontal scrollers",
                ],
              },
              {
                feature: "grid-flow-row-dense",
                values: [
                  "Row flow + gap fill",
                  "May diverge from DOM",
                  "Tight masonry packing",
                  "Variable-height items",
                ],
              },
              {
                feature: "grid-flow-col-dense",
                values: [
                  "Column flow + gap fill",
                  "May diverge from DOM",
                  "Vertical space optimization",
                  "Dashboard widgets",
                ],
              },
            ]}
          />

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using dense mode without accessibility testing",
                reason:
                  "Dense mode changes visual order while preserving DOM order. Keyboard navigation and screen readers follow DOM order, creating mismatch between what users see and how they navigate.",
                example: `// Layout Layer: Dense mode reorders visually
<div class="grid grid-cols-3 grid-flow-row-dense gap-4">
  <div>Item 1 (DOM order: 1, visual order: 2)</div>
  <div>Item 2 (DOM order: 2, visual order: 1)</div>
</div>

// Layout Layer: Regular flow maintains order
<div class="grid grid-cols-3 grid-flow-row gap-4">
  <div>Item 1 (DOM order: 1, visual order: 1)</div>
  <div>Item 2 (DOM order: 2, visual order: 2)</div>
</div>`,
                level: "critical",
              },
              {
                title: "Auto-flow without explicit grid structure",
                reason:
                  "Auto-flow needs defined grid tracks to work predictably. Without explicit columns/rows, browsers create implicit tracks that may not match design intent.",
                example: `// Layout Layer: No structure defined
<div class="grid grid-flow-row">
  <!-- Browser creates single column implicitly -->
</div>

// Layout Layer: Explicit structure + auto-flow
<div class="grid grid-cols-3 grid-flow-row gap-4">
  <!-- Auto-flow works within defined 3-column structure -->
</div>`,
                level: "warning",
              },
              {
                title: "Column flow without width constraints",
                reason:
                  "grid-flow-col can create extremely wide containers. Column flow needs explicit width constraints or overflow handling.",
                example: `// Layout Layer: Unbounded width
<div class="grid grid-cols-4 grid-flow-col gap-4">
  <!-- Container width grows indefinitely -->
</div>

// Layout Layer: Bounded column flow
<div class="grid grid-cols-4 grid-flow-col gap-4 max-w-4xl overflow-x-auto">
  <!-- Container has maximum width, horizontal scroll if needed -->
</div>`,
                level: "warning",
              },
            ]}
          />

          <UtilityGrid
            title="Grid Auto Flow Utilities"
            items={[
              { cls: "grid-flow-row", desc: "Row flow (default)" },
              { cls: "grid-flow-col", desc: "Column flow" },
              { cls: "grid-flow-row-dense", desc: "Dense row packing" },
              { cls: "grid-flow-col-dense", desc: "Dense column packing" },
              { cls: "grid-cols-1", desc: "Single column" },
              { cls: "grid-cols-2", desc: "Two columns" },
              { cls: "grid-cols-3", desc: "Three columns" },
              { cls: "grid-cols-4", desc: "Four columns" },
              { cls: "grid-cols-6", desc: "Six columns" },
              { cls: "grid-cols-12", desc: "Twelve columns" },
            ]}
          />

          <MentalModelSection
            title="Understanding Grid Auto Flow"
            description="Grid auto-flow controls how items are automatically placed in the grid when you don't specify their position. It's the algorithm that decides where items go when you use grid-auto-flow properties."
            features={[
              "Items flow by default in row direction (left to right)",
              "Can flow column-wise (top to bottom) with grid-flow-col",
              "Dense mode packs items into gaps for tighter layouts",
              "Affects visual order but preserves DOM order for accessibility",
              "Works best with varying item sizes (masonry-style layouts)",
            ]}
            layerAssignment="Grid Placement Layer - Controls automatic item positioning algorithm"
            browserBehavior="Browser places items according to the flow algorithm, filling rows or columns and optionally backfilling gaps in dense mode"
          />

          <ComparisonTable
            title="Grid Flow Modes Comparison"
            columns={[
              "Flow Mode",
              "Placement Direction",
              "Best For",
              "Accessibility Notes",
            ]}
            rows={[
              {
                feature: "grid-flow-row",
                values: [
                  "Left→right, then wrap",
                  "Card grids, galleries",
                  "Predictable visual order",
                  "DOM and visual order match",
                ],
              },
              {
                feature: "grid-flow-col",
                values: [
                  "Top→bottom, then wrap",
                  "Horizontal scrollers",
                  "Column-first layouts",
                  "DOM and visual order match",
                ],
              },
              {
                feature: "grid-flow-row-dense",
                values: [
                  "Row flow + gap fill",
                  "Masonry photos",
                  "Variable height items",
                  "Visual order may differ from DOM",
                ],
              },
              {
                feature: "grid-flow-col-dense",
                values: [
                  "Column flow + gap fill",
                  "Dashboard widgets",
                  "Tight vertical packing",
                  "Visual order may differ from DOM",
                ],
              },
            ]}
          />

          <UtilityGrid
            title="Grid Auto Flow Utilities"
            items={[
              { cls: "grid-flow-row", desc: "Row flow (default)" },
              { cls: "grid-flow-col", desc: "Column flow" },
              { cls: "grid-flow-row-dense", desc: "Dense row flow" },
              { cls: "grid-flow-col-dense", desc: "Dense column flow" },
              { cls: "grid-cols-1", desc: "1 column grid" },
              { cls: "grid-cols-2", desc: "2 columns" },
              { cls: "grid-cols-3", desc: "3 columns" },
              { cls: "grid-cols-4", desc: "4 columns" },
              { cls: "grid-cols-6", desc: "6 columns" },
              { cls: "grid-cols-12", desc: "12 columns" },
            ]}
          />

          <CommonMistakesSection
            mistakes={[
              {
                title:
                  "Using dense mode without considering keyboard navigation",
                reason:
                  "Dense mode can change visual order while preserving DOM order, causing keyboard navigation to follow a different path than what users see visually.",
                example: `// Problem: Dense mode reorders visually but keyboard follows DOM
<div class="grid grid-cols-3 grid-flow-row-dense">
  <div>Item 1 (appears second visually)</div>
  <div>Item 2 (appears first visually)</div>
</div>`,
                level: "critical",
              },
              {
                title: "Assuming auto-flow fixes all responsive grid issues",
                reason:
                  "Auto-flow controls placement, not responsive behavior. You still need responsive grid-cols- utilities for proper breakpoints.",
                example: `// Problem: No responsive columns
<div class="grid grid-cols-4 grid-flow-row">
  <!-- 4 columns on mobile too small -->
</div>

// Solution: Responsive columns
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-row">
  <!-- Adapts to viewport -->
</div>`,
                level: "warning",
              },
              {
                title: "Using column flow without overflow handling",
                reason:
                  "Grid-flow-col can create very wide containers that overflow horizontally without proper sizing or overflow handling.",
                example: `// Problem: Column flow may overflow
<div class="grid grid-cols-3 grid-flow-col">
  <!-- Can exceed container width -->
</div>

// Solution: Add overflow or width constraints
<div class="grid grid-cols-3 grid-flow-col overflow-x-auto">
  <!-- Horizontal scroll if needed -->
</div>`,
                level: "warning",
              },
            ]}
          />

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

          <InteractiveChallenge
            title="The Swiss Cheese Layout"
            description="We have a 3-column grid. Because the 'Featured' item is 2 columns wide, it can't fit in the remaining space of the first row, so it drops down, leaving an ugly gap. Change the flow to `grid-flow-row-dense` to force the later items (3 & 4) to jump back up and fill that empty space."
            codeSnippet={`<div class="grid grid-cols-3 {input} gap-4 auto-rows-[80px]">
  <div class="bg-slate-700 rounded-xl">1</div>
  <div class="bg-slate-700 rounded-xl">2</div>

  <div class="col-span-2 row-span-2 bg-indigo-600 rounded-xl">
    Featured
  </div>

  <div class="bg-slate-700 rounded-xl">3</div>
  <div class="bg-slate-700 rounded-xl">4</div>
</div>`}
            options={[
              "grid-flow-row",
              "grid-flow-col",
              "grid-flow-col-dense",
              "grid-flow-row-dense",
            ]}
            correctOption="grid-flow-row-dense"
            renderPreview={(userClass) => {
              const isDense = userClass === "grid-flow-row-dense";
              return (
                <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
                  <div
                    className={`grid grid-cols-3 gap-4 w-full max-w-sm auto-rows-[80px] transition-all duration-500 relative ${userClass}`}
                  >
                    {/* Visualizing the Gap (Only visible when NOT dense) */}
                    {!isDense && userClass === "grid-flow-row" && (
                      <div className="absolute top-0 right-0 w-[31%] h-[80px] border-2 border-dashed border-red-400/50 bg-red-400/10 rounded-xl flex items-center justify-center pointer-events-none animate-pulse">
                        <span className="text-red-500 text-xs font-bold font-mono">
                          GAP
                        </span>
                      </div>
                    )}

                    <div className="bg-slate-700 dark:bg-slate-800 rounded-xl p-4 text-white flex items-center justify-center font-mono text-xl shadow-sm">
                      1
                    </div>
                    <div className="bg-slate-700 dark:bg-slate-800 rounded-xl p-4 text-white flex items-center justify-center font-mono text-xl shadow-sm">
                      2
                    </div>

                    {/* Featured Item */}
                    <div className="col-span-2 row-span-2 bg-indigo-600 rounded-xl p-4 text-white font-bold text-lg flex items-center justify-center shadow-lg z-10">
                      Featured
                    </div>

                    {/* Backfill Candidates */}
                    <div
                      className={`
                      rounded-xl p-4 text-white flex items-center justify-center font-mono text-xl shadow-sm transition-colors duration-500
                      ${
                        isDense
                          ? "bg-green-600 border-2 border-green-400"
                          : "bg-slate-700 dark:bg-slate-800"
                      }
                    `}
                    >
                      3
                      {isDense && (
                        <span className="ml-2 text-[10px] uppercase font-bold text-green-200">
                          (Moved)
                        </span>
                      )}
                    </div>
                    <div className="bg-slate-700 dark:bg-slate-800 rounded-xl p-4 text-white flex items-center justify-center font-mono text-xl shadow-sm">
                      4
                    </div>
                  </div>
                </div>
              );
            }}
          />

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

          <ExampleSection title="Real-World Auto Flow Patterns">
            <ExampleCard
              title="Photo Gallery with Dense Packing"
              description="Masonry-style photo layout using row-dense to minimize gaps while maintaining accessibility."
              code={`<!-- Layout Layer: Row-dense for tight packing -->
<div class="grid grid-cols-4 grid-flow-row-dense gap-3">
  <!-- Content Layer: Images with explicit dimensions -->
  <img class="w-full h-48 object-cover rounded" src="photo1.jpg" />
  <img class="w-full h-32 object-cover rounded" src="photo2.jpg" />
  <img class="w-full h-64 object-cover rounded" src="photo3.jpg" />
  <!-- Dense mode fills gaps automatically -->
</div>

<!-- Accessibility: Use semantic list if order matters -->
<ul role="list" class="grid grid-cols-4 grid-flow-row-dense gap-3">
  <li role="listitem"><img class="w-full h-48 object-cover rounded" src="photo1.jpg" /></li>
  <li role="listitem"><img class="w-full h-32 object-cover rounded" src="photo2.jpg" /></li>
</ul>`}
            >
              <div className="bg-slate-800 rounded p-3">
                <div className="grid grid-cols-4 grid-flow-row-dense gap-3">
                  <div className="h-48 bg-slate-700 rounded" />
                  <div className="h-32 bg-slate-700 rounded" />
                  <div className="h-64 bg-slate-700 rounded" />
                  <div className="h-28 bg-slate-700 rounded" />
                  <div className="h-36 bg-slate-700 rounded" />
                  <div className="h-20 bg-slate-700 rounded" />
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Dashboard Widgets (Column-Dense)"
              description="Dashboard with varying widget heights using column-dense to fill vertical gaps efficiently."
              code={`<!-- Layout Layer: Column-dense for vertical optimization -->
<div class="grid grid-cols-4 grid-flow-col-dense gap-4">
  <!-- Content Layer: Widgets with intrinsic heights -->
  <div class="bg-white rounded shadow p-4 h-24">Metric Card</div>
  <div class="bg-white rounded shadow p-4 h-48">Tall Chart</div>
  <div class="bg-white rounded shadow p-4 h-32">Medium Widget</div>
  <!-- Dense mode backfills automatically -->
</div>`}
            >
              <div className="bg-slate-800 rounded p-3 overflow-auto">
                <div className="grid grid-cols-4 grid-flow-col-dense gap-3">
                  <div className="h-24 bg-slate-700 rounded p-2 text-white text-xs">
                    Metric
                  </div>
                  <div className="h-48 bg-slate-700 rounded p-2 text-white text-xs">
                    Tall Chart
                  </div>
                  <div className="h-32 bg-slate-700 rounded p-2 text-white text-xs">
                    Widget
                  </div>
                  <div className="h-20 bg-slate-700 rounded p-2 text-white text-xs">
                    Short
                  </div>
                  <div className="h-36 bg-slate-700 rounded p-2 text-white text-xs">
                    Medium
                  </div>
                  <div className="h-28 bg-slate-700 rounded p-2 text-white text-xs">
                    Card
                  </div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Responsive Navigation (Column Flow)"
              description="Horizontal navigation using column flow with explicit width constraints and overflow handling."
              code={`<!-- Layout Layer: Column flow with width bounds -->
<nav class="grid grid-cols-4 grid-flow-col gap-4 max-w-4xl overflow-x-auto px-4">
  <!-- Content Layer: Navigation items -->
  <a href="#" class="px-4 py-2 bg-blue-500 text-white rounded">Home</a>
  <a href="#" class="px-4 py-2 bg-gray-200 text-gray-800 rounded">About</a>
  <a href="#" class="px-4 py-2 bg-gray-200 text-gray-800 rounded">Services</a>
  <!-- Horizontal scroll if overflow -->
</nav>`}
            >
              <div className="bg-slate-800 rounded p-3 overflow-auto">
                <div className="grid grid-cols-4 grid-flow-col gap-3">
                  <div className="px-3 py-2 bg-blue-600 rounded text-white text-xs text-center">
                    Home
                  </div>
                  <div className="px-3 py-2 bg-slate-600 rounded text-white text-xs text-center">
                    About
                  </div>
                  <div className="px-3 py-2 bg-slate-600 rounded text-white text-xs text-center">
                    Services
                  </div>
                  <div className="px-3 py-2 bg-slate-600 rounded text-white text-xs text-center">
                    Contact
                  </div>
                  <div className="px-3 py-2 bg-slate-600 rounded text-white text-xs text-center">
                    Portfolio
                  </div>
                  <div className="px-3 py-2 bg-slate-600 rounded text-white text-xs text-center">
                    Blog
                  </div>
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <TipsSection
            tips={[
              {
                bold: "Accessibility first:",
                text: "Dense mode changes visual order - test with keyboard and screen readers. Use semantic markup when order matters.",
              },
              {
                bold: "Explicit tracks:",
                text: "Always define grid-cols-* or grid-rows-* for predictable auto-flow behavior.",
              },
              {
                bold: "Width constraints:",
                text: "grid-flow-col needs width limits or overflow handling to prevent horizontal overflow.",
              },
              {
                bold: "Performance:",
                text: "Dense mode requires more placement calculations - avoid on very large grids.",
              },
              {
                bold: "Responsive flow:",
                text: "Consider different flow modes at different breakpoints (e.g., row-flow on mobile, col-flow on desktop).",
              },
            ]}
          />

          <div className="border border-yellow-500/30 rounded-lg p-6 bg-yellow-50/30 dark:bg-yellow-900/10">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-4">
              🎯 Pre-Ship Checklist
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-sm mb-3">
                  Layout Layer Verification
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" readOnly />
                    <span>Every grid has explicit columns/rows defined?</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" readOnly />
                    <span>Column flow has width constraints or overflow?</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" readOnly />
                    <span>Dense mode accessibility tested with keyboard?</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" readOnly />
                    <span>
                      Responsive breakpoints defined for different screen sizes?
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-3">
                  Content & Accessibility
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" readOnly />
                    <span>Semantic markup used for important content?</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" readOnly />
                    <span>Screen reader tested on dense layouts?</span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" readOnly />
                    <span>
                      Focus indicators visible on all interactive items?
                    </span>
                  </li>
                  <li className="flex items-start">
                    <input type="checkbox" className="mt-1 mr-2" readOnly />
                    <span>
                      Touch targets meet minimum size (44px) for mobile?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
