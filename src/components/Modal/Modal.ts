import Block from "../../core/Block";
import template from "./Modal.tmpl";

type ModalType = {
    content: Block<any>[]
}

export class Modal extends Block<ModalType> {

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
