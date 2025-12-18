"use client";

import React, { useState } from "react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { PlaygroundLayout } from "@/components/shared/playground-layout";

type PointerClass = "pointer-events-none" | "pointer-events-auto";

export function PointerPlayground() {
  const [pointerClass, setPointerClass] = useState<PointerClass>(
    "pointer-events-auto"
  );
  const [label, setLabel] = useState("Primary");
  const { copy } = useCopyToClipboard();

  const playgroundMarkup = `<div class="relative">\n  <div class="${pointerClass} absolute inset-6 rounded-md flex items-center justify-center">Overlay</div>\n  <div class="relative z-0 p-6">Underlying clickable content</div>\n</div>`;

  return (
    <PlaygroundLayout
      title="Interactive playground"
      description="Toggle overlay interactivity and see how hit-testing changes — demo covers blocking overlays, pass-through overlays, and re-enabling interactive children."
      code={playgroundMarkup}
      // 1. Controls
      controls={
        <>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Overlay pointer behavior
            </label>
            <div className="flex gap-2 flex-wrap">
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
            <label
              htmlFor="playground-label"
              className="block text-sm font-medium text-muted-foreground mb-2"
            >
              Underlying CTA label
            </label>
            <input
              id="playground-label"
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
                onClick={() => copy(pointerClass)}
                className="px-3 py-1 rounded border border-border text-sm hover:bg-muted/10"
              >
                Copy class
              </button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground mt-2">
            <strong>Note:</strong> pointer-events only affects pointer input —
            keyboard tab order and focusability remain unchanged. Use{" "}
            <code className="bg-slate-700 px-1 rounded">tabindex</code> and ARIA
            when needed.
          </div>
        </>
      }
      // 2. Preview
      preview={
        <div className="space-y-4">
          <div className="rounded p-4 bg-slate-800 relative overflow-hidden">
            {/* Underlying clickable surface */}
            <div className="rounded-md p-6 bg-slate-700 text-slate-100">
              <div className="mb-3 text-sm">
                Underlying content — should receive clicks when overlay passes
                through.
              </div>
              <button
                onClick={() => alert("underlying clicked")}
                className="px-4 py-2 rounded bg-green-600 text-white text-sm"
              >
                {label}
              </button>
            </div>

            {/* Overlay */}
            <div
              className={`absolute inset-6 rounded-md flex items-center justify-center bg-black/40 border border-white/10 transition-colors ${pointerClass}`}
              aria-hidden
            >
              <div className="text-white text-sm text-center px-4 font-mono">
                {pointerClass === "pointer-events-none"
                  ? "Overlay: pass-through (pointer-events: none)"
                  : "Overlay: blocks interaction (pointer-events: auto)"}
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            Tip: use{" "}
            <code className="bg-slate-700 px-1 rounded">
              pointer-events-none
            </code>{" "}
            on decorative overlays so UI beneath remains usable. For modal
            backdrops that should block interaction, keep{" "}
            <code className="bg-slate-700 px-1 rounded">
              pointer-events-auto
            </code>{" "}
            and trap focus.
          </div>
        </div>
      }
    />
  );
}
