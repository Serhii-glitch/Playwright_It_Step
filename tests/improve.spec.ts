import { test, expect } from '@playwright/test';
import { WikiPage } from '../pages/WikiPage';

test('Wikipedia', async ({page}) => {
    const wiki = new WikiPage(page);
    await wiki.goto();
    await wiki.chooseLanguage();
    const searchBox = page.locator('.vector-search-box-inner');
    await expect(searchBox).toBeVisible();
    await page.type('.vector-search-box-input', 'Тестирование');
    await page.keyboard.press('Enter');
    await page.locator('.mw-redirect.mw-disambig').click();
    await expect(page).toHaveTitle(/тест/i);
});

//class="vector-search-box-inner"