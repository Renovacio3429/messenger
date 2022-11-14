import {Modal} from "../../components/Modal/Modal";
import {Title} from "../../components/Title/Title";
import {Button} from "../../components/Button/Button";
import {Label} from "../../components/Label/Label";
import {profilePageCssProps} from "./ProfilePageCssProps";
import {Input} from "../../components/Input/Input";
import UserController from "../../controllers/UserController";
import {AvatarForm} from "../../components/Forms/AvatarForm";
import {UserType} from "../../api/UserAPI";

export const modal: Modal = new Modal({
    content: [
        new Button({
            title: "x",
            cssClasses: profilePageCssProps.closeModalButtonCss,
            events: {
                click: () => modal.none()
            }
        }),
        new Title({
            title: "Загрузите файл",
            level: "2",
        }),

        new AvatarForm({
            cssClasses: profilePageCssProps.formModal,
            inputs: new Input({
                        type: "file",
                        fieldName: "avatar",
                        placeholder: "Выбрать файл на компьютере"
                    }),
            button: new Button({
                title: "Поменять",
                cssClasses: profilePageCssProps.modalButtonCss,
            }),
            submitData: (data: UserType) => {
                UserController.updateAvatar(data).then(() => modal.none());
            },

        }),

        new Label({
            title: "Нужно выбрать файл",
        })
    ]
});
