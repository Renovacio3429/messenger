import BaseAPI from "./BaseApi";

export type UserType = {
    id?: number;
    first_name?: string;
    second_name?: string;
    display_name?: string;
    login?: string;
    email?: string;
    phone?: string;
    avatar?: string;
};

export class UsersAPI extends BaseAPI {
    constructor() {
        super("/user");
    }

    updateUser(data: UserType) {
        return this.http.put("/profile", this.convertParams({ data }));
    }

    changeAvatar(data: UserType) {
        return this.http.put(
            "/profile/avatar",
            this.convertParams({ data }, true)
        );
    }

    updatePassword(data: UserType) {
        return this.http.put("/password", this.convertParams({ data }));
    }

    searchUsers(data: UserType) {
        return this.http.post("/search", this.convertParams({ data }));
    }
}

export default new UsersAPI();
