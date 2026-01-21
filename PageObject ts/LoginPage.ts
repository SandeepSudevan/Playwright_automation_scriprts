import { Locator, Page } from "@playwright/test";
export class LoginPage {
  login: Locator;
  email: Locator;
  password: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.login = page.locator("[value='Login']");
    this.email = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
  }

  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }

  async loginValid(email: string, password: string) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.login.click();
    await this.page.waitForLoadState("networkidle");
  }
}
module.exports = { LoginPage };
