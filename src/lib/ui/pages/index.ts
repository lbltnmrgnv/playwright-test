import { Page } from '@playwright/test';
import { step } from '../../reporter';

export class BasePage {
    
    readonly page: Page
    private name: string;
    readonly url: string

    constructor(page: Page, name: string, url: string) {
        this.page = page
        this.name = name ? name : BasePage.name;
        this.url = url
    }
    
    @step((name) => `Navigate to ${name}`)
    async goto() {
        await this.page.goto(this.url)
    }
}