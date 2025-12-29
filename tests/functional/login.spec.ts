import { test, expect } from "@playwright/test";

test.describe("Login Functionality", () => {
  test.beforeEach("Go to Login Page", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("div h1")).toHaveText("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.locator("#login")).toContainText(
      "Please login to make appointment."
    );
  });

  test("Should Login Successfully", async ({ page }) => {
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });
  test("Should privent login with incorrect creds", async ({ page }) => {
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword!");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("#login")).toContainText(
      "Login failed! Please ensure the username and password are valid."
    );
  });
});
