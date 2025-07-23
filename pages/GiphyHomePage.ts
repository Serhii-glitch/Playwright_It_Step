import { Page, Locator } from '@playwright/test';

export class GiphyHomePage {
    constructor(private page: Page) {}


    async goto() { // async используется для работы с асинхронным кодом. 
        await this.page.goto('https://giphy.com');
        const agreeButton = this.page.locator('#didomi-notice-agree-button');
        if (await agreeButton.isVisible()) {
            await agreeButton.click();
        } else {
            console.log('Согласие на куки не требуется');
        }
         // await используется только внутри async-функции и означает: 
        // "подожди, пока промис(async) завершится".
    }
}