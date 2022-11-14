import {withStore} from "./withStore";

export const withState = withStore(state => ({...state}));
