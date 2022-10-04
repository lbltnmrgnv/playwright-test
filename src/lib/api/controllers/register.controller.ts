import * as config from '../../config'
import { User } from '../../components/register/types';
import { step, attachJsonData } from '../../reporter'
import { BaseController } from './index'


export class Register extends BaseController {
    constructor() {
        super(config.env.urls.base + 'api/auth/register', 'Register')
    }
    @step((name) => `[${name} controller] POST request to /api/auth/register`)
    async signUp(user: User) {
        const response = await this.request
            .post('')
            .send(user)
        attachJsonData('Request data', user)
        return response
    }
}