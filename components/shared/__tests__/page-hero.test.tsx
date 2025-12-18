import { render, screen } from "@testing-library/react";
import { PageHero } from "@/components/shared/page-hero";

describe("PageHero (Shared)", () => {
  it("renders title and description correctly", () => {
    render(<PageHero title="Test Title" description="Test Description" />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Test Title"
    );
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});
