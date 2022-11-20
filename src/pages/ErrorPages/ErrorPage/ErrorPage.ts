import Block from "core/Block";
import template from "../ErrorPage.tmpl";
import { errorPageProps } from "./ErrorPageProps";

export type ErrorPageType = {
    code: string;
    title: string;
    link: string;
    linkTitle: string;
};

export class ErrorPage extends Block<ErrorPageType> {
    protected init() {
        this.props = errorPageProps;
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
