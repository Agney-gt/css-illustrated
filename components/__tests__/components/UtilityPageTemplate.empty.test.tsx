import { render, screen } from "@testing-library/react";
import UtilityPageTemplate from "@/app/utilities/components/utility-page-template";

describe("UtilityPageTemplate – empty utilities", () => {
  it("renders no utility class names when no utilities are provided", () => {
    render(
      <UtilityPageTemplate utility={{ classes: [] }} />
    );

    // Utility classes always start with bg-
    expect(
      screen.queryByText(/^bg-/i)
    ).not.toBeInTheDocument();
  });

  it("shows the available classes heading with count 0", () => {
    render(
      <UtilityPageTemplate utility={{ classes: [] }} />
    );

    expect(
      screen.getByText(/available classes\s*\(0\)/i)
    ).toBeInTheDocument();
  });
});
