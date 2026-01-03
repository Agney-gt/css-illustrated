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
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const utilities = [
  {
    cls: "appearance-none",
    desc: "Removes native browser styling from form controls",
  },
  { cls: "appearance-auto", desc: "Restores browser's default appearance" },
];

export default function AppearancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Appearance"
            description="Control whether form controls use native browser styling or allow full custom UI design. Essential for brand consistency and cross-platform uniformity."
          />

          <MentalModelSection
            title="Understanding Appearance Control"
            description="Appearance utilities control the Content layer by removing or restoring native browser rendering of form controls. This enables custom styling while maintaining functionality."
            features={[
              "Removes all native browser decorations (arrows, borders, shadows)",
              "Enables complete control over form control visual design",
              "Maintains all functionality and accessibility features",
              "Varies significantly across browsers and operating systems",
              "Requires manual recreation of removed visual affordances",
            ]}
            layerAssignment="Content Layer - Controls visual rendering of form control chrome"
            browserBehavior="Browser either renders native controls (auto) or strips styling to expose the underlying element for custom CSS (none)"
          />

          <ComparisonTable
            title="Appearance vs Other Form Control Utilities"
            columns={[
              "Utility",
              "What It Changes",
              "When to Use",
              "Impact on Functionality",
            ]}
            rows={[
              {
                feature: "appearance-none",
                values: [
                  "Removes native styling",
                  "Custom UI needed",
                  "None - fully functional",
                ],
              },
              {
                feature: "appearance-auto",
                values: [
                  "Restores browser default",
                  "Standard UI desired",
                  "None - fully functional",
                ],
              },
              {
                feature: "accent-color",
                values: [
                  "Control highlight color",
                  "Brand consistency",
                  "None - visual only",
                ],
              },
              {
                feature: "pointer-events",
                values: [
                  "Event handling",
                  "Interaction control",
                  "May disable interaction",
                ],
              },
            ]}
          />

          <UtilityGrid title="Appearance Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Compare native browser controls with custom-styled versions to
              understand when appearance-none is necessary.
            </p>

            <UtilityPlayground
              title="Appearance Playground"
              description="Toggle between native and custom appearance to see the difference in form control styling."
              options={utilities.map((u) => u.cls)}
              defaultValue="appearance-auto"
              buildMarkup={(appearanceClass, customClasses = "") => {
                return `<div class="space-y-4 ${appearanceClass} ${customClasses}">
  <select class="border border-border rounded-md px-3 py-2 pr-8 bg-background text-foreground">
    <option>Choose option</option>
    <option>Option A</option>
    <option>Option B</option>
  </select>

  <div class="flex items-center gap-4">
    <label class="flex items-center gap-2">
      <input type="checkbox" class="w-4 h-4 border border-border rounded" />
      Accept terms
    </label>

    <label class="flex items-center gap-2">
      <input type="radio" name="choice" class="w-4 h-4 border border-border rounded-full" />
      Option 1
    </label>

    <label class="flex items-center gap-2">
      <input type="radio" name="choice" class="w-4 h-4 border border-border rounded-full" />
      Option 2
    </label>
  </div>
</div>`;
              }}
              renderPreview={(appearanceClass, customClasses = "") => {
                return (
                  <div
                    className={`space-y-4 ${appearanceClass} ${customClasses}`}
                  >
                    <select className="border border-border rounded-md px-3 py-2 pr-8 bg-background text-foreground">
                      <option>Choose option</option>
                      <option>Option A</option>
                      <option>Option B</option>
                    </select>

                    <div className="flex items-center gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border border-border rounded"
                        />
                        Accept terms
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="choice"
                          className="w-4 h-4 border border-border rounded-full"
                        />
                        Option 1
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="choice"
                          className="w-4 h-4 border border-border rounded-full"
                        />
                        Option 2
                      </label>
                    </div>
                  </div>
                );
              }}
            />
          </section>

          <InteractiveChallenge
            title="The Double Arrow Problem"
            description="We've added a custom chevron icon to this select menu, but the browser is still rendering its default arrow on top of it! Use 'appearance-none' to strip away the native styling so only our custom icon shows."
            codeSnippet={`<div class="relative w-64">
  <div class="absolute right-3 top-3 pointer-events-none text-slate-500">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
  </div>

  <select class="{input} w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-700 focus:ring-2 focus:ring-blue-500">
    <option>Select a country...</option>
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
</div>`}
            options={[
              "appearance-auto",
              "border-none",
              "outline-none",
              "appearance-none",
            ]}
            correctOption="appearance-none"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-900 p-8 rounded-lg">
                <div className="relative w-64">
                  {/* Custom Arrow */}
                  <div className="absolute right-3 top-3 pointer-events-none text-slate-500 z-10">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>

                  <select
                    className={`
                      w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-4 py-2 text-slate-700 dark:text-slate-200 
                      focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow cursor-pointer
                      ${userClass}
                    `}
                  >
                    <option>Select a country...</option>
                    <option>India</option>
                    <option>United States</option>
                    <option>Canada</option>
                  </select>

                  {/* Visualizer for 'Double Arrow' (Native + Custom) */}
                  {userClass !== "appearance-none" && (
                    <div className="absolute -right-24 top-2 bg-red-100 text-red-600 text-[10px] px-2 py-1 rounded border border-red-200 animate-pulse">
                      ⬅ Double Arrows!
                    </div>
                  )}

                  {/* Success Indicator */}
                  {userClass === "appearance-none" && (
                    <div className="absolute -right-24 top-2 bg-green-100 text-green-600 text-[10px] px-2 py-1 rounded border border-green-200 animate-in fade-in zoom-in">
                      Clean UI! ✨
                    </div>
                  )}
                </div>
              </div>
            )}
          />

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Custom select with arrow"
              description="Replace native dropdown arrow with custom icon for brand consistency."
              code={`<div class="relative">
  <!-- Layout: positioning context for custom arrow -->
  <select class="appearance-none w-full border border-border rounded-md px-3 py-2 pr-8 bg-background text-foreground">
    <option>Select country</option>
    <option>United States</option>
    <option>Canada</option>
    <option>United Kingdom</option>
  </select>
  <!-- Content: custom arrow positioned absolutely -->
  <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
    <svg class="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>`}
            >
              <div className="relative w-64">
                <select className="appearance-none w-full border border-border rounded-md px-3 py-2 pr-8 bg-background text-foreground">
                  <option>Select country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Custom checkbox design"
              description="Create brand-consistent checkboxes with custom checkmark animations."
              code={`<label class="flex items-center gap-2 cursor-pointer">
  <!-- Layout: positioning context for custom checkbox -->
  <input type="checkbox" class="appearance-none w-5 h-5 border-2 border-border rounded-sm 
                                checked:bg-primary checked:border-primary relative" />
  <!-- Content: custom checkmark -->
  <div class="absolute w-5 h-5 flex items-center justify-center pointer-events-none">
    <svg class="w-3 h-3 text-white hidden peer-checked:block" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>
  </div>
  <span>Remember me</span>
</label>`}
            >
              <label className="flex items-center gap-2 cursor-pointer relative">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  defaultChecked
                />
                <div className="w-5 h-5 border-2 border-border rounded-sm peer-checked:bg-primary peer-checked:border-primary flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white hidden peer-checked:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Remember me</span>
              </label>
            </ExampleCard>

            <ExampleCard
              title="Toggle switch UI"
              description="Convert native checkbox into custom toggle switch for modern interfaces."
              code={`<label class="flex items-center gap-2 cursor-pointer">
  <!-- Layout: hidden native checkbox -->
  <input type="checkbox" class="appearance-none sr-only" />
  <!-- Content: custom toggle design -->
  <div class="relative w-11 h-6 bg-gray-200 rounded-full transition-colors 
               peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary/20">
    <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md 
                 transition-transform peer-checked:translate-x-5"></div>
  </div>
  <span>Enable notifications</span>
</label>`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full transition-colors peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary/20">
                  <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform peer-checked:translate-x-5"></div>
                </div>
                <span>Enable notifications</span>
              </label>
            </ExampleCard>

            <ExampleCard
              title="File input redesign"
              description="Style file input with custom button for drag-and-drop support."
              code={`<div class="relative">
  <!-- Layout: hidden native input -->
  <input type="file" class="appearance-none sr-only" id="file-upload" />
  <!-- Content: custom upload interface -->
  <label for="file-upload" class="flex flex-col items-center justify-center w-full h-32 
                                  border-2 border-dashed border-border rounded-lg cursor-pointer 
                                  hover:border-primary/50 hover:bg-muted/50 transition-colors">
    <svg class="w-8 h-8 text-muted-foreground mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
    <p class="text-sm text-muted-foreground">Click to upload or drag and drop</p>
  </label>
</div>`}
            >
              <div className="relative">
                <input type="file" className="sr-only" id="file-upload" />
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 hover:bg-muted/50 transition-colors"
                >
                  <svg
                    className="w-8 h-8 text-muted-foreground mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                </label>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Removing appearance without recreating affordances",
                reason:
                  "Users lose visual indicators like dropdown arrows and checkmarks, making controls unusable.",
                example: `<select class="appearance-none">
  <option>Option</option>
</select>
<!-- No visual indication it's a dropdown -->`,
              },
              {
                title: "Breaking accessibility with custom controls",
                reason:
                  "Custom controls may lose keyboard navigation, screen reader announcements, and focus states.",
                example: `<div class="custom-checkbox">
  <!-- No :focus styles, no ARIA attributes -->
</div>`,
              },
              {
                title: "Not handling disabled state",
                reason:
                  "Native disabled controls get gray styling automatically; custom controls need explicit disabled styling.",
                example: `<input type="checkbox" class="appearance-none custom-checkbox" disabled />
<!-- No visual indication of disabled state -->`,
              },
              {
                title: "Ignoring cross-browser differences",
                reason:
                  "Different browsers have varying native appearances; custom styling may not work consistently.",
                example: `<select class="appearance-none custom-select">
  <!-- May work in Chrome but break in Safari -->
</select>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              {
                bold: "Always add affordances:",
                text: "Replace removed arrows, checkmarks, and other visual indicators with custom equivalents.",
              },
              {
                bold: "Maintain accessibility:",
                text: "Include focus styles, keyboard navigation, and proper ARIA attributes.",
              },
              {
                bold: "Test across browsers:",
                text: "Native appearance varies significantly; test custom controls on all target browsers.",
              },
              {
                bold: "Handle all states:",
                text: "Implement hover, focus, active, and disabled states for custom controls.",
              },
              {
                bold: "Use semantic HTML:",
                text: "Keep native input elements in DOM even when styling them custom.",
              },
              {
                bold: "Consider progressive enhancement:",
                text: "Start with appearance-auto and layer appearance-none for enhanced experiences.",
              },
              {
                bold: "Maintain contrast:",
                text: "Ensure custom controls meet WCAG contrast requirements in all states.",
              },
              {
                bold: "Document behavior:",
                text: "Document how custom controls behave for developers maintaining the code.",
              },
              {
                bold: "Performance considerations:",
                text: "Custom controls may have performance impact vs native controls.",
              },
              {
                bold: "User testing:",
                text: "Custom form behaviors need testing with assistive technologies and various devices.",
              },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
