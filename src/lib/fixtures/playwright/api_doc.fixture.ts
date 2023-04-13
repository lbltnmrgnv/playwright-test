import { test as base } from '@playwright/test';
import { Response } from 'supertest';
import { PetController } from '../../api/controllers/pet.controller';
import { UserController } from '../../api/controllers/user.controller';
import { AssertHelper } from '../../utils/asserts';

export type TestResponse = {
    statusCode: Number
    body: Object,
    headers: Object
}

export type TestRequest = {
    body: Object,
    headers: Object
}

// Declare the types of your fixtures.
type TestFixtures = {
    petController: PetController,
    userController: UserController,
    assertHelper: AssertHelper
};

export const test = base.extend<TestFixtures>({
    petController: async ({ }, use) => {
        const pet = new PetController();
        await use(pet);
    },

    userController: async ({ }, use) => {
        const userController = new UserController();
        await use(userController);
    },
    assertHelper: async ({ }, use) => {
        const assert = new AssertHelper()
        await use(assert)
    }
});
export { expect } from '@playwright/test';