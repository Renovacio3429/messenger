import {Form} from "./Form";

export class AddChatForm extends Form {

    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const addChatFormJson: Record<string, any> = {};
        const chatName = this.children.chatNameInput?.getContent();

        if (chatName) {
            addChatFormJson[chatName.name] = chatName.value;
            this.props.submitData(addChatFormJson);
        }
    }
}