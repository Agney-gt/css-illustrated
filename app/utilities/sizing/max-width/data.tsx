import { ReactNode } from "react";
import { UtilityItem } from "@/components/shared/utility-grid";
import { TipItem } from "@/components/shared/tips-section";


// HERO
export const MAX_WIDTH_HERO = {
  title: "Max-width",
  description:
    "Control how wide an element can grow. Max-width is commonly used to improve readability, constrain layouts, and prevent content from stretching too wide on large screens.",
};

//UTILITIES
export const MAX_WIDTH_UTILITIES: UtilityItem[] = [
  {
    cls: "max-w-none",
    desc: "Removes any maximum width constraint",
  },
  {
    cls: "max-w-xs",
    desc: "Sets a small maximum width",
  },
  {
    cls: "max-w-sm",
    desc: "Sets a compact readable width",
  },
  {
    cls: "max-w-md",
    desc: "Ideal width for forms and cards",
  },
  {
    cls: "max-w-lg",
    desc: "Comfortable width for content blocks",
  },
  {
    cls: "max-w-xl",
    desc: "Wide content container",
  },
  {
    cls: "max-w-2xl",
    desc: "Large content area",
  },
  {
    cls: "max-w-full",
    desc: "Element can grow to full container width",
  },
];


export const MAX_WIDTH_TIPS: TipItem[] = [
  {
    bold: "Readable text:",
    text: "use `max-w-prose` or `max-w-lg` for long-form text to avoid overly long line lengths.",
  },
  {
    bold: "Centering layouts:",
    text: "combine `max-w-*` with `mx-auto` to create centered content containers.",
  },
  {
    bold: "Responsive design:",
    text: "max-width adapts naturally across screen sizes without media queries.",
  },
  {
    bold: "Avoid full-width text:",
    text: "very wide text blocks reduce readability on large screens.",
  },
];

//PLAYGROUND UTILITY DATA
export const MAX_WIDTH_PLAYGROUND = {
  title: "Max-width playground",
  description:
    "Max-width limits how wide an element can grow, even when more space is available.",
  options: [
    "max-w-none",
    "max-w-xs",
    "max-w-sm",
    "max-w-md",
    "max-w-lg",
    "max-w-xl",
    "max-w-full",
  ],
  defaultValue: "max-w-md",
  buildMarkup: (value: string) => `
<div class="border p-2">
  <div class="${value} bg-blue-600 text-white p-2 rounded">
    Max-width box
  </div>
</div>`.trim(),
  renderPreview: (value: string) => (
    <div className="border border-border rounded p-2 bg-slate-900">
      <div
        className={`${value} bg-blue-600 text-white p-2 rounded`}
      >
        {value}
      </div>
    </div>
  ),
};


/* -----------------------------------------
   REAL-WORLD EXAMPLES
------------------------------------------ */
export interface MaxWidthExample {
  title: string;
  description: string;
  code: string;
  preview: ReactNode;
}

export const MAX_WIDTH_EXAMPLES: MaxWidthExample[] = [
  {
    title: "Centered content container",
    description:
      "Using max-width with auto margins keeps content centered and readable on large screens.",
    code: `<div class="max-w-3xl mx-auto p-4 bg-slate-700 text-white rounded">
  This content stays centered and does not stretch too wide.
</div>`,
    preview: (
      <div className="max-w-3xl mx-auto p-4 bg-slate-700 text-white rounded">
        This content stays centered and does not stretch too wide.
      </div>
    ),
  },

  {
    title: "Readable article layout",
    description:
      "Constraining article width improves reading comfort by limiting line length.",
    code: `<article class="max-w-prose mx-auto text-white">
  <h2 class="text-xl font-bold mb-2">Article Title</h2>
  <p>
    Long-form text is easier to read when line length is controlled.
  </p>
</article>`,
    preview: (
      <article className="max-w-prose mx-auto text-white">
        <h2 className="text-xl font-bold mb-2">Article Title</h2>
        <p>
          Long-form text is easier to read when line length is controlled.
        </p>
      </article>
    ),
  },

  {
    title: "Prevent oversized cards",
    description:
      "Max-width prevents cards from stretching too much in wide layouts.",
    code: `<div class="flex justify-center">
  <div class="max-w-sm p-4 bg-indigo-600 text-white rounded">
    Card content stays compact
  </div>
</div>`,
    preview: (
      <div className="flex justify-center">
        <div className="max-w-sm p-4 bg-indigo-600 text-white rounded">
          Card content stays compact
        </div>
      </div>
    ),
  },
];
