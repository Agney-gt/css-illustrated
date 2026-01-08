"use client";

import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { RealWorldExamples } from "@/components/shared/real-world-examples";
import CodeBlock from "@/app/utilities/components/code-block";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function DivideWidthPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
      <PageHero
        title="Divide Width Utilities"
        description="Control borders between child elements with divide utilities. Create visual separation between list items, menu options, or any series of elements without adding individual border classes to each child."
      />

      <MentalModelSection
        title="Understanding Divide Architecture"
        description="Divide utilities apply borders between child elements using CSS combinator selectors. This creates consistent separation patterns while keeping HTML clean and maintainable."
        features={[
          "Borders are applied to child elements, not the parent container",
          "Uses CSS :not(:first-child) and :not(:last-child) selectors",
          "Works with flexbox, grid, and standard block layouts",
          "Responsive variants adapt to different screen sizes",
          "Combines with color and style utilities for complete control",
        ]}
        layerAssignment="Divide Layer - Creates visual boundaries between sibling elements"
        browserBehavior="Browser applies borders to all child elements except the first, creating consistent separation"
      />

      <ComparisonTable
        title="Divide Width Properties Comparison"
        columns={["Utility", "Border Width", "Direction", "Common Use Cases"]}
        rows={[
          {
            feature: "divide-x / divide-y",
            values: [
              "1px default",
              "Vertical/Horizontal",
              "Basic separation",
              "Lists, menus",
            ],
          },
          {
            feature: "divide-x-0 / divide-y-0",
            values: [
              "0px",
              "No border",
              "Remove dividers",
              "Conditional layouts",
            ],
          },
          {
            feature: "divide-y-2 / divide-y-4",
            values: [
              "2px / 4px",
              "Horizontal",
              "Strong separation",
              "Sections, headers",
            ],
          },
          {
            feature: "divide-x-reverse / divide-y-reverse",
            values: [
              "1px",
              "Reversed",
              "Right/Top edges",
              "RTL support, special layouts",
            ],
          },
        ]}
      />

      <UtilityGrid
        title="Divide Width Utilities Overview"
        items={[
          { cls: "divide-x", desc: "1px vertical dividers" },
          { cls: "divide-y", desc: "1px horizontal dividers" },
          { cls: "divide-x-0", desc: "No vertical dividers" },
          { cls: "divide-y-0", desc: "No horizontal dividers" },
          { cls: "divide-y-2", desc: "2px horizontal dividers" },
          { cls: "divide-y-4", desc: "4px horizontal dividers" },
          { cls: "divide-y-8", desc: "8px horizontal dividers" },
          { cls: "divide-x-reverse", desc: "Reverse vertical dividers" },
          { cls: "divide-y-reverse", desc: "Reverse horizontal dividers" },
        ]}
      />

      <UtilityPlayground
        title="Divide Width Playground"
        description="Experiment with different divide widths and directions to see how they affect layout and visual separation."
        options={[
          "divide-x",
          "divide-y",
          "divide-y-2",
          "divide-y-4",
          "divide-x-reverse",
          "divide-y-reverse",
        ]}
        defaultValue="divide-y"
        buildMarkup={(divideClass, color = "divide-gray-300") => {
          const classes = `${divideClass} ${color}`.trim();
          return `<div class="${classes}">
  <div class="p-4">Item 1</div>
  <div class="p-4">Item 2</div>
  <div class="p-4">Item 3</div>
</div>`;
        }}
        renderPreview={(divideClass, color = "divide-gray-300") => {
          const classes = `${divideClass} ${color}`.trim();
          return (
            <div className={classes}>
              <div className="p-3 bg-slate-700 text-white">Item 1</div>
              <div className="p-3 bg-slate-700 text-white">Item 2</div>
              <div className="p-3 bg-slate-700 text-white">Item 3</div>
            </div>
          );
        }}
      />

      <InteractiveChallenge
        title="The Smart Separator"
        description="You created a list of notification settings. You need thin lines to separate the options, but you strictly DON'T want a line at the very top or very bottom of the list. The `divide-y` utility is smart enough to add borders only between sibling elements."
        codeSnippet={`<div class="bg-white rounded-lg shadow-sm border border-slate-200">
  <h3 class="p-4 font-bold bg-slate-50 border-b">Settings</h3>
  
  <div class="flex flex-col {input} divide-slate-200">
    <label class="p-4 flex gap-3">
      <input type="checkbox" checked /> Email Notifications
    </label>
    <label class="p-4 flex gap-3">
      <input type="checkbox" /> SMS Alerts
    </label>
    <label class="p-4 flex gap-3">
      <input type="checkbox" checked /> Weekly Digest
    </label>
  </div>
</div>`}
        options={["border", "divide-y", "divide-x", "outline"]}
        correctOption="divide-y"
        renderPreview={(userClass) => (
          <div className="w-full max-w-sm p-4 bg-slate-100 dark:bg-slate-950 rounded-xl">
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-300 dark:border-slate-700 overflow-hidden">
              <h3 className="px-4 py-3 font-bold bg-slate-50 dark:bg-slate-800 border-b border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm">
                Notifications
              </h3>

              {/* The Target Container */}
              <div
                className={`flex flex-col ${userClass} ${
                  userClass === "divide-y"
                    ? "divide-slate-200 dark:divide-slate-700"
                    : "border-slate-200 dark:border-slate-700"
                }`}
              >
                <div className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="w-4 h-4 rounded border border-blue-500 bg-blue-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Email Notifications
                  </span>
                </div>

                <div className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="w-4 h-4 rounded border border-slate-300 dark:border-slate-600"></div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    SMS Alerts
                  </span>
                </div>

                <div className="p-4 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className="w-4 h-4 rounded border border-blue-500 bg-blue-500 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Weekly Digest
                  </span>
                </div>
              </div>
            </div>

            {/* Feedback Area */}
            <div className="mt-6 h-12 flex items-center justify-center text-sm">
              {userClass === "divide-y" && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 animate-in fade-in slide-in-from-bottom-2">
                  <span className="text-lg">✨</span>
                  <span className="font-medium">
                    Perfect! Dividers only between items.
                  </span>
                </div>
              )}
              {userClass === "border" && (
                <div className="flex flex-col items-center text-amber-600 dark:text-amber-400 animate-in fade-in zoom-in-95">
                  <span className="font-medium">
                    That adds a box around the whole list!
                  </span>
                  <span className="text-xs opacity-80">
                    We want lines *between* items.
                  </span>
                </div>
              )}
              {userClass === "divide-x" && (
                <div className="text-slate-400">
                  Wrong direction! That's for horizontal lists.
                </div>
              )}
              {(userClass === "outline" || !userClass) && (
                <div className="text-slate-400 italic">
                  Choose an option to see the effect...
                </div>
              )}
            </div>
          </div>
        )}
      />

      <ExampleSection title="Real-World Examples">
        <ExampleCard
          title="Navigation Menu"
          description="Vertical menu with horizontal dividers between items"
          code={`<nav class="divide-y divide-gray-200">
  <a href="#" class="block px-4 py-2 hover:bg-gray-50">Home</a>
  <a href="#" class="block px-4 py-2 hover:bg-gray-50">About</a>
  <a href="#" class="block px-4 py-2 hover:bg-gray-50">Services</a>
</nav>`}
        >
          <nav className="divide-y divide-gray-300 w-48">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-white"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-white"
            >
              Services
            </a>
          </nav>
        </ExampleCard>

        <ExampleCard
          title="List with Strong Separation"
          description="List items with thicker dividers for clear visual hierarchy"
          code={`<div class="divide-y-4 divide-blue-200">
  <div class="p-6">Section 1 content</div>
  <div class="p-6">Section 2 content</div>
  <div class="p-6">Section 3 content</div>
</div>`}
        >
          <div className="divide-y-4 divide-blue-300 w-64">
            <div className="p-4 bg-slate-700 text-white">Section 1 content</div>
            <div className="p-4 bg-slate-700 text-white">Section 2 content</div>
            <div className="p-4 bg-slate-700 text-white">Section 3 content</div>
          </div>
        </ExampleCard>

        <ExampleCard
          title="Horizontal Menu with Vertical Dividers"
          description="Navigation with vertical separators between menu items"
          code={`<div class="flex divide-x divide-gray-300">
  <span class="px-4">Home</span>
  <span class="px-4">Products</span>
  <span class="px-4">About</span>
  <span class="px-4">Contact</span>
</div>`}
        >
          <div className="flex divide-x divide-gray-300">
            <span className="px-4 text-white">Home</span>
            <span className="px-4 text-white">Products</span>
            <span className="px-4 text-white">About</span>
            <span className="px-4 text-white">Contact</span>
          </div>
        </ExampleCard>
      </ExampleSection>

      <CommonMistakesSection
        mistakes={[
          {
            title: "Forgetting to apply to parent container",
            reason:
              "Divide utilities only work when applied to the parent container, not individual children",
            example: `<div>\n  <div class="divide-y"> <!-- Wrong -->\n    <p>Item 1</p>\n    <p>Item 2</p>\n  </div>\n</div>\n\n<!-- Should be -->\n<div class="divide-y">\n  <p>Item 1</p>\n  <p>Item 2</p>\n</div>`,
            level: "critical",
          },
          {
            title: "Not combining with color utilities",
            reason:
              "Divide width alone uses default border color which may not be visible",
            example: `<div class="divide-y"> <!-- Invisible dividers -->\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>\n\n<!-- Should include color -->\n<div class="divide-y divide-gray-300">\n  <div>Item 1</div>\n  <div>Item 2</div>\n</div>`,
            level: "critical",
          },
          {
            title: "Using with single child element",
            reason:
              "Divide utilities need at least 2 child elements to show borders",
            example: `<div class="divide-y">\n  <div>Only one item</div>\n</div> <!-- No divider visible -->`,
          },
        ]}
      />

      <TipsSection
        tips={[
          {
            bold: "Responsive dividers:",
            text: "Use sm:divide-y-2 md:divide-y-4 for adaptive separation",
          },
          {
            bold: "Color combination:",
            text: "Always pair divide utilities with divide-* color classes",
          },
          {
            bold: "Style control:",
            text: "Add divide-dashed or divide-dotted for decorative separators",
          },
          {
            bold: "Reverse direction:",
            text: "Use divide-x-reverse for RTL languages or right-edge dividers",
          },
          {
            bold: "Conditional dividers:",
            text: "Use divide-x-0 to conditionally remove dividers at breakpoints",
          },
        ]}
      />
    </div>
  );
}
