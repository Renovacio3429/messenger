import Block from "../../core/Block";
import template from "./LoginPage.tmpl";
import {Title} from "../../components/Title/Title";
import {Link} from "../../components/Link/Link";
import {Form} from "../../components/Form/Form";

export type LoginPageType = {
    title: Title,
    content: Form,
    link: Link,
}

export class LoginPage extends Block<LoginPageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}