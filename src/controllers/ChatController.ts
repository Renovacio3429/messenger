import API from '../api/ChatAPI';
import {ChatsAPI} from '../api/ChatAPI';
import store from '../core/Store';
import MessagesController from './MessagesController';

export class ChatController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async createChat(title: string): Promise<void> {
        try {
            await this.api.create("/", { data: { title } });
            this.fetchChats();
        } catch (e) {
            console.error(e);
        }
    }

    async fetchChats(title?: string): Promise<void> {
        const data = title ? { data: { title } } : undefined;
        try {
            const chats = await this.api.read("/", data);

            if (Array.isArray(chats))
                chats.map(async chat => {
                    const token = await this.getToken(chat.id);
                    await MessagesController.connect(chat.id, token);
                });

            store.set("chats", chats);
        } catch (e) {
            console.error(e);
        }
    }

    async addUsersToChat(id: number, userId: number[]) {
        try {
            await this.api.addUsers(id, userId);
            this.fetchChatUsers(id);
        } catch (e) {
            console.error(e);
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.api.delete(id);
            this.fetchChats();
            store.set("selectedChat", "");
        } catch (e) {
            console.error(e);
        }
    }

    getToken(id: number): Promise<unknown> {
        return this.api.getToken(id);
    }

    selectChat(id: number): void {
        store.set('selectedChat', id);
    }

    async fetchChatUsers(id: number) {
        try {
            const users = await this.api.getUsers(id);
            console.log(users)
            store.set("selectedChatUsers", users);
        } catch (e) {
            console.error(e);
        }
    }

    async deleteUsersFromChat(id: number, userId: number[]) {
        try {
            await this.api.deleteUsers(id, userId);
            this.fetchChatUsers(id);
        } catch (e) {
            console.error(e);
        }
    }
}

export default new ChatController();
