import { User } from "../types";
import * as faker from 'faker';


export const user = (): User => {
    return {
        email: faker.internet.email(),
        password: faker.internet.password(),
        confirm_password: faker.internet.password()
    }
}