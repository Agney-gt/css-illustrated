"use client"
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { UtilityGrid } from "@/components/shared/utility-grid";
import { TipsSection } from "@/components/shared/tips-section";
import { PageHero } from "@/components/shared/page-hero";
import { ExampleCard, ExampleSection } from "@/components/shared/example-section";
import {
  HEIGHT_HERO,
  HEIGHT_UTILITIES,
  HEIGHT_TIPS,
  HEIGHT_EXAMPLES,
  HEIGHT_PLAYGROUND,
} from "./data";



import {UtilityPlayground} from "@/components/shared/utility_playground";

export default function HeightPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Hero */}
          <PageHero {...HEIGHT_HERO} />

          {/* Utilities */}
          <UtilityGrid
            title="Height utilities"
            items={HEIGHT_UTILITIES}
          />

          {/* Playground */}
          <UtilityPlayground {...HEIGHT_PLAYGROUND} />

          {/*Real world example*/}
          <div data-testid="Real World Examples">
          <ExampleSection title="Real-World Examples">
          {HEIGHT_EXAMPLES.map((ex) => (
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
          <TipsSection tips={HEIGHT_TIPS} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
