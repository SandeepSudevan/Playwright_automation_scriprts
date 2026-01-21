const { test, expect } = require("@playwright/test");

test("Playwright Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/client");

  await page.getByPlaceholder("email@example.com").fill("w416@ofular.com");
  await page.getByPlaceholder("enter your passsword").fill("SANDzio:;33333");
  await page.getByRole("button", { name: "login" }).click();
  await page.waitForSelector(".card-body");

  await page
    .locator(".card-body")
    .filter({ hasText: "IPHONE 13 PRO" })
    .getByRole("button", { name: " Add To Cart" })
    .click();
  await page
    .getByRole("listitem")
    .getByRole("button", { name: "Cart" })
    .click();
  await page.locator("div li.items").first().waitFor();

  await expect(page.getByText("IPHONE 13 PRO")).toBeVisible();
  await page.getByRole("button", { name: "Checkout" }).click();

  await page.locator("input[class='input txt']").first().fill("026");
  await page
    .locator("input[class='input txt']")
    .last()
    .fill("rahulshettyacademy");
  await page.locator("[name='coupon']").fill("rahulshettyacademy");
  await page.locator("button.mt-1").click();
  const coupon = page.locator("text=* Coupon Applied");
  await coupon.waitFor();
  expect(coupon.isVisible()).toBeTruthy;
  await page.getByPlaceholder("Select Country").pressSequentially("ind");
  await page.getByRole("button", { name: "India" }).nth(1).click();
  await page.getByText("Place Order ").click();

  await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();
});
