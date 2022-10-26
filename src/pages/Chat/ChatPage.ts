import Block from "../../core/Block";
import template from "./ChatPage.tmpl";
import {DialogFooter} from "../../components/Dialog/footer/DialogFooter";
import {Message} from "../../components/Message/Message";
import {DialogHeader} from "../../components/Dialog/header/DialogHeader";
import {Contact} from "../../components/Contact/Contact";
import {SidebarHeader} from "../../components/SidebarHeader/SidebarHeader";

export type ChatPageType = {
    sidebarHeader: SidebarHeader,
    contacts?: Contact[],
    chatHeader: DialogHeader,
    messages?: Message[],
    chatFooter: DialogFooter,
}

export class ChatPage extends Block<ChatPageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}