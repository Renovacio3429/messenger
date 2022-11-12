import Block from "../../../core/Block";
import template from "../ProfilePage.tmpl";
import {Button} from "../../../components/Button/Button";
import {Form} from "../../../components/Forms/Form";
import {LinkBox} from "../../../components/LinkBox/LinkBox";
import {Modal} from "../../../components/Modal/Modal";
import {profileChangePwdPageProps} from "./ProileChangePwdPageProps";
import {withUser} from "../../../hocs/withUser";
import store from "../../../core/Store";

export type ProfileChangePwdPageType = {
    sidebarButton?: Button,
    avatar: Block<any>,
    content: Form,
    linkBox?: LinkBox,
    modal: Modal,
}

export class ProfileChangePwdPage extends Block<ProfileChangePwdPageType> {

    protected init() {
        this.children = profileChangePwdPageProps;
        this.setAvatar(this.children.avatar.children.content);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    private setAvatar(content: Block<any>): void {
        if (store.getState().user.avatar) {
            content.setProps({
                input: `https://ya-praktikum.tech/api/v2/resources${store.getState().user.avatar}`
            })
        }
    }
}

// @ts-ignore
export const ProfileChangePwd = withUser(ProfileChangePwdPage);