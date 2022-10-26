import Block from "../../../core/Block";
import template from "../ProfilePage.tmpl";

export class ProfilePage extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}