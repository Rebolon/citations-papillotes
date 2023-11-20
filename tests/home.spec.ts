import { test, expect } from '@playwright/test';

test('Home has title', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  await expect(page).toHaveTitle(/Citations - Citation du jour/);
});

test('Test menu', async ({ page }) => {
  await page.goto('http://localhost:4200/');

  // Expected URL on page
  await expect.soft(page.getByRole('link', { name: 'Citation du jour' }).first()).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Liste des citations', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('link', { name: 'Liste des auteurs' })).toBeVisible();
  await expect.soft(page.getByTitle('Accès au code source')).toBeVisible();
});
