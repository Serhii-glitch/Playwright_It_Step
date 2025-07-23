import { test, expect } from '@playwright/test';
import { WikiPage } from '../pages/WikiPage';
import { ArticlePage } from '../pages/article_page'; 

test('Wikipedia', async ({page}) => {
    const wiki = new WikiPage(page);
    await wiki.goto();
    await wiki.chooseLanguage();
    await page.locator('#n-featured').click();
    const hasHeading = await page.locator('h1, h2, h3, h4, h5, h6').count();
    expect(hasHeading).toBeGreaterThan(0);
    const hasParagraph = await page.locator('p').count();
    expect(hasParagraph).toBeGreaterThan(0);
    await page.locator('text=Начинающим').click();
});