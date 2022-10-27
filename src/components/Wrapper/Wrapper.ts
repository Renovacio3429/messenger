import Block from "../../core/Block";
import template from "./Wrapper.tmpl";

type WrapperType = {
    cssClasses?: string,
    content: Block<any>
}

export class Wrapper extends Block<WrapperType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}