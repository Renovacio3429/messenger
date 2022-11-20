import { fieldValidate } from "./ValidateTypes";
import { snakeToCamel } from "utils/getCamelCase";
import Block from "core/Block";

export function validComparator(
    validateInput: HTMLInputElement
): string | null {
    const fieldName = snakeToCamel(validateInput.name);
    const fieldValue = validateInput.value;

    let errorMessage: string | null = null;

    if (fieldValidate[fieldName] === undefined) {
        return errorMessage;
    }

    const regExp = fieldValidate[fieldName].regExp;
    const errorFieldMessage = fieldValidate[fieldName].exceptionMessage;

    if (!fieldValue) {
        errorMessage = "Поле не может быть пустым!";
    }

    if (fieldValue.length > 0 && !fieldValue.match(regExp)) {
        errorMessage = errorFieldMessage;
    }

    return errorMessage;
}

export function inputDataExists(inputs: Block<any>[]): boolean {
    const arr = inputs
        .map((i) => i.getContent()?.querySelector("input")?.value)
        .filter((val) => val);
    return arr.length === inputs.length;
}

export function inputSuccessValidExists(inputs: Block<any>[]): boolean {
    const arr = inputs
        .map((i) => i.getContent()?.querySelector("label"))
        .filter((label) => label?.classList.contains("danger"));
    return arr.length === 0;
}

export function passwordCheckValidate(
    password?: string,
    checkPassword?: string
): boolean {
    if (password && checkPassword) {
        return password === checkPassword;
    }
    return false;
}
