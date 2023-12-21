const { test, expect } = require("@playwright/test");
//Change to localhost on which it is running on
const websiteURL = 'https://study-brew.vercel.app'; 
const aboutURL = 'https://study-brew.vercel.app/about';
const privacyURL = 'https://study-brew.vercel.app/privacy';
const termsURL = 'https://study-brew.vercel.app/terms';

const expectedTitle = 'Study Brew';

// Check the Home Page Title
test('Check Page Title', async ({ page }) => {
  await page.goto(websiteURL);
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

//  Check for the Logo in Header of All Pages
test('Check Logo in Header', async ({ page }) => {
  await page.goto(websiteURL);
  await page.goto(aboutURL);
  await page.goto(privacyURL);
  await page.locator('.logo');
});

// Check for Popular Menu on HomePage
test('Check Popular Menu on HomePage', async ({ page }) => {
  await page.goto(websiteURL);
  await page.locator('.PopSection');
});

// Test to Check for The Subscribe Section
test('Check for Subscribe Section', async ({ page }) => {
  await page.goto(websiteURL);
  let Subscribe=await page.locator('.h1').all(); //get all the h1 elements and store them in an array
  for (let roleAndCompany of Subscribe) { //iterate through the array
    await expect(roleAndCompany).toContain('Subscribe'); //check that each element to contain.
  }
});

// Test to check Subscribe Email Input in the Subscribe Section
test('Check for Subscribe Email Input', async ({ page }) => {
  await page.goto(websiteURL);
  await page.getByRole('input', { name: 'EMAIL' });
});

// Test to check Subscribe Email Submit in the Subscribe Section
test('Check for Subscribe Email Submit', async ({ page }) => {
  await page.goto(websiteURL);
  await page.getByRole('input', { name: 'subscribe' });
});

// Check for Company Section in AboutUS
test('Check Company Section on AboutUs Page', async ({ page }) => {
  await page.goto(aboutURL);
  await page.locator('.aboutSection');
});

// Check for Mission Section in AboutUS
test('Check Mission Section on AboutUs Page', async ({ page }) => {
  await page.goto(aboutURL);
  await page.locator('.MissionSection');
});

// Check for Value Section in AboutUS
test('Check Value Section on AboutUs Page', async ({ page }) => {
  await page.goto(aboutURL);
  await page.locator('.valueSection');
});

// Check for Brand Section in AboutUS
test('Check Brand Section on AboutUs Page', async ({ page }) => {
  await page.goto(aboutURL);
  await page.locator('.BrandSection');
});

// Check for Blogs on the Blogs Page
test('Check Blog Title on Blog Page', async ({ page }) => {
  await page.goto(privacyURL);
  await page.locator('.BlogTitle');
});

// Check the footer section of the page.
test('Check All Footer Links', async ({ page }) => {
  await page.goto(websiteURL);
  await page.goto(aboutURL);
  await page.goto(privacyURL);
  const footerLinks = await page.locator('.footerlink');
  const count = await footerLinks.count();

  for (let i = 0; i < count; i++) {
    const link = footerLinks.nth(i);
    expect(await link.isVisible()).toBe(true);
  }
});

// This test checks that the responsive meta tag is present 
test('Check Responsive Meta Tag for Render', async ({ page }) => {
  await page.goto(websiteURL);
  await page.goto(aboutURL);
  await page.goto(privacyURL);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('initial-scale=1, width=device-width');
});

/* This test checks that the meta description for SEO is not empty */
test('Check SEO Meta Description', async ({ page }) => {
  await page.goto(websiteURL);
  await page.goto(aboutURL);
  await page.goto(privacyURL);
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  await expect(metaDescription).not.toBe('');
});
