"use client";

import React, { useState } from "react";
import { Check, RotateCcw, AlertCircle, Terminal } from "lucide-react";

interface InteractiveChallengeProps {
  title: string;
  description: string;
  codeSnippet: string; // Use "{input}" as the placeholder for the user's class
  options: string[]; // 4 suggestions
  correctOption: string; // The correct class to trigger the win state
  renderPreview: (userClass: string) => React.ReactNode; // Function to render the live result
}

export function InteractiveChallenge({
  title,
  description,
  codeSnippet,
  options,
  correctOption,
  renderPreview,
}: InteractiveChallengeProps) {
  const [userInput, setUserInput] = useState("");
  const [isSolved, setIsSolved] = useState(false);

  // Split code snippet around the {input} marker to inject the input field
  const codeParts = codeSnippet.split("{input}");
  const codePrefix = codeParts[0];
  const codeSuffix = codeParts[1];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserInput(val);
    checkAnswer(val);
  };

  const handleOptionClick = (option: string) => {
    setUserInput(option);
    checkAnswer(option);
  };

  const checkAnswer = (val: string) => {
    // We trim spaces to be forgiving
    if (val.trim() === correctOption) {
      setIsSolved(true);
    } else {
      setIsSolved(false);
    }
  };

  return (
    <section className="space-y-8 border-t border-border pt-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm shadow-sm">
            ?
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>
        <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
        {/* LEFT COLUMN: Editor & Controls */}
        <div className="flex flex-col gap-6 h-full">
          {/* Mock Code Editor */}
          <div className="relative bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col min-h-[320px] h-full group">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#161b22]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono opacity-60">
                <Terminal className="w-3 h-3" />
                <span>Challenge.tsx</span>
              </div>
            </div>

            {/* Editor Body */}
            <div className="p-6 font-mono text-sm leading-loose overflow-x-auto flex-1">
              <div className="whitespace-pre-wrap text-slate-300">
                {/* Syntax Highlighting Simulation */}
                {codePrefix.split("<").map((chunk, i) => {
                  if (i === 0) return chunk;
                  return (
                    <span key={i}>
                      <span className="text-blue-400">&lt;</span>
                      {chunk}
                    </span>
                  );
                })}

                {/* Interactive Input Field */}
                <span className="relative inline-flex items-center mx-1 align-middle">
                  <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    className={`
                      bg-transparent border-b-2 outline-none text-center font-bold px-1 py-0.5 h-6
                      transition-all duration-300 min-w-[80px]
                      ${
                        isSolved
                          ? "border-green-500 text-green-400"
                          : "border-blue-500 text-white animate-pulse-border focus:border-blue-400"
                      }
                    `}
                    placeholder="class..."
                    style={{ width: Math.max(userInput.length, 8) + "ch" }}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  {/* Solved Icon */}
                  <div
                    className={`absolute -right-6 transition-all duration-500 ${
                      isSolved ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                  >
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                </span>

                {codeSuffix.split("<").map((chunk, i) => {
                  if (i === 0) return chunk;
                  return (
                    <span key={i}>
                      <span className="text-blue-400">&lt;</span>
                      {chunk}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Reset / Status Footer */}
            <div className="p-3 bg-[#161b22] border-t border-slate-800 flex justify-between items-center text-xs text-slate-500">
              <span className={isSolved ? "text-green-400" : ""}>
                {isSolved
                  ? "Code compiled successfully."
                  : "Waiting for input..."}
              </span>
              <button
                onClick={() => {
                  setUserInput("");
                  setIsSolved(false);
                }}
                className="flex items-center gap-1.5 hover:text-white transition-colors px-2 py-1 rounded hover:bg-slate-800"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>
          </div>

          {/* Options Grid */}
          <div>
            <div className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider text-xs">
              Suggested Utilities
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`
                    relative px-3 py-3 rounded-lg font-mono text-sm font-medium border transition-all duration-200
                    text-center group overflow-hidden
                    ${
                      userInput === option
                        ? isSolved
                          ? "bg-green-500/10 border-green-500 text-green-600 dark:text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                          : "bg-slate-100 dark:bg-slate-800 border-slate-400 dark:border-slate-500 ring-1 ring-slate-400 dark:ring-slate-500"
                        : "bg-background hover:border-blue-400 hover:text-blue-500 hover:shadow-md"
                    }
                  `}
                >
                  {option}
                  {/* Tiny checkmark if selected & solved */}
                  {userInput === option && isSolved && (
                    <div className="absolute top-1 right-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Live Preview */}
        <div className="relative bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner flex flex-col min-h-[400px]">
          {/* Label */}
          <div className="absolute top-4 right-4 z-20">
            <span
              className={`
              inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-500
              ${
                isSolved
                  ? "bg-green-500 text-white translate-y-0"
                  : "bg-white dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700"
              }
            `}
            >
              {isSolved ? (
                <>
                  <Check className="w-3 h-3" /> Solved
                </>
              ) : (
                "Preview"
              )}
            </span>
          </div>

          {/* Preview Canvas */}
          <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden relative">
            {/* Grid Background for scale reference */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            {/* Actual Preview Render */}
            {renderPreview(userInput)}
          </div>

          {/* Feedback Toast */}
          <div
            className={`
            absolute bottom-6 left-1/2 -translate-x-1/2 
            bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 
            border border-red-200 dark:border-red-800
            px-4 py-2 rounded-full text-xs font-medium shadow-lg flex items-center gap-2
            transition-all duration-300
            ${
              userInput && !isSolved && !options.includes(userInput)
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0 pointer-events-none"
            }
          `}
          >
            <AlertCircle className="w-3 h-3" />
            <span>Class not recognized or incorrect</span>
          </div>
        </div>
      </div>
    </section>
  );
}