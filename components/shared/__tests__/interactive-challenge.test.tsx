import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InteractiveChallenge } from "../challenge/interactive-challenge";

// Mock Lucide icons
jest.mock("lucide-react", () => ({
  Check: () => <span data-testid="icon-check" />,
  RotateCcw: () => <span data-testid="icon-rotate-ccw" />,
  AlertCircle: () => <span data-testid="icon-alert" />,
  Terminal: () => <span data-testid="icon-terminal" />,
}));

describe("InteractiveChallenge Component", () => {
  const mockProps = {
    title: "Test Challenge",
    description: "This is a test description.",
    // We use a simple snippet. The component splits this at "{input}"
    codeSnippet: '<div class="{input}">Hello</div>',
    options: ["text-red-500", "text-blue-500", "font-bold", "hidden"],
    correctOption: "text-blue-500",
    renderPreview: jest.fn((val) => <div data-testid="preview">{val}</div>),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders title and description correctly", () => {
    render(<InteractiveChallenge {...mockProps} />);
    expect(screen.getByText("Test Challenge")).toBeInTheDocument();
    expect(screen.getByText("This is a test description.")).toBeInTheDocument();
  });

  it("renders the code snippet parts", () => {
    render(<InteractiveChallenge {...mockProps} />);

    // FIX: The syntax highlighter separates '<' from the text.
    // So instead of looking for '<div class="', we look for 'div class="'
    expect(screen.getByText(/div class="/)).toBeInTheDocument();

    // Similarly for the closing part
    expect(screen.getByText(/">Hello/)).toBeInTheDocument();
  });

  it("updates input value when user types", () => {
    render(<InteractiveChallenge {...mockProps} />);
    const input = screen.getByPlaceholderText("class...");

    fireEvent.change(input, { target: { value: "bg-red-500" } });

    expect(input).toHaveValue("bg-red-500");
    expect(mockProps.renderPreview).toHaveBeenCalledWith("bg-red-500");
  });

  it("sets solved state correctly when correct answer is typed", () => {
    render(<InteractiveChallenge {...mockProps} />);
    const input = screen.getByPlaceholderText("class...");

    fireEvent.change(input, { target: { value: "text-blue-500" } });

    expect(screen.getByText("Code compiled successfully.")).toBeInTheDocument();
    expect(screen.getByText("Solved")).toBeInTheDocument();
  });

  it("shows error state when incorrect answer is provided", () => {
    render(<InteractiveChallenge {...mockProps} />);
    const input = screen.getByPlaceholderText("class...");

    fireEvent.change(input, { target: { value: "wrong-class" } });

    expect(screen.getByText("Waiting for input...")).toBeInTheDocument();
    expect(
      screen.getByText("Class not recognized or incorrect")
    ).toBeInTheDocument();
  });

  it("updates input when an option button is clicked", () => {
    render(<InteractiveChallenge {...mockProps} />);
    const optionButton = screen.getByText("text-red-500");

    fireEvent.click(optionButton);

    const input = screen.getByPlaceholderText("class...");
    expect(input).toHaveValue("text-red-500");
  });

  it("validates answer immediately when an option is clicked", () => {
    render(<InteractiveChallenge {...mockProps} />);

    const correctButton = screen.getByText("text-blue-500");
    fireEvent.click(correctButton);

    expect(screen.getByText("Code compiled successfully.")).toBeInTheDocument();
    expect(screen.getByText("Solved")).toBeInTheDocument();
  });

  it("resets state when reset button is clicked", () => {
    render(<InteractiveChallenge {...mockProps} />);
    const input = screen.getByPlaceholderText("class...");

    // Solve first
    fireEvent.change(input, { target: { value: "text-blue-500" } });
    expect(screen.getByText("Solved")).toBeInTheDocument();

    // Reset
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    expect(input).toHaveValue("");
    expect(screen.queryByText("Solved")).not.toBeInTheDocument();
    expect(screen.getByText("Waiting for input...")).toBeInTheDocument();
  });

  it("trims whitespace when checking the answer", () => {
    render(<InteractiveChallenge {...mockProps} />);
    const input = screen.getByPlaceholderText("class...");

    fireEvent.change(input, { target: { value: "  text-blue-500  " } });

    expect(screen.getByText("Code compiled successfully.")).toBeInTheDocument();
  });
});
