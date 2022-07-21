import { chromium } from '@playwright/test'
import { assert } from 'chai';
import { LandingPage } from '../pages/landing.page';
import { config } from 'dotenv';
//import { expect } from '@playwright/test'
config()

describe.only('Go to landing page', function () {

    let page,
        browser,
        context;

    before(async () => {
        browser = await chromium.launch({ headless: false })
        context = await browser.newContext({ 'width': 1920, 'height': 1080 })
        page = await context.newPage();
    })

    after(async () => {
        await browser.close()
    })

    it('and click login buttton at menu nav bar', async () => {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        await landingPage.clickToLogin()
        assert(page.url() === process.env.LOGIN_URL, `Current url (${page.url()}) !== login url ${process.env.LOGIN_URL}`)
    })

    it('and check page title text', async () => {
        const landingPage = new LandingPage(page)
        await landingPage.navigate()
        const title : string = await landingPage.pageTitle.innerText()
        assert(title.toUpperCase() === 'GEEK DASHBOARD', `Landing page title ${title.toUpperCase()} !== GEEK DASHBOARD`)
    })

})


