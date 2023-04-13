import * as config from '../../config'
import { step } from '../../reporter'
import { BaseController } from './index'
import { TestRequest } from '../../fixtures/api.fixture';


export class PetController extends BaseController {
    constructor() {
        super(config.env.urls.pet_store + '/pet/', 'Pet')
    }
    /**
     * 
     * @param data 
     * @returns 
     */
    @step((name) => `[${name} controller] POST request to /pet`)
    async create(request: TestRequest) {
        const response = await this.requestBuilder.POST(request)
        return response
    }
    /**
     * 
     * @param id 
     * @returns 
     */
    @step((name) => `[${name} controller] DELETE request to /pet/{id}`)
    async delete(requestData: TestRequest, id: number) {
        return await this.requestBuilder.DELETE(requestData,`/${id}`)
    }
    /**
     * 
     * @param id 
     * @returns 
     */
    @step((name) => `[${name} controller] GET request to /pet/{id}`)
    async getById(requestData: TestRequest, id: number) {
        return await this.requestBuilder.GET(requestData, `/${id}`)
    }
    /**
     * 
     * @param data 
     * @returns 
     */
    @step((name) => `[${name} controller] GET request to /pet/{id}`)
    async update(requestData: TestRequest, id: number) {
        return await this.requestBuilder.PUT(requestData, `/${id}`)
    }
}