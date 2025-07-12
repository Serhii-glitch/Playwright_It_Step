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
    const buttons = await page.locator('.mw-redirect');
    const count = await buttons.count();
    const randomIndex = Math.floor(Math.random() * count);
    await buttons.nth(randomIndex).click();
    const articlePage = new ArticlePage(page); //class лучше всего называть с больших букв, а переменные с маленьких
    await articlePage.takeScreenshotWithTitle();
    const internalLinks = await page.locator('#mw-content-text a[href^="/wiki/"]').all();
    expect(internalLinks.length).toBeGreaterThan(0);
});