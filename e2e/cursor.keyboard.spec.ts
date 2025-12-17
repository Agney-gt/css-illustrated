import { test, expect } from "@playwright/test";

test.describe("Cursor Page Interaction", () => {
  test("utility grid is navigable via keyboard", async ({ page }) => {

    await page.goto("/utilities/interactivity/cursor");

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    
    const firstUtility = page.getByRole("button", { name: /copy cursor-auto/i }); 
    
    await expect(firstUtility).toBeVisible();
  });
});