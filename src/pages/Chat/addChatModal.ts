import {Modal} from "../../components/Modal/Modal";
import {Title} from "../../components/Title/Title";
import {Button} from "../../components/Button/Button";
import {Input} from "../../components/Input/Input";
import ChatController from "../../controllers/ChatController";
import {AddChatForm} from "../../components/Forms/AddChatForm";
import {profilePageCssProps} from "../Profile/ProfilePageCssProps";

const chatNameInput = new Input({
    type: "text",
    fieldName: "title",
    placeholder: "Введите название чата"
})

export const addChatModal: Modal = new Modal({
    content: [
        new Button({
            title: "x",
            cssClasses: profilePageCssProps.closeModalButtonCss,
            events: {
                click: () => addChatModal.none()
            }
        }),
        new Title({
            title: "Добавить чат",
            level: "2",
        }),

        new AddChatForm({
            cssClasses: profilePageCssProps.formModal,
            chatNameInput: chatNameInput,
            button: new Button({
                title: "Добавить",
                cssClasses: profilePageCssProps.modalButtonCss,
            }),
            submitData: (data: any) => {

                const nameChat: string = data.title;

                if (nameChat) {
                    ChatController.createChat(nameChat);
                    addChatModal.none();
                }
            },
        }),
    ]
});