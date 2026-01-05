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

export default function ObjectPositionPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
            <PageHero
              title="Object Position Utilities"
              description="Complete guide to CSS object-position properties for precise control over where replaced elements are positioned within their containers. Master alignment for better visual composition and focal point control."
            />

            <MentalModelSection
              title="Understanding Object Position Behavior"
              description="Object-position controls the alignment of replaced elements within their container when object-fit causes cropping. It's like background-position but for img, video, and other replaced elements, giving you pixel-perfect control over what part of the content is visible."
              features={[
                "Works with object-fit values that crop content (cover, contain, scale-down)",
                "Uses x/y coordinates or alignment keywords for positioning",
                "Critical for controlling focal points in cropped images",
                "Supports percentage, length units, and keyword values",
                "Essential for responsive design with varying aspect ratios",
              ]}
              layerAssignment="Content Layer - Controls placement of replaced elements within their containers"
              browserBehavior="Browser positions the element based on the specified coordinates relative to the container's content box"
            />

            <ComparisonTable
              title="Object Position Values Comparison"
              columns={[
                "Value Type",
                "Syntax Examples",
                "Use Case",
                "Browser Support",
              ]}
              rows={[
                {
                  feature: "Keywords",
                  values: [
                    "center, top, bottom",
                    "left, right",
                    "center",
                    "Excellent",
                  ],
                },
                {
                  feature: "Percentage",
                  values: ["50% 50%", "0% 0%", "100% 100%", "Excellent"],
                },
                {
                  feature: "Length Units",
                  values: [
                    "10px 20px",
                    "1rem 2rem",
                    "50px center",
                    "Excellent",
                  ],
                },
                {
                  feature: "Mixed Values",
                  values: ["50% 10px", "center 2rem", "left 30%", "Excellent"],
                },
                {
                  feature: "Multiple Values",
                  values: [
                    "x and y axis",
                    "3-4 values",
                    "Edge positioning",
                    "Good",
                  ],
                },
              ]}
            />

            <UtilityGrid
              title="Object Position Utilities"
              items={[
                { cls: "object-bottom", desc: "Align to bottom" },
                { cls: "object-center", desc: "Align to center (default)" },
                { cls: "object-left", desc: "Align to left" },
                { cls: "object-left-bottom", desc: "Align to left-bottom" },
                { cls: "object-left-top", desc: "Align to left-top" },
                { cls: "object-right", desc: "Align to right" },
                { cls: "object-right-bottom", desc: "Align to right-bottom" },
                { cls: "object-right-top", desc: "Align to right-top" },
                { cls: "object-top", desc: "Align to top" },
              ]}
            />

            <section className="space-y-6 border-t pt-8">
              <h2 className="text-3xl font-bold">Interactive Playground</h2>
              <p className="text-muted-foreground">
                Experiment with different object-position values to control
                image alignment.
              </p>

              <UtilityPlayground
                title="Object Position Playground"
                description="Test object-position properties with different alignment options."
                options={[
                  "object-center",
                  "object-top",
                  "object-bottom",
                  "object-left",
                  "object-right",
                  "object-left-top",
                  "object-right-bottom",
                ]}
                defaultValue="object-center"
                buildMarkup={(positionClass) => {
                  return `<img src="https://picsum.photos/600/400" class="object-cover ${positionClass} w-48 h-32" alt="Position demo" />`;
                }}
                renderPreview={(positionClass) => {
                  return (
                    <div className="w-48 h-32 border-2 border-dashed border-gray-400 bg-gray-100 relative overflow-hidden">
                      <img
                        src="https://picsum.photos/600/400"
                        className={`object-cover ${positionClass} w-full h-full`}
                        alt="Position demo"
                      />
                      <div className="absolute top-1 left-1 bg-black/50 text-white text-xs px-1 rounded">
                        {positionClass.replace("object-", "")}
                      </div>
                    </div>
                  );
                }}
              />
            </section>

            <InteractiveChallenge
              title="The Headless Portrait"
              description="You have a profile card with a set height. The user uploaded a tall photo, and the default center alignment is cutting off their head! Fix the crop by applying `object-top` to anchor the image to the top edge."
              codeSnippet={`<div class="w-64 h-64 rounded-xl overflow-hidden relative">
  <img 
    src="/tall-portrait.jpg" 
    class="w-full h-full object-cover {input}" 
    alt="Profile" 
  />
</div>`}
              options={[
                "object-center",
                "object-bottom",
                "object-top",
                "object-left",
              ]}
              correctOption="object-top"
              renderPreview={(userClass) => (
                <div className="w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
                  <div className="w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-lg relative bg-slate-200">
                    {/* Simulated Image Content */}
                    <div
                      className={`absolute w-full h-[150%] bg-gradient-to-b from-blue-200 to-slate-300 transition-all duration-500 ease-in-out
                      ${
                        userClass === "object-center"
                          ? "top-1/2 -translate-y-1/2"
                          : ""
                      }
                      ${userClass === "object-top" ? "top-0" : ""}
                      ${userClass === "object-bottom" ? "bottom-0" : ""}
                      ${
                        userClass === "object-left"
                          ? "top-1/2 -translate-y-1/2"
                          : "" /* No X change for vertical overflow */
                      }
                    `}
                    >
                      {/* The "Person" */}
                      <div className="flex flex-col items-center pt-4">
                        {/* Head */}
                        <div className="w-20 h-24 bg-amber-200 rounded-full mb-2 relative">
                          <div className="absolute top-8 left-4 w-2 h-2 bg-black rounded-full"></div>
                          <div className="absolute top-8 right-4 w-2 h-2 bg-black rounded-full"></div>
                          <div className="absolute bottom-6 left-6 w-8 h-2 bg-black/10 rounded-full"></div>
                        </div>
                        {/* Body */}
                        <div className="w-32 h-40 bg-blue-500 rounded-t-3xl"></div>
                      </div>
                    </div>

                    {/* Feedback overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 text-white text-xs p-2 text-center backdrop-blur-sm">
                      {userClass === "object-top"
                        ? "✅ Perfect Framing"
                        : "❌ Awkward Crop"}
                    </div>
                  </div>
                </div>
              )}
            />

            <ExampleSection title="Real-World Examples">
              <ExampleCard
                title="Focal Point Control"
                description="Position important content in the visible area"
                code={`<div class="w-64 h-32">
  <img src="portrait.jpg" 
       class="object-cover object-center w-full h-full" 
       alt="Person portrait" />
</div>
<div class="w-64 h-32">
  <img src="portrait.jpg" 
       class="object-cover object-top w-full h-full" 
       alt="Person portrait (face visible)" />
</div>`}
              >
                <div className="flex gap-4">
                  <div className="w-32 h-20 border border-gray-300">
                    <img
                      src="https://picsum.photos/400/600"
                      className="object-cover object-center w-full h-full"
                      alt="Portrait centered"
                    />
                  </div>
                  <div className="w-32 h-20 border border-gray-300">
                    <img
                      src="https://picsum.photos/400/600"
                      className="object-cover object-top w-full h-full"
                      alt="Portrait top aligned"
                    />
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Hero Image Focus"
                description="Control what's visible in cropped hero images"
                code={`<div class="relative h-96">
  <img src="landscape.jpg" 
       class="object-cover object-bottom w-full h-full" 
       alt="Landscape with foreground focus" />
  <div class="absolute inset-0 flex items-end p-8">
    <h1 class="text-white text-4xl font-bold">Hero Title</h1>
  </div>
</div>`}
              >
                <div className="relative h-48 w-full max-w-md">
                  <img
                    src="https://picsum.photos/800/400"
                    className="object-cover object-bottom w-full h-full rounded-lg"
                    alt="Hero with bottom focus"
                  />
                  <div className="absolute inset-0 flex items-end p-4">
                    <h1 className="text-white text-lg font-bold">Hero Title</h1>
                  </div>
                </div>
              </ExampleCard>

              <ExampleCard
                title="Product Gallery Focus"
                description="Show product details in cropped thumbnails"
                code={`<div class="grid grid-cols-3 gap-2">
  <img src="product-detail.jpg" 
       class="object-cover object-left-top w-24 h-24 rounded" 
       alt="Product detail left focus" />
  <img src="product-detail.jpg" 
       class="object-cover object-center w-24 h-24 rounded" 
       alt="Product detail center" />
  <img src="product-detail.jpg" 
       class="object-cover object-right-top w-24 h-24 rounded" 
       alt="Product detail right focus" />
</div>`}
              >
                <div className="grid grid-cols-3 gap-2 max-w-xs">
                  <img
                    src="https://picsum.photos/300/200"
                    className="object-cover object-left-top w-20 h-20 rounded border border-gray-300"
                    alt="Product detail left"
                  />
                  <img
                    src="https://picsum.photos/300/200"
                    className="object-cover object-center w-20 h-20 rounded border border-gray-300"
                    alt="Product detail center"
                  />
                  <img
                    src="https://picsum.photos/300/200"
                    className="object-cover object-right-top w-20 h-20 rounded border border-gray-300"
                    alt="Product detail right"
                  />
                </div>
              </ExampleCard>

              <ExampleCard
                title="Video Player Content"
                description="Position important video content in frame"
                code={`<div class="relative w-full aspect-video bg-black">
  <video class="object-cover object-center w-full h-full" autoplay muted>
    <source src="video.mp4" type="video/mp4">
  </video>
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded">
      Video overlay content
    </div>
  </div>
</div>`}
              >
                <div className="relative w-full max-w-md aspect-video bg-black rounded-lg">
                  <div className="object-cover object-center w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">▶</div>
                      <div className="text-sm">Video Content</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded">
                    Video overlay
                  </div>
                </div>
              </ExampleCard>
            </ExampleSection>

            <CommonMistakesSection
              title="❌ Common Object Position Mistakes"
              mistakes={[
                {
                  title: "Using object-position without object-fit",
                  reason:
                    "object-position only works when object-fit causes cropping. Without object-fit, the image fills the container entirely.",
                  example: `<img class="object-center" src="image.jpg"> <!-- No effect -->
<img class="object-cover object-center" src="image.jpg"> <!-- Proper usage -->`,
                  level: "critical",
                },
                {
                  title: "Not considering responsive breakpoints",
                  reason:
                    "A focal point that works on desktop might be cropped on mobile. Test object-position across different screen sizes.",
                  example: `<img class="object-cover object-right" src="image.jpg"> <!-- Works on desktop -->
<img class="object-cover object-center md:object-right" src="image.jpg"> <!-- Responsive -->`,
                  level: "warning",
                },
                {
                  title: "Forgetting about aspect ratio changes",
                  reason:
                    "Different container aspect ratios will reveal different parts of the image. Plan for multiple aspect ratios.",
                  example: `/* Single aspect ratio planning is insufficient */
.container { width: 100%; aspect-ratio: 16/9; }
/* Consider multiple ratios */
.container { width: 100%; aspect-ratio: 16/9; }
@media (max-width: 768px) { aspect-ratio: 1/1; }`,
                  level: "warning",
                },
                {
                  title: "Ignoring accessibility",
                  reason:
                    "Cropped content might hide important information. Ensure critical details remain visible or provide alt text.",
                  example: `<img class="object-cover object-left" 
     src="chart.jpg" 
     alt="Sales chart showing 25% growth - left side focuses on Q1 data">`,
                  level: "info",
                },
              ]}
            />

            <TipsSection
              tips={[
                {
                  bold: "Test multiple ratios:",
                  text: "Verify positioning works in different aspect ratios",
                },
                {
                  bold: "Use focal points:",
                  text: "Position around the most important visual elements",
                },
                {
                  bold: "Consider mobile first:",
                  text: "Mobile often has different cropping behavior",
                },
                {
                  bold: "Combine with media queries:",
                  text: "Adjust position based on viewport",
                },
                {
                  bold: "Document your choices:",
                  text: "Note positioning decisions for future maintenance",
                },
              ]}
            />
          </div>
        </main>
      </div>
    </>
  );
}
