import React from "react";
import CodeBlock from "@/app/utilities/components/code-block";

interface PlaygroundLayoutProps {
  title?: string;
  description?: string;
  controls: React.ReactNode; // Left side
  preview: React.ReactNode; // Right side (Visual)
  code: string; // Right side (Code)
  onCopyCode: () => void;
}

export function PlaygroundLayout({
  title = "Interactive playground",
  description = "Pick a utility and test it.",
  controls,
  preview,
  code,
  onCopyCode,
}: PlaygroundLayoutProps) {
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
        <div className="space-y-3 md:col-span-1">{controls}</div>

        {/* Right: Preview & Code */}
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
                onClick={onCopyCode}
                className="text-xs px-3 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer"
              >
                Copy markup
              </button>
            </div>

            <div className="rounded p-4 bg-slate-800 mb-4">{preview}</div>

            <CodeBlock code={code} language="jsx" />
          </div>
        </div>
      </div>
    </section>
  );
}
