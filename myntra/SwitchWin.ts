import { Page } from "@playwright/test";

export class SwitchWin {
  async getNewPage(page: Page, product: string): Promise<Page> {
    const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: product }).first().click(),
    ]);
    await newPage.waitForLoadState("domcontentloaded");

    return newPage;
  }
}
