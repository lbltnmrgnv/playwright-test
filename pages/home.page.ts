import { Locator, Page } from '@playwright/test';
import { config } from 'dotenv'
config()

export class HomePage {
    readonly page: Page;
    readonly logoutBtn: Locator;
    readonly pageTitle: Locator;

    constructor(page) {
        this.page = page;
        this.logoutBtn = page.locator('[class="primary-button"]')
        this.pageTitle = page.locator('[class="main-title home-page-title"]')
    }

    async navigate() {
        await this.page.goto(process.env.HOME_URL)
    }

    async logout() {
        await this.logoutBtn.click()
    }
}
