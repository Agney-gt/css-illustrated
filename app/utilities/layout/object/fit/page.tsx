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

export default function ObjectFitPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
            <PageHero
              title="Object Fit Utilities"
              description="Complete guide to CSS object-fit properties for controlling how replaced elements (images, videos) scale within their containers. Master contain, cover, fill, scale-down, and none for responsive layouts."
            />

            <MentalModelSection
              title="Understanding Object Fit Behavior"
              description="Object-fit controls how replaced elements fill their containing box while maintaining aspect ratio or stretching as needed. Essential for responsive images, video players, and any content that needs to adapt to different container sizes."
              features={[
                "Only applies to replaced elements (img, video, iframe, embed, object)",
                "Controls scaling behavior within defined width/height constraints",
                "Five key values: fill, contain, cover, none, scale-down",
                "Works alongside object-position for precise placement control",
                "Critical for preventing image distortion in responsive layouts",
              ]}
              layerAssignment="Content Layer - Controls scaling of replaced elements within their containers"
              browserBehavior="Browser calculates element size first, then applies object-fit to determine how content fills that space"
            />

            <ComparisonTable
              title="Object Fit Values Comparison"
              columns={["Value", "Behavior", "Aspect Ratio", "Use Case"]}
              rows={[
                {
                  feature: "fill",
                  values: [
                    "Stretches to fill",
                    "Ignores aspect ratio",
                    "Default behavior",
                    "Background patterns",
                  ],
                },
                {
                  feature: "contain",
                  values: [
                    "Scales to fit entirely",
                    "Maintains aspect ratio",
                    "May show empty space",
                    "Product galleries",
                  ],
                },
                {
                  feature: "cover",
                  values: [
                    "Fills container completely",
                    "Maintains aspect ratio",
                    "May crop content",
                    "Hero images",
                  ],
                },
                {
                  feature: "none",
                  values: [
                    "Original size",
                    "Maintains aspect ratio",
                    "No scaling",
                    "Pixel art/icons",
                  ],
                },
                {
                  feature: "scale-down",
                  values: [
                    "Smaller of contain/none",
                    "Maintains aspect ratio",
                    "Never enlarges",
                    "Responsive avatars",
                  ],
                },
              ]}
            />

            <UtilityGrid
              title="Object Fit Utilities"
              items={[
                { cls: "object-contain", desc: "Scale to fit within" },
                { cls: "object-cover", desc: "Scale to cover container" },
                { cls: "object-fill", desc: "Stretch to fill (default)" },
                { cls: "object-none", desc: "Don't scale content" },
                {
                  cls: "object-scale-down",
                  desc: "Take smaller of contain/none",
                },
              ]}
            />

            <section className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold">Interactive Playground</h2>
              <p className="text-muted-foreground">
                Experiment with different object-fit values and see how they
                affect image scaling.
              </p>

              <UtilityPlayground
                title="Object Fit Playground"
                description="Test object-fit properties with different container sizes."
                options={[
                  "object-contain",
                  "object-cover",
                  "object-fill",
                  "object-none",
                  "object-scale-down",
                ]}
                defaultValue="object-cover"
                buildMarkup={(fitClass) => {
                  return `<img src="https://picsum.photos/400/300" class="${fitClass} w-48 h-32" alt="Demo image" />`;
                }}
                renderPreview={(fitClass) => {
                  return (
                    <div className="w-48 h-32 border-2 border-dashed border-gray-400 flex items-center justify-center bg-gray-100">
                      <img
                        src="https://picsum.photos/400/300"
                        className={`${fitClass} w-full h-full`}
                        alt="Demo image"
                      />
                    </div>
                  );
                }}
              />
            </section>

            <InteractiveChallenge
              title="The Squashed Avatar"
              description="A user uploaded a wide landscape photo for their profile. You forced the image into a `w-24 h-24` square container, causing it to squish unnaturally. Apply `object-cover` to make it fill the square perfectly without distortion (cropping the sides instead)."
              codeSnippet={`<div class="flex items-center gap-4">
  <div class="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200">
    <img 
      src="/user-photo.jpg" 
      class="w-full h-full {input}" 
      alt="User Profile" 
    />
  </div>
  <div>
    <h3>Alex Johnson</h3>
    <p>Senior Developer</p>
  </div>
</div>`}
              options={[
                "object-fill",
                "object-cover",
                "object-contain",
                "object-none",
              ]}
              correctOption="object-cover"
              renderPreview={(userClass) => (
                <div className="w-full h-64 flex items-center justify-center bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md relative">
                      {/* Simulated Image */}
                      <div
                        className={`w-full h-full bg-blue-200 relative flex items-center justify-center overflow-hidden`}
                      >
                        {/* Using a div pattern to simulate an image content for stability in preview */}
                        <div
                          className={`absolute bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center text-white font-bold
                          ${userClass === "object-fill" ? "w-full h-full" : ""}
                          ${
                            userClass === "object-contain"
                              ? "w-full h-12 top-1/2 -translate-y-1/2"
                              : ""
                          }
                          ${
                            userClass === "object-cover"
                              ? "h-full w-[150%] left-1/2 -translate-x-1/2"
                              : ""
                          }
                          ${userClass === "object-none" ? "w-32 h-16" : ""}
                        `}
                        >
                          PHOTO
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">
                        Ojasv 
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {userClass === "object-fill" && (
                          <span className="text-red-500 font-medium">
                            Squashed! (Bad)
                          </span>
                        )}
                        {userClass === "object-contain" && (
                          <span className="text-orange-500 font-medium">
                            Letterboxed (Gaps)
                          </span>
                        )}
                        {userClass === "object-cover" && (
                          <span className="text-green-600 font-medium">
                            Perfect fit!
                          </span>
                        )}
                        {userClass === "object-none" && (
                          <span className="text-slate-500">Zoomed In</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />

            <ExampleSection title="Real-World Examples">
              <ExampleCard
                title="Hero Image"
                description="Cover the entire viewport with a hero image"
                code={`<div class="relative h-screen">
  <img src="hero.jpg" class="object-cover w-full h-full" alt="Hero" />
  <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-white text-4xl font-bold">Hero Content</h1>
  </div>
</div>`}
              >
                <div className="relative h-48 w-full max-w-md">
                  <img
                    src="https://picsum.photos/600/400"
                    className="object-cover w-full h-full rounded-lg"
                    alt="Hero"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-xl font-bold">
                      Hero Content
                    </h1>
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Product Gallery"
                description="Show product images without distortion"
                code={`<div class="grid grid-cols-3 gap-4">
  <img src="product1.jpg" class="object-contain w-24 h-24" alt="Product 1" />
  <img src="product2.jpg" class="object-contain w-24 h-24" alt="Product 2" />
  <img src="product3.jpg" class="object-contain w-24 h-24" alt="Product 3" />
</div>`}
              >
                <div className="grid grid-cols-3 gap-2 max-w-xs">
                  <img
                    src="https://picsum.photos/200/200"
                    className="object-contain w-16 h-16 border border-gray-300"
                    alt="Product 1"
                  />
                  <img
                    src="https://picsum.photos/200/150"
                    className="object-contain w-16 h-16 border border-gray-300"
                    alt="Product 2"
                  />
                  <img
                    src="https://picsum.photos/150/200"
                    className="object-contain w-16 h-16 border border-gray-300"
                    alt="Product 3"
                  />
                </div>
              </ExampleCard>

              <ExampleCard
                title="Avatar System"
                description="Profile pictures that maintain aspect ratio"
                code={`<img src="avatar.jpg" class="object-cover w-16 h-16 rounded-full" alt="User avatar" />
<img src="avatar.jpg" class="object-cover w-24 h-24 rounded-lg" alt="Large avatar" />`}
              >
                <div className="flex gap-4 items-center">
                  <img
                    src="https://picsum.photos/100/100"
                    className="object-cover w-16 h-16 rounded-full border-2 border-gray-300"
                    alt="User avatar"
                  />
                  <img
                    src="https://picsum.photos/100/100"
                    className="object-cover w-24 h-24 rounded-lg border-2 border-gray-300"
                    alt="Large avatar"
                  />
                </div>
              </ExampleCard>

              <ExampleCard
                title="Video Player"
                description="Responsive video that maintains aspect ratio"
                code={`<div class="relative w-full aspect-video">
  <video class="object-cover w-full h-full rounded-lg" controls>
    <source src="video.mp4" type="video/mp4">
  </video>
</div>`}
              >
                <div className="relative w-full max-w-md aspect-video">
                  <div className="object-cover w-full h-full rounded-lg bg-gray-800 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">▶</div>
                      <div className="text-sm">Video Player</div>
                    </div>
                  </div>
                </div>
              </ExampleCard>
            </ExampleSection>

            <CommonMistakesSection
              title="❌ Common Object Fit Mistakes"
              mistakes={[
                {
                  title: "Using object-fit on div elements",
                  reason:
                    "object-fit only works on replaced elements (img, video, iframe), not regular elements like div or span.",
                  example: `<div class="object-cover">This won't work</div>
<img class="object-cover" src="image.jpg">This will work</img>`,
                  level: "critical",
                },
                {
                  title: "Forgetting to set container dimensions",
                  reason:
                    "object-fit needs a defined width and height to work properly. Without dimensions, the image will use its natural size.",
                  example: `<img class="object-cover" src="image.jpg"> <!-- No dimensions set -->
<img class="object-cover w-64 h-32" src="image.jpg"> <!-- Proper dimensions -->`,
                  level: "critical",
                },
                {
                  title: "Using cover for critical content",
                  reason:
                    "object-cover can crop important parts of the image. Use contain for critical content that must be fully visible.",
                  example: `<img class="object-cover" src="chart.jpg"> <!-- Chart might be cropped -->
<img class="object-contain" src="chart.jpg"> <!-- Chart fully visible -->`,
                  level: "warning",
                },
                {
                  title: "Not combining with object-position",
                  reason:
                    "object-fit controls scaling but object-position controls placement. Use both for precise control over which parts are visible.",
                  example: `<img class="object-cover" src="portrait.jpg"> <!-- Face might be cropped -->
<img class="object-cover object-center" src="portrait.jpg"> <!-- Center the important area -->`,
                  level: "info",
                },
              ]}
            />

            <TipsSection
              tips={[
                {
                  bold: "Always set dimensions:",
                  text: "Define width/height before applying object-fit",
                },
                {
                  bold: "Test with different ratios:",
                  text: "Images have various aspect ratios - test both landscape and portrait",
                },
                {
                  bold: "Use for performance:",
                  text: "object-cover with larger images than needed ensures quality",
                },
                {
                  bold: "Combine with loading:",
                  text: "Add loading='lazy' for off-screen images",
                },
                {
                  bold: "Accessibility first:",
                  text: "Always include meaningful alt text for images",
                },
              ]}
            />
          </div>
        </main>
      </div>
    </>
  );
}
