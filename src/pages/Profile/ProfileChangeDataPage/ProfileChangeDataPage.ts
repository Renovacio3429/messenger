import Block from "core/Block";
import template from "../ProfilePage.tmpl";
import { Button } from "components/Button/Button";
import { Form } from "components/Forms/Form";
import { LinkBox } from "components/LinkBox/LinkBox";
import { Modal } from "components/Modal/Modal";
import { profileChangeDataPageProps } from "./ProfileChangeDataPageProps";
import { withUser } from "hocs/withUser";
import store from "core/Store";
import { setProfileData } from "../setProfileData";
import { Avatar } from "components/Avatar/Avatar";
import { Input } from "components/Input/Input";

export type ProfileChangeDataPageType = {
    sidebarButton?: Button;
    avatar: Avatar;
    content: Form;
    linkBox?: LinkBox;
    modal: Modal;
};

export class ProfileChangeDataPage extends Block<ProfileChangeDataPageType> {
    protected init() {
        this.children = profileChangeDataPageProps;
        this.setInputData(this.children.content.children.inputs);
        this.setAvatar(this.children.avatar.children.content);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }

    private setInputData(inputsArr: Input[]): void {
        inputsArr.forEach((fieldset) => {
            const content: HTMLInputElement | undefined | null = fieldset
                .getContent()
                ?.querySelector("input");
            if (content) {
                setProfileData(content);
            }
        });
    }

    private setAvatar(content: Avatar): void {
        if (store.getState().user.avatar) {
            content.setProps({
                input: `https://ya-praktikum.tech/api/v2/resources${
                    store.getState().user.avatar
                }`,
            });
        }
    }
}

export const ProfileChangeData = withUser(
    ProfileChangeDataPage as typeof Block
);
