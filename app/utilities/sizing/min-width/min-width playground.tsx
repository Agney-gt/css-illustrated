"use client";

import { useState } from "react";
import { PlaygroundLayout } from "@/components/shared/playground-layout";

const OPTIONS = [
  "min-w-0",
  "min-w-12",
  "min-w-24",
  "min-w-40",
  "min-w-64",
  "min-w-full",
];

export function MinWidthPlayground() {
  const [value, setValue] = useState("min-w-24");

  const code = `<div class="${value} bg-blue-600 text-white p-4 rounded">
  Min width demo
</div>`;

  return (
    <PlaygroundLayout
      title="Min-width playground"
      description="Select a min-width utility and see how it affects layout."
      controls={
        <div className="space-y-2">
          <label className="text-sm font-semibold">Min-width</label>
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border border-border rounded px-2 py-1 bg-background"
          >
            {OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      }
      preview={
        <div className={`bg-blue-600 text-white p-4 rounded ${value}`}>
          {value}
        </div>
      }
      code={code}
    />
  );
}
