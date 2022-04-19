const { chromium } = require('playwright')
const { expect, assert } = require('chai');
const { LandingPage } = require('../pages/landingPage');
//const { step } = require('../config/step')
require('dotenv').config();

describe('Landing tests', function () {

    let page,
        browser,
        context;

    before(async function () {
        browser = await chromium.launch({ /*headless: false */})
        context = await browser.newContext()
        page = await context.newPage();
    })

    it('Go to landing page and click login button', async function () {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.login()
        assert(page.url() === process.env.LOGIN_URL, `Current url (${page.url()}) !== login url ${process.env.LOGIN_URL}`)
    })

    it('Go to landing page and click register button', async function () {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.register()
        expect(page.url()).eql(process.env.REGISTER_URL)
    })


    after(async function () {
        await browser.close()
    })

})


