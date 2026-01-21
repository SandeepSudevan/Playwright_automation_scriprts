const { When, Then, Given } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { playwright } = require("@playwright/test");
const { chromium } = require("playwright");
const { POManager } = require("../../PageObject/POManager");

Given(
  "a login to Ecommerce application with {string} and {string}",
  async function (email, password) {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    this.page = page;
    this.poManager = new POManager(page);
    const loginPage = this.poManager.getLogin();
    await loginPage.goTo();
    await loginPage.loginValid(email, password);
  }
);

When("Add {string} to Cart", async function (productName) {
  const dasboardPage = this.poManager.getDashboard();
  await dasboardPage.searchAndAddCart(productName);
  await dasboardPage.goToCart();
});

Then("Verify {string} is displayed in the Cart", async function (productName) {
  const checkoutPage = this.poManager.getCheckout();
  const productVerify = await checkoutPage.product(productName);
  expect(productVerify).toBeTruthy();
  await checkoutPage.checkOut();
});

When(
  "Enter valid details and Place the Order and verify {string}",
  async function (email) {
    const confirmOrderPage = this.poManager.getOrderconfirm();
    await confirmOrderPage.confirmOrder();
    expect(this.page.locator(".user__name [type='text']").first()).toHaveText(
      email
    );
    await confirmOrderPage.submitOrder();
    await expect(this.page.locator(".hero-primary")).toHaveText(
      " Thankyou for the order. "
    );
  }
);

Then("Verify order in present in the OrderHistory", async function () {
  const historyPage = this.poManager.getOrderhistory();
  const orderId = await historyPage.getOrderID();
  await historyPage.fetchOrder(orderId);
  const orderIdDetails = await historyPage.getOrderIdDetails();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();
});
