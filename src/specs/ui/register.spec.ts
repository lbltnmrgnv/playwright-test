import { expect, chromium } from '@playwright/test'
import { assert } from 'chai';
import { SignUpPage } from '../../lib/pages/signup.page';
import { config } from 'dotenv';
import { user } from '../../lib/components/register/user';
config()

describe('Go to register page', async function () {

    let page,
        browser,
        context

    beforeEach(async function () {
        browser = await chromium.launch({/* headless: false */ })
        context = await browser.newContext()
        page = await context.newPage();
    })

    afterEach(async function () {
        await browser.close()
    })

    it('fill all fields with a valid values and click register button', async function () {
        const registerPage = new SignUpPage(page)
        await registerPage.goto()
        const userData = user()
        userData.confirmPassword = userData.password
        await registerPage.register(userData)
        const alertResult = registerPage.successAllert
        expect(alertResult).toHaveText('You are successfully logged in now!h')

    })

    it('fill wrong confirm password and click register button', async function () {
        const registerPage = new SignUpPage(page)
        await registerPage.goto()
        const userData = user()
        await registerPage.register(userData)
        const alertResult = registerPage.dangerAllert
        expect(alertResult).toHaveText('Password & Confirmation password does not matchh')
    })
})