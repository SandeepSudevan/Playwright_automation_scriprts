import { CheckoutPage } from "./CheckoutPage";
import { DashboardPage } from "./DashboardPage";
import { LoginPage } from "./LoginPage";
import { OrderConfirmPage } from "./OrderConfirmPage";
import { OrderHistoryPage } from "./OrderHistoryPage";
import { Page } from "@playwright/test";

export class POManager {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  checkoutPage: CheckoutPage;
  orderConfirmPage: OrderConfirmPage;
  orderHistoryPage: OrderHistoryPage;

  constructor(page: Page) {
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
