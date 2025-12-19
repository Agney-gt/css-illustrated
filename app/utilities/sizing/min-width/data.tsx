
import { TipItem } from "@/components/shared/tips-section";
import { UtilityItem } from "@/components/shared/utility-grid";

export const MIN_WIDTH_HERO = {
  title: "Min-Width",
  description:
    "Control the minimum horizontal size of elements. `min-width` utilities prevent items from shrinking below a defined width, making layouts more predictable in flex, grid, tables, and responsive UIs. This is especially useful for buttons, cards, form fields, and scrollable content.",
};

export const MIN_WIDTH_UTILITIES: UtilityItem[] = [
  {
    cls: "min-w-0",
    desc: "Allows an element to shrink fully when space is constrained",
  },
  {
    cls: "min-w-12",
    desc: "Sets minimum width to 3rem (48px)",
  },
  {
    cls: "min-w-24",
    desc: "Sets minimum width to 6rem (96px)",
  },
  {
    cls: "min-w-40",
    desc: "Sets minimum width to 10rem (160px)",
  },
  {
    cls: "min-w-64",
    desc: "Sets minimum width to 16rem (256px)",
  },
  {
    cls: "min-w-full",
    desc: "Element is at least as wide as its parent",
  },
  {
    cls: "min-w-max",
    desc: "Minimum width equals the max-content size",
  },
  {
    cls: "min-w-min",
    desc: "Minimum width equals the min-content size",
  },
];

export const MIN_WIDTH_TIPS: TipItem[] = [
  {
    bold: "Flexbox gotcha:",
    text: "use `min-w-0` on flex items to allow text and content to shrink instead of overflowing.",
  },
  {
    bold: "Buttons & inputs:",
    text: "apply a `min-w-*` to keep controls usable on narrow screens.",
  },
  {
    bold: "Tables & scroll:",
    text: "combine `min-w-*` with horizontal scrolling to preserve column readability.",
  },
  {
    bold: "Responsive control:",
    text: "pair `min-w-*` with responsive prefixes like `sm:` or `md:` to adapt layouts across breakpoints.",
  },
];

export const MIN_WIDTH_PLAYGROUND = {
  title: "Min-width playground",
  description:
    "Min-width prevents elements from shrinking below a certain size.",
  options: [
    "min-w-0",
    "min-w-12",
    "min-w-24",
    "min-w-40",
    "min-w-64",
    "min-w-full",
  ],
  defaultValue: "min-w-24",
  buildMarkup: (value: string) => `
<div class="flex gap-2 w-64 border p-2">
  <div class="${value} bg-blue-600 text-white p-2 rounded">
    Min-width box
  </div>
  <div class="flex-1 bg-slate-600 p-2 rounded">
    Sibling
  </div>
</div>`.trim(),
  renderPreview: (value: string) => (
    <div className="w-64 border border-border rounded p-2 bg-slate-900">
      <div className="flex gap-2">
        <div className={`${value} bg-blue-600 text-white p-2 rounded`}>
          {value}
        </div>
        <div className="flex-1 bg-slate-600 text-white p-2 rounded">
          Sibling
        </div>
      </div>
    </div>
  ),
};


import { ReactNode } from "react";

export interface MinWidthExample {
  title: string;
  description: string;
  code: string;
  preview: ReactNode;
}

export const MIN_WIDTH_EXAMPLES: MinWidthExample[] = [
  {
    title: "Consistent button sizes",
    description:
      "Using min-width on buttons prevents them from shrinking too much, ensuring consistent click targets and better usability.",
    code: `<div class="flex gap-4">
  <button class="min-w-40 px-4 py-2 bg-indigo-600 text-white rounded">
    Save Changes
  </button>
  <button class="min-w-40 px-4 py-2 bg-gray-600 text-white rounded">
    Cancel
  </button>
</div>`,
    preview: (
      <div className="flex gap-4">
        <button className="min-w-40 px-4 py-2 bg-indigo-600 text-white rounded">
          Save Changes
        </button>
        <button className="min-w-40 px-4 py-2 bg-gray-600 text-white rounded">
          Cancel
        </button>
      </div>
    ),
  },

  {
    title: "Readable tables on small screens",
    description:
      "Applying min-width to table columns avoids text overlap and preserves column alignment in horizontally scrollable tables.",
    code: `<div class="overflow-auto">
  <table class="min-w-full">
    <tr>
      <th class="min-w-24">Name</th>
      <th class="min-w-40">Email</th>
      <th class="min-w-64">Role</th>
    </tr>
  </table>
</div>`,
    preview: (
      <div className="overflow-auto">
        <table className="min-w-full text-white">
          <thead>
            <tr>
              <th className="min-w-24 text-left">Name</th>
              <th className="min-w-40 text-left">Email</th>
              <th className="min-w-64 text-left">Role</th>
            </tr>
          </thead>
        </table>
      </div>
    ),
  },

  {
    title: "Aligned cards in a grid",
    description:
      "Setting a minimum width on cards keeps layouts visually aligned even when content length varies.",
    code: `<div class="flex gap-4 flex-wrap">
  <div class="min-w-48 p-4 bg-green-600 text-white rounded">Card A</div>
  <div class="min-w-48 p-4 bg-green-500 text-white rounded">Card B</div>
  <div class="min-w-48 p-4 bg-green-400 text-white rounded">Card C</div>
</div>`,
    preview: (
      <div className="flex gap-4 flex-wrap">
        <div className="min-w-48 p-4 bg-green-600 text-white rounded">
          Card A
        </div>
        <div className="min-w-48 p-4 bg-green-500 text-white rounded">
          Card B
        </div>
        <div className="min-w-48 p-4 bg-green-400 text-white rounded">
          Card C
        </div>
      </div>
    ),
  },
];
