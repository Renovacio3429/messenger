import Block from "../../core/Block";
import template from "./Button.tmpl";

export class Button extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}