import { test, expect } from "@playwright/test";

test.describe("Cursor Page Layout", () => {
  test("layout does not collapse on small screens", async ({ page }) => {
    
    await page.goto("/utilities/interactivity/cursor");
    
    await page.setViewportSize({ width: 375, height: 667 });

    const utilityGrid = page.getByRole("region", { name: /cursor utilities/i });
    
    await expect(utilityGrid).toBeVisible();
  });
});