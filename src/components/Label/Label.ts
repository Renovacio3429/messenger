import Block from "../../core/Block";
import template from "./Label.tmpl";

export class Label extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}