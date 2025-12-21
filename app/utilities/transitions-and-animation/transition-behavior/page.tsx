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
  { cls: "transition-normal", desc: "Use normal transition behavior" },
  { cls: "transition-discrete", desc: "Enable discrete transition behavior" },
];

export default function TransitionBehaviorPage() {
  const [behaviorClass, setBehaviorClass] = useState("transition-normal");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero
            title="Transition Behavior"
            description="Control how transitions start for properties with discrete values."
          />

          <MentalModelSection
            title="Understanding Transition Behavior"
            description="Transition behavior utilities let you control how CSS transitions are started, especially for discrete value changes."
            features={[
              "`transition-normal` applies normal transition behavior",
              "`transition-discrete` allows transitions on discrete properties",
              "Useful for transitions where values don’t interpolate",
              "Works alongside other transition utilities",
            ]}
            layerAssignment="Transitions & animation utilities"
            browserBehavior="CSS `transition-behavior` determines how transitions start on discrete value changes" 
          />

          <ComparisonTable
            title="Transition Behavior Utilities"
            columns={["Utility", "CSS Property", "Effect"]}
            rows={[
              {
                feature: "transition-normal",
                values: ["transition-behavior: normal", "Default transition behavior"],
              },
              {
                feature: "transition-discrete",
                values: ["transition-behavior: allow-discrete", "Allow discrete transitions"],
              },
            ]}
          />

          <UtilityGrid title="Transition Behavior Utilities" items={utilities} />

          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Interactive Playground</h2>
            <p className="text-muted-foreground">
              Apply different transition behavior utilities to see how transitions respond on discrete changes.
            </p>

            <UtilityPlayground
              title="Transition Behavior Playground"
              description="Toggle the transition behavior utility and preview the difference."
              options={utilities.map(u => u.cls)}
              defaultValue="transition-normal"
              buildMarkup={(cls) => {
                return `<button class="transition ${cls} duration-300 bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">
  ${cls}
</button>`;
              }}
              renderPreview={(cls) => {
                return (
                  <button className={`transition ${cls} duration-300 bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700`}>
                    {cls}
                  </button>
                );
              }}
            />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="Normal Transition"
              description="Use default transition behavior for common hover states."
              code={`<button class="transition transition-normal duration-300 hover:scale-105">
  Hover me
</button>`}
            >
              <button className="transition transition-normal duration-300 hover:scale-105">
                Hover me
              </button>
            </ExampleCard>

            <ExampleCard
              title="Discrete Transition Use Case"
              description="Use `transition-discrete` when transitioning between discrete states, such as visibility toggles."
              code={`<div class="transition-discrete duration-300">
  <!-- apply transitions on discrete changes -->
</div>`}
            >
              <div className="transition-discrete duration-300">
                Discrete transition example
              </div>
            </ExampleCard>
          </ExampleSection>

          <CommonMistakesSection
            title="❌ Common Mistakes"
            mistakes={[
              {
                title: "Expecting effect without transitions",
                reason: "Transition behavior utilities only change *how* transitions are started; you still need `transition` and duration utilities.",
                example: `<div class="transition-discrete"></div>`,
              },
              {
                title: "Using discrete on continuous properties",
                reason: "Discrete transitions are only relevant for non-interpolatable property changes.",
                example: `<div class="transition-discrete opacity-50"></div>`,
              },
            ]}
          />

          <TipsSection
            tips={[
              { bold: "Always use with transitions:", text: "Pair with `transition` and duration utilities." },
              { bold: "Discrete value use-cases:", text: "Use `transition-discrete` for show/hide or visibility toggles." },
              { bold: "Responsive variants:", text: "Apply at breakpoints like `md:transition-discrete`." },
              { bold: "Combine with timing:", text: "Use `duration-*` and `ease-*` for better control." },
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
