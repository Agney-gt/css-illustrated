"use client";

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

export default function FontWeightPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
            <PageHero
              title="Font Weight Utilities"
              description="Master CSS font-weight utilities to control text thickness and create visual emphasis. Learn how to use font weights for hierarchy, readability, and brand consistency."
            />

            <MentalModelSection
              title="Understanding Font Weight Architecture"
              description="Font weight controls the thickness of characters, affecting readability and visual hierarchy. Proper weight usage guides users through content and establishes brand personality."
              features={[
                "Font weight establishes visual hierarchy and emphasis",
                "Different weights affect readability at various sizes",
                "Font availability limits weight options (variable fonts help)",
                "Weight combinations create consistent design systems",
                "Contrast between weights improves information scanning",
              ]}
              layerAssignment="Typography Layer - Controls text thickness and visual emphasis"
              browserBehavior="Browser renders text at specified weight, falling back to closest available weight if exact weight isn't available in the font"
            />

            <ComparisonTable
              title="Font Weight Categories"
              columns={[
                "Weight Range",
                "Use Cases",
                "Readability",
                "Visual Impact",
              ]}
              rows={[
                {
                  feature: "Thin (100-300)",
                  values: [
                    "Large headlines, decorative",
                    "Poor at small sizes",
                    "Delicate, elegant",
                    "Brand expression",
                  ],
                },
                {
                  feature: "Normal (400)",
                  values: [
                    "Body text, paragraphs",
                    "Excellent readability",
                    "Standard, neutral",
                    "Base content",
                  ],
                },
                {
                  feature: "Medium (500-600)",
                  values: [
                    "Subheadings, emphasis",
                    "Good readability",
                    "Moderate emphasis",
                    "Information hierarchy",
                  ],
                },
                {
                  feature: "Bold (700-900)",
                  values: [
                    "Headlines, important text",
                    "Good in moderation",
                    "Strong emphasis",
                    "Critical information",
                  ],
                },
              ]}
            />

            <UtilityGrid
              title="Font Weight Utilities"
              items={[
                { cls: "font-thin", desc: "100 weight" },
                { cls: "font-extralight", desc: "200 weight" },
                { cls: "font-light", desc: "300 weight" },
                { cls: "font-normal", desc: "400 weight (default)" },
                { cls: "font-medium", desc: "500 weight" },
                { cls: "font-semibold", desc: "600 weight" },
                { cls: "font-bold", desc: "700 weight" },
                { cls: "font-extrabold", desc: "800 weight" },
                { cls: "font-black", desc: "900 weight" },
              ]}
            />

            <section className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold">Font Weight Playground</h2>
              <p className="text-muted-foreground">
                Experiment with different font weights and see how they affect
                readability and visual impact.
              </p>

              <UtilityPlayground
                title="Font Weight Explorer"
                description="Compare different font weights with the same content."
                options={[
                  "font-thin",
                  "font-light",
                  "font-normal",
                  "font-medium",
                  "font-semibold",
                  "font-bold",
                ]}
                defaultValue="font-normal"
                buildMarkup={(value, customClasses = "") => {
                  const classes = [value, customClasses]
                    .filter(Boolean)
                    .join(" ");
                  return `<p class="${classes}">Typography weight testing</p>`;
                }}
                renderPreview={(value, customClasses = "") => {
                  return (
                    <div className="space-y-4">
                      <p
                        className={`${value} ${customClasses} text-white text-lg`}
                      >
                        Typography weight testing
                      </p>
                      <p
                        className={`${value} ${customClasses} text-gray-300 text-sm`}
                      >
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                      </p>
                      <p
                        className={`${value} ${customClasses} text-gray-400 text-xs`}
                      >
                        Quick brown fox jumps over lazy dog
                      </p>
                    </div>
                  );
                }}
              />
            </section>

            <InteractiveChallenge
              title="The Weak Button"
              description="This primary action button looks weak and unclickable because the text is too thin (`font-light`). It blends in with the body text. Give it strength by changing the weight to `font-semibold`."
              codeSnippet={`<div class="flex gap-4 items-center p-6 bg-slate-50 rounded-lg">
  <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition {input}">
    Confirm Purchase
  </button>
  <button class="px-4 py-2 text-slate-500 font-medium hover:text-slate-800">
    Cancel
  </button>
</div>`}
              options={[
                "font-thin",
                "font-light",
                "font-normal",
                "font-semibold",
              ]}
              correctOption="font-semibold"
              renderPreview={(userClass) => (
                <div className="w-full max-w-md p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <button
                      className={`px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all ${userClass}`}
                    >
                      Confirm Purchase
                    </button>
                    <button className="px-6 py-3 text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-slate-200">
                      Cancel
                    </button>
                  </div>

                  <div className="text-center text-sm">
                    {userClass === "font-semibold" ? (
                      <span className="text-green-600 dark:text-green-400 font-medium flex items-center justify-center gap-2">
                        <span className="text-xl">💪</span> Strong and
                        clickable!
                      </span>
                    ) : userClass === "font-thin" ||
                      userClass === "font-light" ? (
                      <span className="text-red-500 font-medium">
                        Too weak! It looks disabled.
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        Standard is okay, but semibold is better for UI.
                      </span>
                    )}
                  </div>
                </div>
              )}
            />

            <ExampleSection title="Real-World Examples">
              <ExampleCard
                title="Article Headings"
                description="Bold headings with lighter body text for clear hierarchy"
                code={`<article>
  <h1 class="text-3xl font-bold">Article Title</h1>
  <h2 class="text-xl font-semibold mt-6">Section Heading</h2>
  <p class="font-normal leading-relaxed mt-4">Body text content...</p>
</article>`}
              >
                <div className="space-y-3">
                  <h1 className="text-2xl font-bold">Article Title</h1>
                  <h2 className="text-lg font-semibold">Section Heading</h2>
                  <p className="font-normal text-sm leading-relaxed">
                    Body text content with regular weight for readability.
                  </p>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Navigation Menu"
                description="Medium weight for active state, normal for inactive"
                code={`<nav>
  <a href="#" class="font-semibold text-blue-600">Active</a>
  <a href="#" class="font-normal text-gray-600">Inactive</a>
</nav>`}
              >
                <nav className="flex gap-6 p-4">
                  <a href="#" className="font-semibold text-blue-600">
                    Active
                  </a>
                  <a href="#" className="font-normal text-gray-600">
                    Inactive
                  </a>
                  <a href="#" className="font-normal text-gray-600">
                    Services
                  </a>
                </nav>
              </ExampleCard>

              <ExampleCard
                title="Button States"
                description="Weight changes for different button states"
                code={`<button class="font-semibold bg-blue-600 text-white">
  Primary Action
</button>
<button class="font-normal border border-gray-300">
  Secondary Action
</button>`}
              >
                <div className="flex gap-3">
                  <button className="font-semibold bg-blue-600 text-white px-4 py-2 rounded text-sm">
                    Primary Action
                  </button>
                  <button className="font-normal border border-gray-300 px-4 py-2 rounded text-sm">
                    Secondary Action
                  </button>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Card Components"
                description="Weight hierarchy for information architecture"
                code={`<div class="bg-white p-6 rounded-lg">
  <h3 class="font-bold text-lg">Card Title</h3>
  <p class="font-medium text-gray-700 mt-2">Subtitle</p>
  <p class="font-normal text-gray-600 mt-3">Description text</p>
  <p class="font-light text-xs text-gray-500 mt-4">Metadata</p>
</div>`}
              >
                <div className="bg-white p-6 rounded-lg text-gray-900 max-w-md">
                  <h3 className="font-bold text-lg">Card Title</h3>
                  <p className="font-medium text-gray-700 mt-2">Subtitle</p>
                  <p className="font-normal text-gray-600 mt-3">
                    Description text
                  </p>
                  <p className="font-light text-xs text-gray-500 mt-4">
                    Metadata
                  </p>
                </div>
              </ExampleCard>
            </ExampleSection>

            <CommonMistakesSection
              mistakes={[
                {
                  title: "Too many weight variations",
                  reason:
                    "Using too many font weights creates inconsistent hierarchy and visual noise, making the design feel chaotic.",
                  example:
                    "font-thin font-light font-normal font-medium font-semibold font-bold font-black",
                  level: "warning",
                },
                {
                  title: "Insufficient weight contrast",
                  reason:
                    "Font weights that are too similar don't create clear hierarchy between heading levels.",
                  example: "font-normal and font-medium for headings",
                  level: "warning",
                },
                {
                  title: "Bold text for entire paragraphs",
                  reason:
                    "Large blocks of bold text are difficult to read and lose their emphasis impact.",
                  example: "font-bold on long paragraphs",
                  level: "critical",
                },
                {
                  title: "Ignoring font weight availability",
                  reason:
                    "Not all fonts support all weights, causing fallback rendering that may not match your design.",
                  example: "font-black without checking font support",
                  level: "info",
                },
              ]}
            />

            <TipsSection
              tips={[
                {
                  bold: "Establish weight scale:",
                  text: "Use 2-3 weights for clear hierarchy (normal, medium, bold)",
                },
                {
                  bold: "Consider readability:",
                  text: "Lighter weights need larger sizes for good readability",
                },
                {
                  bold: "Use weights consistently:",
                  text: "Establish patterns for headings vs body vs metadata",
                },
                {
                  bold: "Test font support:",
                  text: "Verify your chosen fonts support the weights you use",
                },
                {
                  bold: "Variable fonts:",
                  text: "Consider variable fonts for more weight options with better performance",
                },
              ]}
            />
          </div>
        </main>
      </div>
    </>
  );
}
