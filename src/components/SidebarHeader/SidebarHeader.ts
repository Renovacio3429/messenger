import Block from "../../core/Block";
import template from "./SidebarHeader.tmpl";

export class SidebarHeader extends Block<any> {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}