"use client";

import React from "react";

export interface ColorSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  /** optional tailwind bg class to visually apply */
  bgClass?: string;
}

export default function ColorSlider({
  value,
  onChange,
  min = 0,
  max = 900,
  step = 100,
  bgClass,
}: ColorSliderProps) {
  return (
    <div className="mt-3">
      <label className="block text-sm font-medium text-muted-foreground mb-2">
        Shade ({value})
      </label>

      {/* Navigation bar below buttons; colored by bgClass */}
      <div className={`rounded-md p-3 transition-colors duration-300 ${bgClass ?? "bg-transparent"}`}>
        <div className="relative">
          {/* Colored line that indicates the track */}
          <div className="h-1 rounded bg-black/20" />

          {/* slider input positioned above */}
          <input
            aria-label="color-shade"
            type="range"
            min={min}
            max={max}
            step={step}
            value={String(value)}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full appearance-none h-2 bg-transparent absolute left-0 top-0"
          />

          {/* indicator (navigation line) - position approx based on percent; simple approach: show a narrow vertical bar positioned with inline style */}
          <div
            role="presentation"
            aria-hidden
            style={{ left: `${((value - min) / (max - min)) * 100}%` }}
            className={`pointer-events-none absolute -top-2 w-0.5 h-6 transform -translate-x-1/2 transition-colors duration-300 ${bgClass ?? "bg-black"}`}
          />
        </div>

        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
}
