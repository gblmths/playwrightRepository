import { test as base } from '@playwright/test';

export const test = base.extend({
  LoginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});

export { expect } from '@playwright/test';