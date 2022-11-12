import Block from "../../core/Block";
import template from "./Avatar.tmpl";

type AvatarType = {
    cssClasses?: string;
    input?: string;
    events?: {
        click: () => void,
    }
};

export class Avatar extends Block<AvatarType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}