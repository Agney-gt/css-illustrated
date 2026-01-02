"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { ExampleSection, ExampleCard } from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { RealWorldExamples } from "@/components/shared/real-world-examples";
import CodeBlock from "@/app/utilities/components/code-block";

const utilities = [
  { cls: "accent-inherit", desc: "Inherit accent color from parent" },
  { cls: "accent-current", desc: "Use current text color as accent" },
  { cls: "accent-transparent", desc: "Transparent accent color" },
  { cls: "accent-black", desc: "Black accent color" },
  { cls: "accent-white", desc: "White accent color" },
  { cls: "accent-red-50", desc: "Very light red accent" },
  { cls: "accent-red-100", desc: "Light red accent" },
  { cls: "accent-red-200", desc: "Soft red accent" },
  { cls: "accent-red-300", desc: "Muted red accent" },
  { cls: "accent-red-400", desc: "Medium red accent" },
  { cls: "accent-red-500", desc: "Base red accent" },
  { cls: "accent-red-600", desc: "Strong red accent" },
  { cls: "accent-red-700", desc: "Dark red accent" },
  { cls: "accent-red-800", desc: "Deeper red accent" },
  { cls: "accent-red-900", desc: "Very dark red accent" },
  { cls: "accent-red-950", desc: "Near-black red accent" },
  { cls: "accent-orange-50", desc: "Very light orange accent" },
  { cls: "accent-orange-100", desc: "Light orange accent" },
  { cls: "accent-orange-200", desc: "Soft orange accent" },
  { cls: "accent-orange-300", desc: "Muted orange accent" },
  { cls: "accent-orange-400", desc: "Medium orange accent" },
  { cls: "accent-orange-500", desc: "Base orange accent" },
  { cls: "accent-orange-600", desc: "Strong orange accent" },
  { cls: "accent-orange-700", desc: "Dark orange accent" },
  { cls: "accent-orange-800", desc: "Deeper orange accent" },
  { cls: "accent-orange-900", desc: "Very dark orange accent" },
  { cls: "accent-orange-950", desc: "Near-black orange accent" },
  { cls: "accent-yellow-50", desc: "Very light yellow accent" },
  { cls: "accent-yellow-500", desc: "Base yellow accent" },
  { cls: "accent-yellow-950", desc: "Very dark yellow accent" },
  { cls: "accent-amber-50", desc: "Very light amber accent" },
  { cls: "accent-amber-500", desc: "Base amber accent" },
  { cls: "accent-amber-950", desc: "Very dark amber accent" },
  { cls: "accent-lime-50", desc: "Very light lime accent" },
  { cls: "accent-lime-500", desc: "Base lime accent" },
  { cls: "accent-lime-950", desc: "Very dark lime accent" },
  { cls: "accent-green-50", desc: "Very light green accent" },
  { cls: "accent-green-500", desc: "Base green accent" },
  { cls: "accent-green-950", desc: "Very dark green accent" },
  { cls: "accent-emerald-50", desc: "Very light emerald accent" },
  { cls: "accent-emerald-500", desc: "Base emerald accent" },
  { cls: "accent-emerald-950", desc: "Very dark emerald accent" },
  { cls: "accent-teal-50", desc: "Very light teal accent" },
  { cls: "accent-teal-500", desc: "Base teal accent" },
  { cls: "accent-teal-950", desc: "Very dark teal accent" },
  { cls: "accent-blue-50", desc: "Very light blue accent" },
  { cls: "accent-blue-500", desc: "Primary blue accent" },
  { cls: "accent-blue-950", desc: "Very dark blue accent" },
  { cls: "accent-sky-50", desc: "Very light sky accent" },
  { cls: "accent-sky-500", desc: "Base sky accent" },
  { cls: "accent-sky-950", desc: "Very dark sky accent" },
  { cls: "accent-cyan-50", desc: "Very light cyan accent" },
  { cls: "accent-cyan-500", desc: "Base cyan accent" },
  { cls: "accent-cyan-950", desc: "Very dark cyan accent" },
  { cls: "accent-purple-50", desc: "Very light purple accent" },
  { cls: "accent-purple-500", desc: "Base purple accent" },
  { cls: "accent-purple-950", desc: "Very dark purple accent" },
  { cls: "accent-pink-50", desc: "Very light pink accent" },
  { cls: "accent-pink-500", desc: "Base pink accent" },
  { cls: "accent-pink-950", desc: "Very dark pink accent" },
  { cls: "accent-rose-50", desc: "Very light rose accent" },
  { cls: "accent-rose-500", desc: "Base rose accent" },
  { cls: "accent-rose-950", desc: "Very dark rose accent" },
  { cls: "accent-neutral-50", desc: "Very light neutral accent" },
  { cls: "accent-neutral-500", desc: "Base neutral accent" },
  { cls: "accent-neutral-950", desc: "Very dark neutral accent" },
  { cls: "accent-slate-50", desc: "Very light slate accent" },
  { cls: "accent-slate-500", desc: "Base slate accent" },
  { cls: "accent-slate-950", desc: "Very dark slate accent" },
];

