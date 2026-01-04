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
import { backgroundPositionUtilities } from "@/lib/utilities";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

export default function BackgroundPositionPage() {
  const utilities = backgroundPositionUtilities.classes.map(
    (item) => item.class
  );
  const [activeClass, setActiveClass] = useState(utilities[0]);

  const utilityItems = backgroundPositionUtilities.classes.map((item) => ({
    cls: item.class,
    desc: item.description,
  }));

  const tips = [
    { bold: "bg-center:", text: "Perfect for hero images and focal points" },
    { bold: "bg-top:", text: "Ideal for headers and top-aligned content" },
    { bold: "bg-bottom:", text: "Great for footers and bottom-heavy designs" },
    {
      bold: "Combine with size:",
      text: "Use with bg-cover/contain for complete control",
    },
  ];

  const commonMistakes = [
    {
      title: "Forgetting background-size with positioning",
      reason: "Without proper sizing, positioning may not work as expected.",
      example: `<div class="bg-center">❌ No size defined</div>`,
      level: "critical" as const,
    },
    {
      title: "Using positioning with repeating patterns",
      reason:
        "Position has no effect on repeating patterns that fill the container.",
      example: `<div class="bg-repeat bg-left-top">❌ Position ignored</div>`,
      level: "warning" as const,
    },
    {
      title: "Assuming default is center",
      reason: "Default background position is top-left, not center.",
      example: `<div class="bg-cover">❌ Actually top-left</div>`,
      level: "info" as const,
    },
  ];

  const comparisonData = {
    title: "Background Position Properties Comparison",
    columns: ["Property", "X Position", "Y Position", "Common Use"],
    rows: [
      {
        feature: "bg-left-top",
        values: ["Left", "Top", "Corner branding", "Logos, watermarks"],
      },
      {
        feature: "bg-center",
        values: [
          "Center",
          "Center",
          "Balanced focus",
          "Hero images, portraits",
        ],
      },
      {
        feature: "bg-right-bottom",
        values: ["Right", "Bottom", "Corner accents", "Decorative elements"],
      },
      {
        feature: "bg-top",
        values: ["Center", "Top", "Top focus", "Headers, banners"],
      },
      {
        feature: "bg-bottom",
        values: ["Center", "Bottom", "Bottom focus", "Footers, interfaces"],
      },
    ],
  };

  // Map Tailwind background positions to block alignment
  const positionMap: Record<string, string> = {
    "bg-left": "top-1/2 left-2 -translate-y-1/2",
    "bg-center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bg-right": "top-1/2 right-2 -translate-y-1/2",
    "bg-top": "top-2 left-1/2 -translate-x-1/2",
    "bg-bottom": "bottom-2 left-1/2 -translate-x-1/2",
    "bg-left-top": "top-2 left-2",
    "bg-right-top": "top-2 right-2",
    "bg-left-bottom": "bottom-2 left-2",
    "bg-right-bottom": "bottom-2 right-2",
  };

  const realWorldExamples = [
    {
      title: "Hero Section",
      description: "Centered hero background with overlay content",
      code: `<section class="bg-center bg-cover h-screen relative" style="background-image: url('hero.jpg')">
  <div class="absolute inset-0 flex items-center justify-center bg-black/40">
    <div class="text-center text-white">
      <h1 class="text-5xl font-bold mb-4">Hero Title</h1>
      <p class="text-xl">Centered content over background</p>
    </div>
  </div>
</section>`,
      preview: (
        <div
          className="bg-center bg-cover h-48 relative rounded"
          style={{
            backgroundImage: "url('https://picsum.photos/600/300?random=1')",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <div className="text-center text-white">
              <h2 className="text-lg font-bold">Hero Title</h2>
              <p className="text-sm">Centered content</p>
            </div>
          </div>
        </div>
      ),
      category: "Hero Sections",
    },
    {
      title: "Corner Logo",
      description: "Logo positioned in top-left corner",
      code: `<header class="relative bg-white h-20">
  <div class="absolute left-4 top-4 bg-no-repeat bg-contain w-16 h-16" 
       style="background-image: url('logo.svg')"></div>
  <nav class="flex items-center justify-center h-full">
    Navigation items
  </nav>
</header>`,
      preview: (
        <div className="relative bg-gray-100 h-16 rounded border">
          <div
            className="absolute left-2 top-2 bg-no-repeat bg-contain w-12 h-12"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%234F46E5'/%3E%3Ctext x='50' y='60' text-anchor='middle' fill='white' font-size='20'%3ELOGO%3C/text%3E%3C/svg%3E\")",
            }}
          ></div>
          <div className="flex items-center justify-center h-full px-16">
            <span className="text-sm">Navigation</span>
          </div>
        </div>
      ),
      category: "Branding",
    },
    {
      title: "Footer Background",
      description: "Bottom-aligned background for footer",
      code: `<footer class="bg-bottom bg-no-repeat p-8" 
     style="background-image: url('footer-pattern.png'); min-height: 200px;">
  <div class="text-center text-gray-600">
    <p>&copy; 2024 Company Name</p>
    <p>Bottom aligned background pattern</p>
  </div>
</footer>`,
      preview: (
        <div
          className="bg-bottom bg-no-repeat p-4 rounded"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #e5e7eb, #e5e7eb 10px, #f9fafb 10px, #f9fafb 20px)",
            minHeight: "120px",
          }}
        >
          <div className="text-center text-gray-600">
            <p className="text-sm">© 2024 Company</p>
            <p className="text-xs">Bottom aligned</p>
          </div>
        </div>
      ),
      category: "Footers",
    },
  ];

  const renderPreview = (cls: string) => (
    <div className="border border-border rounded-lg p-6 bg-gray-900 text-white text-center">
      <p className="font-semibold mb-4">Visual: {cls}</p>
      <div
        className={`relative w-full h-48 rounded-lg border bg-no-repeat bg-cover ${cls}`}
        style={{
          backgroundImage: "url('https://picsum.photos/400/200?text=Position')",
        }}
      >
        <div
          className={`absolute w-12 h-12 bg-purple-500/70 rounded-md backdrop-blur-sm transition-all duration-300 ${
            positionMap[cls] || "top-4 left-4"
          }`}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <PageHero
            title={backgroundPositionUtilities.title}
            description={backgroundPositionUtilities.description}
          />

          <MentalModelSection
            title="Understanding Background Positioning"
            description="Background position controls where images appear within their container, affecting visual composition and content hierarchy."
            features={[
              "Positions images using keywords or specific coordinates",
              "Works with background-size to control scaling behavior",
              "Default position is top-left unless specified",
              "Essential for hero images, logos, and decorative elements",
            ]}
            layerAssignment="Background Layer - Controls visual placement within element boundaries"
            browserBehavior="Browser calculates image placement based on container dimensions and position keywords"
          />

          <UtilityGrid title="Available Classes" items={utilityItems} />

          <UtilityPlayground
            title="Interactive Playground"
            description="Experiment with different background positions."
            options={utilities}
            defaultValue="bg-center"
            defaultCustomClasses="h-48 w-full border-2 border-dashed border-gray-300 bg-cover"
            buildMarkup={(positionClass, customClasses = "") => {
              const classes = [positionClass, customClasses]
                .filter(Boolean)
                .join(" ");
              return `<div class="${classes}" style="background-image: url('https://picsum.photos/300/200')">
  Background Position Demo
</div>`;
            }}
            renderPreview={(positionClass, customClasses = "") => {
              const classes = [positionClass, customClasses]
                .filter(Boolean)
                .join(" ");
              return (
                <div
                  className={`text-white font-semibold ${classes}`}
                  style={{
                    backgroundImage:
                      "url('https://picsum.photos/300/200?random=5')",
                  }}
                >
                  Background Position Demo
                </div>
              );
            }}
            optionLabel={(value) => value.replace("bg-", "").replace("-", " ")}
          />

          {/* Interactive Position Selector */}
          <section className="space-y-6 border-t pt-8">
            <h2 className="text-3xl font-bold">Position Visualizer</h2>
            <div className="flex flex-wrap gap-3">
              {utilities.map((cls) => (
                <button
                  key={cls}
                  onClick={() => setActiveClass(cls)}
                  className={`px-4 py-2 rounded font-medium transition ${
                    activeClass === cls
                      ? "bg-blue-600 text-white shadow"
                      : "bg-card/20 hover:bg-card/30"
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>
            {renderPreview(activeClass)}
            <p className="text-sm text-muted-foreground">
              {
                backgroundPositionUtilities.classes.find(
                  (item) => item.class === activeClass
                )?.description
              }
            </p>
          </section>

          <ComparisonTable {...comparisonData} />

          <InteractiveChallenge
            title="The Headless Header"
            description="You are building a profile card with a banner image. The generated background image is tall (portrait), but the container is short (landscape). Currently, `bg-center` is focusing on the subject's shirt, cutting off their head. Change the position to `bg-top` to anchor the image to the top edge."
            codeSnippet={`<div class="h-40 w-full rounded-xl overflow-hidden border-4 border-white shadow-xl relative">
  
  <div 
    class="absolute inset-0 bg-cover {input}"
    style="background-image: url('avatar-generated.png')"
  ></div>

  <div class="absolute bottom-2 left-2 bg-white px-2 rounded text-xs font-bold">
    Profile Banner
  </div>
</div>`}
            options={["bg-center", "bg-top", "bg-bottom", "bg-left"]}
            correctOption="bg-top"
            renderPreview={(userClass) => {
              // Determine the visual state for feedback
              let feedback = "SUBJECT LOST";
              let statusColor = "bg-red-500";

              if (userClass === "bg-top") {
                feedback = "PERFECT SHOT";
                statusColor = "bg-green-500";
              } else if (userClass === "bg-center") {
                feedback = "TOO LOW";
                statusColor = "bg-yellow-500";
              }

              return (
                <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-slate-950 p-8 rounded-lg">
                  <div className="relative w-64 h-40 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700">
                    {/* The "Image" Layer */}
                    <div
                      className={`w-full h-full bg-no-repeat transition-all duration-700 ease-out ${userClass}`}
                      style={{
                        // Creating a recognizable person using gradients
                        backgroundImage: `
                radial-gradient(circle at 50% 15%, #fbbf24 0%, #d97706 12%, transparent 12.5%), /* The Face (Top) */
                linear-gradient(to bottom, transparent 28%, #3b82f6 28%, #1e40af 100%) /* The Shirt (Middle/Bottom) */
              `,
                        // The key: make the background 3x taller than the container
                        // so position matters significantly
                        backgroundSize: "100% 300%",
                        backgroundColor: "#e2e8f0",
                      }}
                    />

                    {/* UI Overlay / Viewfinder Graphics */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Viewfinder corners */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>

                      {/* Center crosshair */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/30"></div>
                        <div className="absolute left-1/2 top-0 h-full w-px bg-white/30"></div>
                      </div>

                      {/* Status Badge */}
                      <div
                        className={`absolute top-2 left-1/2 -translate-x-1/2 ${statusColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm transition-colors duration-300`}
                      >
                        {feedback}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          />

          <RealWorldExamples
            title="Real World Examples"
            description="See how background position utilities are used in practical applications."
            examples={realWorldExamples}
          />

          <ExampleSection title="Practical Examples">
            <ExampleCard
              title="Centered Hero"
              description="Full-width hero with centered background"
              code={`<div class="bg-center bg-cover h-screen relative" 
     style="background-image: url('hero.jpg')">
  Content overlay
</div>`}
            >
              <div
                className="bg-center bg-cover h-32 relative rounded"
                style={{
                  backgroundImage:
                    "url('https://picsum.photos/400/200?random=6')",
                }}
              >
                <p className="text-white text-sm font-bold">Centered Hero</p>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Corner Placement"
              description="Position elements in specific corners"
              code={`<div class="bg-left-top bg-no-repeat p-8" 
     style="background-image: url('logo.svg')">
  Main content
</div>`}
            >
              <div
                className="bg-left-top bg-no-repeat p-4 rounded"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%234F46E5'/%3E%3Ctext x='50' y='60' text-anchor='middle' fill='white' font-size='16'%3EL%3C/text%3E%3C/svg%3E\")",
                }}
              >
                <p className="text-sm font-bold">Corner Logo</p>
              </div>
            </ExampleCard>
          </ExampleSection>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Code Reference</h2>
            <CodeBlock
              language="jsx"
              code={backgroundPositionUtilities.codeSnippet}
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
