import { Modal } from "components/Modal/Modal";
import { Title } from "components/Title/Title";
import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { profilePageCssProps } from "pages/Profile/ProfilePageCssProps";
import { AddChatUserForm } from "components/Forms/AddChatUserForm";
import UserController from "controllers/UserController";
import ChatController from "controllers/ChatController";
import store from "core/Store";

const userLogin = new Input({
    type: "text",
    fieldName: "title",
    placeholder: "Введите логин пользователя",
});

export const addUserChatModal: Modal = new Modal({
    content: [
        new Button({
            title: "x",
            cssClasses: profilePageCssProps.closeModalButtonCss,
            events: {
                click: () => addUserChatModal.none(),
            },
        }),
        new Title({
            title: "Добавить пользователя",
            level: "2",
        }),

        new AddChatUserForm({
            cssClasses: profilePageCssProps.formModal,
            userLogin: userLogin,
            button: new Button({
                title: "Добавить",
                cssClasses: profilePageCssProps.modalButtonCss,
            }),
            submitData: (data: { title: string }) => {
                const login: string = data.title;

                if (login) {
                    UserController.getUsersByLogin({ login }).then((users) => {
                        if (users && Array.isArray(users)) {
                            const usersId = users.map((user) => user.id);
                            ChatController.addUsersToChat(
                                store.getState().selectedChat,
                                usersId
                            );
                        }
                    });

                    addUserChatModal.none();
                }
            },
        }),
    ],
});
