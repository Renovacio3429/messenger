import Block from "../../core/Block";
import template from "./ChatPage.tmpl";

export class ChatPage extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}