"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Editor from "@monaco-editor/react";

/* ---------------- DEFAULT TAILWIND ---------------- */

const BASE_CONTAINER =
  "h-64 border border-gray-600 rounded-lg bg-gray-700";

const BOX_CLASSES =
  "w-24 h-24 bg-indigo-500 rounded-lg";

const SOLUTION = {
  display: "flex",
  justify: "justify-center",
  align: "items-center",
};

/* ---------------- OPTIONS ---------------- */

const DISPLAY_OPTIONS = [
  { label: "Block", value: "block" },
  { label: "Flex", value: "flex" },
];

const JUSTIFY_OPTIONS = [
  { label: "Start", value: "justify-start" },
  { label: "Center", value: "justify-center" },
  { label: "End", value: "justify-end" },
];

const ALIGN_OPTIONS = [
  { label: "Start", value: "items-start" },
  { label: "Center", value: "items-center" },
  { label: "End", value: "items-end" },
];

export default function TailwindLayoutChallenge() {
  /* ---------------- STATE ---------------- */

  const [display, setDisplay] = useState<string>("block");
  const [justify, setJustify] = useState<string>("");
  const [align, setAlign] = useState<string>("");

  const [isSolved, setIsSolved] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* ---------------- DERIVED CLASSES ---------------- */

  const containerClasses = useMemo(() => {
    return [
      BASE_CONTAINER,
      display,
      justify,
      align,
    ]
      .filter(Boolean)
      .join(" ");
  }, [display, justify, align]);

  /* ---------------- VISUAL CHECK ---------------- */

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const box = container.querySelector(".box") as HTMLDivElement | null;
    if (!box) return;

    const c = container.getBoundingClientRect();
    const b = box.getBoundingClientRect();
    const tolerance = 2;

    const centered =
      Math.abs(c.left + c.width / 2 - (b.left + b.width / 2)) < tolerance &&
      Math.abs(c.top + c.height / 2 - (b.top + b.height / 2)) < tolerance;

    setIsSolved(centered);
  }, [containerClasses]);

  /* ---------------- SOLUTION ---------------- */

  const showSolution = () => {
    setDisplay(SOLUTION.display);
    setJustify(SOLUTION.justify);
    setAlign(SOLUTION.align);
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-gray-100 px-4 sm:px-6 py-8 sm:py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12 relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-4">
          Interactive Tutorial
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
          Tailwind Layout Challenge
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Master flexbox centering by selecting the right combination of Tailwind classes below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {/* Target */}
        <div className="group rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 p-6 hover:border-indigo-500/30 transition-all duration-300 shadow-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-bold text-xl">Target Layout</h2>
          </div>
          <div className="h-64 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"></div>
            <div className={`${BOX_CLASSES} shadow-2xl shadow-indigo-500/30 relative z-10 transform hover:scale-105 transition-transform duration-300`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
            </div>
          </div>
          <div className="mt-4 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-xs text-emerald-300">
              🎯 Match this centered layout
            </p>
          </div>
        </div>

        {/* Canvas */}
        <div className="group rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 p-6 hover:border-purple-500/30 transition-all duration-300 shadow-2xl">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h2 className="font-bold text-xl">Your Output</h2>
            </div>

            {isSolved && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 shadow-lg animate-bounce">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-emerald-300">Perfect!</span>
              </div>
            )}
          </div>

          <div className="rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 p-4 shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
            <div ref={containerRef} className={containerClasses}>
              <div className={`box ${BOX_CLASSES} shadow-2xl shadow-indigo-500/30 relative transform hover:scale-105 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className={`mt-4 px-4 py-3 rounded-lg border transition-all duration-300 ${
            isSolved 
              ? 'bg-emerald-500/10 border-emerald-500/30' 
              : 'bg-amber-500/10 border-amber-500/30'
          }`}>
            <p className="text-sm font-medium">
              {isSolved
                ? "🎉 Perfect! The box is centered!"
                : "⚡ Keep going! Center the box horizontally and vertically."}
            </p>
          </div>

          <button
            onClick={showSolution}
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 py-3 text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 hover:scale-105 active:scale-95"
          >
            💡 Show Solution
          </button>
        </div>

        {/* Editor + Visual Controls */}
        <div className="group rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 p-6 hover:border-indigo-500/30 transition-all duration-300 shadow-2xl space-y-6">
          {/* Code Editor */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="font-bold text-lg">Generated Classes</h2>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-700/50 shadow-lg">
              <Editor
                height="160px"
                language="html"
                value={`<div class="${containerClasses}">`}
                theme="vs-dark"
                options={{
                  fontSize: 13,
                  minimap: { enabled: false },
                  wordWrap: "on",
                  readOnly: true,
                  lineNumbers: "off",
                  scrollbar: {
                    vertical: "hidden",
                    horizontal: "hidden"
                  }
                }}
              />
            </div>
          </div>

          {/* Visual Controls */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="font-bold text-lg">Controls</h2>
            </div>

            <div className="space-y-5">
              {/* Display */}
              <ControlGroup
                title="Display"
                options={DISPLAY_OPTIONS}
                value={display}
                onChange={setDisplay}
              />

              {/* Justify */}
              <ControlGroup
                title="Justify Content"
                options={JUSTIFY_OPTIONS}
                value={justify}
                onChange={setJustify}
              />

              {/* Align */}
              <ControlGroup
                title="Align Items"
                options={ALIGN_OPTIONS}
                value={align}
                onChange={setAlign}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- REUSABLE CONTROL ---------------- */

function ControlGroup({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/30">
      <p className="text-xs font-bold text-gray-300 mb-3 uppercase tracking-wider">{title}</p>
      <div className="flex gap-2 flex-wrap">
        {options.map((o) => {
          const active = value === o.value;

          return (
            <button
              key={o.value}
              onClick={() => onChange(o.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                active
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105"
                  : "bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:scale-105"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}