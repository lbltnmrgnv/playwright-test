require('dotenv').config();

class ForgetPasswordPage {
    
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('*[name="email"]')
        this.sendEmailBtn = page.locator('#sub_btn')
        this.registerLink = page.locator('text=Create an account')
        this.backToHomepageLink = page.locator('text=Back to Homepage')
    }

    async navigate() {
        await this.page.goto(process.env.FORGET_PASSWORD_URL);
    }

    async sendEmail(email) {
        await this.emailInput.fill(email)
        await this.sendEmailBtn.click()
    }

    async createAnAccount() {
        await this.registerLink.click()
    }

    async backToHomepage() {
        await this.backToHomepageLink.click()
    }
}
module.exports = { ForgetPasswordPage };