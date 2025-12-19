import { render, screen } from "@testing-library/react";
import MinWidthPage from "../page";


jest.mock("@/components/navbar", () => () => <nav>Navbar</nav>);
jest.mock("@/components/footer", () => () => <footer>Footer</footer>);
jest.mock("@/components/shared/page-hero", () => ({
  PageHero: () => <h1>Mock Hero</h1>,
}));
jest.mock("@/components/shared/utility-grid", () => ({
  UtilityGrid: () => <div data-testid="utility-grid">Grid</div>,
}));
jest.mock("@/app/utilities/sizing/min-width/min-width playground", () => ({
  MinWidthPlayground: () => <div data-testid="playground">Playground</div>,
}));
jest.mock("@/components/shared/tips-section", () => ({
  TipsSection: () => <div data-testid="tips">Tips</div>,
}));

describe("Min Width Page Integration", () => {
  it("composes all the sections in correct order", () => {
    render(<MinWidthPage />);

    // 1. Verify Shell
    expect(screen.getByText("Navbar")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();

    // 2. Verify Sections are present
    expect(
      screen.getByRole("heading", { name: "Mock Hero" })
    ).toBeInTheDocument();
    expect(screen.getByTestId("utility-grid")).toBeInTheDocument();
    expect(screen.getByTestId("playground")).toBeInTheDocument();
    expect(screen.getByTestId("Examples")).toBeInTheDocument();
    expect(screen.getByTestId("tips")).toBeInTheDocument();
  });
});
