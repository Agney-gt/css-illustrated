import { render, screen, fireEvent } from "@testing-library/react";
import { UtilityPlayground } from "@/components/shared/utility_playground";

jest.mock("@/hooks/use-copy-to-clipboard", () => ({
  useCopyToClipboard: jest.fn(),
}));

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

const options = ["one", "two", "three"];

describe("UtilityPlayground (Shared)", () => {
  const mockCopy = jest.fn();
  const buildMarkup = (value: string, customClasses?: string) =>
    `<div class="${value} ${customClasses || ""}">x</div>`;
  const renderPreview = (value: string) => (
    <div data-testid="preview">preview-{value}</div>
  );

  beforeEach(() => {
    (useCopyToClipboard as jest.Mock).mockReturnValue({ copy: mockCopy });
  });

  afterEach(() => jest.clearAllMocks());

  it("renders controls and preview and allows copying the current utility value", () => {
    render(
      <UtilityPlayground
        title="Play"
        description="desc"
        options={options}
        defaultValue={options[0]}
        buildMarkup={buildMarkup}
        renderPreview={renderPreview}
      />
    );

    expect(screen.getByRole("heading", { name: /play/i })).toBeInTheDocument();

    // Preview should reflect default value
    expect(screen.getByTestId("preview")).toHaveTextContent("preview-one");

    // Click option 'two'
    fireEvent.click(screen.getByRole("button", { name: /two/i }));
    expect(screen.getByTestId("preview")).toHaveTextContent("preview-two");

    // Copy the utility value
    const copyValBtn =
      screen.getByRole("button", { name: /copy "two"/i }) ||
      screen.getByRole("button", { name: /copy "one"/i });
    // safe-guard: click a Copy "val" button
    fireEvent.click(copyValBtn);
    expect(mockCopy).toHaveBeenCalled();
  });

  it("toggles into code editor mode and can reset/ copy edited code", () => {
    render(
      <UtilityPlayground
        title="Play"
        description="desc"
        options={options}
        defaultValue={options[0]}
        buildMarkup={buildMarkup}
        renderPreview={renderPreview}
      />
    );

    // Click Edit
    const editBtn = screen.getByRole("button", { name: /edit/i });
    fireEvent.click(editBtn);

    // Reset and Copy code buttons appear
    expect(screen.getByRole("button", { name: /reset/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /copy code/i })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /copy code/i }));
    expect(mockCopy).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    // After reset, editor mode should collapse (Edit button appears again)
    expect(screen.getByRole("button", { name: /edit/i })).toBeInTheDocument();
  });
});
