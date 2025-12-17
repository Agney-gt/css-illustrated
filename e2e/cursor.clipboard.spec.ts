import { test, expect } from "@playwright/test";

test.describe("Cursor Clipboard Functionality", () => {
  test("copies utility class to clipboard on click", async ({
    page,
    context,
  }) => {
    // 1. Grant clipboard permissions to the browser context
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);

    await page.goto("/utilities/interactivity/cursor");

    // 2. Find a specific utility button (e.g., cursor-pointer)
    // Note: We use the accessible name we set up in the component
    const copyButton = page.getByRole("button", {
      name: /copy cursor-pointer/i,
    });

    // 3. Click it
    await copyButton.click();

    // 4. Verification A: Check UI Feedback ("Copied")
    await expect(page.getByText("Copied")).toBeVisible();

    // 5. Verification B: Check Actual Clipboard Content
    // This is the "Integration" test that RTL cannot do
    const handle = await page.evaluateHandle(() =>
      navigator.clipboard.readText()
    );
    const clipboardContent = await handle.jsonValue();

    expect(clipboardContent).toBe("cursor-pointer");
  });
});
