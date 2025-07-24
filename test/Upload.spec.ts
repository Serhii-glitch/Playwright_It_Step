import { test, expect } from '@playwright/test';
import { GiphyHomePage } from '../pages/GiphyHomePage';
import { SearchPage } from '../pages/GiphySearchPage';
//import { WikiMainPage } from '../pages/WikiMainPage';
//import { ArticlePage } from '../pages/article_page'; 

test('search verification', async ({ page }) => {
  const home = new GiphyHomePage(page);
  await home.goto();
  await page.getByText('Upload').click();
  await expect(page.getByText('GIPHY Upload')).toBeVisible();
});
