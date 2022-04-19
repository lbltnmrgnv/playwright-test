require('dotenv').config();

class LoginPage {

    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('*[name="first_name"]')
        this.password = page.locator('*[name="password"]')
        this.loginButton = page.locator('#sub_btn')
        this.forgetPasswordLink = page.locator('.right-label')
        this.registerLink = page.locator('text=Create an account')
        this.backToHomepageLink = page.locator('text=Back to Homepage')
    }

    async navigate() {
        await this.page.goto(process.env.LOGIN_URL);
    }

    async login(username, password) {
        await this.firstName.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async forgetPassword() {
        await this.forgetPasswordLink.click()
    }

    async createAnAccount() {
        await this.registerLink.click()
    }

    async backToHomepage() {
        await this.backToHomepageLink.click()
    }
}
module.exports = { LoginPage };