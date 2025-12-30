"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import CodeBlock from "@/app/utilities/components/code-block";

export interface UtilityPlaygroundConfig {
  title: string;
  description: string;
  options: string[];
  defaultValue: string;
  buildMarkup: (value: string, customClasses?: string) => string;
  renderPreview: (value: string, customClasses?: string) => React.ReactNode;
  optionLabel?: (value: string) => string;
  enableCodeEditor?: boolean;
  defaultCustomClasses?: string;
  /** Optional external value (controlled mode) */
  externalValue?: string;
  /** Optional handler for external value changes */
  onExternalValueChange?: (value: string) => void;
  /** Optional extra controls to render underneath the options */
  extraControls?: React.ReactNode;
}

export function UtilityPlayground({
  title,
  description,
  options,
  defaultValue,
  buildMarkup,
  renderPreview,
  optionLabel = (v) => v,
  enableCodeEditor = true,
  defaultCustomClasses = "",
  externalValue,
  onExternalValueChange,
  extraControls,
}: UtilityPlaygroundConfig) {
  const [value, setValue] = useState(defaultValue);
  const [customClasses, setCustomClasses] = useState(defaultCustomClasses);
  const [isEditingCode, setIsEditingCode] = useState(false);
  const [editedCode, setEditedCode] = useState("");
  const { copy } = useCopyToClipboard();

  // If externalValue is provided, use it as the source of truth
  const currentValue = externalValue ?? value;

  useEffect(() => {
    const initialCode = buildMarkup(currentValue, customClasses);
    setEditedCode(initialCode);
  }, [currentValue, customClasses, buildMarkup]);

  const code = isEditingCode ? editedCode : buildMarkup(currentValue, customClasses);

  const handleCodeChange = (newCode: string) => {
    setEditedCode(newCode);
  };

  const handleResetCode = () => {
    const originalCode = buildMarkup(value, customClasses);
    setEditedCode(originalCode);
    setIsEditingCode(false);
  };

  const renderCodeSection = () => {
    if (isEditingCode) {
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Code Editor</div>
            <div className="flex gap-2">
              <button
                onClick={handleResetCode}
                className="text-xs px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 text-red-600 transition-all"
              >
                Reset
              </button>
              <button
                onClick={() => copy(editedCode)}
                className="text-xs px-3 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer min-w-[5rem] transition-all"
              >
                Copy code
              </button>
            </div>
          </div>
          <textarea
            value={editedCode}
            onChange={(e) => handleCodeChange(e.target.value)}
            className="w-full h-32 p-3 font-mono text-xs border border-border rounded bg-card/50 text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            spellCheck={false}
          />
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Generated Code</div>
          <div className="flex gap-2">
            {enableCodeEditor && (
              <button
                onClick={() => setIsEditingCode(true)}
                className="text-xs px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 transition-all"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => copy(code)}
              className="text-xs px-3 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer min-w-[5rem] transition-all"
            >
              Copy code
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      aria-labelledby="playground-heading"
      className="space-y-4 border-t border-border pt-8"
    >
      <h2 id="playground-heading" className="text-3xl font-bold">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Left: Controls */}
        <div className="space-y-3 md:col-span-1">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Utility Class
            </label>
            <div className="flex flex-wrap gap-2">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    if (onExternalValueChange) onExternalValueChange(opt);
                    else setValue(opt);
                  }}
                  className={`px-3 py-1 rounded border text-sm transition-all ${
                    currentValue === opt
                      ? "border-blue-500 bg-blue-500/10 text-blue-600"
                      : "border-border hover:border-blue-300"
                  }`}
                >
                  {optionLabel(opt)}
                </button>
              ))}
            </div>

            {extraControls && <div className="mt-3">{extraControls}</div>}
          </div>

          {enableCodeEditor && (
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Additional Classes
              </label>
              <input
                type="text"
                value={customClasses}
                onChange={(e) => setCustomClasses(e.target.value)}
                placeholder="gap-4 p-4 bg-gray-100"
                className="w-full px-3 py-2 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <button
              onClick={() => copy(currentValue)}
              className="w-full px-3 py-2 rounded border text-sm border-border hover:bg-muted/20 transition-all"
            >
              Copy "{currentValue}"
            </button>
          </div>
        </div>

        {/* Right: Preview & Code */}
        <div className="md:col-span-2 space-y-4">
          <div className="border border-border rounded-lg p-4 bg-card/30">
            <div className="mb-3 text-sm font-semibold">Live Preview</div>
            <div className="rounded p-4 bg-slate-800 min-h-32 flex items-center justify-center">
              {renderPreview(currentValue, customClasses)}
            </div>
          </div>

          <div className="border border-border rounded-lg p-4 bg-card/30">
            {renderCodeSection()}
            {!isEditingCode && (
              <div className="mt-2">
                <CodeBlock code={code} language="jsx" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
