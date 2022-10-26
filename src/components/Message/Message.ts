import Block from "../../core/Block";
import template from "./Message.tmpl";

type MessageType = {
    cssClasses?: string,
    content?: string,
    time?: string,
}

export class Message extends Block<MessageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}