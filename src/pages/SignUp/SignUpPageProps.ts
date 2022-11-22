import { Title } from "components/Title/Title";
import { InputFieldset } from "components/InputFieldset/InputFieldset";
import { Button } from "components/Button/Button";
import { Link } from "components/Link/Link";
import { Input } from "components/Input/Input";
import { Label } from "components/Label/Label";
import { RoutesConfig } from "core/Router/RouterConfig";
import { SignInForm } from "components/Forms/SignInForm";
import { SignInPageType } from "./SignUpPage";
import { signUpPageCssProps } from "./SignUpPageCssProps";
import AuthController from "controllers/AuthController";
import router from "core/Router/Router";
import { SignUpType } from "api/AuthAPI";

export const signUpPageProps: SignInPageType = {
    title: new Title({
        title: "Регистрация",
        level: "2",
        cssClasses: signUpPageCssProps.titleCss,
    }),
    content: new SignInForm({
        inputs: [
            new InputFieldset({
                cssClasses: signUpPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "text",
                        fieldName: "email",
                        cssClasses: signUpPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Почта",
                        fieldName: "email",
                        cssClasses: signUpPageCssProps.labelCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: signUpPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "text",
                        fieldName: "login",
                        cssClasses: signUpPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Логин",
                        fieldName: "login",
                        cssClasses: signUpPageCssProps.labelCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: signUpPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "text",
                        fieldName: "phone",
                        cssClasses: signUpPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Телефон",
                        fieldName: "phone",
                        cssClasses: signUpPageCssProps.labelCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: signUpPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "text",
                        fieldName: "first_name",
                        cssClasses: signUpPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Имя",
                        fieldName: "first_name",
                        cssClasses: signUpPageCssProps.labelCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: signUpPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "text",
                        fieldName: "second_name",
                        cssClasses: signUpPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Фамилия",
                        fieldName: "second_name",
                        cssClasses: signUpPageCssProps.labelCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: signUpPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "password",
                        fieldName: "password",
                        cssClasses: signUpPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Пароль",
                        fieldName: "password",
                        cssClasses: signUpPageCssProps.labelCss,
                    }),
                ],
            }),
            new InputFieldset({
                cssClasses: signUpPageCssProps.fieldsetCss,
                content: [
                    new Input({
                        type: "password",
                        fieldName: "checkPassword",
                        cssClasses: signUpPageCssProps.inputCss,
                    }),
                    new Label({
                        title: "Пароль (ещё раз)",
                        fieldName: "checkPassword",
                        cssClasses: signUpPageCssProps.labelCss,
                    }),
                ],
            }),
        ],
        button: new Button({
            title: "Зарегистрироваться",
            cssClasses: signUpPageCssProps.buttonCss,
        }),
        cssClasses: signUpPageCssProps.formCss,
        submitData: (data: SignUpType) => {
            AuthController.signup(data);
        },
    }),
    link: new Link({
        title: "Войти",
        cssClasses: signUpPageCssProps.linkCss,
        submitLink: () => {
            router.go(RoutesConfig.Login);
        },
    }),
};
