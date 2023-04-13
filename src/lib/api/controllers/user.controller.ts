import * as config from '../../config'
import { User } from '../../components/user/types';
import { step } from '../../reporter'
import { BaseController } from './index'
import { TestRequest } from '../../fixtures/api.fixture';


export class UserController extends BaseController {
    constructor() {
        super(config.env.urls.pet_store + '/user/', 'User')
    }

    /**
     * 
     * @param data 
     * @returns 
     */
    @step((name) => `[${name} controller] POST request to /user`)
    async create(requestData: TestRequest) {
        return await this.requestBuilder.POST(requestData)
    }

    /**
     * 
     * @param username 
     * @returns 
     */
    @step((name) => `[${name} controller] DELETE request to /user/{username}`)
    async delete(requestData: TestRequest, username: string) {
        return await this.requestBuilder.DELETE(requestData, '/' + username)
    }

    /**
     * 
     * @param username 
     * @returns 
     */
    @step((name) => `[${name} controller] GET request to /user/{username}`)
    async getByUsername(requestData: TestRequest, username: string) {
        return await this.requestBuilder.GET(requestData, '/' + username)
    }

    /**
     * 
     * @param username 
     * @param data 
     * @returns 
     */
    @step((name) => `[${name} controller] PUT request to /user/{username}`)
    async update(requestData: TestRequest, username: string) {
        return await this.requestBuilder.PUT(requestData, + '/' + username)
    }
}