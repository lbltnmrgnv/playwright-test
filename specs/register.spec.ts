import { chromium } from '@playwright/test'
import { assert } from 'chai';
import { RegisterPage } from '../pages/register.page';
import * as faker from 'faker';
import { config } from 'dotenv';
config()

describe('Go to register page', function () {

    let page,
        browser,
        context,
        email

    before(async function () {
        browser = await chromium.launch({ headless: false })
        context = await browser.newContext()
        page = await context.newPage();
    })

    it('fill all fields and click register button', async function () {
        const registerPage = new RegisterPage(page)
        await registerPage.navigate()
        await registerPage.register(process.env.LOGIN, email = faker.internet.email(), process.env.PASSWORD)
        assert(page.url() === process.env.HOME_URL + `?first_name=${process.env.LOGIN}&email=${email.replace('@', '%40')}&password=${process.env.PASSWORD}&checkbox=on`, `Current url (${page.url()}) !== home url ${process.env.HOME_URL}?first_name=${process.env.LOGIN}&email=${email.replace('@', '%40')}&password=${process.env.PASSWORD}&checkbox=on`)
    })

    it('click terms of service link', async function () {
        const registerPage = new RegisterPage(page)
        await registerPage.navigate()
        //Get page after clicking on terms link
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            registerPage.termsClick() // Opens a new tab
        ])
        await newPage.waitForLoadState();
        assert(newPage.url() === 'https://www.google.com/', `Current url (${newPage.url()}) !== google URL https://www.google.com`)
    })

    it('click back to homepage link', async function () {
        const registerPage = new RegisterPage(page)
        await registerPage.navigate()
        await registerPage.backToHomepage()
        assert(page.url() === process.env.LANDING_URL, `Current url (${page.url()}) !== landing URL${process.env.LANDING_URL}`)
    })

    after(async function () {
        await browser.close()
    })
})