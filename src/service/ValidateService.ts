import {fieldValidate} from "./ValidateTypes";

export function validateData (validateInput: HTMLInputElement): string | null {
    return validComparator(validateInput.name, validateInput.value);
}

function validComparator (fieldName: string, fieldValue: string): string | null {

    let errorMessage: string | null = null;

    if (fieldValidate[fieldName] == undefined)
        return errorMessage;

    const regExp = fieldValidate[fieldName].regExp;
    const errorFieldMessage = fieldValidate[fieldName].exceptionMessage;


    if (!fieldValue)
        errorMessage = "Поле не может быть пустым!";

    if (fieldValue.length > 0 && !fieldValue.match(regExp))
        errorMessage = errorFieldMessage;

    return errorMessage;
}
