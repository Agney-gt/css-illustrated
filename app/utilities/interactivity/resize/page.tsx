"use client";

import React, { useState } from "react";
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
  { className: "resize", desc: "Resize both horizontally and vertically" },
  { className: "resize-x", desc: "Resize horizontally only" },
  { className: "resize-y", desc: "Resize vertically only" },
  { className: "resize-none", desc: "Disable resizing" },
];

export default function ResizePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Resize"
            description="Control whether and how elements like textareas can be resized by the user. Essential for maintaining layout integrity in forms."
          />

          <MentalModelSection
            title="Understanding Resize Control"
            description="The CSS resize property gives users control over an element's dimensions via a drag handle. By default, textareas are resizable in both directions, which can break meticulous layouts. These utilities put you back in charge."
            features={[
              "Applied primarily to <textarea> elements",
              "Can restrict resizing to one axis (vertical or horizontal)",
              "resize-none is crucial for fixed-layout designs",
              "Works on any element with 'overflow: auto/scroll/hidden'",
              "Browser support is universal for textareas",
            ]}
            layerAssignment="Interactivity Layer - Controls user-driven dimension changes"
            browserBehavior="Adds a resize handle to the bottom-right corner of the element, allowing the user to override width/height styles."
          />

          <ComparisonTable
            title="Resize Strategies"
            columns={["Class", "Allowed Direction", "Best Use Case"]}
            rows={[
              {
                feature: "resize-none",
                values: ["None", "Fixed-height forms, Chat inputs"],
              },
              {
                feature: "resize-y",
                values: ["Vertical only", "Blog comments, Feedback forms"],
              },
              {
                feature: "resize-x",
                values: ["Horizontal only", "Split-pane layouts"],
              },
              {
                feature: "resize",
                values: ["Both", "Free-form text editors"],
              },
            ]}
          />

          <UtilityGrid
            title="Resize Utilities"
            items={utilities.map((u) => ({ cls: u.className, desc: u.desc }))}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Drag the resize handle (bottom-right corner) to see how each
              utility behaves.
            </p>

            <UtilityPlayground
              title="Resize Playground"
              description="Switch resize modes on a standard textarea."
              options={utilities.map((u) => u.className)}
              defaultValue="resize"
              buildMarkup={(resizeClass, customClasses = "") => {
                return `<textarea
  class="${resizeClass} w-full h-32 rounded-lg border border-slate-300 p-3 shadow-sm ${customClasses}"
  placeholder="Try resizing me..."
></textarea>`;
              }}
              renderPreview={(resizeClass, customClasses = "") => {
                return (
                  <div className="w-full max-w-md p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <textarea
                      className={`${resizeClass} w-full h-32 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${customClasses}`}
                      placeholder="Try resizing me..."
                    ></textarea>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Layout Breaker"
            description="This sidebar feedback form is compact. However, the textarea allows horizontal resizing, which lets users stretch it outside the sidebar, breaking the layout. Restrict it to only resize vertically."
            codeSnippet={`<aside class="w-64 bg-slate-900 text-white p-4 rounded-lg shadow-xl">
  <h3 class="font-bold text-sm mb-3">Send Feedback</h3>
  
  <form class="space-y-3">
    <input type="email" placeholder="Your email" class="w-full rounded px-2 py-1 text-black text-sm" />
    
    <textarea 
      class="{input} w-full h-24 rounded px-2 py-1 text-black text-sm" 
      placeholder="Message..."
    ></textarea>
    
    <button class="w-full bg-blue-600 rounded py-1 text-sm font-bold">Send</button>
  </form>
</aside>`}
            options={["resize", "resize-x", "resize-y", "resize-none"]}
            correctOption="resize-y"
            renderPreview={(userClass) => (
              <div className="flex items-start justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg relative overflow-hidden">
                {/* Visual Constraint Line */}
                <div className="absolute top-0 bottom-0 left-[calc(50%+8rem)] border-l-2 border-dashed border-red-400/30 pl-2 text-[10px] text-red-400 pt-2 hidden sm:block">
                  Sidebar Edge
                </div>

                <aside className="w-64 bg-slate-900 text-white p-4 rounded-lg shadow-xl z-10 shrink-0">
                  <h3 className="font-bold text-sm mb-3 text-slate-200">
                    Send Feedback
                  </h3>

                  <form
                    className="space-y-3"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded px-2 py-1.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                      className={`
                        w-full h-24 rounded px-2 py-1.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                        ${userClass}
                      `}
                      placeholder="Message..."
                    ></textarea>

                    <button className="w-full bg-blue-600 hover:bg-blue-500 transition-colors rounded py-1.5 text-sm font-bold">
                      Send
                    </button>
                  </form>
                </aside>

                {/* Success Indicator */}
                {userClass === "resize-y" && (
                  <div className="absolute bottom-6 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 animate-in fade-in zoom-in">
                    <span className="text-lg">↕️</span> Safe! Vertical resize
                    only.
                  </div>
                )}

                {/* Failure Indicator */}
                {(userClass === "resize" || userClass === "resize-x") && (
                  <div className="absolute bottom-6 bg-red-100 text-red-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 animate-in fade-in">
                    <span className="text-lg">↔️</span> Unsafe! Can break width.
                  </div>
                )}
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Chat message input"
              description="Supports longer messages by expanding vertically without breaking the layout width."
              code={`<div class="rounded-xl bg-slate-900 p-4 max-w-sm mx-auto">
  <textarea
    class="resize-y w-full h-20 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Type a message..."
  ></textarea>
</div>`}
            >
              <div className="rounded-xl bg-slate-900 p-4 w-full max-w-xs mx-auto">
                <textarea
                  className="resize-y w-full h-20 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type a message..."
                ></textarea>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Structured form feedback"
              description="Keeps forms aligned and predictable by disabling resizing entirely."
              code={`<div class="space-y-2 rounded-xl bg-white p-4 shadow border max-w-sm mx-auto">
  <label class="text-sm font-medium text-slate-700">Feedback</label>
  <textarea
    class="resize-none w-full h-24 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Share your thoughts"
  ></textarea>
</div>`}
            >
              <div className="space-y-2 rounded-xl bg-white dark:bg-slate-900 p-4 shadow-sm border border-slate-200 dark:border-slate-700 w-full max-w-xs mx-auto">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Feedback
                </label>
                <textarea
                  className="resize-none w-full h-24 rounded-lg border border-slate-300 dark:border-slate-600 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your thoughts"
                ></textarea>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Code Snippet Editor"
              description="Horizontal resizing can be useful for code editors where lines might be long."
              code={`<div class="rounded-xl bg-slate-950 p-4 max-w-sm mx-auto">
  <textarea
    class="resize-x w-full h-20 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 font-mono text-xs text-green-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
    placeholder="const message = 'Hello world'"
  ></textarea>
</div>`}
            >
              <div className="rounded-xl bg-slate-950 p-4 w-full max-w-xs mx-auto">
                <textarea
                  className="resize-x w-full h-20 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 font-mono text-xs text-green-400 focus:outline-none focus:ring-2 focus:ring-slate-600"
                  placeholder="const message = 'Hello world'"
                ></textarea>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Allowing horizontal resize in fixed layouts",
                reason:
                  "If a container has a fixed width or flex layout, expanding a textarea horizontally can cause overflow or break the grid.",
                example: `<div class="w-64">
  <textarea class="resize"></textarea> </div>`,
              },
              {
                title: "Forgetting resizing on small screens",
                reason:
                  "On mobile, resizing might not be easy or desirable. Consider disabling resize or limiting it on touch devices.",
                example: `<textarea class="resize md:resize-y"></textarea>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Chat Inputs:",
                text: "Use `resize-y` for chat inputs so users can see more text but not break the chat width.",
              },
              {
                bold: "Fixed Forms:",
                text: "Use `resize-none` for rigid forms (like login or payment) where layout stability is key.",
              },
              {
                bold: "Min/Max Height:",
                text: "Combine `resize-y` with `min-h-*` and `max-h-*` classes to prevent the textarea from becoming too small or too large.",
              },
              {
                bold: "Browser Defaults:",
                text: "Most browsers default textareas to `resize: both`. Explicitly setting a class is always safer.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
