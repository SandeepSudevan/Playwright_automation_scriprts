import { When, Then, Given } from "@cucumber/cucumber";
import { test, expect, chromium } from "@playwright/test";

Given(
  "Login to the application with {string} and {string}",
  async function (username: string, password: string) {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    await this.page.goto("https://www.saucedemo.com");
    await this.page.getByPlaceholder("Username").fill(username);
    await this.page.getByPlaceholder("Password").fill(password);
    await this.page.getByRole("button", { name: "Login" }).click();
  }
);

Then("adding a shirt to Cart", async function () {
  await this.page
    .locator(".inventory_item")
    .filter({ hasText: "Sauce Labs Onesie" })
    .getByRole("button", { name: "Add to cart" })
    .click();
});

When("goint to cart and checking out", async function () {
  await this.page.locator(".shopping_cart_link").click();
  await this.page.getByRole("button", { name: "Checkout" }).click();
});

Then(
  "entering the {string}, {string} and {string}",
  async function (firstName: string, lastName: string, zipCode: string) {
    await this.page.getByPlaceholder("First Name").fill(firstName);
    await this.page.getByPlaceholder("Last Name").fill(lastName);
    await this.page.getByPlaceholder("Zip/Postal Code").fill(zipCode);
    await this.page.getByRole("button", { name: "Continue" }).click();
  }
);

Then("Completing the Transaction", async function () {
  await this.page.getByRole("button", { name: "Finish" }).click();

  await this.page.getByRole("button", { name: "Back Home" }).click();

  //await page.pause();
});
