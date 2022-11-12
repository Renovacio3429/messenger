import API, {UsersAPI, UserType} from "../api/UserAPI";
import store from "../core/Store";
import Router from "../core/Router/Router";
import {RoutesConfig} from "../core/Router/RouterConfig";

class UsersController {
    private readonly api: UsersAPI;
    constructor() {
        this.api = API;
    }

    async updateUser(data: UserType) {
        try {
            const response = await this.api.updateUser(data);
            store.set("user", response);
            Router.go(RoutesConfig.Profile);
        } catch (e) {
            console.log(e);
        }
    }

    async updateAvatar(data: UserType) {
        try {
            const response = await this.api.changeAvatar(data);
            store.set("user", response);
        } catch (e) {
            console.log(e);
        }
    }

    async updatePassword(data: UserType) {
        try {
            await this.api.updatePassword(data);
            Router.go(RoutesConfig.Profile);
        } catch (e) {
            console.log(e);
        }
    }

    async getUsersByLogin(data: UserType) {
        try {
            const users = await this.api.searchUsers(data);
            if (users) {
                return users;
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default new UsersController();
