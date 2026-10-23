import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test('Should login successfully', async ({ page }) => {
    page.on('console', (msg) => {
      // Filter out standard dev environment warnings to keep terminal noise minimal
      if (!msg.text().includes('webpack-hmr')) {
        console.log(`[Browser Console]: ${msg.text()}`);
      }
    });

    await page.goto('http://host.docker.internal:3000/auth');

    await page.getByLabel('email').fill('a@a.com');
    await page.getByLabel('password').fill('aaaaaaaaa');
    await page.getByRole('button', { name: 'login' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'login' }).click({ force: true });

    await page.waitForLoadState('networkidle');

    await expect(page.getByLabel('Edit links')).toBeVisible();

    await page.context().storageState({ path: '.auth/user.json' });
  });
});

test.describe('Homepage', () => {
  test.use({ storageState: '.auth/user.json' });

  test.beforeEach(async ({ page }) => {
    await page.goto('http://host.docker.internal:3000');
  });

  test('Should have correct metadata and layout', async ({ page }) => {
    await expect(page).toHaveTitle('Custom Homepage');
    // Banner Links
    await expect(page.getByRole('link', { name: 'Group2' })).toBeVisible();
  });

  test('Banner links should work', async ({ page }) => {
    await page.getByRole('link', { name: 'Group2' }).click();
    await expect(page).toHaveURL(/\/group2$/);
  });
});
