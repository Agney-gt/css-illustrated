"use client";

import React, { useState, useEffect } from "react";
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
import CodeBlock from "@/app/utilities/components/code-block";

// Small visual item used in margin demos
function DemoItem({
  label,
  bg = "bg-blue-600",
  classes = "",
  onClick,
}: {
  label: string;
  bg?: string;
  classes?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`${classes} ${bg} text-white rounded font-semibold flex items-center justify-center transition-all duration-500 cursor-default`}
      style={{ minWidth: 80, minHeight: 48 }}
    >
      {label}
    </div>
  );
}

const utilities = [
  { cls: "m-0", desc: "No margin (0)" },
  { cls: "m-2", desc: "0.5rem (~8px) on all sides" },
  { cls: "m-4", desc: "1rem (~16px) on all sides" },
  { cls: "m-6", desc: "1.5rem (~24px) on all sides" },
  { cls: "m-8", desc: "2rem (~32px) on all sides" },
  { cls: "mx-auto", desc: "horizontal auto margin (centers block)" },
  { cls: "-m-2", desc: "negative margin (pulls element outward)" },
  { cls: "mt-4", desc: "margin-top only" },
  { cls: "mb-8", desc: "margin-bottom only" },
];

export default function MarginPage() {
  // auto-cycling margins for Demo 1
  const [cycleIndex, setCycleIndex] = useState(0);
  const cycleMargins = ["m-0", "m-2", "m-4", "m-8", "m-12", "-m-2"];

  // click toggle margin for Demo 3
  const [clickedMargin, setClickedMargin] = useState("m-4");

  useEffect(() => {
    const t = setInterval(() => {
      setCycleIndex((i) => (i + 1) % cycleMargins.length);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Margin"
            description="Control the outer spacing of an element. Use margin to separate elements from their neighbors or center them within a container."
          />

          <MentalModelSection
            title="Margin vs. Padding"
            description="The Box Model is the foundation of CSS layout. Margin is the 'personal space' outside your element's border, pushing other elements away. Padding is the space inside the border, pushing the element's own content inward."
            features={[
              "Margin pushes neighbors away (Outer Space)",
              "Padding pushes content inward (Inner Space)",
              "Margins can collapse (overlap) vertically",
              "mx-auto is the standard technique for centering containers",
              "Negative margins can pull elements into overlap",
            ]}
            layerAssignment="Layout Layer - Defines element positioning and separation"
            browserBehavior="Margin is transparent and not part of the element's clickable area or background color. Vertical margins between block elements often collapse into the larger of the two values."
          />

          <ComparisonTable
            title="Spacing Strategies"
            columns={["Property", "Direction", "Visual Effect", "Best For"]}
            rows={[
              {
                feature: "m-{size}",
                values: ["All sides", "Isolates element", "Cards, Images"],
              },
              {
                feature: "mx-{size}",
                values: [
                  "Left & Right",
                  "Horizontal spacing",
                  "Buttons, Inline items",
                ],
              },
              {
                feature: "my-{size}",
                values: [
                  "Top & Bottom",
                  "Vertical spacing",
                  "Paragraphs, Sections",
                ],
              },
              {
                feature: "mx-auto",
                values: ["Left & Right", "Centers element", "Page containers"],
              },
            ]}
          />

          <UtilityGrid title="Common Margin Utilities" items={utilities} />

          {/* Demos */}
          <div className="space-y-12 border-t border-border pt-8">
            <h2 className="text-3xl font-bold text-foreground">
              Interactive Margin Demos
            </h2>

            {/* Demo 1: Auto-cycling margin */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                1. Auto-Cycling Margin
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                This row demonstrates the visual effect of different{" "}
                <code className="bg-slate-700 px-1 rounded">m-*</code> values
                applied to the middle item — notice how it pushes away from
                siblings or pulls inward with negative margins.
              </p>

              <div className="flex items-center bg-slate-800 p-4 rounded overflow-hidden">
                <DemoItem label="A" bg="bg-slate-700" />
                {/* the middle item receives the changing margin util */}
                <div
                  className={`${cycleMargins[cycleIndex]} transition-all duration-500`}
                >
                  <DemoItem label={cycleMargins[cycleIndex]} bg="bg-blue-600" />
                </div>
                <DemoItem label="B" bg="bg-slate-700" />
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex items-center">
  <div class="...">A</div>
  <div class="${cycleMargins[cycleIndex]} transition-all duration-500">
    <div class="bg-blue-600 text-white rounded p-3">${cycleMargins[cycleIndex]}</div>
  </div>
  <div class="...">B</div>
</div>`}
              />

              <CodeBlock
                language="javascript"
                code={`// cycle margins
const [cycleIndex, setCycleIndex] = useState(0);
const cycleMargins = ["m-0","m-2","m-4","m-8","m-12","-m-2"];
useEffect(() => {
  const t = setInterval(() => setCycleIndex(i => (i+1) % cycleMargins.length), 1800);
  return () => clearInterval(t);
}, []);`}
              />
            </div>

            {/* Demo 2: Hover-expand margin */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                2. Hover-Expand Margin
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Hover the blue tile — it increases horizontal margin (simulated
                with <code className="bg-slate-700 px-1 rounded">mx-*</code> on
                hover) to create breathing room between neighboring items.
              </p>

              <div className="flex items-center bg-slate-800 p-4 rounded">
                <DemoItem label="Left" bg="bg-slate-700" />
                <div className="transition-all duration-300 mx-2 hover:mx-8">
                  <DemoItem label="Hover me" bg="bg-purple-600" />
                </div>
                <DemoItem label="Right" bg="bg-slate-700" />
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex items-center">
  <div class="...">Left</div>
  <div class="transition-all duration-300 mx-2 hover:mx-8">
    <div class="bg-purple-600 text-white rounded p-3">Hover me</div>
  </div>
  <div class="...">Right</div>
</div>`}
              />
            </div>

            {/* Demo 3: Click-toggle margin */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                3. Click-Toggle Margin
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                Click the green box to toggle between a compact and a roomy
                margin. Useful to prototype spacing toggles for
                collapsed/expanded states.
              </p>

              <div className="flex items-center bg-slate-800 p-4 rounded">
                <DemoItem label="Left" bg="bg-slate-700" />
                <div
                  className={`${
                    clickedMargin === "m-4" ? "m-4" : "m-12"
                  } transition-all duration-500`}
                  onClick={() =>
                    setClickedMargin((s) => (s === "m-4" ? "m-12" : "m-4"))
                  }
                >
                  <DemoItem
                    label={`${clickedMargin} (click)`}
                    bg="bg-green-600"
                    classes="cursor-pointer"
                  />
                </div>
                <DemoItem label="Right" bg="bg-slate-700" />
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex items-center">
  <div class="...">Left</div>
  <div class="\${clickedMargin === 'm-4' ? 'm-4' : 'm-12'} transition-all duration-500" onClick="toggle()">
    <div class="bg-green-600 text-white rounded p-3">m-4 (click)</div>
  </div>
  <div class="...">Right</div>
</div>`}
              />

              <CodeBlock
                language="javascript"
                code={`// click-toggle margin
const [clickedMargin, setClickedMargin] = useState("m-4");
// onClick => setClickedMargin(s => s === "m-4" ? "m-12" : "m-4")`}
              />
            </div>

            {/* Demo 4: Responsive margin */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">
                4. Responsive Margin
              </h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                This example applies smaller margins on mobile and larger
                margins on desktop with responsive utilities (e.g.{" "}
                <code className="bg-slate-700 px-1 rounded">
                  sm:mx-4 md:mx-12
                </code>
                ).
              </p>

              <div className="flex items-center bg-slate-800 p-4 rounded">
                <div className="mx-2">Left</div>
                <div className="transition-all duration-500 mx-4 md:mx-12">
                  <div className="bg-orange-600 text-white rounded p-3">
                    Responsive margin
                  </div>
                </div>
                <div className="mx-2">Right</div>
              </div>

              <CodeBlock
                language="html"
                code={`<div class="flex items-center">
  <div class="mx-2">Left</div>
  <div class="transition-all duration-500 mx-4 md:mx-12">
    <div class="bg-orange-600 text-white rounded p-3">Responsive margin</div>
  </div>
  <div class="mx-2">Right</div>
</div>`}
              />
            </div>
          </div>

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Adjust the margin of the blue box to see how it pushes away from
              the surrounding text.
            </p>

            <UtilityPlayground
              title="Margin Playground"
              description="See how margin affects layout flow."
              options={["m-0", "m-4", "mx-8", "my-8", "ml-12"]}
              defaultValue="m-0"
              buildMarkup={(marginClass, customClasses = "") => {
                return `<div class="bg-slate-50 border rounded-lg p-4 text-slate-600 font-mono text-sm">
  <span>Text Before</span>
  <div class="${marginClass} inline-block bg-blue-500 text-white p-2 rounded ${customClasses}">
    Target
  </div>
  <span>Text After</span>
</div>`;
              }}
              renderPreview={(marginClass, customClasses = "") => {
                return (
                  <div className="bg-slate-50 border border-border rounded-lg p-8 text-slate-600 font-mono text-sm flex flex-wrap items-center">
                    <span className="bg-slate-200 p-2 rounded">Sibling 1</span>
                    <div
                      className={`${marginClass} bg-blue-500 text-white p-4 rounded shadow-lg transition-all duration-300 ${customClasses}`}
                    >
                      Target
                    </div>
                    <span className="bg-slate-200 p-2 rounded">Sibling 2</span>
                  </div>
                );
              }}
            />
          </section>
          <InteractiveChallenge
            title="The Clingy Buttons"
            description="These two buttons are glued together, which looks broken and risks accidental clicks. Add a left margin to the 'Confirm' button to create a safe gap."
            codeSnippet={`<div class="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
<div class="flex items-center justify-end">
<button class="px-4 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded">
Cancel
</button>

<button class="{input} px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded shadow-sm">
Confirm
</button>
</div>
</div>`}
            options={["ml-0", "ml-4", "mr-4", "my-4"]}
            correctOption="ml-4"
            renderPreview={(userClass) => (
              <div className="relative w-full h-80 bg-slate-100 rounded-xl shadow-inner border border-slate-200 flex flex-col items-center justify-center p-8">
                {/* Modal Simulation */}
                <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm border border-slate-200">
                  <h3 className="font-bold text-slate-800 mb-2">
                    Delete Account?
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">
                    This action cannot be undone. Are you sure?
                  </p>

                  <div className="flex items-center justify-end relative">
                    <button className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-50 rounded transition-colors">
                      Cancel
                    </button>

                    {/* The Target Button */}
                    <button
                      className={`
              px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded shadow-sm transition-all duration-300
              ${userClass}
            `}
                    >
                      Confirm
                    </button>

                    {/* Visualizer for the gap (appears between buttons) */}
                    {userClass === "ml-4" && (
                      <div className="absolute right-[88px] h-6 flex flex-col items-center justify-center animate-in fade-in zoom-in">
                        <div className="w-4 border-t border-red-400/50 relative top-1/2"></div>
                        <span className="text-[9px] text-red-500 font-mono bg-red-50 px-1 rounded relative -top-2">
                          16px
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Error Overlay */}
                {userClass === "ml-0" && (
                  <div className="absolute bottom-6 bg-red-100 text-red-600 text-xs px-3 py-1.5 rounded-full font-bold animate-pulse">
                    Risk of misclick! Buttons are touching.
                  </div>
                )}
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Centering a Container"
              description="Using mx-auto with a max-width is the standard way to center page content."
              code={`<div class="max-w-md mx-auto bg-white rounded-xl shadow p-6">
  <h2 class="font-bold">Centered Card</h2>
  <p>This card stays in the middle of the screen.</p>
</div>`}
            >
              <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-lg">
                <div className="max-w-[200px] mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-600 rounded mb-2"></div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
                </div>
                <p className="text-center text-xs text-slate-400 mt-2">
                  mx-auto
                </p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Overlapping Elements"
              description="Using negative margin to pull an element over another."
              code={`<div class="bg-slate-800 h-32 rounded-t-xl"></div>
<div class="-mt-12 mx-6 bg-white p-4 rounded-xl shadow-lg relative">
  <h3 class="font-bold">Overlapping Card</h3>
</div>`}
            >
              <div className="p-4">
                <div className="bg-slate-800 h-24 rounded-t-xl w-full"></div>
                <div className="-mt-10 mx-6 bg-white dark:bg-slate-700 p-4 rounded-xl shadow-lg relative border border-slate-100 dark:border-slate-600">
                  <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-500 rounded"></div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="List Spacing"
              description="Using vertical margin (or space-y) to separate list items."
              code={`<ul>
  <li class="bg-white p-4 rounded shadow mb-4">Item 1</li>
  <li class="bg-white p-4 rounded shadow mb-4">Item 2</li>
  <li class="bg-white p-4 rounded shadow">Item 3</li>
</ul>`}
            >
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg">
                <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm mb-3 text-xs">
                  Item 1
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm mb-3 text-xs">
                  Item 2
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded shadow-sm text-xs">
                  Item 3
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Margin vs Padding",
                reason:
                  "Using margin to create space INSIDE a box (like text from a border) is wrong. Use padding for internal space, margin for external separation.",
                example: `<div class="bg-blue-500 m-4 text-white">...</div> <div class="bg-blue-500 p-4 text-white">...</div> `,
              },
              {
                title: "Collapsing Margins",
                reason:
                  "Vertical margins between two blocks often collapse to the largest value, rather than adding up. Padding does not collapse.",
                example: `<div class="mb-8">...</div>
<div class="mt-8">...</div>
`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Gap vs Margin:",
                text: "In flex or grid layouts, prefer `gap-*` (or `space-x/y-*`) over individual margins. It's cleaner and handles first/last child logic for you.",
              },
              {
                bold: "Centering:",
                text: "`mx-auto` only works if the element has a defined width (or max-width) and is display: block (or flex).",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
