"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type PointerClass = "pointer-events-none" | "pointer-events-auto";

export default function PointerEventsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  // Playground state: single source of truth for overlay interactivity
  const [pointerClass, setPointerClass] = useState<PointerClass>(
    "pointer-events-auto"
  );
  const [label, setLabel] = useState("Primary");

  const utilities: { cls: PointerClass; desc: string }[] = [
    {
      cls: "pointer-events-auto",
      desc: "Element accepts pointer events (default)",
    },
    {
      cls: "pointer-events-none",
      desc: "Element ignores pointer events (click-through)",
    },
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

  const playgroundMarkup = `<div class="relative">\n  <div class="${pointerClass} absolute inset-6 rounded-md flex items-center justify-center">Overlay</div>\n  <div class="relative z-0 p-6">Underlying clickable content</div>\n</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">
              Interactivity — pointer-events
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Control whether elements receive pointer events (clicks, hovers,
              touches). Use{" "}
              <code className="bg-slate-700 px-1 rounded">
                pointer-events-none
              </code>{" "}
              to let events pass through overlays, and{" "}
              <code className="bg-slate-700 px-1 rounded">
                pointer-events-auto
              </code>{" "}
              to restore interactivity. This is essential for overlays,
              decorative elements, enlarged hit areas, and nuanced hit testing.
            </p>
          </div>

          {/* Utilities */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Pointer-events utilities</h2>
              <p className="text-muted-foreground">
                Click a utility to copy the class.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {utilities.map((u) => (
                <div
                  key={u.cls}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* demo container: applying the utility to this wrapper shows how children become interactive or not */}
                      <div
                        className={`w-14 h-10 rounded-sm bg-slate-700 flex items-center justify-center text-white ${u.cls}`}
                        aria-hidden
                      >
                        <button
                          // clicking here demonstrates whether the wrapper accepts events (if wrapper has pointer-events-none, this button won't be clickable)
                          onClick={(e) => {
                            // if the wrapper is pointer-events-none, this handler won't run; that's the demo.
                            e.stopPropagation();
                            alert(`inner clicked (under ${u.cls})`);
                          }}
                          className="px-2 py-1 rounded bg-blue-600 text-white text-xs"
                        >
                          test
                        </button>
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

                    <div className="flex flex-col items-end gap-1">
                      <button
                        onClick={() => copyToClipboard(u.cls)}
                        className="text-xs px-2 py-1 rounded bg-muted/10"
                        aria-label={`Copy ${u.cls}`}
                      >
                        Copy
                      </button>
                      <span className="text-xs text-muted-foreground">
                        {copied === u.cls ? "Copied" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Playground */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive playground</h2>
            <p className="text-muted-foreground">
              Toggle overlay interactivity and see how hit-testing changes —
              demo covers blocking overlays, pass-through overlays, and
              re-enabling interactive children.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Overlay pointer behavior
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPointerClass("pointer-events-auto")}
                      className={`px-3 py-1 rounded border text-sm ${
                        pointerClass === "pointer-events-auto"
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      overlay blocks
                    </button>
                    <button
                      onClick={() => setPointerClass("pointer-events-none")}
                      className={`px-3 py-1 rounded border text-sm ${
                        pointerClass === "pointer-events-none"
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      overlay passes through
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Underlying CTA label
                  </label>
                  <input
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="w-full px-3 py-2 rounded border border-border bg-slate-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Actions
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => copyToClipboard(pointerClass)}
                      className="px-3 py-1 rounded border border-border text-sm"
                    >
                      Copy class
                    </button>
                    <button
                      onClick={() => copyToClipboard(playgroundMarkup)}
                      className="px-3 py-1 rounded border border-border text-sm"
                    >
                      Copy markup
                    </button>
                  </div>
                </div>

                <div className="text-xs text-muted-foreground mt-2">
                  <strong>Note:</strong> pointer-events only affects pointer
                  input — keyboard tab order and focusability remain unchanged.
                  Use{" "}
                  <code className="bg-slate-700 px-1 rounded">tabindex</code>{" "}
                  and ARIA when needed.
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

                    <div className="text-xs text-muted-foreground">
                      Try clicking the CTA under the overlay — toggle the
                      overlay behavior.
                    </div>
                  </div>

                  <div className="rounded p-4 bg-slate-800 relative overflow-hidden">
                    {/* Underlying clickable surface */}
                    <div className="rounded-md p-6 bg-slate-700 text-slate-100">
                      <div className="mb-3">
                        Underlying content — should receive clicks when overlay
                        passes through.
                      </div>
                      <button
                        onClick={() => alert("underlying clicked")}
                        className="px-4 py-2 rounded bg-green-600 text-white"
                      >
                        {label}
                      </button>
                    </div>

                    {/* Overlay (applies pointerClass) */}
                    <div
                      className={`absolute inset-6 rounded-md flex items-center justify-center bg-black/40 ${pointerClass}`}
                      aria-hidden
                    >
                      <div className="text-white text-sm text-center px-4">
                        {pointerClass === "pointer-events-none"
                          ? "Overlay: pass-through (pointer-events: none)"
                          : "Overlay: blocks interaction (pointer-events: auto)"}
                      </div>
                    </div>

                    <div className="mt-4 text-sm text-muted-foreground">
                      Tip: use{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        pointer-events-none
                      </code>{" "}
                      on decorative overlays so UI beneath remains usable. For
                      modal backdrops that should block interaction, keep{" "}
                      <code className="bg-slate-700 px-1 rounded">
                        pointer-events-auto
                      </code>{" "}
                      and trap focus.
                    </div>
                  </div>

                  <div className="mt-3">
                    <CodeBlock code={playgroundMarkup} language="jsx" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Real-world examples */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">
              Real-World Examples — practical patterns
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Modal backdrop (blocks) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Modal backdrop — blocks interaction
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="fixed inset-0 bg-black/50 pointer-events-auto"></div>\n/* Trap focus inside modal; backdrop blocks clicks. */`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Backdrops should block interaction to prevent users from
                    interacting with the page while a modal is open — keep{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      pointer-events-auto
                    </code>{" "}
                    and manage focus (trap focus inside modal, restore on
                    close).
                  </p>

                  <div className="rounded-md p-3 bg-slate-700 relative">
                    <div className="absolute inset-0 bg-black/50 pointer-events-auto" />
                    <div className="relative z-10 text-slate-100">
                      Modal content (focusable)
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="fixed inset-0 bg-black/50 pointer-events-auto"></div>\n/* Backdrop blocks pointer events; trap focus inside modal */`}
                  />
                </div>
              </article>

              {/* Decorative overlay (pass-through) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Decorative overlay — pass-through
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="absolute inset-0 pointer-events-none">decorative</div>`
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
                      pointer-events-none
                    </code>{" "}
                    on purely decorative layers (gradients, animated glows) so
                    they never block underlying controls.
                  </p>

                  <div className="relative rounded bg-slate-700 p-4">
                    <div
                      style={{ pointerEvents: "none" }}
                      className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full opacity-60"
                    />
                    <button className="px-3 py-2 rounded bg-blue-600 text-white">
                      Action
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="pointer-events-none">Decorative overlay</div>\n/* Underlying content remains interactive */`}
                  />
                </div>
              </article>

              {/* Click-through banner with interactive child */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Click-through banner with interactive child
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<div class="pointer-events-none">banner decorative</div>\n<button class="pointer-events-auto">interactive</button>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    When a container is non-interactive, re-enable events on
                    nested interactive children using{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      pointer-events-auto
                    </code>
                    .
                  </p>

                  <div className="relative rounded bg-slate-700 p-6">
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-slate-300">
                      Decorative center
                    </div>
                    <button className="relative pointer-events-auto px-3 py-2 rounded bg-green-600 text-white">
                      Clickable
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="pointer-events-none">decorative</div>\n<button class="pointer-events-auto">interactive</button>`}
                  />
                </div>
              </article>

              {/* Enlarged hit area via pseudo element (click-through wrapper) */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Enlarged hit area (invisible)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `/* CSS: .hit-area::before { content: ''; position: absolute; inset: -8px; pointer-events: auto; } */\n<button class="relative z-10">Target</button>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    Create larger, invisible hit targets for small controls by
                    adding a positioned pseudo-element with{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      pointer-events-auto
                    </code>{" "}
                    while keeping visuals compact.
                  </p>

                  <div className="relative">
                    <button className="px-3 py-2 rounded bg-slate-700 text-white">
                      Target
                    </button>
                    <div
                      className="absolute -inset-2"
                      style={{ pointerEvents: "auto" }}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`/* Increase clickable area via a positioned element with pointer-events:auto */\n<button class="relative z-10">Target</button>\n<div class="absolute -inset-2" style="pointer-events:auto" />`}
                  />
                </div>
              </article>

              {/* SVG precise hit areas */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    SVG — precise hit testing
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        `<svg><rect x="0" y="0" width="100" height="50" fill="transparent" pointer-events="visiblePainted"/></svg>`
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <p className="text-sm text-muted-foreground mb-2">
                    SVG's{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      pointer-events
                    </code>{" "}
                    attribute (visiblePainted, visibleFill, bounding-box, etc.)
                    enables shape-level control over hit areas — useful in
                    diagrams and map overlays.
                  </p>

                  <div className="text-white w-full h-28 rounded bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center">
                    SVG / Canvas area
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<svg>\n  <rect x="0" y="0" width="100" height="50" fill="transparent" pointer-events="visiblePainted" />\n</svg>`}
                  />
                </div>
              </article>

              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility & UX notes:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Pointer-events controls only pointer input — keyboard focus
                    and tab order are unaffected. Use{" "}
                    <code className="bg-slate-700 px-1 rounded">tabindex</code>{" "}
                    and ARIA for keyboard behavior.
                  </li>
                  <li>
                    Avoid hiding interactive controls behind pass-through
                    overlays unless intended; always provide clear visual cues.
                  </li>
                  <li>
                    Test across devices — touch platforms and browsers can
                    differ in how they handle pointer-events and hit-testing.
                  </li>
                  <li>
                    For complex hit testing (SVG/Canvas), document expected
                    behavior and provide fallback interactions for older
                    browsers.
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
                <strong>Decorative only:</strong> mark decorative elements with{" "}
                <code className="bg-slate-700 px-1 rounded">
                  pointer-events-none
                </code>{" "}
                so they never block UI.
              </li>
              <li>
                <strong>Interactive children:</strong> if a container is{" "}
                <code className="bg-slate-700 px-1 rounded">
                  pointer-events-none
                </code>
                , explicitly add{" "}
                <code className="bg-slate-700 px-1 rounded">
                  pointer-events-auto
                </code>{" "}
                to interactive children.
              </li>
              <li>
                <strong>Tooltips:</strong> prefer non-interactive tooltips
                unless they contain controls — then manage focus and pointer
                handling carefully.
              </li>
              <li>
                <strong>Don’t confuse focus:</strong> pointer-events doesn't
                change tabbability; use{" "}
                <code className="bg-slate-700 px-1 rounded">tabindex</code> and
                ARIA for keyboard behavior.
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
