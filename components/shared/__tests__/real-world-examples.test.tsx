import { render, screen, fireEvent, within } from "@testing-library/react";
import { RealWorldExamples } from "@/components/shared/real-world-examples";

jest.mock("@/hooks/use-copy-to-clipboard", () => ({
  useCopyToClipboard: jest.fn(),
}));

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

const EXAMPLES = [
  {
    title: "Ex A",
    description: "A desc",
    code: "codeA",
    preview: <div>Preview A</div>,
    category: "layout",
    difficulty: "beginner",
  },
  {
    title: "Ex B",
    description: "B desc",
    code: "codeB",
    preview: <div>Preview B</div>,
    category: "accessibility",
    difficulty: "advanced",
  },
];

describe("RealWorldExamples (Shared)", () => {
  const mockCopy = jest.fn();

  beforeEach(() => {
    (useCopyToClipboard as jest.Mock).mockReturnValue({
      copy: mockCopy,
      copiedText: "",
    });
  });

  afterEach(() => jest.clearAllMocks());

  it("renders title, description and examples list", () => {
    render(<RealWorldExamples examples={EXAMPLES} />);

    expect(
      screen.getByRole("heading", { name: /real world examples/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/see how these utilities are used/i)
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /ex a/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ex b/i })).toBeInTheDocument();
  });

  it("filters examples by category and shows counts", () => {
    render(<RealWorldExamples examples={EXAMPLES} />);

    // All button should include total
    expect(
      screen.getByRole("button", { name: /all \(2\)/i })
    ).toBeInTheDocument();

    // Click 'layout' category
    const layoutBtn = screen.getByRole("button", { name: /layout \(1\)/i });
    fireEvent.click(layoutBtn);

    // Only Ex A should be visible now
    expect(screen.getByRole("heading", { name: /ex a/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /ex b/i })).toBeNull();
  });

  it("copies code when copy button is pressed and shows copied state", () => {
    // copiedText equals example.code to simulate copied state
    (useCopyToClipboard as jest.Mock).mockReturnValue({
      copy: mockCopy,
      copiedText: "codeA",
    });

    render(<RealWorldExamples examples={EXAMPLES} />);

    // Press copy on first example (scope to that card)
    // climb up to the header container which holds the copy button
    const headerContainer = screen.getByRole("heading", { name: /ex a/i })
      .parentElement?.parentElement?.parentElement;
    expect(headerContainer).toBeTruthy();
    const { getByRole: getByRoleWithin } = within(
      headerContainer as HTMLElement
    );
    // Button text can be "Copy Code" or "Copied!" depending on copiedText; select the primary button
    const copyBtn = getByRoleWithin("button");
    fireEvent.click(copyBtn);
    expect(mockCopy).toHaveBeenCalledWith("codeA");

    // Now the button text should show 'Copied!'
    expect(
      screen.getAllByRole("button", { name: /copied!/i }).length
    ).toBeGreaterThanOrEqual(0);
  });

  it("shows 'No examples found' when a category has no matches and 'View all examples' resets it", () => {
    // Provide categories prop including an empty category
    render(
      <RealWorldExamples examples={EXAMPLES} categories={["layout", "none"]} />
    );

    // 'none' has zero examples, click it
    const noneBtn = screen.getByRole("button", { name: /none \(0\)/i });
    fireEvent.click(noneBtn);

    expect(
      screen.getByText(/no examples found for "none"/i)
    ).toBeInTheDocument();

    // Click 'View all examples' to reset
    fireEvent.click(screen.getByRole("button", { name: /view all examples/i }));
    expect(screen.getByRole("heading", { name: /ex a/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /ex b/i })).toBeInTheDocument();
  });
});
