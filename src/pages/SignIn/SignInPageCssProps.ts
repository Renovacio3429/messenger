import {setCssClasses} from "../../components/CssClasses/CssClasses";

export const signInPageCssProps: Record<string, string> = {
    fieldsetCss: setCssClasses({
        classes: ["fieldset", "fieldset-login"],
    }),
    inputCss: setCssClasses({
        classes: ["input", "fieldset__input"],
    }),
    labelCss: setCssClasses({
        classes: ["label", "fieldset__label"],
    }),
    titleCss: setCssClasses({
        classes: ["signin-title"],
    }),
    formCss: setCssClasses({
        classes: ["signin-form"],
    }),
    buttonCss: setCssClasses({
        classes: ["button", "signin-margin"],
    }),
    linkCss: setCssClasses({
        classes: ["link-blue", "link-center", "link-form-margin"],
    }),
}