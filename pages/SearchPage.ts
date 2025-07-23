import { Page, expect } from '@playwright/test';

export class SearchPage {
    constructor(private page: Page) {}

    async searchFor(query: string) {
        await this.page.locator('.sc-bZHSxH.dRhWeq').click();
        await this.page.keyboard.type(query);
        await this.page.keyboard.press('Enter');
        await expect(this.page.getByText('Sort')).toBeVisible();
    }
}