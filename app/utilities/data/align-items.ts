// app/utilities/data/align-items.ts
import type { UtilityContent } from "./utilities";

export const alignItems: Record<string, UtilityContent> = {
  "align-items": {
    navigationGroup: "align",

    title: "Align Items",
    description:
      "When to reach for align-items utilities: When you need to control how individual flex or grid items are aligned along the cross axis within a single line or row.",

    mentalModelFeatures: [
      "Works on a single line or row of items",
      "Aligns items themselves, not lines",
      "Acts on the cross axis (opposite of flex-direction)",
      "Does not require wrapping to have effect",
    ],

    layerAssignment:
      "Layout layer - controls cross-axis alignment of items inside a container",

    comparisonTable: {
      title: "Item Alignment Behavior Comparison",
      columns: ["Utility", "When It Works", "What It Does"],
      rows: [
        {
          feature: "items-start/items-end",
          values: ["Flex or grid container", "Aligns items to start/end of cross axis"],
        },
        {
          feature: "items-center",
          values: ["Flex or grid container", "Centers items in cross axis"],
        },
        {
          feature: "items-baseline",
          values: ["Flex container", "Aligns items based on text baseline"],
        },
        {
          feature: "items-stretch",
          values: ["Flex or grid container", "Stretches items to fill cross axis"],
        },
      ],
    },

    types: [
      "items-start",
      "items-center",
      "items-end",
      "items-baseline",
      "items-stretch",
    ],

    diagrams: {
      "items-start": {
        title: "Items aligned to start",
        description: "Items are aligned to the start of the cross axis",
        classes: "flex items-start h-24 bg-slate-800 rounded p-2 gap-2",
      },
      "items-center": {
        title: "Items centered",
        description: "Items are centered along the cross axis",
        classes: "flex items-center h-24 bg-slate-800 rounded p-2 gap-2",
      },
      "items-end": {
        title: "Items aligned to end",
        description: "Items are aligned to the end of the cross axis",
        classes: "flex items-end h-24 bg-slate-800 rounded p-2 gap-2",
      },
      "items-baseline": {
        title: "Items aligned by baseline",
        description: "Items align based on text baseline",
        classes: "flex items-baseline h-24 bg-slate-800 rounded p-2 gap-2",
      },
      "items-stretch": {
        title: "Items stretched",
        description: "Items stretch to fill the container height",
        classes: "flex items-stretch h-24 bg-slate-800 rounded p-2 gap-2",
      },
    },

    benefits: {
      "items-start": ["Aligns items consistently at the top", "Useful for predictable layouts"],
      "items-center": ["Creates visually balanced layouts", "Common for UI components and cards"],
      "items-end": ["Aligns items at the bottom", "Helpful for footer or baseline layouts"],
      "items-baseline": ["Aligns text naturally across items", "Ideal for typography-heavy rows"],
      "items-stretch": ["Fills available vertical space", "Good for equal-height layouts"],
    },

    commonUseCases: {
      "items-start": ["Top-aligned navigation bars", "Header layouts"],
      "items-center": ["Buttons with icons", "Card layouts"],
      "items-end": ["Bottom-aligned controls", "Footer toolbars"],
      "items-baseline": ["Text with different font sizes", "Form labels and inputs"],
      "items-stretch": ["Equal-height columns", "Dashboard layouts"],
    },

    examples: {
      "items-start": [
        {
          title: "Start Aligned Items",
          note: "Items align to the start of the cross axis",
          code: `<div class="flex items-start h-24 gap-2">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item A</div>
  <div class="bg-slate-600 text-white px-3 py-4 rounded">Item B</div>
  <div class="bg-slate-600 text-white px-3 py-6 rounded">Item C</div>
</div>`,
          demoItems: ["Item A", "Item B", "Item C"],
        },
      ],
      "items-center": [
        {
          title: "Centered Items",
          note: "Items are centered along the cross axis",
          code: `<div class="flex items-center h-24 gap-2">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item A</div>
  <div class="bg-slate-600 text-white px-3 py-4 rounded">Item B</div>
  <div class="bg-slate-600 text-white px-3 py-6 rounded">Item C</div>
</div>`,
          demoItems: ["Item A", "Item B", "Item C"],
        },
      ],
      "items-end": [
        {
          title: "End Aligned Items",
          note: "Items align to the end of the cross axis",
          code: `<div class="flex items-end h-24 gap-2">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item A</div>
  <div class="bg-slate-600 text-white px-3 py-4 rounded">Item B</div>
  <div class="bg-slate-600 text-white px-3 py-6 rounded">Item C</div>
</div>`,
          demoItems: ["Item A", "Item B", "Item C"],
        },
      ],
      "items-baseline": [
        {
          title: "Baseline Aligned Items",
          note: "Items align based on text baseline",
          code: `<div class="flex items-baseline h-24 gap-2">
  <div class="bg-slate-600 text-white text-sm px-3 py-2 rounded">Small</div>
  <div class="bg-slate-600 text-white text-base px-3 py-2 rounded">Medium</div>
  <div class="bg-slate-600 text-white text-xl px-3 py-2 rounded">Large</div>
</div>`,
          demoItems: ["Small", "Medium", "Large"],
        },
      ],
      "items-stretch": [
        {
          title: "Stretched Items",
          note: "Items stretch to fill the container height",
          code: `<div class="flex items-stretch h-24 gap-2">
  <div class="bg-slate-600 text-white px-3 rounded">Item A</div>
  <div class="bg-slate-600 text-white px-3 rounded">Item B</div>
  <div class="bg-slate-600 text-white px-3 rounded">Item C</div>
</div>`,
          demoItems: ["Item A", "Item B", "Item C"],
        },
      ],
    },

    commonMistakes: {
      "items-center": [
        {
          title: "Confusing align-items with justify-content",
          reason: "Align-items works on the cross axis, while justify-content works on the main axis.",
          example: `<div class="flex items-center"> // Vertical alignment, not horizontal
  <div>Item</div>
</div>`,
          level: "warning",
        },
      ],
      "items-baseline": [
        {
          title: "Using baseline without text",
          reason: "Baseline alignment only makes sense when items contain text.",
          example: `<div class="flex items-baseline">
  <div class="h-8 w-8 bg-slate-600"></div>
  <div class="h-12 w-12 bg-slate-600"></div>
</div>`,
          level: "info",
        },
      ],
    },

    additionalSections: [
      {
        title: "✅ Do’s",
        content: {
          "items-start": [
            "Use `items-start` for top alignment in single-line flex/grid containers.",
            "Apply it in headers, nav bars, or any UI where consistent top alignment is needed.",
            "Use when items have varying heights to maintain order.",
            "Ideal for multi-row single-line layouts where cross-axis alignment matters.",
            "Helps make layouts predictable across devices and screen sizes."
          ],
          "items-center": [
            "Use `items-center` to vertically center items in a container.",
            "Ideal for cards, buttons, and modals where visual balance is important.",
            "Use with items of varying heights to align them centrally.",
            "Works well with responsive layouts.",
            "Ensures a neat, balanced appearance in UI components."
          ],
          "items-end": [
            "Use `items-end` to align items to the bottom of a container.",
            "Useful for footers, bottom-aligned toolbars, and consistent vertical spacing.",
            "Works with items of variable heights.",
            "Maintains uniform bottom alignment across multiple items.",
            "Helps in stacked or layered layouts where bottom alignment is needed."
          ],
          "items-baseline": [
            "Use `items-baseline` for aligning text-heavy items.",
            "Great when items have different font sizes.",
            "Ensures text lines up neatly across items.",
            "Useful in forms, labels, and typography-focused layouts.",
            "Maintains readability and a professional appearance."
          ],
          "items-stretch": [
            "Use `items-stretch` to make items fill the cross-axis of the container.",
            "Great for equal-height cards, columns, and grids.",
            "Simplifies dashboard and layout consistency.",
            "Ensures uniform vertical spacing in complex layouts.",
            "Ideal for visual consistency in UI components."
          ],
        },
      },
      {
        title: "❌ Don’ts",
        content: {
          "items-start": [
            "Don’t use to center items vertically.",
            "Avoid for baseline-dependent text alignment.",
            "Not suitable for bottom-aligned controls or toolbars.",
            "Doesn’t affect spacing along the main axis.",
            "Unnecessary for single-item containers."
          ],
          "items-center": [
            "Don’t expect horizontal centering (use `justify-center` instead).",
            "Not effective without flex or grid container.",
            "Avoid using on multi-line wrapping unless intended.",
            "Not suitable for baseline alignment of text.",
            "Not recommended when precise top/bottom alignment is needed."
          ],
          "items-end": [
            "Don’t use for top alignment scenarios.",
            "Avoid for vertical centering.",
            "Not suitable for baseline-aligned text.",
            "Doesn’t control spacing along the main axis.",
            "Ineffective for single-item containers."
          ],
          "items-baseline": [
            "Don’t use with non-text elements.",
            "Avoid for general vertical centering.",
            "Not suitable for multi-line flex containers unless needed.",
            "Doesn’t stretch items to fill container height.",
            "Unnecessary for single-item layouts."
          ],
          "items-stretch": [
            "Don’t use if intrinsic height is required.",
            "Avoid when top/bottom alignment is important.",
            "Not for vertical centering purposes.",
            "Doesn’t affect main-axis spacing.",
            "Unnecessary for single-item containers."
          ],
        },
      },
    ],
  },
};
