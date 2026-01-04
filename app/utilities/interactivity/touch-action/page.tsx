"use client";

import React, { useState, useRef, useEffect } from "react";
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

const utilities = [
  {
    className: "touch-auto",
    desc: "Browser handles all default touch behaviors (scrolling/zooming)",
  },
  { className: "touch-none", desc: "Disable all browser touch interactions" },
  { className: "touch-pan-x", desc: "Allow horizontal panning only" },
  { className: "touch-pan-y", desc: "Allow vertical panning only" },
  { className: "touch-pinch-zoom", desc: "Allow pinch zoom gestures" },
];

export default function TouchActionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Touch Action"
            description="Control how the browser handles touch input gestures. Disable scrolling, zooming, or panning to create custom touch experiences like maps, games, and drawing canvases."
          />

          <MentalModelSection
            title="Understanding Touch Action"
            description="When a user touches the screen, the browser normally captures that gesture for scrolling or zooming. `touch-action` tells the browser: 'Ignore these specific gestures, I will handle them myself with JavaScript'. This is essential for preventing the page from moving while a user interacts with a map or game."
            features={[
              "Applied to the INTERACTIVE CONTAINER (e.g., map, canvas)",
              "Prevents 'pull-to-refresh' or scrolling interference",
              "touch-none: Disables ALL browser handling (pure JS control)",
              "touch-pan-x/y: Allows single-axis scrolling only",
              "Crucial for mobile web apps and complex UIs",
            ]}
            layerAssignment="Interactivity Layer - Filters native gesture events"
            browserBehavior="Browser checks this property BEFORE starting a scroll. If disabled, it fires pointer events for your code instead."
          />

          <ComparisonTable
            title="Touch Action Strategies"
            columns={["Class", "Allowed Gestures", "Best Use Case"]}
            rows={[
              {
                feature: "touch-auto",
                values: ["All (Scroll, Zoom)", "Standard web pages"],
              },
              {
                feature: "touch-none",
                values: [
                  "None (Full Lock)",
                  "Drawing apps, Games, Drag & Drop",
                ],
              },
              {
                feature: "touch-pan-x",
                values: [
                  "Horizontal Scroll",
                  "Carousels (blocks vertical scroll)",
                ],
              },
              {
                feature: "touch-pan-y",
                values: ["Vertical Scroll", "Sidebars, Pull-to-refresh areas"],
              },
            ]}
          />

          <UtilityGrid
            title="Touch Action Utilities"
            items={utilities.map((u) => ({ cls: u.className, desc: u.desc }))}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              On a touch device (or trackpad), try to scroll or zoom inside the
              box.
            </p>

            <UtilityPlayground
              title="Touch Action Playground"
              description="Change the touch action to see which gestures are blocked."
              options={utilities.map((u) => u.className)}
              defaultValue="touch-auto"
              buildMarkup={(touchClass, customClasses = "") => {
                return `<div class="${touchClass} w-full h-48 bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-lg ${customClasses}">
  <span class="text-slate-500 font-medium">Try interacting here</span>
</div>`;
              }}
              renderPreview={(touchClass, customClasses = "") => {
                return (
                  <div
                    className={`
                    w-full h-48 bg-slate-50 dark:bg-slate-900 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg touch-action-demo
                    ${touchClass} ${customClasses}
                  `}
                  >
                    <div className="text-center p-4">
                      <p className="text-slate-500 dark:text-slate-400 font-medium">
                        {touchClass === "touch-none"
                          ? "Locked (No Scroll)"
                          : "Unlocked (Try Scrolling)"}
                      </p>
                      <p className="text-xs text-slate-400 mt-2">
                        (Best tested on mobile/tablet)
                      </p>
                    </div>
                  </div>
                );
              }}
            />
          </section>

          {/* 🟢 THE INTERACTIVE CHALLENGE */}
          <InteractiveChallenge
            title="The Unusable Canvas"
            description="This is a drawing app prototype. Try to drag your finger (or mouse) across the canvas to draw. Currently, dragging might scroll the page instead of drawing. Apply `touch-none` to fix this and enable smooth drawing."
            codeSnippet={`<div class="flex flex-col items-center gap-4">
  <div class="bg-white p-2 rounded-full shadow-sm border flex gap-2">
    <button class="w-6 h-6 rounded-full bg-black"></button>
    <button class="w-6 h-6 rounded-full bg-red-500"></button>
    <button class="w-6 h-6 rounded-full bg-blue-500"></button>
  </div>

  <div 
    class="{input} w-64 h-64 bg-white border-2 border-slate-200 rounded-xl shadow-inner relative overflow-hidden cursor-crosshair"
  >
    <svg class="absolute inset-0 w-full h-full pointer-events-none">
      <path d="..." stroke="black" stroke-width="4" fill="none" />
    </svg>
    
    <div class="absolute inset-0 flex items-center justify-center text-slate-300 pointer-events-none">
      Draw Here
    </div>
  </div>
</div>`}
            options={[
              "touch-auto",
              "pointer-events-none",
              "touch-none",
              "touch-pan-y",
            ]}
            correctOption="touch-none"
            renderPreview={(userClass) => {
              const [points, setPoints] = useState<string>("");
              const [isDrawing, setIsDrawing] = useState(false);
              const [scrollWarning, setScrollWarning] = useState(false);
              const containerRef = useRef<HTMLDivElement>(null);

              // Reset drawing when class changes
              useEffect(() => {
                setPoints("");
                setScrollWarning(false);
              }, [userClass]);

              const getCoordinates = (
                e: React.MouseEvent | React.TouchEvent
              ) => {
                const clientX =
                  "touches" in e
                    ? e.touches[0].clientX
                    : (e as React.MouseEvent).clientX;
                const clientY =
                  "touches" in e
                    ? e.touches[0].clientY
                    : (e as React.MouseEvent).clientY;

                if (containerRef.current) {
                  const rect = containerRef.current.getBoundingClientRect();
                  return {
                    x: clientX - rect.left,
                    y: clientY - rect.top,
                  };
                }
                return { x: 0, y: 0 };
              };

              const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
                // If touch-none is NOT applied, dragging often triggers scroll instead of draw
                // We simulate this "failure" visually for the user
                if (userClass !== "touch-none") {
                  setScrollWarning(true);
                  setTimeout(() => setScrollWarning(false), 1000);
                  // Don't start drawing if the class is wrong (simulating browser scroll takeover)
                  return;
                }

                setIsDrawing(true);
                const { x, y } = getCoordinates(e);
                setPoints(`M ${x} ${y}`);
              };

              const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
                if (!isDrawing) return;
                const { x, y } = getCoordinates(e);
                setPoints((prev) => prev + ` L ${x} ${y}`);
              };

              const handleEnd = () => {
                setIsDrawing(false);
              };

              return (
                <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg select-none">
                  <div className="flex flex-col items-center gap-4 relative">
                    {/* Fake Toolbar */}
                    <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 flex gap-2">
                      <div className="w-4 h-4 rounded-full bg-black border border-slate-300"></div>
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                      <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    </div>

                    {/* Canvas Area */}
                    <div
                      ref={containerRef}
                      onMouseDown={handleStart}
                      onMouseMove={handleMove}
                      onMouseUp={handleEnd}
                      onMouseLeave={handleEnd}
                      onTouchStart={handleStart}
                      onTouchMove={handleMove}
                      onTouchEnd={handleEnd}
                      className={`
                        w-64 h-64 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl shadow-inner relative overflow-hidden cursor-crosshair group
                        ${userClass}
                      `}
                    >
                      {/* Drawing Path */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path
                          d={points}
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-slate-800 dark:text-slate-200"
                        />
                      </svg>

                      {points === "" && !scrollWarning && (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-600 font-bold pointer-events-none select-none">
                          Draw Here
                        </div>
                      )}

                      {/* Scroll Warning Overlay (Simulates browser scroll takeover) */}
                      {scrollWarning && (
                        <div className="absolute inset-0 bg-red-50/90 dark:bg-red-900/50 flex flex-col items-center justify-center text-red-600 dark:text-red-200 text-center p-4 animate-in fade-in zoom-in duration-200 pointer-events-none">
                          <span className="text-2xl mb-2">↕️</span>
                          <span className="text-xs font-bold">
                            Browser Scrolled Page Instead!
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Status Indicator */}
                    {userClass === "touch-none" ? (
                      <div className="absolute -bottom-10 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full animate-in fade-in zoom-in border border-green-200 shadow-sm flex items-center gap-2">
                        <span>✅</span> Drawing Enabled
                      </div>
                    ) : (
                      <div className="absolute -bottom-10 bg-red-100 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full animate-in fade-in border border-red-200 shadow-sm flex items-center gap-2">
                        <span>❌</span> Gestures Not Blocked
                      </div>
                    )}
                  </div>
                </div>
              );
            }}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Swipeable carousel"
              description="Allows horizontal swiping (`touch-pan-x`) but allows the user to scroll down the page normally if they drag vertically."
              code={`<div class="touch-pan-x overflow-x-auto flex gap-4 p-4 bg-slate-900">
  <div class="w-64 h-40 bg-slate-700 rounded-lg shrink-0">Slide 1</div>
  <div class="w-64 h-40 bg-slate-600 rounded-lg shrink-0">Slide 2</div>
  </div>`}
            >
              <div className="touch-pan-x overflow-x-auto flex gap-4 p-4 bg-slate-900 rounded-lg no-scrollbar">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-40 h-24 bg-slate-700 rounded-lg shrink-0 flex items-center justify-center text-slate-400 font-medium"
                  >
                    Slide {i}
                  </div>
                ))}
              </div>
            </ExampleCard>

            <ExampleCard
              title="Map Application"
              description="Prevents all browser handling (`touch-none`) so the map library can handle panning and zooming logic."
              code={`<div class="touch-none w-full h-64 bg-blue-100 relative rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-[url('/map-pattern.png')] opacity-50"></div>
  <div class="absolute bottom-4 right-4 bg-white p-2 rounded shadow">
    <button class="block w-6 h-6 text-xl leading-none">+</button>
    <button class="block w-6 h-6 text-xl leading-none">-</button>
  </div>
</div>`}
            >
              <div className="touch-none w-full h-48 bg-blue-50 dark:bg-slate-800 relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border border-slate-400"></div>
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400 font-bold pointer-events-none">
                  INTERACTIVE MAP
                </div>
                <div className="absolute bottom-2 right-2 bg-white dark:bg-slate-700 p-1 rounded shadow-md flex flex-col gap-1">
                  <div className="w-6 h-6 flex items-center justify-center bg-slate-100 dark:bg-slate-600 rounded text-slate-600 dark:text-slate-300 font-bold cursor-pointer">
                    +
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center bg-slate-100 dark:bg-slate-600 rounded text-slate-600 dark:text-slate-300 font-bold cursor-pointer">
                    -
                  </div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Custom Slider"
              description="Allows vertical scrolling (`touch-pan-y`) so the user can scroll past the slider, but captures horizontal movement for the value change."
              code={`<div class="touch-pan-y w-full h-12 bg-gray-200 rounded-full relative flex items-center px-2">
  <div class="w-8 h-8 bg-blue-600 rounded-full shadow-lg cursor-grab active:cursor-grabbing"></div>
</div>`}
            >
              <div className="touch-pan-y w-full h-12 bg-slate-100 dark:bg-slate-800 rounded-full relative flex items-center px-2 border border-slate-200 dark:border-slate-700">
                <div className="absolute left-1/3 w-8 h-8 bg-blue-600 rounded-full shadow-lg cursor-grab flex items-center justify-center text-[10px] text-white font-bold">
                  33%
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Forgetting accessibility",
                reason:
                  "Disabling touch events (`touch-none`) can trap users who rely on gestures for navigation. Ensure there are alternative ways to navigate.",
                example: `<div class="touch-none w-screen h-screen"> `,
              },
              {
                title: "Using touch-action for pointer events",
                reason:
                  "`touch-action` only affects gestures (scroll/zoom). If you want to click-through an element, use `pointer-events-none`.",
                example: `<div class="touch-none" onclick="..."> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Maps & Games:",
                text: "Use `touch-none` for full-screen interactive canvases to prevent the viewport from shifting while playing or dragging.",
              },
              {
                bold: "Horizontal Lists:",
                text: "Use `touch-pan-x` (or `pan-y` depending on orientation) to tell the browser 'this area scrolls horizontally, but please let the user scroll the page vertically if they drag up/down'.",
              },
              {
                bold: "Performance:",
                text: "Setting `touch-action` explicitly can improve scrolling performance because the browser doesn't have to wait to see if your JavaScript will cancel the scroll event.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
