import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://host.docker.internal:3000');
  });

  test('Should have correct metadata and layout', async ({ page }) => {
    await expect(page).toHaveTitle('Custom Homepage');
    // Banner Links
    await expect(page.getByRole('link', { name: 'Group2' })).toBeVisible();
    // Sidebar
    await expect(page.getByLabel('Edit links')).toBeVisible();
    await expect(page.getByLabel('Edit links')).toBeVisible();
    await expect(page.getByLabel('Edit links')).toBeVisible();
  });

  test('Banner links should work', async ({ page }) => {
    await page.getByRole('link', { name: 'Group2' }).click();
    await expect(page).toHaveURL(/\/group2$/);
  });
});
