import { test, expect } from '@playwright/test';
import { WikiPage } from '../pages/WikiPage';

test('Wikipedia', async ({page}) => {
    const wiki = new WikiPage(page);
    await wiki.goto();
    await wiki.chooseLanguage();
    await page.locator('#pt-login').click();
    await page.type('#wpName1', 'Blxssxd1');
    await page.type('#wpPassword1', 'xxx123xxx');
    await page.locator('#wpLoginAttempt').click();
    await page.locator('#pt-userpage').click();
    const heading = await page.locator('#firstHeading');
    await expect(heading).toHaveText('Здравствуйте, ‪Blxssxd1‬!');
});
