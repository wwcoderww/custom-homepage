import { test, expect } from '@playwright/test';

let authenticatedState: any = null;

test.describe('Homepage', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://custom-homepage-nine.vercel.app/auth');

    await page.getByLabel('email').fill('a@a.com');
    await page.getByLabel('password').fill('aaaaaaaaa');
    await page.getByRole('button', { name: 'login' }).click();

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    authenticatedState = await context.storageState();
    await context.close();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://custom-homepage-nine.vercel.app');

    if (authenticatedState?.origins?.[0]?.localStorage) {
      const storageItems = authenticatedState.origins[0].localStorage;
      await page.evaluate((items) => {
        items.forEach((item: any) => {
          localStorage.setItem(item.name, item.value);
        });
      }, storageItems);

      await page.reload();
      await page.waitForLoadState('networkidle');
    }
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
