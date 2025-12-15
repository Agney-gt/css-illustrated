"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type AutoRowsMode =
  | "auto-rows-min"
  | "auto-rows-max"
  | "auto-rows-fr"
  | "auto-rows-auto";

export default function GridAutoRowsPage() {
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

  const utilities: { className: AutoRowsMode; desc: string }[] = [
    { className: "auto-rows-min", desc: "Implicit rows sized to min-content" },
    { className: "auto-rows-max", desc: "Implicit rows sized to max-content" },
    { className: "auto-rows-fr", desc: "Implicit rows sized using fr units" },
    { className: "auto-rows-auto", desc: "Implicit rows sized by auto" },
  ];

  // playground controls
  const [autoRows, setAutoRows] = useState<AutoRowsMode>("auto-rows-min");
  const [gap, setGap] = useState("gap-4");
  // Use standard Tailwind heights so JIT/safelist issues are less likely
  const [containerHeight, setContainerHeight] = useState("h-96");
  const [items, setItems] = useState(8);

  const playgroundMarkup = `<div class="grid grid-flow-row ${autoRows} ${gap} ${containerHeight}">
  <!-- implicit rows created as you add items -->
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
            <h1 className="text-5xl font-bold">Grid — Auto Rows</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Control the size of implicitly-created grid rows. Useful for
              vertical galleries, timelines, chat lists, masonry-like layouts
              and full-height row distributions.
            </p>
          </div>

          {/* Quick comparison */}
          <div className="border border-border rounded-lg p-4 bg-card/20">
            <h2 className="text-2xl font-semibold">Quick comparison</h2>
            <div className="mt-3 grid md:grid-cols-4 gap-3 text-sm">
              <div className="p-3 bg-slate-200 rounded">
                <div className="font-medium">auto-rows-min</div>
                <div className="text-muted-foreground mt-1">
                  Rows size to smallest content — good for dynamic height items.
                </div>
              </div>
              <div className="p-3 bg-slate-200 rounded">
                <div className="font-medium">auto-rows-max</div>
                <div className="text-muted-foreground mt-1">
                  Rows size to largest content in that implicit row.
                </div>
              </div>
              <div className="p-3 bg-slate-200 rounded">
                <div className="font-medium">auto-rows-fr</div>
                <div className="text-muted-foreground mt-1">
                  Rows share available height using fractional units — good for
                  full-height splits.
                </div>
              </div>
              <div className="p-3 bg-slate-200 rounded">
                <div className="font-medium">auto-rows-auto</div>
                <div className="text-muted-foreground mt-1">
                  Default browser sizing (auto).
                </div>
              </div>
            </div>
          </div>

          {/* Utilities */}
          <div className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Auto Rows Utilities</h2>
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
              Toggle{" "}
              <code className="bg-slate-700 px-1 rounded">auto-rows-*</code>,
              gap, container height and item count. Buttons only — no selects.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Auto rows
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {(
                      [
                        "auto-rows-min",
                        "auto-rows-max",
                        "auto-rows-fr",
                        "auto-rows-auto",
                      ] as AutoRowsMode[]
                    ).map((m) => (
                      <button
                        key={m}
                        onClick={() => setAutoRows(m)}
                        className={`px-3 py-1 rounded border text-sm ${
                          autoRows === m
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {m.replace("auto-rows-", "")}
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
                    Container height
                  </label>
                  <div className="flex gap-2">
                    {[
                      { label: "large (h-96)", cls: "h-96" },
                      { label: "medium (h-64)", cls: "h-64" },
                      { label: "auto", cls: "h-auto" },
                    ].map((c) => (
                      <button
                        key={c.cls}
                        onClick={() => setContainerHeight(c.cls)}
                        className={`px-3 py-1 rounded border text-sm ${
                          containerHeight === c.cls
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
                        Live preview of implicit rows
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
                    className={`rounded p-4 bg-slate-800 overflow-auto ${containerHeight}`}
                    aria-live="polite"
                  >
                    <div
                      className={`grid grid-flow-row ${autoRows} ${gap} ${
                        autoRows === "auto-rows-auto" ? "" : ""
                      }`}
                    >
                      {Array.from({ length: items }).map((_, i) => (
                        <div
                          key={i}
                          className="p-3 bg-slate-700 rounded text-white min-h-[48px] flex items-center justify-center text-center"
                        >
                          Item {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Note:</strong>{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-min
                    </code>{" "}
                    sizes rows to the smallest content;{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-max
                    </code>{" "}
                    to the largest;{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-fr
                    </code>{" "}
                    distributes available height with fractions (useful for
                    equal-height split rows);{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-auto
                    </code>{" "}
                    uses default browser sizing.
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
              {/* Vertical news feed (auto-rows-min) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Vertical news feed (dynamic heights)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("grid grid-flow-row auto-rows-min gap-3")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto h-64">
                  <div className="grid grid-flow-row auto-rows-min gap-3">
                    <article className="p-3 bg-slate-700 rounded text-slate-200">
                      <div className="font-semibold">Short headline</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        One-liner summary
                      </div>
                    </article>
                    <article className="p-3 bg-slate-700 rounded text-slate-200">
                      <div className="font-semibold">
                        Longer headline with more detail to show row expansion
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        This story includes a longer summary that demonstrates
                        taller row sizing.
                      </div>
                    </article>
                    <article className="p-3 bg-slate-700 rounded text-slate-200">
                      <div className="font-semibold">Another update</div>
                    </article>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-flow-row auto-rows-min gap-3">\n  <article>Short</article>\n  <article>Long content — taller row</article>\n</div>`}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-min
                    </code>{" "}
                    for feeds where each item should take only required height.
                  </p>
                </div>
              </div>

              {/* Full-height split (auto-rows-fr) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Two-row split (equal rows)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "grid grid-flow-row auto-rows-fr gap-4 h-96"
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-hidden h-64">
                  <div className="grid grid-flow-row auto-rows-fr gap-4 h-full">
                    <div className="bg-slate-700 rounded p-4 text-slate-200 flex items-center justify-center">
                      Top pane (1fr)
                    </div>
                    <div className="bg-slate-700 rounded p-4 text-slate-200 flex items-center justify-center">
                      Bottom pane (1fr)
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="grid grid-flow-row auto-rows-fr h-[400px] gap-4">\n  <div>Pane 1</div>\n  <div>Pane 2</div>\n</div>`}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-fr
                    </code>{" "}
                    to split available height between implicit rows evenly.
                  </p>
                </div>
              </div>

              {/* Masonry-like with row-span + auto-rows (pseudo-masonry) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Masonry-like grid (row spans)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "grid grid-flow-row auto-rows-[8rem] gap-4"
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto h-64">
                  <div
                    className="grid grid-flow-row auto-rows-[8rem] gap-4"
                    style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
                  >
                    <div className="row-span-2 bg-slate-700 rounded p-3" />
                    <div className="row-span-1 bg-slate-700 rounded p-3" />
                    <div className="row-span-1 bg-slate-700 rounded p-3" />
                    <div className="row-span-2 bg-slate-700 rounded p-3" />
                    <div className="row-span-1 bg-slate-700 rounded p-3" />
                    <div className="row-span-1 bg-slate-700 rounded p-3" />
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-muted-foreground mt-2">
                    Simulate masonry with a fixed implicit row size and varied{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      row-span-*
                    </code>{" "}
                    values.
                  </p>
                </div>
              </div>
              
              {/* Admin activity list (compact) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Admin activity list (compact)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("grid grid-flow-row auto-rows-min gap-2")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto h-56">
                  <div className="grid grid-flow-row auto-rows-min gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 bg-slate-700 rounded text-slate-200"
                      >
                        <div className="w-8 h-8 bg-slate-600 rounded-full" />
                        <div className="flex-1">
                          <div className="font-semibold">
                            User {i + 1} — action
                          </div>
                          <div className="text-xs text-muted-foreground">
                            2 hours ago
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Info
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Compact rows using{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-min
                    </code>{" "}
                    keep lists dense and scannable.
                  </p>
                </div>
              </div>

              {/* Timeline with aria-live (auto-rows-min) */}
              <div className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Accessible timeline / log
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        '<div class="grid grid-flow-row auto-rows-min gap-3" role="list">...'
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto h-56">
                  <div
                    className="grid grid-flow-row auto-rows-min gap-3"
                    role="list"
                    aria-label="Event timeline"
                  >
                    <div
                      role="listitem"
                      className="p-3 bg-slate-700 rounded text-slate-200"
                    >
                      <div className="font-semibold">
                        2025-11-10 — Deployment
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Deployment to production succeeded.
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="p-3 bg-slate-700 rounded text-slate-200"
                    >
                      <div className="font-semibold">
                        2025-10-05 — Feature shipped
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    For live timelines, use ARIA roles and ensure updates are
                    announced when appropriate (e.g.,{" "}
                    <code className="bg-slate-700 px-1 rounded">aria-live</code>
                    ).
                  </p>
                </div>
              </div>


              {/* Chat with pinned input */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Chat list with pinned input
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        '<!-- messages: auto-rows-min; input fixed -->\n<div class="flex flex-col h-96">\n  <div class="overflow-auto">\n    <div class="grid grid-flow-row auto-rows-min gap-3">...</div>\n  </div>\n  <div class="flex-shrink-0 p-3">Input area</div>\n</div>'
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 h-64 flex flex-col">
                  <div className="overflow-auto mb-3">
                    <div className="grid grid-flow-row auto-rows-min gap-3">
                      <div className="p-2 bg-slate-700 rounded text-slate-200">
                        User: Hey — short message
                      </div>
                      <div className="p-3 bg-slate-700 rounded text-slate-200">
                        You: Longer reply that expands the row with more text to
                        show dynamic sizing.
                      </div>
                      <div className="p-2 bg-slate-700 rounded text-slate-200">
                        User: Another short message
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <input
                      className="w-full px-3 py-2 rounded border bg-slate-700 text-white"
                      placeholder="Type a message..."
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Keep the input fixed with{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      flex-shrink-0
                    </code>{" "}
                    while messages use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-min
                    </code>
                    .
                  </p>
                </div>
              </div>

              {/* Image rows with captions (variable heights) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Image list with captions
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("grid grid-flow-row auto-rows-max gap-3")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto h-64">
                  <div className="grid grid-flow-row auto-rows-max gap-3">
                    <figure className="bg-slate-700 rounded p-2">
                      <div className="w-full h-36 bg-slate-600 rounded" />
                      <figcaption className="mt-2 text-slate-200">
                        Short caption
                      </figcaption>
                    </figure>
                    <figure className="bg-slate-700 rounded p-2">
                      <div className="w-full h-56 bg-slate-600 rounded" />
                      <figcaption className="mt-2 text-slate-200">
                        Longer caption showing a taller row
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-max
                    </code>{" "}
                    when some items (images + captions) are taller and you want
                    rows sized for the tallest content.
                  </p>
                </div>
              </div>


              {/* Expandable FAQ / Accordion-like */}
              <div className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Expandable FAQ (rows expand)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("grid grid-flow-row auto-rows-min gap-3")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto h-64">
                  <div className="grid grid-flow-row auto-rows-min gap-3">
                    <details className="p-3 bg-slate-700 rounded text-slate-200">
                      <summary className="font-semibold cursor-pointer">
                        What is auto-rows-min?
                      </summary>
                      <div className="mt-2 text-sm text-muted-foreground">
                        It sizes rows to the smallest content height needed.
                      </div>
                    </details>
                    <details className="p-3 bg-slate-700 rounded text-slate-200">
                      <summary className="font-semibold cursor-pointer">
                        How to split equal height rows?
                      </summary>
                      <div className="mt-2 text-sm text-muted-foreground">
                        Use auto-rows-fr with an explicit container height.
                      </div>
                    </details>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">
                    Expandable rows naturally change height —{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      auto-rows-min
                    </code>{" "}
                    adapts to that.
                  </p>
                </div>
              </div>

              {/* Accessibility note (full width) */}
              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility reminder:</strong> implicit rows affect
                layout only — keyboard/tab order and screen reader reading order
                follow DOM order. If you visually reorder with spans or move
                focus, ensure ARIA/focus management matches the visual
                experience.
              </div>
            </div>
          </div>

          {/* Side-by-side comparison */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Side-by-side comparison</h2>
            <p className="text-muted-foreground">
              Compare{" "}
              <code className="bg-slate-700 px-1 rounded">auto-rows-min</code>{" "}
              and{" "}
              <code className="bg-slate-700 px-1 rounded">auto-rows-fr</code>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="font-semibold mb-3">
                  auto-rows-min (content-sized)
                </div>
                <div className="bg-slate-800 rounded p-3 overflow-auto h-48">
                  <div className="grid grid-flow-row auto-rows-min gap-3">
                    <div className="p-2 bg-slate-700 rounded text-slate-200">
                      Short
                    </div>
                    <div className="p-4 bg-slate-700 rounded text-slate-200">
                      A taller item with more text
                    </div>
                    <div className="p-2 bg-slate-700 rounded text-slate-200">
                      Small
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="font-semibold mb-3">
                  auto-rows-fr (equal share of height)
                </div>
                <div className="bg-slate-800 rounded p-3 overflow-hidden h-48">
                  <div className="grid grid-flow-row auto-rows-fr gap-3 h-full">
                    <div className="p-2 bg-slate-700 rounded text-slate-200 flex items-center justify-center">
                      Row 1
                    </div>
                    <div className="p-2 bg-slate-700 rounded text-slate-200 flex items-center justify-center">
                      Row 2
                    </div>
                    <div className="p-2 bg-slate-700 rounded text-slate-200 flex items-center justify-center">
                      Row 3
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              Pick <strong>auto-rows-min</strong> for content-driven rows, and{" "}
              <strong>auto-rows-fr</strong> when you need rows to share
              available height.
            </div>
          </div>

          {/* Tips & best practices */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Tips, pitfalls & best practices</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <strong>Explicit heights:</strong>{" "}
                <code className="bg-slate-700 px-1 rounded">auto-rows-fr</code>{" "}
                requires a container height (or parent height) to distribute
                space — otherwise rows collapse to zero fractional size.
              </li>
              <li>
                <strong>Masonry:</strong> To mimic masonry, set an explicit
                auto-rows size (e.g.,{" "}
                <code className="bg-slate-700 px-1 rounded">
                  auto-rows-[8rem]
                </code>
                ) and use{" "}
                <code className="bg-slate-700 px-1 rounded">row-span-*</code> on
                children.
              </li>
              <li>
                <strong>Use min widths/heights:</strong> combine with{" "}
                <code className="bg-slate-700 px-1 rounded">min-h-[]</code> for
                sensible minimum item heights.
              </li>
              <li>
                <strong>Virtualize long lists:</strong> for hundreds of items in
                a scrollable area, use virtualization to maintain performance.
              </li>
              <li>
                <strong>Accessibility:</strong> ensure logical DOM order and use
                ARIA roles/labels for lists/timelines.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
