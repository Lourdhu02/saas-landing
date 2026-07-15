import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test("fill and submit contact form", async ({ page }) => {
    await page.goto("/contact");
    await page.fill('input[id="name"]', "John Doe");
    await page.fill('input[id="email"]', "john@example.com");
    await page.fill('input[id="company"]', "Acme Inc.");
    await page.fill('textarea[id="message"]', "Hello, I would like to know more about your AI services and pricing options.");

    await page.click('button:has-text("Send Message")');
    await expect(page.locator("text=Message Sent!")).toBeVisible({ timeout: 5000 });
  });

  test("submit empty form shows validation errors", async ({ page }) => {
    await page.goto("/contact");
    await page.click('button:has-text("Send Message")');
    await expect(page.locator("text=Name must be at least 2 characters")).toBeVisible();
    await expect(page.locator("text=Please enter a valid email")).toBeVisible();
    await expect(page.locator("text=Message must be at least 10 characters")).toBeVisible();
  });
});
