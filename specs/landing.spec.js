const { chromium } = require('playwright')
const { expect } = require('@playwright/test');
const { LandingPage } = require('../pages/landingPage');
const { addStep } = require('../config/step')
require('dotenv').config();

describe('Landing tests', function () {

    let page;
    let browser;

    before(async function () {
        browser = await chromium.launch({ headless: false })
        const context = await browser.newContext()
        page = await context.newPage();
    })

    it('Go to landing page and click login button', async function () {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.login()
        expect(page.url()).toEqual(process.env.LOGIN_URL)
        const screenshot = await page.screenshot({ path: '../screenshots/LoginPage.png', fullPage: true })
        addStep('Залупа', screenshot)
    })

    it('Go to landing page and click register button', async function () {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.register()
        expect(page.url()).toEqual(process.env.REGISTER_URL)
    })

    after(async function () {
        await browser.close()
    })
})