import BaseAPI from "./BaseApi";

export type SignUpType = {
    first_name?: string;
    second_name?: string;
    login?: string;
    email?: string;
    password?: string;
    phone?: string;
}

export class AuthAPI extends BaseAPI {
    constructor() {
        super("/auth");
    }

    signin(data: SignUpType) {
        return this.http.post("/signin", this.convertParams({ data }));
    }

    signup(data: SignUpType) {
        return this.http.post("/signup", this.convertParams({ data }));
    }

    logout() {
        return this.http.post("/logout", this.convertParams());
    }

    read(): Promise<unknown> {
        return this.http.get("/user");
    }
}

export default new AuthAPI();
