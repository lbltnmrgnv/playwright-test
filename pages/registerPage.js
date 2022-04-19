require('dotenv').config();

class RegisterPage {

    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('*[name="first_name"]')
        this.password = page.locator('*[name="password"]')
        this.email = page.locator('*[name="email"]')
        this.registerButton = page.locator('#sub_btn')
        this.termsCheckbox = page.locator('*[name="checkbox"]')
        this.termsLink = page.locator('text=terms of service')
        this.backToHomepageLink = page.locator('text=Back to Homepage')
    }

    async navigate() {
        await this.page.goto(process.env.REGISTER_URL);
    }

    async register(username, email, password) {
        await this.firstName.fill(username)
        await this.email.fill(email)
        await this.password.fill(password)
        await this.termsCheckbox.check()
        await this.registerButton.click()
    }

    async termsClick() {
        await this.termsLink.click()
    }

    async backToHomepage() {
        await this.backToHomepageLink.click()
    }
}
module.exports = { RegisterPage };