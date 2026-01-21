const { LoginPage } = require("./LoginPage");
const { DashboardPage } = require("./DashboardPage");
const { CheckoutPage } = require("./CheckoutPage");
const { OrderConfirmPage } = require("./OrderConfirmPage");
const { OrderHistoryPage } = require("./OrderHistoryPage");

class POManager {
  constructor(page) {
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.orderConfirmPage = new OrderConfirmPage(page);
    this.orderHistoryPage = new OrderHistoryPage(page);
  }

  getLogin() {
    return this.loginPage;
  }
  getDashboard() {
    return this.dashboardPage;
  }
  getCheckout() {
    return this.checkoutPage;
  }
  getOrderconfirm() {
    return this.orderConfirmPage;
  }
  getOrderhistory() {
    return this.orderHistoryPage;
  }
}
module.exports = { POManager };
