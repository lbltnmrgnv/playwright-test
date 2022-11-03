import { Locator, Page } from '@playwright/test'
import { step } from '../../reporter'

export class BaseElement {
    public element: Locator
    private page: Page
    private name

    constructor(selector: string, options?, name?: string,) {
        this.element = this.page.locator(selector, options)
        this.name = name ? name : BaseElement.name
    }

    @step((name => `[${name}] element click`))
    async click() {
        await this.element.click()
        return this
    }

    @step((name => `[${name}] element get text`))
    async get() {
        await this.element.innerText()
        return this
    }

    @step((name => `Wait for element [${name}]`))
    async wait() {
        await this.element.waitFor({ state: "visible" })
        return this
    }
}