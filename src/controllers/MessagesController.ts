import WSTransport, {WSTransportEvents} from '../core/WSTransport';
import store from '../core/Store';

type MessageType = {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    };
}

class MessagesController {
    private sockets: Map<number, WSTransport> = new Map();

    async connect(id: number, token: string) {
        try {
            if (this.sockets.has(id)) {
                return;
            }

            const userId = store.getState().user.id;
            const wsTransport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);
            this.sockets.set(id, wsTransport);
            await wsTransport.connect();
            this.subscribe(wsTransport, id);
            this.fetchOldMessages(id);
        } catch (e) {
            console.error(e);
        }

    }

    sendMessage(id: number, message: string): void {
        const socket = this.sockets.get(id);

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`);
        }

        socket.send({
            type: 'message',
            content: message,
        });
    }

    fetchOldMessages(id: number): void {
        const socket = this.sockets.get(id);

        if (!socket) {
            throw new Error(`Chat ${id} is not connected`);
        }

        socket.send({type: 'get old', content: '0'});
    }

    private onMessage(id: number, messages: MessageType | MessageType[]): void {
        let messagesToAdd: MessageType[] = [];

        if (Array.isArray(messages)) {
            messagesToAdd = messages.reverse();
        } else {
            messagesToAdd.push(messages);
        }

        const currentMessages = (store.getState().messages || {})[id] || [];
        messagesToAdd = [...currentMessages, ...messagesToAdd];
        store.set(`messages.${id}`, messagesToAdd);
    }

    closeAll() {
        Array.from(this.sockets.values()).forEach((socket) => socket.close());
    }

    private onClose(id: number): void {
        this.sockets.delete(id);
    }

    private subscribe(transport: WSTransport, id: number): void {
        transport.on(WSTransportEvents.Message, message => this.onMessage(id, message));
        transport.on(WSTransportEvents.Close, () => this.onClose(id));
    }
}

const controller = new MessagesController();
export default controller;
