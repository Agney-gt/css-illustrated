import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CursorPlayground } from "@/components/cursor/cursor-playground";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

// Mock the hook to isolate component logic from async clipboard logic
jest.mock("@/hooks/use-copy-to-clipboard");

describe("CursorPlayground", () => {
  const mockCopy = jest.fn();

  beforeEach(() => {
    (useCopyToClipboard as jest.Mock).mockReturnValue({
      copiedText: null,
      copy: mockCopy,
    });
  });

  it("updates preview button when user types a label", async () => {
    const user = userEvent.setup();
    render(<CursorPlayground />);

    const input = screen.getByLabelText(/label/i);
    const previewButton = screen.getByRole("button", { name: /click me/i }); // Default

    // User interaction
    await user.clear(input);
    await user.type(input, "Submit");

    // Assert: UI reflects state change
    expect(previewButton).toHaveTextContent("Submit");
  });

  it("toggles hover-only class logic", async () => {
    const user = userEvent.setup();
    render(<CursorPlayground />);

    const toggle = screen.getByRole("button", { name: /hover-only/i });

    // Find the preview button (the one that says "Click me")
    const previewButton = screen.getByRole("button", { name: /click me/i });

    // Initial State: Should have the standard cursor class
    expect(previewButton).toHaveClass("cursor-pointer");

    // Interaction: Toggle hover
    await user.click(toggle);

    // Assert: Should now have the hover: class
    expect(previewButton).toHaveClass("hover:cursor-pointer");
  });

  it("copies the generated markup", async () => {
    const user = userEvent.setup();
    render(<CursorPlayground />);

    const copyBtn = screen.getByRole("button", { name: /copy markup/i });
    await user.click(copyBtn);

    // Assert: Hook was called with correct string
    expect(mockCopy).toHaveBeenCalledWith(
      expect.stringContaining("<button class=")
    );
  });
});

/*
❌ ANTI-PATTERN:
expect(container.querySelector(".bg-blue-600")).toBeInTheDocument();
WHY: Tied to CSS implementation. Use Role or Label.
*/
