import { test, expect } from "@playwright/test";
import { POManager } from "../myntra/POManager";
import data from "../myntra/baseURL.json";

test("Myntra", async ({ page }) => {
  const pomanager = new POManager(page);
  const login = pomanager.getLogin();
  await login.url(data.URL);

  const purchase = pomanager.getPurchase();
  for (let product of data.Product) {
    await purchase.getProduct(data.Search, product);
  }

  await page.pause();
});
