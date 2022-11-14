import {SidebarHeader} from "../../components/SidebarHeader/SidebarHeader";
import {ChatPageType} from "./ChatPage";
import {Link} from "../../components/Link/Link";
import {profilePageCssProps} from "../Profile/ProfilePageCssProps";
import {addChatModal} from "./addChatModal";
import {addUserChatModal} from "../../components/Messenger/addUserChatModal";
import {removeUserChatModal} from "../../components/Messenger/removeUserChatModal";
import store from "../../core/Store";
import ChatController from "../../controllers/ChatController";

export const chatPageProps: ChatPageType = {
    sidebarHeader: new SidebarHeader({
        addChatlink: new Link({
            title: "Добавить новый чат",
            cssClasses: profilePageCssProps.blueLinkCss,
            submitLink: () => addChatModal.showFlex(),
        }),
        removeChatlink: new Link({
            title: "Удалить чат",
            cssClasses: profilePageCssProps.redLinkCss,
            submitLink: () => {
                const id = store.getState().selectedChat;
                if (id) {
                    ChatController.delete(id);
                }
            },
        })
    }),
    addChatModal: addChatModal,
    addUserChatModal: addUserChatModal,
    removeUserChatModal: removeUserChatModal,
}
