import { test, expect } from "@playwright/test";

test.describe("Make Appointment", () => {
  test.beforeEach("Login with Valid Credentials", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("div h1")).toHaveText("CURA Healthcare Service");
    await page.getByRole("link", { name: "Make Appointment" }).click();
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.locator("h2")).toContainText("Make Appointment");
  });
  test("Should make an appointment with non-default values", async ({
    page,
  }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page
      .getByRole("checkbox", { name: "Apply for hospital readmission" })
      .check();
    await page.getByRole("radio", { name: "Medicaid" }).check();
    await page.locator('//input[@placeholder="dd/mm/yyyy"]').click();
    await page.keyboard.type("01/01/2026");
    await page.keyboard.press("Tab");
    await page
      .getByRole("textbox", { name: "Comment" })
      .fill("This is the multi-line comments\nThis is captured by Playwright");
    await page.getByRole("button", { name: "Book Appointment" }).click();
    await expect(
      page.getByRole("link", { name: "Go to Homepage" })
    ).toBeVisible();
  });
});
