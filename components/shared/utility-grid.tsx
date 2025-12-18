"use client";

import React from "react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

export interface UtilityItem {
  cls: string;
  desc: string;
}

interface UtilityGridProps {
  title?: string;
  items: UtilityItem[];
  prefix?: string;
}

export function UtilityGrid({
  title = "Utilities",
  items,
  prefix = "",
}: UtilityGridProps) {
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <section
      aria-labelledby="utility-grid-heading"
      className="space-y-6 border-t border-border pt-8"
    >
      <div className="space-y-2">
        <h2 id="utility-grid-heading" className="text-3xl font-bold">
          {title}
        </h2>
        <p className="text-muted-foreground">Click a class to copy it.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {items.map((u) => (
          <button
            key={u.cls}
            onClick={() => copy(u.cls)}
            className="text-left border border-border cursor-pointer rounded-lg p-4 hover:bg-card/50 transition flex flex-col group"
            aria-label={`Copy ${u.cls}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Visual Swatch */}
                <div
                  className={`w-14 h-10 rounded-sm bg-slate-700 flex items-center justify-center text-white ${u.cls}`}
                  aria-hidden
                >
                  {/* Smartly remove the prefix for cleaner UI */}
                  {u.cls.replace(prefix, "")}
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
