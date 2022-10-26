import Block from "../../core/Block";
import template from "./Contact.tmpl";

export class Contact extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}