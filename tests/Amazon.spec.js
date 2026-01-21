const { test, expect } = require("@playwright/test");
const { POManager } = require("../PajeObject Amazon/POManager");
const data = JSON.parse(JSON.stringify(require("../Utils/AmazonData.json")));

test("Amazon", async function ({ browser }) {
  const context = await browser.newContext();
  const page = await context.newPage();

  const poManager = new POManager(page, context, expect);

  const signIn = poManager.getSignInPage();
  await signIn.goTo();
  //await signIn.userLogin(data.phoneNumber, data.password);

  const itemPage = poManager.getItemPage();
  await itemPage.selectItem(data.itemName);

  const cartPage = poManager.getCartPage();
  await cartPage.cart(data.itemName);

  await page.pause();
});
