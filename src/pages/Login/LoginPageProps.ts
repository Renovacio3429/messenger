import {Title} from "../../components/Title/Title";
import {InputFieldset} from "../../components/InputFieldset/InputFieldset";
import {Button} from "../../components/Button/Button";
import {Link} from "../../components/Link/Link";
import {Label} from "../../components/Label/Label";
import {Input} from "../../components/Input/Input";
import {RoutesConfig} from "../../core/Router/RouterConfig";
import {LoginForm} from "../../components/Forms/LoginForm";
import {loginPageCssProps} from "./LoginPageCssProps";
import {LoginPageType} from "./LoginPage";
import AuthController from "../../controllers/AuthController";
import Router from "../../core/Router/Router";

export const loginPageProps: LoginPageType = {
    title: new Title({
        title: "Вход",
        level: "2",
        cssClasses: loginPageCssProps.titleCss,
    }),
    content: new LoginForm({
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
        submitData: (data: any) => {
            AuthController.signin(data);
        },
    }),
    link: new Link({
        title: "Нет аккаута?",
        cssClasses: loginPageCssProps.linkCss,
        submitLink: () => {
            Router.go(RoutesConfig.SignUp);
        }
    }),
};