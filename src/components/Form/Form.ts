import Block from "../../core/Block";
import template from "./Form.tmpl";
import {Input} from "../Input/Input";

export class Form extends Block {

    init() {
        const submit = this.children.button;
        if (submit)
            submit.setProps({
                events: {
                    click: this.handleSubmit.bind(this),
                }
            });
    }


    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    private handleSubmit(event: Event) {
        event.preventDefault();

        const inputs = this.children.inputs;
        const data: Record<string, string> = {};

        if (Array.isArray(inputs)) {
            inputs.forEach((input: Input) => {
                const content = input.getContent()?.querySelector("input");
                if (content)
                    data[content.name] = content.value;
            });
        }

        console.log(data);
    }
}