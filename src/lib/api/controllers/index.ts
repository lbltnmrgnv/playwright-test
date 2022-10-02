import * as supertest from 'supertest'

export class BaseController {
    readonly request
    readonly url
    readonly name: string
    constructor(url: string, name: string) {
        this.request = supertest(url)
        this.url = url
        this.name = name ? name : BaseController.name
    }
}