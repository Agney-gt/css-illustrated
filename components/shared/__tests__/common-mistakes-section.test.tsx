import { render, screen } from "@testing-library/react";
import { CommonMistakesSection } from "@/components/shared/common-mistakes-section";

const MOCK_MISTAKES = [
  {
    title: "Using wrong selector",
    reason: "Selector has higher specificity",
    example: ".btn .text",
  },
  {
    title: "Missing aria",
    reason: "No accessible name",
    example: "<button />",
    level: "warning",
  },
];

describe("CommonMistakesSection (Shared)", () => {
  it("renders default title and the list of mistakes", () => {
    render(<CommonMistakesSection mistakes={MOCK_MISTAKES} />);

    // Default title includes emoji and phrase
    expect(
      screen.getByRole("heading", {
        name: /common mistakes & why they happen/i,
      })
    ).toBeInTheDocument();

    // Each mistake title and example should be visible
    expect(screen.getByText(/using wrong selector/i)).toBeInTheDocument();
    expect(screen.getByText(".btn .text")).toBeInTheDocument();

    expect(screen.getByText(/missing aria/i)).toBeInTheDocument();
    expect(screen.getByText("<button />")).toBeInTheDocument();
  });

  it("supports compact variant and custom title", () => {
    render(
      <CommonMistakesSection
        mistakes={MOCK_MISTAKES}
        variant="compact"
        title="My Mistakes"
      />
    );

    expect(
      screen.getByRole("heading", { name: /my mistakes/i })
    ).toBeInTheDocument();

    // Compact variant keeps examples visible
    expect(
      screen.getAllByText(/using wrong selector|missing aria/i).length
    ).toBeGreaterThanOrEqual(2);
  });
});
