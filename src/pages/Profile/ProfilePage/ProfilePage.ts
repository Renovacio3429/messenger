import Block from "../../../core/Block";
import template from "../ProfilePage.tmpl";
import {Button} from "../../../components/Button/Button";
import {Avatar} from "../../../components/Avatar/Avatar";
import {LinkBox} from "../../../components/LinkBox/LinkBox";
import {Modal} from "../../../components/Modal/Modal";
import {Form} from "../../../components/Form/Form";

export type ProfilePageType = {
    sidebarButton: Button,
    avatar: Avatar,
    content: Form,
    linkBox: LinkBox,
    modal: Modal,
}

export class ProfilePage extends Block<ProfilePageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}