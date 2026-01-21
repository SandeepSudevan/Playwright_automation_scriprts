import { Locator, Page } from "@playwright/test";

export class OrderConfirmPage {
  pressSeq: Locator;
  dropdown: Locator;
  username: Locator;
  submit: Locator;
  hero: Locator;

  constructor(page: Page) {
    this.pressSeq = page.locator("[placeholder*='Country']");
    this.dropdown = page.locator(".ta-results");
    this.username = page.locator(".user__name [type='text']");
    this.submit = page.locator(".action__submit");
    this.hero = page.locator(".hero-primary");
  }

  async confirmOrder() {
    await this.pressSeq.pressSequentially("ind", { delay: 150 });
    const dropdown = this.dropdown;
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
        await dropdown.locator("button").nth(i).click();
        break;
      }
    }
  }
  async submitOrder() {
    await this.submit.click();
  }
}
module.exports = { OrderConfirmPage };
