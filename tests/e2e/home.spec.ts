import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load and display hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("should display services section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Our Services")).toBeVisible();
  });

  test("should display pricing section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Pricing")).toBeVisible();
  });

  test("should navigate to about page", async ({ page }) => {
    await page.goto("/");
    await page.click("text=About");
    await expect(page).toHaveURL(/\/about/);
  });
});
