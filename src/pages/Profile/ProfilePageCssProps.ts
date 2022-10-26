import {setCssClasses} from "../../components/CssClasses/CssClasses";

export const profilePageCssProps = {
    fieldsetCss: setCssClasses({
        classes: ["fieldset", "bottom-border", "profile-row-wrap"],
    }),
    inputCss: setCssClasses({
        classes: ["input", "profile-input", "text-right", "background-white"],
    }),
    titleCss: setCssClasses({
        classes: ["signin-title"],
    }),
    formCss: setCssClasses({
        classes: ["profile-form"],
    }),
    buttonCss: setCssClasses({
        classes: ["button profile-block-submit"],
    }),
    blueLinkCss: setCssClasses({
        classes: ["link-blue", "link-form-margin"],
    }),
    redLinkCss: setCssClasses({
        classes: ["link-red", "link-form-margin"],
    }),
    ulCss: setCssClasses({
        classes: ["ul"],
    }),
    liCss: setCssClasses({
        classes: ["profile-link-padding"],
    }),
    sidebarCss: setCssClasses({
        classes: ["profile-block__sidebar__button"],
    }),
    avatarCss: setCssClasses({
        classes: ["avatar-block"],
    }),
    avatarInputCss: setCssClasses({
        classes: ["avatar-button"],
    }),
    modalLinkCss: setCssClasses({
        classes: ["link-blue"],
    }),
    modalButtonCss: setCssClasses({
        classes: ["button", "modal-submit"],
    }),
    inputWrapCss: setCssClasses({
        classes: ["profile-input-wrap"],
    }),
}