import { InputFieldset } from "components/InputFieldset/InputFieldset";
import { Label } from "components/Label/Label";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { Avatar } from "components/Avatar/Avatar";
import { Wrapper } from "components/Wrapper/Wrapper";
import { profilePageCssProps } from "../ProfilePageCssProps";
import { modal } from "../modalProfile";
import { ProfileChangeDataPageType } from "./ProfileChangeDataPage";
import UserController from "controllers/UserController";
import { ProfileChangeDataForm } from "components/Forms/ProfileChangeDataForm";
import { UserType } from "api/UserAPI";

export const profileChangeDataPageProps: ProfileChangeDataPageType = {
    sidebarButton: new Button({
        cssClasses: profilePageCssProps.sidebarCss,
        events: {
            click: () => (window.location.pathname = "/chat"),
        },
    }),
    avatar: new Wrapper({
        cssClasses: profilePageCssProps.avatarCss,
        content: new Avatar({
            cssClasses: profilePageCssProps.avatarInputCss,
            events: {
                click: () => modal.showFlex(),
            },
        }),
    }),
    content: new ProfileChangeDataForm({
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
                            placeholder: "Информация отсутствует",
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
                            placeholder: "Информация отсутствует",
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
                            placeholder: "Информация отсутствует",
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
                            placeholder: "Информация отсутствует",
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
                            placeholder: "Информация отсутствует",
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
                            placeholder: "Информация отсутствует",
                        }),
                        cssClasses: profilePageCssProps.inputWrapCss,
                    }),
                ],
            }),
        ],
        button: new Button({
            title: "Сохранить",
            cssClasses: profilePageCssProps.buttonCss,
        }),
        cssClasses: profilePageCssProps.formCss,

        submitData: (data: UserType) => {
            UserController.updateUser(data);
        },
    }),
    modal: modal,
};
