import Block from "../../core/Block";
import template from "./SignInPage.tmpl";
import {Title} from "../../components/Title/Title";
import {Form} from "../../components/Form/Form";
import {Link} from "../../components/Link/Link";

export type SignInPageType = {
    title: Title,
    content: Form,
    link: Link,
}

export class SignInPage extends Block<SignInPageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}