import { chromium } from '@playwright/test'
import { assert } from 'chai';
import { HomePage } from '../pages/home.page';
import { config } from 'dotenv';
config()

describe('Go to homepage', function () {

    let page,
        browser,
        context

    before(async () => {
        browser = await chromium.launch({ headless: false  })
        context = await browser.newContext()
        page = await context.newPage()
    })

    it('click logout button', async () => {
        const homePage = new HomePage(page)
        await homePage.navigate()
        await homePage.logout()
        assert(page.url() === process.env.LANDING_URL, `current url !== landing url (${process.env.LANDING_URL})`)
    })

    it('check page title text', async () => {
        const homePage = new HomePage(page)
        await homePage.navigate()
        assert(await homePage.pageTitle.innerText() === 'welcome to our app'.toUpperCase(), `Home page title !== welcome to our app`)
    })

    after(async function () {
        await browser.close()
    })
})