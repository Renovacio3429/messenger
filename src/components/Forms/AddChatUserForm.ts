import { Form } from "./Form";

export class AddChatUserForm extends Form {
    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const addUserChatFormJson: Record<string, any> = {};
        const userLogin = this.children.userLogin?.getContent();

        if (userLogin) {
            addUserChatFormJson[userLogin.name] = userLogin.value;
            this.props.submitData(addUserChatFormJson);
        }
    }
}
