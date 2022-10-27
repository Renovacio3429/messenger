import {fieldValidate} from "./ValidateTypes";
import {snakeToCamel} from "../utils/getCamelCase"

export function validComparator (validateInput: HTMLInputElement): string | null {

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
