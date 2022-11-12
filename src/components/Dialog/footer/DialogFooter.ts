import Block from "../../../core/Block";
import template from "./DialogFooter.tmpl";
import {Form} from "../../Forms/Form";
import {FooterDropDown} from "../../Dropdown/chatFooter/FooterDropDown";
import {Button} from "../../Button/Button";

type DialogFooterType = {
    button?: Button,
    dropdownFooter?: FooterDropDown,
    form?: Form
}

export class DialogFooter extends Block<DialogFooterType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}