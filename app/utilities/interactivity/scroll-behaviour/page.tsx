"use client";

import { useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type ScrollBehavior = "scroll-auto" | "scroll-smooth";

export default function ScrollBehaviorPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [behavior, setBehavior] =
    useState<ScrollBehavior>("scroll-smooth");

  const containerRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const utilities = [
    {
      className: "scroll-auto",
      desc: "Instant scrolling without animation",
    },
    {
      className: "scroll-smooth",
      desc: "Smooth animated scrolling",
    },
  ];

  const playgroundMarkup = `<div class="scroll-smooth h-48 overflow-y-auto">
  <a href="#target">Jump to section</a>
</div>`;

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({
      behavior: behavior === "scroll-smooth" ? "smooth" : "auto",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Scroll Behavior</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Control how scrolling behaves when navigating within a page or
              scroll container.
            </p>
          </div>

          {/* Utilities */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Scroll Behavior Utilities</h2>

            <div className="grid md:grid-cols-2 gap-4">
              {utilities.map((u) => (
                <button
                  key={u.className}
                  onClick={() => copyToClipboard(u.className)}
                  className="border border-border rounded-lg p-4 text-left hover:bg-card/50 transition"
                >
                  <div className="flex items-center justify-between">
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
                  Scroll behavior
                </label>
                <div className="flex gap-2">
                  {utilities.map((u) => (
                    <button
                      key={u.className}
                      onClick={() =>
                        setBehavior(u.className as ScrollBehavior)
                      }
                      className={`px-3 py-1 rounded border text-sm ${
                        behavior === u.className
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      {u.className.replace("scroll-", "")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              <div className="md:col-span-2">
                <div
                  className={`border border-border rounded-lg p-4 bg-card/30 ${behavior}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-semibold text-sm">Live preview</div>
                    <button
                      onClick={() => copyToClipboard(playgroundMarkup)}
                      className="text-xs px-3 py-1 rounded bg-muted/10"
                    >
                      Copy markup
                    </button>
                  </div>

                  <div
                    ref={containerRef}
                    className="h-48 overflow-y-auto border rounded p-3 space-y-6"
                  >
                    <p>Scroll or click the button below.</p>

                    <div className="h-40" />

                    <button
                      onClick={scrollToTarget}
                      className="px-3 py-1 bg-blue-600 text-white rounded"
                    >
                      Scroll to target
                    </button>

                    <div className="h-40" />

                    <div
                      ref={targetRef}
                      className="p-3 bg-green-600 text-white rounded"
                    >
                      Target section
                    </div>

                    <div className="h-40" />
                  </div>

                  <CodeBlock code={playgroundMarkup} language="jsx" />

                  <p className="text-sm text-muted-foreground mt-3">
                    Smooth scrolling improves perceived navigation but should be
                    avoided for critical UI where instant feedback is expected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-world examples */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Docs navigation */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold mb-3">
                  Documentation navigation
                </h3>

                <div className="border border-border rounded p-3 mb-3 scroll-smooth h-32 overflow-y-auto">
                  <a href="#docs" className="text-blue-600 underline">
                    Jump to section
                  </a>
                  <div className="h-40" />
                  <div id="docs" className="font-semibold">
                    Docs section
                  </div>
                </div>

                <CodeBlock
                  code={`<html class="scroll-smooth">...</html>`}
                  language="jsx"
                />

                <p className="text-sm text-muted-foreground mt-2">
                  Ideal for long documentation and landing pages.
                </p>
              </div>

              {/* Modal / panel */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold mb-3">
                  Modal or side panel
                </h3>

                <div className="border border-border rounded p-3 mb-3 scroll-auto h-32 overflow-y-auto">
                  <p>Modal content</p>
                  <div className="h-40" />
                  <p>More content</p>
                </div>

                <CodeBlock
                  code={`<div class="scroll-auto overflow-y-auto"></div>`}
                  language="jsx"
                />

                <p className="text-sm text-muted-foreground mt-2">
                  Instant scrolling is preferred in constrained UI components.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Summary tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                Apply scroll behavior to the scroll container or root element.
              </li>
              <li>
                Use smooth scrolling for navigation, not data-entry UIs.
              </li>
              <li>
                Respect reduced-motion preferences where possible.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
