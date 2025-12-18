"use client";

import React, { useState } from "react";
import {
  CursorClass,
  CURSOR_UTILITIES,
} from "@/app/utilities/interactivity/cursor/data";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { PlaygroundLayout } from "@/components/shared/playground-layout";

export function CursorPlayground() {
  const [cursor, setCursor] = useState<CursorClass>("cursor-pointer");
  const [hoverOnly, setHoverOnly] = useState(false);
  const [label, setLabel] = useState<string>("Click me");
  const { copy } = useCopyToClipboard();

  const playgroundMarkup = `<button class="${
    hoverOnly ? `hover:${cursor}` : cursor
  } px-4 py-2 rounded bg-blue-600 text-white">${label}</button>`;

  return (
    <PlaygroundLayout
      title="Interactive playground"
      description="Pick a cursor utility and test it on different controls."
      code={playgroundMarkup}
      controls={
        <>
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
        </>
      }
      preview={
        <>
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
            <label
              htmlFor="playground-textarea"
              className="mb-2 text-sm text-muted-foreground block"
            >
              Text area (text)
            </label>
            <textarea
              id="playground-textarea"
              className={`w-full px-3 py-2 rounded bg-slate-700 text-white ${
                hoverOnly ? `hover:cursor-text` : "cursor-text"
              }`}
              rows={2}
              defaultValue={"Selectable text..."}
            />
          </div>
        </>
      }
    />
  );
}
