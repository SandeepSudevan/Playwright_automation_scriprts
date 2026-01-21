const {test, expect} = require('@playwright/test');

test('UI Components', async ({browser})=>
{
	const context = await browser.newContext();
	const page = await context.newPage();

	await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

	const radioButton = page.locator('.checkmark');
	const dropdown = page.locator('select.form-control');
	const checkbox = page.locator('#terms');

	await page.locator('#username').fill('rahulshettyacademy ');
	await page.locator('input.form-control').nth('1').fill('learning');
	await radioButton.nth('1').click();
	await expect(radioButton.nth('1')).toBeChecked();
	await page.locator('#okayBtn').click();
	await dropdown.selectOption('consult');
	await checkbox.click();
	await expect(checkbox).toBeChecked();

	//await page.pause();

});