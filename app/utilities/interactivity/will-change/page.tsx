"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type WillChange =
  | "will-change-auto"
  | "will-change-scroll"
  | "will-change-contents"
  | "will-change-transform";

export default function WillChangePage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [willChange, setWillChange] =
    useState<WillChange>("will-change-auto");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const utilities = [
    {
      className: "will-change-auto",
      desc: "Let the browser decide optimization strategy",
    },
    {
      className: "will-change-scroll",
      desc: "Optimize for scroll position changes",
    },
    {
      className: "will-change-contents",
      desc: "Optimize for content changes",
    },
    {
      className: "will-change-transform",
      desc: "Optimize for transform animations",
    },
  ];

  const playgroundMarkup = `<div class="will-change-transform transition-transform hover:scale-105">
  Hover me
</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Will Change</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Hint to the browser which properties are likely to change, so it
              can optimize rendering and performance.
            </p>
          </div>

          {/* Utilities */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Will Change Utilities</h2>

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
                  Will change hint
                </label>
                <div className="flex gap-2 flex-wrap">
                  {utilities.map((u) => (
                    <button
                      key={u.className}
                      onClick={() =>
                        setWillChange(u.className as WillChange)
                      }
                      className={`px-3 py-1 text-sm rounded border ${
                        willChange === u.className
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      {u.className.replace("will-change-", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="md:col-span-2 space-y-4">
                <div className="border border-border rounded-lg p-4 bg-card/30">
                  <div className="flex justify-between items-center mb-3">
                    <div className="font-semibold text-sm">Live preview</div>
                    <button
                      onClick={() => copyToClipboard(playgroundMarkup)}
                      className="text-xs px-3 py-1 rounded bg-muted/10"
                    >
                      Copy markup
                    </button>
                  </div>

                  <div
                    className={`${willChange} transition-transform duration-300 hover:scale-110 cursor-pointer w-fit px-6 py-3 bg-blue-600 text-white rounded`}
                  >
                    Hover me
                  </div>

                  <CodeBlock code={playgroundMarkup} language="jsx" />

                  <p className="text-sm text-muted-foreground mt-3">
                    This element hints the browser that a transform animation is
                    likely to occur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-world examples */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Animated card */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold mb-3">
                  Animated cards
                </h3>

                <div className="border border-border rounded p-3 mb-3">
                  <div className="will-change-transform transition-transform hover:-translate-y-2 bg-slate-700 text-white p-4 rounded w-48">
                    Product card
                  </div>
                </div>

                <CodeBlock
                  code={`<div class="will-change-transform transition-transform hover:-translate-y-2">
  Card
</div>`}
                  language="jsx"
                />

                <p className="text-sm text-muted-foreground mt-2">
                  Improves smoothness of hover and motion animations.
                </p>
              </div>

              {/* Scrolling container */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold mb-3">
                  Virtualized list
                </h3>

                <div className="border border-border rounded p-3 mb-3 h-32 overflow-y-auto will-change-scroll">
                  <div className="space-y-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="p-2 bg-slate-800 text-white rounded"
                      >
                        Item {i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                <CodeBlock
                  code={`<div class="will-change-scroll overflow-y-auto"></div>`}
                  language="jsx"
                />

                <p className="text-sm text-muted-foreground mt-2">
                  Useful for large or frequently updated scroll containers.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Summary tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                Use <code className="bg-slate-700 px-1 rounded">will-change</code>{" "}
                sparingly — it consumes resources.
              </li>
              <li>
                Best for animations and transitions that happen often.
              </li>
              <li>
                Remove will-change when it’s no longer needed.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
