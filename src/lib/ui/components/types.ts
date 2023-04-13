import { Page } from '@playwright/test';

export type LocatorOptions = { selector: string } & { [key: string]: string | boolean | number };

export type ComponentOptions = {
    page: Page;
    name?: string;
    locator: string;
};