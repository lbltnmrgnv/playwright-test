import { Locator, Page } from '@playwright/test';
import { config } from 'dotenv'
import { User } from '../../data/types';

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
        this.successAllert = page.locator('[class="alert alert-success fade show"]', { hasText: 'You are successfully logged in now!' })
        this.dangerAllert = page.locator('[class="alert alert-danger fade show"]', { hasText: 'Password & Confirmation password does not match' })
    }

    async navigate() {
        await this.page.goto(process.env.REGISTER_URL);
    }

    async register(user: User) {
        await this.email.fill(user.email)
        await this.password.fill(user.password)
        await this.confirmPassword.fill(user.confirm_password)
        await this.registerButton.click()
    }
}
