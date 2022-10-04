import { Locator, Page } from '@playwright/test';
import * as config from '../../config' 
import { User } from '../../components/register/types';
import { step, attachJsonData } from '../../reporter';
import { BasePage } from '.';

export class LoginPage extends BasePage {
    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page, 'LoginPage', config.env.urls.base + 'login')
        this.email = page.locator('#login-email')
        this.password = page.locator('#login-password')
        this.loginButton = page.locator('#loginButton')
    }

    @step('Login with user credentials')
    async login(user: User) {
        attachJsonData('Credentials', user)
        await this.email.fill(user.email)
        await this.password.fill(user.password)
        await this.loginButton.click()
    }
}