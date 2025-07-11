import {Page} from '@playwright/test'; 

export class WikiPage {
    constructor(private page: Page) {}


    async goto() { // async используется для работы с асинхронным кодом. 
        await this.page.goto('https://www.wikipedia.org'); // await используется только внутри async-функции и означает: 
        // "подожди, пока промис(async) завершится".
    }

    async chooseLanguage(language = 'Русский') {
        await this.page.getByRole('link', {name: language }).click();
    }
}