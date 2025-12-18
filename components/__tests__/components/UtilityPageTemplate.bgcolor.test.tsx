import { render, screen } from "@testing-library/react";
import UtilityPageTemplate from "@/app/utilities/components/utility-page-template";
import { backgroundColorUtilities } from "@/lib/utilities";

describe("UtilityPageTemplate – background color utilities", () => {
  it("renders the available classes heading with correct count", () => {
    render(
      <UtilityPageTemplate utility={backgroundColorUtilities} />
    );

    expect(
      screen.getByText(
        new RegExp(
          `available classes\\s*\\(${backgroundColorUtilities.classes.length}\\)`,
          "i"
        )
      )
    ).toBeInTheDocument();
  });

  it("renders one visible utility entry per class", () => {
    render(
      <UtilityPageTemplate utility={backgroundColorUtilities} />
    );

    backgroundColorUtilities.classes.forEach(({ class: className }) => {
      expect(
        screen.getByText(className)
      ).toBeInTheDocument();
    });
  });

  it("renders code elements for utility class names", () => {
    render(
      <UtilityPageTemplate utility={backgroundColorUtilities} />
    );

    const codeElements = screen.getAllByText(
      /^bg-/i
    );

    expect(codeElements).toHaveLength(
      backgroundColorUtilities.classes.length
    );
  });
});
