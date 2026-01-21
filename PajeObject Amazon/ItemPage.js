class ItemPage {
  constructor(page, context) {
    this.page = page;
    this.context = context;
    this.searcBar = page.locator("#twotabsearchtextbox");
    this.searchButton = page.locator("#nav-search-submit-button");
    this.itemWebName = page.locator("h2[class*='a-size-base-plus'] span");
    this.pageination = page
      .locator(".a-list-item a[class*='s-pagination-item']")
      .nth(0);
  }

  async selectItem(itemName) {
    for (let j = 0; j < itemName.length; j++) {
      await this.searcBar.fill(itemName[j]);
      await this.searchButton.click();

      await this.page.waitForSelector(
        ".a-list-item a[class*='s-pagination-item']",
        {
          timeout: 10000,
        }
      );

      for (let i = 0; i < (await this.itemWebName.count()); i++) {
        await this.page.waitForTimeout(2000);
        if ((await this.itemWebName.nth(i).textContent()) === itemName[j]) {
          const [page2] = await Promise.all([
            this.context.waitForEvent("page"),
            this.itemWebName.nth(i).click(),
          ]);
          const addtocartButton = page2.locator("#add-to-cart-button");
          await addtocartButton.click();
          await page2.close();
          break;
        } else if (await this.pageination.isVisible()) {
          await this.pageination.click();
          await this.page.waitForTimeout(2000);
          continue;
        } else {
          console.log("item not found");
          break;
        }
      }
    }
  }
}
module.exports = { ItemPage };
