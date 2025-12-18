import { render, screen } from "@testing-library/react";
import { PointerExamples } from "../pointer-examples";

// Mock the generic layouts to focus on content
jest.mock("@/components/shared/example-section", () => ({
  ExampleSection: ({ children, title }: any) => (
    <section aria-label={title}>{children}</section>
  ),
  ExampleCard: ({ title, description }: any) => (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  ),
}));

describe("PointerExamples Component", () => {
  it("renders all 5 practical patterns", () => {
    render(<PointerExamples />);

    // 1. Modal
    expect(
      screen.getByRole("heading", { name: /modal backdrop/i })
    ).toBeInTheDocument();

    // 2. Decorative
    expect(
      screen.getByRole("heading", { name: /decorative overlay/i })
    ).toBeInTheDocument();

    // 3. Banner (Nested)
    expect(
      screen.getByRole("heading", { name: /click-through banner/i })
    ).toBeInTheDocument();

    // 4. Hit Area
    expect(
      screen.getByRole("heading", { name: /enlarged hit area/i })
    ).toBeInTheDocument();

    // 5. SVG
    expect(
      screen.getByRole("heading", { name: /svg — precise/i })
    ).toBeInTheDocument();
  });

  it("includes accessibility notes", () => {
    render(<PointerExamples />);
    expect(screen.getByText(/accessibility & ux notes/i)).toBeInTheDocument();
    expect(screen.getByText(/keyboard focus/i)).toBeInTheDocument();
  });
});
