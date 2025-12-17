import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CursorUtilities } from "@/components/cursor/cursor-utilities";
import * as DataModule from "@/app/utilities/interactivity/cursor/data"; 

// Mock hook
jest.mock("@/hooks/use-copy-to-clipboard", () => ({
  useCopyToClipboard: () => ({ copiedText: null, copy: jest.fn() }),
}));

describe("CursorUtilities", () => {
  it("renders a grid of utilities from data", () => {
    // Strategy: Inline Data/Fixture override if needed, or rely on real data if stable.
    // For this example, let's assume we want to verify it renders what's exported.
    render(<CursorUtilities />);

    // Check header
    expect(
      screen.getByRole("heading", { name: /cursor utilities/i })
    ).toBeInTheDocument();

    // Check if list items are interactive
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThan(0);
  });

  it("provides accessible labels for screen readers", () => {
    render(<CursorUtilities />);

    // Validate accessible name includes the class name
    const pointerBtn = screen.getByRole("button", {
      name: /copy cursor-pointer/i,
    });
    expect(pointerBtn).toBeInTheDocument();
  });
});
