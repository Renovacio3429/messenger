import {Form} from "../../../components/Forms/Form";
import {InputFieldset} from "../../../components/InputFieldset/InputFieldset";
import {LinkBox} from "../../../components/LinkBox/LinkBox";
import {Link} from "../../../components/Link/Link";
import {Label} from "../../../components/Label/Label";
import {Input} from "../../../components/Input/Input";
import {Button} from "../../../components/Button/Button";
import {Avatar} from "../../../components/Avatar/Avatar";
import {Wrapper} from "../../../components/Wrapper/Wrapper";
import {RoutesConfig} from "../../../core/Router/RouterConfig";
import {modal} from "../modalProfile";
import {profilePageCssProps} from "../ProfilePageCssProps";
import {ProfilePageType} from "./ProfilePage";
import router from "../../../core/Router/Router";
import AuthController from "../../../controllers/AuthController";

export const profilePageProps: ProfilePageType = {
    sidebarButton: new Button({
        cssClasses: profilePageCssProps.sidebarCss,
        events: {
            click: () => router.go(RoutesConfig.Chat)
        },
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
    content: new Form({
        inputs: [
            new InputFieldset({
                cssClasses: profilePageCssProps.fieldsetCss,
                content: [
                    new Label({
                        title: "Почта",
                        fieldName: "email",
                    }),
                    new Input({
                        type: "text",
                        fieldName: "email",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Данные отсутствуют",
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
                        type: "text",
                        fieldName: "login",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Данные отсутствуют",
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
                        type: "text",
                        fieldName: "first_name",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Данные отсутствуют",
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
                    }),
                    new Input({
                        type: "text",
                        fieldName: "second_name",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Данные отсутствуют",
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
                        type: "text",
                        fieldName: "display_name",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Данные отсутствуют",
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
                        type: "text",
                        fieldName: "phone",
                        cssClasses: profilePageCssProps.inputCss,
                        placeholder: "Данные отсутствуют",
                        disabled: true,
                    }),
                ],
            }),
        ],
        submitData: (data: any) => {
            console.log(data)
        },
    }),
    linkBox: new LinkBox({
        links: [
            new Link({
                title: "Изменить данные",
                cssClasses: profilePageCssProps.blueLinkCss,
                submitLink: () => {
                    router.go(RoutesConfig.ChangeProfileData);
                }
            }),
            new Link({
                title: "Изменить пароль",
                cssClasses: profilePageCssProps.blueLinkCss,
                submitLink: () => {
                    router.go(RoutesConfig.ChangeProfilePwd);
                }
            }),
            new Link({
                title: "Выйти",
                cssClasses: profilePageCssProps.redLinkCss,
                submitLink: () => {
                    AuthController.logout();
                }
            }),
        ],
        cssClasses: profilePageCssProps.ulCss,
    }),
    modal: modal,
}