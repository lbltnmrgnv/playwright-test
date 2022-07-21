import { expect, chromium } from '@playwright/test'
import { assert } from 'chai';
import { RegisterPage } from '../pages/register.page';
import { config } from 'dotenv';
import { user } from '../../data/UI/user';
config()

describe.only('Go to register page', function () {

    let page,
        browser,
        context

    before(async function () {
        browser = await chromium.launch({ headless: false })
        context = await browser.newContext()
        page = await context.newPage();
    })

    after(async function () {
        //await browser.close()
    })

    it('fill all fields with a valid values and click register button', async function () {
        const registerPage = new RegisterPage(page)
        await registerPage.navigate()
        const userData = user()
        userData.confirm_password = userData.password
        await registerPage.register(userData)
        const alertResult: string = await registerPage.successAllert.innerText()
        
    })

    it('fill wrong confirm password and click register button', async function () {
        const registerPage = new RegisterPage(page)
        await registerPage.navigate()
        const userData = user()
        await registerPage.register(userData)
        const alertResult: string = await registerPage.dangerAllert.innerText()
        expect(alertResult === 'Password & Confirmation password does not match', ':(')
    })
})