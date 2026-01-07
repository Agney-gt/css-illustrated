"use client";

import React from "react";
import CodeBlock from "@/app/utilities/components/code-block";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

interface ExampleData {
  title: string;
  description: string;
  code: string;
  preview: React.ReactNode; 
}

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
          className="text-xs px-2 py-1 rounded bg-muted/10 hover:bg-muted/20 cursor-pointer min-w-12 transition-all text-muted-foreground"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="bg-slate-800 rounded p-3 text-white">
        <div className="text-sm text-slate-400 mb-2">{description}</div>
        <div className="mt-4 p-2 bg-slate-900/50 rounded border border-slate-700/50">
          {children}
        </div>
      </div>

      <div className="mt-3">
        <CodeBlock language="jsx" code={code} />
      </div>
    </article>
  );
}

interface ExampleSectionProps {
  title?: string;
  children?: React.ReactNode; 
  examples?: ExampleData[]; 
  className?: string;
}

export function ExampleSection({
  title = "Real-World Examples",
  children,
  examples,
  className = "",
}: ExampleSectionProps) {
  return (
    <section className={`space-y-6 border-t border-border pt-8 ${className}`}>
      <h2 className="text-3xl font-bold">{title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {children}

        {examples?.map((ex, index) => (
          <ExampleCard
            key={index}
            title={ex.title}
            description={ex.description}
            code={ex.code}
          >
            {ex.preview}
          </ExampleCard>
        ))}
      </div>
    </section>
  );
}
