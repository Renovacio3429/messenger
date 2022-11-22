import Block from "core/Block";
import template from "./Label.tmpl";

export type LabelType = {
    cssClasses?: string;
    fieldName?: string;
    title: string;
};

export class Label extends Block<LabelType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
