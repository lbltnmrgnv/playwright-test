require('dotenv').config()

class HomePage {

    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.logoutBtn = page.locator('[class="primary-button"]')
        this.pageTitle = page.locator('[class="main-title home-page-title"]')
    }

    async navigate() {
        await this.page.goto(process.env.HOME_URL)
    }

    async logout() {
        await this.logoutBtn.click()
    }
}

module.exports = {
    HomePage
}