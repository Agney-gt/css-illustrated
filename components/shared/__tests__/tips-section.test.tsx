import { render, screen } from "@testing-library/react";
import { TipsSection } from "@/components/shared/tips-section";

const MOCK_TIPS = [
  { bold: "Tip 1:", text: "Do this." },
  { bold: "Tip 2:", text: "Don't do that." },
];

describe("TipsSection (Reusable)", () => {
  it("renders the title and list items from props", () => {
    render(<TipsSection tips={MOCK_TIPS} title="My Custom Tips" />);

    // Check Title
    expect(
      screen.getByRole("heading", { name: /my custom tips/i })
    ).toBeInTheDocument();

    // Check List Items
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);

    // Check Content
    expect(listItems[0]).toHaveTextContent("Tip 1: Do this.");
  });

  it("renders default title if none provided", () => {
    render(<TipsSection tips={MOCK_TIPS} />);
    expect(
      screen.getByRole("heading", { name: /tips & best practices/i })
    ).toBeInTheDocument();
  });
});
