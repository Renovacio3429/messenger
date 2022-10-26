import {Title} from "../../components/Title/Title";
import {Form} from "../../components/Form/Form";
import {InputFieldset} from "../../components/InputFieldset/InputFieldset";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import {Label} from "../../components/Label/Label";
import {Input} from "../../components/Input/Input";
import {loginPageCssProps} from "./LoginPageCssProps";
import {LoginPageType} from "./LoginPage";

export const loginPageProps: LoginPageType = {
    title: new Title({
        title: "Вход",
        level: "2",
        cssClasses: loginPageCssProps.titleCss,
    }),
    content: new Form({
        action: "#",
        inputs: [
            new InputFieldset({
                cssClasses: loginPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "text",
                        fieldName: "login",
                        cssClasses: loginPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Логин",
                        fieldName: "login",
                        cssClasses: loginPageCssProps.labelCss,
                    }),
                ]
            }),
            new InputFieldset({
                cssClasses: loginPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "password",
                        fieldName: "password",
                        cssClasses: loginPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Пароль",
                        fieldName: "password",
                        cssClasses: loginPageCssProps.labelCss,
                    }),
                ]
            }),
        ],
        button: new Button({
            title: "Авторизоваться",
            cssClasses: loginPageCssProps.buttonCss,
        }),
        cssClasses: loginPageCssProps.formCss,
    }),
    link: new Link({
        title: "Нет аккаута?",
        link: "/signIn",
        cssClasses: loginPageCssProps.linkCss,
    }),
};