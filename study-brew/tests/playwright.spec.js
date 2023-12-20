const { test, expect } = require('@playwright/test');

test('check homepage title', async ({ page }) => {
  await page.goto('http://localhost:3000/'); // Replace with your site URL
  const title = await page.title();
  expect(title).toBe('Your expected title');
});
