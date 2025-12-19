"use client";

import { ReactNode } from "react";
import { UtilityItem } from "@/components/shared/utility-grid";
import { TipItem } from "@/components/shared/tips-section";

/* -------------------------------- HERO -------------------------------- */

export const HEIGHT_HERO = {
  title: "Height",
  description:
    "Height utilities in Tailwind control the vertical size of elements. You can use fixed sizes, content-based height, full-parent height, or full-viewport height to build cards, layouts, heroes, and scrollable sections.",
};

/* ----------------------------- UTILITIES -------------------------------- */

export const HEIGHT_UTILITIES: UtilityItem[] = [
  { cls: "h-0", desc: "Height 0px — collapse element." },
  { cls: "h-px", desc: "Height 1px." },
  { cls: "h-4", desc: "Height 1rem (~16px)." },
  { cls: "h-16", desc: "Height 4rem (~64px)." },
  { cls: "h-32", desc: "Height 8rem (~128px)." },
  { cls: "h-64", desc: "Height 16rem (~256px)." },
  { cls: "h-full", desc: "Height 100% of parent (parent must have height)." },
  { cls: "h-screen", desc: "Height 100vh — full viewport height." },
  { cls: "h-auto", desc: "Height adapts to content." },
];

/* -------------------------------- TIPS ---------------------------------- */

export const HEIGHT_TIPS: TipItem[] = [
  {
    bold: "Uniform layouts:",
    text: "Use fixed heights like `h-64` to align cards or grid items with varying content length.",
  },
  {
    bold: "Content-driven sizing:",
    text: "`h-auto` allows containers to grow naturally with content.",
  },
  {
    bold: "Full-screen sections:",
    text: "Use `h-screen` (or modern viewport units like `h-dvh`) for heroes and full-page layouts.",
  },
  {
    bold: "Scrollable regions:",
    text: "Combine fixed heights with `overflow-auto` to create scrollable panels.",
  },
  {
    bold: "Common pitfall:",
    text: "`h-full` only works when the parent has an explicit height set.",
  },
];

/* ------------------------------ EXAMPLES --------------------------------- */

export interface HeightExample {
  title: string;
  description: string;
  code: string;
  preview: ReactNode;
}

export const HEIGHT_EXAMPLES: HeightExample[] = [
  {
    title: "Fixed-height card grid",
    description:
      "Using a consistent height ensures cards align neatly even when content length varies.",
    code: `<div class="grid grid-cols-3 gap-4">
  <div class="h-64 bg-slate-800 text-white rounded p-4">Card 1</div>
  <div class="h-64 bg-slate-700 text-white rounded p-4">Card 2</div>
  <div class="h-64 bg-slate-600 text-white rounded p-4">Card 3</div>
</div>`,
    preview: (
      <div className="grid grid-cols-3 gap-4">
        <div className="h-64 bg-slate-800 text-white rounded p-4">Card 1</div>
        <div className="h-64 bg-slate-700 text-white rounded p-4">
          Card 2 (longer content)
        </div>
        <div className="h-64 bg-slate-600 text-white rounded p-4">Card 3</div>
      </div>
    ),
  },

  {
    title: "Fixed vs auto height cards",
    description:
      "Compare a fixed-height container with one that adapts to content size.",
    code: `<div class="flex gap-4">
  <div class="h-48 w-64 bg-slate-700 text-white p-4 rounded overflow-auto">
    Fixed height
  </div>
  <div class="h-auto w-64 bg-slate-700 text-white p-4 rounded">
    Auto height
  </div>
</div>`,
    preview: (
      <div className="flex gap-4">
        <div className="h-48 w-64 bg-slate-700 text-white p-4 rounded overflow-auto">
          Fixed height
        </div>
        <div className="h-auto w-64 bg-slate-700 text-white p-4 rounded">
          Auto height expands naturally
        </div>
      </div>
    ),
  },

  {
    title: "Full-viewport layout",
    description:
      "Viewport-height utilities create immersive, full-screen sections.",
    code: `<section class="h-screen w-full bg-gradient-to-b from-indigo-600 to-indigo-400 flex items-center justify-center text-white">
  <h2 class="text-3xl font-bold">Full-screen Hero</h2>
</section>`,
    preview: (
      <div className="h-screen w-full bg-gradient-to-b from-indigo-600 to-indigo-400 flex items-center justify-center text-white rounded">
        <h2 className="text-3xl font-bold">Full-screen Hero</h2>
      </div>
    ),
  },
];

/* ----------------------------- PLAYGROUND -------------------------------- */

export const HEIGHT_PLAYGROUND = {
  title: "Height playground",
  description:
    "Height utilities define the vertical size of elements using fixed, content-based, parent-based, or viewport-based values.",
  options: ["h-16", "h-32", "h-64", "h-full", "h-screen", "h-auto"],
  defaultValue: "h-32",
  buildMarkup: (value: string) => `
<div class="bg-slate-800 p-4 rounded">
  <div class="${value} w-48 bg-blue-600 text-white rounded flex items-center justify-center">
    ${value}
  </div>
</div>`.trim(),
  renderPreview: (value: string) => (
    <div className="bg-slate-800 p-4 rounded">
      <div
        className={`${value} w-48 bg-blue-600 text-white rounded flex items-center justify-center transition-all duration-500`}
      >
        {value}
      </div>
    </div>
  ),
};
