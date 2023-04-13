import { RequestBuilder } from '..'

export class BaseController {
    readonly requestBuilder: RequestBuilder
    readonly url: string
    readonly name: string
    constructor(url: string, name: string) {
        this.requestBuilder = new RequestBuilder(url)
        this.url = url
        this.name = name ? name : BaseController.name
    }
}