const { test, expect, request } = require("@playwright/test");
let token;
let orderCode;

const payload = {
  userEmail: "w416@ofular.com",
  userPassword: "SANDzio:;33333",
};
const payload2 = {
  orders: [{ country: "India", productOrderedId: "67a8df56c0d3e6622a297ccd" }],
};
test.beforeAll(async () => {
  const apiContest = await request.newContext();
  const loginResponse = await apiContest.post(
    "https://rahulshettyacademy.com/api/ecom/auth/login",
    {
      data: payload,
    }
  );
  expect(loginResponse.ok()).toBeTruthy();
  const json = await loginResponse.json();
  token = json.token;
  console.log(token);

  const orderResponse = await apiContest.post(
    "https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
      data: payload2,
      headers: {
        "Authorization": token,
        "Content-Type": "application/json",
      },
    }
  );
  const json2 = await orderResponse.json();
  orderCode = json2.orders[0];
  console.log(orderCode);
});

test("Practice Playwright Test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  await page.goto("https://rahulshettyacademy.com/client");

  const userEmail = page.locator("#userEmail");
  const userPassword = page.locator("#userPassword");
  const login = page.locator("#login");
  const email = "w416@ofular.com";
  const password = "SANDzio:;33333";
  const productName = "IPHONE 13 PRO";
  const productCard = page.locator(".card-body");

  //await page.locator(".login-wrapper-footer-text").click();

  //await userEmail.fill(email);
  //await userPassword.fill(password);
  //await login.click();
  //await page.waitForSelector(".card-body");
  /* const count = await productCard.count();
  console.log(count);

  for (let i = 0; i < count; ++i) {
    if ((await productCard.nth(i).locator("b").textContent()) === productName) {
      await productCard.nth(i).locator("text= Add To Cart").click();
      console.log("clicked");
      break;
    }
  }
  await page.locator("button[routerlink*='cart']").click();
  await page.locator("div li.items").first().waitFor();
  const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
  expect(bool).toBeTruthy();

  await page.locator("text=Checkout").click();

  //await page.locator("[value*='4542']").fill("1111 1111 1111 1111");
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
  await page.locator("[placeholder*='Country']").pressSequentially("ind");
  const searchResultsBox = page.locator(".ta-results");
  await searchResultsBox.waitFor();
  const countryButton = searchResultsBox.locator("button");
  const countCountry = await countryButton.count();
  for (let i = 0; i < countCountry; ++i) {
    const countryText = await countryButton.nth(i).textContent();
    if (countryText === " India") {
      await countryButton.nth(i).click();
      break;
    }
  }
  await page.locator(".action__submit").click(); 

  await expect(page.locator(".hero-primary")).toHaveText(
    " Thankyou for the order. "
  );
  const orderCode = await page.locator("label.ng-star-inserted").textContent();
  console.log(orderCode);
  const code = orderCode.split("|")[1].trim();
  console.log(code); */

  await page.locator("button[routerlink*='/myorders']").click();

  const id = page.locator("[scope='row']");
  await id.last().waitFor();
  const idCount = await id.count();
  //console.log(idCount);
  for (let i = 0; i < idCount; ++i) {
    const idText = await id.nth(i).textContent();
    //console.log(idText);
    if (idText === orderCode) {
      const view = await page.locator("td .btn-primary").nth(i).click();
      break;
    }
  }
  //await page.pause();
});
