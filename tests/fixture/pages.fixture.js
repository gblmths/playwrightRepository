import { test as base } from '@playwright/test';
import{ LoginPages } from '../pages/LoginPages';

export const test = base.extend({
    LoginPages: async ({ page }, use) => {
    await use(new LoginPages (page));
  }
});

export { expect } from '@playwright/test';