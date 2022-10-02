import { Locator, Page } from '@playwright/test';
import {config} from 'dotenv' 
import { BasePage } from '.';
config()

export class ForgetPasswordPage extends BasePage {
    
    readonly emailInput: Locator;
    readonly sendEmailBtn: Locator;
    readonly registerLink: Locator;
    readonly backToHomepageLink: Locator;

    constructor(page: Page) {
        super(page, 'ForgetPasswordPage', '')
        this.emailInput = page.locator('*[name="email"]')
        this.sendEmailBtn = page.locator('#sub_btn')
        this.registerLink = page.locator('text=Create an account')
        this.backToHomepageLink = page.locator('text=Back to Homepage')
    }

    async sendEmail(email: string) {
        await this.emailInput.fill(email)
        await this.sendEmailBtn.click()
    }

    async createAnAccount() {
        await this.registerLink.click()
    }

    async backToHomepage() {
        await this.backToHomepageLink.click()
    }
}
