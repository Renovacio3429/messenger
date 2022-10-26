import Block from "../../core/Block";
import template from "./SignInPage.tmpl";

export class SignInPage extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}