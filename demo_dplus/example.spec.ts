import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://demoqa.com/');
//   await page.locator('svg').first().click();
//   await page.getByText('Radio Button').click();
//   await page.getByText('Yes').click();
//   await page.getByRole('paragraph').getByText('Yes').dblclick();
//   await page.getByText('Impressive').click();
//   await page.getByRole('paragraph').getByText('Impressive').dblclick();
// });

test('test2', async ({ page }) => {
  await page.goto('https://hugin-raven.vercel.app/');
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('671034');
  await page.locator('input[type="text"]').press('Tab');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('111111');
});


