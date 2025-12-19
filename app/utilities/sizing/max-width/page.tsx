"use client"
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { UtilityGrid } from "@/components/shared/utility-grid";
import { TipsSection } from "@/components/shared/tips-section";
import { PageHero } from "@/components/shared/page-hero";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { ExampleCard, ExampleSection } from "@/components/shared/example-section";
import {
  MAX_WIDTH_HERO,
  MAX_WIDTH_UTILITIES,
  MAX_WIDTH_TIPS,
  MAX_WIDTH_PLAYGROUND,
  MAX_WIDTH_EXAMPLES,
} from "./data";


export default function MaxWidthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Hero */}
          <PageHero {...MAX_WIDTH_HERO} />

          {/* Utilities */}
          <UtilityGrid
            title="Max-width utilities"
            items={MAX_WIDTH_UTILITIES}
          />

          {/* Playground */}
          <UtilityPlayground {...MAX_WIDTH_PLAYGROUND}/>

          {/*Real world example*/}
          <div data-testid="Real World Examples">
          <ExampleSection title="Real-World Examples">
          {MAX_WIDTH_EXAMPLES.map((ex) => (
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
          <TipsSection tips={MAX_WIDTH_TIPS} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
