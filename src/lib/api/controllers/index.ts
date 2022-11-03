import { RequestBuilder } from '..'

export class BaseController {
    readonly request: RequestBuilder
    readonly url
    readonly name: string
    constructor(url: string, name: string) {
        this.request = new RequestBuilder(url)
        this.url = url
        this.name = name ? name : BaseController.name
    }
}