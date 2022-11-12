import HTTPTransport from "../core/HTTPTransport";

type ParamsType = {
    data?: any;
    headers?: Record<string, string>;
    timeout?: number;
    credentials?: boolean;
}

export default abstract class BaseAPI {
    static API_URL = "https://ya-praktikum.tech/api/v2";
    static headerBase: Record<string, string> = { "Content-Type": "application/json" };
    protected http: HTTPTransport;
    public endpoint: string;

    protected constructor(endpoint: string) {
        this.endpoint = `${BaseAPI.API_URL}${endpoint}`;
        this.http = new HTTPTransport(this.endpoint);
    }

    protected convertParams(params?: ParamsType, formDataType?: boolean): ParamsType {
        const requestParams = params ?? {};

        requestParams.headers = formDataType
            ? requestParams?.headers
            : { ...requestParams?.headers, ...BaseAPI.headerBase };
        requestParams.credentials = true;

        if (params?.data) {
            if (formDataType) {
                const formData = new FormData();

                Object.keys(params.data).forEach((item) => formData.append(item, params.data[item]));

                requestParams.data = formData;
            } else {
                const data = JSON.stringify(params.data);

                requestParams.data = data;
            }
        }

        return requestParams;
    }

    public create(path: "/", params?: ParamsType): Promise<unknown> {
        return this.http.post(path, this.convertParams(params));
    }

    public read(path: "/", params?: ParamsType, identifier?: string): Promise<unknown> {
        if (typeof params === "string") {
            identifier = params;
            params = {};
        }
        return this.http.get(path + (identifier ?? ""), this.convertParams(params));
    }

    public update(path: "/", identifier?: string, params?: ParamsType): Promise<unknown> {
        if (typeof identifier !== "string") {
            params = identifier;
            identifier = undefined;
        }

        return this.http.put(path + (identifier ?? ""), this.convertParams(params));
    }

    public delete(path: "/", identifier: string, params?: any): Promise<unknown> {
        return this.http.delete(path + identifier, this.convertParams(params));
    }
}
