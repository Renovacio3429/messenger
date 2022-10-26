import Block from "../../core/Block";
import template from "./Avatar.tmpl";

export class Avatar extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}