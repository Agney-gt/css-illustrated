"use client";

import { ReactNode } from "react";
import { UtilityItem } from "@/components/shared/utility-grid";
import { TipItem } from "@/components/shared/tips-section";

/* -------------------------------- HERO -------------------------------- */

export const WIDTH_HERO = {
  title: "Width",
  description:
    "Width utilities in Tailwind control the horizontal size of elements. You can use fixed, fractional, full, or content-based widths, and combine them with responsive modifiers for flexible, predictable layouts.",
};

/* ----------------------------- UTILITIES -------------------------------- */

export const WIDTH_UTILITIES: UtilityItem[] = [
  { cls: "w-24", desc: "Width: 6rem (~96px)" },
  { cls: "w-32", desc: "Width: 8rem (~128px)" },
  { cls: "w-48", desc: "Width: 12rem (~192px)" },
  { cls: "w-64", desc: "Width: 16rem (~256px)" },
  { cls: "w-1/4", desc: "25% of parent width" },
  { cls: "w-1/2", desc: "50% of parent width" },
  { cls: "w-full", desc: "Full width of parent" },
  { cls: "w-auto", desc: "Width based on content" },
];

/* -------------------------------- TIPS ---------------------------------- */

export const WIDTH_TIPS: TipItem[] = [
  {
    bold: "Fixed sizing:",
    text: "Use fixed widths like `w-24` or `w-64` for consistent card and button sizing.",
  },
  {
    bold: "Flexible layouts:",
    text: "Fractional widths like `w-1/2` and `w-1/4` adapt naturally inside flex and grid containers.",
  },
  {
    bold: "Fill space:",
    text: "Combine `w-full` with `flex-1` to occupy remaining horizontal space.",
  },
  {
    bold: "Responsive control:",
    text: "Use responsive prefixes like `md:w-1/2` to adjust widths across breakpoints.",
  },
  {
    bold: "Custom values:",
    text: "Arbitrary widths like `w-[300px]` are useful for one-off layout needs.",
  },
];

/* ------------------------------ EXAMPLES --------------------------------- */

export interface WidthExample {
  title: string;
  description: string;
  code: string;
  preview: ReactNode;
}

export const WIDTH_EXAMPLES: WidthExample[] = [
  {
    title: "Responsive card layout",
    description:
      "Cards with different fixed widths maintain visual rhythm while wrapping responsively.",
    code: `<div class="flex gap-4 flex-wrap">
  <div class="w-48 bg-blue-500 text-white rounded p-4">Card 1</div>
  <div class="w-64 bg-blue-400 text-white rounded p-4">Card 2</div>
  <div class="w-56 bg-blue-300 text-white rounded p-4">Card 3</div>
  <div class="w-40 bg-blue-200 text-white rounded p-4">Card 4</div>
</div>`,
    preview: (
      <div className="flex gap-4 flex-wrap">
        <div className="w-48 bg-blue-500 text-white rounded p-4">Card 1</div>
        <div className="w-64 bg-blue-400 text-white rounded p-4">Card 2</div>
        <div className="w-56 bg-blue-300 text-white rounded p-4">Card 3</div>
        <div className="w-40 bg-blue-200 text-white rounded p-4">Card 4</div>
      </div>
    ),
  },

  {
    title: "Sidebar + main content",
    description:
      "A fixed-width sidebar paired with a flexible main content area.",
    code: `<div class="flex gap-6 min-h-[150px]">
  <div class="w-48 bg-red-500 text-white rounded p-4">Sidebar</div>
  <div class="flex-1 bg-green-500 text-white rounded p-4">Main Content</div>
</div>`,
    preview: (
      <div className="flex gap-6 min-h-[150px]">
        <div className="w-48 bg-red-500 text-white rounded p-4">Sidebar</div>
        <div className="flex-1 bg-green-500 text-white rounded p-4">
          Main Content
        </div>
      </div>
    ),
  },

  {
    title: "Horizontal form layout",
    description:
      "Fractional widths create balanced, readable form layouts.",
    code: `<div class="flex gap-4">
  <input class="w-1/2 p-2 rounded border" placeholder="Email" />
  <button class="w-1/4 bg-purple-600 text-white rounded p-2">Submit</button>
</div>`,
    preview: (
      <div className="flex gap-4">
        <input
          className="w-1/2 p-2 rounded border"
          placeholder="Email"
        />
        <button className="w-1/4 bg-purple-600 text-white rounded p-2">
          Submit
        </button>
      </div>
    ),
  },
];

/* ----------------------------- PLAYGROUND -------------------------------- */

export const WIDTH_PLAYGROUND = {
  title: "Width playground",
  description:
    "Width utilities define the exact horizontal size of an element using fixed, fractional, or full-width values.",
  options: ["w-24", "w-48", "w-64", "w-1/4", "w-1/2", "w-full"],
  defaultValue: "w-48",
  buildMarkup: (value: string) => `
<div class="border p-2 w-full">
  <div class="${value} bg-blue-600 text-white p-2 rounded">
    Width box
  </div>
</div>`.trim(),
  renderPreview: (value: string) => (
    <div className="border border-border rounded p-2 bg-slate-900 w-full">
      <div className={`${value} bg-blue-600 text-white p-2 rounded`}>
        {value}
      </div>
    </div>
  ),
};
