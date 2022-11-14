import {setCssClasses} from "../../components/CssClasses/CssClasses";

export const chatPageCssProps: Record<string, string> = {
    formCss: setCssClasses({
        classes: ["chat-dialog-form", "form"],
    }),
    inputCss: setCssClasses({
        classes: ["chat-dialog-footer-input", "input", "chat-input"],
    }),
    buttonFormCss: setCssClasses({
        classes: ["chat-dialog-submit-button", "button"],
    }),
    buttonHeaderCss: setCssClasses({
        classes: ["chat-dialog-header-actions-button", "button"],
    }),
    buttonAttachCss: setCssClasses({
        classes: ["chat-dialog-attach-button", "button"],
    }),
    messageQueryCss: setCssClasses({
        classes: ["message-wrap", "message-query"],
    }),
    messageAnswerCss: setCssClasses({
        classes: ["message-wrap", "message-answer"],
    }),
    inputWrapCss: setCssClasses({
        classes: ["chat-input-message-wrap"],
    }),
}
