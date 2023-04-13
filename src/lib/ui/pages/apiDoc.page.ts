import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '.'
import * as config from '../../config'
import { step } from '../../reporter';

export class ApiDocPage extends BasePage {
    readonly page: Page
    readonly apiRequestLink: Locator
    readonly githubIcon: Locator

    constructor(page) {
        super(page, 'ApiDocPage', config.env.urls.playwright.apiDoc)
        this.apiRequestLink = page.locator('a[class="menu-link"]', { hasText: 'APIRequest'})
        this.githubIcon = page.locator('a[class="header-github-link"]')
    }

    async openGithub() {
        step('Click to github icon', async () => {
            await this.githubIcon.click()
            step('Checked that the github page was open', () => {
                expect(this.page.url()).toEqual('https://github.com/microsoft/playwright')
            })
        })
    }
}
