import Block from "../../core/Block";
import template from "./Input.tmpl";
import {validateData} from "../../service/ValidateService";
import {LabelError} from "../LabelError/LabelError";
import {setCssClasses} from "../CssClasses/CssClasses";

export class Input extends Block {

    public init() {
        const validActions: Record<string, () => void> =  {
            blur: this.validateInputData.bind(this),
            focus: this.validateInputData.bind(this),
            input: this.validateInputData.bind(this),
        }

        if (this.props.events) {
            Object.keys(validActions).forEach((eventName) => {
                this.props.events[eventName] = validActions[eventName];
            });
        } else {
            this.props.events = validActions;
        }

    }
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    private validateInputData() {
        const element = this.element as HTMLInputElement;
        if (element.type == "text" || element.type == "password") {
            const errorMessage = validateData(element);
            const dangerClass = "danger";
            const errorClass = `valid-error-${element.name}-${this.id}`;
            const getErrorElements = () => document.getElementsByClassName(errorClass);

            //предварительно удаляем сообщение старой валидации
            const errorElements = getErrorElements();
            Array.from(errorElements).forEach(el => el.remove());
            element.classList.remove(dangerClass);

            if (errorMessage) {
                const errorEl = this.getErrorElement(errorMessage, dangerClass, errorClass);
                element.classList.add(dangerClass);
                element.insertAdjacentHTML("afterend", <string>errorEl.getContent()?.outerHTML);
            }
        }
    }

    private getErrorElement(errorMessage: string, ...cssClasses: string[]): Block {
        return new LabelError({
            cssClasses: setCssClasses({
                classes: [...cssClasses],
            }),
            title: errorMessage,
        });
    }
}