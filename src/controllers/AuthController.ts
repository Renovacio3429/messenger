import API, {AuthAPI, SignUpType} from '../api/AuthAPI';

import store from "../core/Store";
import Router from "../core/Router/Router";
import {RoutesConfig} from "../core/Router/RouterConfig";

export class AuthController {
    private readonly api: AuthAPI;

    constructor() {
        this.api = API;
    }

    async signin(data: SignUpType) {
        try {
            await this.api.signin(data);
            Router.go(RoutesConfig.Chat);
        } catch (e: any) {
            console.error(e);
        }
    }

    async signup(data: SignUpType) {
        try {
            await this.api.signup(data);
            Router.go(RoutesConfig.Chat);
        } catch (e: any) {
            console.error(e.message);
        }
    }

    async fetchUser() {
        const user = await this.api.read();
        console.info(user);
        store.set('user', user);
    }

    async logout() {
        try {
            await this.api.logout();
            Router.go(RoutesConfig.Login);
        } catch (e: any) {
            console.error(e.message);
        }
    }
}

export default new AuthController();
