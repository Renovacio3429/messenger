import Block from "../../core/Block";
import template from "./InputFieldset.tmpl";

type InputFieldsetType = {
    cssClasses: string,
    content?: Block<any>[],
}

export class InputFieldset extends Block<InputFieldsetType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
