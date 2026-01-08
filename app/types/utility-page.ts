export type SectionType =
  | "hero"
  | "mental-model"
  | "comparison-table"
  | "utility-grid"
  | "playground"
  | "examples"
  | "common-mistakes"
  | "tips"
  | "interactive-challenge";

export interface PageSection {
  type: SectionType;
  props: any; 
}

export interface UtilityPageData {
  slug: string[]; 
  title: string;
  description: string; 
  sections: PageSection[];
}
