const { CartPage } = require("./CartPage");
const { ItemPage } = require("./ItemPage");
const { SignIn } = require("./SignIn");

class POManager {
  constructor(page, context, expect) {
    this.signIn = new SignIn(page);
    this.itemPage = new ItemPage(page, context);
    this.cartPage = new CartPage(page, expect);
  }

  getSignInPage() {
    return this.signIn;
  }
  getItemPage() {
    return this.itemPage;
  }
  getCartPage() {
    return this.cartPage;
  }
}
module.exports = { POManager };
