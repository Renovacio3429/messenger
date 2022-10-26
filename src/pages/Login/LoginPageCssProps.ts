import {setCssClasses} from "../../components/CssClasses/CssClasses";

export const loginPageCssProps: Record<string, string> = {
    fieldsetCss: setCssClasses({
        classes: ["fieldset", "fieldset-login"],
    }),
    inputCss: setCssClasses({
        classes: ["input fieldset__input"],
    }),
    labelCss: setCssClasses({
        classes: ["label fieldset__label"],
    }),
    titleCss: setCssClasses({
        classes: ["login-title"],
    }),
    formCss: setCssClasses({
        classes: ["login-form"],
    }),
    buttonCss: setCssClasses({
        classes: ["button", "login-margin"],
    }),
    linkCss: setCssClasses({
        classes: ["link-blue", "link-center", "link-form-margin"],
    }),
}