import Block from "../../../core/Block";
import template from "../ErrorPage.tmpl";

export type ErrorPageType = {
    code: string,
    title: string,
    link: string,
    linkTitle: string,
}

export class ErrorPage extends Block<ErrorPageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}