import Block from "../../../core/Block";
import template from "../ProfilePage.tmpl";
import {Button} from "../../../components/Button/Button";
import {Form} from "../../../components/Forms/Form";
import {LinkBox} from "../../../components/LinkBox/LinkBox";
import {Modal} from "../../../components/Modal/Modal";
import {profileChangeDataPageProps} from "./ProfileChangeDataPageProps";
import {withUser} from "../../../hocs/withUser";
import store from "../../../core/Store";
import {setProfileData} from "../setProfileData";

export type ProfileChangeDataPageType = {
    sidebarButton?: Button,
    avatar: Block<any>,
    content: Form,
    linkBox?: LinkBox,
    modal: Modal,
}

export class ProfileChangeDataPage extends Block<ProfileChangeDataPageType> {

    protected init() {
        this.children = profileChangeDataPageProps;
        this.setInputData(this.children.content.children.inputs);
        this.setAvatar(this.children.avatar.children.content);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    private setInputData(inputsArr: Block<any>[]): void {
        inputsArr.forEach(fieldset => {
            const content: HTMLInputElement | undefined | null = fieldset.getContent()?.querySelector("input");
            if (content) {
                setProfileData(content);
            }
        })
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
export const ProfileChangeData = withUser(ProfileChangeDataPage);