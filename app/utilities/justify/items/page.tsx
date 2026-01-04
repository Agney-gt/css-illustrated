"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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

export default function JustifyItemsPage() {
  const utilities = [
    {
      className: "justify-items-start",
      desc: "Align items to the start of their cell (left)",
    },
    {
      className: "justify-items-end",
      desc: "Align items to the end of their cell (right)",
    },
    {
      className: "justify-items-center",
      desc: "Align items to the center of their cell",
    },
    {
      className: "justify-items-stretch",
      desc: "Stretch items to fill the cell width (default)",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Hero Section */}
          <PageHero
            title="Justify Items"
            description="Control how grid items are aligned along the inline axis (row axis) within their grid areas. This property sets the `justify-items` CSS property on a grid container."
          />

          {/* Mental Model */}
          <MentalModelSection
            title="Understanding Justify Items"
            description="While `justify-content` aligns the grid tracks themselves within the container, `justify-items` controls how the content *inside* each grid cell aligns relative to that cell's horizontal boundaries."
            features={[
              "Applies to GRID CONTAINERS (display: grid)",
              "Controls alignment along the INLINE axis (horizontal)",
              "Acts as a default for all items in the grid",
              "Individual items can override this with `justify-self-*`",
              "Default behavior is usually `stretch` unless items have intrinsic width",
            ]}
            layerAssignment="Grid Alignment Layer - Intra-cell horizontal positioning"
            browserBehavior="The browser calculates the width of the grid column, then positions the item inside that column based on this property."
          />

          {/* Comparison Table */}
          <ComparisonTable
            title="Justify Items Behavior"
            columns={["Class", "Alignment", "Best For"]}
            rows={[
              {
                feature: "justify-items-start",
                values: ["Left (LTR)", "Forms, Text content lists"],
              },
              {
                feature: "justify-items-center",
                values: ["Center", "Icons, Avatars, Status badges"],
              },
              {
                feature: "justify-items-end",
                values: ["Right (LTR)", "Financial data, Actions columns"],
              },
              {
                feature: "justify-items-stretch",
                values: ["Full Width", "Cards, Inputs, Block elements"],
              },
            ]}
          />

          {/* Utility Grid */}
          <UtilityGrid
            title="Justify Items Utilities"
            items={utilities.map((u) => ({ cls: u.className, desc: u.desc }))}
          />

          {/* Interactive Playground */}
          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              See how grid items position themselves inside their columns.
            </p>

            <UtilityPlayground
              title="Justify Items Playground"
              description="Change the justification to see items shift left, center, right, or stretch."
              options={utilities.map((u) => u.className)}
              defaultValue="justify-items-stretch"
              buildMarkup={(justifyClass, customClasses = "") => {
                return `<div class="grid grid-cols-3 gap-4 ${justifyClass} ${customClasses}">
  <div class="bg-blue-500 w-16 h-16">1</div>
  <div class="bg-blue-500 w-16 h-16">2</div>
  <div class="bg-blue-500 w-16 h-16">3</div>
</div>`;
              }}
              renderPreview={(justifyClass, customClasses = "") => {
                // If stretch is selected, we remove the fixed width from children to let them stretch
                const childClass =
                  justifyClass === "justify-items-stretch"
                    ? "bg-blue-500 dark:bg-blue-600 h-16 rounded flex items-center justify-center text-white font-bold"
                    : "bg-blue-500 dark:bg-blue-600 w-16 h-16 rounded flex items-center justify-center text-white font-bold";

                return (
                  <div
                    className={`grid grid-cols-3 gap-4 w-full p-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg ${justifyClass} ${customClasses}`}
                  >
                    <div className={childClass}>1</div>
                    <div className={childClass}>2</div>
                    <div className={childClass}>3</div>
                    <div className={childClass}>4</div>
                    <div className={childClass}>5</div>
                    <div className={childClass}>6</div>
                  </div>
                );
              }}
            />
          </section>
          <InteractiveChallenge
            title="The Off-Center Icons"
            description="The dashed lines represent the grid cells (tracks). Currently, the blue icons are sticking to the start (left) of their cells, leaving empty space on the right. Apply `justify-items-center` to snap them perfectly into the center of their grid tracks."
            codeSnippet={`<div class="grid grid-cols-3 gap-4 {input}">
  
  <button class="w-12 h-12 bg-blue-500 ...">
    <svg>...</svg>
  </button>
  <button class="w-12 h-12 bg-blue-500 ...">
    <svg>...</svg>
  </button>
  </div>`}
            options={[
              "justify-items-start",
              "justify-items-center",
              "justify-items-end",
              "justify-items-stretch",
            ]}
            correctOption="justify-items-center"
            renderPreview={(userClass) => {
              const isCorrect = userClass === "justify-items-center";

              return (
                <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                  <div className="relative w-64">
                    {/* Layer 1: Ghost Tracks (Visual Guide) */}
                    <div className="absolute inset-0 grid grid-cols-3 gap-4 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className={`
                  border-2 border-dashed rounded-xl flex items-center justify-center transition-colors duration-500
                  ${
                    isCorrect
                      ? "border-green-300 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20"
                      : "border-slate-300 dark:border-slate-700"
                  }
                `}
                        >
                          {/* Center Target Dot (Only visible when wrong) */}
                          {!isCorrect && (
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full opacity-40 animate-pulse" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Layer 2: The Actual Grid Content */}
                    {/* We define fixed height rows here just for the visual demo to match the ghost tracks */}
                    <div
                      className={`grid grid-cols-3 gap-4 auto-rows-[80px] ${userClass}`}
                    >
                      {[
                        { icon: "🔧", label: "Settings" },
                        { icon: "🔨", label: "Build" },
                        { icon: "📏", label: "Measure" },
                        { icon: "📦", label: "Deploy" },
                        { icon: "🔍", label: "Inspect" },
                        { icon: "🚀", label: "Launch" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 transition-all duration-500 rounded-lg flex items-center justify-center text-white text-xl shadow-md z-10"
                          title={item.label}
                        >
                          {item.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }}
          />

          {/* Real World Examples */}
          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Centered Icon Grid"
              description="Perfect for dashboards or feature lists where icons should sit in the middle of their grid areas."
              code={`<div class="grid grid-cols-3 justify-items-center gap-4">
  <div class="w-12 h-12 bg-indigo-500 rounded-full"></div>
  <div class="w-12 h-12 bg-indigo-500 rounded-full"></div>
  <div class="w-12 h-12 bg-indigo-500 rounded-full"></div>
</div>`}
            >
              <div className="grid grid-cols-3 justify-items-center gap-4 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-sm"
                  >
                    {i}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Form Labels & Inputs"
              description="Using start alignment for form layouts to ensure labels line up neatly on the left."
              code={`<form class="grid grid-cols-1 justify-items-start gap-4">
  <label class="font-bold">Email Address</label>
  <input class="w-full border rounded px-3 py-2" />
  <button class="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
</form>`}
            >
              <div className="grid grid-cols-1 justify-items-start gap-3 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg w-full max-w-xs">
                <label className="font-bold text-sm text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <div className="w-full h-8 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded"></div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">
                  Submit
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Right-Aligned Actions"
              description="Using end alignment for a column of action buttons or status indicators."
              code={`<div class="grid grid-cols-1 justify-items-end gap-2">
  <button class="text-blue-600 text-sm">Edit</button>
  <button class="text-red-600 text-sm">Delete</button>
</div>`}
            >
              <div className="grid grid-cols-1 justify-items-end gap-2 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="text-slate-500 text-xs w-full mb-1">
                  Actions
                </div>
                <button className="text-blue-600 hover:underline text-sm font-medium">
                  Edit Profile
                </button>
                <button className="text-red-600 hover:underline text-sm font-medium">
                  Delete Account
                </button>
              </div>
            </ExampleCard>
          </ExampleSection>

          {/* Common Mistakes */}
          <CommonMistakesSection
            mistakes={[
              {
                title: "Confusing with justify-content",
                reason:
                  "`justify-content` moves the entire grid track group. `justify-items` moves the items *inside* their tracks.",
                example: `<div class="grid justify-center"> <div class="grid justify-items-center"> `,
                level: "warning",
              },
              {
                title: "Not using grid container",
                reason:
                  "`justify-items` only works on elements with `display: grid`. It has no effect on flex containers (use `align-items` for cross-axis or `justify-content` for main-axis).",
                example: `<div class="flex justify-items-center"> `,
                level: "critical",
              },
              {
                title: "Stretch issues with fixed width",
                reason:
                  "If an item has a fixed width (e.g., `w-16`), `justify-items-stretch` cannot stretch it. Remove width classes to allow stretching.",
                example: `<div class="justify-items-stretch">
  <div class="w-16">...</div> </div>`,
                level: "info",
              },
            ]}
          />

          {/* Tips */}
          <TipsSection
            tips={[
              {
                bold: "Default Behavior:",
                text: "Grid items default to `stretch` unless they have intrinsic dimensions or you specify otherwise.",
              },
              {
                bold: "Override Individual Items:",
                text: "Use `justify-self-*` on a specific child element to override the parent's `justify-items` setting.",
              },
              {
                bold: "Flexbox Equivalent:",
                text: "There is no direct `justify-items` for Flexbox. In Flexbox, you use `justify-content` (main axis) or `align-items` (cross axis).",
              },
              {
                bold: "Responsive:",
                text: "Combine with breakpoints like `md:justify-items-center` to change alignment on larger screens.",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
