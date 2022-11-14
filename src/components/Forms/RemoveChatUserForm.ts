import {Form} from "./Form";

export class RemoveChatUserForm extends Form {

    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const removeUserChatFormJson: Record<string, any> = {};
        const userLogin = this.children.userLogin?.getContent();

        if (userLogin) {
            removeUserChatFormJson[userLogin.name] = userLogin.value;
            this.props.submitData(removeUserChatFormJson);
        }
    }
}
