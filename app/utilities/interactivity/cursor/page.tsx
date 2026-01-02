import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Metadata } from "next";
import { CursorPlayground } from "@/components/cursor/cursor-playground";
import { RealWorldExamples } from "@/components/cursor/real-world-examples";
import { TipsSection } from "@/components/shared/tips-section";
import { CURSOR_TIPS } from "@/app/utilities/interactivity/cursor/data";
import { PageHero } from "@/components/shared/page-hero";
import { CURSOR_HERO } from "@/app/utilities/interactivity/cursor/data";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { CURSOR_UTILITIES } from "@/app/utilities/interactivity/cursor/data";

export const metadata: Metadata = {
  title: "Cursor & Pointer Utilities",
  description: "A playground for CSS cursor values and interactive states.",
  openGraph: {
    title: "Cursor & Pointer Utilities",
    type: "website",
  },
};

export default function CursorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 text-foreground">
          <PageHero {...CURSOR_HERO} />

          <UtilityGrid
            title="Cursor utilities"
            items={CURSOR_UTILITIES}
            prefix="cursor-"
          />

          <CursorPlayground />

          <RealWorldExamples />

          <TipsSection tips={CURSOR_TIPS} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
