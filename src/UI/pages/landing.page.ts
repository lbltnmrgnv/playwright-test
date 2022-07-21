import { Locator, Page } from '@playwright/test';
import { config } from 'dotenv'
config()

export class LandingPage {
    readonly page: Page;
    readonly menuButton: Locator;
    readonly loginLink: Locator;
    readonly pageTitle: Locator;

    constructor(page) {
        this.page = page;
        this.menuButton = page.locator('button', { hasText: 'Menu' })
        this.loginLink = page.locator('a', {hasText: 'LogIn'})
        this.pageTitle = page.locator('a', {hasText: 'Geek Dashboard'})
    }

    async navigate() {
        await this.page.goto(process.env.LANDING_URL);
    }

    async clickToMenu() {
        await this.menuButton.click()
    }

    async clickToLogin() {
        await this.loginLink.click()
    }
}
