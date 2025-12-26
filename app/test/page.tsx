"use client";

import { useState } from "react";
import { QUESTION_BANK, Question } from "./questions";

type Category = keyof typeof QUESTION_BANK;

export default function TailwindQuiz() {
  const [category, setCategory] = useState<Category | null>(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const [finished, setFinished] = useState(false);

  /* ---------------- CATEGORY SELECTION ---------------- */
  if (!category) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Select a Test</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.keys(QUESTION_BANK).map((key) => (
            <button
              key={key}
              onClick={() => setCategory(key as Category)}
              className="p-4 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const questions = QUESTION_BANK[category];
  const q: Question = questions[index];
  const total = questions.length;

  /* ---------------- HANDLERS ---------------- */
  const handleSelect = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    if (opt === q.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    setSelected(null);
    if (index + 1 === total) setFinished(true);
    else setIndex((i) => i + 1);
  };

  const handleSkip = () => {
    if (!selected) setSkipped((s) => s + 1);
    handleNext();
  };

  const handleEndTest = () => {
    setFinished(true);
  };

  /* ---------------- RESULT SCREEN ---------------- */
  if (finished) {
    const percent = (score / total) * 100;
    const radius = 85;
    const stroke = 14;
    const size = 220;
    const center = size / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
      <div className="flex flex-col items-center gap-6 p-10">
        <h1 className="text-3xl font-bold">Result</h1>

        <svg width={size} height={size}>
          {/* Rotate only the circles */}
          <g transform={`rotate(-90 ${center} ${center})`}>
            {/* Red base */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="red"
              strokeWidth={stroke}
              fill="none"
            />
            {/* Green progress */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              stroke="green"
              strokeWidth={stroke}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
          </g>

          {/* Centered score text (NOT rotated) */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-2xl font-bold fill-black"
          >
            {score} / {total}
          </text>
        </svg>

        <div className="mt-4 text-center space-y-1">
          <p>Total Questions: {total}</p>
          <p>Correct: {score}</p>
          <p>Wrong: {total - score - skipped}</p>
          <p>Skipped: {skipped}</p>
        </div>

        <button
          onClick={() => {
            setCategory(null);
            setIndex(0);
            setScore(0);
            setSkipped(0);
            setFinished(false);
          }}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Take another test
        </button>
      </div>
    );
  }

  /* ---------------- QUESTION SCREEN ---------------- */
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-2">
        Question {index + 1} / {total}
      </h2>

      <p className="mb-6 text-lg">{q.question}</p>

      <div className="flex flex-col gap-3">
        {q.options.map((opt) => {
          const isCorrect = opt === q.answer;
          const isSelected = opt === selected;

          let style = "border";
          if (selected) {
            if (isCorrect) style = "bg-green-900 text-white";
            else if (isSelected) style = "bg-red-500 text-white";
          }

          return (
            <button
              key={opt}
              onClick={() => handleSelect(opt)}
              className={`p-3 rounded border text-left ${style}`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-medium">Explanation:</p>
          <p className="text-sm">{q.explanation}</p>
        </div>
      )}

      {/* --------- ACTION BUTTONS --------- */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={handleEndTest}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          End Test
        </button>

        <button
          onClick={handleSkip}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Skip
        </button>

        <button
          onClick={handleNext}
          disabled={!selected}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
