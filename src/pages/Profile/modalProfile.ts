import {Modal} from "../../components/Modal/Modal";
import {Link} from "../../components/Link/Link";
import {Title} from "../../components/Title/Title";
import {Button} from "../../components/Button/Button";
import {Label} from "../../components/Label/Label";
import {profilePageCssProps} from "./ProfilePageCssProps";

export const modal = new Modal({
    content: [
        new Title({
            title: "Загрузите файл",
        }),
        new Link({
            link: "/profile",
            title: "Выбрать файл на компьютере",
            cssClasses: profilePageCssProps.modalLinkCss,
        }),
        new Button({
            title: "Поменять",
            cssClasses: profilePageCssProps.modalButtonCss,
        }),
        new Label({
            title: "Нужно выбрать файл",
        })
    ]
});