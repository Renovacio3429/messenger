import Block from "../../core/Block";
import template from "./Link.tmpl";

export class Link extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}