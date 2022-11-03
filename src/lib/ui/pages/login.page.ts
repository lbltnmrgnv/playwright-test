import { Page } from '@playwright/test';
import * as config from '../../config' 
import { User } from '../../components/pet/types';
import { step, attachJsonData } from '../../reporter';
import { BasePage } from '.';
import { InputElement, InputInterface } from '../elements/input';
import { ButtonInterface, ButtonElement } from '../elements/button';

export class LoginPage extends BasePage {

    readonly emailInput: InputInterface;
    readonly passwordInput: InputInterface;
    readonly loginButton: ButtonInterface;

    constructor(page: Page) {
        super(page, 'LoginPage', config.env.urls.base + 'login')
        this.emailInput = new InputElement('#login-email', `${LoginPage.name} email input`)
        this.passwordInput = new InputElement('#login-password', `${LoginPage.name} email input`)
        this.loginButton = new ButtonElement('#loginButton', `${LoginPage.name} login button`)
    }

    @step((name) => `[${name}] Login with user credentials`)
    async login(user: User) {
        attachJsonData('Credentials', user)
        await this.emailInput.type(user.email)
        await this.passwordInput.type(user.password)
        await this.loginButton.click()
    }
}