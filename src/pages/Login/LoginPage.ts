import Block from "../../core/Block";
import template from "./LoginPage.tmpl";

export class LoginPage extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}