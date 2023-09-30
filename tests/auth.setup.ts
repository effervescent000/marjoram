import { test as setup, expect } from '@playwright/test';
import { BASE_URL } from './constants';
import { loadEnv } from 'vite';

const authFile = 'playwright/.auth/user.json';

process.env = { ...process.env, ...loadEnv('testing', process.cwd()) };

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto(BASE_URL);
  await page.getByTestId('auth-username').fill(process.env.VITE_TEST_ACCOUNT_NAME as string);
  await page.getByTestId('auth-password').fill(process.env.VITE_TEST_ACCOUNT_PASSWORD as string);
  await page.getByTestId('auth-submit').click();

  await page.waitForTimeout(500);
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await expect(page.getByText(`Hello, ${process.env.VITE_TEST_ACCOUNT_NAME}!`)).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
