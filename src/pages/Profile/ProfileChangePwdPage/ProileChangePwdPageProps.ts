import {Form} from "../../../components/Form/Form";
import {InputFieldset} from "../../../components/InputFieldset/InputFieldset";
import {Label} from "../../../components/Label/Label";
import {Input} from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";
import {Avatar} from "../../../components/Avatar/Avatar";
import {profilePageCssProps} from "../ProfilePageCssProps";
import {ProfileChangePwdPageType} from "./ProfileChangePwdPage";

export const profileChangePwdPageProps: ProfileChangePwdPageType = {
    sidebarButton: new Button({
        cssClasses: profilePageCssProps.sidebarCss,
        events: {
            click: () => window.location.pathname="/chat"
        }
    }),
    avatar: new Avatar({
        cssClasses: profilePageCssProps.avatarCss,
        input: new Input({
            type: "button",
            fieldName: "avatar",
            cssClasses: profilePageCssProps.avatarInputCss,
        })
    }),
    content: new Form({
        action: "/profile",
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
                        placeholder: "qwerty",
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
                        placeholder: "qwerty",
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
                        placeholder: "qwerty",
                    })
                ]
            }),
        ],
        button: new Button({
            title: "Сохранить",
            cssClasses: profilePageCssProps.buttonCss
        }),
        cssClasses: profilePageCssProps.formCss
    }),
}