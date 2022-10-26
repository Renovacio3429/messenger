import Block from "../../../core/Block";
import template from "./HeaderDropDown.tmpl";

export class HeaderDropDown extends Block {

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