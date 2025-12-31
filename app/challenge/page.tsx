"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import challengesData from "@/app/data/challenges.json";

export default function TailwindChallenge() {
  const searchParams = useSearchParams();
  const utilityParam = searchParams.get("utility") || "align-content";
  
  const challenge = challengesData.challenges.find((c) => c.utility === utilityParam);
  
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>({});
  const [isSolved, setIsSolved] = useState(false);
  
  // Check if solution matches
  useEffect(() => {
    if (!challenge) return;
    
    const isCorrect = Object.keys(challenge.solution).every(
      (key) => selectedValues[key] === challenge.solution[key]
    );
    
    setIsSolved(isCorrect);
  }, [selectedValues, challenge]);
  
  if (!challenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-gray-100 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Challenge Not Found</h1>
          <p className="text-gray-400">No challenge available for: {utilityParam}</p>
        </div>
      </div>
    );
  }

  const handleChange = (property: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [property]: value }));
  };

  const showSolution = () => {
    setSelectedValues({ ...challenge.solution });
  };

  // Build class strings
  const solutionClasses = Object.values(challenge.solution).join(" ");
  const userClasses = Object.values(selectedValues).filter(Boolean).join(" ");

  // For align-self, classes apply to individual items, not container
  const isAlignSelf = challenge.utility === "align-self";
  
  // For sr-only/not-sr-only, classes apply to the text content
  const isTextChallenge = challenge.utility === "sr-only" || challenge.utility === "not-sr-only";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-gray-100 px-4 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {challenge.title}
        </h1>
        <p className="text-gray-400 text-lg">{challenge.description}</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Target Layout */}
        <div className="bg-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4 text-emerald-400">🎯 Target Layout</h2>
          <p className="text-sm text-gray-400 mb-4">{challenge.targetDescription}</p>
          
          <div className={`${challenge.baseContainer.replace('h-80', 'min-h-80').replace('w-full', 'w-full')} ${isAlignSelf ? '' : solutionClasses}`}>
            {Array.from({ length: challenge.numberOfBoxes }).map((_, i) => (
              <div key={i} className={`${challenge.boxClasses} m-2 flex items-center justify-center text-white font-bold ${
                isAlignSelf && i === 2 ? solutionClasses : ''
              }`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Your Output */}
        <div className="bg-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-purple-400">✨ Your Output</h2>
            {isSolved && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 animate-bounce">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-emerald-300">Perfect!</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-400 mb-4">
            {isSolved ? challenge.successMessage : challenge.hintMessage}
          </p>
          
          <div className={`${challenge.baseContainer.replace('h-80', 'min-h-80').replace('w-full', 'w-full')} ${isAlignSelf ? '' : userClasses}`}>
            {Array.from({ length: challenge.numberOfBoxes }).map((_, i) => (
              <div key={i} className={`${challenge.boxClasses} m-2 flex items-center justify-center text-white font-bold ${
                isAlignSelf && i === 2 ? userClasses : ''
              }`}>
                {i + 1}
              </div>
            ))}
          </div>

          <button
            onClick={showSolution}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 py-3 rounded-lg font-semibold transition-all"
          >
            💡 Show Solution
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-6xl mx-auto mt-8 bg-gray-900/50 backdrop-blur border border-gray-700 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">⚙️ Controls</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenge.controls.map((control) => (
            <div key={control.property}>
              <label className="block text-sm font-semibold mb-3 text-gray-300">
                {control.title}
              </label>
              <div className="flex flex-wrap gap-2">
                {control.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleChange(control.property, option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      selectedValues[control.property] === option.value
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}