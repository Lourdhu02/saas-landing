import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  const pages = [
    { label: "Home", url: "/" },
    { label: "Services", url: "/services" },
    { label: "Pricing", url: "/pricing" },
    { label: "About", url: "/about" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/contact" },
  ];

  for (const page of pages) {
    test(`navigates to ${page.label} via header link`, async ({ browser }) => {
      const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
      const bp = await context.newPage();
      await bp.goto("/");
      await bp.click(`a:has-text("${page.label}")`);
      await expect(bp).toHaveURL(page.url);
      await context.close();
    });
  }

  test("mobile hamburger menu navigation", async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const page = await context.newPage();
    await page.goto("/");
    await page.click('button[aria-label="Toggle menu"]');
    await page.click("a:has-text('Pricing')");
    await expect(page).toHaveURL("/pricing");
    await context.close();
  });

  test("logo link goes to home", async ({ page }) => {
    await page.goto("/pricing");
    await page.click("a:has-text('AI SaaS')");
    await expect(page).toHaveURL("/");
  });
});
