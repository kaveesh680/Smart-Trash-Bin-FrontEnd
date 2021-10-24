import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import {StatusReducer} from "./StatusReducer";

export const rootReducer = combineReducers({
    statusReducer: StatusReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());