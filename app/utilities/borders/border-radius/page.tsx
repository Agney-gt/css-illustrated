"use client";

import React, { useState } from "react";
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
import CodeBlock from "@/app/utilities/components/code-block";

type RadiusClass =
  | "rounded-none"
  | "rounded-sm"
  | "rounded"
  | "rounded-md"
  | "rounded-lg"
  | "rounded-xl"
  | "rounded-2xl"
  | "rounded-full"
  | "rounded-tl-lg"
  | "rounded-tr-lg"
  | "rounded-bl-lg"
  | "rounded-br-lg";

export default function BorderRadiusPage() {
  const [copied, setCopied] = useState<string | null>(null);
  const [radius, setRadius] = useState<RadiusClass>("rounded-md");
  const [previewSize, setPreviewSize] = useState("w-[220px] h-40");
  const [showShadow, setShowShadow] = useState(true);
  const [items, setItems] = useState(3);
  const [transitionOn, setTransitionOn] = useState(true);
  const [responsiveDemo, setResponsiveDemo] = useState(false);

  const utilities: { cls: RadiusClass; desc: string }[] = [
    { cls: "rounded-none", desc: "No rounding" },
    { cls: "rounded-sm", desc: "Small radius" },
    { cls: "rounded", desc: "Default radius" },
    { cls: "rounded-md", desc: "Medium radius" },
    { cls: "rounded-lg", desc: "Large radius" },
    { cls: "rounded-xl", desc: "Extra large" },
    { cls: "rounded-2xl", desc: "Very large" },
    { cls: "rounded-full", desc: "Pill / circle" },
    { cls: "rounded-tl-lg", desc: "Top-left only" },
    { cls: "rounded-tr-lg", desc: "Top-right only" },
    { cls: "rounded-bl-lg", desc: "Bottom-left only" },
    { cls: "rounded-br-lg", desc: "Bottom-right only" },
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1200);
    } catch {
      setCopied(null);
    }
  };

  const transitionClass = transitionOn ? "transition-all duration-200" : "";

  const responsiveClass = responsiveDemo
    ? `${radius} md:rounded-xl lg:rounded-2xl`
    : radius;

  const playgroundMarkup = `<!-- preview -->\n<div class="${previewSize} ${
    responsiveDemo ? `${radius} md:rounded-xl lg:rounded-2xl` : radius
  } ${showShadow ? "shadow-md" : ""} ${
    transitionOn ? "transition-all duration-200" : ""
  } bg-slate-700"></div>`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero 
            title="Border Radius"
            description="Control element corner rounding — from sharp corners to pills and circles. This guide covers practical patterns, accessibility considerations, responsive radius, animation, and many real-world visuals."
          />

          <UtilityGrid
            title="Radius Utilities"
            items={utilities}
            prefix="rounded-"
          />

          <MentalModelSection
            title="Understanding Border Radius"
            description="Border radius transforms sharp corners into smooth curves, creating visual softness and modern aesthetics. It affects element perception without changing the box model."
            features={[
              "Creates visual hierarchy through corner softness",
              "Affects touch target perception and interaction affordances",
              "Combines with overflow:hidden for perfect circles and pills",
              "Responsive radius adapts to different screen sizes",
              "Animation-friendly for smooth transitions between states"
            ]}
            layerAssignment="Visual Enhancement Layer - Softens corners without affecting layout"
            browserBehavior="Border radius creates clipped corners using elliptical arcs, respecting content-overflow and border-box sizing"
          />

          <CommonMistakesSection
            mistakes={[
              {
                title: "Inconsistent radius values",
                reason: "Using different radius values for similar elements breaks visual rhythm",
                example: "rounded-md on buttons, rounded-lg on similar cards",
                level: "warning"
              },
              {
                title: "Forgetting overflow hidden",
                reason: "Rounded corners don't clip content without overflow:hidden",
                example: "rounded-lg on div with overflowing content",
                level: "critical"
              },
              {
                title: "Too small radius on large elements",
                reason: "Small radius gets lost on large elements, looking like an error",
                example: "rounded-sm on wide hero section",
                level: "info"
              },
              {
                title: "Missing responsive adjustments",
                reason: "Fixed radius may not work well across different screen sizes",
                example: "rounded-2xl on mobile looking too large",
                level: "info"
              }
            ]}
          />

          {/* Interactive playground */}
          <section className="space-y-4 border-t border-border pt-8">
            <div className="flex items-start justify-between">
              <h2 className="text-3xl font-bold">Interactive playground</h2>
              <div className="text-sm text-muted-foreground">
                Try responsive + transition toggles
              </div>
            </div>

          <UtilityPlayground
            title="Border Radius Playground"
            description="Test different radius values on various elements and see how they affect visual design."
            options={utilities.map(u => u.cls)}
            defaultValue="rounded-md"
            buildMarkup={(radiusClass, customClasses = "") => {
              return `<div class="${radiusClass} ${customClasses} p-6 bg-slate-700">
  Radius Preview
</div>`;
            }}
            renderPreview={(radiusClass, customClasses = "") => {
              return (
                <div className={`${radiusClass} ${customClasses} p-6 bg-slate-700 text-white`}>
                  Radius Preview
                </div>
              );
            }}
            optionLabel={(value) => value.replace("rounded-", "") || "none"}
            defaultCustomClasses="border border-border"
          />
          </section>

          <ExampleSection title="Real-World Examples">
            <ExampleCard
              title="User Profile with Status"
              description="Perfect circles for avatars with status indicators"
              code={`<div class="relative">
  <div class="w-14 h-14 rounded-full bg-slate-700 text-white">JD</div>
  <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background"></span>
</div>`}
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-slate-700 flex items-center justify-center text-white">JD</div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full ring-2 ring-background"></span>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Chat Bubbles"
              description="Soft rounded corners create friendly conversational UI"
              code={`<div class="rounded-lg bg-slate-700 p-3 text-slate-200 max-w-xs">Hey there!</div>`}
            >
              <div className="rounded-lg bg-slate-700 p-3 text-slate-200 max-w-xs">Hey there!</div>
            </ExampleCard>

            <ExampleCard
              title="Search Pill Input"
              description="Fully rounded inputs create modern search interfaces"
              code={`<input class="rounded-full px-4 py-2 bg-slate-700 text-white" placeholder="Search..." />`}
            >
              <input className="rounded-full px-4 py-2 bg-slate-700 text-white w-full" placeholder="Search..." />
            </ExampleCard>

            <ExampleCard
              title="Pricing Card"
              description="Large radius creates premium feel for pricing tiers"
              code={`<div class="rounded-xl bg-slate-700 p-6">
  <h3 class="text-xl font-bold">Pro</h3>
  <p class="text-2xl font-bold">₹499</p>
  <button class="mt-4 w-full rounded-lg bg-blue-600 text-white">Get Started</button>
</div>`}
            >
              <div className="rounded-xl bg-slate-700 p-6 max-w-xs">
                <h3 className="text-xl font-bold text-slate-100">Pro</h3>
                <p className="text-2xl font-bold text-slate-100">₹499</p>
                <button className="mt-4 w-full rounded-lg bg-blue-600 text-white">Get Started</button>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Notification Toast"
              description="Medium radius with ring creates visible notifications"
              code={`<div class="rounded-md ring ring-green-400 bg-slate-700 p-4">
  <div class="flex items-center gap-3">
    <div class="w-9 h-9 rounded-full bg-green-500 text-white">✓</div>
    <div>
      <div class="font-semibold">Success!</div>
      <div class="text-sm text-muted-foreground">Changes saved</div>
    </div>
  </div>
</div>`}
            >
              <div className="rounded-md ring ring-green-400 bg-slate-700 p-4 max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white">✓</div>
                  <div>
                    <div className="font-semibold text-slate-100">Success!</div>
                    <div className="text-sm text-muted-foreground">Changes saved</div>
                  </div>
                </div>
              </div>
            </ExampleCard>

            <ExampleCard
              title="Floating Action Button"
              description="Perfect circles with shadows for primary actions"
              code={`<button class="rounded-full w-12 h-12 bg-blue-600 shadow-lg text-white">+</button>`}
            >
              <button className="rounded-full w-12 h-12 bg-blue-600 shadow-lg text-white text-xl">+</button>
            </ExampleCard>
          </ExampleSection>

          <TipsSection 
            tips={[
              { bold: "Design tokens:", text: "derive radii from a small set of tokens (none, sm, md, lg, full) for visual rhythm and consistency" },
              { bold: "Combine with ring utilities:", text: "ring respects shape better than an outline reset" },
              { bold: "Hover micro-interactions:", text: "small radius changes (hover:rounded-lg) add polish — keep transitions short" },
              { bold: "Masonry / grid:", text: "when using row-span/fixed auto-rows, match rounding on items to avoid jagged edges between spans" },
              { bold: "Touch targets:", text: "rounding doesn't change hit area — ensure padded areas meet accessibility targets (44–48px recommended)" }
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
