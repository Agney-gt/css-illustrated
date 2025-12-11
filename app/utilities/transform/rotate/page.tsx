"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type RotateClass =
  | "rotate-0"
  | "rotate-1"
  | "rotate-2"
  | "rotate-3"
  | "rotate-6"
  | "rotate-12"
  | "rotate-45"
  | "rotate-90"
  | "-rotate-1"
  | "-rotate-2"
  | "-rotate-3"
  | "-rotate-6"
  | "-rotate-12"
  | "-rotate-45";

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

export default function RotatePage() {
  const [copied, setCopied] = useState<string | null>(null);

  // Playground state
  const [rotate, setRotate] = useState<RotateClass>("rotate-0");
  const [origin, setOrigin] = useState<OriginClass>("origin-center");
  const [duration, setDuration] = useState<DurationClass>("duration-150");
  const [easing, setEasing] = useState<EasingClass>("ease-in-out");
  const [hoverOnly, setHoverOnly] = useState(false);

  // map to degrees for inline preview
  const rotateMap: Record<RotateClass, number> = {
    "rotate-0": 0,
    "rotate-1": 1,
    "rotate-2": 2,
    "rotate-3": 3,
    "rotate-6": 6,
    "rotate-12": 12,
    "rotate-45": 45,
    "rotate-90": 90,
    "-rotate-1": -1,
    "-rotate-2": -2,
    "-rotate-3": -3,
    "-rotate-6": -6,
    "-rotate-12": -12,
    "-rotate-45": -45,
  };

  const rotateUtilities: { cls: RotateClass; desc: string }[] = [
    { cls: "rotate-0", desc: "No rotation — baseline" },
    { cls: "rotate-1", desc: "Tiny tilt (1°)" },
    { cls: "rotate-2", desc: "Very small tilt (2°)" },
    { cls: "rotate-3", desc: "Small tilt (3°) — micro-twist" },
    { cls: "rotate-6", desc: "Noticeable tilt (6°)" },
    { cls: "rotate-12", desc: "Distinct tilt (12°) — decorative" },
    { cls: "rotate-45", desc: "Strong rotation (45°) — badge/label" },
    { cls: "rotate-90", desc: "Quarter turn (90°) — icon orientation" },
    { cls: "-rotate-1", desc: "Tiny negative tilt" },
    { cls: "-rotate-3", desc: "Small negative tilt" },
    { cls: "-rotate-6", desc: "Noticeable negative tilt" },
    { cls: "-rotate-12", desc: "Distinct negative tilt" },
    { cls: "-rotate-45", desc: "Strong negative rotation" },
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
    hoverOnly ? "hover:rotate-3" : ""
  } ${origin} ${duration} ${easing}">\n  Preview content\n</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Transform — Rotate</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Rotation adds personality and subtle motion. Use tiny tilts for
              tactile affordances, larger angles for decorative badges, and
              origin control to change pivot points. Avoid using rotation for
              critical text or controls — keep it decorative.
            </p>
          </div>

          {/* Utilities */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Rotate utilities</h2>
              <p className="text-muted-foreground">
                Click a utility to copy the class.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {rotateUtilities.map((r) => (
                <button
                  key={r.cls}
                  onClick={() => copyToClipboard(r.cls)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group cursor-pointer"
                  aria-label={`Copy ${r.cls}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-10 rounded-sm flex items-center justify-center bg-slate-700 text-white transform`}
                        style={{ transform: `rotate(${rotateMap[r.cls]}deg)` }}
                        aria-hidden
                      >
                        {rotateMap[r.cls]}°
                      </div>

                      <div>
                        <code className="text-black text-sm font-mono text-accent font-semibold">
                          {r.cls}
                        </code>
                        <div className="text-xs text-muted-foreground">
                          {r.desc}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs text-muted-foreground">
                      {copied === r.cls ? "Copied" : "Copy"}
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
              Adjust rotation, pivot (origin), timing and whether rotation is
              hover-only.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Rotate
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {rotateUtilities.map((r) => (
                      <button
                        key={r.cls}
                        onClick={() => setRotate(r.cls)}
                        className={`px-3 py-1 rounded border text-sm ${
                          rotate === r.cls
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {String(rotateMap[r.cls]).replace("-", "−") + "°"}
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
                          `${rotate} ${origin} ${duration} ${easing} ${
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
                        hoverOnly ? `hover:${rotate}` : rotate
                      } ${origin} ${duration} ${easing} p-6 bg-slate-700 text-slate-100 inline-block`}
                      style={{ transform: `rotate(${rotateMap[rotate]}deg)` }}
                    >
                      <strong className="block">Rotate preview</strong>
                      <span className="text-sm">
                        {rotate} — origin: {origin.replace("origin-", "")}
                      </span>
                    </div>

                    <div className="flex gap-3 flex-wrap items-center">
                      <div
                        className={`w-16 h-16 rounded ${
                          hoverOnly ? `hover:${rotate}` : rotate
                        } flex items-center justify-center bg-slate-700 text-white`}
                        style={{ transform: `rotate(${rotateMap[rotate]}deg)` }}
                      >
                        AV
                      </div>

                      <button
                        className={`px-4 py-2 ${
                          hoverOnly ? `hover:${rotate}` : rotate
                        } rounded bg-blue-600 text-white`}
                        style={{ transform: `rotate(${rotateMap[rotate]}deg)` }}
                      >
                        Primary
                      </button>

                      <div
                        className={`px-3 py-1 ${
                          hoverOnly ? `hover:${rotate}` : rotate
                        } rounded bg-slate-700 text-sm`}
                        style={{ transform: `rotate(${rotateMap[rotate]}deg)` }}
                      >
                        Badge
                      </div>

                      <div className="flex items-center gap-2 ml-2">
                        <div
                          className="w-10 h-10 rounded-sm"
                          style={{
                            transform: `rotate(${rotateMap[rotate]}deg)`,
                            background: "#111827",
                            border: "2px solid rgba(148,163,184,0.2)",
                          }}
                          aria-hidden
                        />
                        <div className="text-sm text-muted-foreground">
                          <div>{rotate}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    Tip: small rotations (1–6°) add tactility and personality;
                    large rotations are decorative and should not be used for
                    primary controls or text.
                  </p>

                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>
            </div>
          </section>

          {/* Real-world examples */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-World Examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Rotated label / badge */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Rotated badge / label
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Great for limited/seasonal ribbons. Use ~-12° to -45° for
                      ribbon effect; keep text readable by limiting rotation.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"absolute -top-2 -right-4 rotate-12 bg-red-600 text-white px-3 py-1 rounded\">Sale</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3 relative overflow-hidden">
                  <div className="rounded-md p-4 bg-slate-700">Product</div>
                  <div className="absolute -top-2 -right-4 rotate-12 bg-rose-600 text-white px-3 py-1 rounded">
                    Sale
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="absolute -top-2 -right-4 rotate-12 bg-rose-600 text-white px-3 py-1 rounded">Sale</div>`}
                  />
                </div>
              </article>

              {/* Tilt on hover for cards */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Tilt on hover (subtle)
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Combine small rotate with subtle shadow on hover to
                      simulate depth. Keep origin at top or center depending on
                      effect.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"transform transition duration-300 hover:rotate-3 hover:shadow-lg\">Card</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3">
                  <div className="rounded-md p-4 transform transition duration-300 hover:rotate-3 hover:shadow-lg bg-slate-700">
                    Hover me
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="transform transition duration-300 hover:rotate-3 hover:shadow-lg">Card</div>`}
                  />
                </div>
              </article>
              { /*Loading spinner tilt */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Loading spinner tilt
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      A slight rotation combined with continuous spin can give
                      spinners more character — keep motion subtle.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"animate-spin transform rotate-3\">...</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="w-8 h-8 border-4 border-slate-600 border-t-blue-500 rounded-full animate-spin transform rotate-3" />
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="animate-spin transform rotate-3">...</div>`}
                  />
                </div>
              </article>

              {/* Icon orientation */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Icon orientation</h3>
                    <div className="text-xs text-muted-foreground">
                      Rotate icons to reflect state (e.g., caret open/closed).
                      Prefer 90° or 180° rotations for clear meaning.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<svg class=\"transform rotate-90\" ...>...</svg>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-slate-700 flex items-center justify-center transform rotate-90">
                    ▸
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Open caret rotated 90°
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<svg class="transform rotate-90">...</svg>`}
                  />
                </div>
              </article>

              {/* Decorative collage (rotated elements) */}
              <article className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Decorative collage
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Small rotations create a playful collage — good for hero
                      sections or onboarding cards. Keep readability in mind.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class=\"relative\">\n  <div class=\"rotate-3\">Layer A</div>\n  <div class=\"-rotate-6\">Layer B</div>\n</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3 relative h-40">
                  <div className="absolute top-6 left-6 rotate-3 bg-slate-700 px-3 py-2 rounded">
                    Layer A
                  </div>
                  <div className="absolute top-16 left-24 -rotate-6 bg-slate-700 px-3 py-2 rounded">
                    Layer B
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="relative">\n  <div class="rotate-3">Layer A</div>\n  <div class="-rotate-6">Layer B</div>\n</div>`}
                  />
                </div>
              </article>


              {/* New example: Confirmation check rotate in */}
              <article className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Confirmation — rotate in
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      Animate a checkmark rotating into place for satisfying
                      confirmation. Combine rotation with opacity and scale for
                      polish.
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<svg class=\"transform transition duration-200 rotate-45 opacity-0 animate-in\">...</svg>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center transform rotate-45">
                    ✔
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="transform rotate-45">✔</div>`}
                  />
                </div>
              </article>

              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility & UX notes:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Keep rotation decorative — avoid rotating text-heavy
                    elements significantly.
                  </li>
                  <li>
                    Small angles (1–6°) are usually enough to imply depth or
                    interactivity.
                  </li>
                  <li>
                    Provide non-visual feedback for state changes when rotation
                    is used to indicate state (icons + rotation + aria labels).
                  </li>
                  <li>
                    Test motion sensitivity — allow reduced-motion preferences
                    to disable non-essential rotations/animations.
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
                <strong>Subtlety:</strong> prefer tiny tilts for interaction,
                larger rotations only for decorative use.
              </li>
              <li>
                <strong>Pivot:</strong> set{" "}
                <code className="bg-slate-700 px-1 rounded">
                  transform-origin
                </code>{" "}
                deliberately to control how objects rotate.
              </li>
              <li>
                <strong>Clarity:</strong> don't rotate important text; rotate
                icons or badges instead.
              </li>
              <li>
                <strong>Accessibility:</strong> respect{" "}
                <code className="bg-slate-700 px-1 rounded">
                  prefers-reduced-motion
                </code>{" "}
                and provide alternatives.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
