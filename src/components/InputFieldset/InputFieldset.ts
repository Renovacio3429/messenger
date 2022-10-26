import Block from "../../core/Block";
import template from "./InputFieldset.tmpl";

export class InputFieldset extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}