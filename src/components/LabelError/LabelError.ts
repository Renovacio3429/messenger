import Block from "../../core/Block";
import template from "./LabelError.tmpl";

export class LabelError extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}