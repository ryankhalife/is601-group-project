import { test, expect } from "@playwright/test";

test("title should be Study Brew", async ({ page }) => {
  await page.goto("/");
  expect(await page.title()).toBe("Study Brew");
});
