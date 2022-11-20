import Block from "core/Block";
import template from "./SidebarHeader.tmpl";
import { Link } from "components/Link/Link";

type SidebarHeaderType = {
    addChatlink: Link;
    removeChatlink: Link;
};

export class SidebarHeader extends Block<SidebarHeaderType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
