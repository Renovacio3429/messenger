import {InputFieldset} from "../../../components/InputFieldset/InputFieldset";
import {Label} from "../../../components/Label/Label";
import {Input} from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";
import {Avatar} from "../../../components/Avatar/Avatar";
import {Wrapper} from "../../../components/Wrapper/Wrapper";
import {ProfileChangePwdForm} from "../../../components/Forms/ProfileChangePwdForm";
import {ProfileChangePwdPageType} from "./ProfileChangePwdPage";
import UserController from "../../../controllers/UserController";
import {modal} from "../modalProfile";
import {profilePageCssProps} from "../ProfilePageCssProps";
import {UserType} from "../../../api/UserAPI";

export const profileChangePwdPageProps: ProfileChangePwdPageType = {
    sidebarButton: new Button({
        cssClasses: profilePageCssProps.sidebarCss,
        events: {
            click: () => window.location.pathname="/chat"
        }
    }),
    avatar: new Wrapper({
        cssClasses: profilePageCssProps.avatarCss,
        content: new Avatar({
            cssClasses: profilePageCssProps.avatarInputCss,
            events: {
                click: () => modal.showFlex(),
            }
        }),
    }),
    content: new ProfileChangePwdForm({
        inputs: [
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Старый пароль",
                        fieldName: "oldPassword",
                    }),
                    new Input({
                        type: "password",
                        fieldName: "oldPassword",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Введите старый пароль",
                    })
                ]
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Новый пароль",
                        fieldName: "newPassword",
                    }),
                    new Input({
                        type: "password",
                        fieldName: "newPassword",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Введите новый пароль",
                    })
                ]
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Повторите новый пароль",
                        fieldName: "newPasswordSecond",
                    }),
                    new Input({
                        type: "password",
                        fieldName: "newPasswordSecond",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Введите новый пароль еще раз",
                    })
                ]
            }),
        ],
        button: new Button({
            title: "Сохранить",
            cssClasses: profilePageCssProps.buttonCss
        }),
        cssClasses: profilePageCssProps.formCss,

        submitData: (data: UserType) => {
            UserController.updatePassword(data);
        },
    }),
    modal: modal,
}
