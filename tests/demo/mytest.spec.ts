import { Locator, expect, test } from "@playwright/test";

test("Should validate the Title and Header Text", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator("div h1")).toHaveText("CURA Healthcare Service");
});
test(
  "Should do something else",
  { annotation: { type: "BUG-123", description: "Bug Description" } },
  async ({ page }, testInfo) => {}
);
