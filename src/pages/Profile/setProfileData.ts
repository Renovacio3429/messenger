import store from "../../core/Store";

export function setProfileData(content: HTMLInputElement): void {

    switch (content.name) {
        case "email":
        content.value = store.getState().user.email;
        break;
    case "login":
        content.value = store.getState().user.login;
        break;
    case "first_name":
        content.value = store.getState().user.first_name;
        break;
    case "second_name":
        content.value = store.getState().user.second_name;
        break;
    case "display_name":
        content.value = store.getState().user.display_name;
        break;
    case "phone":
        content.value = store.getState().user.phone;
        break;
    }
}