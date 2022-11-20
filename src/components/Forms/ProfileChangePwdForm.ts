import { Form } from "./Form";
import { Input } from "components/Input/Input";
import {
    inputDataExists,
    inputSuccessValidExists,
    passwordCheckValidate,
} from "service/ValidateService";
import { insertErrorEl, removeErrorEl } from "utils/elementHepler";

export class ProfileChangePwdForm extends Form {
    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const inputs = this.children.inputs;
        const inputFormJson: Record<string, any> = {};

        const dangerClass = "danger";
        const errorClass = `valid-error-checkPassword-${this.id}`;

        let newPassword = "";
        let newPasswordSecond = "";
        let newPasswordSecondInput: any = undefined;

        if (Array.isArray(inputs)) {
            inputs.forEach((input: Input) => {
                const content: HTMLInputElement | undefined | null = input
                    .getContent()
                    ?.querySelector("input");

                if (content) {
                    inputFormJson[content.name] = content.value;
                    switch (content.name) {
                        case "newPassword":
                            newPassword = content.value;
                            break;
                        case "newPasswordSecond":
                            newPasswordSecond = content.value;
                            newPasswordSecondInput = content;
                            break;
                    }
                }
            });

            removeErrorEl(newPasswordSecondInput, errorClass, dangerClass);

            if (inputDataExists(inputs) && inputSuccessValidExists(inputs)) {
                if (!passwordCheckValidate(newPassword, newPasswordSecond)) {
                    insertErrorEl(
                        newPasswordSecondInput,
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
