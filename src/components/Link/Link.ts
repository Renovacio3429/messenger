import Block from "../../core/Block";
import template from "./Link.tmpl";

type LinkType = {
    cssClasses?: string,
    title: string,
    submitLink?: () => void;
}

export class Link extends Block<LinkType> {

    protected init() {
        this.setProps({
            events: {
                click: this.handleSubmit.bind(this),
            }
        })
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    private handleSubmit(event: Event) {
        event.preventDefault();


        if (this.props.submitLink) {
            this.props.submitLink();
        } else {
            console.warn("Link not assigned!");
        }
    }
}