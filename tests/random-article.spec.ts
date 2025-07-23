import { test, expect } from '@playwright/test';
import { WikiHomePage } from '../pages/WikiHomePage';
import { WikiMainPage } from '../pages/WikiMainPage';
import { ArticlePage } from '../pages/article_page'; 

test('Проверка случайной статьи на Wikipedia (RU)', async ({ page }) => {
  // Шаг 1: открыть главную и выбрать язык
  const home = new WikiHomePage(page);
  await home.goto(); // await говорит интерпретатору JavaScript: подожди, пока эта операция завершится, прежде чем двигаться дальше
  await home.chooseLanguage(); // по умолчанию «Русский»

  // Шаг 2: открыть случайную статью
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
  await articlePage.takeScreenshotWithTitle();
});
