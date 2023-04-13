import * as supertest from 'supertest'
import { TestResponse, TestRequest } from '../fixtures/api.fixture'
import { attachJsonData } from '../reporter'

export class RequestBuilder {

    request: supertest.SuperTest<supertest.Test>

    constructor(url: string) {
        this.request = supertest(url)
    }

    async POST(requestData: TestRequest, urlPath: string = ''): Promise<TestResponse> {
        const response = await this.request
            .post(urlPath)
            .set(requestData.headers)
            .send(requestData.body ?? {})

        attachJsonData('Request data', requestData)

        const { body, headers, statusCode } = response
        return { body, headers, statusCode }
    }

    async GET(requestData: TestRequest, urlPath: string = '', query: string = '') {
        const response = await this.request
            .get(urlPath + query)
            .set(requestData.headers)

        attachJsonData('Headers', requestData.headers)
        attachJsonData('Query params', query)
        return response
    }

    async DELETE(requestData: TestRequest, urlPath: string = '') {
        const response = await this.request
            .delete(urlPath)
            .set(requestData.headers)

        attachJsonData('Headers', requestData.headers)
        return response
    }

    async PUT(requestData: TestRequest, urlPath: string = '') {
        const response = await this.request
            .put(urlPath)
            .set(requestData.headers)
            .send(requestData.body ?? {})

        attachJsonData('Headers', requestData.headers)
        attachJsonData('Request data', requestData)
        return response
    }
}