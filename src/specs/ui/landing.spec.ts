import { chromium } from '@playwright/test'
import { assert } from 'chai';
import { LandingPage } from '../../lib/ui/pages/landing.page';
import * as config from '../../lib/config'
import {story, suite, feature} from '../../lib/reporter'

describe('Go to landing page', async function () {

    let page,
        browser,
        context;

    before(async () => {
        browser = await chromium.launch({ /*headless: false */ })
        context = await browser.newContext({ 'width': 1920, 'height': 1080 })
        page = await context.newPage();
    })

    beforeEach(() => {
        feature('Ui')
        story('Lansding page')
    })

    after(async () => {
        await browser.close()
    })

    it('and click login buttton at menu nav bar', async () => {
        const landingPage = new LandingPage(page)
        await landingPage.goto()
        await landingPage.clickToLogin()
        assert(page.url() === config.env.urls.login, `Current url (${page.url()}) !== login url ${config.env.urls.login}`)
    })

    it('and check page title text', async () => {
        const landingPage = new LandingPage(page)
        await landingPage.goto()
        const title: string = await landingPage.pageTitle.innerText()
        assert(title.toUpperCase() === 'GEEK DASHBOARD', `Landing page title ${title.toUpperCase()} !== GEEK DASHBOARD`)
    })

})


