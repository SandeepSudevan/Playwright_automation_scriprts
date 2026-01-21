import { Locator, Page } from "@playwright/test";
export class CheckoutPage {
  wait: Locator;
  productText: Locator;
  checkout: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.wait = page.locator("div li");
    this.productText = page.locator("h3:has-text('ZARA COAT 3')");
    this.checkout = page.locator("text=Checkout");
  }

  async product(productName: string) {
    await this.wait.first().waitFor();
    const bool = await this.page
      .locator("h3:has-text('" + productName + "')")
      .isVisible();
    return bool;
  }
  async checkOut() {
    await this.checkout.click();
  }
}
module.exports = { CheckoutPage };
