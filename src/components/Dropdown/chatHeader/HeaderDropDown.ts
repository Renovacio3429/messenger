import Block from "../../../core/Block";
import template from "./HeaderDropDown.tmpl";
import {DropdownLink} from "../../DropdownLink/DropdownLink";

export type HeaderDropDownType = {
    dropdownLinks: DropdownLink[],
    events?: {
        click: () => void
    };
}

export class HeaderDropDown extends Block<HeaderDropDownType> {

    public init() {
        this.props.events = {
            click: this.hideDropDown.bind(this),
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    public hideDropDown() {
        this.none();
    }
}