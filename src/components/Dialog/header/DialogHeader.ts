import Block from "../../../core/Block";
import template from "./DialogHeader.tmpl";

export class DialogHeader extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}