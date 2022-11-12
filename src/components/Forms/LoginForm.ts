import {Form} from "./Form";
import {Input} from "../Input/Input";
import {inputDataExists, inputSuccessValidExists} from "../../service/ValidateService";

export class LoginForm extends Form {

    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const inputs = this.children.inputs;
        const inputFormJson: Record<string, any> = {};

        if (Array.isArray(inputs)) {

            inputs.forEach((input: Input) => {
                const content: HTMLInputElement | HTMLInputElement | undefined | null = input.getContent()?.querySelector("input");

                if (content) {
                    inputFormJson[content.name] = content.value;
                }
            });

            if (inputDataExists(inputs) && inputSuccessValidExists(inputs)) {
                this.props.submitData(inputFormJson);
            }
        }
    }
}