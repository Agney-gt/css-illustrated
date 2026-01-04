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
import { RealWorldExamples } from "@/components/shared/real-world-examples";
import CodeBlock from "@/app/utilities/components/code-block";
import { backgroundGradientStops } from "@/lib/utilities";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function GradientStopsPage() {
  const utilityItems = backgroundGradientStops.classes.map((item) => ({
    cls: item.class,
    desc: item.description,
  }));

  const tips = [
    { bold: "from-color:", text: "Starting point of gradient flow" },
    { bold: "via-color:", text: "Middle color for smooth transitions" },
    { bold: "to-color:", text: "Ending point of gradient flow" },
    {
      bold: "Combine directions:",
      text: "Use with gradient-to-* for precise control",
    },
  ];

  const commonMistakes = [
    {
      title: "Missing gradient direction",
      reason: "Gradients need direction (to-r, to-b, etc.) to render properly.",
      example: `<div class="from-blue-500 to-purple-600">❌ No direction</div>`,
      level: "critical" as const,
    },
    {
      title: "Poor color contrast",
      reason: "Similar colors in gradients can make text hard to read.",
      example: `<div class="from-gray-300 to-gray-400 text-gray-300">❌ Low contrast</div>`,
      level: "critical" as const,
    },
    {
      title: "Too many color stops",
      reason: "Complex gradients can impact performance and readability.",
      example: `<div class="from-red-500 via-orange-500 via-yellow-500 via-green-500 to-blue-500">❌ Too complex</div>`,
      level: "warning" as const,
    },
  ];

  const comparisonData = {
    title: "Gradient Stop Properties Comparison",
    columns: ["Property", "Position", "Required", "Visual Effect"],
    rows: [
      {
        feature: "from-*",
        values: ["Start", "Required", "Beginning color", "Gradient origin"],
      },
      {
        feature: "via-*",
        values: ["Middle", "Optional", "Transition color", "Smooth mid-point"],
      },
      {
        feature: "to-*",
        values: ["End", "Required", "Final color", "Gradient destination"],
      },
    ],
  };

  const realWorldExamples = [
    {
      title: "Sunset Button",
      description: "Beautiful gradient button with sunset colors",
      code: `<button class="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
  Get Started
</button>`,
      preview: (
        <button className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold text-sm">
          Get Started
        </button>
      ),
      category: "Buttons",
    },
    {
      title: "Ocean Background",
      description: "Ocean-themed background gradient",
      code: `<section class="bg-gradient-to-b from-blue-400 via-cyan-500 to-teal-600 text-white py-24">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Ocean Theme</h1>
    <p class="text-xl">Deep gradient background</p>
  </div>
</section>`,
      preview: (
        <div className="bg-gradient-to-b from-blue-400 via-cyan-500 to-teal-600 text-white p-6 rounded">
          <div className="text-center">
            <h2 className="text-lg font-bold">Ocean Theme</h2>
            <p className="text-sm">Deep gradient background</p>
          </div>
        </div>
      ),
      category: "Backgrounds",
    },
    {
      title: "Aurora Card",
      description: "Card with northern lights inspired gradient",
      code: `<div class="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 p-6 rounded-xl text-white shadow-lg">
  <h3 class="text-2xl font-bold mb-2">Premium Card</h3>
  <p class="text-purple-100">Stunning aurora effect</p>
</div>`,
      preview: (
        <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 p-4 rounded-xl text-white">
          <h3 className="text-lg font-bold mb-1">Premium Card</h3>
          <p className="text-purple-100 text-sm">Stunning aurora effect</p>
        </div>
      ),
      category: "Cards",
    },
    {
      title: "Loading Bar",
      description: "Animated gradient loading progress",
      code: `<div class="w-full h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse">
  <!-- Loading animation -->
</div>`,
      preview: (
        <div className="w-full h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
      ),
      category: "Loading States",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero
            title={backgroundGradientStops.title}
            description={backgroundGradientStops.description}
          />

          <MentalModelSection
            title="Understanding Gradient Stops"
            description="Gradient stops define color points in a gradient, creating smooth color transitions and visual depth."
            features={[
              "from-color marks the starting point of gradient",
              "via-color creates intermediate color transitions",
              "to-color defines the gradient endpoint",
              "Combine with gradient direction for complete control",
            ]}
            layerAssignment="Background Layer - Controls visual color transitions behind content"
            browserBehavior="Browser mathematically calculates color interpolation between stops for smooth gradients"
          />

          <UtilityGrid title="Available Classes" items={utilityItems} />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different gradient combinations and directions."
            options={["from-blue-500", "via-purple-500", "to-pink-500"]}
            defaultValue="from-blue-500"
            defaultCustomClasses="h-32 w-full flex items-center justify-center text-white font-bold rounded-lg bg-gradient-to-r"
            buildMarkup={(stopClass, customClasses = "") => {
              const classes = [customClasses].filter(Boolean).join(" ");
              return `<div class="${classes} ${stopClass}">
  Gradient Demo
</div>`;
            }}
            renderPreview={(stopClass, customClasses = "") => {
              const classes = [customClasses].filter(Boolean).join(" ");
              let bgClass = "";
              if (stopClass.startsWith("from-")) {
                bgClass = "from-blue-500 to-purple-600";
              } else if (stopClass.startsWith("via-")) {
                bgClass = "from-blue-500 via-purple-500 to-pink-600";
              } else {
                bgClass = "from-blue-500 to-pink-500";
              }

              return (
                <div
                  className={`text-white font-semibold rounded-lg bg-gradient-to-r ${classes} ${bgClass}`}
                >
                  Gradient Demo
                </div>
              );
            }}
            optionLabel={(value) =>
              value.replace(/^(from|via|to)-/, "").replace("-", " ")
            }
          />

          <ComparisonTable {...comparisonData} />

          <InteractiveChallenge
            title="The Unreadable Card"
            description="You have a card with white text on an image background. It's hard to read. Add a black fade overlay using gradient stops. The direction `bg-gradient-to-t` is already set. Add `from-black` to start the fade at the bottom, and `to-transparent` to make it fade out at the top."
            codeSnippet={`<div class="relative h-48 w-64 rounded-xl overflow-hidden bg-cover" style="background-image: url('/scenic.jpg')">
  
  <div class="absolute inset-0 bg-gradient-to-t {input}"></div>
  
  <div class="absolute bottom-0 p-4 text-white z-10">
    <h3 class="font-bold">Mountain View</h3>
    <p class="text-xs">Explore the peaks</p>
  </div>
</div>`}
            options={[
              "from-black",
              "bg-black",
              "via-black",
              "from-black to-transparent",
            ]}
            correctOption="from-black to-transparent"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                <div
                  className="relative h-48 w-64 rounded-xl overflow-hidden shadow-xl bg-cover bg-center"
                  style={{
                    // Using a bright image that makes white text hard to read without overlay
                    backgroundImage: `url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80")`,
                  }}
                >
                  {/* The User's Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${userClass}`}
                  ></div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 p-4 w-full z-10">
                    <h3 className="font-bold text-white text-lg drop-shadow-sm">
                      Mountain View
                    </h3>
                    <p className="text-xs text-white/90">Explore the peaks</p>
                  </div>
                </div>
              </div>
            )}
          />

          <RealWorldExamples
            title="Real World Examples"
            description="See how gradient stop utilities are used in practical applications."
            examples={realWorldExamples}
          />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Three-Color Gradient"
              description="Smooth transition through three colors"
              code={`<div class="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-8 rounded-lg">
  Multi-color gradient
</div>`}
            >
              <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-6 rounded-lg">
                Multi-color gradient
              </div>
            </ExampleCard>

            <ExampleCard
              title="Simple Two-Color"
              description="Classic gradient transition"
              code={`<div class="bg-gradient-to-b from-indigo-500 to-blue-600 text-white p-6 rounded">
  Simple gradient
</div>`}
            >
              <div className="bg-gradient-to-b from-indigo-500 to-blue-600 text-white p-6 rounded">
                Simple gradient
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock
              language="jsx"
              code={backgroundGradientStops.codeSnippet}
            />
          </div>

          <CommonMistakesSection mistakes={commonMistakes} />

          <TipsSection tips={tips} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
