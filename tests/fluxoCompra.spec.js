import { test, expect } from './fixture/pages.fixture.js';

test('Fluxo de compra', async ({ page, LoginPages }) => {    


  await LoginPages.open();
   // Enter valid username and password
   // Click the login button
  await LoginPages.login('standard_user', 'secret_sauce');

  // Expect to be redirected to the inventory page
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#shopping_cart_container');
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  await page.click('#checkout');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');

  await page.click('#continue');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  await page.click('#finish');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
})