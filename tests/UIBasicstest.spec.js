const {test, expect} = require('@playwright/test');

test('First Playwright Test', async ({browser})=>
{
	const context = await browser.newContext();
	const page = await context.newPage();

	const userName = page.locator("input#username");
	const password = page.locator("#password");
	const signIn = page.locator("[type='submit']");

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
await userName.fill("rahulshettyacademy");
await password.fill("DASZIO*5656");
await signIn.click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');

await password.fill("learning");
await signIn.click();

console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth("1").textContent());

});

