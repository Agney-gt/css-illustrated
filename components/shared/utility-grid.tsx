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
}:UtilityGridProps) {
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <section className="space-y-6 border-t pt-8">
      <header className="space-y-1">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">
          Click a utility to copy its class.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((u) => {
          const isCopied = copiedText === u.cls;

          return (
            <div
              key={u.cls}
              className="rounded-xl border p-4 flex flex-col gap-3 bg-background"
            >
              {/* Header row */}
              <div className="flex items-center justify-between">
                <code className="font-mono text-sm font-semibold ">
                  {u.cls}
                </code>

                <button
                  onClick={() => copy(u.cls)}
                  className="text-xs text-muted-foreground hover:text-accent transition"
                >
                  {isCopied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Preview sandbox */}
              <div className="w-full max-w-full overflow-hidden rounded-md border bg-slate-100 p-2">
                <div
                  className={`
                    ${u.cls}
                    bg-slate-700 text-white
                    text-xs font-mono
                    px-3 py-2
                    rounded
                    max-w-full
                  `}
                >
                  {u.cls.replace(prefix, "")}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-snug">
                {u.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
