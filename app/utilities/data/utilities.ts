// app/utilities/data/index.ts

// Import individual utility files
import { utilitiesContent as screenReadersContent } from "./screen-readers";
import { alignContent as alignContentData } from "./align-content";
import { alignItems as alignItemsUtilitiesData } from "./align-items";
import { alignSelfUtilities as alignSelfUtilitiesData } from "./align-self";
// import { utilitiesContent as colorUtilitiesContent } from "./color-utilities";
// import { utilitiesContent as typographyContent } from "./typography";
// Add more imports as you create new utility data files

// Aggregate all utilities into a single object
export const utilitiesContent = {
  ...screenReadersContent,
  ...alignContentData,
  ...alignItemsUtilitiesData,
  ...alignSelfUtilitiesData,
  // ...spacingContent,
  // ...colorUtilitiesContent,
  // ...typographyContent,
  // Add more spreads as you add new utility files
};
    