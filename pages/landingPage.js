require('dotenv').config();

class LandingPage {
    
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('text=log in')
        this.registerButton = page.locator('button:has-text("register")')
    }

    async navigate() {
        await this.page.goto(process.env.LANDING_URL);
    }

    async login() {
        await this.loginButton.click()
    }

    async register() {
        await this.registerButton.click()
    }
}
module.exports = { LandingPage };