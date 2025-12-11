"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type ScaleClass =
  | "scale-50"
  | "scale-75"
  | "scale-90"
  | "scale-100"
  | "scale-105"
  | "scale-110"
  | "scale-125"
  | "scale-150";

type OriginClass =
  | "origin-top-left"
  | "origin-top"
  | "origin-top-right"
  | "origin-left"
  | "origin-center"
  | "origin-right"
  | "origin-bottom-left"
  | "origin-bottom"
  | "origin-bottom-right";

type DurationClass =
  | "duration-75"
  | "duration-150"
  | "duration-300"
  | "duration-500";
type EasingClass = "ease-linear" | "ease-in" | "ease-out" | "ease-in-out";

export default function ScalePage() {
  const [copied, setCopied] = useState<string | null>(null);

  // Playground state
  const [scale, setScale] = useState<ScaleClass>("scale-100");
  const [origin, setOrigin] = useState<OriginClass>("origin-center");
  const [duration, setDuration] = useState<DurationClass>("duration-150");
  const [easing, setEasing] = useState<EasingClass>("ease-in-out");
  const [hoverOnly, setHoverOnly] = useState(false);

  const scaleMap: Record<ScaleClass, number> = {
    "scale-50": 0.5,
    "scale-75": 0.75,
    "scale-90": 0.9,
    "scale-100": 1,
    "scale-105": 1.05,
    "scale-110": 1.1,
    "scale-125": 1.25,
    "scale-150": 1.5,
  };

  const scaleUtilities: { cls: ScaleClass; desc: string }[] = [
    { cls: "scale-50", desc: "Tiny (50%) — utility for strong de-emphasis" },
    { cls: "scale-75", desc: "Small (75%) — compact thumbnails" },
    { cls: "scale-90", desc: "Slight shrink (90%) — subtle pressed state" },
    { cls: "scale-100", desc: "Default (100%) — baseline" },
    {
      cls: "scale-105",
      desc: "Subtle pop (105%) — recommended for micro-hover",
    },
    { cls: "scale-110", desc: "Noticeable pop (110%) — clear emphasis" },
    { cls: "scale-125", desc: "Prominent (125%) — spotlight or featured" },
    {
      cls: "scale-150",
      desc: "Bold (150%) — use sparingly for strong callouts",
    },
  ];

  const origins: OriginClass[] = [
    "origin-top-left",
    "origin-top",
    "origin-top-right",
    "origin-left",
    "origin-center",
    "origin-right",
    "origin-bottom-left",
    "origin-bottom",
    "origin-bottom-right",
  ];

  const durations: DurationClass[] = [
    "duration-75",
    "duration-150",
    "duration-300",
    "duration-500",
  ];
  const easings: EasingClass[] = [
    "ease-linear",
    "ease-in",
    "ease-out",
    "ease-in-out",
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied(null);
    }
  };

  const playgroundMarkup = `<div class="transform ${
    hoverOnly ? "hover:scale-105" : ""
  } ${origin} ${duration} ${easing}">\n  Preview content\n</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Transform — Scale</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Scale controls let you create emphasis, hover interactions and
              motion rhythm. Use subtle scales for micro-interactions and larger
              scales for strong emphasis — but always consider accessibility,
              layout stability and visual hierarchy.
            </p>
          </div>

          {/* At-a-glance guidance */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-semibold">Quick guidance</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded bg-card/20">
                <div className="font-semibold">Micro-interactions</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Use{" "}
                  <code className="bg-slate-700 px-1 rounded">scale-105</code>–
                  <code className="bg-slate-700 px-1 rounded">scale-110</code>{" "}
                  with short duration (
                  <code className="bg-slate-700 px-1 rounded">duration-75</code>
                  –
                  <code className="bg-slate-700 px-1 rounded">
                    duration-150
                  </code>
                  ) for hover/press feedback.
                </div>
              </div>

              <div className="p-4 rounded bg-card/20">
                <div className="font-semibold">Emphasis</div>
                <div className="text-sm text-muted-foreground mt-2">
                  For spotlighting use{" "}
                  <code className="bg-slate-700 px-1 rounded">scale-125</code>{" "}
                  or{" "}
                  <code className="bg-slate-700 px-1 rounded">scale-150</code>{" "}
                  together with shadow and a slightly longer duration (
                  <code className="bg-slate-700 px-1 rounded">
                    duration-300
                  </code>
                  ).
                </div>
              </div>

              <div className="p-4 rounded bg-card/20">
                <div className="font-semibold">Stability</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Prefer transform-based motion (no layout reflow). Use{" "}
                  <code className="bg-slate-700 px-1 rounded">transform</code> +{" "}
                  <code className="bg-slate-700 px-1 rounded">will-change</code>{" "}
                  when necessary to improve GPU compositing.
                </div>
              </div>
            </div>
          </section>

          {/* Utilities */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Scale utilities</h2>
              <p className="text-muted-foreground">
                Click a utility to copy the class.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {scaleUtilities.map((s) => (
                <button
                  key={s.cls}
                  onClick={() => copyToClipboard(s.cls)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group cursor-pointer"
                  aria-label={`Copy ${s.cls}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-10 rounded-sm flex items-center justify-center bg-slate-700 text-white transform`}
                        style={{ transform: `scale(${scaleMap[s.cls]})` }}
                        aria-hidden
                      >
                        {Math.round(scaleMap[s.cls] * 100)}%
                      </div>

                      <div>
                        <code className="text-black text-sm font-mono text-accent font-semibold">
                          {s.cls}
                        </code>
                        <div className="text-xs text-muted-foreground">
                          {s.desc}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {copied === s.cls ? "Copied" : "Copy"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Playground */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive playground</h2>
            <p className="text-muted-foreground">
              Adjust scale, origin, timing and whether the scale is hover-only.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Scale
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {scaleUtilities.map((s) => (
                      <button
                        key={s.cls}
                        onClick={() => setScale(s.cls)}
                        className={`px-3 py-1 rounded border text-sm ${
                          scale === s.cls
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {s.cls.replace("scale-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Origin
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {origins.map((o) => (
                      <button
                        key={o}
                        onClick={() => setOrigin(o)}
                        className={`px-3 py-1 rounded border text-sm ${
                          origin === o
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {o.replace("origin-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Duration
                  </label>
                  <div className="flex gap-2">
                    {durations.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={`px-3 py-1 rounded border text-sm ${
                          duration === d
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {d.replace("duration-", "")}ms
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Easing
                  </label>
                  <div className="flex gap-2">
                    {easings.map((e) => (
                      <button
                        key={e}
                        onClick={() => setEasing(e)}
                        className={`px-3 py-1 rounded border text-sm ${
                          easing === e
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {e.replace("ease-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Extras
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setHoverOnly((v) => !v)}
                      className={`px-3 py-1 rounded border text-sm ${
                        hoverOnly
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      Hover-only
                    </button>

                    <button
                      onClick={() =>
                        copyToClipboard(
                          `${scale} ${origin} ${duration} ${easing} ${
                            hoverOnly ? "hover-only" : ""
                          }`
                        )
                      }
                      className="px-3 py-1 rounded border text-sm border-border cursor-pointer"
                    >
                      Copy classes
                    </button>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="md:col-span-2 space-y-3">
                <div className="border border-border rounded-lg p-4 bg-card/30">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Playground</div>
                      <div className="text-xs text-muted-foreground">
                        Live preview
                      </div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div className="text-xs text-muted-foreground">
                        Markup
                      </div>
                      <button
                        onClick={() => copyToClipboard(playgroundMarkup)}
                        className="text-xs px-3 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer"
                      >
                        Copy markup
                      </button>
                    </div>
                  </div>

                  <div className="rounded p-4 bg-slate-800">
                    <div
                      className={`mb-4 transform ${
                        hoverOnly ? `hover:${scale}` : scale
                      } ${origin} ${duration} ${easing} p-6 bg-slate-700 text-slate-100 inline-block`}
                      style={{ transform: `scale(${scaleMap[scale]})` }}
                    >
                      <strong className="block">Scale preview</strong>
                      <span className="text-sm">
                        {scale} — origin: {origin.replace("origin-", "")}
                      </span>
                    </div>

                    <div className="flex gap-3 flex-wrap items-center">
                      <div
                        className={`w-16 h-16 rounded ${
                          hoverOnly ? `hover:${scale}` : scale
                        } flex items-center justify-center bg-slate-700 text-white`}
                        style={{ transform: `scale(${scaleMap[scale]})` }}
                      >
                        AV
                      </div>

                      <button
                        className={`px-4 py-2 ${
                          hoverOnly ? `hover:${scale}` : scale
                        } rounded bg-blue-600 text-white`}
                        style={{ transform: `scale(${scaleMap[scale]})` }}
                      >
                        Primary
                      </button>

                      <div
                        className={`px-3 py-1 ${
                          hoverOnly ? `hover:${scale}` : scale
                        } rounded bg-slate-700 text-sm`}
                        style={{ transform: `scale(${scaleMap[scale]})` }}
                      >
                        Badge
                      </div>

                      <div className="flex items-center gap-2 ml-2">
                        <div
                          className="w-10 h-10 rounded-sm"
                          style={{
                            transform: `scale(${scaleMap[scale]})`,
                            background: "#111827",
                            border: "2px solid rgba(148,163,184,0.2)",
                          }}
                          aria-hidden
                        />
                        <div className="text-sm text-muted-foreground">
                          <div>{scale}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    Tip: prefer subtle scales (105-110%) for hover
                    micro-interactions; reserve large scales for temporary
                    emphasis or spotlight states.
                  </p>

                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>
            </div>
          </section>

          {/* Real-world examples (expanded & more informative) */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-World Examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Product card hover zoom */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Product tile — hover zoom
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Use{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        group-hover:scale-105
                      </code>{" "}
                      to gently scale images on hover without shifting layout.
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="group rounded-lg overflow-hidden">\n  <img class="transform transition duration-300 group-hover:scale-105" src="/path/to.jpg" />\n</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="group rounded-md overflow-hidden w-full max-w-sm">
                    <div className="bg-gradient-to-b from-slate-700 to-slate-800 p-6 flex items-center justify-center">
                      <div className="w-40 h-28 bg-slate-700 rounded-md transform transition duration-300 group-hover:scale-105" />
                    </div>
                    <div className="px-3 py-2">
                      <div className="font-semibold text-slate-100">
                        Product name
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Short description
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="group rounded-lg overflow-hidden"><img class="transform transition duration-300 group-hover:scale-105" src="/path/to.jpg"/></div>`}
                  />
                </div>
              </article>
              {/* Gallery magnify on focus (keyboard accessible) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Gallery — focus/hover magnify
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Use both{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        hover:scale-105
                      </code>{" "}
                      and{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        focus:scale-105
                      </code>{" "}
                      so keyboard users get the same magnify affordance as mouse
                      users.
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<button class="transform transition duration-200 hover:scale-105 focus:scale-105 focus:outline-none">Image</button>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 grid grid-cols-3 gap-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <button
                      key={i}
                      className="transform transition duration-200 hover:scale-105 focus:scale-105 focus:outline-none bg-slate-700 rounded h-24"
                      aria-label={`Image ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<button class="transform transition duration-200 hover:scale-105 focus:scale-105">Image</button>`}
                  />
                </div>
              </article>

              {/* Avatar pop on hover */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Avatar pop — hover
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      A small hover scale (105–110%) gives avatars a tactile,
                      interactive feel. Keep duration short for instant
                      feedback.
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="rounded-full transform transition duration-200 hover:scale-105">Avatar</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-white transform transition duration-200 hover:scale-105">
                    AL
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">
                      Alex Park
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Designer
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="rounded-full transform transition duration-200 hover:scale-105">Avatar</div>`}
                  />
                </div>
              </article>


              {/* CTA press effect */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      CTA — press/active scale
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Use{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        active:scale-95
                      </code>{" "}
                      for tactile press feedback on buttons and CTAs. Combine
                      with{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        transition duration-150
                      </code>{" "}
                      for responsiveness.
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<button class="transform active:scale-95 transition duration-150">Buy</button>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center">
                  <button className="px-4 py-2 rounded bg-blue-600 text-white transform active:scale-95 transition duration-150">
                    Buy
                  </button>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<button class="transform active:scale-95 transition duration-150">Buy</button>`}
                  />
                </div>
              </article>

              {/* Modal zoom in */}
              <article className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Modal — scale in</h3>
                    <div className="text-xs text-muted-foreground">
                      Use a slight scale (
                      <code className="bg-slate-700 px-1 rounded">
                        scale-95
                      </code>{" "}
                      to{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        scale-100
                      </code>
                      ) when animating dialogs to avoid feeling too heavy. Pair
                      with opacity and focus management.
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="transform transition duration-300 scale-95">Modal content</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="rounded-md p-4 bg-slate-700 transform transition duration-300 scale-95">
                    <div className="font-semibold text-slate-100">
                      Dialog title
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Modal body content — scale in on open
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="transform transition duration-300 scale-95">Modal content</div>`}
                  />
                </div>
              </article>

              {/* New examples: Floating Action Button (FAB) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Floating action button — pop
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      A tiny emphasis on hover makes floating actions feel
                      reachable without being distracting.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<button class=\"rounded-full p-3 transform transition duration-150 hover:scale-105\">+</button>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center">
                  <button className="rounded-full p-3 transform transition duration-150 hover:scale-105 bg-blue-600 text-white">
                    +
                  </button>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<button class="rounded-full p-3 transform transition duration-150 hover:scale-105">+</button>`}
                  />
                </div>
              </article>

              {/* New examples: Toast notification pop */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Toast — subtle pop
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Use a quick scale + opacity to make toasts feel lively,
                      but avoid large movement that distracts from content.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"transform transition duration-200 scale-95 opacity-0 animate-appear\">Toast message</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="text-white rounded-md p-3 bg-slate-700 transform transition duration-200 scale-95">
                    Toast message
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="transform transition duration-200 scale-95">Toast message</div>`}
                  />
                </div>
              </article>

              {/* New example: Slider handle scale on grab */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Slider handle — grab feedback
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Scale the handle slightly on grab/active to show the
                      control is manipulated (
                      <code className="bg-slate-700 px-1 rounded">
                        active:scale-110
                      </code>
                      ).
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"h-8 w-8 rounded-full bg-white transform active:scale-110\"></div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="h-8 w-8 rounded-full bg-white transform active:scale-110" />
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="h-8 w-8 rounded-full transform active:scale-110" />`}
                  />
                </div>
              </article>

              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility & UX notes:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Prefer subtle scale (105–110%) for hover/press feedback —
                    large scales can be disorienting.
                  </li>
                  <li>
                    Ensure scaled elements don't overlap or obscure important
                    controls; test at different viewport sizes.
                  </li>
                  <li>
                    Provide keyboard equivalents (focus:scale-...) and ensure
                    focus outlines remain visible or are replaced with an
                    equally-perceivable indicator.
                  </li>
                  <li>
                    For animation performance, avoid animating layout
                    properties; use{" "}
                    <code className="bg-slate-700 px-1 rounded">transform</code>{" "}
                    and consider{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      will-change: transform
                    </code>{" "}
                    for complex scenes.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tips */}
          <section className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Tips & best practices</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <strong>Micro-interactions:</strong> use 1.05–1.10 scales for
                hover/press feedback.
              </li>
              <li>
                <strong>Emphasis:</strong> use 1.25–1.5 sparingly for spotlight
                states.
              </li>
              <li>
                <strong>Motion:</strong> choose durations and ease to match UI
                rhythm (short for subtle, longer for emphasis).
              </li>
              <li>
                <strong>Accessibility:</strong> provide focusable alternatives
                and test with keyboard and screen readers.
              </li>
              <li>
                <strong>Performance:</strong> avoid animating
                top/left/width/height — prefer transform for GPU-accelerated
                animations.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
