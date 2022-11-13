import Block from "../../core/Block";
import template from "./Messenger.tmpl";
import {withStore} from "../../hocs/withStore";
import {Message} from "../Message/Message";
import {ChatInfo, MessengerProps} from "./MessengerProps";
import {DialogFooter} from "../Dialog/footer/DialogFooter";
import {DialogHeader} from "../Dialog/header/DialogHeader";
import {Modal} from "../Modal/Modal";

export type MessengerComponentType = {
    selectedChat?: number | undefined,
    messages?: Message[],
    dialogHeader?: DialogHeader,
    dialogFooter?: DialogFooter,
    addUserChatModal?: Modal,
    removeUserChatModal ?: Modal,
}

class MessengerComponent extends Block<MessengerComponentType> {

    protected init() {
        this.children = MessengerProps;
        ChatInfo.chatId = this.props.selectedChat;
        this.children.messages = this.createMessages(this.props);
    }

    protected componentDidUpdate(oldProps: MessengerComponentType, newProps: MessengerComponentType): boolean {
        this.children.messages = this.createMessages(newProps);
        ChatInfo.chatId = this.props.selectedChat;
        return true;
    }

    private createMessages(props: any): Message[] {
        return props.messages.map(data => {
            return new Message({...data, isMine: props.userId === data.user_id});
        });
    }

    protected render(): DocumentFragment {
        return this.compile(template, {...this.props});
    }
}

const withSelectedChatMessages = withStore(state => {
    const selectedChatId = state.selectedChat;

    if (!selectedChatId) {
        return {
            messages: [],
            selectedChat: undefined,
            userId: state.user.id,
        };
    }

    return {
        messages: (state.messages || {}) [selectedChatId] || [],
        selectedChat: state.selectedChat,
        userId: state.user.id,
    };
});

export const Messenger = withSelectedChatMessages(MessengerComponent as typeof Block);
