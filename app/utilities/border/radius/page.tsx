"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

type RadiusClass =
  | "rounded-none"
  | "rounded-sm"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-2xl"
  | "rounded-full"
  | "rounded-tl-lg"
  | "rounded-tr-lg"
  | "rounded-bl-lg"
  | "rounded-br-lg";

export default function BorderRadiusPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [radius, setRadius] = useState<RadiusClass>("rounded-md");
  const [previewSize, setPreviewSize] = useState("w-[220px] h-40");
  const [showShadow, setShowShadow] = useState(true);
  const [items, setItems] = useState(3);
  const [transitionOn, setTransitionOn] = useState(true);
  const [responsiveDemo, setResponsiveDemo] = useState(false);

  const utilities: { cls: RadiusClass; desc: string }[] = [
    { cls: "rounded-none", desc: "No rounding" },
    { cls: "rounded-sm", desc: "Small radius" },
    { cls: "rounded", desc: "Default radius" },
    { cls: "rounded-md", desc: "Medium radius" },
    { cls: "rounded-lg", desc: "Large radius" },
    { cls: "rounded-xl", desc: "Extra large" },
    { cls: "rounded-2xl", desc: "Very large" },
    { cls: "rounded-full", desc: "Pill / circle" },
    { cls: "rounded-tl-lg", desc: "Top-left only" },
    { cls: "rounded-tr-lg", desc: "Top-right only" },
    { cls: "rounded-bl-lg", desc: "Bottom-left only" },
    { cls: "rounded-br-lg", desc: "Bottom-right only" },
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      setCopied(null);
    }
  };

  const transitionClass = transitionOn ? "transition-all duration-200" : "";

  const responsiveClass = responsiveDemo
    ? `${radius} md:rounded-xl lg:rounded-2xl`
    : radius;

  const playgroundMarkup = `<!-- preview -->\n<div class="${previewSize} ${
    responsiveDemo ? `${radius} md:rounded-xl lg:rounded-2xl` : radius
  } ${showShadow ? "shadow-md" : ""} ${
    transitionOn ? "transition-all duration-200" : ""
  } bg-slate-700"></div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Border Radius</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Control element corner rounding — from sharp corners to pills and
              circles. This guide covers practical patterns, accessibility
              considerations, responsive radius, animation, and many real-world
              visuals.
            </p>
          </div>

          {/* Utilities grid */}
          <section className="space-y-6 border-t border-border pt-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Radius utilities</h2>
                <p className="text-muted-foreground">
                  Click a class to copy it.
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                Recommended default:{" "}
                <code className="bg-slate-700 px-1 rounded">rounded-md</code>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {utilities.map((u) => (
                <button
                  key={u.cls}
                  onClick={() => copyToClipboard(u.cls)}
                  className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group cursor-pointer"
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
          </section>

          {/* Interactive playground */}
          <section className="space-y-4 border-t border-border pt-8">
            <div className="flex items-start justify-between">
              <h2 className="text-3xl font-bold">Interactive playground</h2>
              <div className="text-sm text-muted-foreground">
                Try responsive + transition toggles
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Controls */}
              <div className="space-y-3 md:col-span-1">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Radius
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {utilities.map((u) => (
                      <button
                        key={u.cls}
                        onClick={() => setRadius(u.cls)}
                        className={`px-3 py-1 rounded border text-sm ${
                          radius === u.cls
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {u.cls.replace("rounded-", "")}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Preview size
                  </label>
                  <div className="flex gap-2">
                    {[
                      { label: "card", cls: "w-[220px] h-40" },
                      { label: "wide", cls: "w-[360px] h-36" },
                      { label: "avatar", cls: "w-24 h-24" },
                    ].map((s) => (
                      <button
                        key={s.cls}
                        onClick={() => setPreviewSize(s.cls)}
                        className={`px-3 py-1 rounded border text-sm ${
                          previewSize === s.cls
                            ? "border-blue-500 bg-blue-500/10"
                            : "border-border"
                        }`}
                      >
                        {s.label}
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
                      Toggle gallery
                    </button>
                    <button
                      onClick={() => setTransitionOn((v) => !v)}
                      className={`px-3 py-1 rounded border text-sm ${
                        transitionOn
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      Transition
                    </button>
                    <button
                      onClick={() => setResponsiveDemo((v) => !v)}
                      className={`px-3 py-1 rounded border text-sm ${
                        responsiveDemo
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-border"
                      }`}
                    >
                      Responsive
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
                        Live preview — toggle the options and see how radius
                        behaves across elements
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
                      className={`mb-4 ${previewSize} ${responsiveClass} ${
                        showShadow ? "shadow-md" : ""
                      } ${transitionClass} bg-slate-700 flex items-center justify-center text-slate-100`}
                    >
                      Preview box
                    </div>

                    <div className="flex items-center gap-4 flex-wrap">
                      <div
                        className={`${responsiveClass} w-16 h-16 bg-slate-700 flex items-center justify-center text-white`}
                      >
                        AV
                      </div>
                      <button
                        className={`${responsiveClass} px-4 py-2 bg-blue-600 text-white`}
                      >
                        Primary
                      </button>
                      <button
                        className={`px-4 py-2 bg-slate-700 text-white border ${responsiveClass}`}
                      >
                        Secondary
                      </button>
                    </div>

                    <div className="mt-4 flex gap-3">
                      {Array.from({ length: items }).map((_, i) => (
                        <div
                          key={i}
                          className={`${responsiveClass} w-24 h-16 bg-slate-700`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    Previewing{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      {responsiveDemo ? `${radius} (responsive)` : radius}
                    </code>
                    . Responsive demo adds{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      md:rounded-xl
                    </code>{" "}
                    and{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      lg:rounded-2xl
                    </code>{" "}
                    at breakpoints.
                  </p>

                  <CodeBlock code={playgroundMarkup} language="jsx" />
                </div>
              </div>
            </div>
          </section>

          {/* Real-world examples (expanded) */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">
              Real-World Examples — visuals & code
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* User profile with status badge */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Profile with status badge
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-full")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center gap-4">
                  <div className="relative">
                    <div className="rounded-full w-14 h-14 bg-slate-700 flex items-center justify-center text-white">
                      JS
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200">
                      Jordan Lee
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Frontend engineer
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <button className="rounded-full px-3 py-1 bg-blue-600 text-white text-sm">
                      Follow
                    </button>
                    <button className="rounded px-3 py-1 border text-slate-200">
                      Message
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="relative">
  <div class="rounded-full w-14 h-14 bg-slate-700"></div>
  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background"></span>
</div>`}
                  />
                </div>
              </article>

              {/* Chat bubbles */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Chat bubbles (rounded corners)
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-lg")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 space-y-3">
                  <div className="max-w-xs bg-slate-700 rounded-lg p-3 text-slate-200">
                    Hey — are you available for a quick call?
                  </div>
                  <div className="self-end max-w-xs bg-blue-600 rounded-lg p-3 text-white ml-auto">
                    Yes — give me 10 mins.
                  </div>
                  <div className="max-w-xs bg-slate-700 rounded-lg p-3 text-slate-200">
                    Perfect, sharing screen then.
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="bg-slate-700 rounded-lg p-3">Message</div>`}
                  />
                </div>
              </article>

              {/* Notification / toast */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Notification / toast
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("rounded-md ring ring-green-400")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="rounded-md ring ring-green-400 ring-opacity-20 bg-slate-700 p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">Saved</div>
                      <div className="text-sm text-muted-foreground">
                        Your changes were stored successfully.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="rounded-md ring ring-green-400 bg-slate-700 p-3">Toast</div>`}
                  />
                </div>
              </article>

              {/* Search bar / pill */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">Search pill / input</h3>
                  <button
                    onClick={() => copyToClipboard("rounded-full")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="relative">
                        <input
                          className="w-full rounded-full bg-slate-700 px-4 py-2 text-slate-200"
                          placeholder="Search..."
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-blue-600 text-white">
                          Go
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<input class="rounded-full px-4 py-2" placeholder="Search" />`}
                  />
                </div>
              </article>

              {/* Media card with overlay */}
              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Media card with rounded image
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-lg")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="w-full h-36 bg-gradient-to-br from-slate-700 to-slate-600" />
                    <div className="absolute bottom-3 left-3 bg-black/40 px-3 py-1 rounded-md text-white">
                      New
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="font-semibold text-slate-200">
                      Video title
                    </div>
                    <div className="text-sm text-muted-foreground">
                      2:34 • 12k views
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="relative rounded-lg overflow-hidden">\n  <img src="..." class="w-full h-36 object-cover" />\n</div>`}
                  />
                </div>
              </article>

              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Empty state / illustration
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-lg")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-4 flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-lg bg-slate-700 flex items-center justify-center text-slate-200 text-xl">
                    📭
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-200">
                      No results yet
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Try adjusting your filters
                    </div>
                  </div>
                  <button className="mt-2 px-4 py-2 bg-blue-600 rounded-md text-white">
                    Explore templates
                  </button>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="rounded-lg bg-slate-700 p-6 text-center">
  <div class="text-3xl">📭</div>
  <p class="mt-3">No results yet</p>
  <button class="mt-4 px-4 py-2 bg-blue-600 rounded-md text-white">Explore</button>
</div>`}
                  />
                </div>
              </article>

              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Pricing card (rounded corners)
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-xl")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-4">
                  <div className="rounded-xl bg-slate-700 p-5 text-slate-200">
                    <div className="text-2xl font-semibold">Pro</div>
                    <div className="text-sm text-muted-foreground">
                      Most popular
                    </div>
                    <div className="mt-4 text-3xl font-bold">₹499</div>
                    <ul className="mt-4 text-sm text-slate-200 space-y-1">
                      <li>✓ Unlimited projects</li>
                      <li>✓ Team collaboration</li>
                      <li>✓ Priority support</li>
                    </ul>
                    <button className="mt-4 w-full px-4 py-2 bg-blue-600 rounded-lg text-white">
                      Get Pro
                    </button>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="rounded-xl bg-slate-700 p-5">
  <h3 class="text-2xl">Pro</h3>
  <div class="text-3xl font-bold">₹499</div>
  <button class="mt-4 w-full rounded-lg bg-blue-600 text-white">Get Pro</button>
</div>`}
                  />
                </div>
              </article>

              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Product tag / sale badge
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-md")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center gap-4">
                  <div className="w-20 h-20 rounded-md bg-slate-700" />
                  <div className="flex-1">
                    <div className="font-semibold text-slate-200">
                      Sneaker Model X
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Comfort fit • New
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="px-2 py-1 bg-red-500 rounded text-white text-sm">
                      20% off
                    </div>
                    <div className="text-sm text-slate-200 font-semibold">
                      ₹2,399
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="flex items-center gap-4">
  <div class="w-20 h-20 rounded-md bg-slate-700"></div>
  <div>
    <div class="font-semibold">Product</div>
    <div class="text-sm">Short desc</div>
  </div>
  <div class="ml-auto">
    <div class="rounded px-2 py-1 bg-red-500 text-white">Sale</div>
  </div>
</div>`}
                  />
                </div>
              </article>

              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Form control — error state
                  </h3>
                  <button
                    onClick={() =>
                      copyToClipboard("rounded-sm ring ring-red-500")
                    }
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3">
                  <label className="block text-sm text-slate-200 mb-2">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 rounded-sm border border-red-500 bg-slate-700 text-white"
                    value="invalid@"
                    readOnly
                  />
                  <div className="text-xs text-red-400 mt-2">
                    Please enter a valid email address
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<label>Email</label>
<input class="rounded-sm border border-red-500" />
<p class="text-red-400 text-xs">Invalid</p>`}
                  />
                </div>
              </article>

              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Floating action button (FAB)
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-full shadow-lg")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 shadow-lg flex items-center justify-center text-white text-xl">
                    +
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<button class="rounded-full w-12 h-12 bg-blue-600 shadow-lg text-white">+</button>`}
                  />
                </div>
              </article>

              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Compact badge counter
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-full")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-white">
                      🔔
                    </div>
                    <div className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full text-xs text-white flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <div className="text-slate-200">Notifications</div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="relative">
  <div class="w-12 h-12 rounded-full bg-slate-700"></div>
  <div class="absolute -top-1 -right-1 rounded-full bg-red-500 w-5 h-5 text-xs text-white">3</div>
</div>`}
                  />
                </div>
              </article>

              <article className="border border-border rounded-lg p-4 bg-card/20">
                <div className="mb-3 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold">
                    Mini carousel / thumbnail row
                  </h3>
                  <button
                    onClick={() => copyToClipboard("rounded-md")}
                    className="text-xs px-2 py-1 rounded bg-muted/10 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>

                <div className="bg-slate-800 rounded p-3 overflow-x-auto">
                  <div className="flex gap-3">
                    <div className="rounded-md w-28 h-20 bg-slate-700" />
                    <div className="rounded-md w-28 h-20 bg-slate-700" />
                    <div className="rounded-md w-28 h-20 bg-slate-700" />
                    <div className="rounded-md w-28 h-20 bg-slate-700" />
                  </div>
                </div>

                <div className="mt-3">
                  <CodeBlock
                    language="jsx"
                    code={`<div class="flex gap-3 overflow-x-auto">
  <img class="rounded-md w-28 h-20" src="..." />
  <img class="rounded-md w-28 h-20" src="..." />
</div>`}
                  />
                </div>
              </article>

              {/* Accessibility note */}
              <div className="md:col-span-2 text-sm text-muted-foreground">
                <strong>Accessibility & UX notes:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Border radius is visual-only — DOM order, focus order and
                    semantics are unaffected.
                  </li>
                  <li>
                    Keep focus rings visible. When using{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      overflow-hidden
                    </code>
                    , verify that focus rings or shadows aren\'t clipped.
                  </li>
                  <li>
                    Use responsive radius when your layout changes drastically
                    at breakpoints (e.g., stacked cards on mobile, large cards
                    on desktop).
                  </li>
                  <li>
                    For performance: avoid animating expensive properties (like
                    layout); animate{" "}
                    <code className="bg-slate-700 px-1 rounded">
                      border-radius
                    </code>{" "}
                    only for small UI touches — GPU-accelerated
                    opacity/transform are cheaper.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced tips */}
          <section className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold">Advanced tips & best practices</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>
                <strong>Design tokens:</strong> derive radii from a small set of
                tokens (none, sm, md, lg, full) for visual rhythm and
                consistency.
              </li>
              <li>
                <strong>Combine with ring utilities:</strong>{" "}
                <code className="bg-slate-700 px-1 rounded">ring</code> respects
                shape better than an outline reset.
              </li>
              <li>
                <strong>Hover micro-interactions:</strong> small radius changes
                (e.g.,{" "}
                <code className="bg-slate-700 px-1 rounded">
                  hover:rounded-lg
                </code>
                ) add polish — keep transitions short.
              </li>
              <li>
                <strong>Masonry / grid:</strong> when using{" "}
                <code className="bg-slate-700 px-1 rounded">row-span</code> /
                fixed auto-rows, match rounding on items to avoid jagged edges
                between spans.
              </li>
              <li>
                <strong>Touch targets:</strong> rounding doesn\'t change hit
                area — ensure padded areas meet accessibility targets (44–48px
                recommended).
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
