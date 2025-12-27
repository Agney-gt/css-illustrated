import { render, screen, fireEvent } from "@testing-library/react";
import { PlaygroundLayout } from "@/components/shared/playground-layout";

// Mock the clipboard hook
jest.mock("@/hooks/use-copy-to-clipboard", () => ({
  useCopyToClipboard: jest.fn(),
}));

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

describe("PlaygroundLayout (Shared)", () => {
  const mockCopy = jest.fn();

  beforeEach(() => {
    (useCopyToClipboard as jest.Mock).mockReturnValue({
      copy: mockCopy,
      copiedText: "",
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders title, description, controls and preview", () => {
    render(
      <PlaygroundLayout
        controls={<div>Controls</div>}
        preview={<div>Preview</div>}
        code={"<div/>"}
      />
    );

    expect(
      screen.getByRole("heading", { name: /interactive playground/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/pick a utility and test it/i)).toBeInTheDocument();
    expect(screen.getByText("Controls")).toBeInTheDocument();
    expect(screen.getByText("Preview")).toBeInTheDocument();

    const copyBtn = screen.getByRole("button", { name: /copy markup/i });
    fireEvent.click(copyBtn);
    expect(mockCopy).toHaveBeenCalledWith("<div/>");
  });

  it("shows 'Copied!' when copiedText matches code", () => {
    (useCopyToClipboard as jest.Mock).mockReturnValue({
      copy: mockCopy,
      copiedText: "<div/>",
    });

    render(
      <PlaygroundLayout controls={<div />} preview={<div />} code={"<div/>"} />
    );

    expect(
      screen.getByRole("button", { name: /copied!/i })
    ).toBeInTheDocument();
  });
});
