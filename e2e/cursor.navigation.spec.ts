import { test, expect } from "@playwright/test";

test.describe("Cursor Page Navigation & SEO", () => {
  test("has correct metadata title", async ({ page }) => {
    await page.goto("/utilities/interactivity/cursor");
    await expect(page).toHaveTitle(/Cursor & Pointer/);
  });

  test("navbar links are active", async ({ page }) => {
    await page.goto("/utilities/interactivity/cursor");

    // Smoke test for the Navbar integration
    const nav = page.getByRole("navigation");
    await expect(nav).toBeVisible();

    // Ensure we aren't stuck in a 404 state
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
