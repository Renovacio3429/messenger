import Block from "../../../core/Block";
import template from "../ProfilePage.tmpl";

export class ProfileChangePwdPage extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}