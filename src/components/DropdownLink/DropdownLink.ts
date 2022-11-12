import Block from "../../core/Block";
import template from "./DropdownLink.tmpl";

type DropdownLinkType = {
    title: string,
    iconClass: string,
    linkCss: string,
    submitLink?: () => void;
}

export class DropdownLink extends Block<DropdownLinkType> {

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