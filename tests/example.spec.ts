import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('svg').first().click();
  await page.getByText('Radio Button').click();
  await page.getByText('Yes').click();
  await page.getByRole('paragraph').getByText('Yes').dblclick();
  await page.getByText('Impressive').click();
  await page.getByRole('paragraph').getByText('Impressive').dblclick();
});