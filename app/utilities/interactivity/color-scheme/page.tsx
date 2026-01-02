"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageTitle from "@/components/otherComponents/pageTitle";
import UtilityCard from "@/components/otherComponents/utilityClassCard";
import UtilityExaButtons from "@/components/otherComponents/utilityExaBtn";
import PreviewPanel from "@/components/otherComponents/previewPanel";
import ExampleCard from "@/components/otherComponents/realWorldExampleCard";
import SummaryTips from "@/components/otherComponents/summaryTips";
import {
  InteractiveChallenge,
  CodeTag,
  CodeAttr,
  CodeComment,
} from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  {
    className: "scheme-normal",
    desc: "Use the browser or OS preferred color scheme",
  },
  {
    className: "scheme-light",
    desc: "Force native UI elements to render in light mode",
  },
  {
    className: "scheme-dark",
    desc: "Force native UI elements to render in dark mode",
  },
];

export default function ColorSchemePage() {
  const utilityOptions = utilities.map((u) => u.className);
  const [activeUtility, setActiveUtility] = useState(utilityOptions[0]);
  const [code, setCode] = useState("");

  useEffect(() => {
    setCode(
      `
<div class="${activeUtility} space-y-3 p-4 border rounded">
  <input
    type="text"
    class="border rounded px-3 py-2 w-full"
    placeholder="Text input"
  />

  <label class="flex items-center gap-2">
    <input type="checkbox" checked />
    Checkbox
  </label>

  <textarea
    class="border rounded px-3 py-2 w-full"
    placeholder="Textarea"
  ></textarea>
</div>
      `.trim()
    );
  }, [activeUtility]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageTitle
            title="Color Scheme"
            description="Control whether native UI elements render in light or dark mode, independent of your site theme."
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Color Scheme Utilities</h2>

            <div className="grid md:grid-cols-3 gap-4">
              {utilities.map((u) => (
                <UtilityCard
                  key={u.className}
                  classNameValue={u.className}
                  description={u.desc}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="space-y-4">
                <UtilityExaButtons
                  label="Color Scheme"
                  options={utilityOptions}
                  activeValue={activeUtility}
                  onSelect={setActiveUtility}
                />
              </div>

              <div className="md:col-span-2">
                <PreviewPanel
                  title="Live Preview"
                  code={code}
                  onCodeChange={setCode}
                  previewClass="p-4"
                  description="Switch schemes to see how native UI elements adapt."
                />
              </div>
            </div>
          </div>

          <InteractiveChallenge
            title="The Glaring Date Picker"
            description="You are designing a 'Night Mode' booking app. You've styled the page dark, but the native date picker calendar pops up in bright white, blinding the user. Force the browser to render the control in dark mode."
            initialClass="scheme-light"
            correctClass="scheme-dark"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "scheme-dark";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <CodeComment>&lt;!-- Booking Form Wrapper --&gt;</CodeComment>

                  <div className="flex flex-wrap gap-2 items-center">
                    <CodeTag>&lt;div</CodeTag>
                    <span className="text-purple-400">className</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">
                      "bg-zinc-900 text-white ...
                    </span>

                    {/* Custom Toggle Button */}
                    <button
                      onClick={toggle}
                      className={`
                          mx-1 px-1.5 rounded border text-xs font-bold transition-all font-mono align-middle
                          ${
                            isCorrect
                              ? "bg-green-500/20 text-green-400 border-green-500/50"
                              : "bg-red-500/20 text-red-400 border-red-500/50 animate-pulse"
                          }
                        `}
                    >
                      {cls}
                    </button>
                    <span className="text-green-400">"</span>
                    <CodeTag>&gt;</CodeTag>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>&lt;!-- Native Date Input --&gt;</CodeComment>
                    <div className="flex items-center gap-2">
                      <CodeTag>&lt;input</CodeTag>
                      <CodeAttr name="type" value="date" />
                      <CodeTag>/&gt;</CodeTag>
                    </div>
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-72 bg-zinc-950 rounded-xl shadow-2xl border border-zinc-800 flex flex-col items-center justify-center p-8 overflow-hidden">
                {/* Simulated App Interface */}
                <div
                  className={`
                  relative z-10 w-full max-w-sm p-6 rounded-xl border transition-colors duration-500
                  ${
                    cls === "scheme-dark"
                      ? "bg-zinc-900 border-zinc-700 shadow-xl"
                      : "bg-zinc-900 border-zinc-700" // Visual background stays dark to show the contrast problem
                  }
                  /* Apply the utility class here */
                  ${cls}
                `}
                >
                  <h3 className="text-zinc-100 font-semibold mb-1">
                    Select Arrival Date
                  </h3>
                  <p className="text-zinc-400 text-xs mb-4">
                    Confirm your night stay.
                  </p>

                  <div className="relative">
                    {/* The Target Input */}
                    <input
                      type="date"
                      className="w-full p-3 rounded-lg border border-zinc-600 bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-indigo-500"
                      // Win condition
                      onChange={() => {
                        if (cls === "scheme-dark") onWin();
                      }}
                      onClick={() => {
                        if (cls === "scheme-dark") onWin();
                      }}
                    />

                    {/* Visual Hint for the problem */}
                    {cls === "scheme-light" && !isSolved && (
                      <div className="absolute top-full left-0 mt-2 p-2 bg-white text-black text-xs rounded shadow-lg border border-gray-200 z-20 flex items-center gap-2">
                        <span className="text-xl">☀️</span>
                        <span>Browser renders popup in LIGHT mode!</span>
                      </div>
                    )}

                    {/* Success Visual */}
                    {isSolved && (
                      <div className="absolute top-full left-0 mt-2 p-2 bg-zinc-800 text-white text-xs rounded shadow-lg border border-zinc-600 z-20 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                        <span className="text-xl">🌙</span>
                        <span>Perfect! Native popup is now DARK.</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (cls === "scheme-dark") onWin();
                    }}
                    className="w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
                  >
                    Confirm Booking
                  </button>
                </div>

                {/* Ambient Light */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-1000 ${
                    isSolved ? "opacity-100" : "opacity-30"
                  }`}
                />
              </div>
            )}
          />

          <div className="space-y-6 border-t border-border pt-8">
            <h2 className="text-3xl font-bold">Real-world examples</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <ExampleCard
                title="Dark widgets inside light UI"
                code={`<div class="scheme-dark p-3 border rounded space-y-2">
  <input
    class="border rounded px-3 py-2 w-full"
    placeholder="Dark input"
  />
  <label class="flex items-center gap-2">
    <input type="checkbox" />
    Checkbox
  </label>
</div>`}
                description="Force dark native controls inside an otherwise light interface."
              ></ExampleCard>

              <ExampleCard
                title="Respect system preference"
                code={`<div class="scheme-normal p-3 border rounded">
  <input
    class="border rounded px-3 py-2 w-full"
    placeholder="System-based input"
  />
</div>`}
                description="Let the operating system decide light or dark mode automatically."
              ></ExampleCard>
            </div>
          </div>

          <SummaryTips
            items={[
              "1. Color scheme affects only native browser UI elements.",
              "2. Custom components are not affected by scheme utilities.",
              "3. scheme-dark and scheme-light override OS preferences.",
              "4. Use scheme-normal to respect system color settings.",
              "5. Forcing schemes can surprise users if overused.",
              "6. Useful for embedding widgets with fixed color requirements.",
              "7. Test across browsers and operating systems.",
              "8. Color scheme does not control Tailwind dark mode.",
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
