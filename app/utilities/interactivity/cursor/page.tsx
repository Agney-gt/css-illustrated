import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Metadata } from "next";
import { CursorHero } from "@/components/cursor/cursor-hero";
import { CursorUtilities } from "@/components/cursor/cursor-utilities";
import { CursorPlayground } from "@/components/cursor/cursor-playground";
import { RealWorldExamples } from "@/components/cursor/real-world-examples";
import { CursorTips } from "@/components/cursor/cursor-tips";

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
          <CursorHero />

          <CursorUtilities />

          <CursorPlayground />

          <RealWorldExamples />

          <CursorTips />
        </div>
      </main>

      <Footer />
    </div>
  );
}
