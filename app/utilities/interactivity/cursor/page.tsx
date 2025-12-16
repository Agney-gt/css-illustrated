"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type CursorClass =
  | "cursor-auto"
  | "cursor-default"
  | "cursor-pointer"
  | "cursor-wait"
  | "cursor-text"
  | "cursor-move"
  | "cursor-help"
  | "cursor-not-allowed"
  | "cursor-grab"
  | "cursor-grabbing"
  | "cursor-crosshair"
  | "cursor-zoom-in"
  | "cursor-zoom-out"
  | "cursor-col-resize"
  | "cursor-row-resize";

export default function CursorPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [cursor, setCursor] = useState<CursorClass>("cursor-pointer");
  const [hoverOnly, setHoverOnly] = useState(false);
  const [label, setLabel] = useState<string>("Click me");

  const utilities: { cls: CursorClass; desc: string }[] = [
    { cls: "cursor-auto", desc: "Browser decides" },
    { cls: "cursor-default", desc: "Default arrow" },
    { cls: "cursor-pointer", desc: "Clickable target" },
    { cls: "cursor-wait", desc: "Waiting / busy" },
    { cls: "cursor-text", desc: "Text input / selectable" },
    { cls: "cursor-move", desc: "Move / drag" },
    { cls: "cursor-help", desc: "Help / hint" },
    { cls: "cursor-not-allowed", desc: "Disabled / forbidden" },
    { cls: "cursor-grab", desc: "Draggable (grab)" },
    { cls: "cursor-grabbing", desc: "Dragging (grabbing)" },
    { cls: "cursor-crosshair", desc: "Precise selection" },
    { cls: "cursor-zoom-in", desc: "Zoom-in affordance" },
    { cls: "cursor-zoom-out", desc: "Zoom-out affordance" },
    { cls: "cursor-col-resize", desc: "Horizontal resize" },
    { cls: "cursor-row-resize", desc: "Vertical resize" },
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

  const playgroundMarkup = `<button class="${
    hoverOnly ? `hover:${cursor}` : cursor
  } px-4 py-2 rounded bg-blue-600 text-white">${label}</button>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Cursor & Pointer</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Choose the appropriate cursor to communicate affordance —
              clickable targets, draggable handles, precision tools and disabled
              states. Always pair cursor changes with clear visual cues and
              accessible semantics.
            </p>
          </div>

          {/* Utilities */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Cursor utilities</h2>
              <p className="text-muted-foreground">Click a class to copy it.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {utilities.map((u) => (
                <button
                  key={u.cls}
                  onClick={() => copyToClipboard(u.cls)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group"
                  aria-label={`Copy ${u.cls}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-10 rounded-sm bg-slate-700 flex items-center justify-center text-white ${u.cls}`}
                        aria-hidden
                      >
                        {/* visible label to show cursor effect */}
                        {u.cls.replace("cursor-", "")}
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
              Pick a cursor utility and test it on different controls — toggle
              hover-only to apply on hover, or set it directly for persistent
              cursors.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Cursor
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {utilities.map((u) => (
                      <button
                        key={u.cls}
                        onClick={() => setCursor(u.cls)}
                        className={`px-3 py-1 rounded border text-sm ${
                          cursor === u.cls
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {u.cls.replace("cursor-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Label
                  </label>
                  <input
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-border bg-slate-700 text-white"
                  />
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
                          `${hoverOnly ? `hover:${cursor}` : cursor}`
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
                    <div className="mb-4">
                      <div className="mb-2 text-sm text-muted-foreground">
                        Button / clickable
                      </div>
                      <button
                        className={`${
                          hoverOnly ? `hover:${cursor}` : cursor
                        } px-4 py-2 rounded bg-blue-600 text-white`}
                      >
                        {label}
                      </button>
                    </div>

                    <div className="mb-4">
                      <div className="mb-2 text-sm text-muted-foreground">
                        Draggable handle (grab)
                      </div>
                      <div
                        className={`w-36 p-3 rounded text-white bg-slate-700 ${
                          hoverOnly ? `hover:cursor-grab` : "cursor-grab"
                        }`}
                      >
                        Drag handle
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="mb-2 text-sm text-muted-foreground">
                        Text area (text)
                      </div>
                      <textarea
                        className={`w-full px-3 py-2 rounded bg-slate-700 text-white ${
                          hoverOnly ? `hover:cursor-text` : "cursor-text"
                        }`}
                        rows={2}
                        defaultValue={"Selectable text..."}
                      />
                    </div>

                    <div className="text-white flex gap-3 flex-wrap items-center">
                      <div className="text-sm text-muted-foreground">
                        Small swatches to preview cursor
                      </div>
                      <div
                        className={`w-12 h-12 rounded bg-slate-700 flex items-center justify-center ${
                          hoverOnly ? `hover:${cursor}` : cursor
                        }`}
                      >
                        sw
                      </div>
                      <div
                        className={`w-12 h-12 rounded bg-slate-700 flex items-center justify-center ${
                          hoverOnly ? `hover:cursor-zoom-in` : "cursor-zoom-in"
                        }`}
                      >
                        +
                      </div>
                      <div
                        className={`w-12 h-12 rounded bg-slate-700 flex items-center justify-center ${
                          hoverOnly
                            ? `hover:cursor-not-allowed`
                            : "cursor-not-allowed"
                        }`}
                      >
                        ×
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-3">
                      Tip: do not rely solely on cursor to convey critical
                      state. Provide explicit visual and textual indicators
                      (disabled styles, aria-disabled, labels) for accessibility
                      and touch users.
                    </p>

                    <CodeBlock code={playgroundMarkup} language="jsx" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Real-World Examples */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-World Examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Clickable link / CTA */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Clickable link / CTA
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<a class="cursor-pointer underline" role="link" aria-label="Open item">Open</a>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-pointer
                    </code>{" "}
                    for interactive controls — always pair it with visible focus
                    and hover states and correct semantics (<code>role</code>,
                    keyboard handlers).
                  </p>

                  <a
                    className="cursor-pointer text-blue-400 underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
                    role="link"
                    tabIndex={0}
                  >
                    Open
                  </a>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<a class="cursor-pointer underline" role="link" aria-label="Open item">Open</a>\n/* Ensure keyboard activation and :focus styles for accessibility */`}
                  />
                </div>
              </article>

              {/* Draggable list (grab / grabbing) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Draggable list (grab / grabbing)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<!-- Toggle classes during pointer interaction -->\n<div draggable="true" class="cursor-grab"\n     ondragstart="this.classList.replace('cursor-grab','cursor-grabbing')"\n     ondragend="this.classList.replace('cursor-grabbing','cursor-grab')">Drag me</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-grab
                    </code>{" "}
                    for handles and switch to{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-grabbing
                    </code>{" "}
                    during the interaction. Announce state with{" "}
                    <code>aria-grabbed</code> or a live region for assistive
                    tech.
                  </p>

                  <div
                    className="cursor-grab rounded p-2 bg-slate-700 inline-block"
                    draggable
                    onDragStart={(e) =>
                      // Example inline toggles for demo; real code should use handlers
                      e.currentTarget.classList.contains("cursor-grab") &&
                      e.currentTarget.classList.replace(
                        "cursor-grab",
                        "cursor-grabbing"
                      )
                    }
                    onDragEnd={(e) =>
                      e.currentTarget.classList.contains("cursor-grabbing") &&
                      e.currentTarget.classList.replace(
                        "cursor-grabbing",
                        "cursor-grab"
                      )
                    }
                  >
                    Drag handle
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="cursor-grab" draggable="true">Drag handle</div>\n/* Toggle to cursor-grabbing on dragstart and back on dragend; update aria-grabbed or live region */`}
                  />
                </div>
              </article>

              {/* Image zoom affordance */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Image — zoom affordance
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<img src="/photo.jpg" class="cursor-zoom-in" alt="Product photo" role="button" tabindex="0" />`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-zoom-in
                    </code>{" "}
                    signals a zoom/lightbox. For keyboard and touch users,
                    expose an explicit control (button) and support
                    pinch/gesture or an on-screen zoom button.
                  </p>

                  <img
                    src="/photo.jpg"
                    alt="Product photo"
                    className="cursor-zoom-in w-full h-28 object-cover rounded"
                  />
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<img src="/photo.jpg" class="cursor-zoom-in" alt="Product photo" role="button" tabindex="0" />\n/* Provide keyboard activation and visible controls for touch */`}
                  />
                </div>
              </article>

              {/* Disabled affordance (semantic + visual) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Disabled affordance (aria-disabled)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<button class="cursor-not-allowed opacity-50" aria-disabled="true">Save</button>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Prefer semantic disabling (<code>disabled</code> or{" "}
                    <code>aria-disabled</code>) plus{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-not-allowed
                    </code>
                    . Also expose the reason (tooltip or helper text) for better
                    UX.
                  </p>

                  <button
                    className="cursor-not-allowed opacity-50 rounded-md px-4 py-2 bg-slate-700 text-slate-400"
                    disabled
                  >
                    Save
                  </button>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<button class="cursor-not-allowed opacity-50" disabled>Save</button>\n/* Or for custom controls: role="button" aria-disabled="true" and a visible explanation */`}
                  />
                </div>
              </article>

              {/* Precision tool (crosshair) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Precision tool (crosshair)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="cursor-crosshair">Pick</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-crosshair
                    </code>{" "}
                    is ideal for drawing or pixel-precise selection. Because
                    system crosshairs vary, also render a small reticle inside
                    your canvas for consistent precision across platforms.
                  </p>

                  <div className="text-white cursor-crosshair w-48 p-3 rounded bg-slate-700">
                    Precision canvas
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="cursor-crosshair">Pick</div>\n/* For consistent precision, draw a 1px reticle at the mouse position inside the canvas */`}
                  />
                </div>
              </article>

              {/* Resize handles (col / row) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Resize handles (col / row)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="cursor-col-resize">Resize</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex gap-2 items-center">
                  <p className="text-sm text-muted-foreground">
                    Use directional resize cursors and provide keyboard
                    alternatives for resizing (± keys or accessible handles).
                  </p>
                  <div className="w-8 h-8 cursor-col-resize rounded bg-slate-700" />
                  <div className="w-8 h-8 cursor-row-resize rounded bg-slate-700" />
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="cursor-col-resize">Resize</div>\n/* Provide keyboard equivalents and aria-labels for each handle */`}
                  />
                </div>
              </article>

              {/* Map pan (move) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Map / pan — move cursor
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="cursor-move">Map canvas (drag to pan)</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-move
                    </code>{" "}
                    signals panning. For touch add a visible grab affordance,
                    on-screen pan controls or two-finger gestures. Expose a
                    brief hint for keyboard users (e.g., arrow keys to pan).
                  </p>

                  <div className="text-white cursor-move w-full h-28 rounded bg-gradient-to-r from-slate-700 to-slate-600">
                    Map area (pan)
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="cursor-move">Map area (pan)</div>\n/* Provide touch fallbacks and keyboard pan controls */`}
                  />
                </div>
              </article>

              {/* Drawing canvas (reticle + crosshair) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Drawing / Editor — crosshair + reticle
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<canvas class="cursor-crosshair"></canvas>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Combine the system crosshair with a drawn reticle inside
                    your canvas so precision remains consistent on all platforms
                    and at different DPIs.
                  </p>

                  <div className="text-white cursor-crosshair w-full h-28 rounded bg-gradient-to-r from-slate-700 to-slate-600">
                    Canvas (draw)
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<canvas class="cursor-crosshair"></canvas>\n/* Draw a small reticle at the pointer position in JS for consistent UX */`}
                  />
                </div>
              </article>

              {/* Custom image cursor (branding) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Custom image cursor (branding) — fallbacks
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div style="cursor: url('/cursor.png') 12 12, auto;">Custom cursor</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Use hotspot coordinates and a generic fallback (e.g.,{" "}
                    <code>auto</code>). Keep custom images small (≤32×32) and
                    provide retina variants; test on multiple browsers — some
                    ignore large or SVG cursors.
                  </p>

                  <div
                    className="text-white w-full h-28 rounded bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center text-sm"
                    style={{ cursor: "url('/cursor.png') 12 12, auto" }}
                  >
                    Custom cursor preview
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div style={{ cursor: "url('/cursor.png') 12 12, auto" }}>Custom cursor</div>\n/* Provide fallback cursors and retina versions */`}
                  />
                </div>
              </article>

              {/* Rotate / transform handle (grab) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Rotate / transform handle — grab
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="cursor-grab">Rotate handle</div>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="text-white bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    For rotation/transform handles use{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-grab
                    </code>
                    . Programmatically switch to{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      cursor-grabbing
                    </code>{" "}
                    during interaction and provide keyboard rotate alternatives.
                  </p>

                  <div className="w-48 h-28 rounded bg-slate-700 flex items-center justify-center cursor-grab">
                    Handle
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="cursor-grab">Rotate handle</div>\n/* Toggle to cursor-grabbing on mousedown/dragstart */`}
                  />
                </div>
              </article>

              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility & UX notes:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Cursor is a visual hint — never be the only signal for
                    important state. Add visible labels, focus styles and
                    semantic attributes (<code>role</code>, <code>aria-*</code>
                    ).
                  </li>
                  <li>
                    Touch devices don't show cursors — ensure touch affordances
                    (tap targets) are large and include on-screen controls or
                    gestures.
                  </li>
                  <li>
                    For drag interactions, update the DOM state (e.g.,{" "}
                    <code>aria-grabbed</code>) or use live regions to announce
                    changes for assistive tech.
                  </li>
                  <li>
                    Some cursors (zoom-in/out, grab/grabbing) behave slightly
                    differently across OSes — test on Windows, macOS, Linux and
                    mobile. Provide graceful fallbacks.
                  </li>
                  <li>
                    Custom image cursors need hotspot coords and fallbacks; keep
                    images small and supply retina variants for crispness.
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
                <strong>Be explicit:</strong> use `cursor-pointer` for clickable
                elements, `cursor-not-allowed` for disabled controls.
              </li>
              <li>
                <strong>Draggable hints:</strong> use `cursor-grab` on handles
                and switch to `cursor-grabbing` while dragging.
              </li>
              <li>
                <strong>Test without cursor:</strong> ensure touch-only users
                can still interact comfortably.
              </li>
              <li>
                <strong>Fallbacks:</strong> for complex custom cursors provide a
                sensible default for browser/platform mismatches.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
