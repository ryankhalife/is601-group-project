const { test, expect } = require('@playwright/test');

test.describe('Footer Component Tests', () => {
  // This will run before each test in this block
  test.beforeEach(async ({ page }) => {
    await page.goto('https://study-brew.vercel.app/');
    await page.waitForLoadState('networkidle');
  });

  test('Privacy Policy link is rendered in the footer', async ({ page }) => {
    // Assuming 'Privacy Policy' is unique text in the footer
    const privacyPolicyLink = page.locator('text=Privacy Policy');
    await expect(privacyPolicyLink).toBeVisible();
    await expect(privacyPolicyLink).toHaveAttribute('href', '/privacy');
  });

  test('Terms and Conditions link is rendered in the footer', async ({ page }) => {
    // Assuming 'Terms and Conditions' is unique text in the footer
    const termsLink = page.locator('text=Terms and Conditions');
    await expect(termsLink).toBeVisible();
    await expect(termsLink).toHaveAttribute('href', '/terms');
  });

  test('Home link is rendered in the footer', async ({ page }) => {
    // Assuming 'Home' is unique text in the footer
    const homeLink = page.locator('text=Home');
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', '/');
  });

  test('About Us link is rendered in the footer', async ({ page }) => {
    // Assuming 'About Us' is unique text in the footer
    const aboutLink = page.locator('text=About Us');
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/about');
  });

 
});
