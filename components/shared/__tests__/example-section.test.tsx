import { render, screen } from "@testing-library/react";
import {
  ExampleSection,
  ExampleCard,
} from "@/components/shared/example-section";

// Mock Hook
jest.mock("@/hooks/use-copy-to-clipboard", () => ({
  useCopyToClipboard: () => ({ copy: jest.fn() }),
}));

describe("Example System (Shared)", () => {
  it("renders a section with cards", () => {
    render(
      <ExampleSection title="My Examples">
        <ExampleCard title="Card 1" description="Desc 1" code="code1">
          <div>Preview 1</div>
        </ExampleCard>
      </ExampleSection>
    );

    expect(
      screen.getByRole("heading", { name: "My Examples" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Card 1" })).toBeInTheDocument();
    expect(screen.getByText("Desc 1")).toBeInTheDocument();
  });
});
