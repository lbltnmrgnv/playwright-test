const { chromium } = require('playwright')
const { expect, assert } = require('chai');
const { ForgetPasswordPage } = require('../pages/forgetPassword.page');
const faker = require('faker')
//const { step } = require('../config/step')
require('dotenv').config();

describe('Go to forget password page', function () {

    let page,
        browser,
        context;

    before(async function () {
        browser = await chromium.launch({ /*headless: false */ })
        context = await browser.newContext()
        page = await context.newPage();
    })

    it('fill email input and click send reset email button', async function () {
        const forgetPasswordPage = new ForgetPasswordPage(page)
        await forgetPasswordPage.navigate()
        await forgetPasswordPage.sendEmail(email = faker.internet.email())
        assert(page.url() === process.env.LOGIN_URL + `?email=${email.replace('@', '%40')}`, `Current url (${page.url()}) !== login url ${process.env.LOGIN_URL}?email=${email.replace('@', '%40')}`)
    })

    it('click create account link', async function () {
        const forgetPasswordPage = new ForgetPasswordPage(page)
        await forgetPasswordPage.navigate()
        await forgetPasswordPage.createAnAccount()
        assert(page.url() === process.env.REGISTER_URL, `Current url (${page.url()}) !== register URL${process.env.REGISTER_URL}`)
    })

    it('click back to homepage link', async function () {
        const forgetPasswordPage = new ForgetPasswordPage(page)
        await forgetPasswordPage.navigate()
        await forgetPasswordPage.backToHomepage()
        assert(page.url() === process.env.LANDING_URL, `Current url (${page.url()}) !== landing URL${process.env.LANDING_URL}`)
    })


    after(async function () {
        await browser.close()
    })

})


