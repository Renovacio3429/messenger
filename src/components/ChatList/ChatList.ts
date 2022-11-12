import template from "./ChatList.tmpl";
import Block from "../../core/Block";
import ChatController from "../../controllers/ChatController";
import {Chat, ChatType} from "../Chat/Chat";
import {withChats} from "../../hocs/withChats";

type ChatListComponentType = {
    isChatsLoaded?: boolean,
    chats: ChatType[]
}

class ChatListComponent extends Block<ChatListComponentType> {

    protected init () {
        this.children.chats = this.createChats(this.props);
    }

    protected componentDidUpdate(oldProps: ChatListComponentType, newProps: ChatListComponentType): boolean {
        this.children.chats = this.createChats(newProps);
        return true;
    }

    private createChats(props: ChatListComponentType) {
        return props.chats.map(data => {
            return new Chat({
                ...data,
                events: {
                    click: () => {
                        ChatController.selectChat(data.id);
                    },
                },
            });
        });
    }

    protected render(): DocumentFragment {
        return this.compile(template, {...this.props});
    }
}

// @ts-ignore
export const ChatsList = withChats(ChatListComponent);