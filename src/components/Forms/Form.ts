import template from "./Form.tmpl";
import Block from "../../core/Block";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

type FormType = {
    cssClasses?: string,
    inputs?: Block<any>[] | Block<any>,
    button?: Button,
    submitData: (e: any) => void,

    chatNameInput?: Input,
    userIdInput?: Input,
    userLogin?: Input,
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

    protected handleSubmit(event: Event) {
        event.preventDefault();
    }
}