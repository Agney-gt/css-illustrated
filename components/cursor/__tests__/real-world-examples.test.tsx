import { render, screen, fireEvent } from "@testing-library/react";
import { RealWorldExamples } from "@/components/cursor/real-world-examples";

// Mock clipboard hook
jest.mock("@/hooks/use-copy-to-clipboard", () => ({
  useCopyToClipboard: () => ({ copiedText: null, copy: jest.fn() }),
}));

describe("RealWorldExamples Component", () => {
  it("renders all example cards with correct headers", () => {
    render(<RealWorldExamples />);

    // Verify a few key examples are present
    expect(
      screen.getByRole("heading", { name: /clickable link/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /draggable list/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /image — zoom/i })
    ).toBeInTheDocument();
  });

  it("toggles cursor classes on drag interaction", () => {
    render(<RealWorldExamples />);

    // 1. Find the draggable handle
    const dragHandle = screen.getByText(/^Drag handle$/i);

    // 2. Initial state
    expect(dragHandle).toHaveClass("cursor-grab");
    expect(dragHandle).not.toHaveClass("cursor-grabbing");

    // 3. Simulate Drag Start
    fireEvent.dragStart(dragHandle);
    expect(dragHandle).toHaveClass("cursor-grabbing");

    // 4. Simulate Drag End
    fireEvent.dragEnd(dragHandle);
    expect(dragHandle).toHaveClass("cursor-grab");
  });

  it("contains valid code blocks for each example", () => {
    render(<RealWorldExamples />);

    // Ensure the code blocks are rendered and accessible
    // Assuming your CodeBlock component renders a 'code' or 'pre' role
    const codeBlocks = screen.getAllByRole("code");
    expect(codeBlocks.length).toBeGreaterThan(0);
  });
});
