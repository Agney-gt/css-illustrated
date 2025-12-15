"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type BorderWidth =
  | "border-0"
  | "border"
  | "border-2"
  | "border-4"
  | "border-8"
  | "border-x-2"
  | "border-y-4"
  | "border-t-2"
  | "border-r-4";

type BorderStyle =
  | "border-solid"
  | "border-dashed"
  | "border-dotted"
  | "border-double"
  | "border-none";

export default function BorderWidthPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [widthClass, setWidthClass] = useState<BorderWidth>("border");
  const [styleClass, setStyleClass] = useState<BorderStyle>("border-solid");
  const [colorClass, setColorClass] = useState("border-border");
  const [radius, setRadius] = useState("rounded-md");
  const [showShadow, setShowShadow] = useState(true);
  const [items, setItems] = useState(3);

  const utilities: { cls: BorderWidth; desc: string }[] = [
    { cls: "border-0", desc: "No border" },
    { cls: "border", desc: "1px border (default)" },
    { cls: "border-2", desc: "2px border" },
    { cls: "border-4", desc: "4px border" },
    { cls: "border-8", desc: "8px border" },
    { cls: "border-x-2", desc: "2px left+right borders" },
    { cls: "border-y-4", desc: "4px top+bottom borders" },
    { cls: "border-t-2", desc: "2px top border" },
    { cls: "border-r-4", desc: "4px right border" },
  ];

  const styles: BorderStyle[] = [
    "border-solid",
    "border-dashed",
    "border-dotted",
    "border-double",
    "border-none",
  ];

  const colors = [
    "border-border",
    "border-blue-600",
    "border-green-500",
    "border-red-500",
    "border-yellow-400",
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

  const playgroundMarkup = `<div class="${widthClass} ${styleClass} ${colorClass} ${radius} ${
    showShadow ? "shadow-md" : ""
  } p-6">
  Preview content
</div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Border Width</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Control border thickness on elements — from hairline outlines to
              bold frames. Useful for cards, inputs, focus rings, table dividers
              and emphasis.
            </p>
          </div>

          {/* Utilities Grid */}
          <div className="space-y-6 border-t border-border pt-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Border width utilities</h2>
              <p className="text-muted-foreground">
                Click any utility to copy it.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {utilities.map((u) => (
                <button
                  key={u.cls}
                  onClick={() => copyToClipboard(u.cls)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group cursor-pointer"
                  aria-label={`Copy ${u.cls}`}
                >
                  <div className="flex items-center justify-between">
                    <code className="text-black text-sm font-mono text-accent font-semibold">
                      {u.cls}
                    </code>
                    <span className="text-xs text-muted-foreground">
                      {copied === u.cls ? "Copied" : "Copy"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{u.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Playground */}
          <div className="space-y-4 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive playground</h2>
            <p className="text-muted-foreground">
              Toggle border width, style, color and radius to preview
              combinations. Buttons only — instant toggles.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Width
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {(
                      [
                        "border-0",
                        "border",
                        "border-2",
                        "border-4",
                        "border-8",
                      ] as BorderWidth[]
                    ).map((w) => (
                      <button
                        key={w}
                        onClick={() => setWidthClass(w)}
                        className={`px-3 py-1 rounded border text-sm ${
                          widthClass === w
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {w.replace("border-", "") || "0"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Style
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {styles.map((s) => (
                      <button
                        key={s}
                        onClick={() => setStyleClass(s)}
                        className={`px-3 py-1 rounded border text-sm ${
                          styleClass === s
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {s.replace("border-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Color
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setColorClass(c)}
                        className={`px-3 py-1 rounded border text-sm ${
                          colorClass === c
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {c.replace("border-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Radius
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {(
                      [
                        "rounded-none",
                        "rounded-sm",
                        "rounded",
                        "rounded-md",
                        "rounded-lg",
                        "rounded-full",
                      ] as string[]
                    ).map((r) => (
                      <button
                        key={r}
                        onClick={() => setRadius(r)}
                        className={`px-3 py-1 rounded border text-sm ${
                          radius === r
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {r.replace("rounded-", "") || "none"}
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
                      onClick={() => setShowShadow((v) => !v)}
                      className={`px-3 py-1 rounded border text-sm ${
                        showShadow
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      Shadow
                    </button>
                    <button
                      onClick={() => setItems((n) => (n === 3 ? 6 : 3))}
                      className="px-3 py-1 rounded border text-sm border-border"
                    >
                      Toggle examples
                    </button>
                  </div>
                </div>
              </div>

              {/* Playground preview */}
              <div className="md:col-span-2 space-y-3">
                <div className="border border-border rounded-lg p-4 bg-card/30">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Playground</div>
                      <div className="text-xs text-muted-foreground">
                        Live preview & markup
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
                      className={`${widthClass} ${styleClass} ${colorClass} ${radius} ${
                        showShadow ? "shadow-md" : ""
                      } bg-slate-700 p-6`}
                    >
                      <div className="font-semibold text-slate-100">
                        Preview box
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Border preview:{" "}
                        <code className="bg-slate-700 px-1 rounded">{`${widthClass} ${styleClass} ${colorClass}`}</code>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Array.from({ length: items }).map((_, i) => (
                        <div
                          key={i}
                          className={`${widthClass} ${styleClass} ${colorClass} ${radius} ${
                            showShadow ? "shadow-sm" : ""
                          } bg-slate-700 p-3`}
                        >
                          <div className="font-semibold text-slate-100">
                            Block {i + 1}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Example content
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Tip:</strong> use thin borders (1px) for light
                    dividers and thicker borders for emphasis or card frames.
                  </p>

                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>
            </div>
          </div>

          {/* Real-world examples */}
          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">
              Real-World Examples — visuals & code
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Elevated card with thick border */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Elevated card (accent frame)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("border-4 border-blue-600 rounded-md")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="border-4 border-blue-600 rounded-md p-4 bg-slate-700">
                    <div className="font-semibold text-slate-100">
                      Featured card
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Use a thicker colored border to draw attention.
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="border-4 border-blue-600 rounded-md p-4">Featured content</div>`}
                  />
                </div>
              </div>
              {/* Input with focus thick border */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Form input — focus state
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "border border-border focus:border-2 focus:border-blue-600 "
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <label className="block text-sm text-slate-200 mb-2">
                    Name
                  </label>
                  <input
                    className="w-full px-3 py-2 rounded border border-border bg-slate-700 text-white focus:outline-none focus:border-2 focus:border-blue-600"
                    placeholder="Your name"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    On focus we increase border to 2px for stronger emphasis.
                  </p>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<input class="border border-border focus:border-2 focus:border-blue-600" />`}
                  />
                </div>
              </div>
              {/* Table with row dividers */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Table / list dividers
                  </h3>
                  <button
                    onClick={() => copyToClipboard("border-y border-border")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-auto">
                  <div className="divide-y divide-border">
                    <div className="py-3 text-slate-200">Row 1 — item</div>
                    <div className="py-3 text-slate-200">Row 2 — item</div>
                    <div className="py-3 text-slate-200">Row 3 — item</div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="divide-y divide-border">...</div>`}
                  />
                </div>
              </div>
              {/* Avatar with ring */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Avatar with border/ring
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "border-2 border-green-500 rounded-full ring ring-green-300"
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full border-2 border-green-500 bg-slate-700 flex items-center justify-center text-white">
                      AL
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">
                      Alex Park
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Designer
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="rounded-full border-2 border-green-500">...</div>`}
                  />
                </div>
              </div>
              
              {/* Bordered input group (inset focus) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Input group — inset / subtle frame
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("border border-gray-600 rounded-md p-2")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="border border-gray-600 rounded-md p-3 bg-slate-700">
                    <label className="block text-sm text-slate-200 mb-2">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 rounded bg-slate-800 text-white border border-transparent focus:border-blue-500 focus:outline-none"
                      placeholder="name@example.com"
                    />
                    <div className="text-xs text-muted-foreground mt-2">
                      Subtle framed field—use border change on focus for
                      clarity.
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="border rounded-md p-3">\n  <input class="focus:border-blue-500" />\n</div>`}
                  />
                </div>
              </div>
              {/* Timeline with left accent border */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Timeline — left accent border
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("border-l-4 border-blue-600 pl-3")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 space-y-3">
                  <div className="bg-slate-700 rounded p-3">
                    <div className="border-l-4 border-blue-600 pl-3">
                      <div className="font-semibold text-slate-100">
                        Release 1.4
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Bug fixes and improvements
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700 rounded p-3">
                    <div className="border-l-4 border-gray-600 pl-3">
                      <div className="font-semibold text-slate-100">
                        Release 1.3
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Feature rollout
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="border-l-4 border-blue-600 pl-3">Timeline item</div>`}
                  />
                </div>
              </div>
              {/* Draft card with dashed border (low emphasis) */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Draft / placeholder card (dashed)
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "border-dashed border border-border rounded-md"
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="border border-dashed border-border rounded-md p-4 bg-slate-700">
                    <div className="font-semibold text-slate-100">
                      Draft content
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Use dashed borders to indicate temporary or placeholder
                      UI.
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="border-dashed border rounded-md p-4">Placeholder</div>`}
                  />
                </div>
              </div>
              {/* Price / comparison row with vertical separators */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Price comparison — vertical separators
                  </h3>
                  <button
                    onClick={() => copyToClipboard("divide-x divide-border")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="flex divide-x divide-border">
                    <div className="flex-1 p-3 text-center">
                      <div className="font-semibold text-slate-100">Basic</div>
                      <div className="text-sm text-muted-foreground">Free</div>
                    </div>
                    <div className="flex-1 p-3 text-center">
                      <div className="font-semibold text-slate-100">Pro</div>
                      <div className="text-sm text-muted-foreground">₹499</div>
                    </div>
                    <div className="flex-1 p-3 text-center">
                      <div className="font-semibold text-slate-100">
                        Enterprise
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Contact
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="flex divide-x divide-border">...</div>`}
                  />
                </div>
              </div>
              {/* Framed image with caption */}
              <div className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Framed image with caption
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        "border border-gray-600 rounded-md overflow-hidden"
                      )
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <figure className="border border-gray-600 rounded-md overflow-hidden bg-slate-700">
                    <div className="w-full h-36 bg-gradient-to-br from-slate-700 to-slate-600" />
                    <figcaption className="p-3 text-sm text-muted-foreground">
                      Image caption — framed for emphasis
                    </figcaption>
                  </figure>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<figure class="border rounded-md overflow-hidden">...</figure>`}
                  />
                </div>
              </div>
              {/* Badge / product outline */}
              <div className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Product tile with sale outline
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("border-2 border-red-500 rounded-md")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <div className="w-full h-28 bg-slate-700 rounded-md" />
                  </div>
                  <div className="col-span-2">
                    <div className="border-2 border-red-500 rounded-md p-3 bg-slate-700">
                      <div className="font-semibold text-slate-100">
                        Limited edition
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Special price — highlighted with a bold red frame.
                      </div>
                    </div>
                    <div className="mt-3">
                      <CodeBlock
                        language="jsx"
                        code={`<div class="border-2 border-red-500 rounded-md p-3">Limited edition</div>`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal header with strong outline */}
              <div className="md:col-span-2 border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Modal header — strong outline
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("border-t-4 border-blue-600")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="rounded-md overflow-hidden bg-slate-700">
                    <div className="border-t-4 border-blue-600 p-4">
                      <div className="font-semibold text-slate-100">
                        Settings
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Modal with a strong top accent to indicate state.
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-slate-200">
                        Modal body content goes here.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="border-t-4 border-blue-600 p-4">Modal header</div>`}
                  />
                </div>
              </div>
              {/* Accessibility note */}
              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility & UX notes:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Border thickness is visual only — ensure focus styles are
                    clearly visible and not clipped.
                  </li>
                  <li>
                    Avoid relying solely on border color/width to convey state —
                    combine with icons or text for color-blind users.
                  </li>
                  <li>
                    Thick borders impact layout and box size; prefer using
                    outline/ring utilities for focus so layout doesn't shift.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Tips & best practices</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <strong>Use thin borders</strong> (1px) for subtle dividers;
                thicker borders for emphasis or separated modules.
              </li>
              <li>
                <strong>Prefer outline / ring for focus</strong> — ring
                utilities don't affect layout like borders do.
              </li>
              <li>
                <strong>Combine with border-style</strong> (dashed/dotted) for
                secondary separators (e.g., print previews, placeholders).
              </li>
              <li>
                <strong>Responsive borders:</strong> try responsive widths
                (e.g.,{" "}
                <code className="bg-slate-700 px-1 rounded">md:border-2</code>)
                to increase emphasis on larger screens.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
