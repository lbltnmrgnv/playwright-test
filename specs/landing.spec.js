const { chromium } = require('playwright')
const { expect } = require('chai');
const { LandingPage } = require('../pages/landingPage');
const { addStep } = require('../config/step')
require('dotenv').config();

describe('Landing tests', function () {

    let page;
    let browser;

    before(async function () {
        browser = await chromium.launch(/*{ headless: false }*/)
        const context = await browser.newContext()
        page = await context.newPage();
    })

    it('Go to landing page and click login button', async function () {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.login()
        expect(page.url()).eql(process.env.LOGIN_URL)
        const screenshot = await page.screenshot()
        //addStep('Screen', screenshot)
    })

    it('Go to landing page and click register button', async function () {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.register()
        expect(page.url()).eql(process.env.REGISTER_URL)
        const screenshot = await page.screenshot()
        //addStep('Screen', screenshot)
    })

    after(async function () {
        await browser.close()
    })
})