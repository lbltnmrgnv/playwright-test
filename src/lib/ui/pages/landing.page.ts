import { Locator, Page } from '@playwright/test';
import { BasePage } from '.';
import { step } from '../reporter';
import * as config from '../config'

export class LandingPage extends BasePage {
    readonly menuButton: Locator;
    readonly loginLink: Locator;
    readonly pageTitle: Locator;

    constructor(page) {
        super(page, 'LandingPage', config.env.urls.base)
        this.menuButton = page.locator('button', { hasText: 'Menu' })
        this.loginLink = page.locator('a', {hasText: 'LogIn'})
        this.pageTitle = page.locator('a', {hasText: 'Geek Dashboard'})
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
