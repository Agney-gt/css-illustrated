"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type TouchAction =
  | "touch-auto"
  | "touch-none"
  | "touch-pan-x"
  | "touch-pan-y"
  | "touch-pinch-zoom";

export default function TouchActionPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [action, setAction] =
    useState<TouchAction>("touch-auto");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const utilities = [
    {
      className: "touch-auto",
      desc: "Browser handles all default touch behaviors",
    },
    {
      className: "touch-none",
      desc: "Disable all touch interactions",
    },
    {
      className: "touch-pan-x",
      desc: "Allow horizontal panning only",
    },
    {
      className: "touch-pan-y",
      desc: "Allow vertical panning only",
    },
    {
      className: "touch-pinch-zoom",
      desc: "Allow pinch zoom gestures",
    },
  ];

  const playgroundMarkup = `<div class="touch-pan-x overflow-x-auto">
  <div class="flex gap-4">
    <div class="w-64 h-32">Card</div>
  </div>
</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Touch Action</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Control how touch input behaves on touch-enabled devices, such as
              scrolling, panning, and zooming.
            </p>
          </div>

          {/* Utilities */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Touch Action Utilities</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {utilities.map((u) => (
                <button
                  key={u.className}
                  onClick={() => copyToClipboard(u.className)}
                  className="border border-border rounded-lg p-4 text-left hover:bg-card/50 transition"
                >
                  <div className="flex justify-between items-center">
                    <code className="font-mono text-sm font-semibold text-foreground bg-muted/40 px-2 py-0.5 rounded">
                      {u.className}
                    </code>
                    <span className="text-xs text-muted-foreground">
                      {copied === u.className ? "Copied" : "Copy"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {u.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Playground */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Controls */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-muted-foreground">
                  Touch action
                </label>
                <div className="flex gap-2 flex-wrap">
                  {utilities.map((u) => (
                    <button
                      key={u.className}
                      onClick={() =>
                        setAction(u.className as TouchAction)
                      }
                      className={`px-3 py-1 text-sm rounded border ${
                        action === u.className
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      {u.className.replace("touch-", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="md:col-span-2 space-y-4">
                <div
                  className={`border border-border rounded-lg p-4 bg-card/30 ${action}`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-semibold text-sm">Live preview</div>
                    <button
                      onClick={() => copyToClipboard(playgroundMarkup)}
                      className="text-xs px-3 py-1 rounded bg-muted/10"
                    >
                      Copy markup
                    </button>
                  </div>

                  <div className="overflow-x-auto flex gap-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-64 h-32 bg-blue-600 rounded flex-shrink-0 text-white flex items-center justify-center"
                      >
                        Card {i}
                      </div>
                    ))}
                  </div>

                  <CodeBlock code={playgroundMarkup} language="jsx" />

                  <p className="text-sm text-muted-foreground mt-3">
                    Touch actions mainly affect mobile and tablet interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-world examples */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Horizontal carousel */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold mb-3">
                  Swipeable carousel
                </h3>

                <div className="border border-border rounded p-3 mb-3 touch-pan-x overflow-x-auto flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-56 h-28 bg-slate-700 rounded flex-shrink-0"
                    />
                  ))}
                </div>

                <CodeBlock
                  code={`<div class="touch-pan-x overflow-x-auto">...</div>`}
                  language="jsx"
                />

                <p className="text-sm text-muted-foreground mt-2">
                  Prevents vertical scrolling while swiping horizontally.
                </p>
              </div>

              {/* Drawing canvas */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold mb-3">
                  Custom gesture surface
                </h3>

                <div className="border border-border rounded p-3 mb-3">
                  <div className="touch-none h-28 bg-slate-800 rounded flex items-center justify-center text-white">
                    Gesture area
                  </div>
                </div>

                <CodeBlock
                  code={`<div class="touch-none">Gesture area</div>`}
                  language="jsx"
                />

                <p className="text-sm text-muted-foreground mt-2">
                  Required when implementing custom touch or drag logic.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Summary tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                Use <code className="bg-slate-700 px-1 rounded">touch-pan-x</code>{" "}
                or <code className="bg-slate-700 px-1 rounded">touch-pan-y</code>{" "}
                for scrollable carousels.
              </li>
              <li>
                Use <code className="bg-slate-700 px-1 rounded">touch-none</code>{" "}
                when handling gestures in JavaScript.
              </li>
              <li>
                Touch action improves performance by reducing browser guesswork.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
