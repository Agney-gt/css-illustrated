"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "../components/code-block";

export default function ColumnsPage() {
  const columnsClasses = [
    "columns-1",
    "columns-2",
    "columns-3",
    "columns-4",
    "columns-auto",
  ];

  const [activeClass, setActiveClass] = useState(columnsClasses[0]);
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

  const explanations: Record<string, string> = {
    "columns-1": "Displays content in a single column layout.",
    "columns-2": "Splits content evenly into two columns.",
    "columns-3": "Splits content evenly into three columns.",
    "columns-4": "Splits content evenly into four columns.",
    "columns-auto":
      "Lets the browser automatically determine column behavior with no fixed count.",
  };

  const additionalContext: Record<string, string> = {
    "columns-1": "Common for mobile-first design before breaking into multiple columns.",
    "columns-2": "Used for newspapers, articles, and text-heavy layouts.",
    "columns-3": "Useful for catalogs and listings.",
    "columns-4": "Popular for media galleries and visual layouts.",
    "columns-auto":
      "Acts as a reset or fallback for responsive layouts, letting content naturally flow.",
  };

  const examplesData: Record<
    string,
    { title: string; note: string; code: string }[]
  > = {
    "columns-1": [
      {
        title: "Single Article Column",
        note: "Classic reading layout.",
        code: `<div class="columns-1 gap-4">
  <p>Article text...</p>
  <p>More text...</p>
</div>`,
      },
      {
        title: "Mobile First",
        note: "One column base, expands later.",
        code: `<div class="columns-1 md:columns-2 gap-6">
  <p>Content block</p>
</div>`,
      },
    ],
    "columns-2": [
      {
        title: "Newspaper Layout",
        note: "Paragraphs flow across two columns.",
        code: `<div class="columns-2 gap-6">
  <p>Lorem ipsum...</p>
</div>`,
      },
      {
        title: "Two Column Gallery",
        note: "Images wrap into multiple columns.",
        code: `<div class="columns-2 gap-4">
  <img src="img1.jpg"/> <img src="img2.jpg"/>
</div>`,
      },
    ],
    "columns-3": [
      {
        title: "Magazine Columns",
        note: "Balanced visual style.",
        code: `<div class="columns-3 gap-4">
  <p>Text content...</p>
</div>`,
      },
      {
        title: "Product Cards",
        note: "Great for catalogs.",
        code: `<div class="columns-3 gap-4">
  <div class="p-4 bg-gray-200 rounded">Product</div>
</div>`,
      },
    ],
    "columns-4": [
      {
        title: "Portfolio Grid",
        note: "Media-heavy content flow.",
        code: `<div class="columns-4 gap-4">
  <img src="project.jpg"/>
</div>`,
      },
    ],
    "columns-auto": [
      {
        title: "Responsive Auto Columns",
        note: "Browser handles distribution.",
        code: `<div class="columns-auto gap-4">
  <p>Flexible layout based on content…</p>
</div>`,
      },
      {
        title: "Reset Multi-Column",
        note: "Useful when overriding column utilities.",
        code: `<div class="columns-3 md:columns-auto gap-4">
  <p>Natural flow at larger screens</p>
</div>`,
      },
    ],
  };

  const benefits: Record<string, string[]> = {
    "columns-1": ["Mobile-first control", "Better readability"],
    "columns-2": ["Classic news-style layout", "Improved content scanning"],
    "columns-3": ["Good balance between density & clarity", "Useful on wide screens"],
    "columns-4": ["Great for galleries", "Efficient use of width"],
    "columns-auto": [
      "Browser auto-balances layout",
      "Good for responsive fallback",
      "Reduced layout constraints",
    ],
  };

  const commonUseCases: Record<string, string[]> = {
    "columns-1": ["Blogs", "Documentation"],
    "columns-2": ["News feeds", "Feature articles"],
    "columns-3": ["Listings", "Showcases"],
    "columns-4": ["Photo grids", "Portfolio layouts"],
    "columns-auto": ["Fluid flexible pages", "Responsive resets"],
  };

  const renderDiagram = (cls: string) => (
    <div className="border border-border rounded-lg p-6 bg-slate-900 text-white text-center">
      <p className="font-semibold">Visual representation of <code>{cls}</code></p>
      <div className={`mt-4 ${cls} gap-4 text-white`}>
        <div className="bg-blue-500 p-4 rounded">A</div>
        <div className="bg-blue-500 p-4 rounded">B</div>
        <div className="bg-blue-500 p-4 rounded">C</div>
        <div className="bg-blue-500 p-4 rounded">D</div>
        <div className="bg-blue-500 p-4 rounded">E</div>
        <div className="bg-blue-500 p-4 rounded">F</div>
          <div className="bg-blue-500 p-4 rounded">G</div>
        <div className="bg-blue-500 p-4 rounded">H</div>


      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-5xl px-8 py-12 space-y-12 text-left">
        <h1 className="text-2xl font-semibold text-foreground mb-4">
          Tailwind Columns Utilities
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {columnsClasses.map((cls) => (
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

        {/* Additional Context */}
        <div className="text-sm text-muted-foreground mt-2">
          {additionalContext[activeClass]}
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
          <h2 className="text-2xl font-semibold text-foreground">
            Real-World Examples
          </h2>

          {examplesData[activeClass].map((ex, idx) => (
            <div
              key={idx}
              className="space-y-2 border border-border rounded-lg p-4 bg-card/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <h3 className="text-lg font-semibold text-foreground">{ex.title}</h3>
                <p className="text-sm text-muted-foreground">{ex.note}</p>
              </div>

              <CopyableCode code={ex.code} index={idx} />
            </div>
          ))}
        </section>

        {/* Common Use Cases */}
        <section className="space-y-2 border border-border rounded-lg p-4 bg-card/30">
          <h2 className="text-2xl font-semibold text-foreground">
            Common Use Cases
          </h2>
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
