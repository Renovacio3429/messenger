import {Form} from "./Form";

export class AvatarForm extends Form {

    protected handleSubmit(event: Event) {
        super.handleSubmit(event);

        const avatarJson: Record<string, any> = {};
        const avatar = this.children.inputs?.getContent();

        if (avatar) {
            avatarJson[avatar.name] = avatar.files![0];
            this.props.submitData(avatarJson);
        }
    }
}
