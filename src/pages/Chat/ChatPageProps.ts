import {SidebarHeader} from "../../components/SidebarHeader/SidebarHeader";
import {Contact} from "../../components/Contact/Contact";
import {DialogHeader} from "../../components/Dialog/header/DialogHeader";
import {DialogFooter} from "../../components/Dialog/footer/DialogFooter";
import {Form} from "../../components/Form/Form";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import {Message} from "../../components/Message/Message";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {chatPageCssProps} from "./ChatPageCssProps";
import {dropDownFooter, dropDownHeader} from "./ChatDropdowns";
import {ChatPageType} from "./ChatPage";

export const chatPageProps: ChatPageType = {
    sidebarHeader: new SidebarHeader(),
    contacts: [
        new Contact({
            contactName: "Алейксей",
            messageInfo: "Пн"
        }),
    ],
    chatHeader: new DialogHeader({
        name: "Алексей",
        button: new Button({
            events: {
              click: () => dropDownHeader.showBlock(),
            },
            cssClasses: chatPageCssProps.buttonHeaderCss,
        }),
        dropdownHeader: dropDownHeader,
    }),
    chatFooter: new DialogFooter({
        form: new Form({
            action: "#",
            inputs: [
                new Wrapper({
                    content: new Input({
                        placeholder: "Сообщение",
                        type: "text",
                        fieldName: "message",
                        cssClasses: chatPageCssProps.inputCss,
                    }),
                    cssClasses: chatPageCssProps.inputWrapCss
                })
            ],
            button: new Button({
                cssClasses: chatPageCssProps.buttonFormCss,
            }),
            cssClasses: chatPageCssProps.formCss,
        }),
        button: new Button({
            events: {
                click: () => dropDownFooter.showBlock(),
            },
            cssClasses: chatPageCssProps.buttonAttachCss,
        }),
        dropdownFooter: dropDownFooter,
    }),
    messages: [
        new Message({
            content: "Раз-раз, проверка связи!",
            cssClasses: chatPageCssProps.messageQueryCss,
        }),
        new Message({
            content: "Привет!",
            cssClasses: chatPageCssProps.messageAnswerCss,
        }),
        new Message({
            content: "=)",

            cssClasses: chatPageCssProps.messageQueryCss,
        }),
    ],
}