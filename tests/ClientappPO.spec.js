const { test, expect } = require("@playwright/test");
const { POManager } = require("../PageObject/POManager");
const dataset = JSON.parse(JSON.stringify(require("../Utils/PageObject.json")));

for (const data of dataset) {
  test(`@WebList Client App login ${data.productName}`, async ({ page }) => {
    //js file- Login js, DashboardPage
    const poManager = new POManager(page);
    const loginPage = poManager.getLogin();
    await loginPage.goTo();
    await loginPage.loginValid(data.email, data.password);

    const dasboardPage = poManager.getDashboard();
    await dasboardPage.searchAndAddCart(data.productName);
    await dasboardPage.goToCart();

    const checkoutPage = poManager.getCheckout();
    const productVerify = await checkoutPage.product(data.productName);
    expect(productVerify).toBeTruthy();
    await checkoutPage.checkOut();

    const confirmOrderPage = poManager.getOrderconfirm();
    await confirmOrderPage.confirmOrder();
    expect(page.locator(".user__name [type='text']").first()).toHaveText(
      data.email
    );
    await confirmOrderPage.submitOrder();
    await expect(page.locator(".hero-primary")).toHaveText(
      " Thankyou for the order. "
    );

    const historyPage = poManager.getOrderhistory();
    const orderId = await historyPage.getOrderID();
    await historyPage.fetchOrder(orderId);
    const orderIdDetails = await historyPage.getOrderIdDetails();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();

    //const products = page.locator(".card-body");
    //   await page.goto("https://rahulshettyacademy.com/client");
    //   await page.locator("#userEmail").fill(email);
    //   await page.locator("#userPassword").fill("SANDzio:;33333");
    //   await page.locator("[value='Login']").click();
    //await page.waitForLoadState("networkidle");
    //await page.locator(".card-body b").first().waitFor();
    //const titles = await page.locator(".card-body b").allTextContents();
    //console.log(titles);
    //   const count = await products.count();
    //   for (let i = 0; i < count; ++i) {
    //     if ((await products.nth(i).locator("b").textContent()) === productName) {
    //       //add to cart
    //       await products.nth(i).locator("text= Add To Cart").click();
    //       break;
    //     }
    //   }

    //   await page.locator("[routerlink*='cart']").click();
    //await page.pause();

    //   await page.locator("div li").first().waitFor();
    //   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
    //   expect(bool).toBeTruthy();
    //   await page.locator("text=Checkout").click();

    // await page
    //   .locator("[placeholder*='Country']")
    //   .pressSequentially("ind", { delay: 150 });
    // const dropdown = page.locator(".ta-results");
    // await dropdown.waitFor();
    // const optionsCount = await dropdown.locator("button").count();
    // for (let i = 0; i < optionsCount; ++i) {
    //   const text = await dropdown.locator("button").nth(i).textContent();
    //   if (text === " India") {
    //     await dropdown.locator("button").nth(i).click();
    //     break;
    //   }
    // }

    // expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
    // await page.locator(".action__submit").click();
    // await expect(page.locator(".hero-primary")).toHaveText(
    //   " Thankyou for the order. "
    // );
    // const orderId = await page
    //   .locator(".em-spacer-1 .ng-star-inserted")
    //   .textContent();
    // console.log(orderId);

    // await page.locator("button[routerlink*='myorders']").click();
    // await page.locator("tbody").waitFor();
    // const rows = await page.locator("tbody tr");

    // for (let i = 0; i < (await rows.count()); ++i) {
    //   const rowOrderId = await rows.nth(i).locator("th").textContent();
    //   if (orderId.includes(rowOrderId)) {
    //     await rows.nth(i).locator("button").first().click();
    //     break;
    //   }
    // }
    // const orderIdDetails = await page.locator(".col-text").textContent();
    // expect(orderId.includes(orderIdDetails)).toBeTruthy();
  });
}
