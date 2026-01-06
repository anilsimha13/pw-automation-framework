import { test, Locator, expect } from "@playwright/test";

test.describe("Should not consist of any Zero pricing", () => {
  test.beforeEach(
    "Should login into the system as standard user",
    async ({ page }) => {
      await page.goto("https://www.saucedemo.com/");
      await page.locator("#user-name").fill("standard_user");
      await page.locator("#password").fill("secret_sauce");
      await page.locator("#login-button").click();
    }
  );
  test("Should have a title", async ({ page }) => {
    await expect(page).toHaveURL(/.*\/inventory/);
  });
  test("Should contain the prices as non-zero values", async ({ page }) => {
    const productNames = await page
      .locator('//div[@data-test="inventory-item-name"]')
      .all();
    const productPrices = await page
      .locator('//div[@data-test="inventory-item-price"]')
      .all();
    for (let productName of productNames) {
      let pn = await productName.textContent();
      console.log(pn);
    }

    for (let productPrice of productPrices) {
      let pp = await productPrice.textContent();
      console.log(pp);
      const priceValue = parseFloat(pp?.replace("$", "") || "0");
      console.log(priceValue);
      expect(priceValue).toBeGreaterThan(0);
    }
  });
});
