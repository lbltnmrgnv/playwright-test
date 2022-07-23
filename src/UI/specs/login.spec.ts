import { chromium } from '@playwright/test'
import { expect, assert } from 'chai';
import { LoginPage } from '../pages/login.page';
import { config } from 'dotenv';
import { user } from '../../data/models/user';
import { User } from '../../data/types'
config()

describe('Go to Login page', function () {

    let page,
        browser,
        context;

    before(async function () {
        browser = await chromium.launch({/* headless: false */})
        context = await browser.newContext()
        page = await context.newPage();
    })

    it('fill all fields and click login button', async function () {
        const loginPage = new LoginPage(page)
        await loginPage.navigate()
        const loginUser: User = user()
        await loginPage.login(loginUser)
    })

    after(async function () {
        await browser.close()
    })
})