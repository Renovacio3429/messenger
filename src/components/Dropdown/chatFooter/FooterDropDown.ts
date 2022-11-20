import Block from "core/Block";
import template from "./FooterDropDown.tmpl";

export class FooterDropDown extends Block<any> {
    public init() {
        this.props.events = {
            click: this.hideDropDown.bind(this),
        };
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    public hideDropDown() {
        this.none();
    }
}
