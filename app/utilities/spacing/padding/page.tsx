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

const utilities = [
  { cls: "p-4", desc: "Padding on all sides" },
  { cls: "px-6", desc: "Horizontal padding (left & right)" },
  { cls: "py-8", desc: "Vertical padding (top & bottom)" },
  { cls: "pt-4", desc: "Padding top only" },
  { cls: "pb-4", desc: "Padding bottom only" },
  { cls: "pl-4", desc: "Padding left only" },
  { cls: "pr-4", desc: "Padding right only" },
];

export default function PaddingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Padding"
            description="Control the inner spacing of an element. Padding adds space inside an element's border, pushing content inward."
          />

          <MentalModelSection
            title="Padding vs. Margin"
            description="Padding is the 'internal pressure' of an element. It expands the element's size (unless box-sizing is border-box) and pushes children away from the edges. It takes on the background color of the element."
            features={[
              "Padding pushes content INWARD (Inner Space)",
              "Margin pushes neighbors AWAY (Outer Space)",
              "Padding is clickable and has background color",
              "Vertical padding prevents collapsing margins of children",
              "Essential for buttons, cards, and sections",
            ]}
            layerAssignment="Layout Layer - Defines internal geometry"
            browserBehavior="Padding is part of the element's box. Increasing padding increases the total computed width/height of the element."
          />

          <ComparisonTable
            title="Spacing Strategies"
            columns={["Property", "Direction", "Visual Effect", "Best For"]}
            rows={[
              {
                feature: "p-{size}",
                values: [
                  "All sides",
                  "Uniform internal space",
                  "Cards, Containers",
                ],
              },
              {
                feature: "px-{size}",
                values: [
                  "Left & Right",
                  "Widens element content",
                  "Buttons, Inputs",
                ],
              },
              {
                feature: "py-{size}",
                values: [
                  "Top & Bottom",
                  "Heightens element content",
                  "Sections, Nav Items",
                ],
              },
              {
                feature: "pt/pb-{size}",
                values: [
                  "Top/Bottom",
                  "One-sided adjustment",
                  "Lists, Card Headers",
                ],
              },
            ]}
          />

          <UtilityGrid title="Common Padding Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Adjust the padding of the container to see how it creates space
              around the inner content.
            </p>

            <UtilityPlayground
              title="Padding Playground"
              description="Switch between uniform, vertical, and horizontal padding."
              options={["p-0", "p-8", "px-8", "py-8", "pl-12"]}
              defaultValue="p-0"
              buildMarkup={(paddingClass, customClasses = "") => {
                return `<div class="${paddingClass} bg-blue-500 text-white rounded-lg ${customClasses}">
  <div class="bg-white/20 border-2 border-white/50 border-dashed rounded p-4 text-center">
    Content Area
  </div>
</div>`;
              }}
              renderPreview={(paddingClass, customClasses = "") => {
                return (
                  <div
                    className={`bg-slate-100 dark:bg-slate-900 border border-border rounded-xl p-8 flex items-center justify-center`}
                  >
                    <div
                      className={`${paddingClass} bg-blue-500 text-white rounded-lg shadow-lg transition-all duration-300 ${customClasses}`}
                    >
                      <div className="bg-white/20 border-2 border-white/50 border-dashed rounded p-4 text-center text-sm font-medium">
                        Content Area
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Claustrophobic Card"
            description="This pricing card looks broken because the text is jammed against the edges. Add padding to give the content some breathing room."
            codeSnippet={`<div class="relative max-w-sm rounded-2xl bg-slate-900 shadow-2xl overflow-hidden">
    <div class="{input}">
      <div class="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      
      <h3 class="text-xl font-bold text-white mb-1">Pro Plan</h3>
      <div class="text-3xl font-bold text-white mb-4">
        $29<span class="text-sm font-normal text-slate-400">/mo</span>
      </div>
      
      <button class="w-full py-2 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200">
        Subscribe
      </button>
    </div>
  </div>`}
            options={["p-0", "p-2", "p-8", "m-8"]}
            correctOption="p-8"
            renderPreview={(userClass) => (
              <div className="relative w-full h-80 bg-slate-100 rounded-xl shadow-inner border border-slate-200 flex flex-col items-center justify-center p-8">
                {/* The Target Card */}
                <div
                  className={`
                      w-64 bg-slate-900 text-white rounded-2xl shadow-xl transition-all duration-500
                      flex flex-col items-start overflow-hidden
                      ${userClass === "p-8" ? "scale-105" : "scale-90"}
                    `}
                >
                  <div
                    className={`${userClass} transition-all duration-500 w-full`}
                  >
                    <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Pro Plan</h3>
                    <div className="text-3xl font-bold mb-4">
                      $29
                      <span className="text-sm font-normal text-slate-400">
                        /mo
                      </span>
                    </div>
                    <button className="w-full py-2 bg-white text-slate-900 rounded-lg font-bold text-sm hover:bg-slate-200 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Visualizer for Padding */}
                {userClass === "p-8" && (
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-in fade-in zoom-in duration-700">
                    <div className="w-64 h-[calc(100%-4rem)] border-2 border-green-400/30 rounded-2xl relative">
                      <div className="absolute top-0 left-0 w-8 h-full bg-green-400/10 border-r border-green-400/30"></div>
                      <div className="absolute top-0 right-0 w-8 h-full bg-green-400/10 border-l border-green-400/30"></div>
                      <div className="absolute top-0 left-0 w-full h-8 bg-green-400/10 border-b border-green-400/30"></div>
                      <div className="absolute bottom-0 left-0 w-full h-8 bg-green-400/10 border-t border-green-400/30"></div>
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded">
                        p-8 (32px)
                      </span>
                    </div>
                  </div>
                )}

                {/* Error Overlay */}
                {userClass === "p-0" && (
                  <div className="absolute bottom-6 bg-red-100 text-red-600 text-xs px-3 py-1.5 rounded-full font-bold animate-pulse">
                    Content is touching the edges!
                  </div>
                )}
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Button Sizes"
              description="Using px (horizontal) and py (vertical) to create balanced buttons."
              code={`<div class="flex gap-4 items-center">
  <button class="px-3 py-1 bg-slate-200 rounded text-sm">Small</button>
  <button class="px-4 py-2 bg-blue-600 text-white rounded">Default</button>
  <button class="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg">Large</button>
</div>`}
            >
              <div className="flex gap-4 items-center justify-center p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <button className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded text-sm hover:bg-slate-300 transition">
                  Small
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition shadow-sm">
                  Default
                </button>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition shadow-md">
                  Large
                </button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Card Content"
              description="Applying padding to a card body while keeping the image flush."
              code={`<div class="rounded-xl overflow-hidden border">
  <img src="..." class="w-full h-32 bg-slate-200" />
  <div class="p-6">
    <h3 class="font-bold">Card Title</h3>
    <p>Card description...</p>
  </div>
</div>`}
            >
              <div className="max-w-xs mx-auto bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="w-full h-32 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                  Image Area
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-1">Card Title</h3>
                  <p className="text-slate-500 text-sm">
                    Padding creates space between these words and the border.
                  </p>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="List Items"
              description="Padding makes list items clickable and readable."
              code={`<ul class="divide-y">
  <li class="py-4">Item 1</li>
  <li class="py-4">Item 2</li>
  <li class="py-4">Item 3</li>
</ul>`}
            >
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 max-w-sm mx-auto px-6">
                <ul className="divide-y divide-slate-100 dark:divide-slate-800">
                  <li className="py-4 text-sm hover:text-blue-500 cursor-pointer">
                    Inbox
                  </li>
                  <li className="py-4 text-sm hover:text-blue-500 cursor-pointer">
                    Starred
                  </li>
                  <li className="py-4 text-sm hover:text-blue-500 cursor-pointer">
                    Sent
                  </li>
                </ul>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="Common Mistakes"
            mistakes={[
              {
                title: "Height vs Padding",
                reason:
                  "Don't use fixed heights for buttons or containers containing text. Use vertical padding (`py-*`) instead so the element grows with the content.",
                example: `<button class="h-10">...</button> <button class="py-2">...</button> `,
              },
              {
                title: "Inconsistent Spacing",
                reason:
                  "Using random padding values (p-3 here, p-5 there) makes the UI look messy. Stick to a scale (p-4, p-6, p-8).",
                example: `<div class="p-[17px]">...</div> `,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Click Area:",
                text: "Padding increases the clickable area of links and buttons. Use generous padding on mobile for better touch targets.",
              },
              {
                bold: "Backgrounds:",
                text: "Remember that background colors and images extend into the padding area.",
              },
              {
                bold: "Box Sizing:",
                text: "Tailwind uses `box-sizing: border-box` by default, so padding is included in width calculations.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
