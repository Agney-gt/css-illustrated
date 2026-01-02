"use client";

import React, { useState, useRef } from "react";
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
import {
  InteractiveChallenge,
  CodeTag,
  CodeAttr,
  CodeComment,
} from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  {
    cls: "touch-auto",
    desc: "Browser handles all gestures (scrolling, zooming) automatically.",
  },
  {
    cls: "touch-none",
    desc: "Disable all browser gestures. Essential for custom drag/draw interactions.",
  },
  {
    cls: "touch-pan-x",
    desc: "Allow browser to handle horizontal scrolling only.",
  },
  {
    cls: "touch-pan-y",
    desc: "Allow browser to handle vertical scrolling only.",
  },
  {
    cls: "touch-pinch-zoom",
    desc: "Allow pinch-zoom, but disable other gestures.",
  },
];

export default function TouchActionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Touch Action"
            description="Control how touch input behaves on touch-enabled devices. Decide whether gestures trigger browser scrolling or are passed to your application."
          />

          <MentalModelSection
            title="Understanding Touch Action"
            description="Touch Action is a negotiation between the Browser and your App. By default, the browser 'claims' touch gestures for scrolling and zooming. This utility tells the browser to back off so your JavaScript can handle the gestures instead."
            features={[
              "Affects touchscreens and precision trackpads",
              "Critical for maps, games, carousels, and drawing apps",
              "touch-none passes ALL pointer events to JS",
              "touch-pan-y allows vertical scroll but lets you capture horizontal swipes",
              "Performance optimization: Tells browser not to wait for JS before scrolling",
            ]}
            layerAssignment="Interactivity Layer - Defines gesture ownership"
            browserBehavior="If set to 'auto', browser consumes the touchmove event for scrolling. If set to 'none', browser ignores it, allowing the event to bubble to your event listeners."
          />

          <ComparisonTable
            title="touch-action vs pointer-events"
            columns={["Property", "Effect", "Clicks/Taps", "Scrolling"]}
            rows={[
              {
                feature: "touch-action: none",
                values: [
                  "Disables browser gestures",
                  "✅ Still work (JS receives events)",
                  "🚫 Disabled (JS handles move)",
                ],
              },
              {
                feature: "pointer-events: none",
                values: [
                  "Disables ALL interaction",
                  "🚫 Click-through (ghost element)",
                  "✅ Works (passes to parent)",
                ],
              },
            ]}
          />

          <UtilityGrid title="Touch Action Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Interact with the box below. On touch devices, this determines if
              you scroll the page or move the box.
            </p>

            <UtilityPlayground
              title="Touch Action Playground"
              description="Try dragging the box on a touch device (or use developer tools mobile emulation)."
              options={utilities.map((u) => u.cls)}
              defaultValue="touch-auto"
              buildMarkup={(touchClass, customClasses = "") => {
                return `<div class="w-full h-64 bg-slate-100 relative overflow-hidden rounded-xl border border-dashed border-slate-300 flex items-center justify-center">
  <div class="${touchClass} w-32 h-32 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white text-center text-sm font-bold cursor-grab active:cursor-grabbing">
    ${touchClass}
  </div>
</div>`;
              }}
              renderPreview={(touchClass, customClasses = "") => {
                return (
                  <div className="w-full h-64 bg-slate-100 dark:bg-slate-900 relative overflow-hidden rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
                    <div
                      className={`${touchClass} w-32 h-32 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white text-center text-sm font-bold cursor-grab active:cursor-grabbing hover:scale-105 transition-transform`}
                      title="Try to drag me on touch device"
                    >
                      <div className="p-2">
                        {touchClass}
                        <div className="text-[10px] font-normal opacity-80 mt-1">
                          {touchClass === "touch-auto"
                            ? "Page Scrolls"
                            : "Gestures Captured"}
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 text-xs text-muted-foreground">
                      (Test with Touch Device / DevTools)
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Slippery Signature"
            description="Users are complaining that when they try to sign the contract, the page scrolls instead of drawing a line. We've simulated this behavior below. Apply 'touch-none' to let the app capture your drawing gestures."
            initialClass="touch-auto"
            correctClass="touch-none"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "touch-none";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>
                      &lt;!-- Signature Canvas Wrapper --&gt;
                    </CodeComment>
                    <div className="flex flex-wrap gap-2 items-center">
                      <CodeTag>&lt;div</CodeTag>
                      <span className="text-purple-400">class</span>
                      <span className="text-slate-300">=</span>
                      <span className="text-green-400">
                        "border-2 border-dashed ...
                      </span>

                      {/* Toggle Button */}
                      <button
                        onClick={toggle}
                        className={`
                            mx-1 px-1.5 rounded border text-xs font-bold transition-all font-mono align-middle
                            ${
                              isCorrect
                                ? "bg-green-500/20 text-green-400 border-green-500/50"
                                : "bg-red-500/20 text-red-400 border-red-500/50 animate-pulse"
                            }
                          `}
                      >
                        {cls}
                      </button>
                      <span className="text-green-400">"</span>
                      <CodeTag>&gt;</CodeTag>
                    </div>
                  </div>

                  <div className="pl-4 mt-2">
                    <CodeComment>
                      &lt;!-- HTML5 Canvas Element --&gt;
                    </CodeComment>
                    <CodeTag>&lt;canvas</CodeTag>{" "}
                    <CodeAttr name="id" value="signature-pad" />{" "}
                    <CodeTag>/&gt;</CodeTag>
                  </div>

                  <div>
                    <CodeTag>&lt;/div&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => {
              // Internal state for the drawing simulation
              const [points, setPoints] = useState<{ x: number; y: number }[]>(
                []
              );
              const [isDragging, setIsDragging] = useState(false);
              const [showScrollError, setShowScrollError] = useState(false);
              const padRef = useRef<HTMLDivElement>(null);

              const handleDown = (e: React.PointerEvent) => {
                e.preventDefault(); // Stop default browser text selection
                setIsDragging(true);
                setShowScrollError(false);
                setPoints([]); // Start fresh

                if (padRef.current) {
                  const rect = padRef.current.getBoundingClientRect();
                  setPoints([
                    { x: e.clientX - rect.left, y: e.clientY - rect.top },
                  ]);
                }
              };

              const handleMove = (e: React.PointerEvent) => {
                if (!isDragging) return;

                // 🔴 SIMULATION LOGIC:
                // If class is 'touch-auto', we simulate the browser "taking over" for scrolling
                // and ignoring the draw.
                if (cls === "touch-auto") {
                  setShowScrollError(true);
                  // We DON'T add points, effectively breaking the drawing
                  return;
                }

                // 🟢 If class is 'touch-none', we allow drawing
                if (padRef.current) {
                  const rect = padRef.current.getBoundingClientRect();
                  const newPoint = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  };
                  setPoints((prev) => [...prev, newPoint]);
                }
              };

              const handleUp = () => {
                setIsDragging(false);
                setShowScrollError(false);

                // If we drew enough points, trigger win
                if (cls === "touch-none" && points.length > 10) {
                  onWin();
                }
              };

              // Convert points to SVG path string
              const pathData =
                points.length > 0
                  ? `M ${points[0].x} ${points[0].y} ` +
                    points.map((p) => `L ${p.x} ${p.y}`).join(" ")
                  : "";

              return (
                <div className="relative w-full h-80 bg-slate-50 rounded-xl shadow-inner border border-slate-200 flex flex-col items-center justify-center overflow-hidden select-none">
                  {/* Simulated Phone Screen */}
                  <div className="w-64 h-full bg-white border-x-8 border-slate-900 relative shadow-2xl flex flex-col">
                    <div className="bg-slate-100 p-4 border-b text-xs font-bold text-center text-slate-500">
                      Contract.pdf
                    </div>

                    <div className="p-4 space-y-2 opacity-50 text-[10px]">
                      <div className="h-2 bg-slate-200 rounded w-full"></div>
                      <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded w-full"></div>
                    </div>

                    {/* The Signature Pad */}
                    <div className="p-4 flex-1 flex flex-col justify-end">
                      <div className="text-xs font-bold mb-2">Sign Here:</div>
                      <div
                        ref={padRef}
                        className={`
                             w-full h-32 border-2 border-dashed rounded-lg relative cursor-crosshair touch-none
                             ${
                               cls === "touch-none"
                                 ? "border-green-500 bg-green-50/10"
                                 : "border-slate-300 bg-white"
                             }
                          `}
                        onPointerDown={handleDown}
                        onPointerMove={handleMove}
                        onPointerUp={handleUp}
                        onPointerLeave={handleUp}
                      >
                        {/* Hint Text */}
                        {points.length === 0 &&
                          !showScrollError &&
                          !isSolved && (
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-xs pointer-events-none">
                              Draw with mouse/finger
                            </div>
                          )}

                        {/* The Drawn Line */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none">
                          <path
                            d={pathData}
                            stroke={isSolved ? "#22c55e" : "black"}
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        {/* 🔴 Simulation: Browser Scrolling Override */}
                        {showScrollError && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-100/80 text-red-600 text-xs font-bold text-center p-2 animate-in fade-in zoom-in duration-200">
                            <span className="text-xl">↕️</span>
                            Browser is Scrolling...
                            <br />
                            Drawing Blocked!
                          </div>
                        )}

                        {/* 🟢 Success State */}
                        {isSolved && !isDragging && (
                          <div className="absolute top-2 right-2 text-green-600 text-xs font-bold bg-white px-2 py-1 rounded shadow-sm border border-green-200 animate-in fade-in slide-in-from-bottom-2">
                            Signature Captured!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Interactive Maps"
              description="Allows the user to pan the map without scrolling the entire webpage."
              code={`<div class="touch-none relative h-64 w-full bg-slate-200 rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-[url('/map-tiles.png')] cursor-move"></div>
  <div class="absolute bottom-2 right-2 bg-white/80 px-2 py-1 text-xs rounded">
    Map Data © 2024
  </div>
</div>`}
            >
              <div className="touch-none relative h-48 w-full bg-blue-50 dark:bg-slate-800 rounded-lg overflow-hidden border border-blue-100 dark:border-slate-700">
                <div className="absolute inset-0 flex items-center justify-center text-blue-200 dark:text-slate-600 font-bold text-4xl opacity-20 select-none">
                  MAP VIEW
                </div>
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-2 right-2 bg-white/80 dark:bg-black/50 px-2 py-1 text-[10px] rounded backdrop-blur">
                  touch-none active
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Horizontal Image Carousel"
              description="Allows horizontal swiping (pan-x) while still letting the user scroll the page vertically (pan-y)."
              code={`<div class="touch-pan-y flex overflow-x-auto gap-4 p-4 bg-slate-900 rounded-xl">
  <img src="..." class="w-64 h-40 rounded bg-slate-700" />
  <img src="..." class="w-64 h-40 rounded bg-slate-700" />
  <img src="..." class="w-64 h-40 rounded bg-slate-700" />
</div>`}
            >
              <div className="touch-pan-y flex overflow-x-auto gap-4 p-4 bg-slate-900 rounded-xl">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="shrink-0 w-32 h-20 bg-slate-700 rounded flex items-center justify-center text-slate-500 text-xs"
                  >
                    Image {i}
                  </div>
                ))}
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Confusing touch-action with user-select",
                reason:
                  "`user-select: none` stops text highlighting. `touch-action: none` stops browser gestures (scrolling). They are often used together but do different things.",
                example: `<div class="touch-none select-none">...</div> `,
              },
              {
                title: "Using touch-none globally",
                reason:
                  "Applying `touch-none` to the `body` or large containers breaks scrolling for the user, trapping them on that part of the page.",
                example: `<body class="touch-none"> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Carousels:",
                text: "Use `touch-pan-y` on horizontal carousels. It lets users scroll down the page by touching the carousel, but captures horizontal swipes for slides.",
              },
              {
                bold: "Games/Canvas:",
                text: "Always use `touch-none` on `<canvas>` elements used for drawing or game inputs to prevent accidental viewport movement.",
              },
              {
                bold: "CSS vs JS:",
                text: "`touch-action` is more performant than calling `event.preventDefault()` in JS because the browser knows the intent before the event listener runs.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
