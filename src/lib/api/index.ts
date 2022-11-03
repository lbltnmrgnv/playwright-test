import * as supertest from 'supertest'
import { attachJsonData } from '../reporter'

export class RequestBuilder {

    request: supertest.SuperTest<supertest.Test>

    constructor(url) {
        this.request = supertest(url)
    }

    async POST(urlPath: string, headers: object, data: object) {
        const response = await this.request
            .post(urlPath)
            .set(headers)
            .send(data)

        attachJsonData('Headers', headers)
        attachJsonData('Request data', data)
        return response
    }

    async GET(urlPath: string, headers?: object, query: string = '') {
        const response = await this.request
            .get(urlPath + query)
            .set(headers)

        attachJsonData('Headers', headers)
        attachJsonData('Query params', query)
        return response
    }
}