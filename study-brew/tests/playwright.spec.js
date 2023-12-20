const { test, expect } = require('@playwright/test');

// Define the test suite
test.describe('App Component Tests', () => {

  // Check if the Navbar is rendered
  test('Navbar is rendered', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const navbar = await page.locator('text=Your Navbar Text Here'); // Replace with actual navbar text
    await expect(navbar).toBeVisible();
  });

  // Check if the Footer is rendered
  test('Footer is rendered', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const footer = await page.locator('text=Your Footer Text Here'); // Replace with actual footer text
    await expect(footer).toBeVisible();
  });

  // Check if the Cookie Consent Banner is rendered
  test('Cookie Consent Banner is rendered', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const consentBanner = await page.locator('text=Agree and continue');
    await expect(consentBanner).toBeVisible();
  });

  // Check if the page title is "Study Brew"
  test('Page title is correct', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveTitle('Study Brew');
  });
});

test.describe('About Page Tests', () => {

    // Navigate to the About page before each test
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/about');
    });
  
    // Check if the main title of the About page is present
    test('Main title is rendered', async ({ page }) => {
      const title = page.locator('text=About Us');
      await expect(title).toBeVisible();
    });
  
    // Check if the images are rendered
    test('Images are rendered', async ({ page }) => {
      const images = page.locator('img');
      await expect(images).toHaveCount(5); // Number of images expected to render
    });
  
    // Check if the press mentions are rendered
    test('Press mentions are rendered', async ({ page }) => {
      const pressItems = page.locator('text=Awarded Best Campus Coffee Shop');
      await expect(pressItems).toBeVisible();
    });
  
    // Check if the mission statement is present
    test('Mission statement is rendered', async ({ page }) => {
      const missionStatement = page.locator('text=Our Mission');
      await expect(missionStatement).toBeVisible();
    });
  
    // Check if the value & personality section is present
    test('Value & Personality section is rendered', async ({ page }) => {
      const valueSection = page.locator('text=Our Value & Personality');
      await expect(valueSection).toBeVisible();
    });
  
  });

  test.describe('Home Page Tests', () => {

    // Navigate to the home page before each test
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000/');
    });
  
    //
  Check if the hero section is rendered
    test('Hero section is rendered', async ({ page }) => {
      const heroSection = page.locator('section', { hasText: 'Fuel Your Success at The Study Brew' });
      await expect(heroSection).toBeVisible();
    });
  
    // Check if menu items are rendered
    test('Menu items are rendered', async ({ page }) => {
      const menuItems = page.locator('section', { hasText: 'Popular Menu' }).locator('img');
      await expect(menuItems).toHaveCount(4); // Replace with the number of items you expect
    });
  
    // Check if testimonials are rendered
    test('Testimonials are rendered', async ({ page }) => {
      const testimonials = page.locator('section', { hasText: 'Join 1,000+ scholars at their beloved Study Brew haven!' }).locator('img');
      await expect(testimonials).toHaveCount(3); // Replace with the number of testimonials you expect
    });
  
    // Check if the rewards section is rendered
    test('Rewards section is rendered', async ({ page }) => {
      const rewardsSection = page.locator('section', { hasText: 'Unlock your exclusive Brew Insider perks' });
      await expect(rewardsSection).toBeVisible();
    });
  
    // Check if the "Redeem Your Free Coffee Today!" button works
    test('Free coffee redemption button is clickable', async ({ page }) => {
      const redeemButton = page.locator('button', { hasText: 'Redeem Your Free Coffee Today!' });
      await expect(redeemButton).toBeVisible();
      await expect(redeemButton).toBeEnabled();
    });

