import {Form} from "./Form";
import {Input} from "../Input/Input";
import {inputDataExists, inputSuccessValidExists, passwordCheckValidate} from "../../service/ValidateService";
import {getErrorElement} from "../../utils/getErrorElement";

export class SignInForm extends Form {

    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const inputs = this.children.inputs;
        const inputFormJson: Record<string, any> = {};


        const dangerClass = "danger";
        const errorClass = `valid-error-checkPassword-${this.id}`;
        const getErrorElements = () => document.getElementsByClassName(errorClass);

        let password = undefined;
        let checkPassword = undefined;
        let checkPasswordInput: any = undefined;

        if (Array.isArray(inputs)) {

            inputs.forEach((input: Input) => {
                const content: HTMLInputElement | HTMLInputElement | undefined | null = input.getContent()?.querySelector("input");


                if (content) {

                    inputFormJson[content.name] = content.value;

                    switch (content.name) {
                        case 'password':
                            password = content.value;
                            break;
                        case 'checkPassword':
                            checkPassword = content.value;
                            checkPasswordInput = content;
                            break;
                    }
                }
            });

            if (checkPasswordInput) {
                Array.from(getErrorElements()).forEach(el => el.remove());
                checkPasswordInput.classList.remove(dangerClass);
            }


            if (inputDataExists(inputs) && inputSuccessValidExists(inputs)) {
                if (!passwordCheckValidate(password, checkPassword)) {
                    const errorEl = getErrorElement("Пароли не совпадают", dangerClass, errorClass);
                    checkPasswordInput.classList.add(dangerClass);
                    checkPasswordInput.insertAdjacentHTML("afterend", <string>errorEl.getContent()?.outerHTML);
                    return;
                }

                this.props.submitData(inputFormJson);
            }
        }
    }
}