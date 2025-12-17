"use client";

import React, { useState } from "react";
import CodeBlock from "@/app/utilities/components/code-block";
import {
  CursorClass,
  CURSOR_UTILITIES,
} from "@/app/utilities/interactivity/cursor/data";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function CursorPlayground() {
  const [cursor, setCursor] = useState<CursorClass>("cursor-pointer");
  const [hoverOnly, setHoverOnly] = useState(false);
  const [label, setLabel] = useState<string>("Click me");
  const { copy } = useCopyToClipboard();

  const playgroundMarkup = `<button class="${
    hoverOnly ? `hover:${cursor}` : cursor
  } px-4 py-2 rounded bg-blue-600 text-white">${label}</button>`;

  return (
    <section className="space-y-4 border-t border-border pt-8">
      <h2 className="text-3xl font-bold">Interactive playground</h2>
      <p className="text-muted-foreground">
        Pick a cursor utility and test it on different controls.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Controls Column */}
        <div className="space-y-3 md:col-span-1">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Cursor
            </label>
            <div className="flex gap-2 flex-wrap">
              {CURSOR_UTILITIES.map((u) => (
                <button
                  key={u.cls}
                  onClick={() => setCursor(u.cls)}
                  className={`px-3 py-1 rounded border text-sm ${
                    cursor === u.cls
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-border"
                  }`}
                >
                  {u.cls.replace("cursor-", "")}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="playground-label"
              className="block text-sm font-medium text-muted-foreground mb-2"
            >
              Label
            </label>
            <input
              id="playground-label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="w-full px-3 py-2 rounded border border-border bg-slate-700 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Extras
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setHoverOnly((v) => !v)}
                className={`px-3 py-1 rounded border text-sm ${
                  hoverOnly ? "border-blue-500 bg-blue-500/10" : "border-border"
                }`}
              >
                Hover-only
              </button>

              <button
                onClick={() =>
                  copy(`${hoverOnly ? `hover:${cursor}` : cursor}`)
                }
                className="px-3 py-1 rounded border text-sm border-border cursor-pointer"
              >
                Copy classes
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-3">
          <div className="border border-border rounded-lg p-4 bg-card/30">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">Playground</div>
                <div className="text-xs text-muted-foreground">
                  Live preview
                </div>
              </div>
              <button
                onClick={() => copy(playgroundMarkup)}
                className="text-xs px-3 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer"
              >
                Copy markup
              </button>
            </div>

            <div className="rounded p-4 bg-slate-800">
              <div className="mb-4">
                <div className="mb-2 text-sm text-muted-foreground">
                  Button / clickable
                </div>
                <button
                  className={`${
                    hoverOnly ? `hover:${cursor}` : cursor
                  } px-4 py-2 rounded bg-blue-600 text-white`}
                >
                  {label}
                </button>
              </div>

              <div className="mb-4">
                <div className="mb-2 text-sm text-muted-foreground">
                  Text area (text)
                </div>
                <textarea
                  className={`w-full px-3 py-2 rounded bg-slate-700 text-white ${
                    hoverOnly ? `hover:cursor-text` : "cursor-text"
                  }`}
                  rows={2}
                  defaultValue={"Selectable text..."}
                />
              </div>

              <CodeBlock code={playgroundMarkup} language="jsx" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
