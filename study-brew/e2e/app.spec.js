import { test, expect } from "@playwright/test";

test("title should be Study Brew", async ({ page }) => {
  await page.goto("/");
  expect(await page.title()).toBe("Study Brew");
});

test("navigation to About Us page should work", async ({ page }) => {
  await page.goto("/");
  await page.click('text=About Us'); // Replace with the actual text or selector for the link
  await expect(page).toHaveURL('/about');
  const title = page.locator('h1'); // Replace 'h1' with the selector for your title on the About page
  await expect(title).toHaveText("About Us");
});

