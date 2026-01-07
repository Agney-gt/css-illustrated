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

          // 1. Identify if this class would make the element invisible.
          // We use exact matching to avoid false positives (like 'not-sr-only')
          const dangerousClasses = [
            "sr-only",
            "invisible",
            "hidden",
            "opacity-0",
          ];
          const isHiddenClass = dangerousClasses.includes(u.cls);

          // 2. If it's a hiding class, DO NOT apply it to the preview div.
          // If it's a normal class (like 'text-center'), apply it so we see the effect.
          const previewClass = isHiddenClass ? "" : u.cls;

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
                    ${previewClass} 
                    bg-slate-700 text-white
                    text-xs font-mono
                    px-3 py-2
                    rounded
                    max-w-full
                    flex items-center justify-center
                  `}
                >
                  {/* 3. ALWAYS show the class name text, never "(Hidden)" */}
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
