import { User } from "../types";
import * as faker from 'faker';
import { step } from "../../reporter";

export function user(): User {
    return {
        email: faker.internet.email(),
        password: faker.internet.password(),
        confirmPassword: "123123123"
    }
}