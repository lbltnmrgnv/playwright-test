import { Locator, Page } from '@playwright/test';
import {config} from 'dotenv' 
import { User } from '../../data/types';

config()


export class LoginPage {

    readonly page: Page;
    readonly firstName: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly forgetPasswordLink: Locator;
    readonly registerLink: Locator;
    readonly backToHomepageLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('*[name="first_name"]')
        this.password = page.locator('*[name="password"]')
        this.loginButton = page.locator('#sub_btn')
        this.forgetPasswordLink = page.locator('.right-label')
        this.registerLink = page.locator('text=Create an account')
        this.backToHomepageLink = page.locator('text=Back to Homepage')
    }

    async navigate() {
        await this.page.goto(process.env.LOGIN_URL);
    }

    async login(user: User) {
        //await this.firstName.fill(user.username)
        await this.password.fill(user.password)
        await this.loginButton.click()
    }

    async forgetPassword() {
        await this.forgetPasswordLink.click()
    }

    async createAnAccount() {
        await this.registerLink.click()
    }

    async backToHomepage() {
        await this.backToHomepageLink.click()
    }
}