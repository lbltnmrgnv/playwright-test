import { Locator, Page } from '@playwright/test';
import { config } from 'dotenv'
import { step } from '../../reporter';
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

    @step('Navigate to landing page')
    async navigate() {
        await this.page.goto(process.env.LANDING_URL);
    }

    @step('Click to menu button')
    async clickToMenu() {
        await this.menuButton.click()
    }

    @step('Click to login button')
    async clickToLogin() {
        await this.loginLink.click()
    }
}
