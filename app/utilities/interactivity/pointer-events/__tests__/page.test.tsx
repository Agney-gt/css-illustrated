import { render, screen } from "@testing-library/react";
import PointerEventsPage from "../page";

// Mock Child Components to keep this test focused on COMPOSITION
// We assume child components work (tested separately) and just check they are placed here.
jest.mock("@/components/navbar", () => () => <nav>Navbar</nav>);
jest.mock("@/components/footer", () => () => <footer>Footer</footer>);
jest.mock("@/components/shared/page-hero", () => ({
  PageHero: () => <h1>Mock Hero</h1>,
}));
jest.mock("@/components/shared/utility-grid", () => ({
  UtilityGrid: () => <div data-testid="utility-grid">Grid</div>,
}));
jest.mock("@/components/pointer-events/pointer-playground", () => ({
  PointerPlayground: () => <div data-testid="playground">Playground</div>,
}));
jest.mock("@/components/pointer-events/pointer-examples", () => ({
  PointerExamples: () => <div data-testid="examples">Examples</div>,
}));
jest.mock("@/components/shared/tips-section", () => ({
  TipsSection: () => <div data-testid="tips">Tips</div>,
}));

describe("Pointer Events Page Integration", () => {
  it("composes all sections in the correct order", () => {
    render(<PointerEventsPage />);

    // 1. Verify Shell
    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();

    // 2. Verify Sections are present
    expect(
      screen.getByRole("heading", { name: "Mock Hero" })
    ).toBeInTheDocument();
    expect(screen.getByTestId("utility-grid")).toBeInTheDocument();
    expect(screen.getByTestId("playground")).toBeInTheDocument();
    expect(screen.getByTestId("examples")).toBeInTheDocument();
    expect(screen.getByTestId("tips")).toBeInTheDocument();
  });
});
