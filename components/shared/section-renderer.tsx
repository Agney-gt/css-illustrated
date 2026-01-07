import React from "react";

import { PageHero } from "@/components/shared/page-hero";
import { MentalModelSection } from "@/components/shared/mental-model-section";
import { ComparisonTable } from "@/components/shared/comparison-table";
import { UtilityGrid } from "@/components/shared/utility-grid";
import { UtilityPlayground } from "@/components/shared/utility_playground";
import { ExampleSection } from "@/components/shared/example-section";
import { TipsSection } from "@/components/shared/tips-section";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";
import { InteractiveChallenge } from "@/components/shared/challenge/interactive-challenge";

const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {
  hero: PageHero,
  "mental-model": MentalModelSection,
  "comparison-table": ComparisonTable,
  "utility-grid": UtilityGrid,
  playground: UtilityPlayground,
  examples: ExampleSection,
  tips: TipsSection,
  "common-mistakes": CommonMistakesSection,
  "interactive-challenge": InteractiveChallenge,
};

export function SectionRenderer({
  section,
}: {
  section: { type: string; props: any };
}) {
  const Component = COMPONENT_MAP[section.type];

  if (!Component) {
    console.warn(`Could not find component for type: ${section.type}`);
    return null;
  }

  return <Component {...section.props} />;
}
