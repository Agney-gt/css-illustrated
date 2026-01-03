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

const utilities = [
  {
    cls: "scroll-auto",
    desc: "Instant scrolling without animation (default)",
  },
  {
    cls: "scroll-smooth",
    desc: "Smooth animated scrolling within the element",
  },
];

export default function ScrollBehaviorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Behavior"
            description="Control the scrolling behavior of an element. Choose between an instant jump or a smooth animation when navigating via anchor links or JavaScript."
          />

          <MentalModelSection
            title="Understanding Scroll Behavior"
            description="The scroll-behavior property tells the browser how to handle navigation within a scrolling container. It primarily affects anchor links (`<a href='#target'>`) and JavaScript calls like `.scrollTo()`. It does NOT affect the user's manual scrolling speed (mouse wheel or touch)."
            features={[
              "Applied to the SCROLL CONTAINER (often <html> or a specific div)",
              "Affects programmatic scrolls (links, JS)",
              "Does NOT affect manual user scrolling",
              "Smooth scrolling helps users maintain spatial context",
              "Instant scrolling is preferred for critical UI updates or data feeds",
            ]}
            layerAssignment="Interactivity Layer - Modifies the browser's scroll animation engine"
            browserBehavior="If 'smooth', the browser interpolates the position over time. If 'auto', it jumps to the new coordinate immediately."
          />

          <ComparisonTable
            title="Smooth vs Auto"
            columns={["Class", "Animation", "Best Use Case", "Accessibility"]}
            rows={[
              {
                feature: "scroll-smooth",
                values: [
                  "Ease-in-out animation",
                  "Anchor links, Back-to-top buttons",
                  "Respects prefers-reduced-motion",
                ],
              },
              {
                feature: "scroll-auto",
                values: [
                  "None (Instant jump)",
                  "Accordions, Tabs, Infinite scroll",
                  "Default behavior",
                ],
              },
            ]}
          />

          <UtilityGrid title="Scroll Behavior Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Click the link to see how the container scrolls to the target.
            </p>

            <UtilityPlayground
              title="Scroll Behavior Playground"
              description="Toggle smooth scrolling behavior."
              options={utilities.map((u) => u.cls)}
              defaultValue="scroll-auto"
              buildMarkup={(scrollClass, customClasses = "") => {
                return `<div class="${scrollClass} h-48 overflow-y-auto border rounded p-4 relative ${customClasses}">
  <a href="#target" class="text-blue-500 underline sticky top-0 bg-white/90 p-1">Jump Down</a>
  <div class="h-96">Spacer...</div>
  <div id="target" class="bg-green-100 p-2 rounded">Target Element</div>
  <div class="h-48">Bottom...</div>
</div>`;
              }}
              renderPreview={(scrollClass, customClasses = "") => {
                return (
                  <div
                    className={`
                    h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg p-6 relative bg-white dark:bg-slate-900
                    ${scrollClass} ${customClasses}
                  `}
                  >
                    <div className="sticky top-0 left-0 right-0 z-10 flex justify-center pb-4 bg-gradient-to-b from-white dark:from-slate-900 to-transparent">
                      <button
                        onClick={(e) => {
                          // Find the closest scroll container
                          const container =
                            e.currentTarget.closest(".overflow-y-auto");
                          // Find the target inside THAT specific container
                          const target = container?.querySelector("#target-el");
                          if (target) {
                            // Using block: 'nearest' helps prevent the whole page from scrolling
                            target.scrollIntoView({ block: "nearest" });
                          }
                        }}
                        className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full shadow-md font-medium transition-colors"
                      >
                        Jump to Target ↓
                      </button>
                    </div>

                    <div className="space-y-8 text-center text-slate-400 text-sm py-4">
                      <p>Scroll content...</p>
                      <p>More content...</p>
                      <p>Keep going...</p>
                      <p>Almost there...</p>
                    </div>

                    <div
                      id="target-el"
                      className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 p-4 rounded-lg text-center font-bold my-8 scroll-mt-12"
                    >
                      🎯 Target Reached
                    </div>

                    <div className="h-32"></div>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Jarring Jump"
            description="This documentation viewer feels broken. When you click 'Go to API', it jumps instantly, making it hard to track where you are. Apply 'scroll-smooth' to the scroll container to fix the navigation experience."
            codeSnippet={`<div class="w-full max-w-md border rounded-xl overflow-hidden shadow-lg bg-white">
  <div class="bg-slate-100 p-3 border-b flex justify-between items-center sticky top-0 z-20">
    <span class="font-bold text-slate-700">Docs v2.0</span>
    <a href="#api-section" class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">
      Go to API
    </a>
  </div>

  <div class="{input} h-64 overflow-y-auto p-6 relative">
    <h1 class="text-2xl font-bold mb-4">Introduction</h1>
    <p class="text-slate-500 mb-8">Welcome to the documentation...</p>
    
    <div class="h-64 bg-slate-50 rounded mb-8"></div>
    
    <h2 id="api-section" class="text-xl font-bold mb-2 pt-4">API Reference</h2>
    <p class="text-slate-500">This is the section you are looking for.</p>
    
    <div class="h-32"></div>
  </div>
</div>`}
            options={[
              "scroll-auto",
              "transition-all",
              "duration-500",
              "scroll-smooth",
            ]}
            correctOption="scroll-smooth"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                <div className="w-full max-w-sm border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 flex flex-col h-80 relative group">
                  {/* Header */}
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center z-20 shadow-sm shrink-0">
                    <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                      Docs v2.0
                    </span>
                    <button
                      onClick={(e) => {
                        // Scope search to this specific challenge instance
                        const card = e.currentTarget.closest(".group");
                        const scrollContainer =
                          card?.querySelector(".overflow-y-auto");
                        const target =
                          scrollContainer?.querySelector("#challenge-target");

                        if (target && scrollContainer) {
                          // Use block: 'start' to scroll to top, but inside the container
                          // Since the container has scroll-behavior set via CSS class,
                          // this JS call triggers that behavior.
                          target.scrollIntoView({ block: "start" });
                        }
                      }}
                      className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full font-bold hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      Go to API ↓
                    </button>
                  </div>

                  {/* Scroll Container */}
                  <div
                    className={`
                      flex-1 overflow-y-auto p-6 relative
                      ${userClass}
                    `}
                  >
                    <h1 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
                      Introduction
                    </h1>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                      Welcome to the documentation. This guide covers everything
                      you need to know about the platform.
                    </p>

                    {/* Spacer Content */}
                    <div className="space-y-4 mb-12 opacity-30">
                      <div className="h-4 bg-slate-300 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-300 rounded w-full"></div>
                      <div className="h-4 bg-slate-300 rounded w-5/6"></div>
                      <div className="h-32 bg-slate-200 rounded w-full"></div>
                    </div>

                    {/* Target Section */}
                    <div
                      id="challenge-target"
                      className="scroll-mt-4 pt-4 border-t border-slate-100 dark:border-slate-800"
                    >
                      <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                        API Reference
                      </h2>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                        <code className="text-xs text-blue-800 dark:text-blue-200">
                          GET /v1/users
                        </code>
                        <p className="text-slate-500 dark:text-slate-400 text-xs mt-2">
                          Returns a list of active users.
                        </p>
                      </div>
                    </div>

                    <div className="h-64"></div>
                  </div>
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Documentation navigation"
              description="Creates a polished navigation experience for long-form content with sticky headers."
              code={`<html class="scroll-smooth">
  <body>
    <nav>
      <a href="#installation">Installation</a>
      <a href="#usage">Usage</a>
    </nav>
    <main>
      <section id="installation">...</section>
      <section id="usage">...</section>
    </main>
  </body>
</html>`}
            >
              <div className="scroll-smooth h-48 overflow-y-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 relative">
                <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b p-3 flex gap-4 text-xs font-bold z-10">
                  <a
                    href="#ex1-install"
                    onClick={(e) => {
                      e.preventDefault();
                      e.currentTarget
                        .closest(".overflow-y-auto")
                        ?.querySelector("#ex1-install")
                        ?.scrollIntoView({ block: "nearest" });
                    }}
                  >
                    Installation
                  </a>
                  <a
                    href="#ex1-usage"
                    onClick={(e) => {
                      e.preventDefault();
                      e.currentTarget
                        .closest(".overflow-y-auto")
                        ?.querySelector("#ex1-usage")
                        ?.scrollIntoView({ block: "nearest" });
                    }}
                  >
                    Usage
                  </a>
                </div>
                <div className="p-4 space-y-12">
                  <div id="ex1-install" className="scroll-mt-12">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      Installation
                    </h4>
                    <p className="text-xs text-slate-500 mt-2">
                      Run npm install...
                    </p>
                  </div>
                  <div id="ex1-usage" className="scroll-mt-12">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">
                      Usage
                    </h4>
                    <p className="text-xs text-slate-500 mt-2">
                      Import the component...
                    </p>
                  </div>
                  <div className="h-24"></div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Back to Top Button"
              description="Smoothly animates the user back to the start of the page."
              code={`<button 
  onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
  class="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg"
>
  ↑ Top
</button>`}
            >
              <div className="scroll-smooth h-40 overflow-y-auto bg-slate-50 dark:bg-slate-950 rounded-lg p-4 relative border border-slate-200 dark:border-slate-800 group">
                <p className="text-xs text-slate-400 text-center mb-8">
                  Scroll down...
                </p>
                <div className="h-64 bg-slate-200 dark:bg-slate-800 rounded opacity-50"></div>
                <button
                  className="absolute bottom-4 right-4 bg-blue-600 text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-xs hover:bg-blue-700 transition-colors opacity-0 group-hover:opacity-100"
                  onClick={(e) =>
                    e.currentTarget.parentElement?.scrollTo({ top: 0 })
                  }
                >
                  ↑
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Instant Data Feed"
              description="Using scroll-auto for chat feeds where new messages should appear instantly without animation lag."
              code={`<div class="scroll-auto h-64 overflow-y-auto flex flex-col-reverse p-4 bg-slate-900">
  <div class="message">User: Hello!</div>
</div>`}
            >
              <div className="scroll-auto h-40 overflow-y-auto bg-slate-900 rounded-lg p-4 border border-slate-800 flex flex-col gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-slate-800 p-2 rounded text-xs text-slate-300 self-start"
                  >
                    Message {i}
                  </div>
                ))}
                <div className="bg-blue-600 p-2 rounded text-xs text-white self-end">
                  New message! (Instant)
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Confusing it with manual scrolling",
                reason:
                  "`scroll-behavior` does NOT change the physics or speed of the user swiping or using the mouse wheel. It only affects programmatic jumps (links/JS).",
                example: `<div class="scroll-smooth"> `,
              },
              {
                title: "Not setting it on the scroll container",
                reason:
                  "It must be applied to the element that actually has the scrollbar (often `html`, `body`, or a `div` with `overflow-y-auto`).",
                example: `<body>
  <div class="scroll-smooth">...</div> </body>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Global Smooth Scroll:",
                text: "Add `scroll-smooth` to the `html` tag in your root layout to enable smooth scrolling for all anchor links site-wide.",
              },
              {
                bold: "Accessibility:",
                text: "Tailwind's `scroll-smooth` respects the user's `prefers-reduced-motion` setting automatically in many browsers, but good practice is to wrap it in `motion-safe:scroll-smooth`.",
              },
              {
                bold: "JS Override:",
                text: "You can override CSS behavior in JS: `element.scrollIntoView({ behavior: 'auto' })` forces an instant jump even if CSS is set to smooth.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
