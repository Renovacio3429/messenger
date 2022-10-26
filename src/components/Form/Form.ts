import Block from "../../core/Block";
import template from "./Form.tmpl";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

type FormType = {
    cssClasses?: string,
    action: string,
    inputs?: Block<any>[],
    button?: Button,
}

export class Form extends Block<FormType> {

    protected init() {
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
        const inputFormJson: Record<string, string> = {};

        if (Array.isArray(inputs)) {
            inputs.forEach((input: Input) => {
                const content = input.getContent()?.querySelector("input");
                if (content)
                    inputFormJson[content.name] = content.value;
            });
        }

        console.log(inputFormJson);
    }
}