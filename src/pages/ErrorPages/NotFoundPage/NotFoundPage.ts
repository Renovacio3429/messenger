import Block from "../../../core/Block";
import template from "../ErrorPage.tmpl";

export class NotFoundPage extends Block {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}