const { chromium } = require('playwright')
const { expect, assert } = require('chai');
const { LandingPage } = require('../pages/landing.page');
//const { step } = require('../config/step')
require('dotenv').config();

describe('Go to landing page', function () {

    let page,
        browser,
        context;

    before(async function () {
        browser = await chromium.launch({ /*headless: false */})
        context = await browser.newContext()
        page = await context.newPage();
    })

    it('click login button', async function () {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.login()
        assert(page.url() === process.env.LOGIN_URL, `Current url (${page.url()}) !== login url ${process.env.LOGIN_URL}`)
    })

    it('click register button', async function () {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.register()
        expect(page.url()).eql(process.env.REGISTER_URL)
    })

    it('check page title text', async () => {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        assert(await landingPage.pageTitle.innerText() === 'login / register page'.toUpperCase(), `Landing page title !== login / register page`)
    })

    after(async function () {
        await browser.close()
    })

})


