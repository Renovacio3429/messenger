import Block from "../../../core/Block";
import template from "./DialogHeader.tmpl";
import { Button } from "../../Button/Button";
import { HeaderDropDown } from "../../Dropdown/chatHeader/HeaderDropDown";

type DialogHeaderType = {
    button?: Button;
    dropdownHeader?: HeaderDropDown;
    name?: string;
};

export class DialogHeader extends Block<DialogHeaderType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
