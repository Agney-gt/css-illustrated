"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import CodeBlock from "@/app/utilities/components/code-block";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

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
    <>
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
            "Direction affects how other flex properties behave",
          ]}
          layerAssignment="Layout Direction - Defines main axis and item flow direction"
          browserBehavior="Browser calculates main axis based on direction and positions items accordingly"
        />

        <CommonMistakesSection
          mistakes={[
            {
              title: "Using flex-direction: column for horizontal layouts",
              reason:
                "The opposite of intended layout, causing stacking instead of side-by-side arrangement",
              example: '<div class="flex flex-col">Horizontal nav items</div>',
              level: "critical",
            },
            {
              title: "Not testing keyboard order with reverse directions",
              reason:
                "Visual reordering breaks accessibility expectations for screen reader and keyboard users",
              example:
                '<div class="flex-row-reverse">Important content first in DOM</div>',
              level: "warning",
            },
            {
              title: "Missing responsive direction changes",
              reason:
                "Layouts don't adapt properly between mobile and desktop viewports",
              example: '<div class="flex-row">Stays horizontal on mobile</div>',
              level: "info",
            },
          ]}
        />

        <UtilityGrid
          title="Flex Direction Utilities"
          items={[
            { cls: "flex-row", desc: "Row direction (left to right)" },
            { cls: "flex-col", desc: "Column direction (top to bottom)" },
            { cls: "flex-row-reverse", desc: "Row reverse (right to left)" },
            { cls: "flex-col-reverse", desc: "Column reverse (bottom to top)" },
          ]}
        />

        {/* Interactive Playground */}
        <div className="space-y-4 border-t border-border pt-8">
          <h2 className="text-3xl font-bold">Interactive Playground</h2>
          <p className="text-muted-foreground">
            Try different directions + alignment to see how direction interacts
            with layout, order, and alignment.
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

        <InteractiveChallenge
          title="The Pricing Table"
          description="These pricing cards are meant to be displayed side-by-side for comparison. Currently, they are stacked vertically (`flex-col`), taking up too much vertical space. Switch the container to `flex-row` to lay them out horizontally."
          codeSnippet={`<div class="flex {input} gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="flex-1 bg-white p-6 rounded shadow-sm">
    <h3 class="font-bold">Basic</h3>
    <div class="text-2xl font-bold mt-2">$9</div>
  </div>

  <div class="flex-1 bg-white p-6 rounded shadow-sm border-2 border-indigo-500">
    <h3 class="font-bold text-indigo-600">Pro</h3>
    <div class="text-2xl font-bold mt-2">$19</div>
  </div>

  <div class="flex-1 bg-white p-6 rounded shadow-sm">
    <h3 class="font-bold">Enterprise</h3>
    <div class="text-2xl font-bold mt-2">$49</div>
  </div>
</div>`}
          options={["flex-col", "flex-row", "flex-col-reverse", "block"]}
          correctOption="flex-row"
          renderPreview={(userClass) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
              <div
                className={`flex ${userClass} gap-4 p-6 bg-slate-200 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-800 transition-all duration-500 max-w-full overflow-auto`}
              >
                {/* Card 1 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm min-w-[120px]">
                  <h3 className="font-bold text-slate-700 dark:text-slate-200">
                    Basic
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $9
                  </div>
                  <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-2 border-indigo-500 min-w-[120px] relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    POPULAR
                  </div>
                  <h3 className="font-bold text-indigo-600 dark:text-indigo-400">
                    Pro
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $19
                  </div>
                  <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>

                {/* Card 3 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm min-w-[120px]">
                  <h3 className="font-bold text-slate-700 dark:text-slate-200">
                    Enterprise
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $49
                  </div>
                  <div className="h-2 w-14 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>
              </div>
            </div>
          )}
        />

        <InteractiveChallenge
          title="The Pricing Table"
          description="These pricing cards are meant to be displayed side-by-side for comparison. Currently, they are stacked vertically (`flex-col`), taking up too much vertical space. Switch the container to `flex-row` to lay them out horizontally."
          codeSnippet={`<div class="flex {input} gap-4 p-4 bg-slate-100 rounded-xl">
  <div class="flex-1 bg-white p-6 rounded shadow-sm">
    <h3 class="font-bold">Basic</h3>
    <div class="text-2xl font-bold mt-2">$9</div>
  </div>

  <div class="flex-1 bg-white p-6 rounded shadow-sm border-2 border-indigo-500">
    <h3 class="font-bold text-indigo-600">Pro</h3>
    <div class="text-2xl font-bold mt-2">$19</div>
  </div>

  <div class="flex-1 bg-white p-6 rounded shadow-sm">
    <h3 class="font-bold">Enterprise</h3>
    <div class="text-2xl font-bold mt-2">$49</div>
  </div>
</div>`}
          options={["flex-row", "flex-col", "flex-col-reverse", "block"]}
          correctOption="flex-row"
          renderPreview={(userClass) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
              <div
                className={`flex ${userClass} gap-4 p-6 bg-slate-200 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-800 transition-all duration-500 max-w-full overflow-auto`}
              >
                {/* Card 1 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm min-w-[120px]">
                  <h3 className="font-bold text-slate-700 dark:text-slate-200">
                    Basic
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $9
                  </div>
                  <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>

                {/* Card 2 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border-2 border-indigo-500 min-w-[120px] relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    POPULAR
                  </div>
                  <h3 className="font-bold text-indigo-600 dark:text-indigo-400">
                    Pro
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $19
                  </div>
                  <div className="h-2 w-16 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>

                {/* Card 3 */}
                <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm min-w-[120px]">
                  <h3 className="font-bold text-slate-700 dark:text-slate-200">
                    Enterprise
                  </h3>
                  <div className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    $49
                  </div>
                  <div className="h-2 w-14 bg-slate-200 dark:bg-slate-700 rounded mt-4"></div>
                </div>
              </div>
            </div>
          )}
        />

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
                <code className="bg-slate-700 px-1 rounded">flex-row</code> when
                main content flows left→right.
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
                <code className="bg-slate-700 px-1 rounded">md:flex-row</code>)
                for mobile-first layouts.
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

        <ExampleSection title="Real-World Examples — Explained">
          {/* 1. Responsive navigation */}
          <ExampleCard
            title="Responsive Navigation"
            copyText="flex-col md:flex-row"
            description={
              <span>
                Stack on mobile (
                <code className="bg-white/10 px-1 rounded">flex-col</code>) and
                switch to{" "}
                <code className="bg-white/10 px-1 rounded">md:flex-row</code>
                on larger screens.
              </span>
            }
            code={`<nav class="flex md:flex-row flex-col items-center gap-4 p-4">
  <div class="font-bold">Logo</div>
  <div class="flex gap-4 flex-1 justify-center"> ... </div>
  <button>Sign In</button>
</nav>`}
          >
            {/* The Visual Part */}
            <nav className="flex flex-col md:flex-row items-center gap-2 border border-white/10 p-2 rounded">
              <div className="font-bold text-white">Logo</div>
              <div className="flex gap-2 flex-1 justify-center">
                <a className="text-sm text-slate-300 cursor-pointer">Home</a>
                <a className="text-sm text-slate-300 cursor-pointer">Contact</a>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                Sign In
              </button>
            </nav>
          </ExampleCard>

          {/* 2. Sidebar + content */}
          <ExampleCard
            title="Sidebar + Content"
            copyText="flex flex-col (sidebar)"
            description={
              <span>
                Fixed sidebar and{" "}
                <code className="bg-white/10 px-1 rounded">flex-1 min-w-0</code>
                for main so it shrinks without overflow.
              </span>
            }
            code={`<div class="flex">
  <aside class="flex-shrink-0 w-56 flex flex-col p-4"> ... </aside>
  <main class="flex-1 p-6">Main content</main>
</div>`}
          >
            <div className="flex gap-3 border border-white/10 p-2 rounded">
              <aside className="flex-shrink-0 w-24 flex flex-col gap-2 p-2 bg-slate-700/50 rounded text-white text-xs">
                <a>Link 1</a>
                <a>Link 2</a>
              </aside>
              <main className="flex-1 p-2 bg-slate-900/50 rounded text-slate-200 text-sm min-w-0">
                Main content area
              </main>
            </div>
          </ExampleCard>

          {/* 3. Chat / Timeline */}
          <ExampleCard
            title="Chat / Timeline"
            copyText="flex-col-reverse"
            description={
              <span>
                Use{" "}
                <code className="bg-white/10 px-1 rounded">
                  flex-col-reverse
                </code>
                to keep DOM chronological but display newest at bottom (or top).
              </span>
            }
            code={`<div class="flex flex-col-reverse gap-3" aria-live="polite" role="log">
  <div class="p-3 rounded bg-slate-700 text-white">Newest message</div>
  <div class="p-3 rounded bg-slate-700/90 text-white">Older message</div>
</div>`}
          >
            <div className="flex flex-col-reverse gap-2 max-h-40 overflow-auto border border-white/10 p-2 rounded">
              <div className="p-2 rounded bg-blue-600 text-white text-sm">
                Newest message (Top in code)
              </div>
              <div className="p-2 rounded bg-slate-700 text-white text-sm">
                Older message
              </div>
              <div className="p-2 rounded bg-slate-700/80 text-white text-sm">
                Oldest message
              </div>
            </div>
          </ExampleCard>

          {/* 4. Image gallery */}
          <ExampleCard
            title="Image Gallery"
            copyText="flex-row flex-wrap gap-3"
            description="Fixed item sizes + wrapping produce consistent gallery rows."
            code={`<div class="flex flex-row flex-wrap gap-3">
  <img class="w-48 h-32 object-cover rounded" src="/img/1.jpg" />
  <img class="w-48 h-32 object-cover rounded" src="/img/2.jpg" />
</div>`}
          >
            <div className="flex flex-row flex-wrap gap-3 border border-white/10 p-2 rounded">
              <div className="w-20 h-16 bg-slate-600 rounded flex-shrink-0" />
              <div className="w-20 h-16 bg-slate-600 rounded flex-shrink-0" />
              <div className="w-20 h-16 bg-slate-600 rounded flex-shrink-0" />
              <div className="w-20 h-16 bg-slate-600 rounded flex-shrink-0" />
            </div>
          </ExampleCard>

          {/* 5. Product card */}
          <ExampleCard
            title="Product Card"
            copyText="flex-col md:flex-row"
            description={
              <span>
                Stack media on mobile (
                <code className="bg-white/10 px-1 rounded">flex-col</code>),
                left-align on desktop.
              </span>
            }
            code={`<div class="flex flex-col md:flex-row gap-4 p-4 border rounded">
  <img class="w-full md:w-48 h-40 object-cover" src="..." />
  <div class="flex-1"> ... </div>
</div>`}
          >
            <div className="flex flex-col sm:flex-row gap-3 items-start border border-white/10 p-2 rounded bg-slate-900/30">
              <div className="w-full sm:w-20 h-20 bg-slate-600 rounded flex-shrink-0" />
              <div className="flex-1 text-slate-200 min-w-0">
                <div className="font-semibold text-sm">Product title</div>
                <div className="text-xs text-slate-400 mt-1">
                  Description text...
                </div>
                <button className="mt-2 px-2 py-1 bg-blue-600 text-white rounded text-xs">
                  Buy
                </button>
              </div>
            </div>
          </ExampleCard>

          {/* 6. Form layout */}
          <ExampleCard
            title="Form Layout"
            copyText="flex-col md:flex-row"
            description={
              <span>
                Labels above inputs on mobile, horizontal on desktop. Use{" "}
                <code className="bg-white/10 px-1 rounded">min-w-0</code> on
                container.
              </span>
            }
            code={`<div class="flex flex-col md:flex-row md:items-center gap-4">
  <label class="md:w-40">Full name</label>
  <input class="flex-1 w-full min-w-0" />
</div>`}
          >
            <form className="space-y-3 border border-white/10 p-2 rounded">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <label className="sm:w-20 text-xs text-slate-300">Email</label>
                <input
                  className="flex-1 w-full min-w-0 px-2 py-1 rounded border border-slate-600 bg-slate-800 text-white text-sm"
                  placeholder="user@example.com"
                />
              </div>
            </form>
          </ExampleCard>

          {/* 7. Toolbar */}
          <ExampleCard
            title="Toolbar / Actions"
            copyText="flex-row-reverse"
            description={
              <span>
                Use{" "}
                <code className="bg-white/10 px-1 rounded">
                  flex-row-reverse
                </code>{" "}
                to put primary actions on the right.
              </span>
            }
            code={`<div class="flex flex-row-reverse gap-2">
  <button class="bg-blue-600">Save</button>
  <button>Cancel</button>
</div>`}
          >
            <div className="flex flex-row-reverse gap-2 border border-white/10 p-2 rounded bg-slate-900/30">
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs">
                Save
              </button>
              <button className="text-white px-3 py-1 border border-slate-600 rounded text-xs">
                Cancel
              </button>
            </div>
          </ExampleCard>

          {/* 8. Breadcrumbs */}
          <ExampleCard
            title="Breadcrumbs"
            copyText="flex-row flex-wrap"
            description="Add wrap so long paths don't break layout on small screens."
            code={`<ol class="flex flex-row gap-2 flex-wrap text-sm">
  <li>Home</li>
  <li>/</li>
  <li>Products</li>
</ol>`}
          >
            <ol className="flex flex-row gap-2 flex-wrap items-center text-sm text-slate-300 border border-white/10 p-2 rounded">
              <li>Home</li>
              <li className="text-slate-500">/</li>
              <li>Products</li>
              <li className="text-slate-500">/</li>
              <li className="text-white font-medium">Shoes</li>
            </ol>
          </ExampleCard>
        </ExampleSection>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Accessibility note</h3>
          <p className="text-sm text-muted-foreground">
            Reversing visual order (
            <code className="bg-slate-700 px-1 rounded">*-reverse</code>)
            doesn't change DOM order — keyboard and screen reader users still
            navigate to original DOM order. If visual order must match keyboard
            order, rearrange DOM instead of relying only on reverse utilities.
          </p>
        </div>

        <TipsSection
          tips={[
            {
              bold: "Direction choice:",
              text: "Use flex-row for horizontal UI, flex-col for stacked UI",
            },
            {
              bold: "Responsive design:",
              text: "Prefer responsive switches like md:flex-row for mobile-first layouts",
            },
            {
              bold: "Reverse utilities:",
              text: "Use sparingly and test keyboard accessibility when using *-reverse",
            },
            {
              bold: "Writing modes:",
              text: "Consider international layouts where flex-start/flex-end may behave differently",
            },
            {
              bold: "Main axis:",
              text: "Direction determines main axis - affects justify-content behavior",
            },
          ]}
        />
      </div>
    </>
  );
}