export default function AccentColorPage() {
  const [accentClass, setAccentClass] = useState("accent-blue-500");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero 
            title="Accent Color"
            description="Control the highlight color of native form controls like checkboxes, radio buttons, and range inputs. Match your brand without custom CSS."
          />

          <MentalModelSection
            title="Understanding Accent Color Architecture"
            description="Accent color is a Content layer utility that modifies the appearance of native browser controls. It affects only the highlight/active state of form elements, not their base styling."
            features={[
              "Only affects native controls (checkboxes, radios, range inputs)",
              "Does not work on text inputs, select elements, or custom components",
              "Inherited from parent elements unless explicitly set",
              "Respects system color schemes and accessibility preferences",
              "Applies to the active/hover state, not the default state"
            ]}
            layerAssignment="Content Layer - Controls appearance of native form control highlights"
            browserBehavior="Browser applies accent color to control's active state when user interacts with the element"
          />

          <ComparisonTable
            title="Accent Color vs Other Color Utilities"
            columns={["Utility", "What It Controls", "Applied To", "Effect on Custom Components"]}
            rows={[
              {
                feature: "accent-color",
                values: ["Native control highlights", "Form controls", "None - browser ignores"]
              },
              {
                feature: "text-color", 
                values: ["Text content", "Text elements", "Directly sets text color"]
              },
              {
                feature: "border-color", 
                values: ["Element borders", "Any element", "Directly sets border color"]
              },
              {
                feature: "background-color", 
                values: ["Element backgrounds", "Any element", "Directly sets background"]
              }
            ]}
          />

          <UtilityGrid
            title="Accent Color Utilities"
            items={utilities}
          />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">Experiment with different accent colors on native form controls to see how they affect user experience and brand consistency.</p>

            <UtilityPlayground
              title="Accent Color Playground"
              description="Test accent colors on various form controls to understand their behavior and limitations."
              options={utilities.map(u => u.cls)}
              defaultValue="accent-blue-500"
              buildMarkup={(accentClass, customClasses = "") => {
                return `<div class="space-y-4 ${accentClass} ${customClasses}">
  <label class="flex items-center gap-2">
    <input type="checkbox" checked />
    Accept terms and conditions
  </label>

  <div class="space-y-2">
    <label class="flex items-center gap-2">
      <input type="radio" name="plan" checked />
      Monthly plan
    </label>
    <label class="flex items-center gap-2">
      <input type="radio" name="plan" />
      Annual plan
    </label>
  </div>

  <div class="space-y-2">
    <label class="block text-sm font-medium">Price range</label>
    <input type="range" min="0" max="100" value="50" />
    <span class="text-sm text-muted-foreground">$50/month</span>
  </div>
</div>`
              }}
              renderPreview={(accentClass, customClasses = "") => {
                return (
                  <div className={`space-y-4 ${accentClass} ${customClasses}`}>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      Accept terms and conditions
                    </label>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="radio" name="plan" defaultChecked />
                        Monthly plan
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="radio" name="plan" />
                        Annual plan
                      </label>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Price range</label>
                      <input type="range" min="0" max="100" defaultValue="50" />
                      <span className="text-sm text-muted-foreground">$50/month</span>
                    </div>
                  </div>
                )
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Brand-consistent forms"
              description="Match your brand colors without custom CSS on checkboxes and radios."
              code={`<form class="accent-indigo-500 space-y-4">
  <label class="flex items-center gap-2">
    <input type="checkbox" checked />
    Subscribe to newsletter
  </label>
  
  <fieldset class="space-y-2">
    <legend>Choose plan:</legend>
    <label class="flex items-center gap-2">
      <input type="radio" name="plan" checked />
      Monthly ($9/mo)
    </label>
    <label class="flex items-center gap-2">
      <input type="radio" name="plan" />
      Annual ($90/year)
    </label>
  </fieldset>
</form>`}
            >
              <form className="accent-indigo-500 space-y-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  Subscribe to newsletter
                </label>
                
                <fieldset className="space-y-2">
                  <legend className="text-sm font-medium">Choose plan:</legend>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="plan" defaultChecked />
                    Monthly ($9/mo)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="plan" />
                    Annual ($90/year)
                  </label>
                </fieldset>
              </form>
            </ExampleCard>

            <ExampleCard
              title="Status-based accent colors"
              description="Use semantic colors to indicate action severity and purpose."
              code={`<div class="space-y-6">
  <!-- Success actions -->
  <div class="accent-green-500">
    <label class="flex items-center gap-2">
      <input type="checkbox" checked />
      Enable automatic updates
    </label>
  </div>

  <!-- Warning actions -->
  <div class="accent-amber-500">
    <label class="flex items-center gap-2">
      <input type="checkbox" />
      Skip backup verification
    </label>
  </div>

  <!-- Destructive actions -->
  <div class="accent-red-500">
    <label class="flex items-center gap-2">
      <input type="checkbox" />
      Confirm account deletion
    </label>
  </div>
</div>`}
            >
              <div className="space-y-6">
                <div className="accent-green-500">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    Enable automatic updates
                  </label>
                </div>

                <div className="accent-amber-500">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Skip backup verification
                  </label>
                </div>

                <div className="accent-red-500">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Confirm account deletion
                  </label>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Theme-aware controls"
              description="Use current color inheritance for theme consistency."
              code={`<div class="space-y-4">
  <!-- Light theme section -->
  <div class="p-4 bg-gray-50 dark:bg-gray-900">
    <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
      Light Theme Controls
    </h3>
    <div class="accent-current text-gray-900 dark:text-gray-100">
      <label class="flex items-center gap-2">
        <input type="checkbox" checked />
        Use system theme
      </label>
    </div>
  </div>

  <!-- Dark theme section -->
  <div class="p-4 bg-slate-800 text-white">
    <h3 class="text-lg font-semibold mb-2">Dark Theme Controls</h3>
    <div class="accent-current">
      <label class="flex items-center gap-2">
        <input type="checkbox" />
        Enable dark mode
      </label>
    </div>
  </div>
</div>`}
            >
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    Light Theme Controls
                  </h3>
                  <div className="accent-current text-gray-900 dark:text-gray-100">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked />
                      Use system theme
                    </label>
                  </div>
                </div>

                <div className="p-4 bg-slate-800 text-white">
                  <h3 className="text-lg font-semibold mb-2">Dark Theme Controls</h3>
                  <div className="accent-current">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" />
                      Enable dark mode
                    </label>
                  </div>
                </div>
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Using accent-color on custom components",
                reason: "Accent color only affects native browser controls, not custom-styled form elements.",
                example: `<div class="accent-blue-500">
  <!-- Custom checkbox with CSS styling -->
  <div class="custom-checkbox" />
</div>`
              },
              {
                title: "Applying to text inputs or select elements",
                reason: "Text inputs and select elements don't use accent-color for their appearance.",
                example: `<input type="text" class="accent-red-500" />
<select class="accent-green-500">...</select>`
              },
              {
                title: "Using low-contrast accent colors",
                reason: "Accent colors need sufficient contrast to be visible, especially on different backgrounds.",
                example: `<form class="accent-gray-100">
  <input type="checkbox" checked />
  <!-- Barely visible checkbox -->
</form>`
              },
              {
                title: "Relying on accent-color alone for state indication",
                reason: "Not all users will see accent colors due to browser preferences or accessibility settings.",
                example: `<label class="flex items-center gap-2">
  <input type="checkbox" checked />
  <!-- No additional visual feedback -->
</label>`
              }
            ]}
          />

          <TipsSection 
            tips={[
              { bold: "Native only:", text: "Accent color works only on native checkboxes, radio buttons, and range inputs." },
              { bold: "Semantic colors:", text: "Use brand colors for consistency, red for destructive actions, green for success." },
              { bold: "Theme awareness:", text: "Use `accent-current` or `accent-inherit` for theme-consistent controls." },
              { bold: "Contrast matters:", text: "Ensure accent colors have sufficient contrast against your background colors." },
              { bold: "Accessibility:", text: "Don't rely on color alone—provide labels and additional visual feedback." },
              { bold: "Inheritance:", text: "Accent color inherits from parent elements unless explicitly overridden." },
              { bold: "Custom overrides:", text: "Fully custom-styled controls will ignore accent-color utilities." },
              { bold: "System respect:", text: "Browsers may override accent colors based on user preferences or high contrast mode." },
              { bold: "No text input effect:", text: "Text inputs use `caret-color` and `text-color`, not accent-color." },
              { bold: "No select effect:", text: "Select elements use their own styling system, not accent-color." }
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
