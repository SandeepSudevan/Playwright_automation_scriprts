const { test, expect } = require("@playwright/test");

test("Calandar", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const year = 2027;
  const month = 6;
  const day = 15;
  const dateArray = [month, day, year];

  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

  await page.locator("svg[stroke='black']").last().click();
  await page.locator(".react-calendar__navigation__label__labelText").click();
  await page.locator(".react-calendar__navigation__label__labelText").click();
  await page.getByText(year).click();
  await page
    .locator(".react-calendar__tile")
    .nth(Number(month) - 1)
    .click();
  await page.locator(".react-calendar__tile").getByText(day).click();

  const date = page.locator(".react-date-picker__inputGroup__input");
  for (let index = 0; index < date; index++) {
    const value = date.nth(index).getAttribute("value");
    expect(value).toEqual(dateArray[index]);
  }
});
