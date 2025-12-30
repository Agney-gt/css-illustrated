"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { ExampleSection, ExampleCard } from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import CodeBlock from "../../components/code-block";

export default function JustifyContentPage() {
  const justifyClasses = [
    "justify-start",
    "justify-center",
    "justify-end",
    "justify-between",
    "justify-around",
    "justify-evenly",
  ];

  const [activeClass, setActiveClass] = useState(justifyClasses[0]);

  // Detailed explanations per class
  const explanations: Record<string, string> = {
    "justify-start": "Aligns items to the left side of the container. Useful when you want content to start from the beginning without spacing.",
    "justify-center": "Centers all items horizontally in the container. Ideal for creating balanced layouts where items are in the middle.",
    "justify-end": "Aligns items to the right side of the container. Perfect for placing buttons or elements at the end of a row.",
    "justify-between": "Distributes items evenly with space between them. Great for layouts where first and last items are at edges and others spread out.",
    "justify-around": "Distributes items with equal space around them, creating consistent spacing on both sides of each item.",
    "justify-evenly": "Distributes items so the spaces between them, as well as at the edges, are equal, giving a very uniform look.",
  };

  // Examples per class
  const examplesData: Record<string, { title: string; note: string; code: string }[]> = {
    "justify-start": [
      {
        title: "Basic Left Alignment",
        note: "Items start from the left edge of the container.",
        code: `<div class="flex justify-start space-x-2">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar Left Items",
        note: "Place navigation links starting from the left.",
        code: `<nav class="flex justify-start space-x-4">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Left-aligned Buttons",
        note: "Group of buttons aligned to the left.",
        code: `<div class="flex justify-start space-x-2">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>`,
      },
      {
        title: "Card Items",
        note: "Align card elements to the start of the container.",
        code: `<div class="flex justify-start space-x-4">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
</div>`,
      },
      {
        title: "Form Elements",
        note: "Left-aligned input fields and labels.",
        code: `<form class="flex flex-col justify-start space-y-2">
  <label>Email</label>
  <input type="email" />
  <label>Password</label>
  <input type="password" />
</form>`,
      },
    ],
    "justify-center": [
      {
        title: "Centered Boxes",
        note: "Items horizontally centered in the container.",
        code: `<div class="flex justify-center space-x-2">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Center Navbar Items",
        note: "Center menu items in the navigation bar.",
        code: `<nav class="flex justify-center space-x-4">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Centered Buttons",
        note: "Buttons placed in the center of the container.",
        code: `<div class="flex justify-center space-x-2">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>`,
      },
      {
        title: "Card Group Centered",
        note: "Cards aligned in the center horizontally.",
        code: `<div class="flex justify-center space-x-4">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
</div>`,
      },
      {
        title: "Form Centered",
        note: "Input fields centered in the form container.",
        code: `<form class="flex flex-col justify-center space-y-2 items-center">
  <label>Email</label>
  <input type="email" />
  <label>Password</label>
  <input type="password" />
</form>`,
      },
    ],
    "justify-end": [
      {
        title: "Right-aligned Items",
        note: "Items aligned to the right edge of the container.",
        code: `<div class="flex justify-end space-x-2">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar Right",
        note: "Place navigation links at the right end.",
        code: `<nav class="flex justify-end space-x-4">
  <a href="#">Home</a>
  <a href="#">About</a>
</nav>`,
      },
      {
        title: "Right-aligned Buttons",
        note: "Group of buttons at the right.",
        code: `<div class="flex justify-end space-x-2">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>`,
      },
      {
        title: "Form Controls",
        note: "Input fields aligned to the right.",
        code: `<form class="flex flex-col justify-end space-y-2 items-end">
  <label>Email</label>
  <input type="email" />
</form>`,
      },
      {
        title: "Card Elements",
        note: "Right alignment for multiple cards.",
        code: `<div class="flex justify-end space-x-4">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
</div>`,
      },
    ],
    "justify-between": [
      {
        title: "Evenly Distributed Items",
        note: "First and last items at edges; space distributed between items.",
        code: `<div class="flex justify-between">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar with Edge Links",
        note: "First and last menu items stick to edges.",
        code: `<nav class="flex justify-between">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Header Layout",
        note: "Logo at start, buttons at end, space in-between.",
        code: `<div class="flex justify-between items-center">
  <div>Logo</div>
  <div>
    <button>Login</button>
    <button>Sign Up</button>
  </div>
</div>`,
      },
      {
        title: "Card Layout",
        note: "Cards distributed across the container evenly.",
        code: `<div class="flex justify-between">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
</div>`,
      },
      {
        title: "Button Alignment",
        note: "Buttons at edges of a container with space in-between.",
        code: `<div class="flex justify-between">
  <button class="btn">Cancel</button>
  <button class="btn">Submit</button>
</div>`,
      },
    ],
    "justify-around": [
      {
        title: "Even Spacing Around Items",
        note: "Items have equal space around them.",
        code: `<div class="flex justify-around">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar Spaced",
        note: "Navigation items spaced evenly around each link.",
        code: `<nav class="flex justify-around">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Button Group",
        note: "Buttons have equal spacing around them.",
        code: `<div class="flex justify-around">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
  <button class="btn">Delete</button>
</div>`,
      },
      {
        title: "Card Layout",
        note: "Cards spaced evenly with room around them.",
        code: `<div class="flex justify-around">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
  <div class="p-4 bg-gray-200">Card 3</div>
</div>`,
      },
      {
        title: "Form Buttons",
        note: "Buttons in a form spaced nicely.",
        code: `<div class="flex justify-around">
  <button class="btn">Cancel</button>
  <button class="btn">Submit</button>
</div>`,
      },
    ],
    "justify-evenly": [
      {
        title: "Uniform Spacing",
        note: "Spaces between all items, including edges, are equal.",
        code: `<div class="flex justify-evenly">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`,
      },
      {
        title: "Navbar Even Spacing",
        note: "Navigation items spaced evenly including edges.",
        code: `<nav class="flex justify-evenly">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`,
      },
      {
        title: "Button Row",
        note: "Buttons aligned with equal space everywhere.",
        code: `<div class="flex justify-evenly">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
  <button class="btn">Delete</button>
</div>`,
      },
      {
        title: "Cards",
        note: "Cards distributed with equal spacing across container.",
        code: `<div class="flex justify-evenly">
  <div class="p-4 bg-gray-200">Card 1</div>
  <div class="p-4 bg-gray-200">Card 2</div>
  <div class="p-4 bg-gray-200">Card 3</div>
</div>`,
      },
      {
        title: "Form Buttons Even",
        note: "Evenly spaced buttons for a clean layout.",
        code: `<div class="flex justify-evenly">
  <button class="btn">Cancel</button>
  <button class="btn">Submit</button>
</div>`,
      },
    ],
  };

  const commonMistakes: Record<string, Array<{ title: string; reason: string; example: string }>> = {
    "justify-start": [
      {
        title: "Not applying flex container",
        reason: "Without `display: flex` on the container, justify-* utilities won't work.",
        example: `<div class="justify-start">This won't work</div>
<!-- Should be -->
<div class="flex justify-start">This works</div>`
      },
      {
        title: "Conflicting margin utilities",
        reason: "Adding margin-auto or fixed margins can override justify behavior.",
        example: `<div class="flex justify-start">
  <div class="ml-auto">This ignores justify-start</div>
</div>`
      }
    ],
    "justify-center": [
      {
        title: "Missing flex context",
        reason: "Forgetting to add `flex` class to the container prevents centering.",
        example: `<div class="justify-center">Not centered</div>
<!-- Should be -->
<div class="flex justify-center">Centered</div>`
      },
      {
        title: "Mixing with auto margins",
        reason: "Using `ml-auto` or `mr-auto` conflicts with centering.",
        example: `<div class="flex justify-center">
  <div class="mr-auto">This breaks centering</div>
</div>`
      }
    ],
    "justify-end": [
      {
        title: "Using float instead",
        reason: "Using legacy float properties won't work with flexbox justify.",
        example: `<div class="float-right">Old approach</div>
<!-- Should be -->
<div class="flex justify-end">
  <div>Flex approach</div>
</div>`
      },
      {
        title: "Overlapping with other spacing",
        reason: "Combining justify-end with gap utilities might create unexpected spacing.",
        example: `<div class="flex justify-end gap-8">
  <!-- Items may not reach the edge due to gap -->
</div>`
      }
    ],
    "justify-between": [
      {
        title: "Too many items",
        reason: "With many items, justify-between might make edge items less visually distinct.",
        example: `<div class="flex justify-between">
  <!-- 10+ items might crowd edges -->
</div>
<!-- Consider using gap utilities for better spacing -->`
      },
      {
        title: "Ignoring gap utilities",
        reason: "Without gap, items might be too close together in the middle.",
        example: `<div class="flex justify-between">Items too close</div>
<!-- Better -->
<div class="flex justify-between gap-4">Properly spaced</div>`
      }
    ],
    "justify-around": [
      {
        title: "Small container width",
        reason: "In narrow containers, justify-around might look uneven.",
        example: `<div class="flex justify-around w-32">May look cramped</div>`
      },
      {
        title: "Nested flex containers",
        reason: "Using nested justify-around can create confusing spacing patterns.",
        example: `<div class="flex justify-around">
  <div class="flex justify-around">Double spacing confusion</div>
</div>`
      }
    ],
    "justify-evenly": [
      {
        title: "Combining with gap utilities",
        reason: "Mixing justify-evenly with gap-* doubles the spacing.",
        example: `<div class="flex justify-evenly gap-4">Too much space</div>
<!-- Use either justify-evenly OR gap utilities -->`
      },
      {
        title: "Ignoring padding/margins",
        reason: "Container padding can break the visual evenness.",
        example: `<div class="flex justify-evenly p-8">Padding skews evenness</div>`
      }
    ]
  };

  const renderDiagram = (cls: string) => {
    const containerClasses = `flex h-32 border border-border rounded-lg p-4 bg-slate-900 text-white justify-${cls.replace(
      "justify-",
      ""
    )} items-center gap-2`;
    const block = "bg-blue-500 w-16 h-16 flex items-center justify-center text-white font-semibold";

    return (
      <div className="border border-border rounded-lg p-6 bg-slate-900 text-white text-center">
        <p className="font-semibold">Visual representation of <code>{cls}</code></p>
        <div className={`mt-4 ${containerClasses}`}>
          <div className={block}>1</div>
          <div className={block}>2</div>
          <div className={block}>3</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
        <PageHero 
          title="Justify Content Utilities"
          description="Complete guide to CSS justify-content utilities for flexbox layouts. Master horizontal alignment of flex items with start, center, end, between, around, and evenly options."
        />

        <MentalModelSection
          title="Understanding Justify Content"
          description="Justify-content controls the horizontal distribution of flex items along the main axis. It's essential for creating balanced layouts, navigation menus, button groups, and responsive designs."
          features={[
            "Distributes space between and around flex items",
            "Works only on flex containers (display: flex)",
            "Controls main axis alignment (horizontal by default)",
            "Six main values: start, center, end, between, around, evenly",
            "Essential for responsive design and component layouts",
            "Interacts with gap utilities for precise spacing control"
          ]}
          layerAssignment="Flexbox Layout Layer - Main axis alignment and space distribution"
          browserBehavior="Browser calculates available space and distributes items according to the specified alignment rule"
        />

        <ComparisonTable
          title="Justify Content Properties Comparison"
          columns={["Utility", "Alignment Behavior", "Space Distribution", "Best Use Cases"]}
          rows={[
            {
              feature: "justify-start",
              values: ["Items to left edge", "No space distribution", "Left-aligned nav, forms"]
            },
            {
              feature: "justify-center", 
              values: ["Items centered", "Equal left/right space", "Modal content, centered sections"]
            },
            {
              feature: "justify-end", 
              values: ["Items to right edge", "No space distribution", "Right-aligned buttons, toolbars"]
            },
            {
              feature: "justify-between", 
              values: ["Items spread out", "Space between only", "Headers, button groups at edges"]
            },
            {
              feature: "justify-around", 
              values: ["Items with space around", "Equal space around each", "Distributed navigation, spaced cards"]
            },
            {
              feature: "justify-evenly", 
              values: ["Perfectly even spacing", "Equal space everywhere", "Symmetric layouts, evenly spaced buttons"]
            }
          ]}
        />

        <UtilityGrid
          title="Justify Content Utilities Overview"
          items={[
            { cls: "justify-start", desc: "Align to left edge" },
            { cls: "justify-center", desc: "Center horizontally" },
            { cls: "justify-end", desc: "Align to right edge" },
            { cls: "justify-between", desc: "Space between items" },
            { cls: "justify-around", desc: "Space around items" },
            { cls: "justify-evenly", desc: "Equal space everywhere" }
          ]}
        />

        <section className="space-y-6 border-t border-border pt-8">
          <h2 className="text-3xl font-bold">Interactive Playground</h2>
          <p className="text-muted-foreground">Experiment with different justify-content values and see how they affect item alignment.</p>

          <div className="flex gap-4 mb-6 flex-wrap">
            {justifyClasses.map((cls) => (
              <button
                key={cls}
                className={`px-4 py-2 rounded font-medium ${
                  activeClass === cls
                    ? "bg-blue-600 text-white shadow"
                    : "bg-card/20 text-foreground hover:bg-card/30"
                }`}
                onClick={() => setActiveClass(cls)}
              >
                {cls}
              </button>
            ))}
          </div>

          {renderDiagram(activeClass)}

          <div className="text-sm text-muted-foreground mb-6">
            {explanations[activeClass]}
          </div>
        </section>

        <UtilityPlayground
          title="Justify Content Playground"
          description="Test justify-content properties with different item configurations and see real-time effects."
          options={justifyClasses}
          defaultValue="justify-start"
          buildMarkup={(justifyClass) => {
            return `<div class="flex ${justifyClass} gap-4 p-4 border">
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
  <div class="w-16 h-16 bg-blue-500"></div>
</div>`
          }}
          renderPreview={(justifyClass) => {
            const containerClass = `flex ${justifyClass} gap-4 p-4 border border-border rounded`;
            return (
              <div className={containerClass}>
                <div className="w-16 h-16 bg-blue-500 rounded"></div>
                <div className="w-16 h-16 bg-blue-500 rounded"></div>
                <div className="w-16 h-16 bg-blue-500 rounded"></div>
              </div>
            )
          }}
        />

        <ExampleSection title="Real-World Examples">
          {examplesData[activeClass].map((ex, idx) => (
            <ExampleCard
              key={idx}
              title={ex.title}
              description={ex.note}
              code={ex.code}
            >
              <div dangerouslySetInnerHTML={{ __html: ex.code.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/class="/g, 'class="bg-gray-100 p-2 rounded text-gray-800 ') }} />
            </ExampleCard>
          ))}
        </ExampleSection>

        <CommonMistakesSection
          title="Common Mistakes & Why They Happen"
          mistakes={commonMistakes[activeClass]}
        />

        <TipsSection 
          tips={[
            { bold: "Always use flex:", text: "Justify-content only works on flex containers" },
            { bold: "Combine with gap:", text: "Use gap utilities for better spacing between items" },
            { bold: "Responsive alignment:", text: "Change justify values at different breakpoints" },
            { bold: "Vertical alignment:", text: "Use align-items for cross-axis alignment" },
            { bold: "Container width matters:", text: "Justify behavior depends on available space" }
          ]}
        />
      </div>
    </div>
  );
}