import { render, screen } from "@testing-library/react";
import { MentalModelSection } from "@/components/shared/mental-model-section";

const features = ["Feature A", "Feature B"];

describe("MentalModelSection (Shared)", () => {
  it("renders title, description, features and layer assignment", () => {
    render(
      <MentalModelSection
        title="Model"
        description="Short desc"
        features={features}
        layerAssignment="Layer 1"
        browserBehavior="Some behavior"
      />
    );

    expect(screen.getByRole("heading", { name: /model/i })).toBeInTheDocument();
    expect(screen.getByText(/short desc/i)).toBeInTheDocument();

    // Features list
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(2);
    expect(screen.getByText(/layer assignment/i)).toBeInTheDocument();

    // Browser behavior block
    expect(screen.getByText(/browser behavior:/i)).toBeInTheDocument();
    expect(screen.getByText(/some behavior/i)).toBeInTheDocument();
  });

  it("omits features block gracefully when no features provided", () => {
    render(
      <MentalModelSection
        title="No Features"
        description="desc"
        features={[]}
        layerAssignment=""
      />
    );

    expect(
      screen.getByRole("heading", { name: /no features/i })
    ).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
