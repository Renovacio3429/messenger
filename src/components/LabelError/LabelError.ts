import Block from "core/Block";
import template from "./LabelError.tmpl";

type LabelErrorType = {
    cssClasses?: string;
    title: string;
};

export class LabelError extends Block<LabelErrorType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
