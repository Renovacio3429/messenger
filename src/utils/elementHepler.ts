import Block from "../core/Block";
import {LabelError} from "../components/LabelError/LabelError";
import {setCssClasses} from "../components/CssClasses/CssClasses";

export function getErrorElement(errorMessage: string, ...cssClasses: string[]): Block<Record<string, any>> {
    return new LabelError({
        cssClasses: setCssClasses({
            classes: [...cssClasses],
        }),
        title: errorMessage,
    });
}

export function insertErrorEl(input: HTMLInputElement, errorMessage: string, dangerClass: string, errorClass: string): void {
    const errorEl = getErrorElement(errorMessage, dangerClass, errorClass);
    input.classList.add(dangerClass);
    input.insertAdjacentHTML("afterend", <string>errorEl.getContent()?.outerHTML);
}

export function removeErrorEl(input: HTMLInputElement | undefined, errorClass: string, dangerClass: string): void {
    if (input) {
        const getErrorElements = () => document.getElementsByClassName(errorClass);
        Array.from(getErrorElements()).forEach(el => el.remove());
        input.classList.remove(dangerClass);
    }
}
