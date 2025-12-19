"use client"
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
  MIN_WIDTH_PLAYGROUND,
} from "./data";



import {UtilityPlayground} from "@/components/shared/utility_playground";

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
          />

          {/* Playground */}
          <UtilityPlayground {...MIN_WIDTH_PLAYGROUND} />

          {/*Real world example*/}
          <div data-testid="Real World Examples">
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
