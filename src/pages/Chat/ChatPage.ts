import template from "./ChatPage.tmpl";
import Block from "../../core/Block";
import {SidebarHeader} from "../../components/SidebarHeader/SidebarHeader";
import {Modal} from "../../components/Modal/Modal";
import ChatController from "../../controllers/ChatController";
import {chatPageProps} from "./ChatPageProps";
import {ChatsList} from "../../components/ChatList/ChatList";
import {Messenger} from "../../components/Messenger/Messenger";
import {withState} from "../../hocs/withState";

export type ChatPageType = {
    sidebarHeader: SidebarHeader,
    chatList?: typeof ChatsList,
    addChatModal: Modal,
    addUserChatModal: Modal,
    removeUserChatModal: Modal,
}

export class ChatPage extends Block<ChatPageType> {

    protected init() {
        this.children = chatPageProps;

        this.children.chatList = new ChatsList({
            isChatsLoaded: false,
        });

        ChatController.fetchChats().finally(() => {
            (this.children.chatList as Block<any>).setProps({
                isChatsLoaded: true,
            });
        });

        this.children.messenger = new Messenger({});
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

// @ts-ignore
export const Chat = withState(ChatPage);