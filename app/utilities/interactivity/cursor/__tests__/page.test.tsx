import { render, screen, fireEvent, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CursorPage from "../page";

// 1. Mock Global Components (Navbar/Footer) to isolate the Page
jest.mock("@/components/navbar", () => () => (
  <nav data-testid="navbar">Navbar</nav>
));
jest.mock("@/components/footer", () => () => (
  <footer data-testid="footer">Footer</footer>
));

// 2. Mock Hooks
jest.mock("@/hooks/use-copy-to-clipboard", () => ({
  useCopyToClipboard: () => ({ copy: jest.fn() }),
}));

describe("Cursor Page Integration", () => {
  it("renders the full page composition", () => {
    render(<CursorPage />);

    // Verify Shared Components are composed correctly
    expect(
      screen.getByRole("heading", { name: /cursor & pointer/i })
    ).toBeInTheDocument(); // Hero
    expect(
      screen.getByRole("heading", { name: /cursor utilities/i })
    ).toBeInTheDocument(); // Grid
    expect(
      screen.getByRole("heading", { name: /interactive playground/i })
    ).toBeInTheDocument(); // Playground
    expect(
      screen.getByRole("heading", { name: /real-world examples/i })
    ).toBeInTheDocument(); // Examples
  });

  it("updates playground preview when user interacts with controls", async () => {
    const user = userEvent.setup();
    render(<CursorPage />);

    // 1. Scope our search to the Playground section to avoid finding buttons in the Grid
    // (We find the region by its heading)
    const playgroundSection = screen.getByRole("region", {
      name: /interactive playground/i,
    });

    // 2. Verify Default State
    const previewButton = within(playgroundSection).getByRole("button", {
      name: "Click me",
    });
    expect(previewButton).toHaveClass("cursor-pointer");

    // 3. User Action: Change Cursor to 'wait'
    // Find the 'wait' button inside the controls
    const waitButton = within(playgroundSection).getByRole("button", {
      name: "wait",
    });
    await user.click(waitButton);

    // 4. Assertion: Preview button updated?
    expect(previewButton).toHaveClass("cursor-wait");

    // 5. User Action: Type new Label
    const labelInput = within(playgroundSection).getByLabelText("Label");
    await user.clear(labelInput);
    await user.type(labelInput, "Loading...");

    // 6. Assertion: Text updated?
    expect(
      within(playgroundSection).getByRole("button", { name: "Loading..." })
    ).toBeInTheDocument();
  });

  it("toggles drag classes correctly (Page Logic)", () => {
    render(<CursorPage />);

    // 1. Find the specific drag handle in Real World Examples
    const dragHandle = screen.getByText("Drag handle");

    // 2. Initial State
    expect(dragHandle).toHaveClass("cursor-grab");
    expect(dragHandle).not.toHaveClass("cursor-grabbing");

    // 3. Simulate Drag Start
    fireEvent.dragStart(dragHandle);

    // 4. Assert State Change (Logic lives in Page component)
    expect(dragHandle).toHaveClass("cursor-grabbing");

    // 5. Simulate Drag End
    fireEvent.dragEnd(dragHandle);

    // 6. Assert Revert
    expect(dragHandle).toHaveClass("cursor-grab");
  });
});
