import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { UtilityGrid } from "@/components/shared/utility-grid";
import { TipsSection } from "@/components/shared/tips-section";
import { PageHero } from "@/components/shared/page-hero";
import { ExampleCard, ExampleSection } from "@/components/shared/example-section";
import {
  MIN_WIDTH_HERO,
  MIN_WIDTH_UTILITIES,
  MIN_WIDTH_TIPS,
  MIN_WIDTH_EXAMPLES,
} from "./data";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Min-Width",
  description: "Control sizing with min-width utilities.",
  openGraph: {
    title: "Min-width",
    description: "Control sizing with min-width utilities.",
    type: "website",
  },
};

import {MinWidthPlayground} from "@/app/utilities/sizing/min-width/min-width playground";

export default function MinWidthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Hero */}
          <PageHero {...MIN_WIDTH_HERO} />

          {/* Utilities */}
          <UtilityGrid
            title="Min-width utilities"
            items={MIN_WIDTH_UTILITIES}
            prefix="min-w-"
          />

          {/* Playground */}
          <MinWidthPlayground />

          {/*Real world example*/}
          <div data-testid="Examples">
          <ExampleSection title="Real-World Examples">
          {MIN_WIDTH_EXAMPLES.map((ex) => (
          <ExampleCard
          key={ex.title}
          title={ex.title}
          description={ex.description}
          code={ex.code}
          >
          {ex.preview}
          </ExampleCard>
            ))}
          </ExampleSection>
          </div>

          {/* Tips */}
          <TipsSection tips={MIN_WIDTH_TIPS} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
