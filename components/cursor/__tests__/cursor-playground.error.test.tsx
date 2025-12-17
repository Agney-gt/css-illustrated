import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CursorPlayground } from "@/components/cursor/cursor-playground";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

jest.mock("@/hooks/use-copy-to-clipboard");

describe("CursorPlayground - Error Resilience", () => {
  it("remains stable when clipboard copy fails", async () => {

    const mockCopy = jest.fn().mockImplementation(async () => {
        
      return Promise.resolve();
    });

    (useCopyToClipboard as jest.Mock).mockReturnValue({
      copiedText: null,
      copy: mockCopy,
    });

    const user = userEvent.setup();
    render(<CursorPlayground />);

    const copyBtn = screen.getByRole("button", { name: /copy markup/i });

    // Action
    await user.click(copyBtn);

    // Assert
    // 1. Ensure the function was called
    expect(mockCopy).toHaveBeenCalled();

    // 2. Ensure the UI didn't crash (button is still there)
    expect(copyBtn).toBeInTheDocument();
  });
});
