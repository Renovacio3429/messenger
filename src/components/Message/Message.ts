import Block from "../../core/Block";
import template from "./Message.tmpl";

export class Message extends Block {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}