import { test, expect } from "@playwright/test";

test.describe("Pricing Page", () => {
  test("toggle monthly/yearly and verify prices change", async ({ page }) => {
    await page.goto("/pricing");

    await expect(page.locator("text=$99")).toBeVisible();
    await expect(page.locator("text=$299")).toBeVisible();

    const toggle = page.locator('button:has(span.absolute)');
    await toggle.click();

    await expect(page.locator("text=$990")).toBeVisible();
    await expect(page.locator("text=$2990")).toBeVisible();
  });

  test("click CTA buttons", async ({ page }) => {
    await page.goto("/pricing");
    const getStartedButton = page.locator('a:has-text("Get Started")');
    await expect(getStartedButton).toBeVisible();
    await expect(getStartedButton).toHaveAttribute("href", "/pricing");

    const contactSalesButton = page.locator('a:has-text("Contact Sales")');
    await expect(contactSalesButton).toBeVisible();
    await expect(contactSalesButton).toHaveAttribute("href", "/contact");
  });
});
