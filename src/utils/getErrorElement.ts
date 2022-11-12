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