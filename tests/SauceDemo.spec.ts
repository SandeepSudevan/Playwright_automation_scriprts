import { test, Page } from "@playwright/test";

//test.describe.configure({ mode: "parallel" });
test("@Test1 Sauce Labs Onesie", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  const fullText = await page.locator("#login_credentials").innerText();

  const username = fullText
    .split("\n")
    .map((t) => t.trim())
    .find((t) => t === "standard_user");

  const fullText2 = await page.locator(".login_password").innerText();
  const password = fullText2
    .split("\n")
    .map((t) => t.trim())
    .find((t) => t === "secret_sauce");

  console.log(username);
  console.log(password);

  if (!username || !password) {
    throw new Error("Username or Password not found");
  }

  await page.getByPlaceholder("Username").fill(username);
  await page.getByPlaceholder("Password").fill(password);
  await page.getByRole("button", { name: "Login" }).click();

  await page
    .locator(".inventory_item")
    .filter({ hasText: "Sauce Labs Onesie" })
    .getByRole("button", { name: "Add to cart" })
    .click();

  await page.locator(".shopping_cart_link").click();
  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByPlaceholder("First Name").fill("Daszio");
  await page.getByPlaceholder("Last Name").fill("Fernadez");
  await page.getByPlaceholder("Zip/Postal Code").fill("600077");
  await page.getByRole("button", { name: "Continue" }).click();

  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "Back Home" }).click();

  //await page.pause();
});

test("@Test2 Sauce Labs Bolt T-Shirt", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  const fullText = await page.locator("#login_credentials").innerText();

  const username = fullText
    .split("\n")
    .map((t) => t.trim())
    .find((t) => t === "standard_user");

  const fullText2 = await page.locator(".login_password").innerText();
  const password = fullText2
    .split("\n")
    .map((t) => t.trim())
    .find((t) => t === "secret_sauce");

  console.log(username);
  console.log(password);

  if (!username || !password) {
    throw new Error("Username or Password not found");
  }

  await page.getByPlaceholder("Username").fill(username);
  await page.getByPlaceholder("Password").fill(password);
  await page.getByRole("button", { name: "Login" }).click();

  await page
    .locator(".inventory_item")
    .filter({ hasText: "Sauce Labs Bolt T-Shirt" })
    .getByRole("button", { name: "Add to cart" })
    .click();

  await page.locator(".shopping_cart_link").click();
  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByPlaceholder("First Name").fill("Daszio");
  await page.getByPlaceholder("Last Name").fill("Fernadez");
  await page.getByPlaceholder("Zip/Postal Code").fill("600077");
  await page.getByRole("button", { name: "Continue" }).click();

  await page.getByRole("button", { name: "Finish" }).click();

  await page.getByRole("button", { name: "Back Home" }).click();

  // await page.pause();
});
