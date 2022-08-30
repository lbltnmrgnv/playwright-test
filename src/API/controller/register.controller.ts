import { config } from 'dotenv';
config()
import * as supertest from 'supertest'
import { User } from '../../data/types';
import { step } from '../../reporter'

const request = supertest(process.env.LANDING_URL + 'api/auth/')

export class Register {

    @step(`User signup`)
    async signUp(user: User) {
        return await request
            .post('register')
            .send(user)
    }
}