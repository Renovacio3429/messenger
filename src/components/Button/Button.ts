import Block from "../../core/Block";
import template from "./Button.tmpl";

type ButtonType = {
    cssClasses?: string,
    title?: string,
    events?: {
        click: () => void;
    }
}

export class Button extends Block<ButtonType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
