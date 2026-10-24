import { test, expect } from '@playwright/test';

const authToken =
  'bsidGHCdKNGoD1pVcKPYpXtoMNK9J5aG.kKxZd9zX99ZvEsO9VMaoS1VEaJu4/K1X4W5bwHacsYo=';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://host.docker.internal:3000');

    await page.evaluate((token) => {
      localStorage.setItem('better-auth.session_token', token);
    }, authToken);

    await page.goto('http://host.docker.internal:3000');
  });

  test('Should have correct metadata and layout', async ({ page }) => {
    await expect(page).toHaveTitle('Custom Homepage');
    await expect(page.getByRole('link', { name: 'Group2' })).toBeVisible();
  });

  test('Banner links should work', async ({ page }) => {
    await page.getByRole('link', { name: 'Group2' }).click();
    await expect(page).toHaveURL(/\/group2$/);
  });
});
