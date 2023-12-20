const { test, expect } = require('@playwright/test');

test.describe('Footer Component Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://study-brew.vercel.app/');
  });

  // ... other tests ...

  test('Home link is rendered in the footer', async ({ page }) => {
    const homeLink = page.locator('.footer a', { hasText: 'Home' }); // Adjust the selector to target the link within the footer
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', '/');
  });

  test('About Us link is rendered in the footer', async ({ page }) => {
    const aboutLink = page.locator('.footer a', { hasText: 'About Us' }); // Adjust the selector to target the link within the footer
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/about');
  });

  // ... other tests ...
});
