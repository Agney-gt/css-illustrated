"use client";

import { useState } from "react";
import CodeBlock from "@/app/utilities/components/code-block";
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
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function JustifySelfPage() {
  const justifySelfClasses = [
    "justify-self-auto",
    "justify-self-start",
    "justify-self-end",
    "justify-self-center",
    "justify-self-stretch",
  ];

  const [activeClass, setActiveClass] = useState(justifySelfClasses[0]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const CopyableCode = ({ code, index }: { code: string; index: number }) => (
    <div
      className="relative border border-border rounded-lg p-4 hover:bg-card/50 cursor-pointer group transition"
      onClick={() => copyToClipboard(code, index)}
    >
      {copiedIndex === index && (
        <div className="absolute top-2 left-2 px-2 py-0.5 text-xs text-white bg-green-600 rounded">
          Copied!
        </div>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-xs text-gray-700 bg-white rounded opacity-0 group-hover:opacity-100 transition">
        Click to copy
      </div>
      <CodeBlock code={code} language="html" />
    </div>
  );

  const explanations: Record<string, string> = {
    "justify-self-auto":
      "Default alignment; the item inherits alignment from the container.",
    "justify-self-start":
      "Aligns the item to the start of its grid cell (left in LTR).",
    "justify-self-end":
      "Aligns the item to the end of its grid cell (right in LTR).",
    "justify-self-center":
      "Centers the item horizontally within its grid cell.",
    "justify-self-stretch":
      "Stretches the item to fill the width of its grid cell.",
  };

  // Examples per class (using your provided data structure)
  const examplesData: Record<
    string,
    { title: string; note: string; code: string; visual: React.ReactNode }[]
  > = {
    "justify-self-auto": [
      {
        title: "Default Grid Behavior",
        note: "Grid items usually stretch to fill their column unless they have a specific width set.",
        code: `<div class="grid grid-cols-1 gap-4">
  <div class="bg-blue-100 p-2">Item 1</div>
  <div class="bg-blue-100 p-2">Item 2</div>
</div>`,
        visual: (
          <div className="grid grid-cols-1 gap-4 p-4 border border-border rounded-lg bg-slate-50 dark:bg-slate-900/50 w-full max-w-xs">
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-2 rounded text-center text-sm">
              Item 1 (Auto)
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 p-2 rounded text-center text-sm">
              Item 2 (Auto)
            </div>
          </div>
        ),
      },
    ],
    "justify-self-start": [
      {
        title: "Card Status Badge",
        note: "Use start alignment to position a badge on the left, even if the column is wide.",
        code: `<div class="grid gap-2 border p-4 w-64">
  <span class="justify-self-start bg-green-100 text-green-800 px-2 rounded">
    New
  </span>
  <h3 class="font-bold">Product Name</h3>
</div>`,
        visual: (
          <div className="grid gap-2 border border-border bg-white dark:bg-slate-950 p-4 rounded-lg w-full max-w-xs shadow-sm">
            <span className="justify-self-start bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
            <div className="h-16 bg-slate-100 dark:bg-slate-800 rounded"></div>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm">
              Ergonomic Chair
            </h3>
          </div>
        ),
      },
    ],
    "justify-self-end": [
      {
        title: "Modal Header",
        note: "Push the close button to the far right without using flexbox or floats.",
        code: `<div class="grid grid-cols-[1fr_auto] items-center border-b p-4">
  <h2 class="font-bold">Edit Settings</h2>
  <button class="justify-self-end text-gray-500">✕</button>
</div>`,
        visual: (
          <div className="w-full max-w-sm border border-border rounded-lg bg-white dark:bg-slate-950 shadow-sm overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] items-center p-3 border-b border-border bg-slate-50 dark:bg-slate-900">
              <h2 className="font-bold text-sm">Edit Settings</h2>
              <button className="justify-self-end text-slate-400 hover:text-slate-600 w-6 h-6 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-800 transition">
                ✕
              </button>
            </div>
            <div className="p-4 h-16 bg-white dark:bg-slate-950"></div>
          </div>
        ),
      },
      {
        title: "Pricing Row",
        note: "Keep the price tag aligned to the end of the row.",
        code: `<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center p-2 border">
  <img src="..." class="w-8 h-8 rounded" />
  <span>Pro Plan</span>
  <span class="justify-self-end font-bold">$29</span>
</div>`,
        visual: (
          <div className="grid grid-cols-[auto_1fr_auto] gap-3 items-center p-3 border border-border rounded bg-white dark:bg-slate-900 shadow-sm w-full max-w-sm">
            <div className="w-8 h-8 rounded bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600">
              ★
            </div>
            <span className="font-medium text-sm">Pro Plan</span>
            <span className="justify-self-end font-bold text-slate-700 dark:text-slate-200">
              $29
            </span>
          </div>
        ),
      },
    ],
    "justify-self-center": [
      {
        title: "Centered Avatar",
        note: "Center an element horizontally relative to its grid area.",
        code: `<div class="grid w-32 border p-4">
  <div class="justify-self-center w-12 h-12 rounded-full bg-gray-200"></div>
  <span class="justify-self-center mt-2 text-xs">Admin</span>
</div>`,
        visual: (
          <div className="grid w-32 p-4 border border-border rounded bg-white dark:bg-slate-900 shadow-sm">
            <div className="justify-self-center w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xl">
              👨‍💻
            </div>
            <span className="justify-self-center mt-2 text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
              Admin
            </span>
          </div>
        ),
      },
    ],
    "justify-self-stretch": [
      {
        title: "Full-width Button",
        note: "Force a button to fill the entire grid cell width.",
        code: `<div class="grid p-4 border w-64">
  <p>Confirm action?</p>
  <button class="justify-self-stretch bg-red-500 text-white">
    Delete
  </button>
</div>`,
        visual: (
          <div className="grid gap-3 p-4 border border-border rounded bg-white dark:bg-slate-900 w-full max-w-xs shadow-sm">
            <p className="text-sm font-medium">Confirm deletion?</p>
            <button className="justify-self-stretch px-3 py-1.5 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition font-medium">
              Delete Everything
            </button>
          </div>
        ),
      },
    ],
  };

  const renderDiagram = (cls: string) => {
    const containerClasses = `grid grid-cols-3 h-32 border border-border rounded-lg p-4 gap-4 bg-slate-900 text-white items-center`;
    const blockBaseClass =
      "h-16 flex items-center justify-center font-semibold rounded";

    const getBlockClass = (index: number) => {
      const color = index === 0 ? "bg-blue-500" : "bg-blue-400";
      const width =
        cls === "justify-self-stretch" && index === 0 ? "w-full" : "w-16";
      const justifySelfClass = index === 0 ? cls : "justify-self-auto";
      return `${blockBaseClass} ${color} ${width} ${justifySelfClass}`;
    };

    return (
      <div className="border border-border rounded-lg p-6 bg-slate-900 text-white text-center">
        <p className="font-semibold mb-4">
          Visual representation of <code>{cls}</code>
        </p>
        <div className={containerClasses}>
          <div className={getBlockClass(0)}>1</div>
          <div className={getBlockClass(1)}>2</div>
          <div className={getBlockClass(2)}>3</div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Blue item uses <code>{cls}</code>; lighter items use <code>auto</code>{" "}
          for comparison.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
        {/* Hero Section */}
        <PageHero
          title="Justify Self"
          description="Control how an individual grid item is aligned along its inline axis (row axis). This overrides the `justify-items` property set on the parent grid container."
        />

        {/* Mental Model */}
        <MentalModelSection
          title="Understanding Justify Self"
          description="Justify Self allows a specific grid item to break the rules set by the parent. While `justify-items` on the parent sets the default for everyone, `justify-self` on the child lets that specific child align differently."
          features={[
            "Applies to INDIVIDUAL GRID ITEMS",
            "Overrides parent `justify-items` setting",
            "Controls alignment along the INLINE axis (horizontal)",
            "Does NOT work in Flexbox (use `margin-auto` tricks instead)",
            "Crucial for asymmetrical layouts where one item needs to stand out",
          ]}
          layerAssignment="Grid Item Alignment Layer - Individual horizontal positioning"
          browserBehavior="The browser checks for `justify-self` on the item first. If present, it uses that alignment. If not, it falls back to the parent's `justify-items` value."
        />

        {/* Comparison Table */}
        <ComparisonTable
          title="Justify Self Strategies"
          columns={["Class", "Alignment", "Best Use Case"]}
          rows={[
            {
              feature: "justify-self-start",
              values: ["Left (Start)", "Left-aligned icons, text labels"],
            },
            {
              feature: "justify-self-center",
              values: ["Center", "Centering an image in a wide cell"],
            },
            {
              feature: "justify-self-end",
              values: ["Right (End)", "Close buttons, 'See More' links"],
            },
            {
              feature: "justify-self-stretch",
              values: ["Full Width", "Banner images, Hero sections"],
            },
          ]}
        />

        {/* Utility Grid */}
        <UtilityGrid
          title="Justify Self Utilities"
          items={justifySelfClasses.map((cls) => ({
            cls,
            desc: explanations[cls],
          }))}
        />

        {/* Interactive Diagram Section */}
        <section className="space-y-6 border-t border-border pt-8">
          <h2 className="text-3xl font-bold">Interactive Playground</h2>
          <p className="text-muted-foreground">
            Select a class to see how it affects the alignment of the{" "}
            <strong>first item (blue)</strong> while others follow the container
            default.
          </p>

          <div className="flex gap-4 mb-6 flex-wrap">
            {justifySelfClasses.map((cls) => (
              <button
                key={cls}
                className={`px-4 py-2 rounded font-medium text-sm transition-colors border ${
                  activeClass === cls
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
                onClick={() => setActiveClass(cls)}
              >
                {cls}
              </button>
            ))}
          </div>

          {renderDiagram(activeClass)}
        </section>

        <InteractiveChallenge
          title="The Close Button"
          description="You have a modal header with a title and a close button. They are in a 2-column grid. The title is fine, but the close button is stuck on the left side of its column. Use `justify-self-end` on the button to push it to the far right corner."
          codeSnippet={`<div class="grid grid-cols-2 bg-white rounded-lg p-4 w-80 shadow-lg">
    <h2 class="font-bold text-lg">Settings</h2>
  
    <button class="{input} text-gray-500 hover:text-gray-700">
      ✕
    </button>
  </div>`}
          options={[
            "justify-self-start",
            "justify-self-center",
            "justify-self-stretch",
            "justify-self-end",
          ]}
          correctOption="justify-self-end"
          renderPreview={(userClass) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
              <div className="grid grid-cols-2 bg-white dark:bg-slate-900 rounded-xl p-6 w-80 shadow-xl border border-slate-200 dark:border-slate-800">
                <h2 className="font-bold text-lg text-slate-900 dark:text-white">
                  Settings
                </h2>

                <button
                  className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all
                      ${userClass}
                    `}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="col-span-2 mt-4 space-y-2">
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                  <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
                </div>
              </div>
            </div>
          )}
        />

        <ExampleSection title={`Real-World Examples: ${activeClass}`}>
          {(examplesData[activeClass] || []).map((ex, idx) => (
            <ExampleCard
              key={idx}
              title={ex.title}
              description={ex.note}
              code={ex.code}
            >
              {/* We pass the 'visual' node as children, just like in Gap Patterns */}
              {ex.visual}
            </ExampleCard>
          ))}
        </ExampleSection>

        {/* Common Mistakes */}
        <CommonMistakesSection
          mistakes={[
            {
              title: "Using on Flex Items",
              reason:
                "`justify-self` has NO effect on Flexbox children. Use `margin-left: auto` or `margin-right: auto` for similar behavior in Flexbox.",
              example: `<div class="flex">
  <div class="justify-self-end">Won't work</div> 
</div>`,
              level: "critical",
            },
            {
              title: "Using on Container",
              reason:
                "This property belongs on the CHILD item, not the parent container. Use `justify-items` on the parent instead.",
              example: `<div class="grid justify-self-center"> <div>Item</div>
</div>`,
              level: "warning",
            },
          ]}
        />

        {/* Tips */}
        <TipsSection
          tips={[
            {
              bold: "Flexbox Alternative:",
              text: "In Flexbox, `justify-self` doesn't exist. To push a single flex item to the end, use `ml-auto` (margin-left: auto).",
            },
            {
              bold: "Vertical Alignment:",
              text: "For vertical alignment (block axis), use `align-self` instead.",
            },
            {
              bold: "Responsive:",
              text: "Use responsive prefixes like `md:justify-self-end` to change alignment on larger screens (e.g., center on mobile, right on desktop).",
            },
          ]}
        />
      </div>
    </div>
  );
}
