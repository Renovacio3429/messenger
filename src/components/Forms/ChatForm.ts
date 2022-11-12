import {Form} from "./Form";

export class ChatForm extends Form {

    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const message = this.children.inputs.children.content?.getContent();

        if (message && message.value.length > 0) {
            const messageJson: Record<string, any> = {};
            messageJson[message.name] = message.value;
            message.value = '';

            this.props.submitData(messageJson);
        }
    }
}