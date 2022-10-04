import { Locator, Page } from '@playwright/test';
import * as config from '../../config'
import { step, attachJsonData } from '../../reporter';
import { BasePage } from '.';
import { User } from '../../components/register/types';

export class SignUpPage extends BasePage {
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly successAllert: Locator;
    readonly dangerAllert: Locator;

    constructor(page) {
        super(page, 'SignUpPage', config.env.urls.base + 'signup')
        this.email = page.locator('#signup-email')
        this.password = page.locator('#signup-password')
        this.confirmPassword = page.locator('#signup-confirmPassword')
        this.registerButton = page.locator('#registerButton')
        this.successAllert = page.locator('[class="alert alert-success fade show"]')
        //this.dangerAllert = page.locator('[class="alert alert-danger fade show"]')
        this.dangerAllert = page.locator('[class="alert alert-danger fade show"]')
    }

    @step('Register user')
    async register(user: User) {
        attachJsonData('User info', user)
        await this.email.fill(user.email)
        await this.password.fill(user.password)
        await this.confirmPassword.fill(user.confirmPassword)
        await this.registerButton.click()
    }
}
