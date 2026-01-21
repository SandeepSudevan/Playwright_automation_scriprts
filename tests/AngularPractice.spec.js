const { test, expect } = require("@playwright/test");

test("Angular Practice", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/angularpractice/");

  await page
    .locator("input[class*='form-control'][name='name']")
    .fill("Daszio");
  await page.locator("input[name='email']").fill("teworiv606@linacit.com");
  await page.getByPlaceholder("Password").fill("SANDZIO:;33333");
  await page.getByLabel("Check me out if you Love IceCreams!").check();
  await page.getByLabel("Gender").selectOption("Male");
  await page.getByLabel("Employed").check();
  await page.getByRole("button", { name: "Submit" }).click();
  await page
    .getByText("Success! The Form has been submitted successfully!.")
    .isVisible();
  await page.getByRole("link", { name: "Shop" }).click();
  await page
    .locator("app-card")
    .filter({ hasText: "Blackberry" })
    .getByRole("button")
    .click();
});
