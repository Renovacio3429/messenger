import Block from "../../core/Block";
import template from "./LinkBox.tmpl";
import {Link} from "../Link/Link";

type LinkBoxType = {
    cssClasses?: string,
    links: Link[],
}

export class LinkBox extends Block<LinkBoxType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}