import { Locator, Page } from '@playwright/test';
import { config } from 'dotenv'
config()

export class LandingPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly registerButton: Locator;
    readonly pageTitle: Locator;

    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('text=log in')
        this.registerButton = page.locator('button:has-text("register")')
        this.pageTitle = page.locator('[class="main-title text-center"]')
    }

    async navigate() {
        await this.page.goto(process.env.LANDING_URL);
    }

    async login() {
        await this.loginButton.click()
    }

    async register() {
        await this.registerButton.click()
    }
}
