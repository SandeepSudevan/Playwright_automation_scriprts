class CartPage {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.cartbutton = page.locator("#nav-cart-count");
  }

  async cart(itemName) {
    for (let j = 0; j < itemName.length; j++) {
      await this.cartbutton.click();
      const cartItem = this.page.locator(
        "div[data-csa-c-posx='" + (j + 1) + "']"
      );
      await this.expect(cartItem).toBeVisible();
    }
  }
}
module.exports = { CartPage };
