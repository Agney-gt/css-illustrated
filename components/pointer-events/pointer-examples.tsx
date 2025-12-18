"use client";

import React from "react";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";

export function PointerExamples() {
  return (
    <ExampleSection title="Real-World Examples — practical patterns">
      {/* 1. Modal Backdrop */}
      <ExampleCard
        title="Modal backdrop — blocks interaction"
        copyText={`<div class="fixed inset-0 bg-black/50 pointer-events-auto"></div>\n/* Trap focus inside modal; backdrop blocks clicks. */`}
        code={`<div class="fixed inset-0 bg-black/50 pointer-events-auto"></div>\n/* Backdrop blocks pointer events; trap focus inside modal */`}
        description={
          <>
            Backdrops should block interaction to prevent users from interacting
            with the page while a modal is open — keep{" "}
            <code className="bg-slate-700 px-1 rounded">
              pointer-events-auto
            </code>
            and manage focus (trap focus inside modal, restore on close).
          </>
        }
      >
        <div className="rounded-md p-3 bg-slate-700 relative h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 pointer-events-auto" />
          <div className="relative z-10 bg-white text-slate-900 p-2 rounded shadow text-sm font-medium">
            Modal Content (focusable)
          </div>
        </div>
      </ExampleCard>

      {/* 2. Decorative Overlay */}
      <ExampleCard
        title="Decorative overlay — pass-through"
        copyText={`<div class="absolute inset-0 pointer-events-none">decorative</div>`}
        code={`<div class="pointer-events-none">Decorative overlay</div>\n/* Underlying content remains interactive */`}
        description={
          <>
            Use{" "}
            <code className="bg-slate-700 px-1 rounded">
              pointer-events-none
            </code>{" "}
            on purely decorative layers (gradients, animated glows) so they
            never block underlying controls.
          </>
        }
      >
        <div className="relative rounded bg-slate-700 p-4 h-32 flex items-center justify-center">
          {/* The Overlay */}
          <div
            style={{ pointerEvents: "none" }}
            className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-tr from-pink-500 to-yellow-400 rounded-full opacity-60"
          />
          <button className="px-3 py-2 rounded bg-blue-600 text-white relative z-0 hover:bg-blue-500">
            Action
          </button>
        </div>
      </ExampleCard>

      {/* 3. Nested Interactivity */}
      <ExampleCard
        title="Click-through banner with interactive child"
        copyText={`<div class="pointer-events-none">banner decorative</div>\n<button class="pointer-events-auto">interactive</button>`}
        code={`<div class="pointer-events-none">decorative</div>\n<button class="pointer-events-auto">interactive</button>`}
        description={
          <>
            When a container is non-interactive, re-enable events on nested
            interactive children using{" "}
            <code className="bg-slate-700 px-1 rounded">
              pointer-events-auto
            </code>
            .
          </>
        }
      >
        <div className="relative rounded bg-slate-700 p-6 flex justify-center">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-slate-300 text-sm">
            Decorative center
          </div>
          <button className="relative pointer-events-auto px-3 py-2 rounded bg-green-600 text-white hover:bg-green-500">
            Clickable
          </button>
        </div>
      </ExampleCard>

      {/* 4. Enlarged Hit Area */}
      <ExampleCard
        title="Enlarged hit area (invisible)"
        copyText={`/* CSS: .hit-area::before { content: ''; position: absolute; inset: -8px; pointer-events: auto; } */\n<button class="relative z-10">Target</button>`}
        code={`/* Increase clickable area via a positioned element with pointer-events:auto */\n<button class="relative z-10">Target</button>\n<div class="absolute -inset-2" style="pointer-events:auto" />`}
        description={
          <>
            Create larger, invisible hit targets for small controls by adding a
            positioned pseudo-element with{" "}
            <code className="bg-slate-700 px-1 rounded">
              pointer-events-auto
            </code>{" "}
            while keeping visuals compact.
          </>
        }
      >
        <div className="flex justify-center p-4">
          <div className="relative">
            <button className="px-3 py-2 rounded bg-slate-700 text-white hover:bg-slate-600">
              Target
            </button>
            <div
              className="absolute -inset-2 border border-red-500/30"
              style={{ pointerEvents: "auto" }}
              title="Visualized Hit Area"
            />
          </div>
        </div>
      </ExampleCard>

      {/* 5. SVG Precise Hit Testing */}
      <ExampleCard
        title="SVG — precise hit testing"
        copyText={`<svg><rect x="0" y="0" width="100" height="50" fill="transparent" pointer-events="visiblePainted"/></svg>`}
        code={`<svg>\n  <rect x="0" y="0" width="100" height="50" fill="transparent" pointer-events="visiblePainted" />\n</svg>`}
        description={
          <>
            SVG's{" "}
            <code className="bg-slate-700 px-1 rounded">pointer-events</code>{" "}
            attribute (visiblePainted, visibleFill, bounding-box, etc.) enables
            shape-level control over hit areas — useful in diagrams and map
            overlays.
          </>
        }
      >
        <div className="text-white w-full h-28 rounded bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center">
          SVG / Canvas area
        </div>
      </ExampleCard>

      {/* Footer Notes */}
      <div className="md:col-span-2 text-sm text-muted-foreground mt-4 border-t border-border pt-4">
        <strong>Accessibility & UX notes:</strong>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            Pointer-events controls only pointer input — keyboard focus and tab
            order are unaffected. Use{" "}
            <code className="bg-slate-700 px-1 rounded">tabindex</code> and ARIA
            for keyboard behavior.
          </li>
          <li>
            Avoid hiding interactive controls behind pass-through overlays
            unless intended; always provide clear visual cues.
          </li>
          <li>
            Test across devices — touch platforms and browsers can differ in how
            they handle pointer-events and hit-testing.
          </li>
          <li>
            For complex hit testing (SVG/Canvas), document expected behavior and
            provide fallback interactions for older browsers.
          </li>
        </ul>
      </div>
    </ExampleSection>
  );
}
