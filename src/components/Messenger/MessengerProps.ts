import {DialogHeader} from "../Dialog/header/DialogHeader";
import {chatPageCssProps} from "../../pages/Chat/ChatPageCssProps";
import {Button} from "../Button/Button";
import {Wrapper} from "../Wrapper/Wrapper";
import {DialogFooter} from "../Dialog/footer/DialogFooter";
import {Input} from "../Input/Input";
import MessagesController from "../../controllers/MessagesController";
import {ChatForm} from "../Forms/ChatForm";
import {MessengerComponentType} from "./Messenger";
import {removeUserChatModal} from "./removeUserChatModal";
import {addUserChatModal} from "./addUserChatModal";
import {FooterDropDown} from "../Dropdown/chatFooter/FooterDropDown";
import {HeaderDropDown} from "../Dropdown/chatHeader/HeaderDropDown";
import {DropdownLink} from "../DropdownLink/DropdownLink";

const dropDownFooter = new FooterDropDown();
const dropDownHeader = new HeaderDropDown({
    dropdownLinks: [
        new DropdownLink({
            title: "Добавить_пользователя",
            iconClass: "add-icon",
            linkCss: "add-user-link",
            submitLink: () => addUserChatModal.showFlex(),
        }),
        new DropdownLink({
            title: 'Удалить_пользователя',
            iconClass: 'remove-icon',
            linkCss: 'remove-user-link',
            submitLink: () => removeUserChatModal.showFlex(),
        }),
    ]
});

export const MessengerProps: MessengerComponentType = {
    dialogHeader: new DialogHeader({
        button: new Button({
            events: {
                click: () => dropDownHeader.showBlock(),
            },
            cssClasses: chatPageCssProps.buttonHeaderCss,
        }),
        dropdownHeader: dropDownHeader,
    }),
    dialogFooter: new DialogFooter({
        form: new ChatForm({
            inputs: new Wrapper({
                content: new Input({
                    placeholder: "Сообщение",
                    type: "text",
                    fieldName: "message",
                    cssClasses: chatPageCssProps.inputCss,
                }),
                cssClasses: chatPageCssProps.inputWrapCss
            }),
            button: new Button({
                cssClasses: chatPageCssProps.buttonFormCss,
            }),
            cssClasses: chatPageCssProps.formCss,
            submitData: (data: any) => {
                if (ChatInfo.chatId && data) {
                    MessagesController.sendMessage(ChatInfo.chatId , data.message);
                }
            },
        }),
        button: new Button({
            events: {
                click: () => dropDownFooter.showBlock(),
            },
            cssClasses: chatPageCssProps.buttonAttachCss,
        }),
        dropdownFooter: dropDownFooter,
    }),
}

export const ChatInfo: Record<string, undefined | number> = {
    chatId: undefined,
}