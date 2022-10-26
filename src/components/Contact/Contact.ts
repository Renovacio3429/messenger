import Block from "../../core/Block";
import template from "./Contact.tmpl";

type ContactType = {
    contactName: string,
    messageInfo: string,
}

export class Contact extends Block<ContactType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}