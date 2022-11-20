import { Form } from "./Form";
import { Input } from "components/Input/Input";
import {
    inputDataExists,
    inputSuccessValidExists,
    passwordCheckValidate,
} from "service/ValidateService";
import { insertErrorEl, removeErrorEl } from "utils/elementHepler";

export class SignInForm extends Form {
    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const inputs = this.children.inputs;
        const inputFormJson: Record<string, any> = {};

        const dangerClass = "danger";
        const errorClass = `valid-error-checkPassword-${this.id}`;

        let password = "";
        let checkPassword = "";
        let checkPasswordInput: any = undefined;

        if (Array.isArray(inputs)) {
            inputs.forEach((input: Input) => {
                const content:
                    | HTMLInputElement
                    | HTMLInputElement
                    | undefined
                    | null = input.getContent()?.querySelector("input");

                if (content) {
                    inputFormJson[content.name] = content.value;

                    switch (content.name) {
                        case "password":
                            password = content.value;
                            break;
                        case "checkPassword":
                            checkPassword = content.value;
                            checkPasswordInput = content;
                            break;
                    }
                }
            });

            removeErrorEl(checkPasswordInput, errorClass, dangerClass);

            if (inputDataExists(inputs) && inputSuccessValidExists(inputs)) {
                if (!passwordCheckValidate(password, checkPassword)) {
                    insertErrorEl(
                        checkPasswordInput,
                        "Пароли не совпадают",
                        dangerClass,
                        errorClass
                    );
                    return;
                }

                this.props.submitData(inputFormJson);
            }
        }
    }
}
