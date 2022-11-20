import BaseAPI from "./BaseApi";

export class ChatsAPI extends BaseAPI {
    constructor() {
        super("/chats");
    }

    getUsers(id: number): Promise<Response> {
        return this.http.get(`/${id}/users`);
    }

    addUsers(id: number, users: number[]): Promise<unknown> {
        const data = {
            users,
            chatId: id,
        };

        return this.http.put("/users", this.convertParams({ data }));
    }

    deleteUsers(id: number, users: number[]): Promise<unknown> {
        const data = {
            users,
            chatId: id,
        };
        return this.http.delete("/users", this.convertParams({ data }));
    }

    async getToken(id: number): Promise<string | undefined> {
        try {
            const response = await this.http.post(
                `/token/${id}`,
                this.convertParams()
            );
            return (response as any).token;
        } catch (e) {
            console.error(e);
        }
    }

    delete(id: string): Promise<unknown> {
        const data = {
            chatId: id,
        };
        return this.http.delete("/", this.convertParams({ data }));
    }
}

export default new ChatsAPI();
