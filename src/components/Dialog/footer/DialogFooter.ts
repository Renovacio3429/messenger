import Block from "core/Block";
import template from "./DialogFooter.tmpl";
import { Form } from "components/Forms/Form";
import { FooterDropDown } from "components/Dropdown/chatFooter/FooterDropDown";
import { Button } from "components/Button/Button";

type DialogFooterType = {
    button?: Button;
    dropdownFooter?: FooterDropDown;
    form?: Form;
};

export class DialogFooter extends Block<DialogFooterType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
