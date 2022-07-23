import { Locator, Page } from '@playwright/test';
import {config} from 'dotenv' 
import { User } from '../../data/types';
import { step } from '../../reporter';

config()


export class LoginPage {

    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;



    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('#login-email')
        this.password = page.locator('#login-password')
        this.loginButton = page.locator('#loginButton')

    }
    
    @step('Navigate to login page')
    async navigate() {
        await this.page.goto(process.env.LOGIN_URL);
    }

    @step('Login with user credentials')
    async login(user: User) {
        await this.email.fill(user.email)
        await this.password.fill(user.password)
        await this.loginButton.click()
    }

}