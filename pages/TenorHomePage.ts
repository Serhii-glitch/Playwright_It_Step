import { Page, Locator } from '@playwright/test';

export class TenorHomePage {
    constructor(private page: Page) {}


    async goto() { // async используется для работы с асинхронным кодом. 
        await this.page.goto('https://giphy.com/');
         // await используется только внутри async-функции и означает: 
        // "подожди, пока промис(async) завершится".
    }
}