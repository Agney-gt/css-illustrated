"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ChallengeLayout } from "./challenge-layout"; // Re-using your existing layout

// --- Types ---
interface InteractiveChallengeProps {
  title: string;
  description: string;
  initialClass: string;
  correctClass: string;
  // Render Props: We pass the state down to your specific markup
  renderCode: (currentClass: string, toggle: () => void) => React.ReactNode;
  renderPreview: (
    currentClass: string,
    onWin: () => void,
    isSolved: boolean
  ) => React.ReactNode;
}

// --- Main Component ---
export function InteractiveChallenge({
  title,
  description,
  initialClass,
  correctClass,
  renderCode,
  renderPreview,
}: InteractiveChallengeProps) {
  const [currentClass, setCurrentClass] = useState(initialClass);
  const [isSolved, setIsSolved] = useState(false);

  const handleToggle = () => {
    setCurrentClass((prev) =>
      prev === initialClass ? correctClass : initialClass
    );
    // Reset solved state if they toggle back to wrong answer
    if (currentClass === correctClass) setIsSolved(false);
  };

  const handleWin = () => {
    if (currentClass === correctClass) {
      setIsSolved(true);
      confetti({
        particleCount: 100,
        spread: 70,
        colors: ["#22c55e", "#3b82f6", "#f59e0b"],
      });
    }
  };

  const handleReset = () => {
    setCurrentClass(initialClass);
    setIsSolved(false);
  };

  return (
    <ChallengeLayout
      title={title}
      description={description}
      isSolved={isSolved}
      onReset={handleReset}
      editor={renderCode(currentClass, handleToggle)}
      preview={renderPreview(currentClass, handleWin, isSolved)}
    />
  );
}

// --- Helper Components for the Code Editor ---
// These make writing the "renderCode" prop much cleaner in your pages.

export function CodeTag({ children }: { children: React.ReactNode }) {
  return <span className="text-blue-400">{children}</span>;
}

export function CodeAttr({ name, value }: { name: string; value?: string }) {
  return (
    <span>
      {" "}
      <span className="text-purple-400">{name}</span>
      {value && (
        <>
          <span className="text-slate-300">=</span>
          <span className="text-green-400">"{value}"</span>
        </>
      )}
    </span>
  );
}

export function CodeComment({ children }: { children: React.ReactNode }) {
  return <div className="text-slate-500 italic mb-1">{children}</div>;
}

export function ClassToggle({
  value,
  onClick,
  isCorrect,
}: {
  value: string;
  onClick: () => void;
  isCorrect?: boolean; // Optional: Force styling if needed
}) {
  // Simple heuristic: if it contains "none" or "pointer", usually good/active state
  // You can customize this logic or pass `isCorrect` explicitly.
  const isActive = value.includes("none") || value.includes("pointer");

  return (
    <button
      onClick={onClick}
      className={`
        mx-1 px-1.5 rounded border text-xs font-bold transition-all font-mono align-middle
        ${
          isActive
            ? "bg-green-500/20 text-green-400 border-green-500/50"
            : "bg-red-500/20 text-red-400 border-red-500/50 animate-pulse"
        }
      `}
    >
      {value}
    </button>
  );
}
