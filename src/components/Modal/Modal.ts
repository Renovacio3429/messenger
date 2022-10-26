import Block from "../../core/Block";
import template from "./Modal.tmpl";

export class Modal extends Block {

    public init() {
        this.props.events = {
            click: () => this.none(),
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}