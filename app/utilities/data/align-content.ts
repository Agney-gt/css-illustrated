// app/utilities/data/align-content.ts
import type { UtilityContent } from "./utilities";

export const alignContent: Record<string, UtilityContent> = {
  "align-content": {
    navigationGroup: "align",

    title: "Align Content",
    description:
      "When to reach for align-content utilities: When you have multi-line flex or grid containers and need to control how the lines themselves are positioned in the cross axis.",

    mentalModelFeatures: [
      "Only works with flex-wrap or grid with multiple rows",
      "Distributes space between lines, not items",
      "Acts on cross axis (opposite of flex-direction)",
      "Requires container height to create extra space",
    ],

    layerAssignment:
      "Layout layer - controls positioning and space distribution of content lines within container",

    comparisonTable: {
      title: "Content Alignment Behavior Comparison",
      columns: ["Utility", "When It Works", "What It Does"],
      rows: [
        {
          feature: "content-start/content-end",
          values: ["Multi-line flex/grid", "Pushes lines to start/end of cross axis"],
        },
        {
          feature: "content-center",
          values: ["Multi-line flex/grid", "Centers lines in cross axis"],
        },
        {
          feature: "content-between/content-around",
          values: ["Multi-line flex/grid", "Distributes space between/around lines"],
        },
        {
          feature: "content-evenly",
          values: ["Multi-line flex/grid", "Equal spacing around and between lines"],
        },
      ],
    },

    types: ["content-start", "content-center", "content-end", "content-between", "content-around", "content-evenly"],

    diagrams: {
      "content-start": {
        title: "Lines aligned to start",
        description: "Lines are pushed to the start of the cross axis",
        classes: "flex flex-wrap gap-2 h-32 content-start bg-slate-800 rounded p-2",
      },
      "content-center": {
        title: "Lines centered",
        description: "Lines are centered along the cross axis",
        classes: "flex flex-wrap gap-2 h-32 content-center bg-slate-800 rounded p-2",
      },
      "content-end": {
        title: "Lines aligned to end",
        description: "Lines are pushed to the end of the cross axis",
        classes: "flex flex-wrap gap-2 h-32 content-end bg-slate-800 rounded p-2",
      },
      "content-between": {
        title: "Lines spaced between",
        description: "Lines are distributed evenly with space between",
        classes: "flex flex-wrap gap-2 h-32 content-between bg-slate-800 rounded p-2",
      },
      "content-around": {
        title: "Lines spaced around",
        description: "Lines are distributed evenly with space around",
        classes: "flex flex-wrap gap-2 h-32 content-around bg-slate-800 rounded p-2",
      },
      "content-evenly": {
        title: "Lines spaced evenly",
        description: "Lines have equal spacing between and around them",
        classes: "flex flex-wrap gap-2 h-32 content-evenly bg-slate-800 rounded p-2",
      },
    },

    benefits: {
      "content-start": ["Align multiple lines to the start of the container", "Creates predictable layout starting point"],
      "content-center": ["Centers multiple lines for balanced layouts", "Good for symmetrical design"],
      "content-end": ["Align multiple lines to the end of the container", "Useful for bottom-aligned layouts"],
      "content-between": ["Even spacing between lines", "Distributes wrapped lines evenly"],
      "content-around": ["Even spacing around lines", "Adds space at top and bottom of container"],
      "content-evenly": ["Equal spacing between and around lines", "Perfect for uniform multi-line layout"],
    },

    commonUseCases: {
      "content-start": ["Multi-line flex containers", "Multi-row grids needing top alignment"],
      "content-center": ["Multi-line flex containers", "Center-aligned grids"],
      "content-end": ["Multi-line flex containers", "Bottom-aligned grids"],
      "content-between": ["Distribution of wrapped lines across container height"],
      "content-around": ["Distribution with padding around lines"],
      "content-evenly": ["Uniform line spacing in multi-line layouts"],
    },

    examples: {
      "content-start": [
        {
          title: "Start Aligned Lines",
          note: "Flex items wrap and align to the start of the cross axis",
          code: `<div class="flex flex-wrap gap-2 h-32 content-start">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 1</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 2</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 3</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 4</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 5</div>
</div>`,
          demoItems: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        },
      ],
      "content-center": [
        {
          title: "Center Aligned Lines",
          note: "Flex items wrap and center along cross axis",
          code: `<div class="flex flex-wrap gap-2 h-32 content-center">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 1</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 2</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 3</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 4</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 5</div>
</div>`,
          demoItems: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        },
      ],
      "content-end": [
        {
          title: "End Aligned Lines",
          note: "Flex items wrap and align to the end of the cross axis",
          code: `<div class="flex flex-wrap gap-2 h-32 content-end">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 1</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 2</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 3</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 4</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 5</div>
</div>`,
          demoItems: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        },
      ],
      "content-between": [
        {
          title: "Lines Spaced Between",
          note: "Flex items wrap with space distributed between lines",
          code: `<div class="flex flex-wrap gap-2 h-32 content-between">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 1</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 2</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 3</div>
</div>`,
          demoItems: ["Item 1", "Item 2", "Item 3"],
        },
      ],
      "content-around": [
        {
          title: "Lines Spaced Around",
          note: "Flex items wrap with space around each line",
          code: `<div class="flex flex-wrap gap-2 h-32 content-around">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 1</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 2</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 3</div>
</div>`,
          demoItems: ["Item 1", "Item 2", "Item 3"],
        },
      ],
      "content-evenly": [
        {
          title: "Lines Spaced Evenly",
          note: "Flex items wrap with equal space between and around lines",
          code: `<div class="flex flex-wrap gap-2 h-32 content-evenly">
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 1</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 2</div>
  <div class="bg-slate-600 text-white px-3 py-2 rounded">Item 3</div>
</div>`,
          demoItems: ["Item 1", "Item 2", "Item 3"],
        },
      ],
    },

    commonMistakes: {
      "content-start": [
        {
          title: "Using align-content on single-line containers",
          reason: "Align content only works when items wrap to multiple lines. Single line containers have no lines to align.",
          example: `<div class="flex content-center"> // Does nothing
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
          level: "critical",
        },
        {
          title: "Forgetting flex-wrap or grid with multiple rows",
          reason: "Without wrapping or multiple rows, there's only one line of content to position.",
          example: `<div class="flex content-between"> // No effect
  <div>Item 1</div>
  <div>Item 2</div>
</div>`,
          level: "warning",
        },
      ],
    },

    additionalSections: [],
  },
};
