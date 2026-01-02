"use client";

import { useState } from "react";
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
  { cls: "scroll-auto", desc: "Instant scrolling without animation (Default)" },
  { cls: "scroll-smooth", desc: "Smooth animated scrolling between positions" },
];

export default function ScrollBehaviorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Scroll Behavior"
            description="Control whether scrolling happens instantly or animates smoothly. Essential for anchor links and programmatic navigation."
          />

          <MentalModelSection
            title="Understanding Scroll Behavior"
            description="Scroll Behavior is an Interactivity layer utility that defines how the browser transitions between scroll positions. It specifically affects anchor link navigation and JavaScript scroll methods (like window.scrollTo)."
            features={[
              "Affects same-page anchor links (<a href='#target'>)",
              "Controls JavaScript scrollTo() and scrollIntoView() calls",
              "Can be set globally (on <html>) or on individual scroll containers",
              "Instant (auto) is preferred for long jumps or performance",
              "Smooth is preferred for context and storytelling",
            ]}
            layerAssignment="Interactivity Layer - Controls the motion physics of scroll navigation"
            browserBehavior="Browser interpolates the scroll position over time (smooth) or updates it immediately (auto) when a navigation event occurs."
          />

          <ComparisonTable
            title="Scroll Auto vs Smooth"
            columns={["Behavior", "UX Impact", "Best For", "Performance"]}
            rows={[
              {
                feature: "scroll-auto",
                values: [
                  "Instant Teleport",
                  "Fast, utilitarian",
                  "Search results, Pagination",
                  "Rocket 🚀",
                ],
              },
              {
                feature: "scroll-smooth",
                values: [
                  "Animated Glide",
                  "Contextual, cinematic",
                  "Table of Contents, Hero links",
                  "Normal 🚶",
                ],
              },
            ]}
          />

          <UtilityGrid title="Scroll Behavior Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Try clicking the link below to see the difference between instant
              and smooth scrolling.
            </p>

            <UtilityPlayground
              title="Scroll Behavior Playground"
              description="Scroll or use the link to observe behavior."
              options={utilities.map((u) => u.cls)}
              defaultValue="scroll-auto"
              buildMarkup={(scrollClass, customClasses = "") => {
                return `<div class="${scrollClass} h-52 overflow-y-auto rounded-xl border bg-slate-50 p-4 space-y-8 text-sm ${customClasses}">
                <p class="font-medium">Scroll inside the container or use the link.</p>
                
                <div class="h-40 rounded bg-slate-200"></div>
                
                <a href="#target" class="inline-block text-blue-600 underline font-medium">
                Jump to highlighted section
                </a>
                
                <div class="h-40 rounded bg-slate-200"></div>
                
                <div id="target" class="rounded-lg bg-green-600 px-4 py-3 text-white font-semibold">
                Target section
                </div>
                
                <div class="h-40 rounded bg-slate-200"></div>
                </div>`;
              }}
              renderPreview={(scrollClass, customClasses = "") => {
                return (
                  <div
                    className={`${scrollClass} h-52 overflow-y-auto rounded-xl border border-border bg-card p-4 space-y-8 text-sm ${customClasses} relative`}
                  >
                    <p className="font-medium text-foreground">
                      Scroll inside the container or use the link.
                    </p>

                    <div className="h-40 rounded bg-muted"></div>

                    {/* We use a button to simulate anchor behavior safely in React */}
                    <button
                      onClick={(e) => {
                        const container =
                          e.currentTarget.closest(".overflow-y-auto");
                        const target = container?.querySelector("#target");
                        if (target) target.scrollIntoView();
                      }}
                      className="inline-block text-blue-600 dark:text-blue-400 underline font-medium cursor-pointer"
                    >
                      Jump to highlighted section
                    </button>

                    <div className="h-40 rounded bg-muted"></div>

                    <div
                      id="target"
                      className="rounded-lg bg-green-600 px-4 py-3 text-white font-semibold scroll-mt-4"
                    >
                      Target section
                    </div>

                    <div className="h-40 rounded bg-muted"></div>
                  </div>
                );
              }}
            />
          </section>
          <InteractiveChallenge
            title="The Jump Scare"
            description="Users are getting disoriented when clicking 'Jump to Pricing'. The page snaps instantly, and they don't realize they are just further down the same page. Enable smooth scrolling to show the journey."
            initialClass="scroll-auto"
            correctClass="scroll-smooth"
            renderCode={(cls, toggle) => {
              const isCorrect = cls === "scroll-smooth";
              return (
                <div className="space-y-1 font-mono text-sm">
                  <div>
                    <CodeComment>
                      &lt;!-- Main Scroll Container --&gt;
                    </CodeComment>
                    <CodeTag>&lt;html</CodeTag>
                  </div>

                  <div className="pl-4 flex flex-wrap gap-2 items-center">
                    <span className="text-purple-400">class</span>
                    <span className="text-slate-300">=</span>
                    <span className="text-green-400">"bg-slate-900 ...</span>

                    {/* Custom Toggle Button */}
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

                  <div className="pl-4 mt-2">
                    <CodeTag>&lt;body&gt;</CodeTag>
                    <div className="pl-4 text-slate-500">...content...</div>
                    <CodeTag>&lt;/body&gt;</CodeTag>
                  </div>

                  <div>
                    <CodeTag>&lt;/html&gt;</CodeTag>
                  </div>
                </div>
              );
            }}
            renderPreview={(cls, onWin, isSolved) => (
              <div className="relative w-full h-80 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden">
                {/* The Scrollable Viewport */}
                <div
                  id="scroll-container"
                  className={`
                        w-full h-full overflow-y-auto relative p-6 space-y-12
                        /* THE UTILITY CLASS APPLIES HERE */
                        ${cls}
                      `}
                >
                  {/* Section 1: Header */}
                  <div className="text-center space-y-4 pt-10">
                    <div className="inline-block p-3 rounded-full bg-blue-500/10 text-blue-400 mb-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Product Landing Page
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Scroll down or click the button.
                    </p>

                    {/* The Trigger Link */}
                    <a
                      href="#pricing-target"
                      className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-colors"
                      onClick={(e) => {
                        // In a real app, anchor links work automatically.
                        // In this isolated preview, we force the behavior for the demo.
                        e.preventDefault();
                        const container =
                          document.getElementById("scroll-container");
                        const target =
                          document.getElementById("pricing-target");
                        if (container && target) {
                          // Manually scroll container
                          container.scrollTo({
                            top: target.offsetTop - 20,
                            behavior:
                              cls === "scroll-smooth" ? "smooth" : "auto",
                          });

                          if (cls === "scroll-smooth") {
                            setTimeout(onWin, 800); // Win after scroll animation
                          }
                        }
                      }}
                    >
                      Jump to Pricing ↓
                    </a>
                  </div>

                  {/* Spacer Content */}
                  <div className="space-y-4 opacity-30">
                    <div className="h-4 bg-slate-800 rounded w-3/4 mx-auto"></div>
                    <div className="h-4 bg-slate-800 rounded w-1/2 mx-auto"></div>
                    <div className="h-40 bg-slate-800/50 rounded border border-slate-800 border-dashed"></div>
                    <div className="h-4 bg-slate-800 rounded w-2/3 mx-auto"></div>
                  </div>

                  {/* Section 2: Target */}
                  <div
                    id="pricing-target"
                    className={`
                        p-6 rounded-xl border-2 transition-all duration-1000
                        ${
                          isSolved
                            ? "bg-green-900/20 border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
                            : "bg-slate-900 border-slate-700"
                        }
                      `}
                  >
                    <div className="text-center">
                      <h4
                        className={`text-lg font-bold mb-2 ${
                          isSolved ? "text-green-400" : "text-white"
                        }`}
                      >
                        {isSolved ? "Smooth Landing! 🪂" : "Pricing Section"}
                      </h4>
                      <div className="text-3xl font-bold text-white mb-4">
                        $99
                        <span className="text-sm text-slate-500 font-normal">
                          /mo
                        </span>
                      </div>
                      <button className="w-full py-2 bg-slate-800 text-slate-300 rounded font-mono text-xs">
                        SELECT PLAN
                      </button>
                    </div>
                  </div>

                  {/* More Spacer */}
                  <div className="h-20"></div>
                </div>

                {/* Feedback Overlay */}
                {!isSolved && cls === "scroll-auto" && (
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-2 py-1 rounded animate-pulse">
                      Mode: Instant Snap ⚡
                    </div>
                  </div>
                )}
                {isSolved && (
                  <div className="absolute top-4 right-4 pointer-events-none">
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-2 py-1 rounded">
                      Mode: Smooth Glide 🌊
                    </div>
                  </div>
                )}
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Documentation navigation"
              description="Creates a polished navigation experience for long-form content."
              code={`<div class="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-white p-4 space-y-4">
  <a href="#section" class="text-blue-600 underline font-medium">
    Jump to API section
  </a>
  <div class="h-40 bg-slate-300 rounded"></div>
  <div id="section" class="font-semibold text-lg">
    API Reference
  </div>
</div>`}
            >
              <div className="scroll-smooth h-40 overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 space-y-4 text-slate-800">
                <button
                  onClick={(e) => {
                    const container =
                      e.currentTarget.closest(".overflow-y-auto");
                    const target = container?.querySelector("#api-section");
                    if (target) target.scrollIntoView();
                  }}
                  className="text-blue-600 underline font-medium"
                >
                  Jump to API section
                </button>
                <div className="h-40 bg-slate-100 rounded"></div>
                <div
                  id="api-section"
                  className="font-semibold text-lg scroll-mt-4"
                >
                  API Reference
                </div>
                <div className="h-20 bg-slate-100 rounded"></div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Table of contents jump"
              description="Helps users orient themselves when jumping between sections."
              code={`<div class="scroll-smooth h-40 overflow-y-auto rounded-xl border bg-slate-50 p-4 space-y-6">
  <a href="#chapter3" class="font-medium text-indigo-600 underline">
    Go to chapter 3
  </a>
  <div class="h-48 bg-slate-200 rounded"></div>
  <div id="chapter3" class="text-lg font-semibold">
    Chapter 3
  </div>
</div>`}
            >
              <div className="scroll-smooth h-40 overflow-y-auto rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-6 text-slate-800">
                <button
                  onClick={(e) => {
                    const container =
                      e.currentTarget.closest(".overflow-y-auto");
                    const target = container?.querySelector("#chapter3");
                    if (target) target.scrollIntoView();
                  }}
                  className="font-medium text-indigo-600 underline"
                >
                  Go to chapter 3
                </button>
                <div className="h-48 bg-slate-200 rounded"></div>
                <div
                  id="chapter3"
                  className="text-lg font-semibold scroll-mt-4"
                >
                  Chapter 3
                </div>
                <div className="h-20 bg-slate-200 rounded"></div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Activity feed"
              description="Immediate scrolling feels faster for live or frequently updating feeds."
              code={`<div class="scroll-auto h-40 overflow-y-auto rounded-xl border bg-white p-4 space-y-3 text-sm">
  <div class="rounded bg-slate-100 px-3 py-2">User signed in</div>
  <div class="rounded bg-slate-100 px-3 py-2">Profile updated</div>
  <div class="rounded bg-slate-100 px-3 py-2">New message received</div>
  <div class="rounded bg-slate-100 px-3 py-2">Settings saved</div>
</div>`}
            >
              <div className="scroll-auto h-40 overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 space-y-3 text-sm text-slate-700">
                <div className="rounded bg-slate-100 px-3 py-2">
                  User signed in
                </div>
                <div className="rounded bg-slate-100 px-3 py-2">
                  Profile updated
                </div>
                <div className="rounded bg-slate-100 px-3 py-2">
                  New message received
                </div>
                <div className="rounded bg-slate-100 px-3 py-2">
                  Settings saved
                </div>
                <div className="rounded bg-slate-100 px-3 py-2">
                  System checked
                </div>
                <div className="rounded bg-slate-100 px-3 py-2">
                  Backup completed
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Applying to the wrong element",
                reason:
                  "Scroll behavior must be applied to the scroll container (often `html` or a specific div with `overflow: auto`), not the content inside.",
                example: `<div class="scroll-smooth">
  <div class="h-screen"></div>
</div>`,
              },
              {
                title: "Overusing smooth scroll",
                reason:
                  "Smooth scrolling on long pages (e.g., infinite scroll feeds) can feel slow or nauseating if used for every small movement.",
                example: `<div class="scroll-smooth">
  </div>`,
              },
              {
                title: "Ignoring reduced motion",
                reason:
                  "Some users suffer from motion sickness. Tailwind typically handles this, but manual JS implementations might not.",
                example: `@media (prefers-reduced-motion) {
  html { scroll-behavior: auto; }
}`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Global Setting:",
                text: "Add `scroll-smooth` to your global CSS or `html` tag for site-wide smooth anchor links.",
              },
              {
                bold: "JS Interaction:",
                text: "This CSS property affects `window.scrollTo` and `element.scrollIntoView` calls unless overridden in JS options.",
              },
              {
                bold: "Scroll Margin:",
                text: "Use `scroll-mt-*` (scroll margin top) on target elements to prevent them from being hidden behind sticky headers.",
              },
              {
                bold: "Accessibility:",
                text: "Respect `prefers-reduced-motion` settings. Tailwind includes variants for this.",
              },
              {
                bold: "Performance:",
                text: "Scroll behavior runs on the compositor thread in modern browsers, so performance impact is minimal.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
