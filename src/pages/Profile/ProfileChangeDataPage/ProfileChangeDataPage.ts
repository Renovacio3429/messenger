import Block from "../../../core/Block";
import template from "../ProfilePage.tmpl";

export class ProfileChangeDataPage extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}