import Block from "../../../core/Block";
import template from "../ErrorPage.tmpl";
import {notFoundPageProps} from "./NotFoundPageProps";

export type NotFoundPageType = {
    code: string,
    title: string,
    link: string,
    linkTitle: string,
}

export class NotFoundPage extends Block<NotFoundPageType> {
    protected init() {
        this.props = notFoundPageProps;
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}