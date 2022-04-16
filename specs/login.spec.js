const { chromium } = require('playwright')
const { assert, expect } = require('chai');
const { LoginPage } = require('../pages/loginPage');
const { addStep } = require('../config/step')
require('dotenv').config();

describe('Login tests', function () {

    let page;
    let browser;

    before(async function () {
        browser = await chromium.launch(/*{ headless: false }*/)
        const context = await browser.newContext()
        page = await context.newPage();
    })

    it('Go to Login page and click login button', async function () {
        const loginPage = new LoginPage(page)
        await loginPage.navigate()
        await loginPage.login()
        const screenshot = await page.screenshot()
        expect(page.url()).to.be.eql(process.env.HOME_URL + `?first_name=${process.env.LOGIN}&password=${process.env.PASSWORD}`)
        //addStep('Screen', screenshot)
    })

    it('Go to Login page and click forget password link', async function () {
        const loginPage = new LoginPage(page)
        await loginPage.navigate()
        await loginPage.forgetPassword()
        expect(page.url()).to.be.eql(process.env.FORGET_PASSWORD_URL)
        const screenshot = await page.screenshot()
        //addStep('Screen', screenshot)
    })

    after(async function () {
        await browser.close()
    })
})