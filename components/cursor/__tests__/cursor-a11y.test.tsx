import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import CursorPage from "@/app/utilities/interactivity/cursor/page";

// Add matcher
expect.extend(toHaveNoViolations);

describe("Cursor Page Accessibility", () => {
  it("has no detectable accessibility violations", async () => {
    // Render the WHOLE page composition
    const { container } = render(<CursorPage />);

    // Run the audit
    const results = await axe(container);

    // Assert
    expect(results).toHaveNoViolations();
  });
});
