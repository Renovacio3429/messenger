import {Form} from "./Form";
import {Input} from "../Input/Input";
import {inputDataExists, inputSuccessValidExists, passwordCheckValidate} from "../../service/ValidateService";
import {getErrorElement} from "../../utils/getErrorElement";

export class ProfileChangePwdForm extends Form {

    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const inputs = this.children.inputs;
        const inputFormJson: Record<string, any> = {};


        const dangerClass = "danger";
        const errorClass = `valid-error-checkPassword-${this.id}`;
        const getErrorElements = () => document.getElementsByClassName(errorClass);

        let newPassword = undefined;
        let newPasswordSecond = undefined;
        let newPasswordSecondInput: any = undefined;

        if (Array.isArray(inputs)) {

            inputs.forEach((input: Input) => {
                const content: HTMLInputElement | HTMLInputElement | undefined | null = input.getContent()?.querySelector("input");


                if (content) {

                    inputFormJson[content.name] = content.value;

                    switch (content.name) {
                        case 'newPassword':
                            newPassword = content.value;
                            break;
                        case 'newPasswordSecond':
                            newPasswordSecond = content.value;
                            newPasswordSecondInput = content;
                            break;
                    }
                }
            });

            if (newPasswordSecondInput) {
                Array.from(getErrorElements()).forEach(el => el.remove());
                newPasswordSecondInput.classList.remove(dangerClass);
            }


            if (inputDataExists(inputs) && inputSuccessValidExists(inputs)) {
                if (!passwordCheckValidate(newPassword, newPasswordSecond)) {
                    const errorEl = getErrorElement("Пароли не совпадают", dangerClass, errorClass);
                    newPasswordSecondInput.classList.add(dangerClass);
                    newPasswordSecondInput.insertAdjacentHTML("afterend", <string>errorEl.getContent()?.outerHTML);
                    return;
                }

                this.props.submitData(inputFormJson);
            }
        }
    }
}