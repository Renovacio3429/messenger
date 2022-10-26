import Block from "../../core/Block";
import template from "./Link.tmpl";

type LinkType = {
    link: string,
    cssClasses?: string,
    title: string,
}

export class Link extends Block<LinkType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}