"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";

export default function FlexDirectionPage() {
  // FIX: track copied item by index instead of global boolean
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const flexDirections = [
    { title: "flex-row", description: "Row direction (left to right)" },
    { title: "flex-row-reverse", description: "Row reverse (right to left)" },
    { title: "flex-col", description: "Column direction (top to bottom)" },
    { title: "flex-col-reverse", description: "Column reverse (bottom to top)" },
  ];

  const realExamples = {
    "flex-row": [
      {
        title: "Horizontal Navbar",
        note: "A typical top navigation where items sit left-to-right.",
        code: `<nav class="flex flex-row gap-6 items-center p-4 bg-slate-900 text-white">
  <div class="font-bold">Brand</div>
  <div class="flex gap-4">
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Contact</a>
  </div>
  <div class="ml-auto">Account</div>
</nav>`,
      },
      {
        title: "Product Cards (desktop row)",
        note: "Cards displayed side-by-side on wide screens.",
        code: `<div class="flex flex-row gap-4 p-4 bg-slate-900">
  <div class="w-64 p-4 bg-indigo-600 rounded">Product 1</div>
  <div class="w-64 p-4 bg-indigo-500 rounded">Product 2</div>
  <div class="w-64 p-4 bg-indigo-400 rounded">Product 3</div>
</div>`,
      },
      {
        title: "Toolbar / Actions",
        note: "A row of action buttons (toolbar).",
        code: `<div class="flex flex-row gap-2 p-3 bg-slate-900 text-white">
  <button class="px-3 py-1 bg-blue-600 rounded">Save</button>
  <button class="px-3 py-1 bg-gray-600 rounded">Undo</button>
  <button class="px-3 py-1 bg-red-600 rounded">Delete</button>
</div>`,
      },
      {
        title: "Image Thumbnail Row",
        note: "Thumbnails aligned horizontally.",
        code: `<div class="flex flex-row gap-2 p-4 bg-slate-900">
  <img src="/img1.jpg" class="w-20 h-20 rounded" />
  <img src="/img2.jpg" class="w-20 h-20 rounded" />
  <img src="/img3.jpg" class="w-20 h-20 rounded" />
</div>`,
      },
    ],

    "flex-row-reverse": [
      {
        title: "RTL Navbar (right-to-left reading)",
        note: "Useful for Arabic/Hebrew websites where items read right→left.",
        code: `<nav class="flex flex-row-reverse gap-6 items-center p-4 bg-slate-900 text-white">
  <div class="font-bold">מותג</div>
  <div class="flex gap-4">
    <a href="#">בית</a>
    <a href="#">מוצרים</a>
    <a href="#">צור קשר</a>
  </div>
  <div class="mr-auto">חשבון</div>
</nav>`,
      },
      {
        title: "Right-aligned Chat Bubbles",
        note: "Align sent messages to the right side of the conversation area.",
        code: `<div class="flex flex-row-reverse gap-2 p-4 bg-slate-900">
  <div class="bg-blue-500 text-white rounded px-3 py-1">Hi there!</div>
  <div class="bg-blue-400 text-white rounded px-3 py-1">Hello!</div>
</div>`,
      },
      {
        title: "Reverse Breadcrumbs",
        note: "Visual order reversed for newest-first style breadcrumbs.",
        code: `<div class="flex flex-row-reverse gap-2 p-3 bg-slate-900 text-white">
  <span>Checkout</span>
  <span>/ Cart</span>
  <span>/ Home</span>
</div>`,
      },
      {
        title: "Reverse Card Order",
        note: "Change visual order without changing DOM structure.",
        code: `<div class="flex flex-row-reverse gap-3 p-4 bg-slate-900">
  <div class="p-3 bg-green-500 rounded">3</div>
  <div class="p-3 bg-green-400 rounded">2</div>
  <div class="p-3 bg-green-300 rounded">1</div>
</div>`,
      },
    ],

    "flex-col": [
      {
        title: "Vertical Card Stack",
        note: "Cards stack vertically on mobile.",
        code: `<div class="flex flex-col gap-4 p-4 bg-slate-900 text-white">
  <div class="p-4 bg-indigo-600 rounded">Card A</div>
  <div class="p-4 bg-indigo-500 rounded">Card B</div>
  <div class="p-4 bg-indigo-400 rounded">Card C</div>
</div>`,
      },
      {
        title: "Form Layout",
        note: "Inputs stacked for readability.",
        code: `<form class="flex flex-col gap-3 p-4 bg-slate-900">
  <input class="p-2 rounded bg-slate-800 text-white" placeholder="Name" />
  <input class="p-2 rounded bg-slate-800 text-white" placeholder="Email" />
  <button class="p-2 rounded bg-blue-600 text-white">Submit</button>
</form>`,
      },
      {
        title: "Vertical Sidebar Navigation",
        note: "Stacked sidebar links.",
        code: `<aside class="flex flex-col gap-2 p-4 bg-slate-900 text-white w-48">
  <a href="#">Dashboard</a>
  <a href="#">Reports</a>
  <a href="#">Settings</a>
</aside>`,
      },
      {
        title: "Comments List",
        note: "Comments in a vertical list.",
        code: `<div class="flex flex-col gap-3 p-4 bg-slate-900 text-white">
  <div class="p-2 bg-purple-600 rounded">Comment 1</div>
  <div class="p-2 bg-purple-500 rounded">Comment 2</div>
</div>`,
      },
    ],

    "flex-col-reverse": [
      {
        title: "Chat (newest bottom visually)",
        note: "DOM stays top-to-bottom for accessibility.",
        code: `<div class="flex flex-col-reverse h-56 overflow-y-auto gap-2 p-4 bg-slate-900 text-white">
  <div class="p-2 bg-blue-500 rounded">Old message</div>
  <div class="p-2 bg-blue-400 rounded">Newer</div>
  <div class="p-2 bg-blue-300 rounded">Latest</div>
</div>`,
      },
      {
        title: "Activity Feed",
        note: "Newest events appear at the bottom visually.",
        code: `<div class="flex flex-col-reverse gap-2 p-4 bg-slate-900 text-white">
  <div>Event A</div>
  <div>Event B</div>
  <div>Event C</div>
</div>`,
      },
      {
        title: "Notifications",
        note: "New items visually appear at the bottom.",
        code: `<div class="flex flex-col-reverse gap-2 p-4 bg-slate-900 text-white">
  <div class="p-2 bg-red-500 rounded">Notif 1</div>
  <div class="p-2 bg-red-400 rounded">Notif 2</div>
</div>`,
      },
      {
        title: "Reverse Log Output",
        note: "Newest logs appear at the bottom visually.",
        code: `<div class="flex flex-col-reverse gap-1 p-4 bg-slate-900 text-white">
  <code>Log 1</code>
  <code>Log 2</code>
  <code>Log 3</code>
</div>`,
      },
    ],
  };

  const alignOptions = ["start", "center", "end", "stretch"];
  const justifyOptions = ["start", "center", "end", "between"];

  const [direction, setDirection] = useState("flex-row");
  const [align, setAlign] = useState("start");
  const [justify, setJustify] = useState("start");

  const getDemoClasses = () =>
    `flex ${direction} gap-2 p-4 bg-slate-800 rounded items-${align} justify-${justify} min-h-[120px]`;

  const getItemClasses = () =>
    align === "stretch"
      ? "flex-1 min-h-[40px] min-w-[80px] rounded flex items-center justify-center text-white font-semibold"
      : "w-24 h-16 rounded flex items-center justify-center text-white font-semibold";

  const itemColors = ["bg-indigo-500", "bg-indigo-400", "bg-indigo-300"];

  // FIXED CopyableCode: tooltip now appears at bottom, white bg, grey text
  const CopyableCode = ({ code, language = "html", index }) => (
    <div
      className="border border-border rounded-lg p-4 hover:bg-card/50 transition cursor-pointer group relative"
      onClick={() => copyToClipboard(code, index)}
    >
      {copiedIndex === index && (
        <div className="absolute top-2 left-2 px-2 py-0.5 text-xs text-white bg-green-600 rounded">
          Copied!
        </div>
      )}
      <div className="opacity-0 group-hover:opacity-100 absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs text-gray-700 bg-white rounded transition">
        Click to copy
      </div>
      <CodeBlock code={code} language={language} />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 max-w-5xl px-8 py-12 space-y-12 text-left">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold text-foreground">Flex Direction</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore how direction impacts flex item placement, with several real-world examples and copyable snippets.
          </p>
        </header>

        <section className="space-y-4 border border-border rounded-lg p-4 bg-card/30">
          <h2 className="text-2xl font-semibold text-foreground">
            Direction Types
          </h2>
          {flexDirections.map((fd) => (
            <div key={fd.title} className="space-y-1">
              <div className="font-semibold text-foreground">{fd.title}</div>
              <div className="text-sm text-muted-foreground">
                {fd.description}
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-6 border border-border rounded-lg p-4 bg-card/30">
          <h2 className="text-2xl font-semibold text-foreground">
            Interactive Demo
          </h2>

          <div className="space-y-4">
            <div className="flex gap-6 flex-wrap">
              <div>
                <h3 className="font-medium text-foreground">Direction</h3>
                <div className="flex gap-2 flex-wrap">
                  {flexDirections.map((fd) => (
                    <button
                      key={fd.title}
                      className={`px-3 py-1 rounded text-sm font-medium ${
                        direction === fd.title
                          ? "bg-blue-600 text-white shadow"
                          : "bg-card/20 text-foreground hover:bg-card/30"
                      }`}
                      onClick={() => setDirection(fd.title)}
                    >
                      {fd.title}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-foreground">
                  Align (cross-axis)
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {alignOptions.map((a) => (
                    <button
                      key={a}
                      className={`px-3 py-1 rounded text-sm font-medium ${
                        align === a
                          ? "bg-blue-600 text-white shadow"
                          : "bg-card/20 text-foreground hover:bg-card/30"
                      }`}
                      onClick={() => setAlign(a)}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-foreground">
                  Justify (main-axis)
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {justifyOptions.map((j) => (
                    <button
                      key={j}
                      className={`px-3 py-1 rounded text-sm font-medium ${
                        justify === j
                          ? "bg-blue-600 text-white shadow"
                          : "bg-card/20 text-foreground hover:bg-card/30"
                      }`}
                      onClick={() => setJustify(j)}
                    >
                      {j}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className={getDemoClasses()}>
              {itemColors.map((color, idx) => (
                <div
                  key={idx}
                  className={`${getItemClasses()} ${color}`}
                >
                  Item {idx + 1}
                </div>
              ))}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              Example group: <strong>{direction}</strong>
            </p>

            <div className="mt-4 space-y-4">
              {realExamples[direction].map((ex, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-lg p-4 bg-card/20"
                >
                  <div className="flex items-center gap-4">
                    <h4 className="text-lg font-semibold text-foreground">
                      {ex.title}
                    </h4>
                    <div className="text-sm text-muted-foreground">
                      {ex.note}
                    </div>
                  </div>

                  <div className="mt-3">
                    <CopyableCode
                      code={ex.code}
                      language="html"
                      index={idx}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 w-full max-w-2xl">
              <div className="text-sm text-muted-foreground mb-2">
                Interactive snippet
              </div>
              <CopyableCode
                code={`<div class="flex ${direction} items-${align} justify-${justify}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
                language="html"
                index={999} // unique index so it behaves independently
              />
            </div>
          </div>
        </section>

        <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
          <h2 className="text-2xl font-semibold text-foreground">Tips</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>
              Direction determines the main axis; align/justify map to
              cross/main axes respectively.
            </li>
            <li>
              Reverse utilities change visual order only; maintain proper
              reading order for accessibility.
            </li>
            <li>
              Use gap, grow, shrink, basis to craft responsive layouts.
            </li>
            <li>
              Use responsive utilities (e.g., md:flex-row) to change layout
              at breakpoints.
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
