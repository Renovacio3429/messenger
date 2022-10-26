import Block from "../../../core/Block";
import template from "../ProfilePage.tmpl";
import {Button} from "../../../components/Button/Button";
import {Avatar} from "../../../components/Avatar/Avatar";
import {Form} from "../../../components/Form/Form";
import {LinkBox} from "../../../components/LinkBox/LinkBox";
import {Modal} from "../../../components/Modal/Modal";

export type ProfileChangePwdPageType = {
    sidebarButton?: Button,
    avatar: Avatar,
    content: Form,
    linkBox?: LinkBox,
    modal?: Modal,
}

export class ProfileChangePwdPage extends Block<ProfileChangePwdPageType> {
    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}