import { Locator, Page } from '@playwright/test';
import { config } from 'dotenv'
import { User } from '../../data/types';
import { step } from '../../reporter';

config()

export class RegisterPage {

    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerButton: Locator;
    readonly successAllert: Locator;
    readonly dangerAllert: Locator;

    constructor(page) {
        this.page = page;
        this.email = page.locator('#signup-email')
        this.password = page.locator('#signup-password')
        this.confirmPassword = page.locator('#signup-confirmPassword')
        this.registerButton = page.locator('#registerButton')
        this.successAllert = page.locator('[class="alert alert-success fade show"]')
        //this.dangerAllert = page.locator('[class="alert alert-danger fade show"]')
        this.dangerAllert = page.locator('[class="alert alert-danger fade show"]')
    }

    @step(`Navigate to register page`)
    async navigate() {
        await this.page.goto(process.env.REGISTER_URL);
    }

    @step('Register user')
    async register(user: User) {
        await this.email.fill(user.email)
        await this.password.fill(user.password)
        await this.confirmPassword.fill(user.confirmPassword)
        await this.registerButton.click()
    }
}
