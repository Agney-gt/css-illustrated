import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PointerPlayground } from "../pointer-playground";

jest.mock("@/hooks/use-copy-to-clipboard", () => ({
  useCopyToClipboard: () => ({
    copy: jest.fn(),
    copiedText: null,
  }),
}));

describe("PointerPlayground Component", () => {
  it("renders with default 'blocking' state", () => {
    render(<PointerPlayground />);

    // 1. Verify specific "Blocking" UI is present
    const overlayText = screen.getByText(/blocks interaction/i);
    expect(overlayText).toBeInTheDocument();

    // 2. Verify the underlying button is rendered
    expect(screen.getByRole("button", { name: "Primary" })).toBeInTheDocument();
  });

  it("toggles overlay class when mode is switched", async () => {
    const user = userEvent.setup();
    render(<PointerPlayground />);

    // 1. Find the Controls region
    const controls = screen.getByRole("region", {
      name: /interactive playground/i,
    });

    // 2. Find "pass through" button
    const passThroughBtn = within(controls).getByRole("button", {
      name: /overlay passes through/i,
    });
    await user.click(passThroughBtn);

    // 3. Assert: Visual preview text updates
    expect(screen.getByText(/Overlay: pass-through/i)).toBeInTheDocument();

    // Check that the "blocks" text is gone
    expect(
      screen.queryByText(/Overlay: blocks interaction/i)
    ).not.toBeInTheDocument();
  });

  it("updates the preview button label instantly", async () => {
    const user = userEvent.setup();
    render(<PointerPlayground />);

    const controls = screen.getByRole("region", {
      name: /interactive playground/i,
    });

    // 1. Find Input by Label (Now works because we added htmlFor/id)
    const input = within(controls).getByLabelText(/underlying cta label/i);

    // 2. Type new label
    await user.clear(input);
    await user.type(input, "Submit Form");

    // 3. Assert Preview Button updated
    expect(
      screen.getByRole("button", { name: "Submit Form" })
    ).toBeInTheDocument();
  });
});
