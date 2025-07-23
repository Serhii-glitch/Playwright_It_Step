import { test, expect } from '@playwright/test';
import { GiphyHomePage } from '../pages/GiphyHomePage';
import { SearchPage } from '../pages/SearchPage';
//import { WikiMainPage } from '../pages/WikiMainPage';
//import { ArticlePage } from '../pages/article_page'; 

test('search verification', async ({ page }) => {
  const home = new GiphyHomePage(page);
  await home.goto();
  const search = new SearchPage(page);
  await search.searchFor('dogs');

  /*const blocks = await page.locator('.text-giphyWhite.relative.flex.justify-between.rounded-3xl.font-bold.bg-gradient-grey.md\\:w-\\[400px\\]').all();
  if (blocks.length > 0) {
    const randomIndex = Math.floor(Math.random() * blocks.length);
    await blocks[randomIndex].click();
  } else {
    console.log('Блоки не найдены — пропускаем клик');
  }
  
  await page.mouse.wheel(0, 1000);  // Скролл вниз
  await page.waitForTimeout(2000);
  await page.waitForSelector('img.giphy-gif-img.giphy-img-loaded', { timeout: 15000 });
  const stickers = await page.locator('div[role="button"] img.giphy-gif-img.giphy-img-loaded').elementHandles();
  console.log('Найдено ссылок:', stickers.length);
  if (stickers.length > 0) {
  const randomLinkIndex = Math.floor(Math.random() * stickers.length);
  console.log('Кликаем по ссылке с индексом:', randomLinkIndex);
  await stickers[randomLinkIndex].hover();  // <--- добавили hover
  await stickers[randomLinkIndex].click({ force: true });
} else {
  console.log('Ссылки не найдены — пропускаем клик');
}

  await expect(page.locator('text=Favorite')).toBeVisible();
  Шаг 2: открыть случайную статью
  const wiki = new WikiMainPage(page);
  await wiki.openRandomArticle();

  // --- Задание 1: Заголовок отображается ---
  const heading = page.locator('#firstHeading');
  await expect(heading).toBeVisible(); //expect проверяет, соответствует ли результат теста ожидаемому

  // --- Задание 2: Есть хотя бы один непустой параграф <p> ---
  const paragraphs = await page.locator('#mw-content-text p').filter({ hasText: /.+/ }).all();
  expect(paragraphs.length).toBeGreaterThan(0);

  // --- Задание 3: Есть хотя бы одна внутренняя ссылка ---
  const internalLinks = await page.locator('#mw-content-text a[href^="/wiki/"]').all();
  expect(internalLinks.length).toBeGreaterThan(0);

  // --- Задание 4: Скриншот статьи с названием из заголовка ---
  const articlePage = new ArticlePage(page); //class лучше всего называть с больших букв, а переменные с маленьких
  await articlePage.takeScreenshotWithTitle(); */
});