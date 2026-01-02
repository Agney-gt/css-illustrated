import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CodeBlock from "@/app/utilities/components/code-block";
import { PageHero } from "@/components/shared/page-hero";
import {
  POINTER_HERO,
  POINTER_UTILITIES,
  POINTER_TIPS,
} from "@/app/utilities/interactivity/pointer-events/data";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { PointerPlayground } from "@/components/pointer-events/pointer-playground";
import { PointerExamples } from "@/components/pointer-events/pointer-examples";
import { TipsSection } from "@/components/shared/tips-section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pointer Events",
  description: "Control interaction with pointer-events utilities.",
  openGraph: {
    title: "Pointer Events",
    description: "Control interaction with pointer-events utilities.",
    type: "website",
  },
};

export default function PointerEventsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero {...POINTER_HERO} />

          <UtilityGrid
            title="Pointer-events utilities"
            items={POINTER_UTILITIES}
          />

          <PointerPlayground />

          <PointerExamples />

          <TipsSection tips={POINTER_TIPS} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
