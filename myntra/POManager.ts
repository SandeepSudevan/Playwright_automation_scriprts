import { Page } from "@playwright/test";
import { Login } from "./Login";
import { Purchase } from "./Purchase";

export class POManager {
  login: Login;
  purchase: Purchase;
  constructor(page: Page) {
    this.login = new Login(page);
    this.purchase = new Purchase(page);
  }

  getLogin() {
    return this.login;
  }
  getPurchase() {
    return this.purchase;
  }
}
