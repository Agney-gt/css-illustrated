"use client";

import { useState } from "react";
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
import { backgroundImageUtilities } from "@/lib/utilities";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function BackgroundImagePage() {
  const utilityItems = backgroundImageUtilities.classes.map((item) => ({
    cls: item.class,
    desc: item.description,
  }));

  const tips = [
    {
      bold: "bg-gradient-to-r:",
      text: "Perfect for horizontal progress bars and buttons",
    },
    {
      bold: "bg-gradient-to-b:",
      text: "Great for vertical overlays and loading states",
    },
    {
      bold: "bg-gradient-to-t:",
      text: "Ideal for elevated cards and floating elements",
    },
    {
      bold: "bg-none:",
      text: "Use to remove inherited backgrounds in nested components",
    },
  ];

  const commonMistakes = [
    {
      title: "Forgetting gradient direction",
      reason:
        "Gradients without direction may not render as expected in all browsers.",
      example: `<div class="from-blue-500 to-purple-500">❌ No direction</div>`,
      level: "warning" as const,
    },
    {
      title: "Using too many gradient stops",
      reason: "Complex gradients can impact performance and readability.",
      example: `<div class="from-red-500 via-pink-500 via-purple-500 via-blue-500 to-green-500">❌ Too many stops</div>`,
      level: "warning" as const,
    },
    {
      title: "Poor contrast gradients",
      reason: "Low contrast gradients can make text hard to read.",
      example: `<div class="from-gray-100 to-gray-200 text-gray-300">❌ Poor contrast</div>`,
      level: "critical" as const,
    },
  ];

  const comparisonData = {
    title: "Background Properties Comparison",
    columns: ["Property", "Type", "Use Case", "Accessibility Impact"],
    rows: [
      {
        feature: "bg-none",
        values: [
          "Removal",
          "Reset",
          "Override inheritance",
          "Improves readability",
        ],
      },
      {
        feature: "bg-gradient-to-r",
        values: ["Gradient", "Horizontal", "Buttons/banners", "Check contrast"],
      },
      {
        feature: "bg-gradient-to-b",
        values: ["Gradient", "Vertical", "Overlays/cards", "Check contrast"],
      },
      {
        feature: "bg-gradient-to-tr",
        values: ["Gradient", "Diagonal", "Creative effects", "Check contrast"],
      },
    ],
  };

  const realWorldExamples = [
    {
      title: "Gradient Button",
      description: "Beautiful gradient button with hover effect",
      code: `<button class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
  Get Started
</button>`,
      preview: (
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
          Get Started
        </button>
      ),
      category: "Buttons",
    },
    {
      title: "Hero Section",
      description: "Full-width gradient hero background",
      code: `<section class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white py-24">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">Hero Title</h1>
    <p class="text-xl">Beautiful gradient background</p>
  </div>
</section>`,
      preview: (
        <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded">
          <div className="text-center">
            <h2 className="text-lg font-bold">Hero Title</h2>
            <p className="text-sm">Beautiful gradient background</p>
          </div>
        </div>
      ),
      category: "Hero Sections",
    },
    {
      title: "Card Background",
      description: "Subtle gradient for card elevation",
      code: `<div class="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 shadow-lg">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-gray-600">Card with subtle gradient</p>
</div>`,
      preview: (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
          <h3 className="text-sm font-bold mb-1">Card Title</h3>
          <p className="text-xs text-gray-600">Card with subtle gradient</p>
        </div>
      ),
      category: "Cards",
    },
    {
      title: "Loading Bar",
      description: "Animated gradient loading progress",
      code: `<div class="w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse">
  <!-- Loading animation -->
</div>`,
      preview: (
        <div className="w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
      ),
      category: "Loading States",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero
            title={backgroundImageUtilities.title}
            description={backgroundImageUtilities.description}
          />

          <MentalModelSection
            title="Understanding Background Images and Gradients"
            description="Background images and gradients create visual depth and interest behind content, affecting user experience and accessibility."
            features={[
              "Gradients create smooth color transitions without image assets",
              "Direction controls gradient flow and visual hierarchy",
              "bg-none removes inherited backgrounds for clean styling",
              "Background layers stack with content on top for proper accessibility",
            ]}
            layerAssignment="Background Layer - Visual presentation behind content"
            browserBehavior="Browser renders gradients mathematically for smooth transitions, images load independently and tile/clip as specified"
          />

          <UtilityGrid title="Available Classes" items={utilityItems} />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different gradients and background styles."
            options={backgroundImageUtilities.classes.map((item) => item.class)}
            defaultValue="bg-gradient-to-r"
            defaultCustomClasses="h-32 w-full flex items-center justify-center text-white font-bold rounded-lg"
            buildMarkup={(bgClass, customClasses = "") => {
              const classes = [bgClass, customClasses]
                .filter(Boolean)
                .join(" ");
              if (bgClass === "bg-none") {
                return `<div class="${classes}">
  No Background Demo
</div>`;
              }
              return `<div class="${classes} from-blue-500 to-purple-600">
  Gradient Background Demo
</div>`;
            }}
            renderPreview={(bgClass, customClasses = "") => {
              const classes = [bgClass, customClasses]
                .filter(Boolean)
                .join(" ");
              let content = "Gradient Background Demo";
              let additionalClasses = "";

              if (bgClass === "bg-none") {
                content = "No Background Demo";
                additionalClasses = "bg-gray-100 text-gray-800";
              } else {
                additionalClasses = "from-blue-500 to-purple-600";
              }

              return (
                <div className={`${classes} ${additionalClasses}`}>
                  {content}
                </div>
              );
            }}
            optionLabel={(value) =>
              value.replace("bg-gradient-to-", "").replace("bg-", "")
            }
          />

          <ComparisonTable {...comparisonData} />

          <InteractiveChallenge
            title="The Invisible Gradient"
            description="You are trying to create a cool 'Sunset' gradient button. You've set the colors (`from-orange-500 to-pink-500`), but the button looks flat because the gradient has no direction! Apply `bg-gradient-to-r` to activate the gradient flow from left to right."
            codeSnippet={`<button class="px-6 py-2 rounded-full text-white font-bold transition-all
  {input} from-orange-500 to-pink-500">
  Sunset Button
</button>`}
            options={[
              "bg-none",
              "bg-gradient-to-r",
              "bg-color-orange",
              "bg-cover",
            ]}
            correctOption="bg-gradient-to-r"
            renderPreview={(userClass) => (
              <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-12 rounded-lg">
                <div className="text-center">
                  <button
                    className={`
                      px-8 py-3 rounded-full text-white font-bold shadow-xl transform transition-all duration-500 hover:scale-105
                      ${userClass} from-orange-500 to-pink-600
                      ${
                        userClass === "bg-none" ||
                        userClass === "bg-color-orange" ||
                        userClass === "bg-cover"
                          ? "bg-slate-400"
                          : ""
                      } 
                    `}
                  >
                    Sunset Button
                  </button>

                  {/* Feedback Message */}
                  <div className="mt-4 h-6 text-sm font-medium">
                    {userClass === "bg-gradient-to-r" ? (
                      <span className="text-green-500 animate-in fade-in slide-in-from-bottom-2">
                        ✨ Beautiful Gradient!
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        {userClass === "bg-none"
                          ? "Gradient removed."
                          : "Waiting for direction..."}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          />

          <RealWorldExamples
            title="Real World Examples"
            description="See how background image utilities are used in practical applications."
            examples={realWorldExamples}
          />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Gradient Button"
              description="Call-to-action with gradient background"
              code={`<button class="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
  Start Your Journey
</button>`}
            >
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold text-sm">
                Start Your Journey
              </button>
            </ExampleCard>

            <ExampleCard
              title="Pricing Cards"
              description="Cards with gradient backgrounds for visual hierarchy"
              code={`<div class="bg-gradient-to-br from-purple-400 to-pink-400 p-6 rounded-xl text-white">
  <h3 class="text-2xl font-bold mb-2">Premium</h3>
  <p class="text-purple-100">All features included</p>
</div>`}
            >
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-4 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-1">Premium</h3>
                <p className="text-purple-100 text-xs">All features included</p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock
              language="jsx"
              code={backgroundImageUtilities.codeSnippet}
            />
          </div>

          <CommonMistakesSection mistakes={commonMistakes} />

          <TipsSection tips={tips} />
        </div>
      </main>
    </div>
  );
}
