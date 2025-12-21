"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

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

type EffectType = "rotate" | "scale";

const originDotMap: Record<OriginClass, React.CSSProperties> = {
  "origin-top-left": { top: 6, left: 6 },
  "origin-top": { top: 6, left: "50%", transform: "translateX(-50%)" },
  "origin-top-right": { top: 6, right: 6 },
  "origin-left": { top: "50%", left: 6, transform: "translateY(-50%)" },
  "origin-center": {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "origin-right": { top: "50%", right: 6, transform: "translateY(-50%)" },
  "origin-bottom-left": { bottom: 6, left: 6 },
  "origin-bottom": { bottom: 6, left: "50%", transform: "translateX(-50%)" },
  "origin-bottom-right": { bottom: 6, right: 6 },
};

export default function OriginPage() {
  const [copied, setCopied] = useState<string | null>(null);

  // Playground state
  const [origin, setOrigin] = useState<OriginClass>("origin-center");
  const [duration, setDuration] = useState<DurationClass>("duration-150");
  const [easing, setEasing] = useState<EasingClass>("ease-in-out");
  const [hoverOnly, setHoverOnly] = useState(false);
  const [effect, setEffect] = useState<EffectType>("rotate");
  const [rotateDeg, setRotateDeg] = useState<number>(12);
  const [scaleVal, setScaleVal] = useState<number>(1.05);

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

  // Map Tailwind origin classes to CSS transform-origin strings
  const originMap: Record<OriginClass, string> = {
    "origin-top-left": "left top",
    "origin-top": "center top",
    "origin-top-right": "right top",
    "origin-left": "left center",
    "origin-center": "center",
    "origin-right": "right center",
    "origin-bottom-left": "left bottom",
    "origin-bottom": "center bottom",
    "origin-bottom-right": "right bottom",
  };

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

  const originUtilities: { cls: OriginClass; desc: string }[] = origins.map(
    (o) => ({
      cls: o,
      desc:
        o === "origin-center"
          ? "Center pivot (default)"
          : o.includes("top")
          ? "Pivot toward top"
          : o.includes("bottom")
          ? "Pivot toward bottom"
          : o.includes("left")
          ? "Pivot toward left"
          : "Pivot toward right",
    })
  );

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      setCopied(null);
    }
  };

  const effectClass =
    effect === "rotate"
      ? `rotate-${rotateDeg}`
      : `scale-${Math.round(scaleVal * 100)}`;
  const playgroundMarkup = `<div class="${origin} transition ${duration} ${easing} ${
    hoverOnly ? `hover:${effectClass}` : effectClass
  }">\n  Preview content\n</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Transform — Origin</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Transform origin controls the pivot point for rotations and scales
              — a small change in origin can dramatically alter perceived motion
              and hierarchy. Use origin to anchor animations to a natural point
              (e.g. top for dropdowns, right for tooltips).
            </p>
          </div>

          {/* Utilities */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Origin utilities</h2>
              <p className="text-muted-foreground">
                Click a class to copy the origin utility.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {originUtilities.map((u) => (
                <button
                  key={u.cls}
                  onClick={() => copyToClipboard(u.cls)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-14 h-10 rounded-sm bg-slate-700 text-white relative overflow-hidden"
                        style={{ transformOrigin: originMap[u.cls] }}
                        aria-hidden
                      >
                        <span
                          className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-sm"
                          style={originDotMap[u.cls]}
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-xs opacity-30">
                          ⊙
                        </span>
                      </div>

                      <div>
                        <code className="text-black text-sm font-mono text-accent font-semibold">
                          {u.cls}
                        </code>
                        <div className="text-xs text-muted-foreground">
                          {u.desc}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {copied === u.cls ? "Copied" : "Copy"}
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
              Pick an origin and effect to see how pivot changes motion. Toggle
              hover-only to apply the effect only on hover.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
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
                    Effect
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEffect("rotate")}
                      className={`px-3 py-1 rounded border text-sm ${
                        effect === "rotate"
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      Rotate
                    </button>
                    <button
                      onClick={() => setEffect("scale")}
                      className={`px-3 py-1 rounded border text-sm ${
                        effect === "scale"
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      Scale
                    </button>
                  </div>
                </div>

                {effect === "rotate" ? (
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Rotate (deg)
                    </label>
                    <div className="flex gap-2">
                      {[6, 12, 18, 45].map((d) => (
                        <button
                          key={d}
                          onClick={() => setRotateDeg(d)}
                          className={`px-3 py-1 rounded border text-sm ${
                            rotateDeg === d
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-border"
                          }`}
                        >
                          {d}°
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Scale
                    </label>
                    <div className="flex gap-2">
                      {[1.03, 1.05, 1.1, 1.25].map((s) => (
                        <button
                          key={s}
                          onClick={() => setScaleVal(s)}
                          className={`px-3 py-1 rounded border text-sm ${
                            scaleVal === s
                              ? "border-blue-500 bg-blue-500/10"
                              : "border-border"
                          }`}
                        >
                          {Math.round(s * 100)}%
                        </button>
                      ))}
                    </div>
                  </div>
                )}

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
                          `${origin} ${
                            hoverOnly
                              ? `hover:${
                                  effect === "rotate"
                                    ? `rotate-${rotateDeg}`
                                    : `scale-${Math.round(scaleVal * 100)}`
                                }`
                              : effect === "rotate"
                              ? `rotate-${rotateDeg}`
                              : `scale-${Math.round(scaleVal * 100)}`
                          } ${duration} ${easing}`
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
                        hoverOnly
                          ? `hover:${
                              effect === "rotate"
                                ? `rotate-${rotateDeg}`
                                : `scale-${Math.round(scaleVal * 100)}`
                            }`
                          : effect === "rotate"
                          ? `rotate-${rotateDeg}`
                          : `scale-${Math.round(scaleVal * 100)}`
                      } ${duration} ${easing} p-6 bg-slate-700 text-slate-100 inline-block origin-demo`}
                      style={{
                        transformOrigin: originMap[origin],
                        transform:
                          effect === "rotate"
                            ? `rotate(${rotateDeg}deg)`
                            : `scale(${scaleVal})`,
                      }}
                    >
                      <strong className="block">Origin preview</strong>
                      <span className="text-sm">
                        {origin.replace("origin-", "")} —{" "}
                        {effect === "rotate"
                          ? `${rotateDeg}°`
                          : `${Math.round(scaleVal * 100)}%`}
                      </span>
                    </div>

                    <div className="flex gap-3 flex-wrap items-center">
                      <div
                        className={`w-16 h-16 rounded ${
                          hoverOnly
                            ? `hover:${
                                effect === "rotate"
                                  ? `rotate-${rotateDeg}`
                                  : `scale-${Math.round(scaleVal * 100)}`
                              }`
                            : effect === "rotate"
                            ? `rotate-${rotateDeg}`
                            : `scale-${Math.round(scaleVal * 100)}`
                        } flex items-center justify-center bg-slate-700 text-white`}
                        style={{
                          transformOrigin: originMap[origin],
                          transform:
                            effect === "rotate"
                              ? `rotate(${rotateDeg}deg)`
                              : `scale(${scaleVal})`,
                        }}
                      >
                        AV
                      </div>

                      <button
                        className={`px-4 py-2 ${
                          hoverOnly
                            ? `hover:${
                                effect === "rotate"
                                  ? `rotate-${rotateDeg}`
                                  : `scale-${Math.round(scaleVal * 100)}`
                              }`
                            : effect === "rotate"
                            ? `rotate-${rotateDeg}`
                            : `scale-${Math.round(scaleVal * 100)}`
                        } rounded bg-blue-600 text-white`}
                        style={{
                          transformOrigin: originMap[origin],
                          transform:
                            effect === "rotate"
                              ? `rotate(${rotateDeg}deg)`
                              : `scale(${scaleVal})`,
                        }}
                      >
                        Primary
                      </button>

                      <div
                        className={`px-3 py-1 ${
                          hoverOnly
                            ? `hover:${
                                effect === "rotate"
                                  ? `rotate-${rotateDeg}`
                                  : `scale-${Math.round(scaleVal * 100)}`
                              }`
                            : effect === "rotate"
                            ? `rotate-${rotateDeg}`
                            : `scale-${Math.round(scaleVal * 100)}`
                        } rounded bg-slate-700 text-sm`}
                        style={{
                          transformOrigin: originMap[origin],
                          transform:
                            effect === "rotate"
                              ? `rotate(${rotateDeg}deg)`
                              : `scale(${scaleVal})`,
                        }}
                      >
                        Badge
                      </div>

                      <div className="flex items-center gap-2 ml-2">
                        <div
                          className="w-10 h-10 rounded-sm"
                          style={{
                            transformOrigin: originMap[origin],
                            transform:
                              effect === "rotate"
                                ? `rotate(${rotateDeg}deg)`
                                : `scale(${scaleVal})`,
                            background: "#111827",
                            border: "2px solid rgba(148,163,184,0.2)",
                          }}
                          aria-hidden
                        />
                        <div className="text-sm text-muted-foreground">
                          <div>{origin}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-3">
                      Tip: origin changes where an element seems to "hinge" —
                      top origins feel like dropdowns, right origins are useful
                      for tooltips and popovers, and center is best for balanced
                      scaling or spinning items.
                    </p>

                    <CodeBlock code={playgroundMarkup} language="jsx" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Real-world examples */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-World Examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Dropdown pivot */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Dropdown — pivot from top
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Use{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        origin-top
                      </code>{" "}
                      with a small scale/opacity animation for dropdowns so they
                      grow from the trigger.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"origin-top transform scale-95 opacity-0 transition duration-150\">Dropdown menu</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3">
                  <div className="rounded-md p-3 bg-slate-700 origin-top transform scale-95">
                    Dropdown preview
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="origin-top transform scale-95">Dropdown menu</div>`}
                  />
                </div>
              </article>

              {/* Tooltip hinge */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Tooltip — hinge from right
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Anchor tooltips with{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        origin-right
                      </code>{" "}
                      when they should appear to swing out from the right side.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"origin-right transform -translate-x-2 transition duration-150\">Tooltip</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3">
                  <div className="rounded-md p-2 bg-slate-700 origin-right transform -translate-x-2">
                    Tooltip preview
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="origin-right transform -translate-x-2">Tooltip</div>`}
                  />
                </div>
              </article>

              {/* Modal scale from center */}
              <article className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Modal — center scale
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Modals should scale from center (
                      <code className="bg-slate-700 px-1 rounded">
                        origin-center
                      </code>
                      ) for a balanced appearance when opening.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"origin-center transform scale-95 transition duration-300\">Modal content</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3">
                  <div className="rounded-md p-4 bg-slate-700 origin-center transform scale-95">
                    Modal preview
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="origin-center transform scale-95">Modal content</div>`}
                  />
                </div>
              </article>

              {/* Rotating caret anchored to left */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Caret — anchor left
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      For carets that open rightwards, set{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        origin-left
                      </code>{" "}
                      and rotate 90° on open.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<svg class=\"origin-left transform rotate-90\">...</svg>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center origin-left transform rotate-90">
                    ▸
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Caret rotated from left origin
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<svg class="origin-left transform rotate-90">...</svg>`}
                  />
                </div>
              </article>

              {/* Popover hinge */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Popover — hinge from top-right
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      A popover that appears to "unfold" from the trigger can
                      use{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        origin-top-right
                      </code>{" "}
                      with a small rotate/translate animation.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"origin-top-right transform -translate-y-2 rotate-3 transition duration-200\">Popover</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3">
                  <div className="rounded-md p-3 bg-slate-700 origin-top-right transform -translate-y-2 rotate-3">
                    Popover preview
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="origin-top-right transform -translate-y-2 rotate-3">Popover</div>`}
                  />
                </div>
              </article>

              {/* New: FAB expand from bottom-right */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      FAB — expand from bottom-right
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      When an action menu opens from a FAB, using{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        origin-bottom-right
                      </code>{" "}
                      makes the items grow outwards naturally.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"origin-bottom-right transform scale-95 transition duration-150\">Menu item</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3">
                  <div className="rounded-md p-3 bg-slate-700 origin-bottom-right transform scale-95">
                    FAB menu
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="origin-bottom-right transform scale-95">Menu item</div>`}
                  />
                </div>
              </article>

              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility & UX notes:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Choose an origin that matches the visual intent — e.g., top
                    for dropdowns, right for popovers, bottom-right for FAB
                    menus.
                  </li>
                  <li>
                    Combining origin with subtle translate/scale/opacity
                    produces natural entrance animations without layout shifts.
                  </li>
                  <li>
                    Test at multiple viewport sizes — pivot points can feel
                    different on small screens.
                  </li>
                  <li>
                    Respect{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      prefers-reduced-motion
                    </code>{" "}
                    and provide non-animated alternatives.
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
                <strong>Match origin to UI metaphor:</strong> dropdowns from
                top, popovers from right, FABs from bottom-right.
              </li>
              <li>
                <strong>Combine origin + transform:</strong> pair with
                scale/rotate/translate to create natural, non-jarring motion.
              </li>
              <li>
                <strong>Keep it subtle:</strong> avoid large rotations when
                pivoting from an edge — small angles feel more natural.
              </li>
              <li>
                <strong>Accessibility:</strong> provide clear focus management
                for elements that appear from a pivot (trap focus inside
                dialogs, update aria-hidden on background).
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
