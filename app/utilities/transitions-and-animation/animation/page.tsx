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

const utilities = [
  { cls: "animate-none", desc: "Disable animation" },
  { cls: "animate-spin", desc: "Continuous spin" },
  { cls: "animate-ping", desc: "Ping pulse effect" },
  { cls: "animate-pulse", desc: "Smooth pulse" },
  { cls: "animate-bounce", desc: "Bounce effect" },
];

export default function AnimationPage() {
  const [animClass, setAnimClass] = useState("animate-spin");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Animation Utilities"
            description="Control built-in CSS animation utilities like spin, ping, pulse, and bounce."
          />

          <MentalModelSection
            title="Understanding Animation Utilities"
            description="Tailwind provides common animation utilities for smooth and reusable motion patterns."
            features={[
              "Use `animate-none` to disable animation",
              "Predefined patterns like spin, ping, pulse, and bounce",
              "Works with hover, focus, and responsive variants",
              "Customize duration, delay, and timing via utilities or config",
            ]}
            layerAssignment="Effects layer — animations"
            browserBehavior="CSS `animation` applies keyframe based animations to elements"
          />

          <ComparisonTable
            title="Animation Utilities Overview"
            columns={["Utility", "CSS Animation", "Effect"]}
            rows={[
              {
                feature: "animate-none",
                values: ["animation: none", "No animation"],
              },
              {
                feature: "animate-spin",
                values: ["animation: spin 1s linear infinite", "Continuous rotation"],
              },
              {
                feature: "animate-ping",
                values: ["animation: ping 1s cubic-bezier(...) infinite", "Scale + fade effect"],
              },
              {
                feature: "animate-pulse",
                values: ["animation: pulse 2s cubic-bezier(...) infinite", "Opacity pulse"],
              },
              {
                feature: "animate-bounce",
                values: ["animation: bounce 1s infinite", "Vertical bounce"],
              },
            ]}
          />

          <UtilityGrid title="Animation Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Apply different animation utilities and see them in action.
            </p>

            <UtilityPlayground
              title="Animation Playground"
              description="Test animation utilities on a sample element."
              options={utilities.map(u => u.cls)}
              defaultValue="animate-spin"
              buildMarkup={(cls) => {
                return `<div class="w-20 h-20 bg-blue-600 text-white flex items-center justify-center ${cls}">
  Box
</div>`;
              }}
              renderPreview={(cls) => {
                return (
                  <div className={`w-20 h-20 bg-blue-600 text-white flex items-center justify-center ${cls}`}>
                    Box
                  </div>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Loading Spinner"
              description="Use `animate-spin` for loading icons."
              code={`<svg class="animate-spin h-6 w-6 text-gray-600" viewBox="0 0 24 24"></svg>`}
            >
              <svg className="animate-spin h-6 w-6 text-gray-600" viewBox="0 0 24 24"></svg>
            </ExampleCard>

            <ExampleCard
              title="Attention Ping"
              description="Use `animate-ping` for attention cues."
              code={`<div class="relative">
  <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></div>
  <div class="relative inline-flex rounded-full h-6 w-6 bg-red-500"></div>
</div>`}
            >
              <div className="relative">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-6 w-6 bg-red-500"></div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Hover Pulse"
              description="Use `animate-pulse` on buttons or attention elements."
              code={`<button class="animate-pulse bg-green-500 text-white px-4 py-2 rounded">
  Pulse
</button>`}
            >
              <button className="animate-pulse bg-green-500 text-white px-4 py-2 rounded">
                Pulse
              </button>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes & Why They Happen"
            mistakes={[
              {
                title: "Expecting animation without `animate-*`",
                reason: "Tailwind doesn’t animate elements unless an animation utility is applied.",
                example: `<div class="spin"></div>`,
              },
              {
                title: "Too many simultaneous animations",
                reason: "Overlapping animations can hurt performance.",
                example: `<div class="animate-spin animate-bounce"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Use sparingly:", text: "Apply animations only when they improve UX." },
              { bold: "Combine with states:", text: "Use `hover:animate-*` for interaction feedback." },
              { bold: "Customize timing:", text: "Use `duration-*`, `delay-*`, and `ease-*` utilities." },
              { bold: "Accessible motion:", text: "Respect `motion-reduce` preferences with `motion-reduce:*` variants." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
