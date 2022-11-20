import { Modal } from "components/Modal/Modal";
import { Title } from "components/Title/Title";
import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { profilePageCssProps } from "pages/Profile/ProfilePageCssProps";
import { RemoveChatUserForm } from "components/Forms/RemoveChatUserForm";
import ChatController from "controllers/ChatController";
import UserController from "controllers/UserController";
import store from "core/Store";

const userLogin = new Input({
    type: "text",
    fieldName: "title",
    placeholder: "Введите логин пользователя",
});

export const removeUserChatModal: Modal = new Modal({
    content: [
        new Button({
            title: "x",
            cssClasses: profilePageCssProps.closeModalButtonCss,
            events: {
                click: () => removeUserChatModal.none(),
            },
        }),
        new Title({
            title: "Удалить пользователя",
            level: "2",
        }),

        new RemoveChatUserForm({
            cssClasses: profilePageCssProps.formModal,
            userLogin: userLogin,
            button: new Button({
                title: "Удалить",
                cssClasses: profilePageCssProps.modalButtonCss,
            }),
            submitData: (data: { title: string }) => {
                const login = data.title;

                if (login) {
                    UserController.getUsersByLogin({ login }).then((users) => {
                        if (users && Array.isArray(users)) {
                            const usersId = users.map((user) => user.id);
                            ChatController.deleteUsersFromChat(
                                store.getState().selectedChat,
                                usersId
                            );
                        }
                    });

                    removeUserChatModal.none();
                }
            },
        }),
    ],
});
