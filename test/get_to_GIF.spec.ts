import { test, expect } from '@playwright/test';
import { GiphyHomePage } from '../pages/GiphyHomePage';

test('Клик по первой гифке и переход на страницу гифки', async ({ page }) => {
  const home = new GiphyHomePage(page);
  await home.goto();
  const Gif = page.locator('a[data-giphy-id]').first();
  await Gif.waitFor({ state: 'visible' });
  await Gif.scrollIntoViewIfNeeded();
  await Gif.click();
  await expect(page.locator('text=Copy link')).toBeVisible();
});
