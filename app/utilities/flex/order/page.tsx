"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type OrderValue =
  | "order-first"
  | "order-last"
  | "order-none"
  | "order-1"
  | "order-2"
  | "order-3"
  | "order-4"
  | "order-5"
  | "order-6"
  | "order-7"
  | "order-8"
  | "order-9"
  | "order-10"
  | "order-11"
  | "order-12";

const ORDER_OPTIONS: { value: OrderValue; label: string }[] = [
  { value: "order-first", label: "first (-9999)" },
  { value: "order-last", label: "last (9999)" },
  { value: "order-none", label: "none (0)" },
  { value: "order-1", label: "1" },
  { value: "order-2", label: "2" },
  { value: "order-3", label: "3" },
  { value: "order-4", label: "4" },
  { value: "order-5", label: "5" },
  { value: "order-6", label: "6" },
  { value: "order-7", label: "7" },
  { value: "order-8", label: "8" },
  { value: "order-9", label: "9" },
  { value: "order-10", label: "10" },
  { value: "order-11", label: "11" },
  { value: "order-12", label: "12" },
];

export default function FlexOrderPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied(null);
    }
  };

  // Playground: three items with independent orders
  const [orders, setOrders] = useState<OrderValue[]>([
    "order-none",
    "order-none",
    "order-none",
  ]);
  const setOrderFor = (index: number, value: OrderValue) =>
    setOrders((prev) => prev.map((o, i) => (i === index ? value : o)));

  const playgroundMarkup = `<div class="flex gap-4">
  <div class="${orders[0]} p-3 bg-slate-700 text-white rounded">Item A</div>
  <div class="${orders[1]} p-3 bg-slate-700 text-white rounded">Item B</div>
  <div class="${orders[2]} p-3 bg-slate-700 text-white rounded">Item C</div>
</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Flex Order</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Control visual order of flex items without changing the DOM —
              useful for toolbars, responsive layouts, and emphasis placement.
            </p>
          </div>

          {/* Utilities */}
          <div className="space-y-6 border-t border-border pt-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Order Utilities</h2>
              <p className="text-muted-foreground">
                Click to copy any utility class.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {ORDER_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => copyToClipboard(o.value)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group cursor-pointer"
                  aria-label={`Copy ${o.value}`}
                >
                  <div className="flex items-center justify-between">
                    <code className="text-black text-sm font-mono text-accent font-semibold">
                      {o.value}
                    </code>
                    <span className="text-xs text-muted-foreground">
                      {copied === o.value ? "Copied" : "Copy"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {o.label}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Playground */}
          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Pick order values for each item and watch the visual layout
              change. Remember: DOM order doesn't change.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-3 md:col-span-1">
                {/* Item A */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Item A order
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {ORDER_OPTIONS.map((o) => (
                      <button
                        key={o.value}
                        onClick={() => setOrderFor(0, o.value)}
                        aria-pressed={orders[0] === o.value}
                        className={`px-3 py-1 rounded border text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                          orders[0] === o.value
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Item B */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Item B order
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {ORDER_OPTIONS.map((o) => (
                      <button
                        key={o.value}
                        onClick={() => setOrderFor(1, o.value)}
                        aria-pressed={orders[1] === o.value}
                        className={`px-3 py-1 rounded border text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                          orders[1] === o.value
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Item C */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Item C order
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {ORDER_OPTIONS.map((o) => (
                      <button
                        key={o.value}
                        onClick={() => setOrderFor(2, o.value)}
                        aria-pressed={orders[2] === o.value}
                        className={`px-3 py-1 rounded border text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                          orders[2] === o.value
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Playground preview */}
              <div className="md:col-span-2 space-y-3">
                <div className="border border-border rounded-lg p-4 bg-card/30">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm font-semibold">Preview</div>
                      <div className="text-xs text-muted-foreground">
                        Visual order set via utilities
                      </div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => copyToClipboard(playgroundMarkup)}
                        className="text-xs px-3 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer"
                      >
                        Copy markup
                      </button>
                    </div>
                  </div>

                  <div className="rounded p-4 bg-slate-800 overflow-auto">
                    <div className={`flex gap-4 min-w-0`}>
                      <div
                        className={`${orders[0]} p-3 bg-slate-700 text-white rounded min-w-[96px] text-center`}
                      >
                        Item A
                      </div>
                      <div
                        className={`${orders[1]} p-3 bg-slate-700 text-white rounded min-w-[96px] text-center`}
                      >
                        Item B
                      </div>
                      <div
                        className={`${orders[2]} p-3 bg-slate-700 text-white rounded min-w-[96px] text-center`}
                      >
                        Item C
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Tip:</strong> numeric orders allow fine-grained
                    control. Prefer responsive orders (e.g.,{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      md:order-1
                    </code>
                    ) for breakpoint-based reordering.
                  </p>

                  <div className="mt-3 max-w-full overflow-auto rounded">
                    <CodeBlock code={playgroundMarkup} language="jsx" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Annotated demos */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Order Demos (annotated)</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* order-first / last */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-2 flex items-baseline justify-between">
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    order-first / order-last
                  </code>
                  <button
                    onClick={() => copyToClipboard("order-first order-last")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="flex gap-4 h-28 bg-slate-800 rounded p-3 items-center">
                  {/* DOM: A, B, C */}
                  <div className="order-2 px-4 py-2 bg-blue-500 rounded text-white">
                    A (order-2)
                  </div>
                  <div className="order-first px-4 py-2 bg-blue-400 rounded text-white">
                    B (order-first)
                  </div>
                  <div className="order-last px-4 py-2 bg-blue-300 rounded text-white">
                    C (order-last)
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  <strong>order-first</strong> and <strong>order-last</strong>{" "}
                  are extremes — useful when you need to visually pin a single
                  element to the start or end (e.g., promote a CTA).
                </p>
              </div>

              {/* numeric order */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-2 flex items-baseline justify-between">
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    order-1 / order-2 / order-3
                  </code>
                  <button
                    onClick={() => copyToClipboard("order-1 order-2 order-3")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="flex gap-4 h-28 bg-slate-800 rounded p-3 items-center">
                  <div className="order-2 px-4 py-2 bg-green-500 rounded text-white">
                    A (order-2)
                  </div>
                  <div className="order-1 px-4 py-2 bg-green-400 rounded text-white">
                    B (order-1)
                  </div>
                  <div className="order-3 px-4 py-2 bg-green-300 rounded text-white">
                    C (order-3)
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Numeric orders give predictable relative ordering. Items with
                  lower numeric order appear earlier visually.
                </p>
              </div>

              {/* responsive ordering */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-2 flex items-baseline justify-between">
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    flex + md:order-*
                  </code>
                  <button
                    onClick={() => copyToClipboard("md:order-1 md:order-2")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="flex gap-4 items-center">
                    <div className="order-3 md:order-1 px-3 py-2 bg-rose-500 rounded text-white">
                      Image (md:order-1)
                    </div>
                    <div className="order-1 md:order-2 px-3 py-2 bg-rose-400 rounded text-white flex-1">
                      Content (md:order-2)
                    </div>
                    <div className="order-2 md:order-3 px-3 py-2 bg-rose-300 rounded text-white">
                      Meta (md:order-3)
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Use responsive order utilities to rearrange components per
                  breakpoint (image above content on mobile, left of content on
                  desktop).
                </p>
              </div>

              {/* toolbar / CTA example */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-2 flex items-baseline justify-between">
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    order utilities for CTA placement
                  </code>
                  <button
                    onClick={() => copyToClipboard("order-last")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="flex gap-2 items-center">
                    <button className="px-3 py-1 bg-slate-700 text-white rounded">
                      Cancel
                    </button>
                    <button className="px-3 py-1 bg-slate-700 text-white rounded">
                      Draft
                    </button>
                    <button className="order-last px-3 py-1 bg-blue-600 text-white rounded">
                      Publish (order-last)
                    </button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-3">
                  Visual placement of a primary action (Publish) can be
                  controlled without changing DOM; check keyboard order and
                  focus after applying visual reorder.
                </p>
              </div>
            </div>
          </div>

          {/* Real-world examples — explained */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">
              Real-World Examples — explained
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 1. Header: avatar first visually on mobile, last on desktop */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex gap-4 items-start">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <div className="flex items-center gap-3">
                      <div className="order-1 md:order-3 w-10 h-10 bg-slate-700 rounded-full" />{" "}
                      {/* avatar */}
                      <div className="order-2 md:order-1 flex-1">
                        <div className="font-semibold text-white">
                          Site Title
                        </div>
                        <div className="text-sm text-slate-300">
                          Tagline or subtitle
                        </div>
                      </div>
                      <div className="order-3 md:order-2 px-2 py-1 bg-blue-600 text-white rounded text-sm">
                        CTA
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">
                        Header (avatar mobile-first)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("order-1 md:order-3")}
                        className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<!-- Avatar visually first on small screens, last on desktop -->
<div class="flex items-center">
  <div class="order-1 md:order-3">Avatar</div>
  <div class="order-2 md:order-1 flex-1">Title</div>
  <div class="order-3 md:order-2">CTA</div>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Bring avatar forward on small screens for quick
                        recognition while keeping the CTA prominent on desktop
                        via responsive orders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Product detail: image left on desktop, below on mobile (responsive orders) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex gap-4 items-start">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <div className="flex gap-2 items-start">
                      <div className="order-2 md:order-1 w-24 h-20 bg-slate-700 rounded" />{" "}
                      {/* image */}
                      <div className="order-1 md:order-2 flex-1">
                        <div className="font-semibold text-white">
                          Product title
                        </div>
                        <div className="text-sm text-slate-300">
                          Short description...
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">
                        Product detail (responsive reorder)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("order-2 md:order-1")}
                        className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<!-- Image below content on mobile, left on desktop -->
<div class="flex">
  <div class="order-2 md:order-1">Image</div>
  <div class="order-1 md:order-2">Content</div>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Swap media/content order per breakpoint so mobile users
                        see details first while desktop shows image beside
                        content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Table row: move action buttons visually to the end (order-last) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex gap-4 items-start">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <div className="flex gap-2 items-center">
                      <div className="flex-1 text-slate-200">Row content</div>
                      <div className="order-last flex gap-1">
                        <button className="px-2 py-1 bg-slate-700 text-white rounded text-xs">
                          Edit
                        </button>
                        <button className="px-2 py-1 bg-red-600 text-white rounded text-xs">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">
                        Table row actions (order-last)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("order-last")}
                        className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<!-- Keep action buttons visually at the end -->
<div class="flex">
  <div class="flex-1">Cell content</div>
  <div class="order-last">Actions</div>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Use{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          order-last
                        </code>{" "}
                        to visually pin actions to the end of a row while
                        keeping logical DOM order for screen readers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Stepper: bring current step to front visually (order-first) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex gap-4 items-start">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <div className="flex gap-2 items-center">
                      <div className="order-2 px-2 py-1 bg-slate-700 rounded text-white text-sm">
                        Step 1
                      </div>
                      <div className="order-first px-2 py-1 bg-blue-600 rounded text-white text-sm">
                        Current
                      </div>
                      <div className="order-3 px-2 py-1 bg-slate-700 rounded text-white text-sm">
                        Step 3
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">
                        Stepper (highlight current)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("order-first")}
                        className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<!-- Bring current step visually first -->
<div class="flex">
  <div class="order-2">Step 1</div>
  <div class="order-first">Current</div>
  <div class="order-3">Step 3</div>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Temporarily visually promote the current step with{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          order-first
                        </code>{" "}
                        while keeping a semantic step order in the DOM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Quick-actions bar: primary visually at the right but DOM-first for keyboard access */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex gap-4 items-start">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <div className="flex gap-2 items-center">
                      <button className="order-2 px-3 py-1 bg-slate-700 text-white rounded text-sm">
                        Secondary
                      </button>
                      <button className="order-2 px-3 py-1 bg-slate-700 text-white rounded text-sm">
                        Other
                      </button>
                      <button className="order-last px-3 py-1 bg-blue-600 text-white rounded text-sm">
                        Primary
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">
                        Quick actions (primary right)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("order-last")}
                        className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<!-- DOM: Primary first for keyboard, visually last for layout -->
<div class="flex">
  <button class="order-last">Primary</button>
  <button>Secondary</button>
  <button>Other</button>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Keep DOM order logical for keyboard users (Primary
                        first) but visually position it last using{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          order-last
                        </code>{" "}
                        so it appears on the right.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Promotional badge pinned to the start of list items */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="flex gap-4 items-start">
                  <div className="md:w-64 w-full flex-shrink-0 bg-slate-800 rounded p-3">
                    <div className="flex gap-2 items-center">
                      <div className="order-first px-2 py-1 bg-yellow-500 text-black rounded text-sm">
                        Promo
                      </div>
                      <div className="flex-1 text-slate-200">
                        List item title
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold">
                        Badge pinned (order-first)
                      </h3>
                      <button
                        onClick={() => copyToClipboard("order-first")}
                        className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                      >
                        Copy
                      </button>
                    </div>

                    <div className="mt-2">
                      <CodeBlock
                        code={`<!-- Promo badge visually at the start -->
<div class="flex">
  <div class="order-first">Promo</div>
  <div class="flex-1">Title</div>
</div>`}
                        language="jsx"
                      />
                      <p className="text-sm text-muted-foreground mt-2">
                        Use{" "}
                        <code className="bg-slate-700 px-1 rounded">
                          order-first
                        </code>{" "}
                        to visually pin promotional badges while preserving the
                        DOM structure for consistent reading order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accessibility note */}
              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility note:</strong> changing visual order with
                CSS doesn't change DOM order — screen readers & keyboard users
                follow DOM. If visual order must match keyboard/tab order,
                change DOM or ensure focus management/ARIA reflect the visual
                order.
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Summary tips</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Use numeric orders for predictable relative ordering.</li>
              <li>
                Prefer responsive order utilities (e.g.,{" "}
                <code className="bg-slate-700 px-1 rounded">md:order-1</code>)
                to rearrange per breakpoint.
              </li>
              <li>
                Test keyboard & screen reader behavior after applying order
                utilities.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
