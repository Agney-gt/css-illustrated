import { render, screen } from "@testing-library/react";
import { ComparisonTable } from "@/components/shared/comparison-table";

const columns = ["Feature", "Lib A", "Lib B"];
const rows = [
  { feature: "Responsive", values: ["Yes", "No"] },
  { feature: "Dark mode", values: ["Yes", "Yes"] },
];

describe("ComparisonTable (Shared)", () => {
  it("renders title, columns and rows", () => {
    render(<ComparisonTable title="My Table" columns={columns} rows={rows} />);

    expect(
      screen.getByRole("heading", { name: /my table/i })
    ).toBeInTheDocument();

    // Column headers
    expect(screen.getByText("Feature")).toBeInTheDocument();
    expect(screen.getByText("Lib A")).toBeInTheDocument();
    expect(screen.getByText("Lib B")).toBeInTheDocument();

    // Row content
    expect(screen.getByText("Responsive")).toBeInTheDocument();
    // There may be multiple "Yes" cells across the table; assert at least one exists
    expect(screen.getAllByText("Yes").length).toBeGreaterThan(0);
  });

  it("applies compact variant class to the table", () => {
    const { container } = render(
      <ComparisonTable
        title="Compact"
        columns={columns}
        rows={rows}
        variant="compact"
      />
    );

    // The table element should have class that results in compact styling (text-xs)
    const table = container.querySelector("table");
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass("text-xs");
  });
});
