class SignIn {
  constructor(page) {
    this.page = page;
    this.signInButton = page.locator("#nav-link-accountList-nav-line-1");
    this.phoneNo = page.locator("#ap_email_login");
    this.continueButton = page.locator(".a-button-input");
    this.password = page.locator("#ap_password");
    this.submitButton = page.locator("#signInSubmit");
  }

  async goTo() {
    await this.page.goto("https://www.amazon.in/");
  }

  async userLogin(phoneNo, password) {
    await this.signInButton.click();

    await this.phoneNo.fill(phoneNo);
    await this.continueButton.click();

    await this.password.fill(password);
    await this.submitButton.click();

    await this.page.waitForSelector("#twotabsearchtextbox", { timeout: 20000 });
  }
}

module.exports = { SignIn };
