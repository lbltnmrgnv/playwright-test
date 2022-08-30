import { User } from "../types";
import * as faker from 'faker';

export function user(): User {
    return {
        email: faker.internet.email(),
        password: faker.internet.password(),
        confirmPassword: "123123123"
    }
}