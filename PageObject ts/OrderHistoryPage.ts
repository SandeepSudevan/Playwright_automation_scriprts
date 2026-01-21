import { Locator, Page } from "@playwright/test";

export class OrderHistoryPage {
  orderID: Locator;
  order: Locator;
  wait: Locator;
  rows: Locator;
  orderIDdetails: Locator;

  constructor(page: Page) {
    this.orderID = page.locator(".em-spacer-1 .ng-star-inserted");
    this.order = page.locator("button[routerlink*='myorders']");
    this.wait = page.locator("tbody");
    this.rows = page.locator("tbody tr");
    this.orderIDdetails = page.locator(".col-text");
  }

  async getOrderID() {
    const orderId = await this.orderID.textContent();
    console.log(orderId);
    return orderId;
  }

  async fetchOrder(orderId: any) {
    await this.order.click();
    await this.wait.waitFor();
    const rows = await this.rows;

    for (let i = 0; i < (await rows.count()); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
        await rows.nth(i).locator("button").first().click();
        break;
      }
    }
  }
  async getOrderIdDetails() {
    const orderIdDetails = await this.orderIDdetails.textContent();
    return orderIdDetails;
  }
}
module.exports = { OrderHistoryPage };
