import Block from "../../core/Block";
import template from "./Message.tmpl";

type MessageType = {
    isMine: boolean,
    content: string,
}

export class Message extends Block<MessageType> {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}