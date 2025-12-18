import { render, screen, fireEvent } from "@testing-library/react";
import { UtilityGrid } from "@/components/shared/utility-grid";

// Mock Data
const MOCK_ITEMS = [
  { cls: "cursor-pointer", desc: "Clickable" },
  { cls: "cursor-wait", desc: "Loading" },
];

describe("UtilityGrid (Shared)", () => {
  it("renders the title and items", () => {
    render(<UtilityGrid title="My Grid" items={MOCK_ITEMS} />);

    // Check Title
    expect(
      screen.getByRole("heading", { name: /my grid/i })
    ).toBeInTheDocument();

    // Check Items (buttons)
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    
    const textInstances = screen.getAllByText("cursor-pointer");
    expect(textInstances.length).toBeGreaterThan(0);
  });

  it("strips prefix from visual swatch", () => {
    render(<UtilityGrid items={MOCK_ITEMS} prefix="cursor-" />);

    // "cursor-pointer" should display as "pointer" inside the swatch
    // We search for "pointer" text that is NOT the full class name
    const swatchText = screen.getByText(/^pointer$/);
    expect(swatchText).toBeInTheDocument();
  });
});
