import Block from "core/Block";
import template from "./LoginPage.tmpl";
import { Title } from "components/Title/Title";
import { Link } from "components/Link/Link";
import { Form } from "components/Forms/Form";
import { loginPageProps } from "./LoginPageProps";

export type LoginPageType = {
    title: Title;
    content: Form;
    link: Link;
};

export class LoginPage extends Block<LoginPageType> {
    protected init() {
        this.children = loginPageProps;
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
