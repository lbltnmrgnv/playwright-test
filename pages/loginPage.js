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
    }

    async navigate() {
        await this.page.goto(process.env.LOGIN_URL);
    }

    async login() {
        await this.firstName.fill(process.env.LOGIN)
        await this.password.fill(process.env.PASSWORD)
        await this.loginButton.click()
    }

    async forgetPassword(){
        await this.forgetPasswordLink.click()
    }
}
module.exports = { LoginPage };