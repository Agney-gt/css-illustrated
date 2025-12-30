import type { UtilityContent } from "./utilities";

export const alignSelfUtilities: Record<string, UtilityContent> = {
  "align-self": {
    navigationGroup: "align",

    title: "Align Self",
    description:
      "align-self allows individual flex/grid items to override the container's align-items setting and control their own alignment on the cross axis.",

    mentalModelFeatures: [
      "Works on individual flex and grid items (not containers)",
      "Overrides the container's align-items value",
      "Cross axis is vertical in flex-row, horizontal in flex-column",
      "Default value is 'auto' which inherits from container",
    ],

    layerAssignment: "Applied to child items, overrides container alignment",

    comparisonTable: {
      title: "Alignment Properties Comparison",
      columns: ["Property", "Applied To", "Scope", "Axis", "Use Case"],
      rows: [
        {
          feature: "align-items",
          values: ["Container", "All items", "Cross axis", "Vertical in flex-row", "Set default alignment"],
        },
        {
          feature: "align-self",
          values: ["Individual item", "Single item", "Cross axis", "Vertical in flex-row", "Override container"],
        },
        {
          feature: "justify-content",
          values: ["Container", "All items", "Main axis", "Horizontal in flex-row", "Distribute space"],
        },
        {
          feature: "justify-self",
          values: ["Individual item", "Single item", "Main/Inline axis", "Grid only", "Grid item positioning"],
        },
      ],
    },

    types: ["self-auto", "self-start", "self-center", "self-end", "self-stretch"],

    diagrams: {
      "self-auto": {
        title: "Default alignment",
        description: "Item follows container's align-items value",
        classes: "flex h-48 self-auto gap-4 bg-slate-800 rounded p-2",
      },
      "self-start": {
        title: "Top aligned item",
        description: "Item aligned to start of cross axis",
        classes: "flex h-48 self-start gap-4 bg-slate-800 rounded p-2",
      },
      "self-center": {
        title: "Center aligned item",
        description: "Item vertically centered",
        classes: "flex h-48 self-center gap-4 bg-slate-800 rounded p-2",
      },
      "self-end": {
        title: "End aligned item",
        description: "Item aligned to end of cross axis",
        classes: "flex h-48 self-end gap-4 bg-slate-800 rounded p-2",
      },
      "self-stretch": {
        title: "Stretched item",
        description: "Item stretches to fill cross axis",
        classes: "flex h-48 self-stretch gap-4 bg-slate-800 rounded p-2",
      },
    },

    benefits: {
      "self-auto": ["Follows container alignment", "Default for items"],
      "self-start": ["Top-align specific items", "Useful in card layouts"],
      "self-center": ["Vertically center items", "Useful in navigation or buttons"],
      "self-end": ["Bottom-align items", "Great for action buttons"],
      "self-stretch": ["Fill available cross-axis space", "Useful for equal height layouts"],
    },

    commonUseCases: {
      "self-auto": ["Default alignment for most items"],
      "self-start": ["Top-align buttons", "Cards with header at top"],
      "self-center": ["Centering icons or logos", "Vertically center menu items"],
      "self-end": ["Stick buttons or actions to bottom", "Align last item in list"],
      "self-stretch": ["Make items same height", "Fill available cross-axis space"],
    },

    examples: {
      "self-auto": [
        {
          title: "Default Behavior",
          note: "Item inherits container alignment",
          code: `<div class="flex h-32 gap-4">
  <div class="self-auto bg-blue-500 p-4 rounded">Auto</div>
  <div class="self-auto bg-green-500 p-4 rounded">Auto</div>
</div>`,
        },
      ],
      "self-center": [
        {
          title: "Center Item",
          note: "Item vertically centered",
          code: `<div class="flex h-32 gap-4">
  <div class="self-center bg-green-500 p-4 rounded">Center</div>
</div>`,
        },
      ],
      "self-end": [
        {
          title: "End Item",
          note: "Item aligned to bottom",
          code: `<div class="flex h-32 gap-4">
  <div class="self-end bg-orange-500 p-4 rounded">End</div>
</div>`,
        },
      ],
    },

    commonMistakes: {
      "self-auto": [
        {
          title: "Using align-self on container",
          reason: "align-self only works on individual items",
          example: `<div class="flex self-center">❌ Won't work</div>`,
          level: "critical",
        },
        {
          title: "Not having a flex/grid container",
          reason: "align-self only works inside flex or grid containers",
          example: `<div class="self-center">❌ No container</div>`,
          level: "critical",
        },
        {
          title: "Forgetting height on flex container",
          reason: "Without height, self-alignment has no space to work",
          example: `<div class="flex h-0">❌ No height</div>`,
          level: "warning",
        },
        {
          title: "Using self-auto without understanding",
          reason: "self-auto means item follows container's align-items",
          example: `<div class="self-auto">✅ Follows container</div>`,
          level: "info",
        },
      ],
    },

    additionalSections: [
      {
        title: "Tips",
        content: {
          "self-auto": [
            "Use self-auto to inherit container alignment",
            "Combine with gap for spacing consistency",
          ],
          "self-start": ["Use in combination with flex container height", "Overrides container alignment"],
          "self-center": ["Good for navigation bars and cards", "Works in both flex and grid"],
          "self-end": ["Stick footer buttons to bottom", "Overrides align-items setting"],
          "self-stretch": ["Make columns same height", "Useful in dashboard layouts"],
        },
      },
    ],

    codeSnippet: `<div class="flex h-32 gap-4">
  <div class="self-auto bg-blue-500 p-4 rounded">Auto</div>
  <div class="self-center bg-green-500 p-4 rounded">Center</div>
  <div class="self-end bg-orange-500 p-4 rounded">End</div>
</div>`,
  },
};
