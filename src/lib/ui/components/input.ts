import { BaseElement } from ".";
import { step } from "../../reporter";

export interface InputInterface {
    get(): Promise<this>,
    type(text: string): Promise<void>
}

export class InputElement extends BaseElement {

    constructor(selector, name?){
        super(selector, name)
    }

    @step((name => `[${name}] type text`))
    async type(text) {
        await this.element.type(text)
    }
}