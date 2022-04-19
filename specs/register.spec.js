const { chromium } = require('playwright')
const { assert, expect } = require('chai');
const { RegisterPage } = require('../pages/registerPage');
const faker = require("faker");
//const { step } = require('../config/step')
require('dotenv').config();

describe('Register tests', function () {

    let page,
        browser,
        context

    before(async function () {
        browser = await chromium.launch({/* headless: false */})
        context = await browser.newContext()
        page = await context.newPage();
    })

    it('Go to register page, filling all fields and click register button', async function () {
        const registerPage = new RegisterPage(page)
        await registerPage.navigate()
        await registerPage.register(process.env.LOGIN, email = faker.internet.email(), process.env.PASSWORD)
        assert(page.url() === process.env.HOME_URL + `?first_name=${process.env.LOGIN}&email=${email.replace('@', '%40')}&password=${process.env.PASSWORD}&checkbox=on`, `Current url (${page.url()}) !== home url ${process.env.HOME_URL}?first_name=${process.env.LOGIN}&email=${email.replace('@', '%40')}&password=${process.env.PASSWORD}&checkbox=on`)
    })

    it('Go to register page and click terms of service link', async function () {
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

    it('Go to register page and click back to homepage link', async function () {
        const registerPage = new RegisterPage(page)
        await registerPage.navigate()
        await registerPage.backToHomepage()
        assert(page.url() === process.env.LANDING_URL, `Current url (${page.url()}) !== landing URL${process.env.LANDING_URL}`)
    })

    after(async function () {
        await browser.close()
    })
})