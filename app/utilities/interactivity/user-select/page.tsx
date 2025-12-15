"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type UserSelect =
  | "select-none"
  | "select-text"
  | "select-all"
  | "select-auto";

export default function UserSelectPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [select, setSelect] = useState<UserSelect>("select-text");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const utilities = [
    {
      className: "select-none",
      desc: "Prevent users from selecting text",
    },
    {
      className: "select-text",
      desc: "Allow normal text selection",
    },
    {
      className: "select-all",
      desc: "Select all text on click",
    },
    {
      className: "select-auto",
      desc: "Browser decides selection behavior",
    },
  ];

  const playgroundMarkup = `<p class="select-none">
  This text cannot be selected
</p>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">User Select</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Control whether users can select text or elements with the mouse
              or keyboard.
            </p>
          </div>

          {/* Utilities */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">User Select Utilities</h2>

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
                  User select behavior
                </label>
                <div className="flex gap-2 flex-wrap">
                  {utilities.map((u) => (
                    <button
                      key={u.className}
                      onClick={() => setSelect(u.className as UserSelect)}
                      className={`px-3 py-1 text-sm rounded border ${
                        select === u.className
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      {u.className.replace("select-", "")}
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

                  <p
                    className={`${select} p-3 border rounded bg-background`}
                  >
                    Try selecting this text with your mouse or keyboard.
                  </p>

                  <CodeBlock code={playgroundMarkup} language="jsx" />

                  <p className="text-sm text-muted-foreground mt-3">
                    User selection control is useful for UI chrome and controls,
                    not for content.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real-world examples */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Buttons & UI */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold mb-3">
                  Buttons & UI labels
                </h3>

                <div className="border border-border rounded p-3 mb-3">
                  <button className="select-none px-4 py-2 bg-blue-600 text-white rounded">
                    Click me
                  </button>
                </div>

                <CodeBlock
                  code={`<button class="select-none">Click me</button>`}
                  language="jsx"
                />

                <p className="text-sm text-muted-foreground mt-2">
                  Prevent accidental text selection during interaction.
                </p>
              </div>

              {/* Code blocks */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <h3 className="font-semibold mb-3">
                  Copyable code snippet
                </h3>

                <div className="border border-border rounded p-3 mb-3">
                  <code className="select-all block bg-slate-800 text-white p-2 rounded">
                    npm install tailwindcss
                  </code>
                </div>

                <CodeBlock
                  code={`<code class="select-all">npm install tailwindcss</code>`}
                  language="jsx"
                />

                <p className="text-sm text-muted-foreground mt-2">
                  One-click full selection improves copy UX.
                </p>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Summary tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                Use <code className="bg-slate-700 px-1 rounded">select-none</code>{" "}
                on interactive UI elements.
              </li>
              <li>
                Use <code className="bg-slate-700 px-1 rounded">select-all</code>{" "}
                for copy-focused content.
              </li>
              <li>
                Never disable selection on long-form text.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
