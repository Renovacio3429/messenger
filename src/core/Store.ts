import {set} from '../utils/helpers';
import EventBus from "./EventBus";

export enum StoreEvents {
    Updated = 'updated',
}

export class Store extends EventBus {
    private state: any = {};

    public set(keypath: string, data: unknown) {
        set(this.state, keypath, data);

        if (this.listeners.updated)
            this.emit(StoreEvents.Updated, this.getState());
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();
export default store;