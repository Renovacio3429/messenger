import Block from "../../core/Block";
import template from "./Title.tmpl";

type TitleType = {
    level: string,
    cssClasses?: string,
    title: string,
}

export class Title extends Block<TitleType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
