"use client";

import React from "react";
import { CURSOR_UTILITIES } from "@/app/utilities/interactivity/cursor/data";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export function CursorUtilities() {
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <section
      aria-labelledby="cursor-utilities-heading"
      className="space-y-6 border-t border-border pt-8"
    >
      <div className="space-y-2">
        <h2 id="cursor-utilities-heading" className="text-3xl font-bold">
          Cursor utilities
        </h2>
        <p className="text-muted-foreground">Click a class to copy it.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {CURSOR_UTILITIES.map((u) => (
          <button
            key={u.cls}
            onClick={() => copy(u.cls)}
            className="text-left border border-border rounded-lg p-4 hover:bg-card/50 transition flex flex-col group"
            aria-label={`Copy ${u.cls}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`w-14 h-10 rounded-sm bg-slate-700 flex items-center justify-center text-white ${u.cls}`}
                  aria-hidden
                >
                  {u.cls.replace("cursor-", "")}
                </div>

                <div>
                  <code className="text-black text-sm font-mono text-accent font-semibold">
                    {u.cls}
                  </code>
                  <div className="text-xs text-muted-foreground">{u.desc}</div>
                </div>
              </div>

              <span className="text-xs text-muted-foreground">
                {copiedText === u.cls ? "Copied" : "Copy"}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
