import fs from 'fs'; // file system позволяет работать с файловой системой: читать, создавать, удалять и изменять файлы и папки.
import path from 'path'; //path это встроенный модуль Node.js, который помогает работать с файловыми путями.
import { Page, Locator } from '@playwright/test'; // page представляет вкладку браузера, locator - используется для 
// нахождения элементов на странице

export class ArticlePage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) { // constructor принимает данные и создаёт объект. Вызываеться с помощью команды new.
    this.page = page; // this используеться в конструкторе, еще в методах async. 
    // this.имя — это обращение к полю или методу текущего объекта. у тебя есть коробка (объект), 
    // и ты положил в неё что-то (например, page).бы достать его, ты говоришь: "Эй, коробка (this), дай мне page → this.page".
    this.heading = page.locator('#firstHeading');  // локатор заголовка
  }

  async takeScreenshotWithTitle() {
    const titleText = await this.heading.textContent(); // способ внутри класса или метода обратиться к данным, которые принадлежат 
    // конкретному объекту.
      const safeFileName = titleText?.replace(/[^a-z0-9а-яё]/gi, '_').toLowerCase() || 'screenshot';
      const screenshotDir = path.join('screenshots'); // path.join - соединяет части пути в один корректный путь.
      const screenshotPath = path.join(screenshotDir, `${safeFileName}.png`); // path.join, чтобы построить путь к файлу 
      // скриншота корректно и независимо от ОС.
    
      if (!fs.existsSync(screenshotDir)) { // проверяет: "Существует ли папка (или файл) с таким путём?"
        fs.mkdirSync(screenshotDir); // fs.mkdir() — создавать папки. Работает из-за импорта
      } // Если папка screenshotDir ещё не существует, тогда создай её.
    
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
    
      console.log('Заголовок статьи:', titleText);
  }
}

/* import fs from 'fs';
import path from 'path';
import { Page, Locator } from '@playwright/test';

export class ArticlePage {
  readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.locator('#firstHeading');  // локатор заголовка
  }

  async takeScreenshotWithTitle() {
    const titleText = await this.heading.textContent();
    const safeFileName = titleText?.replace(/[^a-z0-9а-яё]/gi, '_').toLowerCase() || 'screenshot';
    const screenshotDir = path.join('screenshots');
    const screenshotPath = path.join(screenshotDir, `${safeFileName}.png`);

    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir);
    }

    await this.page.screenshot({ path: screenshotPath, fullPage: true });

    console.log('Заголовок статьи:', titleText);
  }
} */
