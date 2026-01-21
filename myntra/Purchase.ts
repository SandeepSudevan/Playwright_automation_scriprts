import { Page, Locator } from "@playwright/test";
import { SwitchWin } from "./SwitchWin";

export class Purchase {
  page: Page;
  searchText: Locator;
  newWindow: SwitchWin;
  constructor(page: Page) {
    this.page = page;
    this.newWindow = new SwitchWin();
    this.searchText = page.getByPlaceholder(
      "Search for products, brands and more",
    );
  }

  async getProduct(search: string, product: string) {
    await this.searchText.fill(search);
    await this.page.keyboard.press("Enter");
    const newPage = await this.newWindow.getNewPage(this.page, product);
    await newPage.locator("//div[normalize-space()='ADD TO BAG']").click();
    await newPage.close();
    await this.page.reload();
  }
}
