// app/utilities/data/utilities.ts

export type UtilityTypeKey = string;

export interface UtilityContent {
  title: string;
  description: string;
  mentalModelFeatures: string[];
  layerAssignment: string;

  comparisonTable?: {
    title: string;
    columns: string[];
    rows: {
      feature: string;
      values: string[];
    }[];
  };

  types: UtilityTypeKey[];

  diagrams: Record<
    UtilityTypeKey,
    {
      title: string;
      description: string;
      classes: string;
    }
  >;

  benefits?: Record<UtilityTypeKey, string[]>;
  commonUseCases?: Record<UtilityTypeKey, string[]>;
  additionalSections?: {
    title: string;
    content: Record<UtilityTypeKey, string[]>;
  }[];

  examples?: Record<
    UtilityTypeKey,
    {
      title: string;
      note: string;
      code: string;
    }[]
  >;

  commonMistakes?: Record<
    UtilityTypeKey,
    {
      title: string;
      reason: string;
      example: string;
      level: "info" | "warning" | "critical";
    }[]
  >;
}

export const utilitiesContent: Record<string, UtilityContent> = {
  "screen-readers": {
    title: "How Assistive Technology Works",
    description: "Screen readers read the DOM tree",

    mentalModelFeatures: [
      "Element types (button, heading, link)",
      "Text content (including sr-only)",
      "ARIA attributes and roles",
      "Form labels and descriptions",
    ],

    layerAssignment:
      "Screen reader utilities belong to the Content layer - they control what information assistive technology can access without affecting visual layout or shape.",

    comparisonTable: {
      title: "Quick Comparison: sr-only vs not-sr-only",
      columns: ["Feature", "sr-only", "not-sr-only"],
      rows: [
        {
          feature: "Visibility",
          values: [
            "Hidden visually, readable by screen readers",
            "Visible to all users",
          ],
        },
        {
          feature: "Use Cases",
          values: [
            "Hidden labels, instructions, live updates",
            "Alerts, navigation, visible content",
          ],
        },
        {
          feature: "Accessibility",
          values: [
            "Improves screen reader UX",
            "Works for all users",
          ],
        },
      ],
    },

    types: ["sr-only", "not-sr-only"],

    diagrams: {
      "sr-only": {
        title: "This content is visually hidden but accessible to screen readers",
        description: "Screen Reader Only Block",
        classes: "sr-only bg-blue-500 w-32 h-16 flex items-center justify-center",
      },
      "not-sr-only": {
        title: "This content is visible to all users",
        description: "Visible Block",
        classes:
          "bg-blue-500 w-32 h-16 flex items-center justify-center text-white font-semibold",
      },
    },

    benefits: {
      "sr-only": [
        "Helps comply with accessibility standards (WCAG)",
        "Improves UX for visually impaired users",
        "Maintains semantic HTML structure",
      ],
      "not-sr-only": [
        "Visible to all users",
        "Ensures clarity for non-visual users as well",
        "Works with sr-only for enhanced accessibility",
      ],
    },

    commonUseCases: {
      "sr-only": [
        "Use sr-only for labels, instructions, and dynamic updates",
        "Keep content accessible without affecting visual layout",
        "Combine with focus:not-sr-only for skip links",
      ],
      "not-sr-only": [
        "Use visible content for all users",
        "Display alerts, instructions, navigation links",
        "Combine with sr-only when needed for accessibility",
      ],
    },

    examples: {
      "sr-only": [
        {
          title: "Visually Hidden Label",
          note: "Use sr-only to hide a label visually but keep it readable for screen readers.",
          code: `<label class="sr-only" for="email">Email address</label>
<input id="email" type="email" placeholder="Enter your email" />`,
        },
        {
          title: "Screen Reader Only Text for Buttons",
          note: "Provide extra description for icons for screen readers.",
          code: `<button class="p-2 bg-blue-600 text-white rounded">
<svg class="w-5 h-5"><!-- icon --></svg>
<span class="sr-only">Submit Form</span>
</button>`,
        },
        {
          title: "Live Region for Dynamic Updates",
          note: "Announce dynamic content changes via aria-live and sr-only.",
          code: `<div role="status" aria-live="polite" class="sr-only">
Form submitted successfully
</div>`,
        },
        {
          title: "Skip Link for Keyboard Users",
          note: "Provide a way to jump to main content for non-visual users.",
          code: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
<main id="main-content"> ... </main>`,
        },
        {
          title: "Hidden Instructions",
          note: "Provide guidance for screen reader users without affecting layout.",
          code: `<p class="sr-only">Use arrow keys to navigate the gallery</p>`,
        },
      ],
      "not-sr-only": [
        {
          title: "Visible Label Example",
          note: "Label is visible on the page for all users.",
          code: `<label for="email">Email address</label>
<input id="email" type="email" placeholder="Enter your email" />`,
        },
        {
          title: "Button with Text",
          note: "Button shows text for both visual users and screen readers.",
          code: `<button class="p-2 bg-blue-600 text-white rounded">Submit Form</button>`,
        },
        {
          title: "Visible Notifications",
          note: "Alerts that appear visually and for screen readers.",
          code: `<div role="alert" class="bg-green-100 text-green-800 p-2 rounded">
Form submitted successfully
</div>`,
        },
        {
          title: "Inline Instructions",
          note: "Instructions visible directly to all users.",
          code: `<p>Use arrow keys to navigate the gallery</p>`,
        },
        {
          title: "Navigation Links",
          note: "All navigation links visible for everyone.",
          code: `<nav>
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
</nav>`,
        },
      ],
    },

    commonMistakes: {
      "sr-only": [
        {
          title: "Forgetting focus:not-sr-only on skip links",
          reason: "Screen reader users can't see when the link becomes visible during keyboard navigation.",
          example: `<a class="sr-only">Skip to content</a> // Never visible when focused`,
          level: "critical",
        },
        {
          title: "Using sr-only for content that should be visible",
          reason: "You're hiding useful information from sighted users unnecessarily.",
          example: `<p class="sr-only">This form is required</p> // Why hide this warning?`,
          level: "warning",
        },
        {
          title: "Adding sr-only to decorative content",
          reason: "Assistive technology users don't need to hear about decorative elements.",
          example: `<div class="sr-only">Beautiful background pattern</div> // Use aria-hidden instead`,
          level: "info",
        },
      ],
      "not-sr-only": [
        {
          title: "Making content visible but forgetting accessibility labels",
          reason: "Visible inputs still need labels for accessibility.",
          example: `<input placeholder="Email" />`,
          level: "warning",
        },
      ],
    },

    additionalSections: [], // You can add any extra sections per page here dynamically
  },
};
