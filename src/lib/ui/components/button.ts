import { BaseElement } from ".";

export interface ButtonInterface {
    click(): Promise<this>,
    get(): Promise<this>
}

export class ButtonElement extends BaseElement {
    constructor(selector, name?){
        super(selector, name)
    }
}