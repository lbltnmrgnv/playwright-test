const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

describe('Test app', function () {
    let page;
    let browser;
    before(async function () {
        browser = await chromium.launch(/*{headless: false}*/)
        const context = await browser.newContext()
        page = await context.newPage();
    })
    it('Go to landing page', async function () {
        await page.goto("http://localhost:3000/")

    })

    it('Go to login page', async function () {
        await page.goto("http://localhost:3000/login")
    })

    it('Go to register page', async function () {
        await page.goto("http://localhost:3000/register")
    })
    after(async function () {
        await browser.close()
    })
})