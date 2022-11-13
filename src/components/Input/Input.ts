import Block from "../../core/Block";
import template from "./Input.tmpl";
import {validComparator} from "../../service/ValidateService";
import {getErrorElement} from "../../utils/elementHepler";

type InputType = {
    cssClasses?: string,
    fieldName: string,
    type: string,
    placeholder?: string,
    disabled?: boolean,
    events?: Record<string, () => void>,
}

export class Input extends Block<InputType> {

    protected init() {
        const validActions: Record<string, () => void> =  {
            blur: this.validateInputFormData.bind(this),
            focus: this.validateInputFormData.bind(this),
            input: this.validateInputFormData.bind(this),
        }

        if (this.props.events) {
            Object.keys(validActions).forEach((eventName) => {
                this.setProps({eventName: validActions[eventName]});
            });
        } else {
            this.props.events = validActions;
        }

    }
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    private validateInputFormData() {
        const element = this.element as HTMLInputElement;
        if (element.type === "text" || element.type === "password") {
            const errorMessage = validComparator(element);
            const dangerClass = "danger";
            const errorClass = `valid-error-${element.name}-${this.id}`;
            const getErrorElements = () => document.getElementsByClassName(errorClass);

            //предварительно удаляем сообщение старой валидации
            const errorElements = getErrorElements();
            Array.from(errorElements).forEach(el => el.remove());
            element.classList.remove(dangerClass);

            if (errorMessage) {
                const errorEl = getErrorElement(errorMessage, dangerClass, errorClass);
                element.classList.add(dangerClass);
                element.insertAdjacentHTML("afterend", <string>errorEl.getContent()?.outerHTML);
            }
        }
    }
}
