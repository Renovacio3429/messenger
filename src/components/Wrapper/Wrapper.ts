import Block from "../../core/Block";
import template from "./Wrapper.tmpl";

export class Wrapper extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}