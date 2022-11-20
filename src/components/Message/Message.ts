import Block from "core/Block";
import template from "./Message.tmpl";

export type MessageType = {
    isMine: boolean;
    message: string;
};

export class Message extends Block<MessageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
