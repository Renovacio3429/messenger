import Block from "../../core/Block";
import template from "./LinkBox.tmpl";

export class LinkBox extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}