import { Locator, Page, test } from '@playwright/test'
import { step } from '../../reporter'
import { ComponentOptions, LocatorOptions } from './types'

export abstract class Component {
    locator: string;
    page: Page
    private name: string | undefined

    constructor({ page, name, locator }: ComponentOptions) {
        this.page = page;
        this.locator = locator;
        this.name = name;
    }

    getLocator(locatorOptions: LocatorOptions): Locator {
        const {selector, ...options} = locatorOptions
        return this.page.locator(selector, options)
    }

    get typeOf(): string {
        return 'component';
    }

    async click(locatorOptions: LocatorOptions): Promise<void> {
        await test.step(`Clicking the ${this.typeOf} with name "${this.name}"`, async () => {
            const locator = this.getLocator(locatorOptions);
            await locator.click()
        });
    }
}