import {Form} from "../../../components/Form/Form";
import {InputFieldset} from "../../../components/InputFieldset/InputFieldset";
import {Label} from "../../../components/Label/Label";
import {Input} from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";
import {Avatar} from "../../../components/Avatar/Avatar";
import {Wrapper} from "../../../components/Wrapper/Wrapper";
import {profilePageCssProps} from "../ProfilePageCssProps";
import {ProfileChangeDataPageType} from "./ProfileChangeDataPage";

export const profileChangeDataPageProps: ProfileChangeDataPageType = {
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
        }),
    }),
    content: new Form({
        action: "/profile",
        inputs: [
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Почта",
                        fieldName: "email",
                    }),
                    new Wrapper({
                        content: new Input({
                            type: "text",
                            fieldName: "email",
                            cssClasses: profilePageCssProps.inputCss,
                            placeholder: "pochta@yandex.ru",
                        }),
                        cssClasses: profilePageCssProps.inputWrapCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Логин",
                        fieldName: "login",
                    }),
                    new Wrapper({
                        content: new Input({
                            type: "text",
                            fieldName: "login",
                            cssClasses: profilePageCssProps.inputCss,
                            placeholder: "ivanivanov",
                        }),
                        cssClasses: profilePageCssProps.inputWrapCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Имя",
                        fieldName: "first_name",
                    }),
                    new Wrapper({
                        content: new Input({
                            type: "text",
                            fieldName: "first_name",
                            cssClasses: profilePageCssProps.inputCss,
                            placeholder: "Иван",
                        }),
                        cssClasses: profilePageCssProps.inputWrapCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Фамилия",
                        fieldName: "second_name",
                    }),
                    new Wrapper({
                        content: new Input({
                            type: "text",
                            fieldName: "second_name",
                            cssClasses: profilePageCssProps.inputCss,
                            placeholder: "Иванов",
                        }),
                        cssClasses: profilePageCssProps.inputWrapCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Имя в чате",
                        fieldName: "display_name",
                    }),
                    new Wrapper({
                        content: new Input({
                            type: "text",
                            fieldName: "display_name",
                            cssClasses: profilePageCssProps.inputCss,
                            placeholder: "Иван",
                        }),
                        cssClasses: profilePageCssProps.inputWrapCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Телефон",
                        fieldName: "phone",
                    }),
                    new Wrapper({
                        content: new Input({
                            type: "text",
                            fieldName: "phone",
                            cssClasses: profilePageCssProps.inputCss,
                            placeholder: "+7-(909)-967-30-30",
                        }),
                        cssClasses: profilePageCssProps.inputWrapCss,
                    }),
                ],
            }),
        ],
        button: new Button({
            title: "Сохранить",
            cssClasses: profilePageCssProps.buttonCss
        }),
        cssClasses: profilePageCssProps.formCss,
    }),
}