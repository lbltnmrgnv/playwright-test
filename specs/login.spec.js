const { chromium } = require('playwright')
const { assert, expect } = require('chai');
const { LoginPage } = require('../pages/loginPage');
//const { step } = require('../config/step')
require('dotenv').config();

describe('Login tests', function () {

    let page,
        browser,
        context;

    before(async function () {
        browser = await chromium.launch({/* headless: false */})
        context = await browser.newContext()
        page = await context.newPage();
    })

    it('Go to Login page, filling all fields and click login button', async function () {
        const loginPage = new LoginPage(page)
        await loginPage.navigate()
        await loginPage.login(process.env.LOGIN, process.env.PASSWORD)
        assert(page.url() === process.env.HOME_URL + `?first_name=${process.env.LOGIN}&password=${process.env.PASSWORD}`, `Current url (${page.url()}) !== login url ${process.env.HOME_URL}?first_name=${process.env.LOGIN}&password=${process.env.PASSWORD}`)
    })

    it('Go to Login page and click forget password link', async function () {
        const loginPage = new LoginPage(page)
        await loginPage.navigate()
        await loginPage.forgetPassword()
        assert(page.url() === process.env.FORGET_PASSWORD_URL, `Current url (${page.url()}) !==  forget password URL${process.env.FORGET_PASSWORD_URL}`)
    })

    it('Go to Login page and click create account link', async function () {
        const loginPage = new LoginPage(page)
        await loginPage.navigate()
        await loginPage.createAnAccount()
        assert(page.url() === process.env.REGISTER_URL, `Current url (${page.url()}) !== register URL${process.env.REGISTER_URL}`)
    })

    it('Go to Login page and click back to homepage link', async function () {
        const loginPage = new LoginPage(page)
        await loginPage.navigate()
        await loginPage.backToHomepage()
        assert(page.url() === process.env.LANDING_URL, `Current url (${page.url()}) !== landing URL${process.env.LANDING_URL}`)
    })

    after(async function () {
        await browser.close()
    })
})