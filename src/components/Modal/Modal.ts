import Block from "../../core/Block";
import template from "./Modal.tmpl";

type ModalType = {
    content: Block<any>[]
}

export class Modal extends Block<ModalType> {
    public init() {
        this.props.events = {
            click: () => this.none(),
        }
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}