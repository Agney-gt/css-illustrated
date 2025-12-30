"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { RealWorldExamples } from "@/components/shared/real-world-examples";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";

// Sample data
const PLACE_HERO = {
  title: "Place Content Utilities",
  description: "Learn how to align and distribute content with Tailwind’s place-content classes.",
};

const PLACE_UTILITIES = [
  { cls: "place-content-center", desc: "Center content both ways" },
  { cls: "place-content-start", desc: "Align to start" },
  { cls: "place-content-end", desc: "Align to end" },
  { cls: "place-content-between", desc: "Space between" },
  { cls: "place-content-around", desc: "Space around" },
  { cls: "place-content-evenly", desc: "Even spacing" },
];

const PLACE_TIPS = [
  { bold: "Use Grid:", text: "Ensure the container has display grid for place-content to work." },
  { bold: "Axis Alignment:", text: "place-content aligns along both axes simultaneously." },
];

const PLACE_EXAMPLES = [
  {
    title: "Center a loader",
    description: "Use place-content-center to center a spinner or loading indicator",
    code: `<div class="grid place-content-center h-64 bg-gray-200">Loader</div>`,
    preview: <div className="grid place-content-center h-64 bg-gray-200">Loader</div>,
    category: "Loader",
    difficulty: "beginner",
  },
  {
    title: "Top-aligned dashboard",
    description: "Use place-content-start to align dashboard widgets at the top",
    code: `<div class="grid place-content-start h-64 bg-gray-100">Widgets</div>`,
    preview: <div className="grid place-content-start h-64 bg-gray-100">Widgets</div>,
    category: "Dashboard",
    difficulty: "intermediate",
  },
];

const PLACE_COMMON_MISTAKES = [
  {
    title: "Non-grid container",
    reason: "place-content only works on grid containers; it won't affect flex or block elements",
    example: "<div class='place-content-center'>Content</div>",
    level: "critical",
  },
  {
    title: "Conflicting alignment",
    reason: "Using place-content-center with justify-items-start may produce unexpected layouts",
    example: "<div class='place-content-center justify-items-start'>Content</div>",
    level: "warning",
  },
];

export default function PlaceContentPage() {
  // Move functions outside JSX to fix client component error
  const buildMarkup = (value: string) =>
    `<div class="grid h-40 ${value} bg-gray-100">Preview</div>`;

  const renderPreview = (value: string) => (
    <div className={`grid h-40 ${value} bg-gray-100`}>Preview</div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          {/* Hero Section */}
          <PageHero {...PLACE_HERO} />

          {/* Utility Grid */}
          <UtilityGrid
            title="Place-content utilities"
            items={PLACE_UTILITIES}
          />

          {/* Playground */}
          <UtilityPlayground
            title="Try Place Content"
            description="Pick a utility and test it live."
            options={PLACE_UTILITIES.map(u => u.cls)}
            defaultValue="place-content-center"
            buildMarkup={buildMarkup}
            renderPreview={renderPreview}
          />

          {/* Real World Examples */}
          <RealWorldExamples
            examples={PLACE_EXAMPLES}
          />

          {/* Tips Section */}
          <TipsSection tips={PLACE_TIPS} />

          {/* Common Mistakes Section */}
          <CommonMistakesSection mistakes={PLACE_COMMON_MISTAKES} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
