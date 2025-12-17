import { test, expect } from "@playwright/test";

test.describe("Cursor Page Visual Regression", () => {
  test("renders the utility grid without layout shifts", async ({ page }) => {
    await page.goto("/utilities/interactivity/cursor");

    // 1. Wait for the specific section to be stable
    const utilitySection = page.getByRole("region", {
      name: /cursor utilities/i,
    });

    // 2. Take a screenshot of JUST that component (stable boundary)
    // Note: The first time you run this, it will fail and create a "golden" image.
    // Subsequent runs will compare against that image.
    await expect(utilitySection).toHaveScreenshot("utility-grid.png", {
      maxDiffPixelRatio: 0.02, 
    });
  });
});
