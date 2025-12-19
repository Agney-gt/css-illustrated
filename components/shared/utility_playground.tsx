"use client";

import React, { useState } from "react";
import { PlaygroundLayout } from "@/components/shared/playground-layout";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export interface UtilityPlaygroundConfig {
  title: string;
  description: string;
  options: string[];
  defaultValue: string;
  buildMarkup: (value: string) => string;
  renderPreview: (value: string) => React.ReactNode;
  optionLabel?: (value: string) => string;
}

export function UtilityPlayground({
  title,
  description,
  options,
  defaultValue,
  buildMarkup,
  renderPreview,
  optionLabel = (v) => v,
}: UtilityPlaygroundConfig) {
  const [value, setValue] = useState(defaultValue);
  const { copy } = useCopyToClipboard();

  const code = buildMarkup(value);

  return (
    <PlaygroundLayout
      title={title}
      description={description}
      code={code}
      controls={
        <>
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Utility
            </label>
            <div className="flex flex-wrap gap-2">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setValue(opt)}
                  className={`px-3 py-1 rounded border text-sm ${
                    value === opt
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-border"
                  }`}
                >
                  {optionLabel(opt)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={() => copy(value)}
              className="px-3 py-1 rounded border text-sm border-border"
            >
              Copy class
            </button>
          </div>
        </>
      }
      preview={renderPreview(value)}
    />
  );
}
