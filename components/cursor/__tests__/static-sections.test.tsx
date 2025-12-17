import { render, screen } from "@testing-library/react";
import { CursorHero } from "@/components/cursor/cursor-hero";
import { CursorTips } from "@/components/cursor/cursor-tips";

describe("Static Cursor Sections", () => {
  it("renders the Hero section with correct hierarchy", () => {
    render(<CursorHero />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /cursor & pointer/i
    );
    expect(
      screen.getByText(/choose the appropriate cursor/i)
    ).toBeInTheDocument();
  });

  it("renders the Tips section with semantic list", () => {
    render(<CursorTips />);

    expect(
      screen.getByRole("heading", { name: /tips & best practices/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(4);
  });
});
