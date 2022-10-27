import Block from "../../../core/Block";
import template from "../ErrorPage.tmpl";

export type NotFoundPageType = {
    code: string,
    title: string,
    link: string,
    linkTitle: string,
}

export class NotFoundPage extends Block<NotFoundPageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}