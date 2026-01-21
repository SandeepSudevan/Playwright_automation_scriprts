const { test, expect } = require("@playwright/test");

test("Child Window", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const userName = page.locator("#username");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator(".blinkingText").nth("0").click(),
  ]);
  //
  const text = await newPage.locator("[href*='mentor@']").textContent();
  const arrayText = text.split("@");
  const newText = arrayText[1].split(" ")[0];
  console.log(newText);

  await userName.fill(newText);
  const userText = await userName.inputValue();
  console.log(userText);
  await page.pause();
});
