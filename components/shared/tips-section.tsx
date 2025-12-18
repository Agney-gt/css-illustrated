import React from "react";

export interface TipItem {
  bold: string;
  text: string;
}

interface TipsSectionProps {
  title?: string;
  tips: TipItem[];
  className?: string;
}

export function TipsSection({
  title = "Tips & best practices",
  tips,
  className = "",
}: TipsSectionProps) {
  return (
    <section
      className={`bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 space-y-3 ${className}`}
    >
      <h3 className="font-semibold">{title}</h3>
      <ul className="space-y-2 text-muted-foreground text-sm">
        {tips.map((tip, index) => (
          <li key={index}>
            <strong>{tip.bold}</strong> {tip.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
