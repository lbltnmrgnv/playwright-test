import { ElementHandle, Page } from '@playwright/test'

export class Element {
    private element: ElementHandle

    constructor(element: ElementHandle, name: string) {
        this.element = element
    }

    async click() {
        await this.element.click()
    }

    async get() {
        await this.element.innerText()
    }
}