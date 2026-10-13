import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Enter valid username and password
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click the login button
  await page.click('#login-button');

  // Expect to be redirected to the inventory page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});