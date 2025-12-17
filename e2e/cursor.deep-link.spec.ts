import { test, expect } from "@playwright/test";

test.describe("Cursor Page Deep Linking", () => {
  test("loads correctly when navigating directly to the URL", async ({
    page,
  }) => {
    // 1. Simulate a fresh page load (like a user clicking a link from an email)
    await page.goto("/utilities/interactivity/cursor");

    // 2. Verify critical interactive elements are ready immediately
    const input = page.getByLabel("Label");
    await expect(input).toBeVisible();
    await expect(input).toHaveValue("Click me"); // Default state
  });

  // Future-proofing: If you add query params (e.g. ?cursor=wait), add this test:
  /*
  test("hydrates state from query parameters", async ({ page }) => {
    await page.goto("/utilities/interactivity/cursor?label=Hello");
    await expect(page.getByLabel("Label")).toHaveValue("Hello");
  });
  */
});
