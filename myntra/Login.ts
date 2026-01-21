import { Page } from "@playwright/test";

export class Login {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async url(url: string) {
    await this.page.goto(url);
  }
}
