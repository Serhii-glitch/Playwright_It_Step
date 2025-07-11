import { test, expect } from '@playwright/test';

test('Simple test - Header check', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
    console.log("This first commit in new branch");
});