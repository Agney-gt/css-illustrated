"use client";

import React, { useState } from "react";
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

type GapMode = "gap" | "gap-x" | "gap-y";
type LayoutType = "flex" | "grid";

export default function GapPage() {
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

  const utilities = [
    { cls: "gap-0", desc: "No gap" },
    { cls: "gap-1", desc: "0.25rem gap" },
    { cls: "gap-2", desc: "0.5rem gap" },
    { cls: "gap-3", desc: "0.75rem gap" },
    { cls: "gap-4", desc: "1rem gap (default example)" },
    { cls: "gap-6", desc: "1.5rem gap" },
    { cls: "gap-8", desc: "2rem gap" },
    { cls: "gap-x-4", desc: "Horizontal gap only" },
    { cls: "gap-y-4", desc: "Vertical gap only" },
    { cls: "md:gap-6", desc: "Responsive gap at md breakpoint" },
  ];

  // playground state
  const [layout, setLayout] = useState<LayoutType>("flex");
  const [direction, setDirection] = useState<"row" | "col">("row");
  const [gapMode, setGapMode] = useState<GapMode>("gap");
  const [gapSize, setGapSize] = useState("gap-4");
  const [containerWidth, setContainerWidth] = useState("w-full");
  const [items, setItems] = useState(6);

  const computeClass = () => {
    const gapClass =
      gapMode === "gap" ? gapSize : `${gapMode}-${gapSize.replace("gap-", "")}`;
    const dirClass =
      layout === "flex" ? (direction === "row" ? "flex-row" : "flex-col") : "";
    const flowDirForGrid =
      layout === "grid" && direction === "col"
        ? "grid-flow-col auto-cols-auto"
        : "";
    return { gapClass, dirClass, flowDirForGrid };
  };

  const { gapClass, dirClass, flowDirForGrid } = computeClass();

  const playgroundMarkup =
    layout === "flex"
      ? `<div class="flex ${dirClass} ${gapClass} ${containerWidth}">\n  <div class="p-3 rounded bg-slate-700 text-white">Item 1</div>\n  <div class="p-3 rounded bg-slate-700 text-white">Item 2</div>\n  <div class="p-3 rounded bg-slate-700 text-white">Item 3</div>\n  ...\n</div>`
      : `<div class="grid ${flowDirForGrid} ${gapClass} ${containerWidth}">\n  <div class="p-3 rounded bg-slate-700 text-white">Item 1</div>\n  <div class="p-3 rounded bg-slate-700 text-white">Item 2</div>\n  <div class="p-3 rounded bg-slate-700 text-white">Item 3</div>\n  ...\n</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Gap"
            description="You should reach for gap utilities when you need consistent spacing between child elements in flex or grid containers. Gap creates symmetric space between items without margin collapse issues and works predictably across layout primitives."
          />

          <MentalModelSection
            title="Understanding Gap Mechanics"
            description="Gap is a layout primitive that creates space between flex/grid children without affecting container boundaries or causing margin collapse. It's a parent-controlled spacing system."
            features={[
              "Creates symmetric spacing between all children in container",
              "Applies only to direct flex or grid children",
              "Doesn't affect container outer margins or padding",
              "Prevents margin collapse between adjacent elements",
              "Works with responsive prefixes for breakpoint-specific spacing",
            ]}
            layerAssignment="Layout Layer - Controls inter-child spacing distribution"
            browserBehavior="Browser calculates gap space and distributes it between children in specified axes, reducing available content space accordingly"
          />

          <ComparisonTable
            title="Gap vs Margin: Spacing Approaches"
            columns={[
              "Property",
              "Scope",
              "Collapse Behavior",
              "Best For",
              "Responsive Control",
            ]}
            rows={[
              {
                feature: "gap-*",
                values: [
                  "Container children only",
                  "No collapse",
                  "Even spacing",
                  "gap-2 sm:gap-4",
                ],
              },
              {
                feature: "margin-*",
                values: [
                  "Individual elements",
                  "Can collapse",
                  "Asymmetric needs",
                  "m-2 sm:m-4",
                ],
              },
              {
                feature: "space-*",
                values: [
                  "Flex children with stack",
                  "No collapse",
                  "Stacked elements",
                  "space-y-2",
                ],
              },
            ]}
          />

          <CommonMistakesSection
            mistakes={[
              {
                title: "Using gap when asymmetric spacing is needed",
                reason:
                  "Gap creates symmetric spacing between all children. When items need different spacing on different sides, margins or wrapper elements are more appropriate.",
                example: `// Problem: Gap applies to all sides equally
<div class="flex gap-4">
  <div>Item with tight left spacing needed</div>
  <div>Item with normal spacing</div>
  <div>Item with wide right spacing needed</div>
</div>

// Solution: Use targeted spacing
<div class="flex">
  <div class="mr-2">Item with tight left spacing</div>
  <div class="mx-4">Item with normal spacing</div>
  <div class="ml-8">Item with wide right spacing</div>
</div>`,
                level: "warning",
              },
              {
                title: "Applying gap to non-layout containers",
                reason:
                  "Gap only works on display: flex, grid, or their inline variants. Applying gap to block containers has no effect.",
                example: `// Problem: Gap on block container (no effect)
<div class="gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Solution: Gap needs layout context
<div class="flex gap-4">  <!-- or grid -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
                level: "critical",
              },
              {
                title: "Relying on gap for edge spacing",
                reason:
                  "Gap creates space between children, not between container and viewport or parent. Edge spacing requires margin on the container itself.",
                example: `// Problem: No space at container edges
<section class="flex gap-4">
  <div>Content touches container edge</div>
  <div>Content touches container edge</div>
</section>

// Solution: Container padding for edge spacing
<section class="flex gap-4 p-6">  <!-- Layout + Shape -->
  <div>Content has breathing room</div>
  <div>Content has breathing room</div>
</section>`,
                level: "warning",
              },
            ]}
          />

          <UtilityGrid title="Gap Utilities" items={utilities} />

          {/* Utilities */}
          <div className="space-y-6 border-t border-border pt-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Gap utilities</h2>
              <p className="text-muted-foreground">
                Click a utility to copy it.
                <span className="block text-xs text-muted-foreground mt-1">
                  Tip: combine responsive prefixes like{" "}
                  <code className="bg-slate-700 px-1 rounded">
                    sm:gap-2 md:gap-6
                  </code>{" "}
                  for fluid spacing.
                </span>
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {utilities.map((u) => (
                <button
                  key={u.cls}
                  onClick={() => copyToClipboard(u.cls)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group"
                >
                  <div className="flex items-center justify-between">
                    <code className="text-black text-sm font-mono text-accent font-semibold">
                      {u.cls}
                    </code>
                    <span className="text-xs text-muted-foreground">
                      {copied === u.cls ? "Copied" : "Copy"}
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
              Toggle layout, direction, gap axis and size. Playground helps you
              see how gap affects layout and wrapping.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Layout
                  </label>
                  <div className="flex gap-2">
                    {(["flex", "grid"] as LayoutType[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => setLayout(l)}
                        className={`px-3 py-1 rounded border text-sm ${
                          layout === l
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Direction
                  </label>
                  <div className="flex gap-2">
                    {["row", "col"].map((d) => (
                      <button
                        key={d}
                        onClick={() => setDirection(d as any)}
                        className={`px-3 py-1 rounded border text-sm ${
                          direction === d
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Gap axis
                  </label>
                  <div className="flex gap-2">
                    {["gap", "gap-x", "gap-y"].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGapMode(g as GapMode)}
                        className={`px-3 py-1 rounded border text-sm ${
                          gapMode === g
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Gap size
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {["gap-1", "gap-2", "gap-3", "gap-4", "gap-6", "gap-8"].map(
                      (g) => (
                        <button
                          key={g}
                          onClick={() => setGapSize(g)}
                          className={`px-3 py-1 rounded border text-sm ${
                            gapSize === g
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-border"
                          }`}
                        >
                          {g.replace("gap-", "")}
                        </button>
                      )
                    )}
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
                    {[3, 4, 6, 8].map((n) => (
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
                        Live preview — gap class shown below
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
                    className={`rounded p-4 bg-slate-800 overflow-auto ${containerWidth}`}
                  >
                    <div
                      className={`${
                        layout === "grid" ? "grid" : "flex"
                      } ${flowDirForGrid} ${
                        layout === "flex" ? dirClass : ""
                      } ${
                        gapMode === "gap"
                          ? gapSize
                          : `${gapMode}-${gapSize.replace("gap-", "")}`
                      }`}
                    >
                      {Array.from({ length: items }).map((_, i) => (
                        <div
                          key={i}
                          className="p-3 rounded bg-slate-700 text-white min-w-[120px] text-center"
                        >
                          Item {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Note:</strong>{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      {gapMode === "gap"
                        ? gapSize
                        : `${gapMode}-${gapSize.replace("gap-", "")}`}
                    </code>{" "}
                    applies uniform spacing between children — it doesn't add
                    margin to the container or affect focus order. For
                    interactive hit targets, pair gap with padding on children.
                  </p>

                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>
            </div>
          </div>

          <InteractiveChallenge
            title="The Collapsed Cards"
            description="These product cards are jammed together with zero spacing between them (`gap-0`). This makes the layout look cluttered and unprofessional. Add `gap-4` to the grid container to give the cards room to breathe."
            codeSnippet={`<div class="grid grid-cols-3 {input} p-4 bg-slate-100 rounded-xl">
  <div class="bg-white p-4 rounded shadow-sm">
    <div class="h-20 bg-slate-200 rounded mb-2"></div>
    <h3 class="font-bold">Product A</h3>
  </div>

  <div class="bg-white p-4 rounded shadow-sm">
    <div class="h-20 bg-slate-200 rounded mb-2"></div>
    <h3 class="font-bold">Product B</h3>
  </div>

  <div class="bg-white p-4 rounded shadow-sm">
    <div class="h-20 bg-slate-200 rounded mb-2"></div>
    <h3 class="font-bold">Product C</h3>
  </div>
</div>`}
            options={["gap-0", "gap-4", "gap-x-8", "gap-y-4"]}
            correctOption="gap-4"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg overflow-hidden">
                <div
                  className={`grid grid-cols-3 ${userClass} p-6 bg-slate-200 dark:bg-slate-900/50 rounded-xl border border-slate-300 dark:border-slate-800 transition-all duration-500 w-full max-w-md`}
                >
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm flex flex-col min-w-0"
                    >
                      <div className="h-16 bg-slate-200 dark:bg-slate-700 rounded mb-3"></div>
                      <h3 className="font-bold text-slate-800 dark:text-white text-xs mb-1">
                        Item {i}
                      </h3>
                      <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-700/50 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Gap Patterns">
            {/* 1. Horizontal Nav Spacing */}
            <ExampleCard
              title="Horizontal Nav Spacing"
              copyText="flex gap-6 items-center"
              description="Use a larger gap to visually separate primary items. Gap keeps spacing consistent without margin hacks."
              code={`<nav class="flex gap-6 items-center">
  <div>Logo</div>
  <a href="#">Home</a>
  <a href="#">Docs</a>
  <a href="#">Pricing</a>
</nav>`}
            >
              <nav className="flex gap-6 items-center border border-white/10 p-3 rounded bg-slate-900/50">
                <div className="font-bold text-white">Logo</div>
                <div className="flex gap-6 text-sm">
                  <a className="text-slate-300 hover:text-white cursor-pointer">
                    Home
                  </a>
                  <a className="text-slate-300 hover:text-white cursor-pointer">
                    Docs
                  </a>
                  <a className="text-slate-300 hover:text-white cursor-pointer">
                    Pricing
                  </a>
                </div>
                <div className="ml-auto">
                  <button className="px-3 py-1 bg-blue-600 rounded text-white text-xs">
                    Sign in
                  </button>
                </div>
              </nav>
            </ExampleCard>

            {/* 2. Card Grid */}
            <ExampleCard
              title="Card Grid"
              copyText="grid grid-cols-3 gap-4"
              description="Gap controls spacing between cards. Use gap-x / gap-y to control axes independently."
              code={`<div class="grid grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>`}
            >
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-slate-700/50 border border-white/5 rounded p-3 text-slate-200"
                  >
                    <div className="font-semibold text-xs mb-1">
                      Card {i + 1}
                    </div>
                    <div className="text-[10px] text-slate-400 leading-tight">
                      Short description.
                    </div>
                  </div>
                ))}
              </div>
            </ExampleCard>

            {/* 3. Responsive Pricing Cards */}
            <ExampleCard
              title="Responsive Gaps"
              copyText="gap-4 sm:gap-6 md:gap-8"
              description="Responsive gap helps scale whitespace across breakpoints for a comfortable layout."
              code={`<div class="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
  <div class="p-4">Pro Plan</div>
  </div>`}
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="bg-slate-700/50 border border-white/5 rounded p-3 text-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-semibold text-xs mb-1">Pro</div>
                      <div className="text-[10px] text-slate-400">
                        Full Access
                      </div>
                    </div>
                    <div className="mt-2 font-bold text-white text-sm">
                      ₹499
                    </div>
                  </div>
                ))}
              </div>
            </ExampleCard>

            {/* 4. Avatar Stack (Negative Margin) */}
            <ExampleCard
              title="Avatar Stack"
              copyText="flex items-center -space-x-2"
              description={
                <span>
                  Gap cannot overlap items. For stacks, use{" "}
                  <code className="bg-white/10 px-1 rounded">-space-x-</code>{" "}
                  (negative margin) instead.
                </span>
              }
              code={`<div class="flex items-center -space-x-2">
  <img class="rounded-full ring-2 ring-white" src="..." />
  <img class="rounded-full ring-2 ring-white" src="..." />
</div>`}
            >
              <div className="flex items-center -space-x-3 pl-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-600 flex items-center justify-center text-xs font-bold text-white relative z-0 hover:z-10 transition-all hover:scale-110"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </ExampleCard>

            {/* 5. Toolbar (Full Width Wrapper) */}
            <div className="md:col-span-2">
              <ExampleCard
                title="Toolbar (Scrollable Row)"
                copyText="flex flex-nowrap gap-x-3 overflow-x-auto"
                description="Use gap-x for horizontal spacing in a tight toolbar. Pair with overflow-x-auto to handle small screens safely."
                code={`<div class="flex flex-nowrap gap-x-3 overflow-x-auto">
  <button>Action 1</button>
  <button>Action 2</button>
  </div>`}
              >
                <div className="flex flex-nowrap gap-x-3 overflow-x-auto pb-2 scrollbar-hide">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <button
                      key={i}
                      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 border border-white/5 rounded text-slate-200 whitespace-nowrap text-xs transition"
                    >
                      Action {i + 1}
                    </button>
                  ))}
                </div>
              </ExampleCard>
            </div>

            {/* 6. Accessibility Note */}
            <div className="md:col-span-2 mt-2 p-4 border border-blue-500/20 bg-blue-500/10 rounded-lg">
              <p className="text-sm text-black-200/80">
                <strong className="text-black-100 block mb-1">
                  Accessibility Reminder
                </strong>
                <em>gap</em> only affects visual spacing. It does not change DOM
                order or keyboard navigation order. Ensure interactive items
                have adequate touch target sizes and that spacing implies
                relationships correctly to screen readers.
              </p>
            </div>
          </ExampleSection>

          {/* Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Quick tips & best practices</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <strong>Prefer gap:</strong> use gap instead of margins on
                children — it keeps spacing predictable and avoids collapsed
                margins.
              </li>
              <li>
                <strong>Axis control:</strong> use{" "}
                <code className="bg-slate-700 px-1 rounded">gap-x-*</code> or{" "}
                <code className="bg-slate-700 px-1 rounded">gap-y-*</code> to
                control one axis only.
              </li>
              <li>
                <strong>Interactive targets:</strong> gap doesn't increase hit
                area — add padding to child elements for larger tappable
                regions.
              </li>
              <li>
                <strong>Responsive spacing:</strong> combine responsive gap
                classes (e.g.,{" "}
                <code className="bg-slate-700 px-1 rounded">md:gap-6</code>) to
                get different spacing at breakpoints.
              </li>
              <li>
                <strong>Overlap use-cases:</strong> if you need overlap
                (avatars, badges), gap isn't the tool — use negative margins or
                absolute positioning.
              </li>
              <li>
                <strong>Performance:</strong> gap is inexpensive and CSS-native;
                prefer it over many margin adjustments when spacing many items
                (easier to maintain).
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
