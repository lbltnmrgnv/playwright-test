import { Locator, Page } from '@playwright/test';
import {config} from 'dotenv' 
config()

export class ForgetPasswordPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly sendEmailBtn: Locator;
    readonly registerLink: Locator;
    readonly backToHomepageLink: Locator;

    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('*[name="email"]')
        this.sendEmailBtn = page.locator('#sub_btn')
        this.registerLink = page.locator('text=Create an account')
        this.backToHomepageLink = page.locator('text=Back to Homepage')
    }

    async navigate() {
        await this.page.goto(process.env.FORGET_PASSWORD_URL);
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
