"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "../../components/code-block";

export default function JustifyContentPage() {
  const justifyClasses = [
    "justify-start",
    "justify-center",
    "justify-end",
    "justify-between",
    "justify-around",
    "justify-evenly",
  ];

  const [activeClass, setActiveClass] = useState(justifyClasses[0]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const CopyableCode = ({ code, index }: { code: string; index: number }) => (
    <div
      className="relative border border-border rounded-lg p-4 hover:bg-card/50 cursor-pointer group transition"
      onClick={() => copyToClipboard(code, index)}
    >
      {copiedIndex === index && (
        <div className="absolute top-2 left-2 px-2 py-0.5 text-xs text-white bg-green-600 rounded">
          Copied!
        </div>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs text-gray-700 bg-white rounded opacity-0 group-hover:opacity-100 transition">
        Click to copy
      </div>
      <CodeBlock code={code} language="html" />
    </div>
  );

  // Detailed explanations per class
  const explanations: Record<string, string> = {
    "justify-start": "Aligns items to the left side of the container. Useful when you want content to start from the beginning without spacing.",
    "justify-center": "Centers all items horizontally in the container. Ideal for creating balanced layouts where items are in the middle.",
    "justify-end": "Aligns items to the right side of the container. Perfect for placing buttons or elements at the end of a row.",
    "justify-between": "Distributes items evenly with space between them. Great for layouts where first and last items are at edges and others spread out.",
    "justify-around": "Distributes items with equal space around them, creating consistent spacing on both sides of each item.",
    "justify-evenly": "Distributes items so the spaces between them, as well as at the edges, are equal, giving a very uniform look.",
  };

  // Examples per class
  const examplesData: Record<string, { title: string; note: string; code: string }[]> = {
    "justify-start": [
      {
        title: "Basic Left Alignment",
        note: "Items start from the left edge of the container.",
        code: `<div class="flex justify-start space-x-2">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar Left Items",
        note: "Place navigation links starting from the left.",
        code: `<nav class="flex justify-start space-x-4">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Left-aligned Buttons",
        note: "Group of buttons aligned to the left.",
        code: `<div class="flex justify-start space-x-2">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>`,
      },
      {
        title: "Card Items",
        note: "Align card elements to the start of the container.",
        code: `<div class="flex justify-start space-x-4">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
</div>`,
      },
      {
        title: "Form Elements",
        note: "Left-aligned input fields and labels.",
        code: `<form class="flex flex-col justify-start space-y-2">
  <label>Email</label>
  <input type="email" />
  <label>Password</label>
  <input type="password" />
</form>`,
      },
    ],
    "justify-center": [
      {
        title: "Centered Boxes",
        note: "Items horizontally centered in the container.",
        code: `<div class="flex justify-center space-x-2">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Center Navbar Items",
        note: "Center menu items in the navigation bar.",
        code: `<nav class="flex justify-center space-x-4">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Centered Buttons",
        note: "Buttons placed in the center of the container.",
        code: `<div class="flex justify-center space-x-2">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>`,
      },
      {
        title: "Card Group Centered",
        note: "Cards aligned in the center horizontally.",
        code: `<div class="flex justify-center space-x-4">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
</div>`,
      },
      {
        title: "Form Centered",
        note: "Input fields centered in the form container.",
        code: `<form class="flex flex-col justify-center space-y-2 items-center">
  <label>Email</label>
  <input type="email" />
  <label>Password</label>
  <input type="password" />
</form>`,
      },
    ],
    "justify-end": [
      {
        title: "Right-aligned Items",
        note: "Items aligned to the right edge of the container.",
        code: `<div class="flex justify-end space-x-2">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar Right",
        note: "Place navigation links at the right end.",
        code: `<nav class="flex justify-end space-x-4">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>`,
      },
      {
        title: "Right-aligned Buttons",
        note: "Group of buttons at the right.",
        code: `<div class="flex justify-end space-x-2">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>`,
      },
      {
        title: "Form Controls",
        note: "Input fields aligned to the right.",
        code: `<form class="flex flex-col justify-end space-y-2 items-end">
  <label>Email</label>
  <input type="email" />
</form>`,
      },
      {
        title: "Card Elements",
        note: "Right alignment for multiple cards.",
        code: `<div class="flex justify-end space-x-4">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
</div>`,
      },
    ],
    "justify-between": [
      {
        title: "Evenly Distributed Items",
        note: "First and last items at edges; space distributed between items.",
        code: `<div class="flex justify-between">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar with Edge Links",
        note: "First and last menu items stick to edges.",
        code: `<nav class="flex justify-between">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Header Layout",
        note: "Logo at start, buttons at end, space in-between.",
        code: `<div class="flex justify-between items-center">
  <div>Logo</div>
  <div>
    <button>Login</button>
    <button>Sign Up</button>
  </div>
</div>`,
      },
      {
        title: "Card Layout",
        note: "Cards distributed across the container evenly.",
        code: `<div class="flex justify-between">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
</div>`,
      },
      {
        title: "Button Alignment",
        note: "Buttons at edges of a container with space in-between.",
        code: `<div class="flex justify-between">
  <button class="btn">Cancel</button>
  <button class="btn">Submit</button>
</div>`,
      },
    ],
    "justify-around": [
      {
        title: "Even Spacing Around Items",
        note: "Items have equal space around them.",
        code: `<div class="flex justify-around">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar Spaced",
        note: "Navigation items spaced evenly around each link.",
        code: `<nav class="flex justify-around">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Button Group",
        note: "Buttons have equal spacing around them.",
        code: `<div class="flex justify-around">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
  <button class="btn">Delete</button>
</div>`,
      },
      {
        title: "Card Layout",
        note: "Cards spaced evenly with room around them.",
        code: `<div class="flex justify-around">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
  <div class="p-4 bg-gray-200">Card 3</div>
</div>`,
      },
      {
        title: "Form Buttons",
        note: "Buttons in a form spaced nicely.",
        code: `<div class="flex justify-around">
  <button class="btn">Cancel</button>
  <button class="btn">Submit</button>
</div>`,
      },
    ],
    "justify-evenly": [
      {
        title: "Uniform Spacing",
        note: "Spaces between all items, including edges, are equal.",
        code: `<div class="flex justify-evenly">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar Even Spacing",
        note: "Navigation items spaced evenly including edges.",
        code: `<nav class="flex justify-evenly">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Button Row",
        note: "Buttons aligned with equal space everywhere.",
        code: `<div class="flex justify-evenly">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
  <button class="btn">Delete</button>
</div>`,
      },
      {
        title: "Cards",
        note: "Cards distributed with equal spacing across container.",
        code: `<div class="flex justify-evenly">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
  <div class="p-4 bg-gray-200">Card 3</div>
</div>`,
      },
      {
        title: "Form Buttons Even",
        note: "Evenly spaced buttons for a clean layout.",
        code: `<div class="flex justify-evenly">
  <button class="btn">Cancel</button>
  <button class="btn">Submit</button>
</div>`,
      },
    ],
  };

  const benefits: Record<string, string[]> = {
    "justify-start": ["Items align to the start, creating natural left-to-right flow.", "Helps organize content predictably."],
    "justify-center": ["Centers items for balanced layouts.", "Ideal for focal content."],
    "justify-end": ["Items align to the end, good for controls/buttons.", "Useful in forms or toolbars."],
    "justify-between": ["Distributes space between items, edges at extremes.", "Helps spread items in a row."],
    "justify-around": ["Equal space around items.", "Good for evenly spaced navigation or buttons."],
    "justify-evenly": ["Uniform spacing between all items and edges.", "Creates symmetric and clean layouts."],
  };

  const commonUseCases: Record<string, string[]> = {
    "justify-start": ["Navigation bars", "Button groups", "Cards", "Forms"],
    "justify-center": ["Centered headings", "Modal content", "Button groups"],
    "justify-end": ["Action buttons", "Toolbar controls", "Footer items"],
    "justify-between": ["Header layouts", "Navbar with edge links", "Button groups spread out"],
    "justify-around": ["Navbars", "Form buttons", "Card groups"],
    "justify-evenly": ["Menu items", "Button rows", "Card layout evenly spaced"],
  };

  const commonMistakes: Record<string, string[]> = {
    "justify-start": ["Not applying flex to the container can break alignment.", "Adding extra margin may offset alignment."],
    "justify-center": ["Forgetting to set `flex` will not center items.", "Mixing with `ml-auto` or `mr-auto` can conflict."],
    "justify-end": ["Forgetting `flex` or using `float` instead.", "Overlapping with other spacing utilities."],
    "justify-between": ["Too many items may crowd edges.", "Incorrect spacing may occur without `gap`."],
    "justify-around": ["Might look uneven if container width is small.", "Overusing nested flex containers can confuse spacing."],
    "justify-evenly": ["Ignoring padding/margins can break even spacing.", "Combining with `space-x-*` may double spacing."],
  };

  const renderDiagram = (cls: string) => {
    const containerClasses = `flex h-32 border border-border rounded-lg p-4 bg-slate-900 text-white justify-${cls.replace(
      "justify-",
      ""
    )} items-center gap-2`;
    const block = "bg-blue-500 w-16 h-16 flex items-center justify-center text-white font-semibold";

    return (
      <div className="border border-border rounded-lg p-6 bg-slate-900 text-white text-center">
        <p className="font-semibold">Visual representation of <code>{cls}</code></p>
        <div className={`mt-4 ${containerClasses}`}>
          <div className={block}>1</div>
          <div className={block}>2</div>
          <div className={block}>3</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-5xl px-8 py-12 space-y-12 text-left">
        <h1 className="text-2xl font-semibold text-foreground mb-4">Tailwind Justify Content Utilities</h1>

        {/* Buttons */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {justifyClasses.map((cls) => (
            <button
              key={cls}
              className={`px-4 py-2 rounded font-medium ${
                activeClass === cls
                  ? "bg-blue-600 text-white shadow"
                  : "bg-card/20 text-foreground hover:bg-card/30"
              }`}
              onClick={() => setActiveClass(cls)}
            >
              {cls}
            </button>
          ))}
        </div>

        {/* Diagram */}
        {renderDiagram(activeClass)}

        {/* Explanation */}
        <div className="text-sm text-muted-foreground">
          {explanations[activeClass]}
        </div>

        {/* Benefits */}
        <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
          <h2 className="text-2xl font-semibold text-foreground">Benefits</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {benefits[activeClass].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Real-World Examples */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Real-World Examples</h2>
          {examplesData[activeClass].map((ex, idx) => (
            <div key={idx} className="space-y-2 border border-border rounded-lg p-4 bg-card/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{ex.title}</h3>
                <p className="text-sm text-muted-foreground">{ex.note}</p>
              </div>
              <CopyableCode code={ex.code} index={idx} />
            </div>
          ))}
        </section>

        {/* Common Mistakes */}
        <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
          <h2 className="text-2xl font-semibold text-foreground">Common Mistakes</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {commonMistakes[activeClass].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Common Use Cases */}
        <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
          <h2 className="text-2xl font-semibold text-foreground">Common Use Cases</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {commonUseCases[activeClass].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
