import Block from "../../core/Block";
import template from "./Title.tmpl";

export class Title extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}