"use client";

import React from "react";
import CodeBlock from "@/app/utilities/components/code-block";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

// 1. Generic Card
interface ExampleCardProps {
  title: string;
  description: React.ReactNode;
  code: string;
  copyText?: string;
  children: React.ReactNode;
}

export function ExampleCard({
  title,
  description,
  code,
  copyText,
  children,
}: ExampleCardProps) {
  const { copy, copiedText } = useCopyToClipboard();

  const textToCopy = copyText || code;
  const isCopied = copiedText === textToCopy;

  return (
    <article className="border border-border rounded-lg p-4 bg-card/20">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          onClick={() => copy(textToCopy)}
          className="text-xs px-2 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer min-w-12 transition-all"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="bg-slate-800 rounded p-3 text-white">
        <div className="text-sm text-muted-foreground mb-2">{description}</div>
        {children}
      </div>

      <div className="mt-3">
        <CodeBlock language="jsx" code={code} />
      </div>
    </article>
  );
}

// 2. Generic Grid Wrapper
interface ExampleSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function ExampleSection({
  title = "Real-World Examples",
  children,
  className = "",
}: ExampleSectionProps) {
  return (
    <section className={`space-y-6 border-t border-border pt-8 ${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6">{children}</div>
    </section>
  );
}
