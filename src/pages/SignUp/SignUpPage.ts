import Block from "core/Block";
import template from "./SignUpPage.tmpl";
import { Title } from "components/Title/Title";
import { Form } from "components/Forms/Form";
import { Link } from "components/Link/Link";
import { signUpPageProps } from "./SignUpPageProps";
import { withUser } from "hocs/withUser";

export type SignInPageType = {
    title: Title;
    content: Form;
    link: Link;
};

export class SignUpPage extends Block<SignInPageType> {
    protected init() {
        this.children = signUpPageProps;
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export const SignIn = withUser(SignUpPage as typeof Block);
