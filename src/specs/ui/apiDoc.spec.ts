import { chromium } from '@playwright/test'
import { test, expect } from '../../lib/fixtures/playwright/api_doc.fixture'

test.describe('Go to the API doc page', async function () {
    test('and click APIRequest link at left nav bar', async ({ apiDocPage }) => {
        await apiDocPage.openGithub()
    })
})


