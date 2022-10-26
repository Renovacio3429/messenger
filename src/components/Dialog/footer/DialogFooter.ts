import Block from "../../../core/Block";
import template from "./DialogFooter.tmpl";

export class DialogFooter extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}