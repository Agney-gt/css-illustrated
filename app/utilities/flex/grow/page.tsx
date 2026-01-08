"use client";

import { useState, useEffect } from "react";
import FlexLayout from "../layout";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { RealWorldExamples } from "@/components/cursor/real-world-examples";
import CodeBlock from "@/app/utilities/components/code-block";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

// Animated flex item component
function GrowItem({
  color,
  label,
  grow = 0,
  basis = "auto",
  shrink = 1,
}: {
  color: string;
  label: string;
  grow?: number;
  basis?: string;
  shrink?: number;
}) {
  return (
    <div
      className="rounded p-4 text-white font-semibold flex items-center justify-center transition-all duration-1000"
      style={{
        flexGrow: grow,
        flexBasis: basis,
        flexShrink: shrink,
        backgroundColor: color,
      }}
    >
      {label}
    </div>
  );
}

export default function FlexGrowPage() {
  const [demo1Cycle, setDemo1Cycle] = useState(0);
  const [demo2Pulse, setDemo2Pulse] = useState(true);
  const [demo3Alt, setDemo3Alt] = useState(false);

  useEffect(() => {
    const interval1 = setInterval(
      () => setDemo1Cycle((n) => (n + 1) % 3),
      2200
    );
    const interval2 = setInterval(() => setDemo2Pulse((p) => !p), 2000);
    const interval3 = setInterval(() => setDemo3Alt((x) => !x), 2500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Section 1: Hero with Intent-First Framing */}
        <PageHero
          title="Flex Grow"
          description="You should reach for flex-grow when you need items to expand and fill leftover space in a flex container. flex-grow distributes *available* space — not desired space. It only works after all flex items claim their basis, then allocates what remains according to grow ratios."
        />

        {/* Section 2: Mental Model - How Browsers Think */}
        <MentalModelSection
          title="Understanding Flex-Grow Architecture"
          description="Flex grow is a **Layout layer** utility that controls space distribution along the main axis. It operates in three phases: basis allocation → space calculation → growth distribution."
          features={[
            "Browser first gives each item its flex-basis (content size or explicit basis)",
            "Browser calculates remaining space: container width minus sum of all bases",
            "Browser distributes remaining space proportionally to grow values",
            "Higher grow values get larger shares, but all growing items get something",
          ]}
          layerAssignment="Layout layer — controls space distribution along main axis. Apply to flex children, not containers."
          browserBehavior="If no remaining space exists after basis allocation, grow has no visible effect. Items at their basis size won't shrink unless flex-shrink is also set."
        />

        {/* Section 3: Comparison Table */}
        <ComparisonTable
          title="Flex Properties Comparison"
          columns={["Property", "Controls", "When To Use", "Common Pitfalls"]}
          rows={[
            {
              feature: "flex-grow",
              values: [
                "Space expansion",
                "Fill remaining space",
                "Responsive distribution",
                "Needs available space",
              ],
            },
            {
              feature: "flex-shrink",
              values: [
                "Space contraction",
                "Items shrink when needed",
                "Prevent overflow",
                "min-content blocks shrinking",
              ],
            },
            {
              feature: "flex-basis",
              values: [
                "Starting size",
                "Initial size before grow/shrink",
                "Content size control",
                "Auto vs fixed confusion",
              ],
            },
          ]}
        />

        {/* Section 4: Utility Grid - Behavior-Based Grouping */}
        <div className="space-y-6 border-t border-border pt-8">
          <h2 className="text-3xl font-bold text-foreground">
            Flex-Grow Utility Classes
          </h2>
          <p className="text-muted-foreground">Click to copy a class.</p>

          <UtilityGrid
            items={[
              {
                cls: "grow",
                desc: "flex-grow: 1 — expands to fill available space",
              },
              {
                cls: "grow-0",
                desc: "flex-grow: 0 — will NOT expand beyond basis",
              },
              {
                cls: "basis-auto grow",
                desc: "Start at content size, then grow",
              },
              {
                cls: "basis-1/3 grow",
                desc: "Start at 33% width, grows if space available",
              },
              {
                cls: "basis-0 grow",
                desc: "Start at 0px, pure proportional growth",
              },
              {
                cls: "grow-[2]",
                desc: "flex-grow: 2 — gets 2x share of space",
              },
            ]}
          />
        </div>

        {/* Section 5: Common Mistakes */}
        <CommonMistakesSection
          title="❌ Common Mistakes & Why They Happen"
          mistakes={[
            {
              title: "Using grow without container constraint",
              reason:
                "Flex-grow needs a container with defined dimensions or it won't know what 'available space' means",
              example: `<div class="flex grow"> <!-- Grows to what? No parent width -->\n  <div>Content</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Expecting grow to create space",
              reason:
                "Grow distributes existing space, it doesn't create it. Container must have width constraint.",
              example: `<div class="flex"> <!-- No width constraint -->\n  <div class="grow">Won't expand</div>\n</div>`,
              level: "critical",
            },
            {
              title: "Confusing grow with width percentages",
              reason:
                "Grow is proportional distribution of leftover space, not fixed percentage of container",
              example: `<div class="flex w-full">\n  <div class="grow">50%? No, depends on siblings</div>\n  <div class="basis-64">Fixed width sibling</div>\n</div>`,
              level: "warning",
            },
            {
              title: "Using grow on non-flex children",
              reason:
                "Flex properties only work on direct children of display:flex containers",
              example: `<div> <!-- Missing display:flex -->\n  <div class="grow">No effect</div>\n</div>`,
              level: "critical",
            },
          ]}
        />

        {/* Section 6: Interactive Playground */}
        <UtilityPlayground
          title="Flex-Grow Playground"
          description="Test how flex-grow distributes available space between items. Notice how grow values only affect leftover space after all flex-basis values are accounted for."
          options={[
            "grow-0",
            "grow",
            "grow-[2]",
            "basis-0 grow",
            "basis-32 grow",
          ]}
          defaultValue="grow"
          buildMarkup={(growClass, customClasses = "") => {
            return `<div class="flex gap-4 ${customClasses}">
          <div class="${growClass} bg-blue-500 p-4 rounded">Growing Item</div>
          <div class="basis-32 bg-red-500 p-4 rounded">Fixed 128px</div>
          <div class="basis-24 bg-green-500 p-4 rounded">Fixed 96px</div>
        </div>`;
          }}
          renderPreview={(growClass, customClasses = "") => {
            return (
              <div className={`flex gap-4 ${customClasses}`}>
                <div
                  className={`${growClass} bg-blue-500 p-4 rounded text-white`}
                >
                  Growing Item
                </div>
                <div className="basis-32 bg-red-500 p-4 rounded text-white">
                  Fixed 128px
                </div>
                <div className="basis-24 bg-green-500 p-4 rounded text-white">
                  Fixed 96px
                </div>
              </div>
            );
          }}
        />

        <InteractiveChallenge
          title="The Toolbar Gap"
          description="You are building a toolbar with a 'Back' button on the left and 'Action' buttons on the right. Currently, they are all bunched up on the left side. You need an empty element in the middle to push them apart. Apply `grow` to the spacer `div` so it eats up all the empty space."
          codeSnippet={`<div class="flex items-center gap-2 p-4 bg-slate-100 rounded-lg w-full">
  <button class="px-4 py-2 bg-white border rounded">Back</button>

  <div class="{input} h-1"></div>

  <button class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
  <button class="px-4 py-2 bg-green-600 text-white rounded">Publish</button>
</div>`}
          options={["grow", "grow-0", "w-full", "flex-1"]}
          correctOption="grow"
          renderPreview={(userClass) => (
            <div className="flex items-center justify-center w-full h-full bg-slate-50 dark:bg-slate-950 p-8 rounded-lg">
              <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 w-full">
                  <button className="px-3 py-1.5 text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded hover:bg-slate-200 transition-colors">
                    Back
                  </button>

                  {/* The Spacer */}
                  <div
                    className={`${userClass} h-8 bg-stripes-gray rounded opacity-50 flex items-center justify-center transition-all duration-500`}
                  >
                    {userClass === "grow" && (
                      <span className="text-[10px] text-slate-400 font-mono">
                        Spacer (Growing)
                      </span>
                    )}
                  </div>

                  <button className="px-3 py-1.5 text-xs font-bold bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Save
                  </button>
                  <button className="px-3 py-1.5 text-xs font-bold bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                    Publish
                  </button>
                </div>
              </div>
            </div>
          )}
        />

        {/* Section 7: Real-World Examples */}
        <ExampleSection title="Real-World Examples">
          {/* Example 1: Media Object Pattern */}
          <ExampleCard
            title="Media Object (Thumbnail + Content)"
            description="Classic layout with fixed image and flexible content space. The content grows to fill remaining space while thumbnail stays fixed."
            code={`<div class="flex gap-4 items-center">           <!-- Layout: flex container -->
          <div class="basis-32 grow-0 shrink-0">           <!-- Shape: fixed image container -->
            <img class="w-full h-full object-cover rounded" src="thumb.jpg" />
          </div>
          <div class="grow">                               <!-- Layout: content expands -->
            <h3 class="text-lg font-semibold">Title</h3>
            <p class="text-muted-foreground">Content grows to fill remaining space</p>
          </div>
        </div>`}
          >
            <div className="flex gap-4 items-center bg-slate-800 p-4 rounded">
              <div className="basis-32 grow-0 shrink-0">
                <div className="w-full h-20 bg-slate-600 rounded flex items-center justify-center text-white">
                  Thumbnail
                </div>
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold text-white">
                  Media Title
                </h3>
                <p className="text-slate-300">
                  Content expands to fill remaining space in the container.
                </p>
              </div>
            </div>
          </ExampleCard>

          {/* Example 2: Button Toolbar */}
          <ExampleCard
            title="Button Toolbar with Space Filler"
            description="Navigation toolbar with fixed action buttons and expanding space filler to push buttons apart."
            code={`<div class="flex gap-2">                          <!-- Layout: toolbar container -->
          <button class="px-4 py-2 bg-blue-500 rounded">Back</button>
          <div class="grow"></div>                        <!-- Layout: space filler -->
          <button class="px-4 py-2 bg-green-500 rounded">Save</button>
          <button class="px-4 py-2 bg-purple-500 rounded">Next</button>
        </div>`}
          >
            <div className="flex gap-2 items-center">
              <button className="px-4 py-2 bg-blue-500 rounded text-white">
                Back
              </button>
              <div className="grow h-4 bg-slate-700 rounded"></div>
              <button className="px-4 py-2 bg-green-500 rounded text-white">
                Save
              </button>
              <button className="px-4 py-2 bg-purple-500 rounded text-white">
                Next
              </button>
            </div>
          </ExampleCard>

          {/* Example 3: Pricing Cards */}
          <ExampleCard
            title="Responsive Pricing Layout"
            description="Pricing cards where the featured plan gets more growth factor for emphasis, while all cards maintain minimum width."
            code={`<div class="flex gap-6">                          <!-- Layout: pricing container -->
          <div class="basis-48 grow bg-slate-100 rounded p-6">      <!-- Layout: basic plan -->
            <h3 class="font-bold">Basic</h3>
            <p class="text-2xl">$9/mo</p>
          </div>
          <div class="basis-56 grow-[2] bg-blue-500 text-white rounded p-6"> <!-- Layout: featured plan -->
            <h3 class="font-bold">Pro (Popular)</h3>
            <p class="text-2xl">$29/mo</p>
          </div>
          <div class="basis-48 grow bg-slate-100 rounded p-6">      <!-- Layout: enterprise plan -->
            <h3 class="font-bold">Enterprise</h3>
            <p class="text-2xl">$99/mo</p>
          </div>
        </div>`}
          >
            <div className="flex gap-4">
              <div className="basis-48 grow bg-slate-700 rounded p-6 text-white">
                <h3 className="font-bold">Basic</h3>
                <p className="text-2xl">$9/mo</p>
              </div>
              <div className="basis-56 grow-[2] bg-blue-500 text-white rounded p-6">
                <h3 className="font-bold">Pro (Popular)</h3>
                <p className="text-2xl">$29/mo</p>
              </div>
              <div className="basis-48 grow bg-slate-700 rounded p-6 text-white">
                <h3 className="font-bold">Enterprise</h3>
                <p className="text-2xl">$99/mo</p>
              </div>
            </div>
          </ExampleCard>

          {/* Example 4: Dashboard Layout */}
          <ExampleCard
            title="Dashboard with Fixed Sidebar and Growing Content"
            description="Fixed-width sidebar with main content and stats panel that grow to fill remaining space."
            code={`<div class="flex gap-6 h-screen">                    <!-- Layout: dashboard container -->
          <aside class="basis-64 grow-0 bg-slate-900 text-white p-6"> <!-- Layout: fixed sidebar -->
            <h2 class="text-lg font-bold mb-4">Menu</h2>
            <!-- Navigation items -->
          </aside>
          <main class="grow bg-white p-6">                    <!-- Layout: main content -->
            <h1 class="text-2xl font-bold">Dashboard</h1>
            <!-- Content area -->
          </main>
          <section class="basis-80 grow bg-slate-100 p-6 rounded"> <!-- Layout: stats panel -->
            <h3 class="font-bold mb-4">Quick Stats</h3>
            <!-- Stats content -->
          </section>
        </div>`}
          >
            <div className="flex gap-6 min-h-[200px]">
              <div className="basis-64 grow-0 bg-slate-800 p-4 rounded text-white">
                <h3 className="font-bold">Sidebar</h3>
                <p className="text-sm">Fixed width</p>
              </div>
              <div className="grow bg-slate-600 p-4 rounded text-white">
                <h3 className="font-bold">Main Content</h3>
                <p className="text-sm">Grows to fill space</p>
              </div>
              <div className="basis-80 grow bg-slate-700 p-4 rounded text-white">
                <h3 className="font-bold">Stats Panel</h3>
                <p className="text-sm">Min-width + grow</p>
              </div>
            </div>
          </ExampleCard>
        </ExampleSection>

        {/* Section 8: Animated Demonstrations */}
        <div className="space-y-6 border-t border-border pt-8">
          <h2 className="text-3xl font-bold text-foreground">
            Live Demonstrations
          </h2>

          {/* Demo 1: Growth Cycling */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              <strong>Demo 1:</strong> Items cycle through different grow
              values. Notice how growth only affects *remaining* space after
              fixed items claim their basis.
            </p>

            <div className="flex gap-4 h-32 bg-slate-800 rounded p-4 overflow-hidden">
              <GrowItem
                color="#63b3ed"
                label="Grows More"
                grow={[0, 1, 2][demo1Cycle]}
                basis="120px"
              />
              <GrowItem
                color="#4299e1"
                label="Grows"
                grow={[1, 2, 1][demo1Cycle]}
                basis="120px"
              />
              <GrowItem color="#3182ce" label="Fixed" grow={0} basis="120px" />
            </div>
          </div>

          {/* Demo 2: Basis + Grow Interaction */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              <strong>Demo 2:</strong> Items change flex-basis while grow
              smooths the layout. Shows how grow handles *available* space
              dynamically.
            </p>

            <div className="flex gap-4 h-32 bg-slate-800 rounded p-4 transition-all duration-1000">
              <GrowItem
                color="#f6ad55"
                label="Pulse + Grow"
                basis={demo2Pulse ? "80px" : "150px"}
                grow={1}
              />
              <GrowItem
                color="#ed8936"
                label="Pulse + Grow"
                basis={demo2Pulse ? "120px" : "70px"}
                grow={2}
              />
              <GrowItem color="#dd6b20" label="Fixed" basis="80px" grow={0} />
            </div>
          </div>

          {/* Demo 3: Alternating Growth */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">
              <strong>Demo 3:</strong> One item alternates between growing and
              not growing. Other items re-adjust proportionally.
            </p>

            <div className="flex gap-4 h-32 w-full bg-slate-800 rounded p-4">
              <GrowItem
                color="#9f7aea"
                label="Alternating Grow"
                grow={demo3Alt ? 0 : 2}
                basis="100px"
              />
              <GrowItem color="#805ad5" label="Stable" grow={1} basis="120px" />
              <GrowItem color="#6b46c1" label="Stable" grow={1} basis="120px" />
            </div>
          </div>

          <TipsSection
            tips={[
              {
                bold: "Layout Layer Rules:",
                text: "flex-grow only works on direct children of display:flex containers",
              },
              {
                bold: "Parent constraints:",
                text: "Grow requires container with defined width or it has no 'available space' to distribute",
              },
              {
                bold: "Not for content:",
                text: "Grow is layout concern, use text utilities like truncate for text content issues",
              },
              {
                bold: "Proportional thinking:",
                text: "Higher grow values get proportionally more space, not fixed percentages",
              },
              {
                bold: "Available space first:",
                text: "Browser calculates remaining space after all flex-basis values, then distributes based on grow ratios",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
