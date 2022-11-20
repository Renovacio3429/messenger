import Block from "core/Block";
import template from "./Chat.tmpl";
import { withSelectedChat } from "hocs/withSelectedChat";

export type ChatType = {
    contactName: string;
    selectedChat: any;
    id: number;
};

export class ChatComponent extends Block<ChatType> {
    public render(): DocumentFragment {
        return this.compile(template, {
            ...this.props,
            isSelected: this.props.id === this.props.selectedChat?.id,
        });
    }
}

export const Chat = withSelectedChat(ChatComponent as typeof Block);
