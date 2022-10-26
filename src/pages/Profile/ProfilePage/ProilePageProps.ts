import {Form} from "../../../components/Form/Form";
import {InputFieldset} from "../../../components/InputFieldset/InputFieldset";
import {LinkBox} from "../../../components/LinkBox/LinkBox";
import {Link} from "../../../components/Link/Link";
import {Label} from "../../../components/Label/Label";
import {Input} from "../../../components/Input/Input";
import {profilePageCssProps} from "../ProfilePageCssProps";
import {Button} from "../../../components/Button/Button";
import {Avatar} from "../../../components/Avatar/Avatar";
import {modal} from "../modalProfile";

export const profilePageProps: object = {
    sidebarButton: new Button({
        cssClasses: profilePageCssProps.sidebarCss,
        events: {
            click: () => window.location.pathname="/chat"
        },
    }),
    avatar: new Avatar({
        cssClasses: profilePageCssProps.avatarCss,
        input: new Input({
            type: "button",
            fieldName: "avatar",
            cssClasses: profilePageCssProps.avatarInputCss,
            events: {
                click: () => modal.showFlex(),
            }
        })
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
                    new Input({
                        title: "Почта",
                        type: "text",
                        fieldName: "email",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "pochta@yandex.ru",
                        disabled: true,
                    })
                ]
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Логин",
                        fieldName: "login",
                    }),
                    new Input({
                        title: "Логин",
                        type: "text",
                        fieldName: "login",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "ivanivanov",
                        disabled: true,
                    })
                ]
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Имя",
                        fieldName: "first_name",
                    }),
                    new Input({
                        title: "Имя",
                        type: "text",
                        fieldName: "first_name",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Иван",
                        disabled: true,
                    })
                ]
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Фамилия",
                        fieldName: "second_name",
                        disabled: true,
                    }),
                    new Input({
                        title: "Фамилия",
                        type: "text",
                        fieldName: "second_name",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Иванов",
                        disabled: true,
                    })
                ]
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Имя в чате",
                        fieldName: "display_name",
                    }),
                    new Input({
                        title: "Имя в чате",
                        type: "text",
                        fieldName: "display_name",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Иван",
                        disabled: true,
                    })
                ]
            }),
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Телефон",
                        fieldName: "phone",
                    }),
                    new Input({
                        title: "Телефон",
                        type: "text",
                        fieldName: "phone",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "+7-(909)-967-30-30",
                        disabled: true,
                    }),
                ],
            }),
        ],

    }),
    linkBox: new LinkBox({
        links: [
            new Link({
                title: "Изменить данные",
                link: "/profile/changeData",
                cssClasses: profilePageCssProps.blueLinkCss,
            }),
            new Link({
                title: "Изменить пароль",
                link: "/profile/changePwd",
                cssClasses: profilePageCssProps.blueLinkCss,
            }),
            new Link({
                title: "Выйти",
                link: "/chat",
                cssClasses: profilePageCssProps.redLinkCss,
            }),
        ],
        cssClasses: profilePageCssProps.ulCss,
    }),
    modal: modal,
}