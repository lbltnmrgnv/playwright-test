import { Locator } from '@playwright/test';
import { BasePage } from '.'
import * as config from '../../config'

export class HomePage extends BasePage {
    readonly logoutBtn: Locator;
    readonly pageTitle: Locator;

    constructor(page) {
        super(page, 'HomePage', config.env.urls.base + 'home')
        this.logoutBtn = page.locator('[class="primary-button"]')
        this.pageTitle = page.locator('[class="main-title home-page-title"]')
    }

    async logout() {
        await this.logoutBtn.click()
    }
}
